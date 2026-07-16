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
    slug: "unified-digital-services-portal",
    name: "Unified Digital Services Portal",
    description: "Single, unified services portal integrating all public services across provincial departments.",
    serviceUrl: "https://esdn.surigaodelnorte.gov.ph",
    requirements: ["Valid ID", "Registered Account", "Internet Connection"],
    officeResponsible: "Provincial ICT Office",
    category: "Government",
    status: "Active",
    icon: "Globe",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    fullDescription: "The Unified Digital Services Portal provides citizens with a single point of access to all provincial government services. From business permits to tax payments, civil registrations to health services, citizens can access essential services online, reducing the need for physical visits and improving service delivery efficiency.",
    benefits: ["One-Stop Service Access", "Interoperable Systems", "24/7 Availability", "Reduced Processing Time"],
    accessProcess: ["Create Account", "Select Service", "Submit Requirements", "Track Application", "Receive Result"],
    contactInfo: "ict@surigaodelnorte.gov.ph | (086) 826-0123",
    faqs: [
      { question: "What services are available?", answer: "All provincial government services are available through the unified portal." },
      { question: "Is the portal secure?", answer: "Yes, the portal uses bank-grade encryption and follows data privacy standards." }
    ]
  },
  {
    slug: "digital-feedback-system",
    name: "Digital Public Feedback System",
    description: "Multi-channel digital platform for receiving, tracking, and resolving public feedback and complaints.",
    serviceUrl: "https://esdn.surigaodelnorte.gov.ph/feedback",
    requirements: ["Registered Account", "Contact Information"],
    officeResponsible: "Provincial Information Office",
    category: "Citizen",
    status: "Active",
    icon: "MessageSquare",
    coverImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
    fullDescription: "The Digital Public Feedback System enables citizens to report issues, suggest improvements, and provide feedback on government services through multiple channels. All submissions are tracked, routed to appropriate agencies, and resolved within specified timeframes, ensuring transparent and responsive governance.",
    benefits: ["Multi-Channel Access", "Real-Time Tracking", "Transparent Resolution", "Service Ratings"],
    accessProcess: ["Submit Feedback", "Receive Reference Number", "Track Status", "Rate Resolution"],
    contactInfo: "feedback@surigaodelnorte.gov.ph | (086) 826-0567",
    faqs: []
  },
  {
    slug: "mobile-taxpayer-app",
    name: "Mobile Taxpayer Access App",
    description: "Provincial mobile application providing citizens with real-time access to tax-related services.",
    serviceUrl: "https://esdn.surigaodelnorte.gov.ph/mobile",
    requirements: ["Smartphone", "Valid ID", "Tax Identification Number"],
    officeResponsible: "Provincial Treasurer",
    category: "Government",
    status: "Active",
    icon: "CreditCard",
    coverImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    fullDescription: "The Mobile Taxpayer Access App enables citizens to access tax-related services from their smartphones. Features include tax declaration viewing, payment processing, assessment tracking, and budget transparency information, making tax administration more accessible and convenient for all citizens.",
    benefits: ["Mobile Access", "Real-Time Updates", "Secure Payments", "Budget Transparency"],
    accessProcess: ["Download App", "Register Account", "Verify Identity", "Access Services"],
    contactInfo: "treasury@surigaodelnorte.gov.ph | (086) 826-0234",
    faqs: []
  },
  {
    slug: "eprocurement-system",
    name: "End-to-End eProcurement System",
    description: "Full digitization of the entire procurement cycle from bidding to delivery tracking.",
    serviceUrl: "https://esdn.surigaodelnorte.gov.ph/procurement",
    requirements: ["Supplier Registration", "Business Permit", "Valid Credentials"],
    officeResponsible: "BAC Secretariat",
    category: "Business",
    status: "Active",
    icon: "Briefcase",
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    fullDescription: "The End-to-End eProcurement System digitizes the entire procurement process, from bid posting to award, contract management, and delivery tracking. Integrated with PhilGEPS and the IFMS, the system ensures transparency, efficiency, and accountability in all government procurement activities.",
    benefits: ["Transparent Bidding", "Faster Processing", "Real-Time Tracking", "Reduced Paperwork"],
    accessProcess: ["Register as Supplier", "View Bid Opportunities", "Submit Bids", "Track Awards"],
    contactInfo: "bac@surigaodelnorte.gov.ph | (086) 826-0456",
    faqs: []
  }
];

export const smartProjects: SmartProject[] = [
  {
    slug: "real-time-governance-dashboard",
    name: "Real-Time Governance Dashboard",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    description: "Integrated real-time data dashboard combining HRIS, eDMS, IFMS, and key sectoral databases for evidence-based decision-making.",
    objectives: ["Data-driven governance", "Real-time monitoring", "Inter-agency coordination", "Predictive planning"],
    technologies: ["Data Integration", "Real-Time Analytics", "Dashboard Visualization", "Cloud Infrastructure"],
    status: "Implementation",
    timeline: ["2028: HRIS and eDMS integration", "2031: IFMS integration", "2034: Full sectoral database integration", "2037: Predictive analytics"],
    partners: ["Provincial ICT Office", "HRMO", "PTO", "DICT"],
    budget: "₱25M",
    location: "Provincial Capitol",
    startDate: "2028",
    targetCompletion: "2037",
    impact: ["Improved decision-making", "Faster response times", "Better resource allocation", "Transparent governance"],
    gallery: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"],
    updates: [
      { date: "2028", title: "Phase 1 Complete", description: "HRIS and eDMS successfully integrated into governance dashboard." }
    ]
  },
  {
    slug: "unified-security-response-system",
    name: "Unified Security and Response Coordination System",
    coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    description: "Integrated public safety coordination system with province-wide 911 emergency hotline and smart policing capabilities.",
    objectives: ["Enhanced public safety", "Faster emergency response", "Inter-agency coordination", "Crime prevention"],
    technologies: ["911 Hotline", "IoT Sensors", "AI Analytics", "Smart Policing"],
    status: "Implementation",
    timeline: ["2028: 911 hotline deployment", "2031: Phase 1 security system", "2034: Phase 2 predictive analytics", "2037: Phase 3 smart policing"],
    partners: ["PPOC", "PDEA", "DILG", "DICT"],
    budget: "₱50M",
    location: "Province-wide",
    startDate: "2028",
    targetCompletion: "2040",
    impact: ["Faster emergency response", "Reduced crime rates", "Improved public safety", "Drug-free communities"],
    gallery: ["https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"],
    updates: []
  },
  {
    slug: "digital-twin-urban-planning",
    name: "Digital Twin for Urban Planning",
    coverImage: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80",
    description: "Province-wide drone-assisted aerial mapping and digital twin development for enhanced urban planning and resource management.",
    objectives: ["Accurate mapping", "Urban planning support", "Resource management", "Infrastructure development"],
    technologies: ["Drone Mapping", "GIS", "Digital Twin", "3D Modeling"],
    status: "Planning",
    timeline: ["2031: Aerial mapping", "2034: Digital twin development", "2037: Full integration", "2040: Predictive modeling"],
    partners: ["DOST", "DENR", "LGUs", "DICT"],
    budget: "₱30M",
    location: "Province-wide",
    startDate: "2031",
    targetCompletion: "2040",
    impact: ["Better urban planning", "Resource optimization", "Infrastructure efficiency", "Disaster preparedness"],
    gallery: ["https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80"],
    updates: []
  },
  {
    slug: "ai-powered-revenue-forecasting",
    name: "AI-Powered Revenue Forecasting System",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    description: "AI-powered revenue forecasting and predictive analytics for enhanced fiscal management and budget planning.",
    objectives: ["Accurate forecasting", "Budget optimization", "Fiscal transparency", "Data-driven planning"],
    technologies: ["Machine Learning", "Predictive Analytics", "Data Mining", "AI Models"],
    status: "Planning",
    timeline: ["2034: System development", "2037: Pilot deployment", "2040: Full implementation"],
    partners: ["PTO", "DICT", "DOST", "NEDA"],
    budget: "₱20M",
    location: "Provincial Treasury",
    startDate: "2034",
    targetCompletion: "2040",
    impact: ["Better budget planning", "Improved revenue collection", "Fiscal transparency", "Optimized resource allocation"],
    gallery: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"],
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
    name: "Artificial Intelligence for Governance",
    category: "AI",
    overview: "AI technologies for government services, data analysis, and decision support systems.",
    applications: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Chatbots"],
    localUseCases: ["Revenue forecasting", "Document processing", "Service chatbots", "Fraud detection"],
    futureOpportunities: ["Smart city optimization", "Personalized services", "Automated inspections"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    adoptionLevel: "Growing",
    relatedProjects: ["real-time-governance-dashboard", "ai-powered-revenue-forecasting"]
  },
  {
    slug: "internet-of-things",
    name: "IoT Network for Public Safety",
    category: "IoT",
    overview: "Integrated IoT sensor network for public safety monitoring, resource management, and urban planning.",
    applications: ["Environmental monitoring", "Asset tracking", "Smart meters", "Security systems"],
    localUseCases: ["Public safety sensors", "Traffic monitoring", "Water quality monitoring", "Energy management"],
    futureOpportunities: ["Smart buildings", "Precision agriculture", "Health monitoring"],
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80",
    adoptionLevel: "Mature",
    relatedProjects: ["unified-security-response-system"]
  },
  {
    slug: "digital-twin",
    name: "Digital Twin Technology",
    category: "Digital Twin",
    overview: "Digital twin development for urban planning, resource management, and infrastructure development.",
    applications: ["Urban planning", "Disaster management", "Resource mapping", "Service delivery"],
    localUseCases: ["Flood mapping", "Infrastructure planning", "Agricultural zones", "Tourism routes"],
    futureOpportunities: ["3D modeling", "Real-time tracking", "Predictive modeling"],
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80",
    adoptionLevel: "Pilot",
    relatedProjects: ["digital-twin-urban-planning"]
  },
  {
    slug: "predictive-analytics",
    name: "Predictive Analytics for Planning",
    category: "AI",
    overview: "Predictive models and analytics for HR monitoring, urban planning, resource management, and public safety.",
    applications: ["HR monitoring", "Urban planning", "Resource management", "Public safety"],
    localUseCases: ["HR demand forecasting", "Infrastructure planning", "Budget optimization", "Crime prediction"],
    futureOpportunities: ["Smart city optimization", "Resource allocation", "Policy simulation"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    adoptionLevel: "Growing",
    relatedProjects: ["real-time-governance-dashboard", "ai-powered-revenue-forecasting"]
  }
];

export const cybersecurityInitiatives: CybersecurityInitiative[] = [
  {
    slug: "cybersecurity-plan",
    name: "Provincial Cybersecurity Plan",
    type: "Standard",
    description: "Comprehensive cybersecurity framework and implementation plan for provincial government systems and data protection.",
    targetAudience: ["Government Agencies", "ICT Staff", "Department Heads"],
    resources: ["Cybersecurity policy document", "Implementation guidelines", "Risk assessment tools"],
    guidelines: ["Data protection standards", "Access control protocols", "Incident response procedures", "Compliance requirements"],
    bestPractices: ["Regular security audits", "Employee training", "System updates", "Backup protocols"],
    incidentReporting: "Report incidents to security@surigaodelnorte.gov.ph",
    implementationDate: "2028",
    status: "Implementation"
  },
  {
    slug: "data-privacy-implementation",
    name: "Data Privacy Implementation",
    type: "Privacy",
    description: "Implementation of data protection standards and privacy frameworks aligned with national data privacy laws for government data.",
    targetAudience: ["Government Agencies", "Data Handlers", "Citizens"],
    resources: ["Privacy policy templates", "Data handling procedures", "Consent forms"],
    guidelines: ["Data minimization", "Purpose limitation", "Storage limits", "Access controls"],
    bestPractices: ["Encrypt sensitive data", "Regular audits", "Privacy by design", "Data breach protocols"],
    implementationDate: "2028",
    status: "Implementation"
  },
  {
    slug: "information-security-management",
    name: "Information Security Management System",
    type: "Standard",
    description: "ISO 27001-aligned information security management system for provincial government information assets.",
    targetAudience: ["Government Agencies", "ICT Staff", "Management"],
    resources: ["ISMS framework", "Security policies", "Risk assessment tools"],
    guidelines: ["Asset classification", "Access management", "Physical security", "Network security"],
    bestPractices: ["Continuous monitoring", "Regular reviews", "Incident management", "Business continuity"],
    implementationDate: "2031",
    status: "Planning"
  }
];

export const digitalTraining: DigitalTraining[] = [
  {
    slug: "data-analytics-capacity-building",
    title: "Data Analytics Capacity Building",
    category: "Government Training",
    description: "Structured training program for government personnel covering data analytics, visualization tools, and strategic planning methodologies.",
    provider: "Provincial ICT Office + HRMO",
    duration: "8 weeks",
    schedule: "Weekdays",
    registrationUrl: "https://esdn.surigaodelnorte.gov.ph/training/data-analytics",
    targetAudience: ["Government employees", "Department heads", "Planning officers"],
    topics: ["Data analysis fundamentals", "Visualization tools", "Strategic planning", "Evidence-based decision-making"],
    prerequisites: ["Basic computer skills", "Government employment"],
    certification: true,
    fee: "Free",
    capacity: 50,
    startDate: "2028",
    endDate: "2028",
    location: "Provincial Capitol",
    mode: "In-Person"
  },
  {
    slug: "ai-literacy-program",
    title: "AI Literacy for Government Personnel",
    category: "AI Skills",
    description: "Multi-year AI literacy and professional development program enabling government employees to leverage AI tools for improved public service delivery.",
    provider: "Provincial ICT Office + DOST",
    duration: "4 weeks per module",
    schedule: "Weekends",
    registrationUrl: "https://esdn.surigaodelnorte.gov.ph/training/ai-literacy",
    targetAudience: ["Government employees", "ICT staff", "Department heads"],
    topics: ["AI fundamentals", "AI tools for government", "Ethics and governance", "Practical applications"],
    prerequisites: ["Basic computer skills", "Government employment"],
    certification: true,
    fee: "Free",
    capacity: 40,
    startDate: "2034",
    endDate: "2034",
    location: "Provincial Capitol",
    mode: "Hybrid"
  },
  {
    slug: "iso-internal-audit-training",
    title: "ISO 9001 Internal Auditor Training",
    category: "Government Training",
    description: "Internal Quality Auditor certification training for ISO 9001:2015 compliance and quality management systems.",
    provider: "HRMO + External Certifiers",
    duration: "2 weeks",
    schedule: "Weekdays",
    registrationUrl: "https://esdn.surigaodelnorte.gov.ph/training/iso-audit",
    targetAudience: ["Quality officers", "Department heads", "Process owners"],
    topics: ["ISO 9001 standards", "Internal audit techniques", "Quality management", "Compliance requirements"],
    prerequisites: ["Quality management experience", "Government employment"],
    certification: true,
    fee: "Free",
    capacity: 30,
    startDate: "2028",
    endDate: "2028",
    location: "Provincial Capitol",
    mode: "In-Person"
  },
  {
    slug: "strategic-planning-workshop",
    title: "Strategic Planning and Data-Driven Governance Workshop",
    category: "Government Training",
    description: "Capacity building on strategic planning, data-driven decision-making, and performance monitoring for responsive governance.",
    provider: "Provincial Planning Office + HRMO",
    duration: "1 week",
    schedule: "Weekdays",
    registrationUrl: "https://esdn.surigaodelnorte.gov.ph/training/strategic-planning",
    targetAudience: ["Department heads", "Planning officers", "Policy makers"],
    topics: ["Strategic planning frameworks", "Data-driven governance", "Performance monitoring", "Responsive decision-making"],
    prerequisites: ["Management position", "Government employment"],
    certification: true,
    fee: "Free",
    capacity: 25,
    startDate: "2028",
    endDate: "2028",
    location: "Provincial Capitol",
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
