// About PRIME SDN CMS Data Structure

export interface AboutHero {
  eyebrow: string;
  heading: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
  heroImage: string;
}

export interface AboutStory {
  heading: string;
  paragraphs: string[];
  image: string;
}

export interface WhyExists {
  heading: string;
  description: string;
  image: string;
  reasons: Array<{
    title: string;
    description: string;
  }>;
}

export interface VisionMission {
  vision: {
    eyebrow: string;
    heading: string;
    description: string;
    image: string;
  };
  mission: {
    eyebrow: string;
    heading: string;
    description: string;
    image: string;
  };
}

export interface Pillar {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface HowWorks {
  heading: string;
  description: string;
  steps: Array<{
    step: number;
    title: string;
    description: string;
  }>;
}

export interface StrategicPriority {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface EcosystemNode {
  name: string;
  type: string;
  description: string;
}

export interface RoadmapMilestone {
  year: string;
  title: string;
  description: string;
}

export interface Partner {
  name: string;
  category: string;
  logo: string;
  website: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ExploreCTA {
  heading: string;
  description: string;
  image: string;
  buttons: Array<{
    text: string;
    link: string;
  }>;
}

// Mock Data

export const aboutHero: AboutHero = {
  eyebrow: "ABOUT PRIME SDN",
  heading: "Discover the Heart of Surigao del Norte",
  description: "PRIME SDN is the official digital experience of Surigao del Norte, showcasing the province's pristine landscapes, vibrant culture, thriving innovation ecosystem, and sustainable future through immersive storytelling.",
  primaryButton: "Explore Surigao",
  secondaryButton: "",
  heroImage: "/de85057f-eb66-4f18-a9bb-8f828a99fd42.jpg"
};

export const aboutStory: AboutStory = {
  heading: "Our Story",
  paragraphs: [
    "PRIME SDN was established to transform Surigao del Norte into a hub of innovation and economic opportunity. Recognizing the need for a coordinated approach to development, the province created this ecosystem to bring together all stakeholders in a shared vision for progress.",
    "Innovation has the power to transform Surigao del Norte by creating new industries, generating quality jobs, and improving the quality of life for all citizens. By embracing technology, fostering entrepreneurship, and investing in education, we can build a future where opportunity is accessible to everyone.",
    "Collaboration is at the heart of our approach. When government, education institutions, businesses, researchers, and communities work together, we create sustainable solutions that address real challenges. This partnership model ensures that innovation serves the needs of our people and creates lasting impact."
  ],
  image: "/503065555_1009716101337556_3127421619550626426_n.jpg"
};

export const whyExists: WhyExists = {
  heading: "Why PRIME SDN Exists",
  description: "In today's rapidly evolving world, regions that embrace innovation and collaboration thrive. PRIME SDN exists to ensure Surigao del Norte is at the forefront of this transformation.",
  image: "/ChatGPT Image Jul 13, 2026, 10_02_16 PM.png",
  reasons: [
    {
      title: "Economic Transformation",
      description: "Creating new industries, quality jobs, and sustainable economic opportunities for all citizens through innovation-driven growth."
    },
    {
      title: "Talent Development",
      description: "Building a skilled workforce through education, training, and research programs that prepare our people for the future economy."
    },
    {
      title: "Digital Progress",
      description: "Modernizing government services and infrastructure to improve efficiency, transparency, and citizen engagement across the province."
    }
  ]
};

export const visionMission: VisionMission = {
  vision: {
    eyebrow: "OUR VISION",
    heading: "Building a Smarter, More Innovative Surigao del Norte",
    description: "To be the leading innovation ecosystem in the Philippines, driving sustainable economic growth and technological advancement in Surigao del Norte through collaboration, creativity, and inclusive development.",
    image: "/de85057f-eb66-4f18-a9bb-8f828a99fd42.jpg"
  },
  mission: {
    eyebrow: "OUR MISSION",
    heading: "Turning Vision into Action",
    description: "To connect government, academia, industry, entrepreneurs, researchers, investors, and communities in a collaborative ecosystem that fosters innovation, supports startups, develops talent, advances research, and creates sustainable opportunities for all.",
    image: "/520909655_1047811430861356_6130347629609075141_n.jpg"
  }
};

export const pillars: Pillar[] = [
  {
    id: "startup-development",
    title: "Startup Development",
    description: "Empowering entrepreneurs and startups through incubation, funding, mentorship, and market access programs.",
    image: "/687662830_1279326817709815_4326714891380010689_n.jpg",
    link: "/frameworks/startup-development"
  },
  {
    id: "education-talent",
    title: "Education & Talent",
    description: "Developing human capital through education, training, and capacity building programs for the future workforce.",
    image: "/523109767_1047811004194732_8439613389954422836_n.jpg",
    link: "/frameworks/education-and-talent"
  },
  {
    id: "research-innovation",
    title: "Research & Innovation",
    description: "Advancing scientific research, technological innovation, and knowledge creation to solve local and global challenges.",
    image: "/500280810_1005951675047332_1974271156671203425_n (1).jpg",
    link: "/frameworks/research-and-innovation"
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    description: "Modernizing government services, infrastructure, and operations through technology and data-driven decision-making.",
    image: "/500464075_1005951061714060_26782077258556899_n.jpg",
    link: "/frameworks/digital-transformation"
  },
  {
    id: "partnerships-investments",
    title: "Partnerships & Investment",
    description: "Building strategic partnerships and attracting investments that drive economic growth and innovation ecosystem development.",
    image: "/ChatGPT Image Jul 13, 2026, 10_02_16 PM.png",
    link: "/frameworks/partnerships-investments"
  },
  {
    id: "sustainable-communities",
    title: "Sustainable Communities",
    description: "Ensuring innovation benefits all communities through inclusive development, environmental sustainability, and social equity.",
    image: "/520909655_1047811430861356_6130347629609075141_n.jpg",
    link: "/frameworks/sustainable-communities"
  }
];

export const howWorks: HowWorks = {
  heading: "How PRIME SDN Works",
  description: "Our ecosystem operates through a collaborative model that connects stakeholders, resources, and opportunities in a seamless innovation pipeline.",
  steps: [
    {
      step: 1,
      title: "Discover",
      description: "We bring together government, academia, industry, entrepreneurs, researchers, investors, and communities to form collaborative networks."
    },
    {
      step: 2,
      title: "Collaborate",
      description: "Through stakeholder engagement and research, we identify key challenges and opportunities where innovation can create meaningful impact."
    },
    {
      step: 3,
      title: "Implement",
      description: "We support the development of innovative solutions through programs, funding, mentorship, and access to resources and expertise."
    },
    {
      step: 4,
      title: "Measure Impact",
      description: "We help scale successful solutions through partnerships, policy support, and integration into government and industry systems."
    }
  ]
};

export const strategicPriorities: StrategicPriority[] = [
  {
    title: "Digital Transformation",
    description: "Modernizing government services, infrastructure, and operations through technology and data-driven decision-making to create a smarter, more efficient province.",
    image: "/de85057f-eb66-4f18-a9bb-8f828a99fd42.jpg",
    link: "/frameworks/digital-transformation"
  },
  {
    title: "Research & Innovation",
    description: "Advancing scientific research, technological innovation, and knowledge creation to solve local and global challenges while building a thriving research ecosystem.",
    image: "/ChatGPT Image Jul 13, 2026, 10_02_16 PM.png",
    link: "/frameworks/research-and-innovation"
  },
  {
    title: "Education & Talent",
    description: "Developing human capital through education, training, and capacity building programs that prepare our workforce for the future economy and digital age.",
    image: "/520909655_1047811430861356_6130347629609075141_n.jpg",
    link: "/frameworks/education-and-talent"
  }
];

export const ecosystemNodes: EcosystemNode[] = [
  { name: "Government", type: "Government", description: "Policy & Leadership" },
  { name: "Universities", type: "Academia", description: "Research & Education" },
  { name: "Industry", type: "Private Sector", description: "Innovation & Investment" },
  { name: "Communities", type: "Civil Society", description: "Engagement & Advocacy" },
  { name: "Researchers", type: "Academia", description: "Knowledge Creation" },
  { name: "Startups", type: "Entrepreneurs", description: "Innovation Execution" },
  { name: "Investors", type: "Private Sector", description: "Funding & Support" },
  { name: "Partners", type: "Development", description: "Support & Cooperation" }
];

export const roadmapMilestones: RoadmapMilestone[] = [
  { year: "2028", title: "Foundation Phase", description: "Establishing the innovation ecosystem infrastructure and core programs" },
  { year: "2031", title: "Growth Phase", description: "Scaling programs and expanding stakeholder engagement" },
  { year: "2034", title: "Acceleration Phase", description: "Deepening innovation impact and expanding reach" },
  { year: "2037", title: "Maturity Phase", description: "Achieving ecosystem sustainability and self-reinforcing growth" },
  { year: "2040", title: "Transformation Phase", description: "Realizing the full vision of a smart, innovative province" }
];

export const partners: Partner[] = [
  { name: "Surigao del Norte Provincial Government", category: "Government", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Department_of_Information_and_Communications_Technology_%28DICT%29_logo.svg/1200px-Department_of_Information_and_Communications_Technology_%28DICT%29_logo.svg.png", website: "https://surigaodelnorte.gov.ph" },
  { name: "Surigao State University", category: "University", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Surigao_State_University_logo.png/1200px-Surigao_State_University_logo.png", website: "https://ssu.edu.ph" },
  { name: "Department of ICT", category: "Government", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Department_of_Information_and_Communications_Technology_%28DICT%29_logo.svg/1200px-Department_of_Information_and_Communications_Technology_%28DICT%29_logo.svg.png", website: "https://dict.gov.ph" },
  { name: "Department of Science and Technology", category: "Government", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Department_of_Science_and_Technology_%28DOST%29_logo.svg/1200px-Department_of_Science_and_Technology_%28DOST%29_logo.svg.png", website: "https://dost.gov.ph" },
  { name: "Globe Telecom", category: "Industry", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Globe_Telecom_logo.svg/1200px-Globe_Telecom_logo.svg.png", website: "https://www.globe.com.ph" },
  { name: "Smart Communications", category: "Industry", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Smart_Communications_logo.svg/1200px-Smart_Communications_logo.svg.png", website: "https://www.smart.com.ph" }
];

export const faqs: FAQ[] = [
  { question: "What is PRIME SDN?", answer: "PRIME SDN is the Provincial Research and Innovation for Market-driven Enterprise ecosystem in Surigao del Norte. It is a collaborative platform that connects government, academia, industry, entrepreneurs, researchers, investors, and communities to drive innovation and sustainable development." },
  { question: "Who can participate?", answer: "PRIME SDN is open to all stakeholders including students, entrepreneurs, researchers, investors, educators, business leaders, government agencies, civil society organizations, and community members." },
  { question: "How can organizations collaborate?", answer: "Organizations can collaborate by joining our partnership programs, sponsoring initiatives, providing mentorship, offering resources, or participating in our innovation ecosystem activities." },
  { question: "Who manages PRIME SDN?", answer: "PRIME SDN is managed by the Surigao del Norte Provincial Government in partnership with key stakeholders including universities, national agencies, and private sector partners." },
  { question: "How do I submit a startup?", answer: "Startups can submit through our Startup Development framework. Visit the Startup Development page to learn about application processes, eligibility requirements, and available support programs." },
  { question: "How can I join activities?", answer: "You can join activities by visiting our Activities page, registering for events, applying for programs, or subscribing to our newsletter for updates on upcoming opportunities." }
];

export const exploreCTA: ExploreCTA = {
  heading: "Explore PRIME SDN",
  description: "Discover the full ecosystem of innovation programs, activities, and opportunities available through PRIME SDN.",
  image: "/de85057f-eb66-4f18-a9bb-8f828a99fd42.jpg",
  buttons: [
    { text: "Explore Framework", link: "/frameworks" },
    { text: "Discover Activities", link: "/activities" },
    { text: "Latest News", link: "/news" },
    { text: "Join the Community", link: "/contact" }
  ]
};
