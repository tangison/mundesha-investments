import { SERVICES } from '../data/services';
import { PROJECTS } from '../data/projects';

interface Entry {
  t: string;
  d: string;
  u: string;
  k?: string;
}

const pages: Entry[] = [
  { t: 'Mundesha Investments', d: 'Technical, construction and support services across Namibia since 2016.', u: '/', k: 'home mundesha investments windhoek' },
  { t: 'All Services', d: 'Air conditioning, refrigeration, electrical, construction, cleaning, catering equipment, supply and logistics, and maintenance across Namibia.', u: '/services', k: 'services trade work' },
  { t: 'Projects', d: 'Selected work for government, mining, retail and hospitality clients across Namibia.', u: '/projects', k: 'projects work portfolio clients' },
  { t: 'Gallery', d: 'Real site photos from Mundesha jobs across Namibia.', u: '/gallery', k: 'gallery photos site work' },
  { t: 'Team', d: 'The Mundesha workforce: technicians, artisans and support staff led by the owner.', u: '/team', k: 'team staff workforce organogram people' },
  { t: 'About Us', d: 'Mundesha Investment One CC is a Windhoek based trade services company founded in 2016.', u: '/about', k: 'about company story owner elia mudesha cc registration' },
  { t: 'Clients', d: 'Organisations that trust Mundesha Investments, from Swakop Uranium to MTC and GIPF.', u: '/clients', k: 'clients references logo wall' },
  { t: 'Company Profile (PDF)', d: 'Read or download our company profile: who we are, services and workforce, clients, projects and contact details.', u: '/company-profile', k: 'company profile pdf document download brochure capabilities' },
  { t: 'Brand', d: 'The Mundesha Investments brand: logo variants, colours and typography.', u: '/brand', k: 'brand logo colours fonts guidelines press' },
  { t: 'Contact', d: 'Call, WhatsApp or email Mundesha Investments, or request a quote online.', u: '/contact', k: 'contact phone whatsapp email quote address windhoek' },
  { t: 'Privacy Policy', d: 'How Mundesha Investments handles the information you send us.', u: '/privacy-policy', k: 'privacy policy data protection' },
  { t: 'Terms', d: 'The terms that apply when you use this website.', u: '/terms', k: 'terms conditions legal' }
];

const serviceEntries: Entry[] = SERVICES.map((s) => ({
  t: `${s.name} Services`,
  d: s.blurb,
  u: `/services/${s.slug}`,
  k: `${s.shortName} ${s.serviceType} ${s.slug.replace(/-/g, ' ')}`
}));

const serviceNames = new Map(SERVICES.map((s) => [s.slug, s.name]));

const projectEntries: Entry[] = PROJECTS.map((p) => ({
  t: p.client,
  d: `${p.work}${p.date ? ` (${p.date})` : ''}`,
  u: '/projects',
  k: `${p.client} ${p.work} ${serviceNames.get(p.service) ?? p.service} ${p.year ?? ''}`
}));

const index = [...pages, ...serviceEntries, ...projectEntries];

export const GET = () =>
  new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
