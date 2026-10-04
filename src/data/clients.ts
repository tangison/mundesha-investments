export const CLIENTS = [
  { slug: 'omaheke-regional-council', name: 'Omaheke Regional Council' },
  { slug: 'republic-of-namibia-coat-of-arms', name: 'Republic of Namibia' },
  { slug: 'mtc', name: 'MTC' },
  { slug: 'national-heritage-council-of-namibia', name: 'National Heritage Council of Namibia' },
  { slug: 'omaheke-radio-96-1', name: 'Omaheke Radio 96.1' },
  { slug: 'team-namibia', name: 'Team Namibia' },
  { slug: 'gipf', name: 'GIPF' },
  { slug: 'coca-cola', name: 'Coca-Cola' },
  { slug: 'welwitschia-catering-and-cleaning', name: 'Welwitschia Catering and Cleaning' },
  { slug: 'namibia-wildlife-resorts', name: 'Namibia Wildlife Resorts' },
  { slug: 'swakop-uranium-cgn', name: 'Swakop Uranium (CGN)' },
  { slug: 'cenored', name: 'Cenored' },
  { slug: 'delafi-electrical-services', name: 'Delafi Electrical Services' }
] as const;

export type ClientDef = (typeof CLIENTS)[number];
