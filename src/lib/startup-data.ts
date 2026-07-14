export interface Startup {
  slug: string;
  name: string;
  logo: string;
  coverImage: string;
  tagline: string;
  description: string;
  industry: string;
  stage: string;
  status: string;
  location: string;
  website: string;
  email: string;
  phone?: string;
  verified: boolean;
  
  // Company Information
  founders: Founder[];
  yearFounded: number;
  headquarters: string;
  employees: number;
  businessModel: string;
  
  // About Section
  mission: string;
  vision: string;
  problem: string;
  technology: string;
  communityImpact: string;
  
  // Products & Services
  products: Product[];
  
  // Gallery
  gallery: string[];
  
  // Timeline
  timeline: TimelineMilestone[];
  
  // Impact Metrics
  metrics: ImpactMetric[];
  
  // SDG Alignment
  sdgs: number[];
  
  // Partners
  partners: Partner[];
  
  // Team
  team: TeamMember[];
  
  // Awards
  awards: Award[];
  
  // Videos
  videos: Video[];
  
  // News
  news: NewsArticle[];
  
  // Documents
  documents: Document[];
}

export interface Founder {
  name: string;
  role: string;
  bio?: string;
  linkedin?: string;
  image?: string;
}

export interface Product {
  name: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
  technology: string[];
}

export interface TimelineMilestone {
  date: string;
  title: string;
  description: string;
  icon?: string;
}

export interface ImpactMetric {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface Partner {
  name: string;
  logo: string;
  website?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export interface Award {
  title: string;
  organization: string;
  date: string;
  description?: string;
  image?: string;
}

export interface Video {
  title: string;
  youtubeId: string;
  description?: string;
}

export interface NewsArticle {
  title: string;
  publisher: string;
  date: string;
  url: string;
  image?: string;
  excerpt?: string;
}

export interface Document {
  title: string;
  type: 'pdf' | 'brochure' | 'pitch-deck' | 'report';
  url: string;
}

const startups: Startup[] = [
  {
    slug: 'technova-solutions',
    name: 'TechNova Solutions',
    logo: '🚀',
    coverImage: '/images/startups/technova-cover.jpg',
    tagline: 'AI-Powered Agriculture for Modern Farmers',
    description: 'TechNova Solutions provides AI-powered agricultural technology helping farmers optimize crop yields through data analytics and machine learning.',
    industry: 'Technology',
    stage: 'Growth',
    status: 'Active',
    location: 'Surigao City, Surigao del Norte',
    website: 'https://technova.ph',
    email: 'hello@technova.ph',
    verified: true,
    
    founders: [
      {
        name: 'Alex Garcia',
        role: 'CEO & Founder',
        bio: 'Agricultural engineer with expertise in AI and data science.',
        linkedin: 'https://linkedin.com/in/alex-garcia',
        image: '/images/team/alex-garcia.jpg',
      },
    ],
    
    yearFounded: 2022,
    headquarters: 'Surigao City',
    employees: 12,
    businessModel: 'B2B',
    
    mission: 'To empower farmers with cutting-edge technology for sustainable and profitable agriculture.',
    vision: 'A future where every farmer has access to AI-driven insights for optimal crop management.',
    problem: 'Farmers lack access to real-time data and predictive analytics for crop optimization.',
    technology: 'Machine learning, IoT sensors, satellite imagery, mobile applications.',
    communityImpact: 'Working with 50+ local farmers to improve yields and reduce costs.',
    
    products: [
      {
        name: 'CropAI',
        description: 'AI-powered crop monitoring and prediction system.',
        image: '/images/products/cropai.jpg',
        features: ['Real-time monitoring', 'Yield prediction', 'Disease detection', 'Weather alerts'],
        benefits: ['Increased yields', 'Reduced costs', 'Early warning systems', 'Data-driven decisions'],
        technology: ['Machine learning', 'IoT sensors', 'Mobile app', 'Cloud analytics'],
      },
    ],
    
    gallery: [
      '/images/gallery/technova-1.jpg',
      '/images/gallery/technova-2.jpg',
    ],
    
    timeline: [
      { date: '2022-01', title: 'Idea', description: 'Founded to address agricultural challenges.' },
      { date: '2022-06', title: 'Prototype', description: 'First AI prototype tested with local farmers.' },
      { date: '2023-01', title: 'Incubation', description: 'Joined PRIME SDN program.' },
      { date: '2023-08', title: 'Launch', description: 'CropAI commercially launched.' },
    ],
    
    metrics: [
      { label: 'Farmers Served', value: 50, suffix: '+' },
      { label: 'Hectares Monitored', value: 500, suffix: '+' },
      { label: 'Yield Increase', value: 30, suffix: '%' },
    ],
    
    sdgs: [2, 9],
    
    partners: [
      { name: 'DA', logo: '/images/partners/da.png' },
      { name: 'Local LGUs', logo: '/images/partners/lgu.png' },
    ],
    
    team: [
      { name: 'Alex Garcia', role: 'CEO', bio: 'Agricultural engineer with AI expertise.', image: '/images/team/alex-garcia.jpg' },
    ],
    
    awards: [],
    videos: [],
    news: [],
    documents: [],
  },
  {
    slug: 'ecosurigao',
    name: 'EcoSurigao',
    logo: '🌱',
    coverImage: '/images/startups/ecosurigao-cover.jpg',
    tagline: 'Transforming Waste into Sustainable Solutions',
    description: 'EcoSurigao is a circular economy startup focused on plastic waste recycling and sustainable packaging solutions for Surigao del Norte.',
    industry: 'Sustainability',
    stage: 'Growth',
    status: 'Active',
    location: 'Surigao City, Surigao del Norte',
    website: 'https://ecosurigao.com',
    email: 'hello@ecosurigao.com',
    phone: '+63 912 345 6789',
    verified: true,
    
    founders: [
      {
        name: 'Maria Santos',
        role: 'CEO & Co-Founder',
        bio: 'Environmental scientist with 10+ years in waste management.',
        linkedin: 'https://linkedin.com/in/maria-santos',
        image: '/images/team/maria-santos.jpg',
      },
      {
        name: 'Juan Reyes',
        role: 'CTO & Co-Founder',
        bio: 'Engineer specializing in recycling technology.',
        linkedin: 'https://linkedin.com/in/juan-reyes',
        image: '/images/team/juan-reyes.jpg',
      },
    ],
    
    yearFounded: 2021,
    headquarters: 'Surigao City',
    employees: 15,
    businessModel: 'B2B & B2C',
    
    mission: 'To create a zero-waste Surigao del Norte through innovative recycling solutions and community engagement.',
    vision: 'A sustainable future where waste becomes a valuable resource.',
    problem: 'Surigao del Norte faces significant plastic waste challenges with limited recycling infrastructure.',
    technology: 'Advanced plastic sorting and processing technology, AI-powered waste management.',
    communityImpact: 'Working with local communities to establish collection points and education programs.',
    
    products: [
      {
        name: 'EcoBricks',
        description: 'Construction bricks made from recycled plastic waste.',
        image: '/images/products/ecobricks.jpg',
        features: ['Durable', 'Weather-resistant', 'Cost-effective', 'Eco-friendly'],
        benefits: ['Reduces plastic waste', 'Provides affordable building materials', 'Creates jobs'],
        technology: ['Compression molding', 'Plastic sorting', 'Quality testing'],
      },
      {
        name: 'Sustainable Packaging',
        description: 'Biodegradable packaging solutions for local businesses.',
        image: '/images/products/packaging.jpg',
        features: ['100% biodegradable', 'Customizable', 'Food-safe', 'Affordable'],
        benefits: ['Reduces plastic pollution', 'Supports local businesses', 'Meets regulations'],
        technology: ['Biopolymer processing', 'Molding', 'Printing'],
      },
    ],
    
    gallery: [
      '/images/gallery/ecosurigao-1.jpg',
      '/images/gallery/ecosurigao-2.jpg',
      '/images/gallery/ecosurigao-3.jpg',
      '/images/gallery/ecosurigao-4.jpg',
    ],
    
    timeline: [
      { date: '2021-01', title: 'Idea Conception', description: 'Founded with a vision to solve plastic waste in Surigao.' },
      { date: '2021-06', title: 'Prototype Development', description: 'First EcoBrick prototype created and tested.' },
      { date: '2022-01', title: 'Incubation', description: 'Accepted into PRIME SDN incubation program.' },
      { date: '2022-08', title: 'Seed Funding', description: 'Received initial funding from DOST.' },
      { date: '2023-01', title: 'Launch', description: 'Officially launched EcoBricks product line.' },
      { date: '2023-12', title: 'Expansion', description: 'Expanded operations to 3 municipalities.' },
    ],
    
    metrics: [
      { label: 'Plastic Recycled (tons)', value: 150, suffix: ' tons' },
      { label: 'Communities Served', value: 12, suffix: '' },
      { label: 'Jobs Created', value: 45, suffix: '' },
      { label: 'CO₂ Reduced (tons)', value: 200, suffix: ' tons' },
    ],
    
    sdgs: [8, 9, 11, 12, 13],
    
    partners: [
      { name: 'DOST', logo: '/images/partners/dost.png', website: 'https://dost.gov.ph' },
      { name: 'DTI', logo: '/images/partners/dti.png', website: 'https://dti.gov.ph' },
      { name: 'Provincial Government', logo: '/images/partners/provincial.png' },
      { name: 'Caraga State University', logo: '/images/partners/csu.png', website: 'https://carsu.edu.ph' },
    ],
    
    team: [
      { name: 'Maria Santos', role: 'CEO', bio: 'Environmental scientist with 10+ years experience.', image: '/images/team/maria-santos.jpg' },
      { name: 'Juan Reyes', role: 'CTO', bio: 'Engineer specializing in recycling technology.', image: '/images/team/juan-reyes.jpg' },
      { name: 'Ana Cruz', role: 'Operations Manager', bio: 'Operations expert with manufacturing background.', image: '/images/team/ana-cruz.jpg' },
      { name: 'Carlos Mendoza', role: 'Marketing Lead', bio: 'Marketing specialist focused on sustainability.', image: '/images/team/carlos-mendoza.jpg' },
    ],
    
    awards: [
      { title: 'Best Green Startup', organization: 'DOST', date: '2023-05', description: 'Recognized for innovative waste solutions.' },
      { title: 'Innovation Grant', organization: 'DTI', date: '2022-11', description: 'Received innovation grant for scaling operations.' },
    ],
    
    videos: [
      { title: 'EcoSurigao Story', youtubeId: 'dQw4w9WgXcQ', description: 'Learn about our mission and impact.' },
    ],
    
    news: [
      { title: 'EcoSurigao Wins Green Startup Award', publisher: 'Philippine Daily Inquirer', date: '2023-05-15', url: 'https://example.com', excerpt: 'Local startup recognized for environmental innovation.' },
      { title: 'Transforming Waste in Surigao', publisher: 'Mindanao Times', date: '2023-03-20', url: 'https://example.com', excerpt: 'How EcoSurigao is making a difference.' },
    ],
    
    documents: [
      { title: 'Company Profile', type: 'pdf', url: '/documents/ecosurigao-profile.pdf' },
      { title: 'Pitch Deck', type: 'pitch-deck', url: '/documents/ecosurigao-pitch.pdf' },
    ],
  },
  {
    slug: 'marinetech-ph',
    name: 'MarineTech PH',
    logo: '🌊',
    coverImage: '/images/startups/marinetech-cover.jpg',
    tagline: 'Innovating Marine Conservation Through Technology',
    description: 'MarineTech PH develops AI-powered solutions for marine ecosystem monitoring, coral reef protection, and sustainable fishing practices.',
    industry: 'Marine Technology',
    stage: 'Series A',
    status: 'Active',
    location: 'Surigao City, Surigao del Norte',
    website: 'https://marinetech.ph',
    email: 'info@marinetech.ph',
    verified: true,
    
    founders: [
      {
        name: 'Roberto Tan',
        role: 'CEO & Founder',
        bio: 'Marine biologist and technology enthusiast.',
        linkedin: 'https://linkedin.com/in/roberto-tan',
        image: '/images/team/roberto-tan.jpg',
      },
    ],
    
    yearFounded: 2020,
    headquarters: 'Surigao City',
    employees: 25,
    businessModel: 'B2B',
    
    mission: 'To protect marine ecosystems through innovative technology solutions.',
    vision: 'Healthy oceans powered by technology and community action.',
    problem: 'Coral reef degradation and overfishing threaten marine biodiversity.',
    technology: 'AI-powered monitoring, IoT sensors, satellite imagery analysis.',
    communityImpact: 'Partnering with fishing communities for sustainable practices.',
    
    products: [
      {
        name: 'ReefMonitor',
        description: 'AI-powered coral reef monitoring system.',
        image: '/images/products/reefmonitor.jpg',
        features: ['Real-time monitoring', 'AI analysis', 'Mobile app', 'Data dashboard'],
        benefits: ['Early warning system', 'Research data', 'Conservation planning'],
        technology: ['Computer vision', 'IoT sensors', 'Machine learning'],
      },
    ],
    
    gallery: [
      '/images/gallery/marinetech-1.jpg',
      '/images/gallery/marinetech-2.jpg',
    ],
    
    timeline: [
      { date: '2020-03', title: 'Idea', description: 'Founded to address marine conservation challenges.' },
      { date: '2020-09', title: 'Prototype', description: 'First monitoring prototype tested.' },
      { date: '2021-04', title: 'Incubation', description: 'Joined PRIME SDN program.' },
      { date: '2022-02', title: 'Funding', description: 'Series A funding secured.' },
      { date: '2022-08', title: 'Launch', description: 'ReefMonitor commercially launched.' },
    ],
    
    metrics: [
      { label: 'Reefs Monitored', value: 25, suffix: '' },
      { label: 'Fishing Partners', value: 50, suffix: '' },
      { label: 'Data Points Collected', value: 1000000, suffix: '+' },
      { label: 'Species Protected', value: 150, suffix: '+' },
    ],
    
    sdgs: [13, 14],
    
    partners: [
      { name: 'DENR', logo: '/images/partners/denr.png' },
      { name: 'BFAR', logo: '/images/partners/bfar.png' },
      { name: 'Local Government Units', logo: '/images/partners/lgu.png' },
    ],
    
    team: [
      { name: 'Roberto Tan', role: 'CEO', bio: 'Marine biologist and technology enthusiast.', image: '/images/team/roberto-tan.jpg' },
      { name: 'Elena Rodriguez', role: 'CTO', bio: 'AI and machine learning expert.', image: '/images/team/elena-rodriguez.jpg' },
    ],
    
    awards: [
      { title: 'Marine Innovation Award', organization: 'DENR', date: '2023-06', description: 'Excellence in marine conservation technology.' },
    ],
    
    videos: [],
    news: [],
    documents: [],
  },
  {
    slug: 'healthconnect',
    name: 'HealthConnect',
    logo: '🏥',
    coverImage: '/images/startups/healthconnect-cover.jpg',
    tagline: 'Bridging Healthcare Gaps in Remote Communities',
    description: 'HealthConnect provides telemedicine solutions and health tech platforms to connect remote communities in Surigao del Norte with quality healthcare services.',
    industry: 'Health Technology',
    stage: 'Growth',
    status: 'Active',
    location: 'Surigao City, Surigao del Norte',
    website: 'https://healthconnect.ph',
    email: 'contact@healthconnect.ph',
    verified: true,
    
    founders: [
      {
        name: 'Dr. Cristina Lee',
        role: 'CEO & Founder',
        bio: 'Medical doctor with public health expertise.',
        linkedin: 'https://linkedin.com/in/cristina-lee',
        image: '/images/team/cristina-lee.jpg',
      },
    ],
    
    yearFounded: 2021,
    headquarters: 'Surigao City',
    employees: 20,
    businessModel: 'B2G & B2B',
    
    mission: 'To ensure equitable access to quality healthcare for all communities in Surigao del Norte.',
    vision: 'A healthier Surigao through accessible and innovative healthcare solutions.',
    problem: 'Remote communities lack access to specialized healthcare and medical expertise.',
    technology: 'Telemedicine platform, mobile health apps, AI diagnostics.',
    communityImpact: 'Serving 15 remote barangays with virtual consultations.',
    
    products: [
      {
        name: 'TeleMed Platform',
        description: 'Virtual consultation platform connecting patients with doctors.',
        image: '/images/products/telemed.jpg',
        features: ['Video consultations', 'EMR integration', 'Prescription management', 'Appointment scheduling'],
        benefits: ['Accessible healthcare', 'Reduced travel costs', 'Faster diagnosis'],
        technology: ['WebRTC', 'HIPAA-compliant storage', 'Mobile apps'],
      },
    ],
    
    gallery: [
      '/images/gallery/healthconnect-1.jpg',
      '/images/gallery/healthconnect-2.jpg',
      '/images/gallery/healthconnect-3.jpg',
    ],
    
    timeline: [
      { date: '2021-02', title: 'Idea', description: 'Founded to address healthcare access gaps.' },
      { date: '2021-08', title: 'Prototype', description: 'Telemedicine platform prototype developed.' },
      { date: '2022-03', title: 'Incubation', description: 'Joined PRIME SDN incubation.' },
      { date: '2022-10', title: 'Pilot Launch', description: 'Pilot program in 5 barangays.' },
      { date: '2023-05', title: 'Full Launch', description: 'Expanded to 15 barangays.' },
    ],
    
    metrics: [
      { label: 'Patients Served', value: 5000, suffix: '+' },
      { label: 'Consultations', value: 15000, suffix: '+' },
      { label: 'Barangays Served', value: 15, suffix: '' },
      { label: 'Doctors Connected', value: 50, suffix: '+' },
    ],
    
    sdgs: [3, 9, 10],
    
    partners: [
      { name: 'DOH', logo: '/images/partners/doh.png' },
      { name: 'PHILHEALTH', logo: '/images/partners/philhealth.png' },
      { name: 'Local Health Offices', logo: '/images/partners/lho.png' },
    ],
    
    team: [
      { name: 'Dr. Cristina Lee', role: 'CEO', bio: 'Medical doctor with public health expertise.', image: '/images/team/cristina-lee.jpg' },
      { name: 'Mark Santos', role: 'CTO', bio: 'Health technology specialist.', image: '/images/team/mark-santos.jpg' },
    ],
    
    awards: [
      { title: 'Health Innovation Grant', organization: 'DOH', date: '2023-04', description: 'Grant for telemedicine expansion.' },
    ],
    
    videos: [],
    news: [],
    documents: [],
  },
  {
    slug: 'edulearn-surigao',
    name: 'EduLearn Surigao',
    logo: '📚',
    coverImage: '/images/startups/edulearn-cover.jpg',
    tagline: 'Quality Education for Every Learner',
    description: 'EduLearn Surigao provides digital learning platforms and educational content to underserved communities in Surigao del Norte.',
    industry: 'Education',
    stage: 'Early Stage',
    status: 'Active',
    location: 'Surigao City, Surigao del Norte',
    website: 'https://edulearn.ph',
    email: 'info@edulearn.ph',
    verified: true,
    
    founders: [
      {
        name: 'Sarah Martinez',
        role: 'CEO & Founder',
        bio: 'Educator with passion for digital learning.',
        linkedin: 'https://linkedin.com/in/sarah-martinez',
        image: '/images/team/sarah-martinez.jpg',
      },
    ],
    
    yearFounded: 2023,
    headquarters: 'Surigao City',
    employees: 8,
    businessModel: 'B2G & B2C',
    
    mission: 'To provide accessible quality education through digital platforms.',
    vision: 'Every learner in Surigao has access to world-class education.',
    problem: 'Remote areas lack access to quality educational resources and qualified teachers.',
    technology: 'Mobile learning apps, offline content delivery, AI tutoring.',
    communityImpact: 'Serving 10 schools with digital learning solutions.',
    
    products: [
      {
        name: 'LearnApp',
        description: 'Mobile learning app with offline capabilities.',
        image: '/images/products/learnapp.jpg',
        features: ['Offline access', 'Interactive lessons', 'Progress tracking', 'AI tutoring'],
        benefits: ['Accessible education', 'Personalized learning', 'Progress monitoring'],
        technology: ['Mobile app', 'Offline storage', 'AI algorithms'],
      },
    ],
    
    gallery: [
      '/images/gallery/edulearn-1.jpg',
      '/images/gallery/edulearn-2.jpg',
    ],
    
    timeline: [
      { date: '2023-01', title: 'Idea', description: 'Founded to address education gaps.' },
      { date: '2023-06', title: 'Prototype', description: 'First app prototype developed.' },
      { date: '2024-01', title: 'Pilot', description: 'Pilot program in 3 schools.' },
    ],
    
    metrics: [
      { label: 'Students Served', value: 2000, suffix: '+' },
      { label: 'Schools Partnered', value: 10, suffix: '' },
      { label: 'Lessons Completed', value: 50000, suffix: '+' },
    ],
    
    sdgs: [4, 9],
    
    partners: [
      { name: 'DepEd', logo: '/images/partners/deped.png' },
      { name: 'Local Schools', logo: '/images/partners/schools.png' },
    ],
    
    team: [
      { name: 'Sarah Martinez', role: 'CEO', bio: 'Educator with digital learning expertise.', image: '/images/team/sarah-martinez.jpg' },
    ],
    
    awards: [],
    videos: [],
    news: [],
    documents: [],
  },
  {
    slug: 'tourismx',
    name: 'TourismX',
    logo: '✈️',
    coverImage: '/images/startups/tourismx-cover.jpg',
    tagline: 'Smart Tourism for Modern Travelers',
    description: 'TourismX develops smart tourism applications with AR features and local recommendations to enhance visitor experiences in Surigao del Norte.',
    industry: 'Tourism',
    stage: 'Growth',
    status: 'Active',
    location: 'Surigao City, Surigao del Norte',
    website: 'https://tourismx.ph',
    email: 'hello@tourismx.ph',
    verified: true,
    
    founders: [
      {
        name: 'Miguel Santos',
        role: 'CEO & Founder',
        bio: 'Tourism professional with tech background.',
        linkedin: 'https://linkedin.com/in/miguel-santos',
        image: '/images/team/miguel-santos.jpg',
      },
    ],
    
    yearFounded: 2022,
    headquarters: 'Surigao City',
    employees: 10,
    businessModel: 'B2B & B2C',
    
    mission: 'To enhance tourism experiences through technology and local insights.',
    vision: 'Surigao as a premier smart tourism destination.',
    problem: 'Tourists lack comprehensive, real-time information about local attractions and services.',
    technology: 'Mobile app, AR technology, AI recommendations, geolocation services.',
    communityImpact: 'Partnering with 50+ local businesses and tour operators.',
    
    products: [
      {
        name: 'SurigaoGo',
        description: 'Smart tourism app with AR and local recommendations.',
        image: '/images/products/surigaogo.jpg',
        features: ['AR guides', 'Local recommendations', 'Real-time updates', 'Booking integration'],
        benefits: ['Enhanced experience', 'Local discovery', 'Convenient booking'],
        technology: ['AR technology', 'Mobile app', 'AI recommendations', 'Geolocation'],
      },
    ],
    
    gallery: [
      '/images/gallery/tourismx-1.jpg',
      '/images/gallery/tourismx-2.jpg',
      '/images/gallery/tourismx-3.jpg',
    ],
    
    timeline: [
      { date: '2022-03', title: 'Idea', description: 'Founded to enhance tourism experiences.' },
      { date: '2022-09', title: 'Prototype', description: 'First app prototype tested.' },
      { date: '2023-04', title: 'Incubation', description: 'Joined PRIME SDN program.' },
      { date: '2023-11', title: 'Launch', description: 'SurigaoGo officially launched.' },
    ],
    
    metrics: [
      { label: 'App Downloads', value: 10000, suffix: '+' },
      { label: 'Business Partners', value: 50, suffix: '+' },
      { label: 'Tours Booked', value: 5000, suffix: '+' },
    ],
    
    sdgs: [8, 9, 11],
    
    partners: [
      { name: 'DOT', logo: '/images/partners/dot.png' },
      { name: 'Local Tourism Office', logo: '/images/partners/tourism.png' },
      { name: 'Hotels & Resorts', logo: '/images/partners/hotels.png' },
    ],
    
    team: [
      { name: 'Miguel Santos', role: 'CEO', bio: 'Tourism professional with tech background.', image: '/images/team/miguel-santos.jpg' },
      { name: 'Lisa Cruz', role: 'CTO', bio: 'App development and AR specialist.', image: '/images/team/lisa-cruz.jpg' },
    ],
    
    awards: [
      { title: 'Tourism Innovation Award', organization: 'DOT', date: '2024-01', description: 'Excellence in tourism technology.' },
    ],
    
    videos: [],
    news: [],
    documents: [],
  },
];

export function getStartupBySlug(slug: string): Startup | undefined {
  return startups.find((startup) => startup.slug === slug);
}

export function getAllSlugs(): string[] {
  return startups.map((startup) => startup.slug);
}

export function getAllStartups(): Startup[] {
  return startups;
}

export function getRelatedStartups(currentSlug: string, industry?: string): Startup[] {
  return startups
    .filter((startup) => startup.slug !== currentSlug)
    .filter((startup) => !industry || startup.industry === industry)
    .slice(0, 4);
}
