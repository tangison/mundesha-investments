export const SITE = {
  name: 'Mundesha Investments',
  legalName: 'Mundesha Investment One CC',
  tagline: 'Your needs, Our Business',
  founded: 2016,
  founder: 'Elia Hangeinge Mudesha',
  ownerExperience: 'Over 20 years in electrical, air conditioning and refrigeration',
  about:
    'Mundesha Investment One CC was founded in 2016 by Mr. Elia Hangeinge Mudesha. We offer our services all around Namibia. We believe in quality of work and give our customers good value for their money.',
  address: 'Windhoek, Namibia',
  phones: [
    { display: '+264 81 277 7553', tel: '+264812777553' },
    { display: '+264 85 277 7553', tel: '+264852777553' }
  ],
  whatsapp: 'https://wa.me/264812777553',
  email: 'info@mundesha.com',
  instagram: {
    handle: 'Mundesha_investment_one',
    url: 'https://www.instagram.com/Mundesha_investment_one'
  }
} as const;

// Regions inferred from project towns in the company profile.
// Flagged in HANDOVER.md for client confirmation before launch.
export const REGIONS = ['Omaheke', 'Erongo', 'Otjozondjupa', 'Oshana', 'Oshikoto', 'Khomas'] as const;

export const WORKFORCE = [
  'Technicians',
  'Artisans',
  'Welders',
  'Boilermakers',
  'Fitters and Turners',
  'Safety Officers',
  'Bricklayers',
  'Plumbers',
  'General Workers',
  'Electricians',
  'Consultants',
  'Engineering Services'
] as const;

export const NAV = [
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
] as const;

export const STUDIO_CREDIT = { label: 'Made by Tangison Studio', url: 'https://studio.tangison.com' } as const;
