// Education & Talent CMS Data Structure

export interface LearningProgram {
  slug: string;
  title: string;
  icon: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  outcomes: string[];
  curriculum: string[];
  prerequisites?: string[];
  targetAudience: string[];
  partner?: string;
  certificate: boolean;
  featured: boolean;
}

export interface Scholarship {
  slug: string;
  title: string;
  sponsor: string;
  sponsorLogo?: string;
  deadline: string;
  eligibility: string[];
  benefits: string[];
  requirements: string[];
  coverage: string;
  duration: string;
  applicationLink?: string;
  category: 'Government' | 'Private' | 'Institutional' | 'International';
  featured: boolean;
}

export interface University {
  slug: string;
  name: string;
  logo: string;
  coverImage: string;
  overview: string;
  established: number;
  location: string;
  website: string;
  email: string;
  phone?: string;
  programs: string[];
  laboratories: string[];
  researchAreas: string[];
  partnerships: string[];
  achievements: string[];
  contact: {
    address: string;
    email: string;
    phone?: string;
    website: string;
  };
  featured: boolean;
}

export interface Course {
  slug: string;
  title: string;
  instructor: string;
  instructorImage?: string;
  instructorBio?: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  hours: number;
  price: number;
  language: string;
  learningOutcomes: string[];
  curriculum: {
    module: string;
    topics: string[];
  }[];
  prerequisites?: string[];
  rating: number;
  reviews: number;
  enrolled: number;
  category: string;
  featured: boolean;
}

export interface Laboratory {
  slug: string;
  name: string;
  image: string;
  description: string;
  institution: string;
  location: string;
  equipment: string[];
  services: string[];
  capacity: number;
  availability: string;
  bookingLink?: string;
  featured: boolean;
}

export interface Competition {
  slug: string;
  title: string;
  date: string;
  deadline: string;
  location: string;
  description: string;
  category: string;
  requirements: string[];
  prizes: {
    rank: string;
    prize: string;
  }[];
  eligibility: string[];
  registrationLink?: string;
  organizer: string;
  featured: boolean;
}

export interface Mentor {
  slug: string;
  name: string;
  photo: string;
  expertise: string[];
  organization: string;
  role: string;
  bio: string;
  yearsOfExperience: number;
  linkedin?: string;
  email: string;
  availability: string;
  mentorshipAreas: string[];
  languages: string[];
  featured: boolean;
}

export interface Career {
  slug: string;
  title: string;
  company: string;
  companyLogo?: string;
  type: 'Internship' | 'Apprenticeship' | 'OJT' | 'Full-time' | 'Part-time' | 'Research Assistantship' | 'Volunteer';
  location: string;
  remote: boolean;
  description: string;
  requirements: string[];
  benefits: string[];
  salary?: string;
  duration?: string;
  applicationLink?: string;
  deadline?: string;
  featured: boolean;
}

export interface SuccessStory {
  slug: string;
  name: string;
  photo: string;
  achievement: string;
  story: string;
  category: 'Scholar' | 'Innovator' | 'Researcher' | 'Startup Founder' | 'Competition Winner' | 'Graduate';
  institution?: string;
  year: number;
  quote?: string;
  featured: boolean;
}

export interface Event {
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: 'Workshop' | 'Seminar' | 'Conference' | 'Bootcamp' | 'Training' | 'Competition';
  organizer: string;
  targetAudience: string[];
  registrationLink?: string;
  fee?: string;
  capacity: number;
  featured: boolean;
}

// Mock Data

export const learningPrograms: LearningProgram[] = [
  {
    slug: 'data-analytics-capacity-building',
    title: 'Data Analytics Capacity Building',
    icon: '�',
    description: 'Structured training program for government personnel covering data analytics, visualization tools, and strategic planning methodologies to support evidence-based governance.',
    duration: '8 weeks',
    level: 'Intermediate',
    outcomes: [
      'Master data analysis fundamentals',
      'Learn visualization tools',
      'Develop strategic planning skills',
      'Apply evidence-based decision-making',
      'Create governance dashboards'
    ],
    curriculum: [
      'Data Analysis Fundamentals',
      'Visualization Tools',
      'Strategic Planning Frameworks',
      'Evidence-Based Decision-Making',
      'Performance Monitoring'
    ],
    targetAudience: ['Government Employees', 'Department Heads', 'Planning Officers'],
    partner: 'Provincial ICT Office + HRMO',
    certificate: true,
    featured: true,
  },
  {
    slug: 'ai-literacy-government',
    title: 'AI Literacy for Government Personnel',
    icon: '🤖',
    description: 'Multi-year AI literacy and professional development program enabling government employees to leverage AI tools for improved public service delivery.',
    duration: '4 weeks per module',
    level: 'Intermediate',
    outcomes: [
      'Understand AI fundamentals',
      'Learn AI tools for government',
      'Apply AI to public services',
      'Understand AI ethics and governance',
      'Implement AI solutions'
    ],
    curriculum: [
      'AI Fundamentals',
      'AI Tools for Government',
      'Ethics and Governance',
      'Practical Applications',
      'Implementation Strategies'
    ],
    targetAudience: ['Government Employees', 'ICT Staff', 'Department Heads'],
    partner: 'Provincial ICT Office + DOST',
    certificate: true,
    featured: true,
  },
  {
    slug: 'iso-internal-audit-training',
    title: 'ISO 9001 Internal Auditor Training',
    icon: '✓',
    description: 'Internal Quality Auditor certification training for ISO 9001:2015 compliance and quality management systems establishment.',
    duration: '2 weeks',
    level: 'Advanced',
    outcomes: [
      'Understand ISO 9001 standards',
      'Master internal audit techniques',
      'Implement quality management systems',
      'Conduct compliance audits',
      'Drive continuous improvement'
    ],
    curriculum: [
      'ISO 9001 Standards',
      'Internal Audit Techniques',
      'Quality Management Systems',
      'Compliance Requirements',
      'Continuous Improvement'
    ],
    prerequisites: ['Quality Management Experience', 'Government Employment'],
    targetAudience: ['Quality Officers', 'Department Heads', 'Process Owners'],
    partner: 'HRMO + External Certifiers',
    certificate: true,
    featured: true,
  },
  {
    slug: 'strategic-planning-workshop',
    title: 'Strategic Planning and Data-Driven Governance Workshop',
    icon: '📋',
    description: 'Capacity building on strategic planning, data-driven decision-making, and performance monitoring for responsive governance.',
    duration: '1 week',
    level: 'Advanced',
    outcomes: [
      'Develop strategic planning frameworks',
      'Apply data-driven governance',
      'Implement performance monitoring',
      'Make responsive decisions',
      'Align with SDGs'
    ],
    curriculum: [
      'Strategic Planning Frameworks',
      'Data-Driven Governance',
      'Performance Monitoring',
      'Responsive Decision-Making',
      'SDG Alignment'
    ],
    prerequisites: ['Management Position', 'Government Employment'],
    targetAudience: ['Department Heads', 'Planning Officers', 'Policy Makers'],
    partner: 'Provincial Planning Office + HRMO',
    certificate: true,
    featured: true,
  },
  {
    slug: 'cso-capacity-building',
    title: 'CSO Capacity Building Program',
    icon: '🤝',
    description: 'Capacity building for Civil Society Organizations on STI advocacy, SDG implementation, and collaborative governance.',
    duration: '6 weeks',
    level: 'Intermediate',
    outcomes: [
      'Understand STI frameworks',
      'Implement SDG-aligned programs',
      'Engage in collaborative governance',
      'Advocate for innovation',
      'Measure impact'
    ],
    curriculum: [
      'STI Frameworks',
      'SDG Implementation',
      'Collaborative Governance',
      'Advocacy Strategies',
      'Impact Measurement'
    ],
    targetAudience: ['CSO Members', 'Community Leaders', 'NGO Staff'],
    partner: 'Provincial STI Council',
    certificate: true,
    featured: true,
  }
];

export const scholarships: Scholarship[] = [
  {
    slug: 'provincial-sti-scholarship',
    title: 'Provincial STI Scholarship Program',
    sponsor: 'Provincial Government of Surigao del Norte',
    sponsorLogo: '/images/partners/provincial.png',
    deadline: 'Rolling',
    eligibility: [
      'Resident of Surigao del Norte',
      'Pursuing STI-related courses',
      'Good academic standing',
      'Financial need',
      'Commitment to return to province'
    ],
    benefits: [
      'Full tuition coverage',
      'Monthly stipend',
      'Book allowance',
      'Research funding',
      'Priority government employment'
    ],
    requirements: [
      'Application form',
      'Certificate of residency',
      'School enrollment form',
      'Grades',
      'Letter of commitment'
    ],
    coverage: 'Full tuition and fees',
    duration: 'Until graduation',
    category: 'Government',
    featured: true,
  },
  {
    slug: 'dost-sti-scholarship',
    title: 'DOST STI Scholarship Program',
    sponsor: 'Department of Science and Technology',
    sponsorLogo: '/images/partners/dost.png',
    deadline: 'Annual',
    eligibility: [
      'Filipino citizen',
      'Grade 12 graduate',
      'STEM track preferred',
      'GWA of 85% or higher',
      'Pursuing STI priority courses'
    ],
    benefits: [
      'Tuition and fees coverage',
      'Monthly stipend',
      'Book allowance',
      'Thesis/dissertation grant',
      'Priority employment'
    ],
    requirements: [
      'Duly accomplished application form',
      'Report card',
      'Certificate of good moral character',
      'Birth certificate',
      'Parent\'s income tax return'
    ],
    coverage: 'Full tuition and fees',
    duration: '4-5 years',
    category: 'Government',
    featured: true,
  },
  {
    slug: 'ched-innovation-scholarship',
    title: 'CHED Innovation Scholarship',
    sponsor: 'Commission on Higher Education',
    sponsorLogo: '/images/partners/ched.png',
    deadline: 'Annual',
    eligibility: [
      'Filipino citizen',
      'College student',
      'Innovation or research track',
      'Good academic standing',
      'Not a recipient of other scholarships'
    ],
    benefits: [
      'Tuition subsidy',
      'Living allowance',
      'Research funding',
      'Conference support',
      'Mentorship program'
    ],
    requirements: [
      'Application form',
      'Transcript of records',
      'Research proposal',
      'Letter of recommendation',
      'Certificate of good moral character'
    ],
    coverage: 'Partial to full tuition',
    duration: 'Until graduation',
    category: 'Government',
    featured: true,
  },
  {
    slug: 'international-sti-exchange',
    title: 'International STI Exchange Scholarship',
    sponsor: 'International STI Partners',
    sponsorLogo: '/images/partners/international.png',
    deadline: 'Annual',
    eligibility: [
      'Filipino citizen',
      'Surigao del Norte resident',
      'College or graduate student',
      'STI-related field',
      'Excellent academic record'
    ],
    benefits: [
      'Full tuition coverage',
      'Living allowance',
      'Travel expenses',
      'Research funding',
      'International exposure'
    ],
    requirements: [
      'Application form',
      'Transcript of records',
      'Research proposal',
      'English proficiency certificate',
      'Letter of recommendation'
    ],
    coverage: 'Full expenses',
    duration: '6 months to 1 year',
    category: 'International',
    featured: true,
  }
];

export const universities: University[] = [
  {
    slug: 'surigao-state-university',
    name: 'Surigao del Norte State University',
    logo: '🎓',
    coverImage: '/images/universities/snsu-cover.jpg',
    overview: 'Surigao del Norte State University is a premier educational institution in the Caraga region and key partner in the provincial STI development plan, offering quality education in various fields including engineering, agriculture, fisheries, and technology.',
    established: 1969,
    location: 'Surigao City, Surigao del Norte',
    website: 'https://snsu.edu.ph',
    email: 'info@snsu.edu.ph',
    phone: '+63 85 826 1234',
    programs: [
      'Bachelor of Science in Civil Engineering',
      'Bachelor of Science in Electrical Engineering',
      'Bachelor of Science in Agriculture',
      'Bachelor of Science in Fisheries',
      'Bachelor of Science in Information Technology',
      'Bachelor of Science in Education'
    ],
    laboratories: [
      'Engineering Laboratory',
      'Agriculture Research Center',
      'Fisheries Laboratory',
      'Computer Laboratory',
      'Science Laboratory'
    ],
    researchAreas: [
      'STI Collaborative Research',
      'Sustainable Agriculture',
      'Marine Resources',
      'Digital Transformation',
      'Engineering Innovations'
    ],
    partnerships: [
      'Provincial STI Council',
      'DOST',
      'DA',
      'DENR',
      'DTI'
    ],
    achievements: [
      'STI Development Plan Partner',
      'Research Grant Recipient',
      'CHED Accredited Programs',
      'Industry Partnership Awards'
    ],
    contact: {
      address: 'Surigao City, Surigao del Norte',
      email: 'info@snsu.edu.ph',
      phone: '+63 85 826 1234',
      website: 'https://snsu.edu.ph'
    },
    featured: true,
  },
  {
    slug: 'caraga-state-university',
    name: 'Caraga State University',
    logo: '🏛️',
    coverImage: '/images/universities/csu-cover.jpg',
    overview: 'Caraga State University is a leading research university in the Caraga region and STI development partner, known for its excellence in agriculture, environmental science, and technology.',
    established: 1978,
    location: 'Butuan City, Agusan del Norte',
    website: 'https://carsu.edu.ph',
    email: 'info@carsu.edu.ph',
    programs: [
      'Bachelor of Science in Environmental Science',
      'Bachelor of Science in Agriculture',
      'Bachelor of Science in Forestry',
      'Bachelor of Science in Computer Science',
      'Bachelor of Science in Development Communication'
    ],
    laboratories: [
      'Environmental Research Laboratory',
      'Agriculture Innovation Center',
      'Forestry Research Station',
      'Technology Hub',
      'Communication Studio'
    ],
    researchAreas: [
      'Climate Change Research',
      'STI Innovation',
      'Sustainable Agriculture',
      'Waste Management',
      'Community Development'
    ],
    partnerships: [
      'Provincial STI Council',
      'DENR',
      'DA',
      'DOST',
      'NGOs'
    ],
    achievements: [
      'STI Research Partner',
      'Environmental Excellence Awards',
      'International Collaborations',
      'CHED Center of Development'
    ],
    contact: {
      address: 'Butuan City, Agusan del Norte',
      email: 'info@carsu.edu.ph',
      website: 'https://carsu.edu.ph'
    },
    featured: true,
  },
  {
    slug: 'tesda',
    name: 'TESDA - Surigao del Norte',
    logo: '🔧',
    coverImage: '/images/universities/tesda-cover.jpg',
    overview: 'TESDA Surigao del Norte provides technical vocational education and training programs to develop skilled workforce for various industries, supporting the provincial digital transformation and skills development goals.',
    established: 1994,
    location: 'Surigao City, Surigao del Norte',
    website: 'https://tesda.gov.ph',
    email: 'surigao@tesda.gov.ph',
    programs: [
      'Automotive Servicing',
      'Electrical Installation',
      'Computer Hardware Servicing',
      'Shielded Metal Arc Welding',
      'Cookery',
      'Bread and Pastry Production'
    ],
    laboratories: [
      'Automotive Workshop',
      'Electrical Laboratory',
      'Computer Laboratory',
      'Welding Workshop',
      'Culinary Kitchen'
    ],
    researchAreas: [
      'Technical Skills Development',
      'Industry Standards',
      'Training Methodologies',
      'Digital Skills Training'
    ],
    partnerships: [
      'Provincial ICT Office',
      'Private Companies',
      'LGUs',
      'Industry Associations'
    ],
    achievements: [
      'Digital Skills Training Partner',
      'Industry Partnership Awards',
      'Skills Competition Winners',
      'Training Excellence'
    ],
    contact: {
      address: 'Surigao City, Surigao del Norte',
      email: 'surigao@tesda.gov.ph',
      website: 'https://tesda.gov.ph'
    },
    featured: true,
  }
];

export const courses: Course[] = [
  {
    slug: 'python-programming',
    title: 'Python Programming Fundamentals',
    instructor: 'Dr. Maria Santos',
    instructorImage: '/images/instructors/maria-santos.jpg',
    instructorBio: 'Computer Science professor with 15 years of experience in software development and teaching.',
    difficulty: 'Beginner',
    duration: '8 weeks',
    hours: 40,
    price: 0,
    language: 'English',
    learningOutcomes: [
      'Write Python programs',
      'Understand programming concepts',
      'Build simple applications',
      'Debug code effectively',
      'Use Python libraries'
    ],
    curriculum: [
      { module: 'Introduction', topics: ['Python Setup', 'Variables', 'Data Types'] },
      { module: 'Control Flow', topics: ['Conditionals', 'Loops', 'Functions'] },
      { module: 'Data Structures', topics: ['Lists', 'Dictionaries', 'Sets'] },
      { module: 'File Handling', topics: ['Reading Files', 'Writing Files', 'CSV Processing'] },
      { module: 'Projects', topics: ['Mini Projects', 'Final Project'] }
    ],
    rating: 4.8,
    reviews: 234,
    enrolled: 1520,
    category: 'Programming',
    featured: true,
  },
  {
    slug: 'web-development',
    title: 'Full-Stack Web Development',
    instructor: 'Engr. Juan Reyes',
    instructorImage: '/images/instructors/juan-reyes.jpg',
    instructorBio: 'Full-stack developer with expertise in React, Node.js, and cloud technologies.',
    difficulty: 'Intermediate',
    duration: '12 weeks',
    hours: 60,
    price: 0,
    language: 'English',
    learningOutcomes: [
      'Build responsive websites',
      'Create REST APIs',
      'Deploy applications',
      'Use modern frameworks',
      'Implement authentication'
    ],
    curriculum: [
      { module: 'Frontend', topics: ['HTML/CSS', 'JavaScript', 'React'] },
      { module: 'Backend', topics: ['Node.js', 'Express', 'Databases'] },
      { module: 'Integration', topics: ['API Development', 'State Management'] },
      { module: 'Deployment', topics: ['Cloud Services', 'CI/CD'] },
      { module: 'Projects', topics: ['E-commerce', 'Social Media App'] }
    ],
    prerequisites: ['HTML/CSS basics', 'JavaScript fundamentals'],
    rating: 4.9,
    reviews: 189,
    enrolled: 980,
    category: 'Web Development',
    featured: true,
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design Fundamentals',
    instructor: 'Ana Cruz',
    instructorImage: '/images/instructors/ana-cruz.jpg',
    instructorBio: 'UX designer with experience in creating user-centered digital products for various industries.',
    difficulty: 'Beginner',
    duration: '6 weeks',
    hours: 30,
    price: 0,
    language: 'English',
    learningOutcomes: [
      'Understand UX principles',
      'Create user personas',
      'Design wireframes',
      'Build prototypes',
      'Conduct user testing'
    ],
    curriculum: [
      { module: 'UX Fundamentals', topics: ['User Research', 'Personas', 'Journey Maps'] },
      { module: 'UI Design', topics: ['Typography', 'Color', 'Layout'] },
      { module: 'Prototyping', topics: ['Figma', 'Wireframing', 'Mockups'] },
      { module: 'Testing', topics: ['Usability Testing', 'A/B Testing'] },
      { module: 'Projects', topics: ['Mobile App', 'Website Design'] }
    ],
    rating: 4.7,
    reviews: 156,
    enrolled: 720,
    category: 'Design',
    featured: true,
  },
  {
    slug: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    instructor: 'Dr. Roberto Tan',
    instructorImage: '/images/instructors/roberto-tan.jpg',
    instructorBio: 'AI researcher with expertise in machine learning, deep learning, and computer vision.',
    difficulty: 'Advanced',
    duration: '16 weeks',
    hours: 80,
    price: 0,
    language: 'English',
    learningOutcomes: [
      'Understand ML algorithms',
      'Build neural networks',
      'Implement computer vision',
      'Apply NLP techniques',
      'Deploy ML models'
    ],
    curriculum: [
      { module: 'ML Fundamentals', topics: ['Supervised Learning', 'Unsupervised Learning'] },
      { module: 'Deep Learning', topics: ['Neural Networks', 'CNN', 'RNN'] },
      { module: 'Computer Vision', topics: ['Image Processing', 'Object Detection'] },
      { module: 'NLP', topics: ['Text Processing', 'Sentiment Analysis'] },
      { module: 'Projects', topics: ['Image Classifier', 'Chatbot'] }
    ],
    prerequisites: ['Python', 'Mathematics', 'Statistics'],
    rating: 4.9,
    reviews: 98,
    enrolled: 450,
    category: 'AI',
    featured: true,
  },
  {
    slug: 'data-analytics',
    title: 'Data Analytics with Python',
    instructor: 'Carlos Mendoza',
    instructorImage: '/images/instructors/carlos-mendoza.jpg',
    instructorBio: 'Data scientist specializing in business intelligence and data visualization.',
    difficulty: 'Intermediate',
    duration: '10 weeks',
    hours: 50,
    price: 0,
    language: 'English',
    learningOutcomes: [
      'Analyze datasets',
      'Create visualizations',
      'Build dashboards',
      'Apply statistical methods',
      'Communicate insights'
    ],
    curriculum: [
      { module: 'Data Analysis', topics: ['Pandas', 'NumPy', 'Data Cleaning'] },
      { module: 'Visualization', topics: ['Matplotlib', 'Seaborn', 'Plotly'] },
      { module: 'Statistics', topics: ['Descriptive Stats', 'Hypothesis Testing'] },
      { module: 'Dashboards', topics: ['Streamlit', 'Power BI'] },
      { module: 'Projects', topics: ['Sales Analysis', 'Customer Insights'] }
    ],
    prerequisites: ['Python basics', 'Statistics fundamentals'],
    rating: 4.8,
    reviews: 145,
    enrolled: 680,
    category: 'Data',
    featured: false,
  },
  {
    slug: 'gis-mapping',
    title: 'GIS Mapping & Spatial Analysis',
    instructor: 'Elena Rodriguez',
    instructorImage: '/images/instructors/elena-rodriguez.jpg',
    instructorBio: 'GIS specialist with experience in environmental mapping and spatial analysis.',
    difficulty: 'Intermediate',
    duration: '8 weeks',
    hours: 40,
    price: 0,
    language: 'English',
    learningOutcomes: [
      'Understand GIS concepts',
      'Create maps',
      'Analyze spatial data',
      'Use GIS software',
      'Apply to real projects'
    ],
    curriculum: [
      { module: 'GIS Fundamentals', topics: ['Coordinate Systems', 'Map Projections'] },
      { module: 'Data Collection', topics: ['GPS', 'Remote Sensing'] },
      { module: 'Analysis', topics: ['Spatial Analysis', 'Network Analysis'] },
      { module: 'Visualization', topics: ['Cartography', 'Map Design'] },
      { module: 'Projects', topics: ['Land Use', 'Environmental Mapping'] }
    ],
    prerequisites: ['Computer literacy', 'Basic geography'],
    rating: 4.6,
    reviews: 89,
    enrolled: 340,
    category: 'GIS',
    featured: false,
  },
  {
    slug: 'renewable-energy',
    title: 'Renewable Energy Systems',
    instructor: 'Miguel Santos',
    instructorImage: '/images/instructors/miguel-santos.jpg',
    instructorBio: 'Energy engineer specializing in solar, wind, and other renewable energy technologies.',
    difficulty: 'Intermediate',
    duration: '10 weeks',
    hours: 50,
    price: 0,
    language: 'English',
    learningOutcomes: [
      'Understand renewable energy',
      'Design solar systems',
      'Assess wind potential',
      'Calculate energy output',
      'Implement projects'
    ],
    curriculum: [
      { module: 'Energy Fundamentals', topics: ['Energy Basics', 'Renewable Sources'] },
      { module: 'Solar Energy', topics: ['PV Systems', 'Design', 'Installation'] },
      { module: 'Wind Energy', topics: ['Wind Turbines', 'Site Assessment'] },
      { module: 'Storage', topics: ['Batteries', 'Grid Integration'] },
      { module: 'Projects', topics: ['Solar Design', 'Feasibility Study'] }
    ],
    prerequisites: ['Physics', 'Mathematics'],
    rating: 4.7,
    reviews: 112,
    enrolled: 420,
    category: 'Energy',
    featured: false,
  },
  {
    slug: 'marine-technology',
    title: 'Marine Technology & Oceanography',
    instructor: 'Dr. Lisa Cruz',
    instructorImage: '/images/instructors/lisa-cruz.jpg',
    instructorBio: 'Marine scientist with expertise in oceanography, marine biology, and marine technology.',
    difficulty: 'Advanced',
    duration: '12 weeks',
    hours: 60,
    price: 0,
    language: 'English',
    learningOutcomes: [
      'Understand oceanography',
      'Use marine technology',
      'Study marine ecosystems',
      'Conduct field research',
      'Analyze marine data'
    ],
    curriculum: [
      { module: 'Oceanography', topics: ['Physical Oceanography', 'Chemical Oceanography'] },
      { module: 'Marine Tech', topics: ['ROVs', 'Sensors', 'Acoustics'] },
      { module: 'Ecosystems', topics: ['Coral Reefs', 'Marine Life'] },
      { module: 'Research', topics: ['Field Methods', 'Data Analysis'] },
      { module: 'Projects', topics: ['Reef Survey', 'Water Quality'] }
    ],
    prerequisites: ['Biology', 'Chemistry', 'Physics'],
    rating: 4.8,
    reviews: 76,
    enrolled: 280,
    category: 'Marine',
    featured: false,
  },
];

export const laboratories: Laboratory[] = [
  {
    slug: 'robotics-lab',
    name: 'Robotics Laboratory',
    image: '/images/labs/robotics.jpg',
    description: 'State-of-the-art robotics facility equipped with industrial robots, programmable logic controllers, and automation systems for hands-on training and research.',
    institution: 'Surigao del Norte State University',
    location: 'Surigao City',
    equipment: [
      'Industrial Robot Arms',
      'PLC Systems',
      'Sensors and Actuators',
      '3D Printers',
      'CNC Machines',
      'Simulation Software'
    ],
    services: [
      'Robotics Training',
      'Automation Projects',
      'Research Support',
      'Equipment Rental',
      'Consulting'
    ],
    capacity: 30,
    availability: 'Monday-Friday, 8AM-5PM',
    featured: true,
  },
  {
    slug: 'ai-laboratory',
    name: 'AI Laboratory',
    image: '/images/labs/ai.jpg',
    description: 'Advanced AI research facility with high-performance computing, GPU clusters, and specialized software for machine learning and deep learning research.',
    institution: 'Caraga State University',
    location: 'Butuan City',
    equipment: [
      'GPU Clusters',
      'High-Performance Computing',
      'Neural Network Hardware',
      'Data Storage Systems',
      'AI Development Tools',
      'VR/AR Equipment'
    ],
    services: [
      'AI Research',
      'Model Training',
      'Data Processing',
      'Collaboration Space',
      'Workshops'
    ],
    capacity: 25,
    availability: 'Monday-Saturday, 9AM-6PM',
    featured: true,
  },
  {
    slug: 'fablab',
    name: 'FabLab Surigao',
    image: '/images/labs/fablab.jpg',
    description: 'Digital fabrication laboratory providing access to rapid prototyping tools, 3D printing, laser cutting, and CNC machining for innovation and entrepreneurship.',
    institution: 'Surigao del Norte State University',
    location: 'Surigao City',
    equipment: [
      '3D Printers',
      'Laser Cutters',
      'CNC Router',
      'Vinyl Cutter',
      'Electronics Workbench',
      'Design Software'
    ],
    services: [
      'Prototyping',
      'Fabrication Services',
      'Training Programs',
      'Maker Space Access',
      'Project Support'
    ],
    capacity: 20,
    availability: 'Monday-Friday, 8AM-5PM',
    featured: true,
  },
  {
    slug: '3d-printing-center',
    name: '3D Printing Center',
    image: '/images/labs/3d-printing.jpg',
    description: 'Specialized 3D printing facility with various printer types for prototyping, manufacturing, and educational purposes.',
    institution: 'TESDA Surigao',
    location: 'Surigao City',
    equipment: [
      'FDM Printers',
      'SLA Printers',
      'SLS Printers',
      'Scanners',
      'Post-Processing Equipment',
      'Design Software'
    ],
    services: [
      '3D Printing Services',
      'Training Programs',
      'Design Assistance',
      'Material Sales',
      'Consulting'
    ],
    capacity: 15,
    availability: 'Monday-Friday, 8AM-4PM',
    featured: false,
  },
  {
    slug: 'marine-research-center',
    name: 'Marine Research Center',
    image: '/images/labs/marine.jpg',
    description: 'Marine biology and oceanography research facility with laboratories, field equipment, and vessels for marine ecosystem studies.',
    institution: 'Surigao del Norte State University',
    location: 'Surigao City',
    equipment: [
      'Research Vessel',
      'Water Quality Analyzers',
      'Microscopes',
      'Sampling Equipment',
      'Data Loggers',
      'GPS Systems'
    ],
    services: [
      'Marine Research',
      'Water Quality Testing',
      'Biodiversity Studies',
      'Field Expeditions',
      'Training Programs'
    ],
    capacity: 40,
    availability: 'By Appointment',
    featured: true,
  },
  {
    slug: 'biotechnology-lab',
    name: 'Biotechnology Laboratory',
    image: '/images/labs/biotech.jpg',
    description: 'Modern biotechnology facility for molecular biology, microbiology, and genetic research applications.',
    institution: 'Caraga State University',
    location: 'Butuan City',
    equipment: [
      'PCR Machines',
      'Centrifuges',
      'Microscopes',
      'Incubators',
      'Autoclaves',
      'Spectrophotometers'
    ],
    services: [
      'DNA Analysis',
      'Microbial Testing',
      'Research Support',
      'Training Programs',
      'Sample Processing'
    ],
    capacity: 20,
    availability: 'Monday-Friday, 8AM-5PM',
    featured: false,
  },
];

export const competitions: Competition[] = [
  {
    slug: 'hackathon-2024',
    title: 'Surigao Innovation Hackathon 2024',
    date: '2024-06-15',
    deadline: '2024-05-30',
    location: 'Surigao City',
    description: '48-hour hackathon bringing together developers, designers, and innovators to build solutions for local challenges.',
    category: 'Technology',
    requirements: [
      'Team of 3-5 members',
      'Programming skills',
      'Innovative mindset',
      'Available for 48 hours'
    ],
    prizes: [
      { rank: '1st Place', prize: '₱50,000 + Incubation Support' },
      { rank: '2nd Place', prize: '₱30,000' },
      { rank: '3rd Place', prize: '₱20,000' },
      { rank: 'Special Awards', prize: 'Various Category Prizes' }
    ],
    eligibility: [
      'College students',
      'Young professionals',
      'Ages 18-30',
      'Philippine residents'
    ],
    organizer: 'PRIME SDN',
    featured: true,
  },
  {
    slug: 'robotics-competition',
    title: 'Regional Robotics Competition',
    date: '2024-07-20',
    deadline: '2024-06-30',
    location: 'Surigao City',
    description: 'Robotics competition featuring autonomous robots, remote-controlled robots, and innovative robotic solutions.',
    category: 'Robotics',
    requirements: [
      'Functional robot',
      'Team registration',
      'Technical documentation',
      'Safety compliance'
    ],
    prizes: [
      { rank: '1st Place', prize: '₱40,000 + Trophy' },
      { rank: '2nd Place', prize: '₱25,000' },
      { rank: '3rd Place', prize: '₱15,000' }
    ],
    eligibility: [
      'High school students',
      'College students',
      'Robotics clubs'
    ],
    organizer: 'DOST',
    featured: true,
  },
  {
    slug: 'science-fair',
    title: 'Regional Science Fair',
    date: '2024-08-15',
    deadline: '2024-07-15',
    location: 'Butuan City',
    description: 'Annual science fair showcasing innovative research projects from students across the region.',
    category: 'Science',
    requirements: [
      'Research project',
      'Scientific poster',
      'Oral presentation',
      'Research paper'
    ],
    prizes: [
      { rank: '1st Place', prize: '₱30,000' },
      { rank: '2nd Place', prize: '₱20,000' },
      { rank: '3rd Place', prize: '₱10,000' }
    ],
    eligibility: [
      'High school students',
      'College students',
      'Individual or team entries'
    ],
    organizer: 'DepEd',
    featured: false,
  },
  {
    slug: 'startup-weekend',
    title: 'Startup Weekend Surigao',
    date: '2024-09-20',
    deadline: '2024-08-30',
    location: 'Surigao City',
    description: '54-hour startup creation event where participants pitch ideas, form teams, and build startup prototypes.',
    category: 'Entrepreneurship',
    requirements: [
      'Startup idea',
      'Willingness to work in teams',
      'Weekend availability',
      'Pitch presentation'
    ],
    prizes: [
      { rank: '1st Place', prize: '₱50,000 + Mentorship' },
      { rank: '2nd Place', prize: '₱30,000' },
      { rank: '3rd Place', prize: '₱20,000' }
    ],
    eligibility: [
      'Ages 18+',
      'Students and professionals',
      'Entrepreneurial mindset'
    ],
    organizer: 'DTI',
    featured: true,
  },
  {
    slug: 'research-congress',
    title: 'Caraga Research Congress',
    date: '2024-10-10',
    deadline: '2024-09-15',
    location: 'Butuan City',
    description: 'Academic congress presenting research findings from universities and research institutions in the Caraga region.',
    category: 'Research',
    requirements: [
      'Completed research',
      'Abstract submission',
      'Full paper',
      'Presentation readiness'
    ],
    prizes: [
      { rank: 'Best Paper', prize: '₱25,000' },
      { rank: 'Best Presenter', prize: '₱15,000' },
      { rank: 'Special Awards', prize: 'Various' }
    ],
    eligibility: [
      'Researchers',
      'Faculty members',
      'Graduate students'
    ],
    organizer: 'CHED',
    featured: false,
  },
  {
    slug: 'innovation-challenge',
    title: 'Sustainable Innovation Challenge',
    date: '2024-11-15',
    deadline: '2024-10-30',
    location: 'Surigao City',
    description: 'Innovation challenge focused on sustainable solutions for environmental and community issues.',
    category: 'Sustainability',
    requirements: [
      'Sustainable solution',
      'Prototype or concept',
      'Impact assessment',
      'Feasibility study'
    ],
    prizes: [
      { rank: '1st Place', prize: '₱40,000' },
      { rank: '2nd Place', prize: '₱25,000' },
      { rank: '3rd Place', prize: '₱15,000' }
    ],
    eligibility: [
      'Students',
      'Professionals',
      'Community groups'
    ],
    organizer: 'DENR',
    featured: false,
  },
];

export const mentors: Mentor[] = [
  {
    slug: 'dr-maria-santos',
    name: 'Dr. Maria Santos',
    photo: '/images/mentors/maria-santos.jpg',
    expertise: ['Artificial Intelligence', 'Machine Learning', 'Computer Science', 'Research'],
    organization: 'Caraga State University',
    role: 'Professor - Computer Science',
    bio: 'Dr. Maria Santos is a Computer Science professor with 15 years of experience in AI research and education. She has published numerous papers on machine learning and mentors students in cutting-edge technology projects.',
    yearsOfExperience: 15,
    linkedin: 'https://linkedin.com/in/maria-santos',
    email: 'msantos@carsu.edu.ph',
    availability: 'Weekdays, 2PM-5PM',
    mentorshipAreas: ['AI/ML Projects', 'Research Guidance', 'Career Advice', 'Technical Skills'],
    languages: ['English', 'Filipino'],
    featured: true,
  },
  {
    slug: 'engr-juan-reyes',
    name: 'Engr. Juan Reyes',
    photo: '/images/mentors/juan-reyes.jpg',
    expertise: ['Software Development', 'Web Technologies', 'Cloud Computing', 'DevOps'],
    organization: 'TechNova Solutions',
    role: 'CTO & Co-Founder',
    bio: 'Engr. Juan Reyes is a full-stack developer and CTO of TechNova Solutions. He has over 10 years of industry experience in building scalable web applications and cloud infrastructure.',
    yearsOfExperience: 10,
    linkedin: 'https://linkedin.com/in/juan-reyes',
    email: 'juan@technova.ph',
    availability: 'Weekends',
    mentorshipAreas: ['Startup Development', 'Technical Architecture', 'Career Growth', 'Industry Insights'],
    languages: ['English', 'Filipino'],
    featured: true,
  },
  {
    slug: 'ana-cruz',
    name: 'Ana Cruz',
    photo: '/images/mentors/ana-cruz.jpg',
    expertise: ['UI/UX Design', 'Product Design', 'User Research', 'Design Systems'],
    organization: 'Freelance Designer',
    role: 'Senior UX Designer',
    bio: 'Ana Cruz is a senior UX designer with experience in creating user-centered digital products for startups and enterprises. She specializes in design systems and user research methodologies.',
    yearsOfExperience: 8,
    linkedin: 'https://linkedin.com/in/ana-cruz',
    email: 'ana@design.ph',
    availability: 'Flexible',
    mentorshipAreas: ['Design Career', 'Portfolio Building', 'Design Systems', 'User Research'],
    languages: ['English', 'Filipino'],
    featured: true,
  },
  {
    slug: 'dr-roberto-tan',
    name: 'Dr. Roberto Tan',
    photo: '/images/mentors/roberto-tan.jpg',
    expertise: ['Marine Science', 'Oceanography', 'Environmental Research', 'Marine Biology'],
    organization: 'MarineTech PH',
    role: 'CEO & Founder',
    bio: 'Dr. Roberto Tan is a marine biologist and founder of MarineTech PH. He has extensive research experience in marine ecosystems and conservation technologies.',
    yearsOfExperience: 12,
    linkedin: 'https://linkedin.com/in/roberto-tan',
    email: 'roberto@marinetech.ph',
    availability: 'Weekdays',
    mentorshipAreas: ['Marine Research', 'Environmental Science', 'Startup Development', 'Research Funding'],
    languages: ['English', 'Filipino'],
    featured: false,
  },
  {
    slug: 'carlos-mendoza',
    name: 'Carlos Mendoza',
    photo: '/images/mentors/carlos-mendoza.jpg',
    expertise: ['Data Science', 'Business Intelligence', 'Analytics', 'Statistics'],
    organization: 'HealthConnect',
    role: 'Data Science Lead',
    bio: 'Carlos Mendoza is a data scientist specializing in business intelligence and data visualization. He helps organizations make data-driven decisions through analytics and insights.',
    yearsOfExperience: 7,
    linkedin: 'https://linkedin.com/in/carlos-mendoza',
    email: 'carlos@healthconnect.ph',
    availability: 'Evenings',
    mentorshipAreas: ['Data Science Career', 'Analytics Projects', 'Technical Skills', 'Industry Applications'],
    languages: ['English', 'Filipino'],
    featured: false,
  },
];

export const careers: Career[] = [
  {
    slug: 'internship-technova',
    title: 'Software Development Intern',
    company: 'TechNova Solutions',
    companyLogo: '/images/companies/technova.png',
    type: 'Internship',
    location: 'Surigao City',
    remote: false,
    description: 'Join our development team to work on AI-powered agricultural technology. You will gain hands-on experience in software development, machine learning, and agricultural technology.',
    requirements: [
      'Currently enrolled in CS/IT program',
      'Knowledge of Python or JavaScript',
      'Basic understanding of ML concepts',
      'Strong problem-solving skills',
      'Available for 3-6 months'
    ],
    benefits: [
      'Monthly allowance',
      'Real project experience',
      'Mentorship from senior developers',
      'Potential full-time offer',
      'Certificate of completion'
    ],
    duration: '3-6 months',
    applicationLink: 'https://technova.ph/careers',
    deadline: '2024-04-30',
    featured: true,
  },
  {
    slug: 'ojt-ecosurigao',
    title: 'Operations OJT',
    company: 'EcoSurigao',
    companyLogo: '/images/companies/ecosurigao.png',
    type: 'OJT',
    location: 'Surigao City',
    remote: false,
    description: 'Learn sustainable waste management operations through hands-on experience in recycling processes, community engagement, and business operations.',
    requirements: [
      'Engineering or Business student',
      'Interest in sustainability',
      'Strong organizational skills',
      'Willingness to work in operations',
      'Good communication skills'
    ],
    benefits: [
      'Practical industry experience',
      'Sustainability knowledge',
      'Networking opportunities',
      'Potential employment',
      'Training certification'
    ],
    duration: '500 hours',
    applicationLink: 'https://ecosurigao.com/careers',
    deadline: '2024-05-15',
    featured: true,
  },
  {
    slug: 'research-assistant-marine',
    title: 'Marine Research Assistant',
    company: 'MarineTech PH',
    companyLogo: '/images/companies/marinetech.png',
    type: 'Research Assistantship',
    location: 'Surigao City',
    remote: false,
    description: 'Assist in marine ecosystem monitoring, data collection, and research analysis for coral reef conservation projects.',
    requirements: [
      'Marine Biology or related field',
      'Strong swimming skills',
      'Research experience preferred',
      'Data analysis skills',
      'Field work willingness'
    ],
    benefits: [
      'Research stipend',
      'Field experience',
      'Publication opportunities',
      'Professional development',
      'Equipment access'
    ],
    salary: '₱15,000/month',
    duration: '6 months',
    applicationLink: 'https://marinetech.ph/careers',
    deadline: '2024-04-20',
    featured: true,
  },
  {
    slug: 'fullstack-developer',
    title: 'Full-Stack Developer',
    company: 'HealthConnect',
    companyLogo: '/images/companies/healthconnect.png',
    type: 'Full-time',
    location: 'Surigao City',
    remote: true,
    description: 'Build and maintain telemedicine platform connecting remote communities with healthcare providers. Work with modern web technologies and healthcare systems.',
    requirements: [
      '3+ years web development experience',
      'Proficiency in React and Node.js',
      'Database experience',
      'Healthcare domain knowledge preferred',
      'Strong communication skills'
    ],
    benefits: [
      'Competitive salary',
      'Remote work options',
      'Health insurance',
      'Professional development',
      'Impactful work'
    ],
    salary: '₱40,000-60,000/month',
    applicationLink: 'https://healthconnect.ph/careers',
    featured: true,
  },
  {
    slug: 'volunteer-edulearn',
    title: 'Education Volunteer',
    company: 'EduLearn Surigao',
    companyLogo: '/images/companies/edulearn.png',
    type: 'Volunteer',
    location: 'Various Locations',
    remote: false,
    description: 'Support digital learning initiatives in underserved communities. Help with device setup, training, and content delivery for educational programs.',
    requirements: [
      'Passion for education',
      'Basic tech literacy',
      'Patience with learners',
      'Available on weekends',
      'Good communication skills'
    ],
    benefits: [
      'Community impact',
      'Teaching experience',
      'Networking',
      'Certificate of volunteerism',
      'Skills development'
    ],
    duration: 'Flexible',
    applicationLink: 'https://edulearn.ph/volunteer',
    featured: false,
  },
  {
    slug: 'apprenticeship-tourismx',
    title: 'Digital Marketing Apprentice',
    company: 'TourismX',
    companyLogo: '/images/companies/tourismx.png',
    type: 'Apprenticeship',
    location: 'Surigao City',
    remote: false,
    description: 'Learn digital marketing strategies for tourism promotion. Work on social media, content creation, and tourism campaign management.',
    requirements: [
      'Marketing or Communication student',
      'Social media savvy',
      'Creative mindset',
      'Writing skills',
      'Interest in tourism'
    ],
    benefits: [
      'Hands-on marketing experience',
      'Industry mentorship',
      'Portfolio building',
      'Network with tourism partners',
      'Potential employment'
    ],
    duration: '6 months',
    applicationLink: 'https://tourismx.ph/careers',
    deadline: '2024-05-30',
    featured: false,
  },
];

export const successStories: SuccessStory[] = [
  {
    slug: 'alex-garcia',
    name: 'Alex Garcia',
    photo: '/images/stories/alex-garcia.jpg',
    achievement: 'DOST Scholar & Tech Startup Founder',
    story: 'Alex Garcia was a DOST scholar who graduated with honors in Computer Engineering. During college, he developed an AI-powered crop monitoring system that won regional competitions. After graduation, he founded TechNova Solutions, which now helps farmers across Surigao del Norte optimize their yields through data analytics. His journey from scholar to innovator inspires many students in the region.',
    category: 'Scholar',
    institution: 'Surigao del Norte State University',
    year: 2023,
    quote: 'Education and opportunity transformed my life. Now I\'m giving back to my community through technology.',
    featured: true,
  },
  {
    slug: 'maria-reyes',
    name: 'Maria Reyes',
    photo: '/images/stories/maria-reyes.jpg',
    achievement: 'Marine Research Pioneer',
    story: 'Maria Reyes pursued her passion for marine biology through scholarships and research grants. She conducted groundbreaking research on coral reef conservation in Surigao, leading to the establishment of marine protected areas. Her work has been recognized by DENR and international conservation organizations. She now leads marine research initiatives and mentors young scientists.',
    category: 'Researcher',
    institution: 'Caraga State University',
    year: 2023,
    quote: 'Protecting our marine ecosystems is not just a career, it\'s a calling.',
    featured: true,
  },
  {
    slug: 'carlos-santos',
    name: 'Carlos Santos',
    photo: '/images/stories/carlos-santos.jpg',
    achievement: 'National Robotics Champion',
    story: 'Carlos Santos discovered his passion for robotics through TESDA training programs. Despite limited resources, he built innovative robotic solutions using locally available materials. His robot won the national robotics competition, earning him recognition and scholarship opportunities. He now runs a robotics training center for youth in Surigao.',
    category: 'Competition Winner',
    institution: 'TESDA',
    year: 2023,
    quote: 'With determination and creativity, you can build amazing things from simple materials.',
    featured: true,
  },
  {
    slug: 'elena-cruz',
    name: 'Elena Cruz',
    photo: '/images/stories/elena-cruz.jpg',
    achievement: 'EdTech Innovator',
    story: 'Elena Cruz was a CHED scholar who developed a digital learning platform for underserved communities. Her platform, EduLearn, now provides quality education to thousands of students in remote areas. She was recognized as one of the top young innovators in the country and continues to expand educational access through technology.',
    category: 'Innovator',
    institution: 'Surigao del Norte State University',
    year: 2023,
    quote: 'Technology can bridge the education gap. Every student deserves access to quality learning.',
    featured: true,
  },
  {
    slug: 'miguel-tan',
    name: 'Miguel Tan',
    photo: '/images/stories/miguel-tan.jpg',
    achievement: 'Sustainable Tourism Entrepreneur',
    story: 'Miguel Tan combined his love for tourism with technology to create TourismX, a smart tourism app that enhances visitor experiences in Surigao. His startup was incubated at PRIME SDN and has since partnered with local tourism offices and businesses. He was awarded the Tourism Innovation Award by DOT.',
    category: 'Startup Founder',
    institution: 'Surigao del Norte State University',
    year: 2024,
    quote: 'Innovation in tourism can showcase the beauty of Surigao to the world.',
    featured: false,
  },
  {
    slug: 'sarah-mendoza',
    name: 'Sarah Mendoza',
    photo: '/images/stories/sarah-mendoza.jpg',
    achievement: 'Summa Cum Laude & DOST Scholar',
    story: 'Sarah Mendoza graduated Summa Cum Laude with a degree in Environmental Science. As a DOST scholar, she conducted research on renewable energy solutions for rural communities. Her research led to the implementation of solar energy projects in several barangays. She is now pursuing her PhD while continuing her advocacy for sustainable energy.',
    category: 'Scholar',
    institution: 'Caraga State University',
    year: 2024,
    quote: 'Sustainability is not just about the environment, it\'s about empowering communities.',
    featured: false,
  },
];

export const events: Event[] = [
  {
    slug: 'python-workshop',
    title: 'Python Programming Workshop',
    date: '2024-04-20',
    time: '9:00 AM - 4:00 PM',
    location: 'Surigao del Norte State University',
    description: 'Hands-on Python programming workshop for beginners. Learn the fundamentals of Python and build your first application.',
    category: 'Workshop',
    organizer: 'PRIME SDN',
    targetAudience: ['Students', 'Professionals', 'Beginners'],
    registrationLink: 'https://prime-sdn.ph/events/python-workshop',
    fee: 'Free',
    capacity: 50,
    featured: true,
  },
  {
    slug: 'ai-seminar',
    title: 'AI in Industry Seminar',
    date: '2024-05-15',
    time: '1:00 PM - 5:00 PM',
    location: 'Caraga State University',
    description: 'Seminar on the applications of Artificial Intelligence in various industries. Learn from industry experts about AI trends and opportunities.',
    category: 'Seminar',
    organizer: 'DOST',
    targetAudience: ['Professionals', 'Researchers', 'Students'],
    registrationLink: 'https://dost.ph/events/ai-seminar',
    fee: 'Free',
    capacity: 100,
    featured: true,
  },
  {
    slug: 'tech-conference',
    title: 'Caraga Technology Conference 2024',
    date: '2024-06-10',
    time: '8:00 AM - 5:00 PM',
    location: 'Butuan City',
    description: 'Annual technology conference featuring keynotes, workshops, and networking opportunities for tech enthusiasts and professionals.',
    category: 'Conference',
    organizer: 'DICT',
    targetAudience: ['Tech Professionals', 'Students', 'Entrepreneurs'],
    registrationLink: 'https://caragatechconf.ph',
    fee: '₱500',
    capacity: 200,
    featured: true,
  },
  {
    slug: 'data-science-bootcamp',
    title: 'Data Science Bootcamp',
    date: '2024-07-01',
    time: '9:00 AM - 5:00 PM',
    location: 'Surigao City',
    description: 'Intensive 5-day bootcamp covering data analysis, visualization, machine learning, and practical data science projects.',
    category: 'Bootcamp',
    organizer: 'PRIME SDN',
    targetAudience: ['Students', 'Professionals', 'Aspiring Data Scientists'],
    registrationLink: 'https://prime-sdn.ph/bootcamps/data-science',
    fee: '₱2,000',
    capacity: 30,
    featured: true,
  },
  {
    slug: 'entrepreneurship-training',
    title: 'Entrepreneurship Training Program',
    date: '2024-08-15',
    time: '8:00 AM - 5:00 PM',
    location: 'Surigao City',
    description: 'Comprehensive entrepreneurship training covering business planning, financial management, marketing, and startup launch strategies.',
    category: 'Training',
    organizer: 'DTI',
    targetAudience: ['Aspiring Entrepreneurs', 'MSME Owners', 'Students'],
    registrationLink: 'https://dti.ph/training/entrepreneurship',
    fee: 'Free',
    capacity: 40,
    featured: false,
  },
  {
    slug: 'innovation-competition',
    title: 'Youth Innovation Competition',
    date: '2024-09-20',
    time: '9:00 AM - 5:00 PM',
    location: 'Surigao City',
    description: 'Competition for young innovators to showcase their creative solutions to community challenges. Open to high school and college students.',
    category: 'Competition',
    organizer: 'DepEd',
    targetAudience: ['High School Students', 'College Students'],
    registrationLink: 'https://deped.ph/competitions/innovation',
    fee: 'Free',
    capacity: 100,
    featured: false,
  },
];

// Helper functions
export function getLearningProgramBySlug(slug: string): LearningProgram | undefined {
  return learningPrograms.find((program) => program.slug === slug);
}

export function getScholarshipBySlug(slug: string): Scholarship | undefined {
  return scholarships.find((scholarship) => scholarship.slug === slug);
}

export function getUniversityBySlug(slug: string): University | undefined {
  return universities.find((university) => university.slug === slug);
}

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

export function getLaboratoryBySlug(slug: string): Laboratory | undefined {
  return laboratories.find((lab) => lab.slug === slug);
}

export function getCompetitionBySlug(slug: string): Competition | undefined {
  return competitions.find((competition) => competition.slug === slug);
}

export function getMentorBySlug(slug: string): Mentor | undefined {
  return mentors.find((mentor) => mentor.slug === slug);
}

export function getCareerBySlug(slug: string): Career | undefined {
  return careers.find((career) => career.slug === slug);
}

export function getSuccessStoryBySlug(slug: string): SuccessStory | undefined {
  return successStories.find((story) => story.slug === slug);
}

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((event) => event.slug === slug);
}

export function getAllLearningProgramSlugs(): string[] {
  return learningPrograms.map((program) => program.slug);
}

export function getAllScholarshipSlugs(): string[] {
  return scholarships.map((scholarship) => scholarship.slug);
}

export function getAllUniversitySlugs(): string[] {
  return universities.map((university) => university.slug);
}

export function getAllCourseSlugs(): string[] {
  return courses.map((course) => course.slug);
}

export function getAllLaboratorySlugs(): string[] {
  return laboratories.map((lab) => lab.slug);
}

export function getAllCompetitionSlugs(): string[] {
  return competitions.map((competition) => competition.slug);
}

export function getAllMentorSlugs(): string[] {
  return mentors.map((mentor) => mentor.slug);
}

export function getAllCareerSlugs(): string[] {
  return careers.map((career) => career.slug);
}

export function getAllSuccessStorySlugs(): string[] {
  return successStories.map((story) => story.slug);
}

export function getAllEventSlugs(): string[] {
  return events.map((event) => event.slug);
}
