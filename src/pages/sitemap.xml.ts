import { SERVICES } from '../data/services';

const staticRoutes = [
  '',
  'about',
  'services',
  'projects',
  'clients',
  'contact',
  'brand',
  'privacy-policy',
  'terms',
  ...SERVICES.map((s) => `services/${s.slug}`)
];

export async function GET({ site }: { site: URL }) {
  const urls = staticRoutes
    .map((r) => {
      const loc = new URL('/' + r, site).href;
      return `  <url><loc>${loc}</loc></url>`;
    })
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
