// Education & Talent Pillar Data

export interface PathChoice {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

export interface Institution {
  id: string;
  name: string;
  logo: string;
  logoAlt: string;
  href: string;
}

export const educationTalentData = {
  hero: {
    imageSrc: "/ChatGPT Image Jul 20, 2026, 12_28_10 PM.png",
    imageAlt: "Students collaborating in modern university campus",
    breadcrumb: "Framework / Education & Talent",
    title: "Education & Talent",
    description: "Developing future-ready talent through quality education, skills development, and collaboration between institutions and industry.",
  },

  choosePath: {
    eyebrow: "Choose Your Path",
    title: "Explore Education & Talent",
    description: "Select your area of interest to discover institutions, programs, and talent opportunities in Surigao del Norte.",
    paths: [
      {
        id: "institutions",
        title: "Institutions",
        description: "Discover universities, colleges, and educational institutions shaping the province's future workforce.",
        imageSrc: "/images/institutions-hero.jpg",
        imageAlt: "University campus with students",
        href: "/frameworks/education-and-talent/institutions",
      },
      {
        id: "talent",
        title: "Talent",
        description: "Explore the talent ecosystem, workforce capabilities, and future-ready professionals across key industries.",
        imageSrc: "/images/talent-hero.jpg",
        imageAlt: "Professionals collaborating in modern workspace",
        href: "/frameworks/education-and-talent/talent",
      },
    ] as PathChoice[],
  },

  institutions: {
    title: "Institutions",
    heading: "Building Tomorrow's Innovation Leaders",
    description: "Surigao del Norte's universities and colleges serve as the foundation of the province's innovation ecosystem. They nurture future researchers, engineers, entrepreneurs, educators, health professionals and innovators who contribute to the long-term vision of PRIME SDN 2040. Explore each institution below.",
    institutions: [
      {
        id: "snsu",
        name: "Surigao del Norte State University",
        logo: "/images/logos/snsu.png",
        logoAlt: "SNSU Logo",
        href: "/frameworks/education-and-talent/institutions/snsu",
      },
      {
        id: "nemsu",
        name: "North Eastern Mindanao State University",
        logo: "/images/logos/nemsu.png",
        logoAlt: "NEMSU Logo",
        href: "/frameworks/education-and-talent/institutions/nemsu",
      },
      {
        id: "saint-paul",
        name: "Saint Paul University Surigao",
        logo: "/images/logos/saint-paul.png",
        logoAlt: "Saint Paul University Logo",
        href: "/frameworks/education-and-talent/institutions/saint-paul",
      },
      {
        id: "tesda",
        name: "TESDA - Surigao del Norte",
        logo: "/images/logos/tesda.png",
        logoAlt: "TESDA Logo",
        href: "/frameworks/education-and-talent/institutions/tesda",
      },
      {
        id: "sec",
        name: "Surigao Education Center",
        logo: "/images/logos/sec.png",
        logoAlt: "Surigao Education Center Logo",
        href: "/frameworks/education-and-talent/institutions/sec",
      },
      {
        id: "pshs",
        name: "Philippine Science High School - Caraga",
        logo: "/images/logos/pshs.png",
        logoAlt: "PSHS Logo",
        href: "/frameworks/education-and-talent/institutions/pshs",
      },
    ] as Institution[],
  },

  talent: {
    title: "Talent",
    heading: "Talent Powering Innovation",
    description: "Surigao del Norte's workforce is the driving force behind the province's innovation ecosystem. From engineers and researchers to healthcare professionals and creative entrepreneurs, our talent pool is diverse, skilled, and ready to contribute to the PRIME SDN 2040 vision.",
    categories: [
      {
        id: "engineering",
        title: "Engineering",
        description: "Infrastructure, construction, manufacturing",
        icon: "⚙️",
      },
      {
        id: "it",
        title: "Information Technology",
        description: "Software, data, digital innovation",
        icon: "💻",
      },
      {
        id: "tourism",
        title: "Tourism & Hospitality",
        description: "Hospitality, service, visitor experience",
        icon: "🏨",
      },
      {
        id: "business",
        title: "Business & Entrepreneurship",
        description: "Enterprise, management, innovation",
        icon: "💼",
      },
      {
        id: "agriculture",
        title: "Agriculture & Fisheries",
        description: "Farming, fisheries, sustainability",
        icon: "🌾",
      },
      {
        id: "healthcare",
        title: "Healthcare",
        description: "Medical, nursing, health services",
        icon: "🏥",
      },
      {
        id: "creative",
        title: "Creative Industries",
        description: "Design, arts, content creation",
        icon: "🎨",
      },
      {
        id: "education",
        title: "Education",
        description: "Teaching, research, development",
        icon: "📚",
      },
    ] as PathChoice[],
  },

  continueExploring: [
    {
      id: "innovation",
      title: "Innovation & Infrastructure",
      description: "Building the digital and physical infrastructure for a future-ready economy.",
      imageSrc: "/images/innovation-infrastructure.jpg",
      imageAlt: "Innovation hub",
      href: "/frameworks/innovation-infrastructure",
    },
    {
      id: "research",
      title: "Research & Innovation",
      description: "Advancing knowledge through cutting-edge research and development initiatives.",
      imageSrc: "/images/research-innovation.jpg",
      imageAlt: "Research laboratory",
      href: "/frameworks/research-innovation",
    },
  ] as PathChoice[],
};
