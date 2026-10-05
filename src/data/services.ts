export interface ServiceDef {
  slug: string;
  name: string;
  shortName: string;
  blurb: string;
  intro: string[];
  points: string[];
  /** Keys into images.json photos, empty where no job photo exists. */
  photos: string[];
  /** Dot path into images.json accents, for art where no job photo exists. */
  accent?: string;
  metaTitle: string;
  metaDescription: string;
  serviceType: string;
}

export const SERVICES: ServiceDef[] = [
  {
    slug: 'air-conditioning',
    name: 'Air Conditioning',
    shortName: 'Air Conditioning',
    blurb: 'Supply, installation and servicing of split units for offices, clinics, schools and government buildings.',
    intro: [
      'We supply, install and service split air conditioning units for offices, clinics, schools and government buildings. Our technicians size each unit to the room, mount it cleanly and commission it before handover, so the system cools properly from day one.',
      'Regular servicing keeps units efficient and extends their working life. We clean filters and coils, check gas levels and repair faults on units installed by us or by others. Work has taken us from Gobabis and Windhoek to resort facilities at Waterberg.'
    ],
    points: [
      'Supply of split air conditioning units',
      'Installation for offices, clinics, schools and government buildings',
      'Servicing, maintenance and repairs',
      'Filter, coil and gas checks'
    ],
    photos: ['ac-office-install', 'ac-manifold-service', 'ac-rural-condensers'],
    metaTitle: 'Air Conditioning and Refrigeration | Mundesha Investments',
    metaDescription:
      'Supply, installation and servicing of split air conditioning units for offices, clinics, schools and government buildings across Namibia.',
    serviceType: 'Air conditioning supply, installation and servicing'
  },
  {
    slug: 'refrigeration',
    name: 'Refrigeration',
    shortName: 'Refrigeration',
    blurb: 'Cold rooms, freezer rooms, reefer unit service and commercial fridge maintenance.',
    intro: [
      'Cold rooms, freezer rooms and reefer units keep stock safe and businesses trading. We install new cold and freezer rooms, service reefer units and maintain commercial fridges for retailers and hospitality clients.',
      'Our team also repairs and maintains mortuary refrigeration, including repair and maintenance work at clinics. Recent work includes a freezer room installation at Gross Barmen Resort and reefer servicing for Swakop Uranium.'
    ],
    points: [
      'Cold room and freezer room installation',
      'Reefer unit service',
      'Commercial fridge maintenance',
      'Mortuary refrigeration repair and service'
    ],
    photos: ['freezer-room-condensing-unit', 'condenser-gauges', 'display-fridge-service'],
    metaTitle: 'Cold Room Installation Namibia | Mundesha Investments',
    metaDescription:
      'Cold rooms, freezer rooms, reefer unit service and commercial fridge maintenance across Namibia, plus mortuary refrigeration service.',
    serviceType: 'Refrigeration and cold room services'
  },
  {
    slug: 'electrical-works',
    name: 'Electrical Works',
    shortName: 'Electrical Works',
    blurb: 'Installations, distribution boards, underground cable, solar gates and electric fence repair.',
    intro: [
      'From new installations to fault finding, our electricians work on distribution boards, underground cable and complete house electrification. We build to safe, tidy standards and test before we leave site.',
      'We also install solar powered gates, repair electric fencing and carry out power analysis for shops and offices. Recent projects range from maintenance at Heroes Acre for the National Heritage Council to house electrification in Oshakati.'
    ],
    points: [
      'Electrical installations',
      'Distribution boards',
      'Underground cable',
      'Solar gates',
      'Electric fence repair',
      'Power analysis'
    ],
    photos: ['db-wiring', 'cable-trench', 'multimeter-test'],
    metaTitle: 'Electrician in Windhoek | Mundesha Investments',
    metaDescription:
      'Electrical installations, distribution boards, underground cable, solar gates and electric fence repair across Namibia. Over 20 years of experience.',
    serviceType: 'Electrical installation and maintenance'
  },
  {
    slug: 'cleaning',
    name: 'Cleaning Services',
    shortName: 'Cleaning Services',
    blurb: 'Commercial cleaning delivered to site.',
    intro: [
      'Our cleaning teams come to your premises, bringing their own equipment and working to your schedule. We clean offices, clinics, schools, retail spaces and site facilities.',
      'Cleaning can be booked as a one-off deep clean or as a regular service. We have delivered site services for mining clients in the Erongo Region, so we understand site rules, safety briefings and shift work.'
    ],
    points: [
      'Commercial cleaning delivered to site',
      'One-off and scheduled services',
      'Offices, clinics, schools and retail',
      'Site and camp cleaning'
    ],
    photos: ['office-mopping', 'cleaning-team', 'floor-scrubber'],
    accent: 'Brand-Backgrounds.04_white-wall-red-band',
    metaTitle: 'Commercial Cleaning Services Namibia | Mundesha Investments',
    metaDescription:
      'Commercial cleaning delivered to site for offices, clinics, schools and retail across Namibia. One-off deep cleans and scheduled services.',
    serviceType: 'Commercial cleaning services'
  },
  {
    slug: 'construction-renovation',
    name: 'Construction, Renovation and Tiling',
    shortName: 'Construction and Tiling',
    blurb: 'Renovations, water tank stands, brickwork and tiling.',
    intro: [
      'We renovate houses and buildings, build water tank stands and handle brickwork and tiling. Our bricklayers, plumbers and general workers take projects from preparation to a clean handover.',
      'Recent work includes a water tank stand for Da Palm Secondary School in Otjimbingwe, a house renovation in Tsumkwe for Cenored and electrical and plumbing repairs at Heroes Acre.'
    ],
    points: [
      'Renovations',
      'Water tank stands',
      'Brickwork and plastering',
      'Tiling',
      'Plumbing repairs'
    ],
    photos: ['bricklaying', 'floor-tiling', 'water-tank-stand'],
    metaTitle: 'Construction and Renovation Namibia | Mundesha Investments',
    metaDescription:
      'Renovations, water tank stands, brickwork and tiling across Namibia. Houses, schools and public buildings, taken from preparation to handover.',
    serviceType: 'Construction, renovation and tiling'
  },
  {
    slug: 'catering-events',
    name: 'Catering and Event Management',
    shortName: 'Catering and Events',
    blurb: 'Catering and events for corporate and site clients.',
    intro: [
      'We provide catering and event management for corporate and site clients. That covers food service for crews and guests, and the planning that keeps an event running on time.',
      'Between 2017 and 2021 we delivered site service, supplies and maintenance support at the Swakop Uranium mine in the Erongo Region together with Welwitschia Catering Service. That experience shows in how we plan, staff and run events.',
      'Catering is often booked alongside our cleaning and supply services for site camps and functions, so one contractor handles the kitchen, the kitchen cleaning and the groceries that keep it stocked. For corporate events we handle the staffing and the schedule, and we bring in the equipment the venue does not have.'
    ],
    points: [
      'Corporate and site catering',
      'Event management',
      'Site camps and crew catering',
      'Supplies and logistics support'
    ],
    photos: ['commercial-kitchen'],
    accent: 'Namibia-Backdrops.02_dunes-sunrise',
    metaTitle: 'Catering and Events Namibia | Mundesha Investments',
    metaDescription:
      'Catering and event management for corporate and site clients across Namibia, with mining site service experience in the Erongo Region.',
    serviceType: 'Catering and event management'
  },
  {
    slug: 'supply-logistics',
    name: 'Supply, Delivery and Logistics',
    shortName: 'Supply and Logistics',
    blurb: 'Supply and delivery of maintenance equipment.',
    intro: [
      'We supply and deliver maintenance equipment to towns and sites across Namibia. Clients tell us what they need, we source it and we deliver to their door or gate.',
      'From 2019 to 2022 we supplied and delivered maintenance equipment for Swakop Uranium. That contract taught us to plan routes, keep records and deliver on schedule.'
    ],
    points: [
      'Supply of maintenance equipment',
      'Delivery to towns and sites across Namibia',
      'Order tracking and records',
      'Long-term supply contracts'
    ],
    photos: ['delivery-truck', 'warehouse-packing', 'forklift-pallet'],
    accent: 'Namibia-Backdrops.05_bushveld-road',
    metaTitle: 'Supply and Delivery Services Namibia | Mundesha Investments',
    metaDescription:
      'Supply and delivery of maintenance equipment across Namibia, backed by a three-year mining supply contract with Swakop Uranium.',
    serviceType: 'Supply, delivery and logistics'
  },
  {
    slug: 'maintenance-repairs',
    name: 'Maintenance and Repairs',
    shortName: 'Maintenance and Repairs',
    blurb: 'Laundry machinery, hot water systems, electrical equipment and general building maintenance.',
    intro: [
      'We keep equipment and buildings working. Our maintenance teams service and repair industrial laundry machines, hot water systems and electrical equipment, and handle general building maintenance for clients who want one contractor for the job.',
      'Recent work includes laundry machinery repairs and services for Lady Pohamba Private Hospital in Windhoek, covering washing machines, tumble dryers and roller ironers from Miele Professional, Girbau and Alliance Speed Queen. We also serviced laundry machines and reefer units at the Swakop Uranium mine.'
    ],
    points: [
      'Industrial laundry machinery servicing and repairs',
      'Hot water systems',
      'Electrical equipment maintenance',
      'General building maintenance'
    ],
    photos: ['washer-service-technician-vest', 'washer-electrical-repair', 'industrial-washers-service-tools'],
    metaTitle: 'Maintenance and Repairs Namibia | Mundesha Investments',
    metaDescription:
      'Laundry machinery, hot water systems, electrical equipment and general building maintenance across Namibia, with hospital and mining site experience.',
    serviceType: 'Maintenance and repair services'
  }
];

export const SERVICE_BY_SLUG = new Map(SERVICES.map((s) => [s.slug, s]));

export const SERVICE_ACCENTS: Record<string, { cat: string; file: string }> = {
  'air-conditioning': { cat: 'Trade-Details', file: '04_split-ac' },
  refrigeration: { cat: 'Trade-Details', file: '01_copper-pipes' },
  'electrical-works': { cat: 'Trade-Details', file: '03_breaker-board' },
  cleaning: { cat: 'Brand-Backgrounds', file: '04_white-wall-red-band' },
  'construction-renovation': { cat: 'Trade-Details', file: '05_hand-tools' },
  'catering-events': { cat: 'Namibia-Backdrops', file: '02_dunes-sunrise' },
  'supply-logistics': { cat: 'Namibia-Backdrops', file: '05_bushveld-road' },
  'maintenance-repairs': { cat: 'Trade-Details', file: '02_gauge-set' }
};
