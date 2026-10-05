export interface Project {
  client: string;
  work: string;
  /** Display label. Undefined means the source date is unknown: never invent one. */
  date?: string;
  /** Sort key: year*100 + month. Range dates sort by end year. Undated sorts last. */
  sort: number;
  service: string;
  /** Year bucket used by the filter. Undefined for undated entries. */
  year?: number;
  /** Real site photo from the client gallery, where one is tied to the job. */
  photo?: { src: string; alt: string; width: number; height: number };
}

const p = (client: string, work: string, date: string | null, service: string, sort: number): Project => ({
  client,
  work,
  ...(date ? { date } : {}),
  sort,
  service,
  ...(date ? { year: Math.floor(sort / 100) } : {})
});

const SWAKOP_SHOWER_PHOTO = {
  src: '/images/gallery/white-prefab-building-new-pipework.webp',
  alt: 'Renovated shower block: white prefabricated building with painted walls and new drainage pipework',
  width: 1280,
  height: 960
};

export const PROJECTS: Project[] = [
  p('Swakop Uranium', 'Servicing and maintenance of laundry machine and reefer units', 'Nov 2025', 'refrigeration', 202511),
  {
    ...p('Swakop Uranium', 'Renovation of shower block (coated floors, drainage pipework) and manhole', null, 'construction-renovation', 1),
    photo: SWAKOP_SHOWER_PHOTO
  },
  {
    ...p('Lady Pohamba Private Hospital', 'Repairs and services on laundry machinery: washing machines, tumble dryers and roller ironers', 'Jun 2025', 'maintenance-repairs', 202506)
  },
  p('Epako Clinic, Gobabis', 'Supply and installation of air conditioners and water cooler', 'Feb 2025', 'air-conditioning', 202502),
  p('Da Palm Secondary School, Otjimbingwe', 'Construction of water tank stand', 'Jan 2025', 'construction-renovation', 202501),
  p('Ministry of Health and Social Services', 'Supply and installation of air conditioner and underground electrical cable, Onandjokwe Intermediate Hospital', 'May 2024', 'electrical-works', 202405),
  p('Shield Force Consulting Engineers', 'Construction of electrical services', 'May 2024', 'electrical-works', 202405),
  p('NWR', 'Installation of freezer room at Gross Barmen Resort', 'May 2024', 'refrigeration', 202405),
  p('Epukiro Clinic', 'Repair, maintenance and service of a mortuary', 'Apr 2024', 'refrigeration', 202404),
  p('National Heritage Council of Namibia', 'Electrical and plumbing repair and maintenance at Heroes Acre', 'Feb 2024', 'electrical-works', 202402),
  p('Private client (sub-contract), Oshakati', 'Electrification of house, Ekuku', 'Feb 2024', 'electrical-works', 202402),
  p('Retail shop (sub-contract), Game Complex', 'Power analysis', 'Feb 2024', 'electrical-works', 202402),
  p('Chicken farm (sub-contract)', 'Solar gate for plot 76', 'Feb 2023', 'electrical-works', 202302),
  p('NWR', 'Air conditioning installation and maintenance, Waterberg facility', 'Jul 2022', 'air-conditioning', 202207),
  p('Cenored', 'Renovation of Cenored house, Tsumkwe', 'May 2022', 'construction-renovation', 202205),
  p('Swakop Uranium', 'Supply and delivery of maintenance equipment', '2019 to 2022', 'supply-logistics', 202210),
  p('MTC', 'Renovation of electric fence at old towers, Omaheke Region', 'Sep 2021', 'electrical-works', 202109),
  p('Ministry of Justice', 'House renovation', 'Aug 2021', 'construction-renovation', 202108),
  p('Keetmans Pharmacy', 'Air conditioning installation and electrical work', 'Mar 2021', 'air-conditioning', 202103),
  p('Welwitschia Catering Service', 'Swakop Uranium site service, supplies and maintenance, Erongo Region', '2017 to 2021', 'catering-events', 202110),
  p('GIPF', 'Electrical and air conditioning, Gobabis', 'Jun 2018', 'air-conditioning', 201806),
  p('Omaheke Regional Council', 'Air conditioning service, Gobabis', 'May 2017', 'air-conditioning', 201705),
  p('Ministry of Justice', 'Air conditioning service, Gobabis', 'May 2017', 'air-conditioning', 201705),
  p('Delafi Electrical Service', 'Sub-contract service, Omaruru', 'Mar 2017', 'electrical-works', 201703),
  p('Coca-Cola', 'Fridge maintenance, Omaheke and Erongo', '2016 to 2018', 'refrigeration', 201810),
  p('Ministry of Works', 'Air conditioning installation and maintenance', null, 'air-conditioning', 0),
  p('NORED', 'Construction and maintenance', null, 'construction-renovation', 0)
].sort((a, b) => b.sort - a.sort);

export const FEATURED = PROJECTS.slice(0, 3);

export const projectYears = [...new Set(PROJECTS.map((x) => x.year).filter((y): y is number => typeof y === 'number'))].sort((a, b) => b - a);
