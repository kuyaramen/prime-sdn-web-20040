import { db as prisma } from "../src/lib/db";
import bcrypt from "bcryptjs";

async function main() {
  console.log("Seeding database...");

  // 1. Clean existing data
  await prisma.activity.deleteMany({});
  await prisma.pillar.deleteMany({});
  await prisma.newsPost.deleteMany({});
  await prisma.startup.deleteMany({});
  await prisma.policy.deleteMany({});
  await prisma.adminUser.deleteMany({});
  await prisma.contactSubmission.deleteMany({});
  await prisma.newsletterSubscriber.deleteMany({});

  // 2. Create Admin User
  const passwordHash = await bcrypt.hash("changeme", 10);
  await prisma.adminUser.create({
    data: {
      email: "admin@primesdn.com",
      passwordHash,
      role: "admin",
      name: "Super Admin",
      updatedAt: new Date(),
    },
  });
  console.log("Admin user seeded: admin@primesdn.com / changeme");

  // 3. Create Pillars
  const pillars = [
    {
      title: "Governance & Policy",
      slug: "governance-policy",
      description: "Establishing regulatory frameworks and policies that support innovation, ease of doing business, and digital transformation in the province.",
      icon: "building",
      order: 1,
    },
    {
      title: "Education & Talent",
      slug: "education-talent",
      description: "Developing future-ready skills, digital literacy, and technical talent among students, professionals, and the local workforce.",
      icon: "graduation-cap",
      order: 2,
    },
    {
      title: "Research & Development",
      slug: "research-development",
      description: "Promoting scientific research, localized technology transfer, and sustainable solutions for Surigao's unique island ecosystems.",
      icon: "flask-conical",
      order: 3,
    },
    {
      title: "Startup Ecosystem",
      slug: "startup-ecosystem",
      description: "Supporting local entrepreneurs, tech startups, and social enterprises with incubation, mentoring, and access to capital.",
      icon: "rocket",
      order: 4,
    },
    {
      title: "Economic Growth",
      slug: "economic-growth",
      description: "Driving investment, job creation, and digital empowerment in traditional sectors like agriculture, fisheries, tourism, and mining.",
      icon: "trending-up",
      order: 5,
    },
    {
      title: "Culture, Arts & Tourism",
      slug: "culture-arts-tourism",
      description: "Leveraging Surigao's rich cultural heritage, creative industries, and world-class surfing assets to inspire sustainable tourism innovations.",
      icon: "palette",
      order: 6,
    },
    {
      title: "Infrastructure & Connectivity",
      slug: "infrastructure-connectivity",
      description: "Building digital infrastructures, internet connectivity, and physical innovation spaces like co-working and fabrication laboratories.",
      icon: "compass",
      order: 7,
    },
  ];

  for (const pillar of pillars) {
    await prisma.pillar.create({ data: pillar });
  }
  console.log("7 Pillars seeded.");

  // 4. Create Activities
  const activities = [
    {
      title: "Surigao Digital Innovation Summit 2026",
      slug: "surigao-digital-innovation-summit-2026",
      pillarTag: "startup-ecosystem",
      excerpt: "Bringing together local founders, digital nomads, and national tech investors to explore the startup potential of Surigao.",
      body: `<h2>Empowering the Next Generation of Island Founders</h2>
<p>The Surigao Digital Innovation Summit 2026 brought together over 300 developers, entrepreneurs, students, and government officials at the Surigao State University gym. The event highlighted emerging startups building solutions for the blue economy, agro-tech, and community-based ecotourism.</p>
<p>During the panel discussion, local leaders emphasized the importance of high-speed connectivity and mentoring programs for Surigaonon youth, enabling them to build global businesses while remaining in the province.</p>
<h3>Key Highlights:</h3>
<ul>
  <li>5 local startups presented in the first-ever Surigao Pitch Competition.</li>
  <li>Keynote speeches from national tech venture capitalists.</li>
  <li>Interactive workshop on building Web3 and cloud-based applications.</li>
</ul>`,
      coverImage: "/images/activities/summit.jpg",
      publishedAt: new Date("2026-05-10"),
      published: true,
    },
    {
      title: "Coastal Management & Marine Innovation Workshop",
      slug: "coastal-management-marine-innovation-workshop",
      pillarTag: "research-development",
      excerpt: "A hands-on research initiative utilizing smart ocean sensors to track coral reef health and fisheries sustainability.",
      body: `<h2>Smart Sensors for Sustainable Fishing Grounds</h2>
<p>Scientists, marine biologists, and fisherfolk gathered in General Luna to deploy low-cost IoT ocean sensors designed to monitor sea temperatures and water acidity. The workshop, sponsored by PRIME SDN, aimed to bridge local ecological knowledge with modern data analytics.</p>
<p>“By understanding our waters in real-time, we can prevent overfishing and adapt to changing climate conditions,” said a local marine conservation lead.</p>`,
      coverImage: "/images/activities/coastal.jpg",
      publishedAt: new Date("2026-06-02"),
      published: true,
    },
    {
      title: "TechTalent Surigao Boot camp",
      slug: "techtalent-surigao-bootcamp",
      pillarTag: "education-talent",
      excerpt: "An intensive 8-week web development and AI foundations boot camp for local graduating computer science students.",
      body: `<h2>Bridging the Gap to Remote Digital Careers</h2>
<p>Through a joint partnership between the Provincial Government and tech industry leaders, the TechTalent Bootcamp launched with 40 scholars. The curriculum covers Next.js, PostgreSQL, and foundational concepts of prompt engineering and generative AI.</p>
<p>Top performers will be placed in remote-first developer internships with international tech firms.</p>`,
      coverImage: "/images/activities/bootcamp.jpg",
      publishedAt: new Date("2026-04-15"),
      published: true,
    },
  ];

  for (const activity of activities) {
    await prisma.activity.create({ data: activity });
  }
  console.log("Activities seeded.");

  // 5. Create News
  const news = [
    {
      title: "PRIME SDN Portal Launched to Drive Innovation",
      slug: "prime-sdn-portal-launched-to-drive-innovation",
      category: "Announcements",
      excerpt: "The public-private movement Prime Surigao 2040 launches its official digital hub to connect innovators, policy makers, and startups.",
      body: `<h2>A Digital Hub for the Surigaonon Innovator</h2>
<p>Today marks the official launch of the PRIME SDN digital portal. This platform serves as a transparency hub for local policies, a calendar for innovation activities, and a directory for local startup ventures.</p>
<p>“Our goal is to build an inclusive innovation network. By digitizing our governance and showcasing our local achievements, we place Surigao del Norte firmly on the Philippine tech map,” said the Executive Director.</p>`,
      coverImage: "/images/news/launch.jpg",
      publishedAt: new Date("2026-06-19"),
      published: true,
    },
    {
      title: "Local Tech Startups Secure Seed Funding at Surigao Pitch Day",
      slug: "local-tech-startups-secure-seed-funding",
      category: "Success Stories",
      excerpt: "Two homegrown startups focused on eco-tourism booking and marine logistics raise preliminary funding at the Surigao Pitch Competition.",
      body: `<h2>Homegrown Innovation Gains Investor Backing</h2>
<p>Following the Digital Innovation Summit, two Surigao-based startups, Siargao SurfTech and IslandPay, secured seed funding totaling 1.5 million PHP from local angel networks.</p>
<p>Siargao SurfTech offers a custom booking and equipment rental management platform for surfing instructors, while IslandPay operates a light-weight offline payment interface for remote island stores.</p>`,
      coverImage: "/images/news/pitch.jpg",
      publishedAt: new Date("2026-05-18"),
      published: true,
    },
  ];

  for (const post of news) {
    await prisma.newsPost.create({ data: post });
  }
  console.log("News posts seeded.");

  // 6. Create Startups
  const startups = [
    {
      name: "Siargao SurfTech",
      slug: "siargao-surftech",
      logo: "/images/startups/surftech.jpg",
      description: "Booking and equipment management system for independent surf schools and guides.",
      category: "Tourism Tech",
      website: "https://surftech.siargao.ph",
      location: "General Luna",
      founded: 2025,
    },
    {
      name: "Surigao Agro-Solutions",
      slug: "surigao-agro-solutions",
      logo: "/images/startups/agro.jpg",
      description: "Providing solar-powered automated irrigation kits tailored for remote island farms.",
      category: "AgriTech",
      website: "https://surigaoagro.com",
      location: "Surigao City",
      founded: 2024,
    },
    {
      name: "IslandPay",
      slug: "islandpay",
      logo: "/images/startups/islandpay.jpg",
      description: "SMS-based offline mobile wallet for remote communities with limited mobile data.",
      category: "FinTech",
      website: "https://islandpay.ph",
      location: "Dapa",
      founded: 2025,
    },
  ];

  for (const startup of startups) {
    await prisma.startup.create({ data: startup });
  }
  console.log("Startups seeded.");

  // 7. Create Policies
  const policies = [
    {
      title: "Provincial Ordinance No. 2024-001: Surigao del Norte Innovation Council Charter",
      type: "Provincial Ordinance",
      refNumber: "PO-2024-001",
      dateIssued: new Date("2024-01-15"),
      description: "Provides the legal structure, funding, and personnel for the establishment of the Surigao del Norte Innovation Council.",
      fileUrl: "/docs/policies/PO-2024-001.pdf",
    },
    {
      title: "Executive Order No. 12: Establishing the Prime SDN Steering Committee",
      type: "Executive Order",
      refNumber: "EO-12-2025",
      dateIssued: new Date("2025-03-10"),
      description: "Creates the public-private steering committee to oversee coordination, goal-setting, and performance indicators for Surigao 2040.",
      fileUrl: "/docs/policies/EO-12-2025.pdf",
    },
  ];

  for (const policy of policies) {
    await prisma.policy.create({ data: policy });
  }
  console.log("Policies seeded.");

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
