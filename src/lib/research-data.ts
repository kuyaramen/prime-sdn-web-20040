// Research & Innovation CMS Data Structure

export interface ResearchProject {
  slug: string;
  title: string;
  coverImage: string;
  category: string;
  leadResearcher: string;
  institution: string;
  summary: string;
  fullDescription: string;
  status: 'Ongoing' | 'Completed' | 'Planning' | 'On Hold';
  startDate: string;
  endDate?: string;
  researchTeam: string[];
  timeline: string[];
  gallery: string[];
  outcomes?: string[];
  featured: boolean;
}

export interface InnovationProject {
  slug: string;
  title: string;
  image: string;
  category: string;
  objectives: string[];
  technologies: string[];
  timeline: string;
  progress: number;
  outcomes?: string[];
  fundingSource: string;
  collaborators: string[];
  featured: boolean;
}

export interface Laboratory {
  slug: string;
  name: string;
  image: string;
  institution: string;
  location: string;
  description: string;
  equipment: string[];
  facilities: string[];
  researchAreas: string[];
  capacity: number;
  bookingLink?: string;
  featured: boolean;
}

export interface Publication {
  slug: string;
  title: string;
  authors: string[];
  institution: string;
  year: number;
  type: 'Journal Article' | 'Conference Paper' | 'Thesis' | 'Capstone Project' | 'Technical Report' | 'White Paper';
  abstract: string;
  pdfUrl?: string;
  citation: string;
  keywords: string[];
  doi?: string;
  featured: boolean;
}

export interface Researcher {
  slug: string;
  name: string;
  photo: string;
  specialization: string;
  institution: string;
  biography: string;
  researchInterests: string[];
  publications: string[];
  awards?: string[];
  email: string;
  linkedin?: string;
  orcid?: string;
  featured: boolean;
}

export interface Patent {
  slug: string;
  title: string;
  inventor: string;
  institution: string;
  patentNumber?: string;
  status: 'Granted' | 'Pending' | 'Filed' | 'Published';
  filingDate: string;
  registrationDate?: string;
  description: string;
  category: string;
  featured: boolean;
}

export interface Technology {
  slug: string;
  name: string;
  image: string;
  overview: string;
  applications: string[];
  localProjects: string[];
  futureOpportunities: string[];
  category: string;
  featured: boolean;
}

export interface ResearchGrant {
  slug: string;
  title: string;
  agency: string;
  amount: string;
  eligibility: string[];
  deadline: string;
  requirements: string[];
  applicationLink?: string;
  category: string;
  featured: boolean;
}

export interface InnovationEvent {
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: 'Research Conference' | 'Symposium' | 'Technology Expo' | 'Innovation Summit' | 'Science Fair' | 'Workshop';
  organizer: string;
  targetAudience: string[];
  registrationLink?: string;
  fee?: string;
  capacity: number;
  featured: boolean;
}

export interface Partner {
  name: string;
  type: 'DOST' | 'CHED' | 'University' | 'LGU' | 'Private Company' | 'NGO' | 'International Partner';
  logo?: string;
  description: string;
  collaborationAreas: string[];
}

// Mock Data

export const researchProjects: ResearchProject[] = [
  {
    slug: 'siargao-mangrove-carbon',
    title: 'Siargao Mangrove Carbon Blue Project',
    coverImage: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=800&q=80',
    category: 'Marine Science',
    leadResearcher: 'Dr. Maria Santos',
    institution: 'Surigao State University',
    summary: 'Quantifying carbon sequestration capabilities of Siargao\'s vast mangrove forests for carbon credit integration.',
    fullDescription: 'This groundbreaking research aims to measure and quantify the carbon sequestration potential of mangrove ecosystems in Siargao Island. The project will establish baseline carbon storage data, develop methodologies for carbon credit valuation, and create frameworks for community-based mangrove conservation with economic incentives.',
    status: 'Ongoing',
    startDate: 'January 2025',
    endDate: 'December 2026',
    researchTeam: ['Dr. Maria Santos', 'Engr. John Reyes', 'Ms. Ana Cruz'],
    timeline: [
      'Q1 2025: Site selection and baseline assessment',
      'Q2 2025: Carbon stock measurement',
      'Q3 2025: Community engagement and training',
      'Q4 2025: Data analysis and reporting'
    ],
    gallery: [],
    outcomes: [
      'Carbon sequestration baseline data',
      'Community conservation framework',
      'Carbon credit valuation model'
    ],
    featured: true
  },
  {
    slug: 'eco-mining-rehabilitation',
    title: 'Eco-Rehabilitation of Post-Mining Sites',
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    category: 'Environmental Engineering',
    leadResearcher: 'Dr. Carlos Mendoza',
    institution: 'Surigao State University',
    summary: 'Testing endemic plant species for heavy-metal phytoextraction in decommissioned mining lands in Claver.',
    fullDescription: 'This research focuses on identifying and testing native plant species capable of absorbing heavy metals from contaminated mining sites. The project aims to develop sustainable, low-cost rehabilitation methods that can restore ecological balance while providing economic opportunities for local communities through bio-energy production.',
    status: 'Ongoing',
    startDate: 'October 2024',
    endDate: 'September 2026',
    researchTeam: ['Dr. Carlos Mendoza', 'Dr. Lisa Tan', 'Engr. Mark Santos'],
    timeline: [
      'Q4 2024: Plant species identification',
      'Q1 2025: Laboratory testing',
      'Q2 2025: Field trials',
      'Q3 2025: Impact assessment'
    ],
    gallery: [],
    outcomes: [
      'Phytoremediation protocol',
      'Species database',
      'Rehabilitation guidelines'
    ],
    featured: true
  },
  {
    slug: 'ai-disaster-risk',
    title: 'AI for Disaster Risk Reduction',
    coverImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    category: 'Artificial Intelligence',
    leadResearcher: 'Dr. Robert Lee',
    institution: 'Mindanao State University',
    summary: 'Developing AI-powered early warning systems for typhoons, floods, and landslides in Surigao del Norte.',
    fullDescription: 'This project leverages machine learning and satellite imagery to develop predictive models for natural disasters. The system will provide real-time risk assessment, early warning alerts, and evacuation recommendations to improve disaster preparedness and response in vulnerable communities.',
    status: 'Planning',
    startDate: 'July 2025',
    researchTeam: ['Dr. Robert Lee', 'Dr. Sarah Kim', 'Engr. David Park'],
    timeline: [
      'Q3 2025: Data collection and model development',
      'Q4 2025: Prototype testing',
      'Q1 2026: Pilot deployment',
      'Q2 2026: System optimization'
    ],
    gallery: [],
    featured: true
  }
];

export const innovationProjects: InnovationProject[] = [
  {
    slug: 'smart-fisheries',
    title: 'Smart Fisheries Monitoring System',
    image: 'https://images.unsplash.com/photo-1558478551-1a378f63328e?auto=format&fit=crop&w=800&q=80',
    category: 'IoT',
    objectives: [
      'Monitor fish stock in real-time',
      'Detect illegal fishing activities',
      'Provide data for sustainable management'
    ],
    technologies: ['IoT Sensors', 'Satellite Communication', 'Machine Learning', 'Mobile App'],
    timeline: '2024-2026',
    progress: 65,
    outcomes: [
      'Deployed 50 sensor nodes',
      'Reduced illegal fishing by 40%',
      'Improved stock assessment accuracy'
    ],
    fundingSource: 'DOST Grants',
    collaborators: ['BFAR', 'Local Fisherfolk Associations'],
    featured: true
  },
  {
    slug: 'smart-agriculture',
    title: 'Precision Agriculture Platform',
    image: 'https://images.unsplash.com/photo-1574943320219-552eb9a7889c?auto=format&fit=crop&w=800&q=80',
    category: 'Smart Farming',
    objectives: [
      'Optimize crop yields through data-driven decisions',
      'Reduce water and fertilizer usage',
      'Enable remote farm management'
    ],
    technologies: ['Soil Sensors', 'Drone Imaging', 'AI Analytics', 'Cloud Platform'],
    timeline: '2025-2027',
    progress: 35,
    fundingSource: 'Provincial Innovation Fund',
    collaborators: ['DA', 'Farmers Cooperatives'],
    featured: true
  },
  {
    slug: 'renewable-energy',
    title: 'Hybrid Renewable Energy System',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    category: 'Renewable Energy',
    objectives: [
      'Develop solar-wind hybrid systems',
      'Provide reliable power to remote islands',
      'Reduce dependence on fossil fuels'
    ],
    technologies: ['Solar Panels', 'Wind Turbines', 'Battery Storage', 'Smart Grid'],
    timeline: '2024-2028',
    progress: 45,
    fundingSource: 'DOE Grants',
    collaborators: ['NGCP', 'Local LGUs'],
    featured: true
  }
];

export const laboratories: Laboratory[] = [
  {
    slug: 'ai-laboratory',
    name: 'Artificial Intelligence Laboratory',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=800&q=80',
    institution: 'Surigao State University',
    location: 'Surigao City Campus',
    description: 'State-of-the-art AI research facility focusing on machine learning, computer vision, and natural language processing applications for local challenges.',
    equipment: ['GPU Servers', 'High-Performance Computing Cluster', 'Robotics Arms', 'Sensor Arrays'],
    facilities: ['Research Labs', 'Testing Area', 'Conference Room', 'Data Center'],
    researchAreas: ['Machine Learning', 'Computer Vision', 'Robotics', 'Natural Language Processing'],
    capacity: 25,
    featured: true
  },
  {
    slug: 'marine-science-lab',
    name: 'Marine Science Laboratory',
    image: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&w=800&q=80',
    institution: 'Surigao State University',
    location: 'Siargao Campus',
    description: 'Advanced marine research facility equipped for coral reef studies, seaweed research, and coastal ecosystem monitoring.',
    equipment: ['Microscopes', 'Water Quality Analyzers', 'DNA Sequencer', 'Underwater Cameras'],
    facilities: ['Wet Lab', 'Dry Lab', 'Aquarium Room', 'Field Equipment Storage'],
    researchAreas: ['Marine Biology', 'Coral Reef Ecology', 'Seaweed Cultivation', 'Coastal Management'],
    capacity: 20,
    featured: true
  },
  {
    slug: 'robotics-lab',
    name: 'Robotics and Automation Laboratory',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    institution: 'Mindanao State University',
    location: 'Surigao City',
    description: 'Robotics research center developing automation solutions for agriculture, disaster response, and industrial applications.',
    equipment: ['Industrial Robots', '3D Printers', 'CNC Machines', 'Electronics Workbenches'],
    facilities: ['Assembly Area', 'Testing Zone', 'Electronics Lab', 'Design Studio'],
    researchAreas: ['Industrial Automation', 'Agricultural Robotics', 'Disaster Response Robots', 'Drone Technology'],
    capacity: 30,
    featured: true
  }
];

export const publications: Publication[] = [
  {
    slug: 'mangrove-carbon-sequestration',
    title: 'Carbon Sequestration Potential of Siargao Mangrove Ecosystems: A Baseline Study',
    authors: ['Dr. Maria Santos', 'Engr. John Reyes', 'Ms. Ana Cruz'],
    institution: 'Surigao State University',
    year: 2025,
    type: 'Journal Article',
    abstract: 'This study presents the first comprehensive assessment of carbon storage in Siargao Island\'s mangrove forests. Using field measurements and remote sensing data, we quantified above-ground and below-ground carbon stocks across different mangrove species and forest types.',
    pdfUrl: '#',
    citation: 'Santos, M., Reyes, J., & Cruz, A. (2025). Carbon Sequestration Potential of Siargao Mangrove Ecosystems. Philippine Journal of Marine Science, 15(2), 45-62.',
    keywords: ['Mangrove', 'Carbon Sequestration', 'Blue Carbon', 'Siargao', 'Climate Change'],
    doi: '10.1234/phjm.2025.002',
    featured: true
  },
  {
    slug: 'phytoremediation-mining',
    title: 'Phytoremediation Potential of Endemic Plant Species in Post-Mining Sites of Surigao del Norte',
    authors: ['Dr. Carlos Mendoza', 'Dr. Lisa Tan'],
    institution: 'Surigao State University',
    year: 2024,
    type: 'Technical Report',
    abstract: 'This report evaluates the effectiveness of native plant species in absorbing heavy metals from contaminated mining sites. Laboratory and field trials demonstrate promising results for several endemic species.',
    pdfUrl: '#',
    citation: 'Mendoza, C., & Tan, L. (2024). Phytoremediation Potential of Endemic Plant Species. Technical Report, SSU Environmental Research Center.',
    keywords: ['Phytoremediation', 'Mining Rehabilitation', 'Heavy Metals', 'Endemic Species'],
    featured: true
  },
  {
    slug: 'ai-disaster-prediction',
    title: 'Machine Learning Approaches for Disaster Risk Prediction in Coastal Communities',
    authors: ['Dr. Robert Lee', 'Dr. Sarah Kim'],
    institution: 'Mindanao State University',
    year: 2025,
    type: 'Conference Paper',
    abstract: 'This paper presents a novel machine learning framework for predicting disaster risks in coastal communities using satellite imagery and historical data.',
    pdfUrl: '#',
    citation: 'Lee, R., & Kim, S. (2025). Machine Learning Approaches for Disaster Risk Prediction. Proceedings of the International Conference on AI for Good.',
    keywords: ['Machine Learning', 'Disaster Risk', 'Satellite Imagery', 'Coastal Communities'],
    featured: true
  }
];

export const researchers: Researcher[] = [
  {
    slug: 'maria-santos',
    name: 'Dr. Maria Santos',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    specialization: 'Marine Biology & Blue Carbon',
    institution: 'Surigao State University',
    biography: 'Dr. Maria Santos is a leading marine biologist with over 15 years of experience mangrove ecosystem research. She pioneered the Blue Carbon initiative in Surigao del Norte and has published extensively on coastal conservation.',
    researchInterests: ['Mangrove Ecology', 'Carbon Sequestration', 'Coastal Management', 'Climate Change Adaptation'],
    publications: ['Carbon Sequestration Potential of Siargao Mangrove Ecosystems', 'Mangrove Restoration Guidelines', 'Blue Carbon Framework Development'],
    awards: ['DOST Outstanding Researcher Award 2023', 'National Science Foundation Grant Awardee'],
    email: 'msantos@ssu.edu.ph',
    linkedin: 'linkedin.com/in/mariasantos',
    orcid: '0000-0000-0000-0000',
    featured: true
  },
  {
    slug: 'carlos-mendoza',
    name: 'Dr. Carlos Mendoza',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    specialization: 'Environmental Engineering',
    institution: 'Surigao State University',
    biography: 'Dr. Carlos Mendoza specializes in environmental remediation and sustainable mining practices. His work focuses on developing low-cost, nature-based solutions for environmental restoration.',
    researchInterests: ['Phytoremediation', 'Mining Rehabilitation', 'Soil Science', 'Environmental Biotechnology'],
    publications: ['Phytoremediation Potential of Endemic Plant Species', 'Sustainable Mining Practices', 'Soil Restoration Techniques'],
    awards: ['Environmental Science Excellence Award 2022'],
    email: 'cmendoza@ssu.edu.ph',
    featured: true
  },
  {
    slug: 'robert-lee',
    name: 'Dr. Robert Lee',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    specialization: 'Artificial Intelligence',
    institution: 'Mindanao State University',
    biography: 'Dr. Robert Lee is an AI researcher with expertise in machine learning and computer vision. He leads the AI Laboratory and develops AI solutions for disaster risk reduction and environmental monitoring.',
    researchInterests: ['Machine Learning', 'Computer Vision', 'Disaster Risk Reduction', 'Remote Sensing'],
    publications: ['Machine Learning Approaches for Disaster Risk Prediction', 'AI for Environmental Monitoring', 'Deep Learning Applications'],
    awards: ['AI Research Innovation Award 2024'],
    email: 'rlee@msu.edu.ph',
    featured: true
  }
];

export const patents: Patent[] = [
  {
    slug: 'seaweed-bioplastic',
    title: 'Biodegradable Packaging Material from Red Seaweed',
    inventor: 'Dr. Lisa Tan',
    institution: 'Surigao State University',
    patentNumber: 'PH-2024-001234',
    status: 'Granted',
    filingDate: 'March 2023',
    registrationDate: 'January 2024',
    description: 'A novel biodegradable packaging material derived from red seaweed, offering an eco-friendly alternative to single-use plastics.',
    category: 'Biotechnology',
    featured: true
  },
  {
    slug: 'smart-fishery-sensor',
    title: 'IoT-Based Fish Stock Monitoring System',
    inventor: 'Engr. John Reyes',
    institution: 'Surigao State University',
    patentNumber: 'PH-2024-001235',
    status: 'Pending',
    filingDate: 'June 2024',
    description: 'An integrated IoT sensor system for real-time monitoring of fish stocks in marine environments using acoustic and optical sensors.',
    category: 'IoT',
    featured: true
  },
  {
    slug: 'phytoremediation-method',
    title: 'Method for Heavy Metal Phytoremediation Using Endemic Plants',
    inventor: 'Dr. Carlos Mendoza',
    institution: 'Surigao State University',
    patentNumber: 'PH-2024-001236',
    status: 'Published',
    filingDate: 'September 2024',
    description: 'A method for removing heavy metals from contaminated soil using specific combinations of endemic plant species.',
    category: 'Environmental Technology',
    featured: true
  }
];

export const technologies: Technology[] = [
  {
    slug: 'artificial-intelligence',
    name: 'Artificial Intelligence',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=800&q=80',
    overview: 'AI technologies are transforming research and innovation in Surigao del Norte, enabling smarter decision-making, predictive analytics, and automation across various sectors.',
    applications: ['Disaster Risk Reduction', 'Agricultural Optimization', 'Marine Monitoring', 'Healthcare Diagnostics'],
    localProjects: ['AI for Disaster Risk Reduction', 'Smart Agriculture Platform', 'Marine Species Recognition'],
    futureOpportunities: ['AI-Powered Government Services', 'Smart City Infrastructure', 'Autonomous Systems'],
    category: 'Emerging Technology',
    featured: true
  },
  {
    slug: 'iot',
    name: 'Internet of Things',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    overview: 'IoT solutions are connecting physical devices and systems, enabling real-time monitoring, data collection, and automated control across industries.',
    applications: ['Smart Fisheries', 'Precision Agriculture', 'Environmental Monitoring', 'Smart Cities'],
    localProjects: ['Smart Fisheries Monitoring System', 'Precision Agriculture Platform', 'Air Quality Monitoring'],
    futureOpportunities: ['Industrial IoT', 'Smart Homes', 'Connected Healthcare'],
    category: 'Connectivity',
    featured: true
  },
  {
    slug: 'renewable-energy',
    name: 'Renewable Energy Systems',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    overview: 'Renewable energy technologies are providing sustainable power solutions for remote communities and reducing dependence on fossil fuels.',
    applications: ['Rural Electrification', 'Water Pumping', 'Telecommunications', 'Community Power'],
    localProjects: ['Hybrid Renewable Energy System', 'Solar-Powered Water Systems', 'Wind Energy Assessment'],
    futureOpportunities: ['Energy Storage Solutions', 'Smart Grids', 'Green Hydrogen'],
    category: 'Clean Energy',
    featured: true
  }
];

export const researchGrants: ResearchGrant[] = [
  {
    slug: 'dost-fundamental-research',
    title: 'DOST Fundamental Research Grant',
    agency: 'Department of Science and Technology',
    amount: 'Up to ₱2,000,000',
    eligibility: ['Filipino researchers', 'Affiliated with Philippine institutions', 'Research in priority areas'],
    deadline: 'March 31, 2025',
    requirements: ['Research proposal', 'Institutional endorsement', 'Budget justification', 'Timeline'],
    applicationLink: 'https://dost.gov.ph/grants',
    category: 'Government',
    featured: true
  },
  {
    slug: 'ched-research',
    title: 'CHED Higher Education Research Grant',
    agency: 'Commission on Higher Education',
    amount: 'Up to ₱1,500,000',
    eligibility: ['HEI faculty members', 'Graduate students', 'Research in education and development'],
    deadline: 'June 30, 2025',
    requirements: ['Research proposal', 'Ethics clearance', 'Institutional approval'],
    applicationLink: 'https://ched.gov.ph/research',
    category: 'Education',
    featured: true
  },
  {
    slug: 'provincial-innovation',
    title: 'Provincial Innovation Fund',
    agency: 'Provincial Government of Surigao del Norte',
    amount: 'Up to ₱500,000',
    eligibility: ['Surigao del Norte residents', 'Local researchers', 'Innovation projects with local impact'],
    deadline: 'December 31, 2025',
    requirements: ['Project proposal', 'Impact assessment', 'Budget plan'],
    applicationLink: '#',
    category: 'Local',
    featured: true
  }
];

export const innovationEvents: InnovationEvent[] = [
  {
    slug: 'research-summit-2025',
    title: 'Surigao Research and Innovation Summit 2025',
    date: 'November 15-17, 2025',
    time: '9:00 AM - 5:00 PM',
    location: 'Surigao City Convention Center',
    description: 'Annual gathering of researchers, innovators, and industry leaders to showcase groundbreaking research and foster collaboration.',
    category: 'Innovation Summit',
    organizer: 'Provincial Research Council',
    targetAudience: ['Researchers', 'Students', 'Industry Partners', 'Government Officials'],
    registrationLink: '#',
    fee: '₱500 (Students), ₱1,000 (Professionals)',
    capacity: 300,
    featured: true
  },
  {
    slug: 'marine-science-symposium',
    title: 'Marine Science Symposium',
    date: 'October 20, 2025',
    time: '8:00 AM - 4:00 PM',
    location: 'Surigao State University',
    description: 'Symposium focusing on marine conservation, blue economy, and coastal resource management research.',
    category: 'Symposium',
    organizer: 'SSU Marine Science Department',
    targetAudience: ['Marine Researchers', 'Students', 'Government Agencies', 'NGOs'],
    registrationLink: '#',
    fee: 'Free',
    capacity: 150,
    featured: true
  },
  {
    slug: 'tech-expo-2025',
    title: 'Technology Innovation Expo',
    date: 'December 5-6, 2025',
    time: '10:00 AM - 6:00 PM',
    location: 'Surigao City Mall Atrium',
    description: 'Exhibition showcasing local innovations, technologies, and startup products from Surigao del Norte.',
    category: 'Technology Expo',
    organizer: 'Provincial ICT Council',
    targetAudience: ['General Public', 'Students', 'Entrepreneurs', 'Investors'],
    registrationLink: '#',
    fee: 'Free',
    capacity: 500,
    featured: true
  }
];

export const partners: Partner[] = [
  {
    name: 'Department of Science and Technology',
    type: 'DOST',
    description: 'Leading government agency for science and technology development in the Philippines.',
    collaborationAreas: ['Research Funding', 'Technology Transfer', 'Capacity Building', 'Policy Development']
  },
  {
    name: 'Commission on Higher Education',
    type: 'CHED',
    description: 'Government agency responsible for higher education in the Philippines.',
    collaborationAreas: ['Research Grants', 'Faculty Development', 'Curriculum Development', 'Institutional Partnerships']
  },
  {
    name: 'Surigao State University',
    type: 'University',
    description: 'Premier state university in Surigao del Norte offering quality education and research programs.',
    collaborationAreas: ['Joint Research', 'Student Exchange', 'Technology Development', 'Community Extension']
  },
  {
    name: 'Mindanao State University',
    type: 'University',
    description: 'Leading university system in Mindanao with strong research capabilities.',
    collaborationAreas: ['Collaborative Research', 'Graduate Programs', 'Technology Innovation', 'Knowledge Sharing']
  },
  {
    name: 'Provincial Government of Surigao del Norte',
    type: 'LGU',
    description: 'Local government unit committed to innovation and development.',
    collaborationAreas: ['Policy Support', 'Funding', 'Infrastructure', 'Community Engagement']
  },
  {
    name: 'National Fisheries Research and Development Institute',
    type: 'DOST',
    description: 'Research agency focused on fisheries and aquatic resources.',
    collaborationAreas: ['Marine Research', 'Technology Development', 'Capacity Building', 'Policy Advisory']
  }
];

// Helper functions
export function getResearchProjectBySlug(slug: string): ResearchProject | undefined {
  return researchProjects.find((project) => project.slug === slug);
}

export function getInnovationProjectBySlug(slug: string): InnovationProject | undefined {
  return innovationProjects.find((project) => project.slug === slug);
}

export function getLaboratoryBySlug(slug: string): Laboratory | undefined {
  return laboratories.find((lab) => lab.slug === slug);
}

export function getPublicationBySlug(slug: string): Publication | undefined {
  return publications.find((pub) => pub.slug === slug);
}

export function getResearcherBySlug(slug: string): Researcher | undefined {
  return researchers.find((researcher) => researcher.slug === slug);
}

export function getPatentBySlug(slug: string): Patent | undefined {
  return patents.find((patent) => patent.slug === slug);
}

export function getTechnologyBySlug(slug: string): Technology | undefined {
  return technologies.find((tech) => tech.slug === slug);
}

export function getResearchGrantBySlug(slug: string): ResearchGrant | undefined {
  return researchGrants.find((grant) => grant.slug === slug);
}

export function getInnovationEventBySlug(slug: string): InnovationEvent | undefined {
  return innovationEvents.find((event) => event.slug === slug);
}

export function getAllResearchProjectSlugs(): string[] {
  return researchProjects.map((project) => project.slug);
}

export function getAllInnovationProjectSlugs(): string[] {
  return innovationProjects.map((project) => project.slug);
}

export function getAllLaboratorySlugs(): string[] {
  return laboratories.map((lab) => lab.slug);
}

export function getAllPublicationSlugs(): string[] {
  return publications.map((pub) => pub.slug);
}

export function getAllResearcherSlugs(): string[] {
  return researchers.map((researcher) => researcher.slug);
}

export function getAllPatentSlugs(): string[] {
  return patents.map((patent) => patent.slug);
}

export function getAllTechnologySlugs(): string[] {
  return technologies.map((tech) => tech.slug);
}

export function getAllResearchGrantSlugs(): string[] {
  return researchGrants.map((grant) => grant.slug);
}

export function getAllInnovationEventSlugs(): string[] {
  return innovationEvents.map((event) => event.slug);
}
