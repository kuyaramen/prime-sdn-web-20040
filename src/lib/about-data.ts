// About PRIME SDN CMS Data Structure

export interface AboutHero {
  eyebrow: string;
  heading: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
  backgroundImage: string;
}

export interface AboutStory {
  heading: string;
  paragraphs: string[];
  highlightCards: Array<{
    title: string;
    description: string;
  }>;
  image: string;
}

export interface VisionMission {
  vision: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    highlights: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
    image: string;
  };
  mission: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    principles: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
    image: string;
  };
}

export interface ImpactStat {
  value: number;
  suffix: string;
  label: string;
}

export interface Partner {
  name: string;
  category: "Government" | "University" | "Industry" | "NGO" | "Development Partner";
  logo: string;
  description: string;
  website: string;
}

export interface AboutCTA {
  heading: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
  backgroundImage: string;
}

// Mock Data

export const aboutHero: AboutHero = {
  eyebrow: "ABOUT PRIME SDN",
  heading: "Building the Future of Innovation in Surigao del Norte",
  description: "PRIME SDN is the province's collaborative innovation ecosystem that connects government, academia, industry, entrepreneurs, researchers, investors, and communities to create sustainable economic growth, technological advancement, and inclusive development.",
  primaryButton: "Explore Our Ecosystem",
  secondaryButton: "Contact PRIME SDN",
  backgroundImage: "/de85057f-eb66-4f18-a9bb-8f828a99fd42.jpg"
};

export const aboutStory: AboutStory = {
  heading: "Our Story",
  paragraphs: [
    "PRIME SDN was established to transform Surigao del Norte into a hub of innovation and economic opportunity. Recognizing the need for a coordinated approach to development, the province created this ecosystem to bring together all stakeholders in a shared vision for progress.",
    "Innovation has the power to transform Surigao del Norte by creating new industries, generating quality jobs, and improving the quality of life for all citizens. By embracing technology, fostering entrepreneurship, and investing in education, we can build a future where opportunity is accessible to everyone.",
    "Collaboration is at the heart of our approach. When government, education institutions, businesses, researchers, and communities work together, we create sustainable solutions that address real challenges. This partnership model ensures that innovation serves the needs of our people and creates lasting impact."
  ],
  highlightCards: [
    {
      title: "Innovation",
      description: "Building a thriving innovation ecosystem"
    },
    {
      title: "Collaboration",
      description: "Connecting people, institutions, and industries"
    },
    {
      title: "Sustainability",
      description: "Creating lasting economic and social impact"
    }
  ],
  image: "/503065555_1009716101337556_3127421619550626426_n.jpg"
};

export const visionMission: VisionMission = {
  vision: {
    eyebrow: "OUR VISION",
    heading: "Building a Smarter, More Innovative Surigao del Norte",
    paragraphs: [
      "To be the leading innovation ecosystem in the Philippines, driving sustainable economic growth and technological advancement in Surigao del Norte through collaboration, creativity, and inclusive development.",
      "We envision a province where technology and innovation create new opportunities for every citizen, where startups thrive, research flourishes, and communities prosper through sustainable economic transformation.",
      "Our vision is to transform Surigao del Norte into a model for regional development, demonstrating how strategic collaboration and forward-thinking policies can create lasting positive change."
    ],
    highlights: [
      {
        icon: "Lightbulb",
        title: "Innovation",
        description: "Driving creativity and technology"
      },
      {
        icon: "Users",
        title: "Inclusivity",
        description: "Creating opportunities for every community"
      },
      {
        icon: "Leaf",
        title: "Sustainability",
        description: "Building long-term economic resilience"
      }
    ],
    image: "/ChatGPT Image Jul 13, 2026, 10_02_16 PM.png"
  },
  mission: {
    eyebrow: "OUR MISSION",
    heading: "Turning Vision into Action",
    paragraphs: [
      "To connect government, academia, industry, entrepreneurs, researchers, investors, and communities in a collaborative ecosystem that fosters innovation, supports startups, develops talent, advances research, and creates sustainable opportunities for all.",
      "We build bridges between stakeholders, creating pathways for ideas to become solutions and for solutions to become impactful initiatives that serve our communities.",
      "Through strategic programs, partnerships, and investments, we transform the innovation potential of Surigao del Norte into tangible results that improve lives and strengthen our economy."
    ],
    principles: [
      {
        icon: "Rocket",
        title: "Empower Innovation",
        description: "Support startups and entrepreneurs"
      },
      {
        icon: "GraduationCap",
        title: "Support Education",
        description: "Develop talent and skills"
      },
      {
        icon: "Handshake",
        title: "Strengthen Partnerships",
        description: "Build collaborative networks"
      },
      {
        icon: "Monitor",
        title: "Accelerate Digital Transformation",
        description: "Modernize services and infrastructure"
      }
    ],
    image: "/520909655_1047811430861356_6130347629609075141_n.jpg"
  }
};

export const impactStats: ImpactStat[] = [
  { value: 50, suffix: "+", label: "Innovation Programs" },
  { value: 100, suffix: "+", label: "Strategic Partners" },
  { value: 500, suffix: "+", label: "Entrepreneurs Supported" },
  { value: 5000, suffix: "+", label: "Citizens Impacted" },
  { value: 25, suffix: "+", label: "Research Projects" },
  { value: 12, suffix: "", label: "Innovation Laboratories" }
];

export const aboutPartners: Partner[] = [
  {
    name: "Surigao del Norte Provincial Government",
    category: "Government",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Department_of_Information_and_Communications_Technology_%28DICT%29_logo.svg/1200px-Department_of_Information_and_Communications_Technology_%28DICT%29_logo.svg.png",
    description: "Leading the innovation agenda for the province",
    website: "https://surigaodelnorte.gov.ph"
  },
  {
    name: "Surigao State University",
    category: "University",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Surigao_State_University_logo.png/1200px-Surigao_State_University_logo.png",
    description: "Premier state university for research and education",
    website: "https://ssu.edu.ph"
  },
  {
    name: "Department of ICT",
    category: "Government",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Department_of_Information_and_Communications_Technology_%28DICT%29_logo.svg/1200px-Department_of_Information_and_Communications_Technology_%28DICT%29_logo.svg.png",
    description: "National agency for digital transformation",
    website: "https://dict.gov.ph"
  },
  {
    name: "Department of Science and Technology",
    category: "Government",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Department_of_Science_and_Technology_%28DOST%29_logo.svg/1200px-Department_of_Science_and_Technology_%28DOST%29_logo.svg.png",
    description: "Leading science and technology development",
    website: "https://dost.gov.ph"
  },
  {
    name: "Globe Telecom",
    category: "Industry",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Globe_Telecom_logo.svg/1200px-Globe_Telecom_logo.svg.png",
    description: "Telecommunications and digital infrastructure partner",
    website: "https://www.globe.com.ph"
  },
  {
    name: "Smart Communications",
    category: "Industry",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Smart_Communications_logo.svg/1200px-Smart_Communications_logo.svg.png",
    description: "Connectivity and technology solutions provider",
    website: "https://www.smart.com.ph"
  }
];

export const aboutCTA: AboutCTA = {
  heading: "Together, Let's Shape the Future of Surigao del Norte",
  description: "Innovation begins through collaboration. Whether you are a student, entrepreneur, researcher, investor, educator, business leader, or government partner, PRIME SDN provides opportunities to contribute to a smarter, more innovative province.",
  primaryButton: "Become a Partner",
  secondaryButton: "Contact Us",
  backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
};
