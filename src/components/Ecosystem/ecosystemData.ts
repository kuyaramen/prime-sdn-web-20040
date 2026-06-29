export interface ProgramItem {
  title: string;
  type: "Initiative" | "Training" | "Incubation" | "Scholarship" | "Accelerator";
  description: string;
}

export interface ProjectItem {
  title: string;
  type: "Research" | "Activity" | "Event";
  description: string;
  date?: string;
}

export interface PolicyItem {
  title: string;
  number: string;
  type: "Executive Order" | "Provincial Ordinance" | "Resolution";
  year: string;
}

export interface SuccessStoryItem {
  beneficiary: string;
  type: "Beneficiary" | "Startup" | "Community Impact";
  story: string;
  impact: string;
}

export interface NewsItem {
  title: string;
  type: "Article" | "Announcement";
  date: string;
  summary: string;
}

export interface PartnerItem {
  name: string;
  type: "DOST" | "DTI" | "DICT" | "CHED" | "LGU" | "University" | "Private Sector";
}

export interface RoadmapItem {
  year: string;
  milestone: string;
  target: string;
}

export interface WhyItMattersItem {
  title: string;
  description: string;
  type: "Problem" | "Current Situation" | "Desired Future" | "Expected Impact";
}

export interface WorkflowItem {
  step: number;
  title: string;
  description: string;
}

export interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export interface EcosystemPillar {
  id: string;
  title: string;
  slug: string;
  description: string;
  accentColor: string;
  accentColorRgb: string; // for box-shadow rgba
  iconName: string;
  mission: string;
  vision: string;
  whyItMatters: WhyItMattersItem[];
  workflow: WorkflowItem[];
  stats: StatItem[];
  objectives: string[];
  tooltipMetrics: string[];
  programs: ProgramItem[];
  projects: ProjectItem[];
  roadmap: RoadmapItem[];
  partners: PartnerItem[];
  policies: PolicyItem[];
  successStories: SuccessStoryItem[];
  news: NewsItem[];
  heroImage: string;
  ctaText: string;
}

export const ECOSYSTEM_PILLARS: EcosystemPillar[] = [
  {
    id: "startup-development",
    title: "Startup Development",
    slug: "startup-development",
    description: "Building a thriving startup culture that transforms local ideas into scalable ventures.",
    accentColor: "#F59E0B",
    accentColorRgb: "245, 158, 11",
    iconName: "Rocket",
    mission: "Cultivate a resilient startup ecosystem in Surigao del Norte by providing mentorship, funding pathways, co-working infrastructure, and market access that empowers entrepreneurs to build globally competitive ventures from local roots.",
    vision: "To establish Surigao del Norte as a leading regional center for technology and social entrepreneurship in Mindanao by 2040.",
    whyItMatters: [
      { title: "The Problem", description: "Local talent often leaves for metropolitan areas due to lack of local funding and mentorship opportunities.", type: "Problem" },
      { title: "Current Situation", description: "Emerging ideas lack the structured incubation necessary to reach viable MVP stages.", type: "Current Situation" },
      { title: "Desired Future", description: "A thriving local economy where native startups solve regional problems and compete globally.", type: "Desired Future" },
      { title: "Expected Impact", description: "Creation of high-value tech jobs, wealth retention, and a diversified provincial economy.", type: "Expected Impact" }
    ],
    workflow: [
      { step: 1, title: "Ideation", description: "Founders define scalable solutions to local problems." },
      { step: 2, title: "Incubation", description: "Structured mentorship and MVP development at PRIME Hub." },
      { step: 3, title: "Funding", description: "Access to seed grants and venture capital networks." },
      { step: 4, title: "Scaling", description: "Expanding market reach and product capabilities." }
    ],
    stats: [
      { value: 12, label: "Active Initiatives" },
      { value: 4, label: "Incubators Established" },
      { value: 18, label: "Supported Startups" },
      { value: 50, prefix: "₱", suffix: "M+", label: "Target Funding" }
    ],
    objectives: [
      "Establish permanent co-working hubs and incubation centers in key municipalities.",
      "Launch specialized accelerator programs in AgriTech, AquaTech, and E-Tourism.",
      "Facilitate PHP 50M+ in seed funding and venture capital for local founders.",
      "Retain and nurture local tech talent within the province."
    ],
    tooltipMetrics: [
      "12 Initiatives Active",
      "4 Incubators Established",
      "18 Supported Startups"
    ],
    programs: [
      {
        title: "PRIME Launchpad",
        type: "Incubation",
        description: "A 6-month foundational program designed to guide early-stage founders from ideation to minimum viable product (MVP)."
      },
      {
        title: "AgriTech & AquaTech Accelerator",
        type: "Accelerator",
        description: "Scale-up assistance for technology ventures focusing on sustainable agriculture, aquaculture, and coastal resources."
      },
      {
        title: "Youth Founder Fellowship",
        type: "Training",
        description: "A student-focused fellowship offering mentorship, digital skills training, and micro-grants for high school and university builders."
      },
      {
        title: "SDN Startup Grants",
        type: "Initiative",
        description: "Equity-free seed funding and pre-Series A capital sponsored by the Provincial Government and partner organizations."
      }
    ],
    projects: [
      {
        title: "PRIME Hub Surigao",
        type: "Activity",
        description: "Developing a 400 sqm co-working space equipped with high-speed internet, meeting rooms, and training spaces.",
        date: "Q3 2025"
      },
      {
        title: "Mindanao Innovation Summit",
        type: "Event",
        description: "Annual gathering of tech founders, investors, and government representatives to celebrate local technology builds.",
        date: "December 2025"
      }
    ],
    roadmap: [
      { year: "2025", milestone: "Establish basic framework and register the initial cohort of 10 startups", target: "10 active ventures" },
      { year: "2026", milestone: "Open the first physical PRIME Hub co-working facility in Surigao City", target: "1 physical space" },
      { year: "2030", milestone: "Capitalize the SDN Startup Venture Fund and scale active ventures", target: "₱50M total funding" },
      { year: "2040", milestone: "Nurture mature local startups expanding to national and international markets", target: "50+ mature startups" }
    ],
    partners: [
      { name: "Department of Trade and Industry", type: "DTI" },
      { name: "Department of Science and Technology", type: "DOST" },
      { name: "Surigao State University", type: "University" },
      { name: "Mindanao VC Network", type: "Private Sector" }
    ],
    policies: [
      {
        title: "Surigao del Norte Innovative Startup Ordinance",
        number: "Ordinance No. 2024-012",
        type: "Provincial Ordinance",
        year: "2024"
      },
      {
        title: "Creation of Provincial Startup Development Committee",
        number: "Executive Order No. 25",
        type: "Executive Order",
        year: "2025"
      }
    ],
    successStories: [
      {
        beneficiary: "Siargao Go (E-Tourism System)",
        type: "Startup",
        story: "Developed a local booking platform that connects independent local tour guides with tourists, increasing average guide revenue by 40%.",
        impact: "Saved 200+ local tourism jobs during off-peak seasons."
      }
    ],
    news: [
      {
        title: "Provincial Startup Fund Opens Applications for 2025 Cohort",
        type: "Announcement",
        date: "June 20, 2026",
        summary: "Local tech founders can now apply for equity-free grants up to PHP 250,000 for early validation."
      }
    ],
    heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
    ctaText: "Join the PRIME Launchpad Cohort"
  },
  {
    id: "education-talent",
    title: "Education & Talent",
    slug: "education-and-talent",
    description: "Developing a world-class, future-ready workforce rooted in the Surigaonon identity.",
    accentColor: "#10B981",
    accentColorRgb: "16, 185, 129",
    iconName: "GraduationCap",
    mission: "Invest in human capital development by aligning education, training, and scholarship programs with the innovation economy needs of Surigao del Norte, ensuring every Surigaonon has access to quality learning pathways.",
    vision: "To create a highly skilled, adaptive workforce specializing in software, engineering, and green tech by 2040.",
    whyItMatters: [
      { title: "The Problem", description: "Mismatch between traditional academic curricula and the demands of the modern digital economy.", type: "Problem" },
      { title: "Current Situation", description: "Students lack access to advanced digital tools and early exposure to emerging technologies.", type: "Current Situation" },
      { title: "Desired Future", description: "A seamless pipeline from basic education to advanced technical proficiency tailored to local industries.", type: "Desired Future" },
      { title: "Expected Impact", description: "A robust, highly skilled workforce capable of leading Surigao's technological transformation.", type: "Expected Impact" }
    ],
    workflow: [
      { step: 1, title: "K-12 Exposure", description: "Introducing robotics and coding fundamentals early in public schools." },
      { step: 2, title: "Scholarships", description: "Providing financial access to specialized STEM degrees." },
      { step: 3, title: "Skills Training", description: "Intensive bootcamps for rapid upskilling and certification." },
      { step: 4, title: "Industry Placement", description: "Connecting trained talent directly with local startups and tech partners." }
    ],
    stats: [
      { value: 8, label: "Active Programs" },
      { value: 15, label: "Partner Schools" },
      { value: 250, suffix: "+", label: "Scholarships Awarded" },
      { value: 10, suffix: "k+", label: "Citizens to Upskill" }
    ],
    objectives: [
      "Establish future-ready digital labs in every secondary school in the province.",
      "Double the number of STEM graduates from provincial state colleges.",
      "Upskill 10,000+ local citizens in digital literacy and basic coding.",
      "Launch a comprehensive scholarship system matching global tech requirements."
    ],
    tooltipMetrics: [
      "8 Programs Active",
      "15 Partner Schools",
      "250+ Scholarships Awarded"
    ],
    programs: [
      {
        title: "PRIME Scholars Program",
        type: "Scholarship",
        description: "Full financial assistance for outstanding Surigaonon youth pursuing degrees in Computer Science, Data Analytics, and Environmental Engineering."
      },
      {
        title: "Coding Bootcamps & Digital Academies",
        type: "Training",
        description: "Intensive, 12-week certificate courses focused on full-stack web development, digital marketing, and virtual assistance."
      },
      {
        title: "K-12 Innovation Labs Integration",
        type: "Initiative",
        description: "Providing modern STEM kits and digital devices to public high schools to encourage experimental thinking."
      }
    ],
    projects: [
      {
        title: "Digital Literacy Caravan",
        type: "Activity",
        description: "Mobilizing training trucks equipped with laptops and solar power to deliver coding lessons to remote island barangays.",
        date: "Ongoing"
      },
      {
        title: "Provincial Robotics Olympiad",
        type: "Event",
        description: "A high school robotics competition showcasing student inventions designed to solve municipal waste management challenges.",
        date: "October 2025"
      }
    ],
    roadmap: [
      { year: "2025", milestone: "Fund the initial batch of 100 PRIME scholars in STEM fields", target: "100 beneficiaries" },
      { year: "2026", milestone: "Establish a digital learning academy in Surigao City", target: "1 digital academy" },
      { year: "2030", milestone: "Achieve 85% deployment of digital labs in all public high schools", target: "85% coverage" },
      { year: "2040", milestone: "Complete integration of AI and future-tech curricula in state institutions", target: "100% integration" }
    ],
    partners: [
      { name: "Commission on Higher Education", type: "CHED" },
      { name: "Technical Education and Skills Development Authority", type: "CHED" },
      { name: "Surigao State University", type: "University" },
      { name: "Siargao Island Institute of Technology", type: "University" }
    ],
    policies: [
      {
        title: "An Ordinance Establishing the PRIME Science and Technology Scholarship Program",
        number: "Ordinance No. 2024-009",
        type: "Provincial Ordinance",
        year: "2024"
      }
    ],
    successStories: [
      {
        beneficiary: "Maria Angelica Cruz",
        type: "Beneficiary",
        story: "A fisherman's daughter from Del Carmen, Siargao. Funded through the PRIME Scholar Program, graduated with a BS in Computer Science, and is now working as a software developer.",
        impact: "Currently mentoring 15 other local students in programming."
      }
    ],
    news: [
      {
        title: "TESDA and PRIME SDN Launch Smart Agriculture Drone Training Course",
        type: "Announcement",
        date: "May 12, 2026",
        summary: "30 local scholars selected to undergo technical training in piloting and maintaining crop monitoring drones."
      }
    ],
    heroImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80",
    ctaText: "Apply for a Technology Scholarship"
  },
  {
    id: "research-innovation",
    title: "Research & Innovation",
    slug: "research-and-innovation",
    description: "Generating cutting-edge research that translates local knowledge into global solutions.",
    accentColor: "#8B5CF6",
    accentColorRgb: "139, 92, 246",
    iconName: "FlaskConical",
    mission: "Position Surigao del Norte as a research powerhouse by funding applied R&D that leverages the province's unique marine, mineral, and agricultural assets, bridging academic excellence with commercial and social impact.",
    vision: "To make Surigao del Norte a recognized national center of excellence for sustainable marine science and mining rehabilitation technology by 2040.",
    whyItMatters: [
      { title: "The Problem", description: "Valuable local resources are underutilized or unsustainably extracted due to lack of localized scientific study.", type: "Problem" },
      { title: "Current Situation", description: "Academic research often remains theoretical without pathways to commercial or municipal implementation.", type: "Current Situation" },
      { title: "Desired Future", description: "A bridge between local laboratories and global markets translating endemic knowledge into patented solutions.", type: "Desired Future" },
      { title: "Expected Impact", description: "Sustainable resource management, novel biotechnology products, and a globally recognized research ecosystem.", type: "Expected Impact" }
    ],
    workflow: [
      { step: 1, title: "Funding", description: "Allocating R&D grants to promising local research proposals." },
      { step: 2, title: "Prototyping", description: "Utilizing Innovation Labs for testing and validation." },
      { step: 3, title: "IP Registration", description: "Securing patents and utility models for developed technologies." },
      { step: 4, title: "Commercialization", description: "Partnering with industry for mass production and deployment." }
    ],
    stats: [
      { value: 14, label: "Research Projects" },
      { value: 3, label: "Innovation Labs" },
      { value: 22, label: "Patented Technologies" },
      { value: 50, suffix: "+", label: "Target Funded Projects" }
    ],
    objectives: [
      "Establish the Surigao Marine and Coastal Research Institute.",
      "Fund 50+ research projects targeting sustainable utilization of nickel and other mineral resources.",
      "Acquire 30+ patents and utility models representing local intellectual property.",
      "Bridge local university researchers with multinational industrial partners."
    ],
    tooltipMetrics: [
      "14 Research Projects",
      "3 Innovation Labs",
      "22 Patented Technologies"
    ],
    programs: [
      {
        title: "PRIME Applied R&D Grants",
        type: "Initiative",
        description: "Competitive funding program supporting researchers looking to develop market-viable solutions in local sectors."
      },
      {
        title: "Marine and Coastal Innovation Labs",
        type: "Incubation",
        description: "Research laboratory infrastructure focusing on coral reef restoration, seaweed propagation, and sustainable aquaculture."
      },
      {
        title: "Mineral Wealth Tech Incubator",
        type: "Accelerator",
        description: "Partnering with chemical and mining engineering departments to develop environmentally safe waste treatment methods."
      }
    ],
    projects: [
      {
        title: "Siargao Mangrove Carbon Blue Project",
        type: "Research",
        description: "Quantifying carbon sequestration capabilities of Siargao's vast mangrove forests for carbon credit integration.",
        date: "Launched Jan 2025"
      },
      {
        title: "Eco-Rehabilitation of Post-Mining Sites",
        type: "Research",
        description: "Testing endemic plant species for heavy-metal phytoextraction in decommissioned mining lands in Claver.",
        date: "Q4 2025"
      }
    ],
    roadmap: [
      { year: "2025", milestone: "Establish the Surigao Marine Lab and procure molecular testing equipment", target: "1 core facility" },
      { year: "2027", milestone: "Register 10 patents for agricultural food-processing devices", target: "10 patents" },
      { year: "2030", milestone: "Establish the Carbon Blue Credit trading framework with private developers", target: "₱30M credits valuation" },
      { year: "2040", milestone: "Maintain fully commercialized university technology transfer models", target: "30+ active technology licensing agreements" }
    ],
    partners: [
      { name: "Department of Science and Technology", type: "DOST" },
      { name: "Surigao State University R&D Division", type: "University" },
      { name: "National Fisheries Research and Development Institute", type: "DOST" },
      { name: "Claver Mining Group Coalition", type: "Private Sector" }
    ],
    policies: [
      {
        title: "An Ordinance Establishing the Surigao Science and Research Council",
        number: "Ordinance No. 2025-004",
        type: "Provincial Ordinance",
        year: "2025"
      }
    ],
    successStories: [
      {
        beneficiary: "Seaweed Bioplastics Lab",
        type: "Community Impact",
        story: "A research team from SNSU developed a biodegradable packaging alternative utilizing locally farmed red seaweeds, providing a secondary income stream for seaweed farmers.",
        impact: "99% reduction in single-use plastic reliance for pilot businesses."
      }
    ],
    news: [
      {
        title: "SDN Researchers Win Best R&D Award at National Science Week",
        type: "Article",
        date: "April 18, 2026",
        summary: "The Surigaonon research team was recognized for their innovative soil phytoremediation technology."
      }
    ],
    heroImage: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1600&q=80",
    ctaText: "Apply for a Research Grant"
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    slug: "digital-transformation",
    description: "Modernizing governance, services, and business through technology adoption.",
    accentColor: "#3B82F6",
    accentColorRgb: "59, 130, 246",
    iconName: "MonitorSmartphone",
    mission: "Accelerate the digital transformation of Surigao del Norte's public services, economy, and communities by building robust ICT infrastructure, promoting e-governance, and creating inclusive pathways to the digital economy.",
    vision: "To achieve a 100% paperless, fully interconnected local government unit (LGU) system and high-speed broadband in all barangays by 2040.",
    whyItMatters: [
      { title: "The Problem", description: "Manual bureaucratic processes and poor connectivity hinder civic participation and economic growth.", type: "Problem" },
      { title: "Current Situation", description: "Disjointed data systems lead to inefficiencies, long processing times, and lack of transparency.", type: "Current Situation" },
      { title: "Desired Future", description: "A seamlessly connected province where essential services are instantly accessible via centralized digital platforms.", type: "Desired Future" },
      { title: "Expected Impact", description: "Faster public services, increased transparency, and robust digital foundations for local businesses.", type: "Expected Impact" }
    ],
    workflow: [
      { step: 1, title: "Infrastructure", description: "Rolling out broadband and satellite connectivity to all municipalities." },
      { step: 2, title: "Digitization", description: "Converting paper records and processes into cloud-based systems." },
      { step: 3, title: "Integration", description: "Unifying public services into a single eSDN portal." },
      { step: 4, title: "Optimization", description: "Utilizing data analytics for predictive municipal management." }
    ],
    stats: [
      { value: 18, label: "Digitized Services" },
      { value: 26, label: "Smart Municipalities" },
      { value: 99.9, suffix: "%", label: "System Uptime" },
      { value: 100, suffix: "%", label: "Target Cashless LGUs" }
    ],
    objectives: [
      "Digitize all transaction channels in the Provincial Capitol and municipal halls.",
      "Facilitate 100% fiber optic or satellite connectivity to isolated island villages.",
      "Migrate public databases to secure, unified cloud systems.",
      "Train local businesses and MSMEs in e-commerce and digital logistics."
    ],
    tooltipMetrics: [
      "18 Digitized Services",
      "26 Smart Municipalities",
      "99.9% System Uptime"
    ],
    programs: [
      {
        title: "eSDN Portal Integration",
        type: "Initiative",
        description: "A single sign-on citizen services portal offering business permits, local taxes, civil registrations, and agricultural updates online."
      },
      {
        title: "Free WiFi and Broadband Connectivity Drive",
        type: "Initiative",
        description: "Deploying high-speed satellite terminals and fiber infrastructure to public plazas, schools, and health centers."
      },
      {
        title: "Smart Barangay Program",
        type: "Training",
        description: "Equipping barangay halls with modern computing sets, solar battery backup systems, and digital recording templates."
      }
    ],
    projects: [
      {
        title: "Cloud-Based Health Information Network",
        type: "Activity",
        description: "Connecting provincial hospitals and barangay health clinics via a centralized electronic medical records system.",
        date: "Launching Q4 2025"
      },
      {
        title: "GovTech Innovation Challenge",
        type: "Event",
        description: "A public-sector hackathon inviting tech groups to build solutions for disaster response dispatch systems.",
        date: "November 2025"
      }
    ],
    roadmap: [
      { year: "2025", milestone: "Implement the eSDN citizen services web application", target: "1 provincial portal" },
      { year: "2026", milestone: "Install satellite and fiber nodes in 100 remote barangays", target: "100 connected barangays" },
      { year: "2030", milestone: "Achieve 100% digital transactions for all local tax and permit offices", target: "100% cashless LGUs" },
      { year: "2040", milestone: "Deploy predictive AI algorithms to coordinate disaster risk and traffic mitigation", target: "1 intelligent control room" }
    ],
    partners: [
      { name: "Department of Information and Communications Technology", type: "DICT" },
      { name: "Provincial ICT Council", type: "LGU" },
      { name: "Surigao Digital Alliance", type: "Private Sector" },
      { name: "Globe and Smart Communications", type: "Private Sector" }
    ],
    policies: [
      {
        title: "An Ordinance Instituting the eSDN Digital Governance Framework",
        number: "Ordinance No. 2024-023",
        type: "Provincial Ordinance",
        year: "2024"
      },
      {
        title: "Adopting standard cloud-first deployment guidelines for provincial records",
        number: "Resolution No. 410-2024",
        type: "Resolution",
        year: "2024"
      }
    ],
    successStories: [
      {
        beneficiary: "Municipality of Del Carmen",
        type: "Community Impact",
        story: "By deploying digital tourism permit processing, they reduced municipal administrative costs by 65% and cut permit issuance wait times from days to 10 minutes.",
        impact: "Processed 80,000+ tourist requests instantly."
      }
    ],
    news: [
      {
        title: "Surigao del Norte Awarded Top Smart Province Finalist in Mindanao",
        type: "Article",
        date: "June 02, 2026",
        summary: "Recognized for rapid digital service expansion and rural connectivity infrastructure."
      }
    ],
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    ctaText: "Access eSDN E-Services"
  },
  {
    id: "sustainable-communities",
    title: "Sustainable Communities",
    slug: "smart-sustainable-communities",
    description: "Building climate-resilient, inclusive, and ecologically responsible communities.",
    accentColor: "#6366F1",
    accentColorRgb: "99, 102, 241",
    iconName: "Leaf",
    mission: "Champion sustainable development across Surigao del Norte by integrating environmental stewardship, climate resilience, and social inclusion into every facet of community planning, infrastructure, and livelihood programs.",
    vision: "To model Surigao del Norte as a global benchmark for marine sanctuary protection, net-zero tourism, and circular resource management by 2040.",
    whyItMatters: [
      { title: "The Problem", description: "Climate change and rapid tourism threaten fragile coastal ecosystems and local community livelihoods.", type: "Problem" },
      { title: "Current Situation", description: "Reactive environmental policies limit the potential for proactive conservation and green building adoption.", type: "Current Situation" },
      { title: "Desired Future", description: "Communities engineered for resilience, powered by renewable energy, and co-existing harmoniously with nature.", type: "Desired Future" },
      { title: "Expected Impact", description: "Preserved natural heritage, sustainable ecotourism, and absolute disaster readiness.", type: "Expected Impact" }
    ],
    workflow: [
      { step: 1, title: "Assessment", description: "Establishing baseline ecological data and identifying vulnerable zones." },
      { step: 2, title: "Policy Design", description: "Drafting ordinances for green building, MPAs, and zero-waste initiatives." },
      { step: 3, title: "Implementation", description: "Executing reforestation, sanctuary protection, and renewable micro-grids." },
      { step: 4, title: "Monitoring", description: "Tracking carbon reduction and ecosystem health over time." }
    ],
    stats: [
      { value: 10, label: "Green Projects" },
      { value: 32, label: "Climate Communities" },
      { value: 15, label: "MPAs Managed" },
      { value: 100, suffix: "%", label: "Target Green Energy" }
    ],
    objectives: [
      "Incorporate green building codes and solar mandates for commercial constructions.",
      "Achieve 100% waste segregation and establish regional waste-to-energy centers.",
      "Establish marine protected areas (MPAs) covering at least 25% of coastal waters.",
      "Implement community-led organic farming protocols to guarantee local food security."
    ],
    tooltipMetrics: [
      "10 Green Projects",
      "32 Climate Communities",
      "15 MPAs Managed"
    ],
    programs: [
      {
        title: "Surigao Blue Economy Strategy",
        type: "Initiative",
        description: "Enforcing guidelines for sustainable coastal tourism, low-impact shipping, and community-led municipal coral reef protection."
      },
      {
        title: "Climate-Resilient Village Training",
        type: "Training",
        description: "Teaching disaster adaptation methodologies, establishing water collection reservoirs, and planting flood-control bamboo fields."
      },
      {
        title: "Zero Plastic Siargao Initiative",
        type: "Initiative",
        description: "Providing alternative packaging equipment to local businesses and enforcing ban protocols on single-use plastics."
      }
    ],
    projects: [
      {
        title: "Del Carmen Mangrove Reforestation",
        type: "Activity",
        description: "Community planting program to restore 50 hectares of damaged mangrove buffers on the western coast.",
        date: "Ongoing"
      },
      {
        title: "Municipal Waste Upcycling Network",
        type: "Activity",
        description: "Turning collected beach plastics into high-durability construction hollow blocks for community housing.",
        date: "Q2 2025"
      }
    ],
    roadmap: [
      { year: "2025", milestone: "Establish baseline studies for all marine protected networks", target: "12 registered MPAs" },
      { year: "2026", milestone: "Pass local green building ordinances across all municipalities", target: "100% adoption" },
      { year: "2030", milestone: "Eliminate single-use plastics from major tourism islands", target: "Zero plastic waste" },
      { year: "2040", milestone: "Fulfill net-zero carbon operations across all public buildings and services", target: "100% green energy powered" }
    ],
    partners: [
      { name: "Department of Environment and Natural Resources", type: "LGU" },
      { name: "BFAR Mindanao Division", type: "LGU" },
      { name: "Global Green Climate Fund", type: "Private Sector" },
      { name: "Siargao Conservation Society", type: "Private Sector" }
    ],
    policies: [
      {
        title: "Provincial Green Building and Energy Efficiency Ordinance",
        number: "Ordinance No. 2025-018",
        type: "Provincial Ordinance",
        year: "2025"
      },
      {
        title: "Declaration of Del Carmen Mangrove Sanctuary",
        number: "Ordinance No. 2024-002",
        type: "Provincial Ordinance",
        year: "2024"
      }
    ],
    successStories: [
      {
        beneficiary: "San Benito Organic Cooperative",
        type: "Beneficiary",
        story: "A group of 45 female farmers converted a 10-hectare fallow land into a biodiverse organic vegetable farm, supplying 8 major resorts in Siargao.",
        impact: "Increased cooperative family income by 120%."
      }
    ],
    news: [
      {
        title: "SDN Blue Economy Initiative Highlighted at UN Climate Forum",
        type: "Article",
        date: "May 29, 2026",
        summary: "The community-led coastal sanctuary framework was presented as a successful model for small island resilience."
      }
    ],
    heroImage: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80",
    ctaText: "Participate in Green Programs"
  },
  {
    id: "partnerships-investments",
    title: "Partnerships & Investments",
    slug: "partnerships-investments",
    description: "Attracting strategic capital and forging alliances that fuel SDN's transformation.",
    accentColor: "#0EA5A4",
    accentColorRgb: "14, 165, 164",
    iconName: "Handshake",
    mission: "Build a diverse and dynamic investment ecosystem for Surigao del Norte by attracting domestic and international capital, forging strategic public-private alliances, and creating a business-enabling environment that rewards innovation.",
    vision: "To position Surigao del Norte as a leading investment destination in the Visayas-Mindanao corridor by 2040.",
    whyItMatters: [
      { title: "The Problem", description: "Complex regulations and fragmented information deter serious investors from bringing capital into the region.", type: "Problem" },
      { title: "Current Situation", description: "Reliance on localized funding limits the scale and speed of major infrastructure projects.", type: "Current Situation" },
      { title: "Desired Future", description: "A streamlined, investor-friendly environment offering tax incentives and transparent partnerships.", type: "Desired Future" },
      { title: "Expected Impact", description: "Rapid deployment of capital for large-scale energy, tech, and logistics infrastructure.", type: "Expected Impact" }
    ],
    workflow: [
      { step: 1, title: "Promotion", description: "Showcasing local investment opportunities in international forums." },
      { step: 2, title: "Facilitation", description: "Assisting investors through the SIPAC one-stop-shop." },
      { step: 3, title: "Partnership", description: "Structuring public-private agreements (PPP) for maximum mutual benefit." },
      { step: 4, title: "Execution", description: "Accelerating permits and land use clearances to begin operations." }
    ],
    stats: [
      { value: 20, label: "Partner Organizations" },
      { value: 12, label: "Strategic Alliances" },
      { value: 500, prefix: "₱", suffix: "M+", label: "Current Investments" },
      { value: 5, prefix: "₱", suffix: "B+", label: "Target Investments" }
    ],
    objectives: [
      "Establish the Surigao Investment Promotion and Assistance Center (SIPAC).",
      "Attract PHP 5 Billion in cumulative public-private partnership (PPP) investments.",
      "Build a directory of international partner cities for business and cultural trade.",
      "Facilitate easy capital access lines for local MSMEs and cooperatives."
    ],
    tooltipMetrics: [
      "20 Partner Organizations",
      "12 Strategic Alliances",
      "₱500M+ Investments"
    ],
    programs: [
      {
        title: "SIPAC One-Stop Shop",
        type: "Initiative",
        description: "Simplifying regulatory permits, providing land-use directories, and organizing tax holiday incentives for serious investors."
      },
      {
        title: "PRIME Annual Investment Forum",
        type: "Initiative",
        description: "A flagship business gathering bringing developers, commercial banks, and venture capitalists to Surigao."
      },
      {
        title: "Public-Private Partnership Facilitation",
        type: "Initiative",
        description: "Assisting municipal leaders in drafting and executing infrastructure agreements with private tech and energy firms."
      }
    ],
    projects: [
      {
        title: "Surigao Port Economic Zone R&D",
        type: "Research",
        description: "Feasibility studies on upgrading port cargo terminals to support technology-grade electronic goods shipment.",
        date: "Completed Q1 2025"
      },
      {
        title: "SDN Investment Expo",
        type: "Event",
        description: "Pitch events introducing local infrastructure proposals to international development partners.",
        date: "September 2025"
      }
    ],
    roadmap: [
      { year: "2025", milestone: "Establish the physical SIPAC office and launch the web investor portal", target: "1 integrated center" },
      { year: "2026", milestone: "Host the first international SDN Investment Summit", target: "₱500M investment pledges" },
      { year: "2030", milestone: "Conclude 5 major PPP projects in solar energy and port logistics", target: "5 concluded PPP agreements" },
      { year: "2040", milestone: "Establish Surigao City as a highly specialized financial and logistics hub", target: "₱5B cumulative investments" }
    ],
    partners: [
      { name: "Board of Investments Philippines", type: "DTI" },
      { name: "CARAGA Chamber of Commerce", type: "Private Sector" },
      { name: "European Chamber of Commerce of the Philippines", type: "Private Sector" },
      { name: "Asian Development Bank (Mindanao Division)", type: "Private Sector" }
    ],
    policies: [
      {
        title: "The Surigao del Norte Investment Incentive Code",
        number: "Ordinance No. 2024-005",
        type: "Provincial Ordinance",
        year: "2024"
      }
    ],
    successStories: [
      {
        beneficiary: "MetroSolar SDN Corporation",
        type: "Startup",
        story: "A joint venture facilitated by SIPAC. Invested in a 15MW solar farm in Placer, supplying stable clean power to local distribution networks and reducing power outage occurrences.",
        impact: "Provides stable electricity to 25,000 households."
      }
    ],
    news: [
      {
        title: "SIPAC Signs Partnership Agreement with Japanese Tech Consortium",
        type: "Announcement",
        date: "June 15, 2026",
        summary: "Cooperation includes technical exchange on smart grid and agricultural logistics tools."
      }
    ],
    heroImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80",
    ctaText: "View SDN Investment Guide"
  },
  {
    id: "policy-governance",
    title: "Policy & Governance",
    slug: "policy-governance",
    description: "Establishing the legal, institutional, and regulatory foundations for lasting innovation.",
    accentColor: "#6B7280",
    accentColorRgb: "107, 114, 128",
    iconName: "Scale",
    mission: "Build a robust, transparent, and innovation-enabling governance framework for Surigao del Norte through evidence-based policymaking, strong institutional capacity, and participatory governance that empowers citizens and stakeholders.",
    vision: "To lead national rankings in local government transparency, accountability, and citizen-led innovation governance by 2040.",
    whyItMatters: [
      { title: "The Problem", description: "Outdated legislation stifles technological experimentation and discourages modern startups.", type: "Problem" },
      { title: "Current Situation", description: "Lack of institutional frameworks for open data and citizen feedback integration.", type: "Current Situation" },
      { title: "Desired Future", description: "Dynamic policies that anticipate future tech trends and embed transparency into LGU operations.", type: "Desired Future" },
      { title: "Expected Impact", description: "Unmatched public trust, accelerated regulatory approvals, and sustained institutional progress.", type: "Expected Impact" }
    ],
    workflow: [
      { step: 1, title: "Consultation", description: "Gathering input from citizens, academia, and industry stakeholders." },
      { step: 2, title: "Drafting", description: "Formulating innovation-friendly ordinances and executive orders." },
      { step: 3, title: "Legislation", description: "Passing policies through the Provincial Board and local councils." },
      { step: 4, title: "Enforcement", description: "Deploying mandates via the Provincial Innovation Council." }
    ],
    stats: [
      { value: 5, label: "Active Ordinances" },
      { value: 8, label: "Policy Papers Issued" },
      { value: 100, suffix: "%", label: "Transparency Score" },
      { value: 26, label: "Compliant LGUs" }
    ],
    objectives: [
      "Form the Provincial Innovation Council (PIC) containing multi-stakeholder seats.",
      "Achieve 100% compliance in municipal Open Data and public financial reportage.",
      "Train all provincial employees in digital-first management tools.",
      "Provide public feedback loops for every ordinance and executive program."
    ],
    tooltipMetrics: [
      "5 Active Ordinances",
      "8 Policy Papers Issued",
      "100% Transparency Score"
    ],
    programs: [
      {
        title: "Provincial Innovation Ordinance Code",
        type: "Initiative",
        description: "Creating the institutional mandates, funding streams, and regulatory exemptions that allow technology pilots."
      },
      {
        title: "SDN Open Data Portal Initiative",
        type: "Initiative",
        description: "Publishing municipal budgets, project timelines, and procurement records to ensure transparency."
      },
      {
        title: "Citizen Feedback Action Desk",
        type: "Initiative",
        description: "An SMS and web-based system letting citizens request services, report damage, and rate LGU transaction quality."
      }
    ],
    projects: [
      {
        title: "Legislative Research on Innovation Policies",
        type: "Research",
        description: "Collaborative research with policy institutes on tax framework structures that incentivize green startups.",
        date: "Published Q2 2025"
      },
      {
        title: "Innovation Policy Workshops",
        type: "Activity",
        description: "Empowering municipal councilors to draft ordinances promoting municipal digitization.",
        date: "Ongoing"
      }
    ],
    roadmap: [
      { year: "2025", milestone: "Establish the Provincial Innovation Council with executive bylaws", target: "1 Council established" },
      { year: "2026", milestone: "Launch the SDN Open Data public portal", target: "1 active database" },
      { year: "2030", milestone: "Attain 100% municipal compliance on COA transparency metrics", target: "All 26 LGUs" },
      { year: "2040", milestone: "Fulfill fully automated, auditable blockchain-based ledger systems", target: "100% secure ledger system" }
    ],
    partners: [
      { name: "Department of the Interior and Local Government", type: "LGU" },
      { name: "Civil Service Commission CARAGA", type: "LGU" },
      { name: "UP Law Center Policy Institute", type: "University" },
      { name: "Surigao NGO Coalition", type: "Private Sector" }
    ],
    policies: [
      {
        title: "The Surigao del Norte Provincial Innovation Code",
        number: "Ordinance No. 2024-001",
        type: "Provincial Ordinance",
        year: "2024"
      },
      {
        title: "Creation of the Provincial Innovation Secretariat",
        number: "Executive Order No. 04",
        type: "Executive Order",
        year: "2024"
      }
    ],
    successStories: [
      {
        beneficiary: "Provincial Innovation Council",
        type: "Community Impact",
        story: "By including youth and academic representatives directly in the council, SDN successfully passed two targeted STEM scholarship laws that were stalled for years.",
        impact: "Guaranteed student input in educational policy development."
      }
    ],
    news: [
      {
        title: "COA Awards Surigao del Norte Highest Audit Rating for Fiscal 2025",
        type: "Announcement",
        date: "March 22, 2026",
        summary: "The province was commended for outstanding financial management and open reporting records."
      }
    ],
    heroImage: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1600&q=80",
    ctaText: "Review Provincial Innovation Codes"
  }
];

// Node angular positions (degrees from top, clockwise)
// 7 nodes evenly spaced = 360/7 ≈ 51.43° apart, starting at -90° (top)
export const NODE_ANGLES: number[] = [
  -90,           // 1: Startup Development — Top Center
  -90 + 51.43,   // 2: Education & Talent — Upper Right
  -90 + 102.86,  // 3: Research & Innovation — Middle Right
  -90 + 154.29,  // 4: Digital Transformation — Lower Right
  -90 + 205.71,  // 5: Sustainable Communities — Bottom Center
  -90 + 257.14,  // 6: Partnerships & Investments — Lower Left
  -90 + 308.57,  // 7: Policy & Governance — Upper Left
];
