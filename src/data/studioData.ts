export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  location?: string;
  size?: string;
  status: 'Completed' | 'Ongoing' | 'Under Construction';
  heroImage: string;
  photos: string[];
  description: string;
  highlights: string[];
}

export const STUDIO_INFO = {
  name: 'Nedunthatchan Architects',
  shortName: 'Nedunthatchan',
  owner: 'Karthikraja G',
  principalArchitect: 'Ar. Karthikraja G, B.Arch',
  address: '193A, Near Lakshmi Nei Store, Valayakara Street, Kasipalayam, Erode-638009, Tamil Nadu',
  phone: '+91 9500975083',
  phoneRaw: '+919500975083',
  email: 'contact@nedunthatchan.com',
  logo: '/images/logo.png',
  mainHousePhoto: '/images/residence-1.jpg',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=11.3209417,77.7072597+(Nedunthatchan+Architects)&t=&z=17&ie=UTF8&iwloc=&output=embed',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/place/Nedunthatchan+Architects/@11.3209417,77.7072597,17z/data=!4m14!1m7!3m6!1s0x3ba96fd7dbba4535:0xa85e254994acfee5!2sNedunthatchan+Architects!8m2!3d11.3209417!4d77.7072597!16s%2Fg%2F11v_05v9kn!3m5!1s0x3ba96fd7dbba4535:0xa85e254994acfee5!8m2!3d11.3209417!4d77.7072597!16s%2Fg%2F11v_05v9kn',
  coordinates: '11.3209° N, 77.7073° E',
};

export const DEMO_PROJECTS: Project[] = [
  {
    id: 'coimbatore-luxury-duplex',
    title: 'Luxury Duplex Villa',
    subtitle: 'Multi-Level Structural Concrete Framework & Cantilevers',
    category: 'Residential Architecture',
    status: 'Completed',
    heroImage: '/images/duplex-1.jpg',
    photos: [
      '/images/duplex-1.jpg',
      '/images/duplex-2.jpg',
      '/images/duplex-3.jpg',
      '/images/duplex-4.jpg',
      '/images/duplex-5.jpg',
      '/images/duplex-6.jpg',
    ],
    description:
      'An elite luxury duplex villa. Engineered with expansive structural cantilever overhangs, high-ceiling double-height volumes, and climate-calibrated airflow channels.',
    highlights: [
      'Precision structural concrete frame and cantilever projection balconies',
      'Double-height central living volume engineered for regional climate',
      'Heavy-duty foundation engineering with strict quality tolerances',
      'Comprehensive on-site supervision and MEP conduit pre-casting',
    ],
  },
  {
    id: 'coimbatore-velum-mayilum',
    title: 'வேலும் மயிலும் இல்லம் (Velum Mayilum Illam)',
    subtitle: 'Bespoke Residence · Sacred & Contemporary Harmony',
    category: 'Bespoke Residential Architecture',
    status: 'Completed',
    heroImage: '/images/velum-mayilum-1.jpg',
    photos: [
      '/images/velum-mayilum-1.jpg',
      '/images/velum-mayilum-2.jpg',
      '/images/velum-mayilum-3.jpg',
      '/images/velum-mayilum-4.jpg',
      '/images/velum-mayilum-5.jpg',
    ],
    description:
      'Titled "வேலும் மயிலும் இல்லம்", this signature bespoke residence harmonizes sacred traditional Tamil cultural spirituality with state-of-the-art biophilic architecture, tranquil light voids, and passive cross-ventilation.',
    highlights: [
      'Sacred Vastu-aligned layout with spiritual courtyard heart',
      'On-site structural masonry and reinforced framing',
      'Deep sunshade overhangs protecting against western solar heat gain',
      'Passive stack effect air-shafts promoting continuous thermal comfort',
    ],
  },
  {
    id: 'residence-12-02',
    title: 'Residence 12/02',
    subtitle: 'The Concrete & Teak Monolith',
    category: 'Residential Architecture',
    status: 'Completed',
    heroImage: '/images/residence-1.jpg',
    photos: [
      '/images/residence-1.jpg',
      '/images/residence-2.jpg',
      '/images/residence-3.jpg',
    ],
    description:
      'A multi-tier luxury residence balancing raw exposed concrete with warm vertical teak louvers and cantilevered balconies. Designed to capture gentle southwest breezes while deep overhangs shield the interiors from harsh afternoon heat.',
    highlights: [
      'Cantilevered upper floor terraces with frameless glass railings',
      'Vertical teak wood louvers offering dynamic shadow play and cross-ventilation',
      'Integrated biophilic planter boxes with native flora',
      'Sculptural entrance portal framing landscaped forecourt',
    ],
  },
  {
    id: 'chellammal-complex',
    title: 'Chellammal Complex',
    subtitle: 'Commercial Landmark · City Union Bank',
    category: 'Commercial Architecture',
    status: 'Completed',
    heroImage: '/images/chellammal-1.jpg',
    photos: [
      '/images/chellammal-1.jpg',
      '/images/chellammal-2.jpg',
    ],
    description:
      'A landmark multi-storey commercial building housing City Union Bank (CUB). Features an articulated modern geometric facade with structural glazing and climate-calibrated shading fins.',
    highlights: [
      'Striking contemporary street elevation with articulated geometric volumes',
      'Double-glazed facade providing sound insulation and thermal barrier',
      'Dedicated self-service banking atrium and commercial office floors',
      'High structural load capacity engineered for banking operations',
    ],
  },
  {
    id: 'cantilever-monolith-reality',
    title: 'The Cantilever Monolith',
    subtitle: 'Structural Translation from Digital Blueprints to On-Site Reality',
    category: 'Structural Architecture & Execution',
    status: 'Completed',
    heroImage: '/images/cantilever-reality-1.jpg',
    photos: [
      '/images/cantilever-design-1.jpg',
      '/images/cantilever-reality-1.jpg',
      '/images/cantilever-reality-2.jpg',
      '/images/cantilever-reality-3.jpg',
      '/images/cantilever-elevation.jpg',
    ],
    description:
      'A masterclass in structural fidelity, documenting the meticulous translation of modern cantilevered volumes, deep shading overhangs, and climate-calibrated fenestration from digital 3D parametric models to active physical job-site craftsmanship.',
    highlights: [
      'Zero-tolerance alignment between digital 3D model and on-site concrete formwork',
      'Engineered reinforced concrete cantilevers providing passive thermal shading',
      'Precision brick envelope masonry framing natural cross-ventilation apertures',
      'Client-approved master elevation delivered with turnkey quality auditing',
    ],
  },
  {
    id: 'tropical-biophilic-villa',
    title: 'The Tropical Biophilic Villa',
    subtitle: 'Parametric Daylighting, Solar Shading Louvers & Terrace Gardens',
    category: 'Contemporary Tropical Architecture',
    status: 'Completed',
    heroImage: '/images/biophilic-6.jpg',
    photos: [
      '/images/biophilic-6.jpg',
      '/images/biophilic-2.jpg',
      '/images/biophilic-3.jpg',
      '/images/biophilic-4.jpg',
      '/images/biophilic-5.jpg',
      '/images/biophilic-7.jpg',
      '/images/biophilic-8.jpg',
    ],
    description:
      'An avant-garde tropical residence exploring parametric passive-cooling architecture. Featuring vertical teak solar louvers, central daylight courtyards, cascading landscaped terrace gardens, and warm nocturnal illumination tailored for tropical microclimates.',
    highlights: [
      'Parametric solar-shading teak louvers mitigating intense afternoon heat gain',
      'Central light-well courtyards channeling natural glare-free illumination',
      'Cascading terrace gardens and integrated planter boxes for microclimate cooling',
      'Curated nocturnal architectural illumination accentuating modern geometric massing',
    ],
  },
];
