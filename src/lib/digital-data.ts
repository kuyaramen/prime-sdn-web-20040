// Digital Transformation CMS Data Structure

export interface DigitalService {
  slug: string;
  name: string;
  description: string;
  serviceUrl: string;
  requirements: string[];
  officeResponsible: string;
  category: "Government" | "Business" | "Citizen" | "Health" | "Education";
  status: "Active" | "Coming Soon" | "Maintenance";
  icon: string;
  coverImage: string;
  fullDescription: string;
  benefits: string[];
  accessProcess: string[];
  contactInfo: string;
  faqs: Array<{ question: string; answer: string }>;
}

export interface SmartProject {
  slug: string;
  name: string;
  coverImage: string;
  description: string;
  objectives: string[];
  technologies: string[];
  status: "Planning" | "Implementation" | "Testing" | "Completed" | "Scaling";
  timeline: string[];
  partners: string[];
  budget: string;
  location: string;
  startDate: string;
  targetCompletion: string;
  impact: string[];
  gallery: string[];
  updates: Array<{ date: string; title: string; description: string }>;
}

export interface DigitalInfrastructure {
  slug: string;
  name: string;
  type: "Connectivity" | "Cloud" | "Data Center" | "Network" | "Smart Facility";
  location: string;
  progress: number;
  description: string;
  technologies: string[];
  capacity: string;
  coverage: string;
  images: string[];
  specifications: string[];
  relatedProjects: string[];
  completionDate?: string;
}

export interface EmergingTechnology {
  slug: string;
  name: string;
  category: "AI" | "ML" | "IoT" | "Blockchain" | "GIS" | "Drone" | "Digital Twin" | "Cloud";
  overview: string;
  applications: string[];
  localUseCases: string[];
  futureOpportunities: string[];
  image: string;
  adoptionLevel: "Pilot" | "Growing" | "Mature" | "Advanced";
  relatedProjects: string[];
}

export interface CybersecurityInitiative {
  slug: string;
  name: string;
  type: "Awareness" | "Standard" | "Privacy" | "Resilience" | "Training";
  description: string;
  targetAudience: string[];
  resources: string[];
  guidelines: string[];
  bestPractices: string[];
  incidentReporting?: string;
  implementationDate: string;
  status: string;
}

export interface DigitalTraining {
  slug: string;
  title: string;
  category: "Digital Literacy" | "Government Training" | "SME Digitalization" | "E-Commerce" | "AI Skills" | "ICT Bootcamp";
  description: string;
  provider: string;
  duration: string;
  schedule: string;
  registrationUrl?: string;
  targetAudience: string[];
  topics: string[];
  prerequisites: string[];
  certification: boolean;
  fee: string;
  capacity: number;
  startDate: string;
  endDate: string;
  location: string;
  mode: "Online" | "In-Person" | "Hybrid";
}

export interface DigitalSuccessStory {
  slug: string;
  title: string;
  category: "LGU" | "School" | "Agriculture" | "Tourism" | "Community" | "Business";
  beneficiary: string;
  story: string;
  impact: Array<{ label: string; value: string }>;
  metrics: Array<{ label: string; value: string }>;
  images: string[];
  testimonial?: string;
  testimonialAuthor?: string;
  date: string;
}

export interface DigitalPartner {
  name: string;
  type: "DICT" | "DOST" | "National Agency" | "LGU" | "University" | "Tech Company" | "Telco";
  description: string;
  logo: string;
  website: string;
  collaborationAreas: string[];
  projects: string[];
}

export interface DigitalEvent {
  slug: string;
  title: string;
  category: "Summit" | "Conference" | "Expo" | "Workshop" | "Awareness" | "Forum";
  date: string;
  time: string;
  venue: string;
  description: string;
  registrationUrl?: string;
  fee: string;
  capacity: number;
  organizer: string;
  targetAudience: string[];
  agenda: string[];
  speakers: string[];
  status: "Upcoming" | "Ongoing" | "Completed";
}

// Mock Data

export const digitalServices: DigitalService[] = [
  {
    slug: "e-government-portal",
    name: "eSDN Government Portal",
    description: "Unified digital platform for all government services and transactions.",
    serviceUrl: "https://esdn.surigaodelnorte.gov.ph",
    requirements: ["Valid ID", "Registered Account", "Internet Connection"],
    officeResponsible: "Provincial ICT Office",
    category: "Government",
    status: "Active",
    icon: "Globe",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    fullDescription: "The eSDN Government Portal is a comprehensive digital platform that consolidates all provincial government services into a single, user-friendly interface. Citizens can access business permits, tax payments, civil registrations, and other essential services from the comfort of their homes.",
    benefits: ["24/7 Service Availability", "Reduced Processing Time", "Transparent Transactions", "Mobile-Friendly Access"],
    accessProcess: ["Create Account", "Verify Identity", "Select Service", "Submit Requirements", "Track Application"],
    contactInfo: "ict@surigaodelnorte.gov.ph | (086) 826-0123",
    faqs: [
      { question: "Is the portal free to use?", answer: "Yes, all services on the eSDN portal are free of charge." },
      { question: "What documents do I need?", answer: "Requirements vary by service. Check each service page for specific requirements." }
    ]
  },
  {
    slug: "business-permit-system",
    name: "Online Business Permit System",
    description: "Streamlined business permit application and renewal process.",
    serviceUrl: "https://esdn.surigaodelnorte.gov.ph/business",
    requirements: ["DTI Registration", "Tax Identification Number", "Barangay Clearance"],
    officeResponsible: "BPLO",
    category: "Business",
    status: "Active",
    icon: "Briefcase",
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    fullDescription: "The Online Business Permit System enables entrepreneurs to apply for and renew business permits without visiting municipal halls. The system integrates with tax assessment and payment systems for a seamless experience.",
    benefits: ["Faster Processing", "Online Payment", "Real-time Tracking", "Digital Certificate"],
    accessProcess: ["Register Business", "Upload Documents", "Pay Fees", "Receive Permit"],
    contactInfo: "bplo@surigaodelnorte.gov.ph | (086) 826-0456",
    faqs: [
      { question: "How long does processing take?", answer: "Standard processing takes 3-5 business days." }
    ]
  },
  {
    slug: "citizen-services",
    name: "Online Citizen Services",
    description: "Access civil registry, health, and social services online.",
    serviceUrl: "https://esdn.surigaodelnorte.gov.ph/citizen",
    requirements: ["Valid ID", "Birth Certificate", "Proof of Residence"],
    officeResponsible: "Civil Registry",
    category: "Citizen",
    status: "Active",
    icon: "Users",
    coverImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    fullDescription: "Citizens can request birth certificates, marriage certificates, and other civil registry documents online. The system also provides access to health services and social assistance programs.",
    benefits: ["No Queue Lines", "Secure Document Delivery", "Multiple Payment Options", "Appointment Scheduling"],
    accessProcess: ["Select Service", "Provide Information", "Pay Fees", "Receive Documents"],
    contactInfo: "civilregistry@surigaodelnorte.gov.ph | (086) 826-0789",
    faqs: []
  },
  {
    slug: "digital-payments",
    name: "Online Payment Gateway",
    description: "Secure digital payment system for government fees and taxes.",
    serviceUrl: "https://esdn.surigaodelnorte.gov.ph/pay",
    requirements: ["Bank Account", "E-Wallet", "Reference Number"],
    officeResponsible: "Provincial Treasurer",
    category: "Government",
    status: "Active",
    icon: "CreditCard",
    coverImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    fullDescription: "The Online Payment Gateway supports multiple payment methods including bank transfers, e-wallets, and credit cards. All transactions are secured with bank-grade encryption.",
    benefits: ["Instant Confirmation", "Multiple Payment Options", "Transaction History", "Digital Receipts"],
    accessProcess: ["Generate Reference", "Select Payment Method", "Complete Payment", "Save Receipt"],
    contactInfo: "treasury@surigaodelnorte.gov.ph | (086) 826-0234",
    faqs: []
  },
  {
    slug: "public-feedback",
    name: "Public Feedback Platform",
    description: "Report issues, suggest improvements, and rate government services.",
    serviceUrl: "https://esdn.surigaodelnorte.gov.ph/feedback",
    requirements: ["Registered Account", "Contact Information"],
    officeResponsible: "Provincial Information Office",
    category: "Citizen",
    status: "Active",
    icon: "MessageSquare",
    coverImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
    fullDescription: "The Public Feedback Platform enables citizens to report infrastructure issues, suggest improvements, and provide feedback on government services. All submissions are tracked and responded to within specified timeframes.",
    benefits: ["Direct Communication", "Issue Tracking", "Service Ratings", "Transparent Responses"],
    accessProcess: ["Submit Feedback", "Track Status", "Receive Response", "Rate Resolution"],
    contactInfo: "feedback@surigaodelnorte.gov.ph | (086) 826-0567",
    faqs: []
  }
];

export const smartProjects: SmartProject[] = [
  {
    slug: "smart-traffic",
    name: "Smart Traffic Monitoring System",
    coverImage: "https://images.unsplash.com/photo-1575965942871-64a9dbf13cc4?auto=format&fit=crop&w=800&q=80",
    description: "AI-powered traffic management and monitoring for Surigao City and major municipalities.",
    objectives: ["Reduce congestion", "Improve response times", "Enable data-driven planning", "Enhance road safety"],
    technologies: ["AI Cameras", "IoT Sensors", "Machine Learning", "Cloud Analytics"],
    status: "Implementation",
    timeline: ["Q1 2025: Planning", "Q2 2025: Pilot in Surigao City", "Q3 2025: Expansion to municipalities", "Q4 2025: Full deployment"],
    partners: ["DICT", "Surigao City LGU", "Tech Partner"],
    budget: "₱15M",
    location: "Surigao City and Municipalities",
    startDate: "January 2025",
    targetCompletion: "December 2025",
    impact: ["30% reduction in congestion", "Faster emergency response", "Improved traffic flow"],
    gallery: ["https://images.unsplash.com/photo-1575965942871-64a9dbf13cc4?auto=format&fit=crop&w=800&q=80"],
    updates: [
      { date: "June 2025", title: "Pilot Launched", description: "Smart traffic cameras installed in key intersections of Surigao City." }
    ]
  },
  {
    slug: "disaster-warning",
    name: "Disaster Early Warning System",
    coverImage: "https://images.unsplash.com/photo-1592478411213-61535fdd861d?auto=format&fit=crop&w=800&q=80",
    description: "Integrated early warning system for typhoons, floods, and other natural disasters.",
    objectives: ["Early detection", "Rapid communication", "Community preparedness", "Minimize casualties"],
    technologies: ["IoT Sensors", "Satellite Data", "SMS Broadcasting", "Mobile App"],
    status: "Implementation",
    timeline: ["Q1 2025: Sensor deployment", "Q2 2025: System integration", "Q3 2025: Community training", "Q4 2025: Full operation"],
    partners: ["DOST", "PAGASA", "LGUs", "Telcos"],
    budget: "₱25M",
    location: "Province-wide",
    startDate: "March 2025",
    targetCompletion: "December 2025",
    impact: ["Faster warning dissemination", "Improved evacuation", "Reduced disaster impact"],
    gallery: ["https://images.unsplash.com/photo-1592478411213-61535fdd861d?auto=format&fit=crop&w=800&q=80"],
    updates: []
  },
  {
    slug: "digital-tourism",
    name: "Digital Tourism Platform",
    coverImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    description: "Comprehensive digital platform for tourism information, booking, and experiences.",
    objectives: ["Promote destinations", "Simplify bookings", "Enhance visitor experience", "Support local businesses"],
    technologies: ["Web Platform", "Mobile App", "Payment Gateway", "GIS Mapping"],
    status: "Completed",
    timeline: ["Q1 2024: Development", "Q2 2024: Testing", "Q3 2024: Launch", "Q4 2024: Expansion"],
    partners: ["Tourism Office", "Local Businesses", "Travel Agencies"],
    budget: "₱8M",
    location: "Province-wide",
    startDate: "January 2024",
    targetCompletion: "September 2024",
    impact: ["Increased tourist arrivals", "Simplified bookings", "Better visitor experience"],
    gallery: ["https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"],
    updates: []
  },
  {
    slug: "smart-agriculture",
    name: "Smart Agriculture Dashboard",
    coverImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
    description: "Data-driven agriculture platform for farmers and agricultural cooperatives.",
    objectives: ["Improve yields", "Optimize resources", "Market access", "Weather intelligence"],
    technologies: ["IoT Sensors", "Weather Stations", "Mobile App", "Analytics"],
    status: "Implementation",
    timeline: ["Q2 2025: Pilot deployment", "Q3 2025: Farmer training", "Q4 2025: Full rollout"],
    partners: ["DA", "DOST", "Cooperatives"],
    budget: "₱12M",
    location: "Agricultural municipalities",
    startDate: "April 2025",
    targetCompletion: "December 2025",
    impact: ["Better crop planning", "Resource optimization", "Market linkage"],
    gallery: ["https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80"],
    updates: []
  }
];

export const digitalInfrastructure: DigitalInfrastructure[] = [
  {
    slug: "fiber-connectivity",
    name: "Provincial Fiber Network",
    type: "Connectivity",
    location: "Province-wide",
    progress: 75,
    description: "High-speed fiber optic network connecting all municipalities and major barangays.",
    technologies: ["Fiber Optic", "GPON", "FTTH"],
    capacity: "10 Gbps backbone",
    coverage: "26 municipalities, 200+ barangays",
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"],
    specifications: ["10 Gbps core", "1 Gbps municipal", "100 Mbps barangay"],
    relatedProjects: ["digital-tourism", "disaster-warning"],
    completionDate: "December 2025"
  },
  {
    slug: "public-wifi",
    name: "Public Wi-Fi Network",
    type: "Connectivity",
    location: "Public plazas, schools, health centers",
    progress: 60,
    description: "Free public Wi-Fi access in key community areas.",
    technologies: ["Wi-Fi 6", "Solar Power", "Satellite Backup"],
    capacity: "100 Mbps per site",
    coverage: "150 sites",
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"],
    specifications: ["100 Mbps bandwidth", "50 concurrent users", "Solar-powered"],
    relatedProjects: ["digital-tourism"],
    completionDate: "June 2026"
  },
  {
    slug: "government-cloud",
    name: "Government Cloud Infrastructure",
    type: "Cloud",
    location: "Provincial Data Center",
    progress: 90,
    description: "Secure cloud infrastructure hosting all government digital services.",
    technologies: ["Private Cloud", "Virtualization", "Disaster Recovery"],
    capacity: "500 TB storage, 1000 vCPU",
    coverage: "All provincial agencies",
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"],
    specifications: ["99.9% uptime", "Tier 3 data center", "24/7 monitoring"],
    relatedProjects: ["e-government-portal", "business-permit-system"],
    completionDate: "September 2025"
  },
  {
    slug: "smart-command",
    name: "Smart Command Center",
    type: "Smart Facility",
    location: "Provincial Capitol",
    progress: 85,
    description: "Centralized command center for monitoring and coordinating smart city operations.",
    technologies: ["Video Walls", "AI Analytics", "IoT Integration", "GIS"],
    capacity: "24/7 operations, 50+ systems",
    coverage: "Province-wide monitoring",
    images: ["https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"],
    specifications: ["4K video walls", "AI-powered analytics", "Real-time monitoring"],
    relatedProjects: ["smart-traffic", "disaster-warning"],
    completionDate: "November 2025"
  }
];

export const emergingTechnologies: EmergingTechnology[] = [
  {
    slug: "artificial-intelligence",
    name: "Artificial Intelligence",
    category: "AI",
    overview: "AI technologies for government services, data analysis, and decision support.",
    applications: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Chatbots"],
    localUseCases: ["Traffic prediction", "Document processing", "Service chatbots", "Fraud detection"],
    futureOpportunities: ["Smart city optimization", "Personalized services", "Automated inspections"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    adoptionLevel: "Growing",
    relatedProjects: ["smart-traffic", "disaster-warning"]
  },
  {
    slug: "internet-of-things",
    name: "Internet of Things",
    category: "IoT",
    overview: "Connected sensors and devices for real-time monitoring and data collection.",
    applications: ["Environmental monitoring", "Asset tracking", "Smart meters", "Security systems"],
    localUseCases: ["Weather stations", "Traffic sensors", "Water quality monitoring", "Energy management"],
    futureOpportunities: ["Smart buildings", "Precision agriculture", "Health monitoring"],
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80",
    adoptionLevel: "Mature",
    relatedProjects: ["disaster-warning", "smart-agriculture"]
  },
  {
    slug: "blockchain",
    name: "Blockchain Technology",
    category: "Blockchain",
    overview: "Distributed ledger technology for secure, transparent transactions.",
    applications: ["Digital identity", "Supply chain", "Voting systems", "Document verification"],
    localUseCases: ["Land registry", "Business permits", "Academic credentials"],
    futureOpportunities: ["Smart contracts", "Digital payments", "Record management"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    adoptionLevel: "Pilot",
    relatedProjects: []
  },
  {
    slug: "gis-mapping",
    name: "GIS Mapping",
    category: "GIS",
    overview: "Geographic Information Systems for spatial analysis and planning.",
    applications: ["Urban planning", "Disaster management", "Resource mapping", "Service delivery"],
    localUseCases: ["Flood mapping", "Infrastructure planning", "Agricultural zones", "Tourism routes"],
    futureOpportunities: ["3D modeling", "Real-time tracking", "Predictive mapping"],
    image: "https://images.unsplash.com/photo-1524661135-4239956228313?auto=format&fit=crop&w=800&q=80",
    adoptionLevel: "Mature",
    relatedProjects: ["disaster-warning", "digital-tourism"]
  }
];

export const cybersecurityInitiatives: CybersecurityInitiative[] = [
  {
    slug: "cyber-awareness",
    name: "Cybersecurity Awareness Campaign",
    type: "Awareness",
    description: "Province-wide campaign to educate citizens and government employees on cybersecurity best practices.",
    targetAudience: ["Citizens", "Government Employees", "Businesses"],
    resources: ["Online modules", "Workshops", "Infographics", "Videos"],
    guidelines: ["Password security", "Phishing awareness", "Data protection", "Safe browsing"],
    bestPractices: ["Use strong passwords", "Enable 2FA", "Keep software updated", "Report suspicious activity"],
    incidentReporting: "Report incidents to security@surigaodelnorte.gov.ph",
    implementationDate: "January 2025",
    status: "Ongoing"
  },
  {
    slug: "data-privacy",
    name: "Data Privacy Initiative",
    type: "Privacy",
    description: "Implementation of data protection standards and privacy frameworks for government data.",
    targetAudience: ["Government Agencies", "Citizens"],
    resources: ["Privacy policy", "Data handling guidelines", "Consent forms"],
    guidelines: ["Data minimization", "Purpose limitation", "Storage limits", "Access controls"],
    bestPractices: ["Encrypt sensitive data", "Regular audits", "Privacy by design"],
    implementationDate: "March 2025",
    status: "Implementation"
  },
  {
    slug: "cyber-resilience",
    name: "Cyber Resilience Program",
    type: "Resilience",
    description: "Building resilience against cyber threats through incident response and recovery capabilities.",
    targetAudience: ["Government Agencies", "Critical Infrastructure"],
    resources: ["Incident response plan", "Backup systems", "Recovery procedures"],
    guidelines: ["Incident reporting", "Response protocols", "Recovery timelines"],
    bestPractices: ["Regular backups", "Testing procedures", "Continuous monitoring"],
    incidentReporting: "Emergency hotline: (086) 826-9999",
    implementationDate: "June 2025",
    status: "Planning"
  }
];

export const digitalTraining: DigitalTraining[] = [
  {
    slug: "digital-literacy",
    title: "Digital Literacy for Citizens",
    category: "Digital Literacy",
    description: "Basic digital skills training for citizens of all ages.",
    provider: "Provincial ICT Office",
    duration: "4 weeks",
    schedule: "Weekends",
    registrationUrl: "https://esdn.surigaodelnorte.gov.ph/training/digital-literacy",
    targetAudience: ["Senior citizens", "Adults", "Youth"],
    topics: ["Computer basics", "Internet usage", "Online safety", "Government services"],
    prerequisites: ["None"],
    certification: true,
    fee: "Free",
    capacity: 30,
    startDate: "July 2025",
    endDate: "August 2025",
    location: "Municipal Halls",
    mode: "In-Person"
  },
  {
    slug: "gov-training",
    title: "Government Digital Skills Training",
    category: "Government Training",
    description: "Digital skills enhancement for government employees.",
    provider: "HRMO + ICT Office",
    duration: "8 weeks",
    schedule: "Weekdays",
    registrationUrl: "https://esdn.surigaodelnorte.gov.ph/training/gov-skills",
    targetAudience: ["Government employees"],
    topics: ["Office productivity", "Digital services", "Data management", "Cybersecurity"],
    prerequisites: ["Government employment"],
    certification: true,
    fee: "Free",
    capacity: 50,
    startDate: "August 2025",
    endDate: "October 2025",
    location: "Provincial Capitol",
    mode: "Hybrid"
  },
  {
    slug: "sme-digitalization",
    title: "SME Digitalization Program",
    category: "SME Digitalization",
    description: "Help small businesses adopt digital tools and e-commerce.",
    provider: "DTI + ICT Office",
    duration: "6 weeks",
    schedule: "Evenings",
    registrationUrl: "https://esdn.surigaodelnorte.gov.ph/training/sme",
    targetAudience: ["SME owners", "Entrepreneurs"],
    topics: ["E-commerce platforms", "Digital marketing", "Online payments", "Inventory management"],
    prerequisites: ["Business registration"],
    certification: true,
    fee: "Free",
    capacity: 40,
    startDate: "September 2025",
    endDate: "October 2025",
    location: "Business Centers",
    mode: "Hybrid"
  },
  {
    slug: "ai-workshop",
    title: "AI Skills Workshop",
    category: "AI Skills",
    description: "Introduction to AI and its applications in government and business.",
    provider: "DOST + ICT Office",
    duration: "2 weeks",
    schedule: "Weekends",
    registrationUrl: "https://esdn.surigaodelnorte.gov.ph/training/ai",
    targetAudience: ["Students", "Professionals", "Government staff"],
    topics: ["AI fundamentals", "Machine learning basics", "AI tools", "Ethics"],
    prerequisites: ["Basic computer skills"],
    certification: true,
    fee: "Free",
    capacity: 25,
    startDate: "October 2025",
    endDate: "October 2025",
    location: "Universities",
    mode: "In-Person"
  }
];

export const digitalSuccessStories: DigitalSuccessStory[] = [
  {
    slug: "digitalized-lgu",
    title: "Surigao City Digital Transformation",
    category: "LGU",
    beneficiary: "Surigao City Government",
    story: "Surigao City implemented comprehensive digital transformation including online permits, digital payments, and smart traffic management. The initiative reduced processing times by 70% and improved citizen satisfaction.",
    impact: [
      { label: "Processing Time", value: "Reduced by 70%" },
      { label: "Citizen Satisfaction", value: "Increased by 85%" },
      { label: "Digital Transactions", value: "15,000+ monthly" }
    ],
    metrics: [
      { label: "Processing Time", value: "Reduced by 70%" },
      { label: "Citizen Satisfaction", value: "Increased by 85%" },
      { label: "Digital Transactions", value: "15,000+ monthly" }
    ],
    images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"],
    testimonial: "The digital transformation has made government services more accessible and efficient for our citizens.",
    testimonialAuthor: "City Mayor",
    date: "June 2025"
  },
  {
    slug: "smart-school",
    title: "Smart School Initiative",
    category: "School",
    beneficiary: "Surigao State University",
    story: "SSU implemented smart classrooms, online learning platforms, and digital libraries. The initiative enhanced learning outcomes and prepared students for the digital economy.",
    impact: [
      { label: "Student Engagement", value: "Increased by 60%" },
      { label: "Digital Resources", value: "10,000+ accessible" },
      { label: "Online Courses", value: "50+ offered" }
    ],
    metrics: [
      { label: "Student Engagement", value: "Increased by 60%" },
      { label: "Digital Resources", value: "10,000+ accessible" },
      { label: "Online Courses", value: "50+ offered" }
    ],
    images: ["https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80"],
    testimonial: "Our students are now better prepared for careers in technology and innovation.",
    testimonialAuthor: "University President",
    date: "May 2025"
  },
  {
    slug: "ai-agriculture",
    title: "AI-Enabled Agriculture",
    category: "Agriculture",
    beneficiary: "Farmers Cooperative",
    story: "Local farmers adopted AI-powered weather prediction and crop monitoring systems. The technology improved yields and reduced resource waste.",
    impact: [
      { label: "Crop Yield", value: "Increased by 35%" },
      { label: "Water Usage", value: "Reduced by 40%" },
      { label: "Farmer Income", value: "Increased by 45%" }
    ],
    metrics: [
      { label: "Crop Yield", value: "Increased by 35%" },
      { label: "Water Usage", value: "Reduced by 40%" },
      { label: "Farmer Income", value: "Increased by 45%" }
    ],
    images: ["https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80"],
    testimonial: "The technology has transformed how we farm and increased our productivity significantly.",
    testimonialAuthor: "Cooperative President",
    date: "April 2025"
  }
];

export const digitalPartners: DigitalPartner[] = [
  {
    name: "Department of ICT",
    type: "DICT",
    description: "National government agency leading ICT development and digital transformation.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Department_of_Information_and_Communications_Technology_%28DICT%29_logo.svg/1200px-Department_of_Information_and_Communications_Technology_%28DICT%29_logo.svg.png",
    website: "https://dict.gov.ph",
    collaborationAreas: ["Infrastructure", "Policy", "Training"],
    projects: ["fiber-connectivity", "public-wifi"]
  },
  {
    name: "Department of Science and Technology",
    type: "DOST",
    description: "National agency for science and technology development and innovation.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Department_of_Science_and_Technology_%28DOST%29_logo.svg/1200px-Department_of_Science_and_Technology_%28DOST%29_logo.svg.png",
    website: "https://dost.gov.ph",
    collaborationAreas: ["Research", "Technology", "Innovation"],
    projects: ["disaster-warning", "smart-agriculture"]
  },
  {
    name: "Globe Telecom",
    type: "Telco",
    description: "Leading telecommunications provider in the Philippines.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Globe_Telecom_logo.svg/1200px-Globe_Telecom_logo.svg.png",
    website: "https://www.globe.com.ph",
    collaborationAreas: ["Connectivity", "Infrastructure"],
    projects: ["fiber-connectivity", "public-wifi"]
  },
  {
    name: "Smart Communications",
    type: "Telco",
    description: "Major telecommunications company in the Philippines.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Smart_Communications_logo.svg/1200px-Smart_Communications_logo.svg.png",
    website: "https://www.smart.com.ph",
    collaborationAreas: ["Connectivity", "5G"],
    projects: ["fiber-connectivity"]
  },
  {
    name: "Surigao State University",
    type: "University",
    description: "Premier state university in Surigao del Norte.",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Surigao_State_University_logo.png/1200px-Surigao_State_University_logo.png",
    website: "https://ssu.edu.ph",
    collaborationAreas: ["Research", "Training", "Innovation"],
    projects: ["smart-agriculture", "ai-workshop"]
  }
];

export const digitalEvents: DigitalEvent[] = [
  {
    slug: "ict-summit",
    title: "Surigao ICT Summit 2025",
    category: "Summit",
    date: "November 15-16, 2025",
    time: "9:00 AM - 5:00 PM",
    venue: "Provincial Convention Center",
    description: "Annual gathering of ICT professionals, government officials, and tech enthusiasts to discuss digital transformation initiatives.",
    registrationUrl: "https://esdn.surigaodelnorte.gov.ph/events/ict-summit",
    fee: "Free",
    capacity: 500,
    organizer: "Provincial ICT Office",
    targetAudience: ["ICT professionals", "Government officials", "Students", "Business owners"],
    agenda: ["Keynote speeches", "Panel discussions", "Tech demos", "Networking"],
    speakers: ["DICT Officials", "Industry experts", "Local innovators"],
    status: "Upcoming"
  },
  {
    slug: "govtech-conference",
    title: "GovTech Conference",
    category: "Conference",
    date: "December 10, 2025",
    time: "8:00 AM - 4:00 PM",
    venue: "Provincial Capitol",
    description: "Conference on government technology solutions and digital governance best practices.",
    registrationUrl: "https://esdn.surigaodelnorte.gov.ph/events/govtech",
    fee: "Free",
    capacity: 300,
    organizer: "Provincial ICT Office",
    targetAudience: ["Government employees", "IT staff", "Policy makers"],
    agenda: ["Government tech solutions", "Case studies", "Workshops"],
    speakers: ["National govtech experts", "Local implementers"],
    status: "Upcoming"
  },
  {
    slug: "cybersecurity-month",
    title: "Cybersecurity Awareness Month",
    category: "Awareness",
    date: "October 2025",
    time: "Throughout October",
    venue: "Province-wide",
    description: "Month-long campaign to raise awareness about cybersecurity best practices.",
    registrationUrl: undefined,
    fee: "Free",
    capacity: 0,
    organizer: "Provincial ICT Office",
    targetAudience: ["Citizens", "Businesses", "Government employees"],
    agenda: ["Workshops", "Webinars", "Information campaigns"],
    speakers: ["Security experts", "Law enforcement"],
    status: "Upcoming"
  },
  {
    slug: "digital-innovation-expo",
    title: "Digital Innovation Expo",
    category: "Expo",
    date: "January 20-22, 2026",
    time: "10:00 AM - 6:00 PM",
    venue: "Surigao City Sports Complex",
    description: "Showcase of digital innovations, technologies, and solutions from local and national partners.",
    registrationUrl: "https://esdn.surigaodelnorte.gov.ph/events/expo",
    fee: "Free",
    capacity: 1000,
    organizer: "Provincial ICT Office",
    targetAudience: ["General public", "Students", "Businesses"],
    agenda: ["Exhibits", "Demos", "Talks", "Networking"],
    speakers: ["Tech innovators", "Startup founders"],
    status: "Upcoming"
  }
];

// Helper Functions
export function getDigitalServiceBySlug(slug: string): DigitalService | undefined {
  return digitalServices.find(service => service.slug === slug);
}

export function getAllDigitalServiceSlugs(): string[] {
  return digitalServices.map(service => service.slug);
}

export function getSmartProjectBySlug(slug: string): SmartProject | undefined {
  return smartProjects.find(project => project.slug === slug);
}

export function getAllSmartProjectSlugs(): string[] {
  return smartProjects.map(project => project.slug);
}

export function getDigitalInfrastructureBySlug(slug: string): DigitalInfrastructure | undefined {
  return digitalInfrastructure.find(infra => infra.slug === slug);
}

export function getAllDigitalInfrastructureSlugs(): string[] {
  return digitalInfrastructure.map(infra => infra.slug);
}

export function getEmergingTechnologyBySlug(slug: string): EmergingTechnology | undefined {
  return emergingTechnologies.find(tech => tech.slug === slug);
}

export function getAllEmergingTechnologySlugs(): string[] {
  return emergingTechnologies.map(tech => tech.slug);
}

export function getDigitalTrainingBySlug(slug: string): DigitalTraining | undefined {
  return digitalTraining.find(training => training.slug === slug);
}

export function getAllDigitalTrainingSlugs(): string[] {
  return digitalTraining.map(training => training.slug);
}

export function getDigitalSuccessStoryBySlug(slug: string): DigitalSuccessStory | undefined {
  return digitalSuccessStories.find(story => story.slug === slug);
}

export function getAllDigitalSuccessStorySlugs(): string[] {
  return digitalSuccessStories.map(story => story.slug);
}
