// Vercel serverless function: POST /api/quote
// Server-side validation, honeypot + time trap, optional Resend email delivery.
// No secrets are ever exposed to the client: this file runs server-side only.

const SERVICES = new Set([
  'air-conditioning',
  'refrigeration',
  'electrical-works',
  'cleaning',
  'construction-renovation',
  'catering-events',
  'supply-logistics',
  'maintenance-repairs',
  'other'
]);

const LEAD_EMAIL = process.env.LEAD_EMAIL || 'info@mundesha.com';

function str(v) {
  return typeof v === 'string' ? v.trim() : '';
}

function validate(body) {
  const errors = {};
  const name = str(body.name);
  const phone = str(body.phone);
  const service = str(body.service);
  const town = str(body.town);
  const message = str(body.message);

  if (name.length < 2 || name.length > 80) errors.name = 'Name is required.';
  if (!/^\+?[0-9][0-9\s-]{7,17}$/.test(phone)) errors.phone = 'A valid phone number is required.';
  if (!SERVICES.has(service)) errors.service = 'Choose a service.';
  if (town.length > 60) errors.town = 'Town is too long.';
  if (message.length < 5 || message.length > 2000) errors.message = 'A short message is required.';

  return { errors, values: { name, phone, service, town, message } };
}

async function sendEmail(values) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { delivered: false, reason: 'email-not-configured' };

  const from = process.env.RESEND_FROM || 'Mundesha Website <onboarding@resend.dev>';
  const text = [
    'New quote request from the Mundesha Investments website:',
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
    `Service: ${values.service}`,
    values.town ? `Town: ${values.town}` : null,
    `Message: ${values.message}`
  ]
    .filter(Boolean)
    .join('\n');

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [LEAD_EMAIL],
        reply_to: undefined,
        subject: `Quote request: ${values.name}`,
        text
      })
    });
    if (!res.ok) return { delivered: false, reason: `email-http-${res.status}` };
    return { delivered: true };
  } catch {
    return { delivered: false, reason: 'email-send-failed' };
  }
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed. Use POST.' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ ok: false, error: 'Invalid JSON body.' });
    }
  }
  if (!body || typeof body !== 'object') {
    return res.status(400).json({ ok: false, error: 'Invalid request body.' });
  }

  // Honeypot: real users never see this field. Bots that fill it get a fake success.
  if (str(body.company).length > 0) {
    return res.status(200).json({ ok: true, delivered: true });
  }

  // Time trap: submission within 2.5 seconds of page load is bot speed.
  const ts = Number(body.ts);
  if (!Number.isFinite(ts) || Date.now() - ts < 2500 || Date.now() - ts > 86400000) {
    return res.status(200).json({ ok: true, delivered: false, reason: 'timing' });
  }

  const { errors, values } = validate(body);
  if (Object.keys(errors).length > 0) {
    return res.status(422).json({ ok: false, error: 'Validation failed.', errors });
  }

  const result = await sendEmail(values);
  return res.status(200).json({ ok: true, delivered: result.delivered, reason: result.reason });
}
