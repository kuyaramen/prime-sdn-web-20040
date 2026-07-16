// Activities Editorial Data Structures for Premium Editorial Experience

export interface EditorialHero {
  eyebrow: string;
  heading: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
  backgroundImage: string;
  breadcrumb: string;
}

export interface FeaturedEvent {
  title: string;
  date: string;
  location: string;
  category: string;
  story: string;
  highlights: string[];
  mainImage: string;
  supportingImages: string[];
  cta: string;
}

export interface ActivityCategory {
  id: string;
  name: string;
  count: number;
}

export interface EditorialActivityCard {
  id: number;
  title: string;
  category: string;
  date: string;
  location: string;
  summary: string;
  image: string;
  speakerCount?: number;
  registrationStatus: string;
}

export interface CalendarEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  status: 'this-week' | 'this-month' | 'upcoming' | 'completed';
}

export interface InnovationProgram {
  id: number;
  title: string;
  description: string;
  schedule: string;
  targetAudience: string;
  image: string;
}

export interface SuccessStory {
  id: number;
  title: string;
  founder: string;
  quote: string;
  outcomes: string[];
  image: string;
  category: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  size: 'large' | 'medium' | 'small';
}

export interface ImpactStat {
  value: string;
  label: string;
}

export interface InnovationPartner {
  name: string;
  type: string;
  logo: string;
  website: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  status: 'past' | 'present' | 'future';
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export interface Newsletter {
  heading: string;
  description: string;
  placeholder: string;
  buttonText: string;
}

export interface FinalCTA {
  heading: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
  backgroundImage: string;
}

// Mock Data

export const editorialHero: EditorialHero = {
  eyebrow: "ACTIVITIES",
  heading: "The Heartbeat of Innovation in Surigao del Norte",
  description: "Discover the programs, events, and initiatives driving transformation across our province. From capacity building workshops to strategic conferences, explore how PRIME SDN is shaping the future through collaborative action.",
  primaryButton: "Explore Activities",
  secondaryButton: "View Calendar",
  backgroundImage: "/706317336_1291571619818668_2899914440609868235_n.jpg",
  breadcrumb: "Home / Activities"
};

export const featuredEvent: FeaturedEvent = {
  title: "Province-Wide HRIS Implementation Program",
  date: "2028 - Ongoing",
  location: "Provincial Government Offices",
  category: "Flagship Program",
  story: "Transforming government operations through a comprehensive Human Resource Information System that streamlines HR processes, improves data accuracy, and enables evidence-based decision-making across all provincial departments and component LGUs.",
  highlights: [
    "Streamlined HR workflows across 50+ departments",
    "Real-time data analytics for workforce planning",
    "Automated payroll and benefits administration",
    "Enhanced employee performance tracking"
  ],
  mainImage: "/514695335_1032434945732338_6111306649684435036_n.jpg",
  supportingImages: [
    "/images/media__1781879352600.jpg",
    "/images/media__1781879354228.png"
  ],
  cta: "Learn More About HRIS"
};

export const activityCategories: ActivityCategory[] = [
  { id: "all", name: "All Activities", count: 8 },
  { id: "startup", name: "Startup Development", count: 2 },
  { id: "research", name: "Research & Innovation", count: 2 },
  { id: "digital", name: "Digital Transformation", count: 2 },
  { id: "partnerships", name: "Partnerships & Investment", count: 1 },
  { id: "policy", name: "Policy & Governance", count: 1 },
  { id: "community", name: "Community Innovation", count: 2 }
];

export const upcomingActivities: EditorialActivityCard[] = [
  {
    id: 1,
    title: "Data Analytics Capacity Building",
    category: "Training",
    date: "August 15-20, 2028",
    location: "Provincial Training Center",
    summary: "Structured training program for government personnel covering data analytics, visualization tools, and strategic planning methodologies to support evidence-based governance.",
    image: "/images/hero_aerial_surigao_new.jpg",
    speakerCount: 5,
    registrationStatus: "Open"
  },
  {
    id: 2,
    title: "Annual Civil Society Organizations Conference",
    category: "Event",
    date: "September 10-12, 2028",
    location: "Surigao City Convention Center",
    summary: "Provincial-wide CSO conference fostering collaboration between government and civil society organizations on science, technology, and innovation initiatives.",
    image: "/images/media__1781911485188.png",
    speakerCount: 12,
    registrationStatus: "Open"
  },
  {
    id: 3,
    title: "Digital Twin and Drone Mapping Workshop",
    category: "Training",
    date: "October 5-8, 2028",
    location: "Siargao Island",
    summary: "Hands-on training in drone-assisted aerial mapping and digital twin development for enhanced urban planning, resource management, and infrastructure development.",
    image: "/images/media__1781879354228.png",
    speakerCount: 8,
    registrationStatus: "Coming Soon"
  }
];

export const calendarEvents: CalendarEvent[] = [
  {
    id: 1,
    title: "ISO 9001 Internal Auditor Training",
    date: "July 20-21, 2028",
    time: "9:00 AM - 5:00 PM",
    location: "HRMO Training Room",
    category: "Training",
    status: "this-week"
  },
  {
    id: 2,
    title: "Strategic Planning Workshop",
    date: "July 25, 2028",
    time: "8:00 AM - 4:00 PM",
    location: "Governor's Conference Room",
    category: "Workshop",
    status: "this-week"
  },
  {
    id: 3,
    title: "Data Analytics Capacity Building",
    date: "August 15-20, 2028",
    time: "9:00 AM - 4:00 PM",
    location: "Provincial Training Center",
    category: "Training",
    status: "this-month"
  },
  {
    id: 4,
    title: "CSO Conference",
    date: "September 10-12, 2028",
    time: "All Day",
    location: "Surigao City Convention Center",
    category: "Event",
    status: "upcoming"
  },
  {
    id: 5,
    title: "AI Literacy Program Launch",
    date: "January 2034",
    time: "TBD",
    location: "Province-wide",
    category: "Program",
    status: "upcoming"
  }
];

export const latestEvents: EditorialActivityCard[] = [
  {
    id: 1,
    title: "Electronic Document Management System Launch",
    category: "Program",
    date: "June 2028",
    location: "Provincial Capitol",
    summary: "Province-wide eDMS implementation to digitize document workflows, reduce paper-based transactions, and improve inter-agency collaboration.",
    image: "/images/media__1781879354228.png",
    registrationStatus: "Completed"
  },
  {
    id: 2,
    title: "ISO 9001 Orientation",
    category: "Training",
    date: "May 2028",
    location: "HRMO Office",
    summary: "Orientation program for department heads on ISO 9001:2015 certification requirements and quality management system establishment.",
    image: "/images/media__1781879356225.png",
    registrationStatus: "Completed"
  },
  {
    id: 3,
    title: "Provincial Skills Fair",
    category: "Event",
    date: "April 2028",
    location: "Surigao City Sports Complex",
    summary: "Annual competency development and career mobility mechanism for all provincial government and component LGU personnel.",
    image: "/images/media__1781879352600.jpg",
    registrationStatus: "Completed"
  },
  {
    id: 4,
    title: "STI Council Planning Session",
    category: "Meeting",
    date: "March 2028",
    location: "Governor's Office",
    summary: "Strategic planning session for the Provincial Science, Technology, and Innovation Council to set priorities for the year.",
    image: "/images/hero_aerial_surigao_new.jpg",
    registrationStatus: "Completed"
  }
];

export const innovationPrograms: InnovationProgram[] = [
  {
    id: 1,
    title: "Startup Incubation Program",
    description: "Comprehensive support for early-stage startups including mentorship, funding access, workspace, and market development assistance.",
    schedule: "Rolling admission",
    targetAudience: "Early-stage entrepreneurs",
    image: "/images/media__1781879352600.jpg"
  },
  {
    id: 2,
    title: "Innovation Challenge Series",
    description: "Quarterly challenges addressing specific provincial problems with cash prizes and implementation support for winning solutions.",
    schedule: "Quarterly",
    targetAudience: "Innovators and problem-solvers",
    image: "/images/media__1781879354228.png"
  },
  {
    id: 3,
    title: "Government Innovation Lab",
    description: "Sandbox environment for testing new government services and digital solutions before full-scale implementation.",
    schedule: "Ongoing",
    targetAudience: "Government innovators",
    image: "/images/media__1781879356225.png"
  },
  {
    id: 4,
    title: "Digital Skills Training",
    description: "Multi-level training programs from basic digital literacy to advanced technical skills for government personnel and citizens.",
    schedule: "Monthly cohorts",
    targetAudience: "Government employees and citizens",
    image: "/images/hero_aerial_surigao_new.jpg"
  },
  {
    id: 5,
    title: "Research Forum",
    description: "Regular forum for researchers to present findings, collaborate on projects, and connect with potential implementation partners.",
    schedule: "Bi-monthly",
    targetAudience: "Academic and industry researchers",
    image: "/images/media__1781911485188.png"
  },
  {
    id: 6,
    title: "Hackathon Surigao",
    description: "Annual 48-hour hackathon bringing together developers, designers, and problem-solvers to create innovative solutions.",
    schedule: "Annual",
    targetAudience: "Tech community",
    image: "/images/media__1781879352600.jpg"
  }
];

export const successStories: SuccessStory[] = [
  {
    id: 1,
    title: "From Idea to Implementation: The eDMS Journey",
    founder: "Provincial ICT Office",
    quote: "The Electronic Document Management System has transformed how we work. What used to take days now takes minutes, and inter-agency collaboration has never been easier.",
    outcomes: [
      "70% reduction in paper usage",
      "90% faster document retrieval",
      "Improved inter-agency collaboration",
      "Enhanced data security"
    ],
    image: "/images/media__1781879354228.png",
    category: "Digital Transformation"
  },
  {
    id: 2,
    title: "Building Quality Culture: ISO Certification Success",
    founder: "HRMO Department",
    quote: "ISO 9001 certification wasn't just about getting a certificate. It was about building a culture of quality and continuous improvement that serves our citizens better.",
    outcomes: [
      "5 departments certified",
      "Standardized processes",
      "Improved service delivery",
      "Continuous improvement mindset"
    ],
    image: "/images/media__1781879356225.png",
    category: "Governance"
  }
];

export const galleryImages: GalleryImage[] = [
  { id: 1, src: "/688415825_1278653744443789_2393844347668057330_n.jpg", alt: "Training workshop", size: "large" },
  { id: 2, src: "/514413009_1032434855732347_9932842189465819_n (1).jpg", alt: "Digital transformation", size: "medium" },
  { id: 3, src: "/images/641342845_1221725760136588_2137964741726887904_n.jpg", alt: "Team collaboration", size: "small" },
  { id: 4, src: "/images/Surigao-Del-Norte-town.jpg", alt: "Surigao landscape", size: "large" },
  { id: 5, src: "/images/500773863_1006596224982877_6354662868781187937_n.jpg", alt: "Conference event", size: "medium" },
  { id: 6, src: "/images/593797659_1157390596570105_2233484891158434992_n.jpg", alt: "Innovation lab", size: "small" }
];

export const communityImpact: ImpactStat[] = [
  { value: "5,000+", label: "Participants Trained" },
  { value: "250+", label: "Innovation Projects" },
  { value: "150+", label: "Training Sessions" },
  { value: "60+", label: "Partner Organizations" },
  { value: "30+", label: "Communities Reached" },
  { value: "8", label: "Component LGUs" }
];

export const innovationPartners: InnovationPartner[] = [
  { name: "DOST", type: "Government", logo: "/images/partners/dost.png", website: "https://dost.gov.ph" },
  { name: "DICT", type: "Government", logo: "/images/partners/dict.png", website: "https://dict.gov.ph" },
  { name: "Surigao State University", type: "Academia", logo: "/images/partners/snsu.png", website: "https://snsu.edu.ph" },
  { name: "TESDA", type: "Government", logo: "/images/partners/tesda.png", website: "https://tesda.gov.ph" },
  { name: "Private Sector Partners", type: "Industry", logo: "/images/partners/private.png", website: "#" },
  { name: "CSO Network", type: "Civil Society", logo: "/images/partners/cso.png", website: "#" }
];

export const timelineMilestones: TimelineMilestone[] = [
  { year: "2028", title: "Foundation Phase", description: "Launch of core programs and HRIS implementation", status: "past" },
  { year: "2031", title: "Growth Phase", description: "Expansion to component LGUs and digital services", status: "present" },
  { year: "2034", title: "Acceleration Phase", description: "AI literacy and advanced analytics deployment", status: "future" },
  { year: "2040", title: "Transformation Phase", description: "Full innovation ecosystem maturity", status: "future" }
];

export const activitiesFAQ: FAQ[] = [
  {
    question: "How can I register for activities?",
    answer: "Registration is available through our online portal. Simply navigate to the specific activity page and click the registration button. Some activities may require approval or prerequisites.",
    category: "Registration"
  },
  {
    question: "Who can participate in PRIME SDN activities?",
    answer: "Most activities are open to government personnel, students, entrepreneurs, researchers, and community members. Some programs may have specific eligibility requirements listed in their descriptions.",
    category: "Eligibility"
  },
  {
    question: "Are there fees for participation?",
    answer: "Many PRIME SDN activities are free, especially for government personnel and residents. Some specialized training programs may have nominal fees to cover materials and facilitation costs.",
    category: "Programs"
  },
  {
    question: "Do participants receive certificates?",
    answer: "Yes, certificates of completion or participation are provided for most training programs and workshops. These can be used for professional development and career advancement.",
    category: "Certificates"
  },
  {
    question: "How can I propose a new activity or partnership?",
    answer: "We welcome proposals for new activities and partnerships. Contact the PRIME SDN secretariat through our contact page or visit the provincial ICT office to discuss your proposal.",
    category: "Partnership"
  }
];

export const newsletter: Newsletter = {
  heading: "Stay Informed",
  description: "Subscribe to receive updates on upcoming activities, innovation news, and opportunities to participate in Surigao del Norte's transformation journey.",
  placeholder: "Enter your email address",
  buttonText: "Subscribe"
};

export const finalCTA: FinalCTA = {
  heading: "Join the Next Wave of Innovation",
  description: "Be part of Surigao del Norte's transformation. Whether you want to participate in activities, partner with us, or simply stay informed, there's a place for you in our innovation ecosystem.",
  primaryButton: "Browse Activities",
  secondaryButton: "Become a Partner",
  backgroundImage: "/706317336_1291571619818668_2899914440609868235_n.jpg"
};
