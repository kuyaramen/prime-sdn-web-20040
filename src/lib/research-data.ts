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
    slug: 'sti-collaborative-research',
    title: 'STI Collaborative Research and Innovation Projects',
    coverImage: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=800&q=80',
    category: 'Science, Technology, and Innovation',
    leadResearcher: 'Provincial STI Council',
    institution: 'Provincial Government of Surigao del Norte',
    summary: 'Full portfolio implementation of STI collaborative research and innovation projects aligned with UN Sustainable Development Goals.',
    fullDescription: 'This comprehensive research program implements the full portfolio of STI collaborative research and innovation projects across the province. Projects focus on areas aligned with UN SDGs including sustainable development, climate resilience, digital transformation, and community empowerment. The program fosters collaboration between government, academia, civil society, and international partners.',
    status: 'Ongoing',
    startDate: '2028',
    endDate: '2040',
    researchTeam: ['Provincial STI Council', 'Surigao State University', 'CSO Partners', 'International Partners'],
    timeline: [
      '2028: Program launch and partnership establishment',
      '2031: First cycle research implementation',
      '2034: Second cycle expansion and SDG alignment',
      '2037: Full portfolio institutionalization',
      '2040: Sustainment and continuous innovation'
    ],
    gallery: [],
    outcomes: [
      'SDG-aligned research portfolio',
      'International research partnerships',
      'Community-based innovation projects',
      'Knowledge exchange mechanisms'
    ],
    featured: true
  },
  {
    slug: 'peace-security-innovation',
    title: 'Peace and Security Innovation Research',
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    category: 'Public Safety',
    leadResearcher: 'Provincial Peace and Order Council',
    institution: 'Provincial Government of Surigao del Norte',
    summary: 'Research and development of innovative solutions for public safety, crime prevention, and emergency response systems.',
    fullDescription: 'This research program focuses on developing innovative approaches to public safety and security. Research areas include smart policing technologies, predictive analytics for crime prevention, emergency response optimization, and community-based security solutions. The program aims to establish a Provincial Peace and Security Innovation Hub as a center of excellence for security research and development.',
    status: 'Planning',
    startDate: '2037',
    endDate: '2040',
    researchTeam: ['PPOC', 'PDEA', 'DILG', 'Academic Partners'],
    timeline: [
      '2037: Innovation hub establishment',
      '2038: Research program development',
      '2039: Pilot implementation',
      '2040: Full operationalization'
    ],
    gallery: [],
    outcomes: [
      'Peace and Security Innovation Hub',
      'Smart policing technologies',
      'Predictive security models',
      'Community safety protocols'
    ],
    featured: true
  },
  {
    slug: 'predictive-analytics-governance',
    title: 'Predictive Analytics for Governance Research',
    coverImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    category: 'Data Science',
    leadResearcher: 'Provincial Planning Office',
    institution: 'Provincial Government of Surigao del Norte',
    summary: 'Development of predictive models and analytics for HR monitoring, urban planning, resource management, and public safety.',
    fullDescription: 'This research program develops predictive models and analytics systems to support evidence-based governance. Research areas include HR demand forecasting, urban planning optimization, resource allocation modeling, and public safety prediction. The program integrates with the Real-Time Governance Dashboard to provide actionable insights for decision-makers.',
    status: 'Planning',
    startDate: '2034',
    researchTeam: ['Provincial Planning Office', 'ICT Office', 'HRMO', 'Academic Partners'],
    timeline: [
      '2034: Model development',
      '2037: Pilot deployment',
      '2040: Full integration'
    ],
    gallery: [],
    featured: true
  }
];

export const innovationProjects: InnovationProject[] = [
  {
    slug: 'provincial-eparticipation-portal',
    title: 'Provincial e-Participation Portal',
    image: 'https://images.unsplash.com/photo-1558478551-1a378f63328e?auto=format&fit=crop&w=800&q=80',
    category: 'Digital Governance',
    objectives: [
      'Enable citizen participation in governance',
      'Provide platform for public feedback',
      'Facilitate transparent decision-making',
      'Strengthen stakeholder engagement'
    ],
    technologies: ['Web Platform', 'Mobile App', 'Database Systems', 'Analytics'],
    timeline: '2028-2040',
    progress: 40,
    outcomes: [
      'Increased citizen engagement',
      'Transparent governance processes',
      'Real-time feedback mechanisms',
      'Stakeholder collaboration platforms'
    ],
    fundingSource: 'Provincial Government',
    collaborators: ['CSO Partners', 'International Partners', 'DICT'],
    featured: true
  },
  {
    slug: 'sti-global-knowledge-exchange',
    title: 'STI Global Knowledge Exchange Program',
    image: 'https://images.unsplash.com/photo-1574943320219-552eb9a7889c?auto=format&fit=crop&w=800&q=80',
    category: 'Knowledge Exchange',
    objectives: [
      'Facilitate international knowledge exchange',
      'Promote STI collaboration',
      'Establish center of excellence',
      'Enhance research capabilities'
    ],
    technologies: ['Digital Platforms', 'Video Conferencing', 'Knowledge Management', 'Collaboration Tools'],
    timeline: '2031-2040',
    progress: 25,
    outcomes: [
      'International partnerships established',
      'Knowledge exchange mechanisms',
      'Center of excellence recognition',
      'Enhanced research capabilities'
    ],
    fundingSource: 'Provincial Government + International Partners',
    collaborators: ['International STI Partners', 'Academic Institutions', 'DOST'],
    featured: true
  },
  {
    slug: 'cso-performance-recognition',
    title: 'CSO Performance Recognition Program',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    category: 'Civil Society Engagement',
    objectives: [
      'Recognize CSO contributions to SDGs',
      'Promote STI engagement',
      'Strengthen CSO capacity',
      'Foster collaboration'
    ],
    technologies: ['Assessment Platform', 'Database Systems', 'Analytics', 'Reporting Tools'],
    timeline: '2028-2040',
    progress: 35,
    outcomes: [
      'SDG impact recognition system',
      'CSO capacity enhancement',
      'Collaboration frameworks',
      'Performance metrics'
    ],
    fundingSource: 'Provincial Government',
    collaborators: ['CSO Partners', 'UN Agencies', 'DILG'],
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
    collaborationAreas: ['STI Development Plan', 'Research Funding', 'Technology Transfer', 'Capacity Building']
  },
  {
    name: 'International STI Partners',
    type: 'International Partner',
    description: 'International organizations collaborating on SDG-aligned STI initiatives.',
    collaborationAreas: ['Research Collaboration', 'Knowledge Exchange', 'Technology Transfer', 'Capacity Building']
  },
  {
    name: 'Civil Society Organizations',
    type: 'NGO',
    description: 'CSO partners contributing to SDG-aligned initiatives and community engagement.',
    collaborationAreas: ['Community Engagement', 'SDG Implementation', 'STI Advocacy', 'Performance Recognition']
  },
  {
    name: 'Surigao State University',
    type: 'University',
    description: 'Premier state university in Surigao del Norte offering quality education and research programs.',
    collaborationAreas: ['STI Research', 'Collaborative Projects', 'Knowledge Exchange', 'Capacity Building']
  },
  {
    name: 'Provincial Government of Surigao del Norte',
    type: 'LGU',
    description: 'Local government unit committed to innovation and development.',
    collaborationAreas: ['Policy Support', 'Funding', 'Infrastructure', 'STI Implementation']
  },
  {
    name: 'Department of the Interior and Local Government',
    type: 'DOST',
    description: 'Government agency responsible for local governance and public safety.',
    collaborationAreas: ['Peace and Order', 'CSO Accreditation', 'Community Engagement', 'Public Safety Innovation']
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
