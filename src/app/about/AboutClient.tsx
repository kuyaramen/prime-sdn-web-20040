"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, AnimatedHero, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { AboutNavigation } from "@/components/about/AboutNavigation";
import EcosystemFramework from "@/components/Ecosystem/EcosystemFramework";
import SSC2040Roadmap from "@/components/sections/SSC2040Roadmap";
import Image from "next/image";
import Link from "next/link";

export function AboutClient() {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();
  const scrollX = useTransform(scrollY, [0, 500], [0, 50]);
  const [selectedMilestone, setSelectedMilestone] = useState<number | null>(null);

  const x = prefersReduced ? 0 : scrollX;

  // Generate deterministic particle positions to avoid hydration mismatch
  const particlePositions = Array.from({ length: 20 }, (_, i) => ({
    x: ((i * 37) % 100) + "%",
    y: ((i * 53) % 100) + "%",
    delay: (i * 0.3) % 5,
    duration: 5 + ((i * 7) % 5),
  }));

  const navigationSections = [
    { id: "hero", label: "Home" },
    { id: "story", label: "Our Story" },
    { id: "vision", label: "Vision 2055" },
    { id: "mission", label: "SMART Mission" },
    { id: "values", label: "Core Values" },
    { id: "governance", label: "Governance" },
    { id: "framework", label: "Framework" },
    { id: "roadmap", label: "Roadmap" },
    { id: "policies", label: "Policies" },
    { id: "organization", label: "Organization" },
    { id: "partners", label: "Partners" },
    { id: "resources", label: "Resources" },
    { id: "faq", label: "FAQ" },
  ];

  const storyMilestones = [
    {
      year: "2020",
      title: "Foundation",
      description: "PRIME SDN was established as a public-private partnership to drive innovation in Surigao del Norte.",
      achievements: ["Initial stakeholder meetings", "Partnership agreements signed", "Core team assembled"],
      image: "/images/foundation.jpg",
      statistics: { partners: 5, meetings: 12, initiatives: 3 },
    },
    {
      year: "2022",
      title: "Vision Created",
      description: "The Surigao Prime 2040 vision was formulated, setting the roadmap for the province's digital transformation.",
      achievements: ["Strategic planning workshops", "Stakeholder consultations", "Vision document published"],
      image: "/images/vision-creation.jpg",
      statistics: { workshops: 8, consultations: 24, stakeholders: 150 },
    },
    {
      year: "2023",
      title: "Programs Developed",
      description: "Key programs were launched across education, research, and startup development sectors.",
      achievements: ["Education partnerships formed", "Research initiatives started", "Startup support launched"],
      image: "/images/programs-developed.jpg",
      statistics: { programs: 6, partners: 12, beneficiaries: 500 },
    },
    {
      year: "2024",
      title: "Innovation Ecosystem",
      description: "The innovation ecosystem began taking shape with partnerships across government, academia, and industry.",
      achievements: ["Innovation hubs established", "Digital infrastructure deployed", "Community engagement expanded"],
      image: "/images/innovation-ecosystem.jpg",
      statistics: { hubs: 3, partners: 25, activities: 45 },
    },
    {
      year: "2040",
      title: "Future Vision",
      description: "Surigao del Norte becomes a leading innovation hub in the Philippines, with thriving tech communities and sustainable development.",
      achievements: ["Premier innovation province", "Thriving startup ecosystem", "Sustainable development model"],
      image: "/images/future-vision.jpg",
      statistics: { startups: 100, investments: "$50M", jobs: 5000 },
    },
  ];

  const [selectedVisionLetter, setSelectedVisionLetter] = useState<string | null>(null);
  const [selectedMissionCard, setSelectedMissionCard] = useState<string | null>(null);

  const visionLetters = [
    {
      letter: "P",
      title: "Partnership",
      description: "Building strong collaborations between government, academia, industry, and communities to create a unified innovation ecosystem.",
      goals: ["Establish 50+ strategic partnerships", "Create multi-sector collaboration platforms", "Foster knowledge sharing networks"],
      outcomes: ["Increased resource mobilization", "Enhanced program effectiveness", "Sustainable ecosystem growth"],
      pillars: ["Collaboration", "Governance"],
    },
    {
      letter: "R",
      title: "Research",
      description: "Driving cutting-edge research and development in key sectors to solve local challenges and create new opportunities.",
      goals: ["Support 100+ research projects", "Establish R&D centers", "Publish 200+ research papers"],
      outcomes: ["Evidence-based policies", "Technology innovations", "Academic excellence"],
      pillars: ["Innovation", "Education"],
    },
    {
      letter: "I",
      title: "Innovation",
      description: "Fostering a culture of innovation across all sectors through technology, creativity, and forward-thinking solutions.",
      goals: ["Launch 200+ startups", "Establish innovation hubs", "Create digital transformation programs"],
      outcomes: ["Economic growth", "Job creation", "Competitive advantage"],
      pillars: ["Innovation", "Entrepreneurship"],
    },
    {
      letter: "M",
      title: "Mentorship",
      description: "Providing guidance and support to entrepreneurs, researchers, and innovators to accelerate their growth and success.",
      goals: ["Train 500+ mentors", "Support 1000+ mentees", "Establish mentorship networks"],
      outcomes: ["Skill development", "Knowledge transfer", "Career advancement"],
      pillars: ["Education", "Entrepreneurship"],
    },
    {
      letter: "E",
      title: "Education",
      description: "Building a skilled workforce through quality education, training programs, and continuous learning opportunities.",
      goals: ["Train 10,000+ professionals", "Establish scholarship programs", "Create digital learning platforms"],
      outcomes: ["Workforce readiness", "Talent retention", "Economic competitiveness"],
      pillars: ["Education", "Research"],
    },
  ];

  const missionCards = [
    {
      letter: "S",
      title: "Strategic",
      description: "Developing comprehensive strategies that align innovation initiatives with provincial development goals and national priorities.",
      objectives: ["Create 5-year strategic plans", "Align with national development agenda", "Establish performance metrics"],
      programs: ["Strategic Planning Workshops", "Policy Development", "Impact Assessment"],
      outcomes: ["Aligned innovation ecosystem", "Measurable impact", "Sustainable growth"],
      activities: ["Strategic Planning Summit", "Policy Forum", "Annual Review"],
      news: ["Strategic Plan 2024-2028 Launched", "New Innovation Policy Approved"],
    },
    {
      letter: "M",
      title: "Modern",
      description: "Leveraging cutting-edge technologies and modern approaches to drive digital transformation and innovation across all sectors.",
      objectives: ["Implement digital infrastructure", "Adopt emerging technologies", "Modernize processes"],
      programs: ["Digital Transformation Initiative", "Tech Adoption Program", "Infrastructure Development"],
      outcomes: ["Digital-ready province", "Tech-enabled services", "Efficient operations"],
      activities: ["Tech Summit", "Digital Skills Training", "Infrastructure Launch"],
      news: ["Digital Infrastructure Rollout Begins", "New Tech Hub Opens"],
    },
    {
      letter: "A",
      title: "Agile",
      description: "Embracing flexibility and rapid response to emerging opportunities and challenges in the innovation landscape.",
      objectives: ["Build adaptive programs", "Enable quick decision-making", "Foster experimentation"],
      programs: ["Agile Innovation Labs", "Rapid Prototyping", "Pilot Programs"],
      outcomes: ["Responsive ecosystem", "Faster innovation cycles", "Risk-taking culture"],
      activities: ["Innovation Sprint", "Pitch Competition", "Demo Day"],
      news: ["Agile Innovation Lab Launches", "Startup Accelerator Announced"],
    },
    {
      letter: "R",
      title: "Resilient",
      description: "Building capacity to withstand challenges and adapt to changing circumstances while maintaining progress toward innovation goals.",
      objectives: ["Strengthen ecosystem resilience", "Build backup systems", "Develop contingency plans"],
      programs: ["Resilience Building", "Risk Management", "Continuity Planning"],
      outcomes: ["Sustainable operations", "Crisis readiness", "Long-term stability"],
      activities: ["Resilience Workshop", "Risk Assessment", "Business Continuity Planning"],
      news: ["Resilience Framework Adopted", "Crisis Response Plan Updated"],
    },
    {
      letter: "T",
      title: "Transformative",
      description: "Creating meaningful and lasting change that elevates Surigao del Norte's position as a leading innovation hub.",
      objectives: ["Drive systemic change", "Create breakthrough innovations", "Elevate provincial profile"],
      programs: ["Transformation Initiatives", "Breakthrough Projects", "Brand Building"],
      outcomes: ["Elevated status", "Breakthrough innovations", "Systemic change"],
      activities: ["Transformation Summit", "Innovation Awards", "Brand Campaign"],
      news: ["Transformation Initiative Launches", "Innovation Awards Ceremony"],
    },
  ];

  const coreValues = [
    {
      value: "S",
      fullValue: "Service",
      icon: "🤝",
      meaning: "Dedication to serving the community and stakeholders with excellence and integrity.",
      application: "Community engagement programs, stakeholder consultations, public service initiatives",
      initiatives: ["Community Outreach", "Stakeholder Forums", "Public Service Days"],
    },
    {
      value: "U",
      fullValue: "Unity",
      icon: "🔗",
      meaning: "Fostering collaboration and teamwork across all sectors and stakeholders.",
      application: "Multi-sector partnerships, collaborative programs, team-building initiatives",
      initiatives: ["Partnership Summits", "Collaboration Workshops", "Team Building"],
    },
    {
      value: "R",
      fullValue: "Resilience",
      icon: "💪",
      meaning: "Building strength and adaptability to overcome challenges and achieve long-term success.",
      application: "Crisis management, adaptive programs, capacity building",
      initiatives: ["Resilience Training", "Crisis Drills", "Capacity Building"],
    },
    {
      value: "I",
      fullValue: "Innovation",
      icon: "💡",
      meaning: "Embracing creativity and forward-thinking solutions to drive progress.",
      application: "Innovation labs, research programs, technology adoption",
      initiatives: ["Innovation Labs", "Research Grants", "Tech Adoption"],
    },
    {
      value: "G",
      fullValue: "Growth",
      icon: "📈",
      meaning: "Commitment to continuous improvement and sustainable development.",
      application: "Skills development, economic growth, sustainable practices",
      initiatives: ["Skills Training", "Economic Programs", "Sustainability Projects"],
    },
    {
      value: "A",
      fullValue: "Accountability",
      icon: "✅",
      meaning: "Taking responsibility for actions and ensuring transparency in all operations.",
      application: "Performance monitoring, reporting systems, ethical standards",
      initiatives: ["Performance Reviews", "Transparency Reports", "Ethics Training"],
    },
    {
      value: "O",
      fullValue: "Opportunity",
      icon: "🌟",
      meaning: "Creating and seizing opportunities for development and advancement.",
      application: "Opportunity identification, program development, investment attraction",
      initiatives: ["Opportunity Scouting", "Program Development", "Investment Promotion"],
    },
    {
      value: "N",
      fullValue: "Nurturing",
      icon: "🌱",
      meaning: "Supporting the growth and development of people, ideas, and communities.",
      application: "Mentorship programs, talent development, community support",
      initiatives: ["Mentorship Programs", "Talent Development", "Community Support"],
    },
    {
      value: "O",
      fullValue: "Optimism",
      icon: "☀️",
      meaning: "Maintaining a positive outlook and confidence in achieving shared goals.",
      application: "Vision communication, success stories, motivational programs",
      initiatives: ["Vision Campaigns", "Success Stories", "Motivation Programs"],
    },
    {
      value: "N",
      fullValue: "Noble",
      icon: "🏆",
      meaning: "Upholding high ethical standards and noble purposes in all endeavors.",
      application: "Ethics programs, recognition systems, values alignment",
      initiatives: ["Ethics Programs", "Recognition Awards", "Values Alignment"],
    },
  ];

  const [selectedGovernancePrinciple, setSelectedGovernancePrinciple] = useState<string | null>(null);

  const governancePrinciples = [
    {
      principle: "L",
      fullPrinciple: "Leadership",
      definition: "Providing visionary and ethical leadership that guides the innovation ecosystem toward sustainable growth.",
      purpose: "To inspire, direct, and coordinate innovation efforts across all sectors.",
      implementation: "Executive council, strategic planning, decision-making frameworks",
      examples: ["Governor's Innovation Council", "Strategic Planning Committee", "Policy Advisory Board"],
      policies: ["Executive Order on Innovation", "Leadership Development Policy", "Decision-Making Framework"],
    },
    {
      principle: "I",
      fullPrinciple: "Integrity",
      definition: "Maintaining the highest standards of honesty, transparency, and ethical conduct in all operations.",
      purpose: "To build trust and credibility with stakeholders and the public.",
      implementation: "Code of ethics, transparency mechanisms, accountability systems",
      examples: ["Ethics Committee", "Transparency Portal", "Annual Accountability Reports"],
      policies: ["Code of Conduct", "Transparency Policy", "Anti-Corruption Measures"],
    },
    {
      principle: "G",
      fullPrinciple: "Good Governance",
      definition: "Ensuring effective, efficient, and inclusive governance structures that support innovation.",
      purpose: "To create an enabling environment for innovation through sound governance practices.",
      implementation: "Institutional frameworks, regulatory systems, stakeholder engagement",
      examples: ["Governance Board", "Regulatory Review Committee", "Stakeholder Assembly"],
      policies: ["Governance Charter", "Regulatory Framework", "Stakeholder Engagement Policy"],
    },
    {
      principle: "O",
      fullPrinciple: "Openness",
      definition: "Promoting open communication, collaboration, and knowledge sharing across the ecosystem.",
      purpose: "To foster transparency and enable collective innovation through open practices.",
      implementation: "Open data initiatives, collaborative platforms, knowledge sharing systems",
      examples: ["Open Data Portal", "Collaboration Platform", "Knowledge Exchange Network"],
      policies: ["Open Data Policy", "Collaboration Guidelines", "Knowledge Sharing Protocol"],
    },
    {
      principle: "N",
      fullPrinciple: "Network",
      definition: "Building and maintaining strong networks of partners, stakeholders, and collaborators.",
      purpose: "To leverage collective resources and expertise for greater impact.",
      implementation: "Partnership programs, network platforms, collaboration mechanisms",
      examples: ["Partner Network", "Collaboration Hub", "Stakeholder Network"],
      policies: ["Partnership Framework", "Network Guidelines", "Collaboration Policy"],
    },
  ];

  return (
    <>
      <AboutNavigation sections={navigationSections} />
      {/* ===== HERO SECTION ===== */}
      <section id="hero" className="relative min-h-[85vh] w-full overflow-hidden px-10 sm:px-12 md:px-14 lg:px-16 bg-white" aria-label="About Hero">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1, x: 0, y: 0 }}
            animate={{
              scale: [1, 1.08, 1],
              x: [0, -15, 0],
              y: [0, -8, 0],
            }}
            transition={{
              duration: 25,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 w-full h-full opacity-30 mix-blend-multiply z-0"
          >
            <Image
              src="/images/hero_aerial_surigao_new.jpg"
              alt="Aerial view of Surigao City"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
          {particlePositions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#500a31]/10"
              initial={{
                x: pos.x,
                y: pos.y,
                scale: 0,
              }}
              animate={{
                scale: [0, 1, 0],
                y: [0, -100, -200],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: pos.duration,
                repeat: Infinity,
                delay: pos.delay,
              }}
            />
          ))}
        </div>

        {/* Gradient Overlay Layer */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none" 
          style={{
            background: "linear-gradient(135deg, rgba(253, 224, 71, 0.3) 0%, rgba(249, 115, 22, 0.15) 25%, rgba(255, 255, 255, 0.7) 60%, rgba(45, 212, 191, 0.25) 100%)"
          }}
        />

        {/* Bottom wave brush mask transition */}
        <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none">
          <svg
            className="w-full h-32 md:h-48"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="aboutWaveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="50%" stopColor="white" stopOpacity="0.7" />
                <stop offset="100%" stopColor="white" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="url(#aboutWaveGradient)"
              opacity="0.9"
            />
            <path
              d="M0,80L48,74.7C96,69,192,59,288,64C384,69,480,91,576,96C672,101,768,91,864,85.3C960,80,1056,80,1152,85.3C1248,91,1344,101,1392,106.7L1440,112L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="url(#aboutWaveGradient)"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* Hero Content */}
        <AnimatedHero className="relative z-20 w-full h-full flex flex-col justify-center pt-20 pb-32">
          <div className="max-w-[1440px] mx-auto w-full">
            <motion.div
              style={{ x }}
              className="max-w-4xl"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="font-extrabold uppercase tracking-[-2px] leading-[0.9] mb-6"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  fontWeight: 700,
                  color: "#500a31",
                }}
              >
                BUILDING THE FUTURE{"\n"}
                OF INNOVATION IN{"\n"}
                SURIGAO DEL NORTE
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="font-normal leading-[1.35] max-w-2xl mb-10"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(16px, 1.8vw, 20px)",
                  color: "#500a31",
                  opacity: 0.8,
                }}
              >
                Discover the story of PRIME SDN — a movement transforming Surigao del Norte into a thriving innovation ecosystem through collaboration, technology, and sustainable development.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  href="#story"
                  variant="maroon"
                  showArrow={true}
                  className="text-base py-3 px-8 rounded-full"
                >
                  Explore PRIME SDN
                </Button>
                <Button
                  href="#vision"
                  variant="outline"
                  showArrow={true}
                  className="text-base py-3 px-8 rounded-full border-2 border-[#500a31] text-[#500a31]"
                >
                  Discover Our Vision
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedHero>
      </section>

      {/* ===== OUR STORY TIMELINE ===== */}
      <section id="story" className="bg-white py-[120px] px-6" aria-label="Our Story">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#500a31",
              }}
            >
              Our Story
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#500a31",
              }}
            >
              FROM VISION TO REALITY
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#500a31]/20 via-[#500a31] to-[#500a31]/20 hidden md:block" />

            {storyMilestones.map((milestone, index) => (
              <StaggerItem key={index} className="relative pl-0 md:pl-20 mb-8 last:mb-0">
                <motion.div
                  onClick={() => setSelectedMilestone(selectedMilestone === index ? null : index)}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-gradient-to-br rounded-2xl border cursor-pointer overflow-hidden transition-all duration-300 ${
                    selectedMilestone === index
                      ? "from-[#500a31]/10 to-[#500a31]/20 border-[#500a31]/30 shadow-xl"
                      : "from-[#500a31]/5 to-[#500a31]/10 border-[#500a31]/10 hover:border-[#500a31]/20"
                  }`}
                >
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="hidden md:flex w-16 h-16 rounded-full bg-[#500a31] items-center justify-center shrink-0">
                        <span className="text-white font-bold text-xl" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                          {milestone.year}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="md:hidden mb-4">
                          <span className="inline-block px-4 py-2 rounded-full bg-[#500a31] text-white font-bold text-sm" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="font-bold text-xl mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                          {milestone.title}
                        </h3>
                        <p className="text-base leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                          {milestone.description}
                        </p>
                      </div>
                      <motion.div
                        animate={{ rotate: selectedMilestone === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-[#500a31]"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {selectedMilestone === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-[#500a31]/20"
                      >
                        <div className="p-8 pt-6">
                          {/* Image */}
                          <div className="mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 h-48 flex items-center justify-center">
                            <span className="text-[#500a31]/30 text-sm">Historical Image</span>
                          </div>

                          {/* Key Achievements */}
                          <h4 className="font-bold text-lg mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                            Key Achievements
                          </h4>
                          <ul className="space-y-2 mb-6">
                            {milestone.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.8 }}>
                                <span className="text-[#500a31] mt-1">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Statistics */}
                          <div className="grid grid-cols-3 gap-4">
                            {Object.entries(milestone.statistics).map(([key, value], i) => (
                              <div key={i} className="text-center p-4 bg-white/50 rounded-xl">
                                <p className="text-2xl font-bold text-[#500a31]" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                                  {value}
                                </p>
                                <p className="text-xs uppercase tracking-wider mt-1" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.6 }}>
                                  {key}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== SDN PRIME 2055 VISION ===== */}
      <section id="vision" className="bg-white py-[120px] px-6" aria-label="SDN PRIME 2055 Vision">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#500a31",
              }}
            >
              Our Future
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl mx-auto"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#500a31",
              }}
            >
              SDN PRIME 2055 VISION
            </motion.h2>
            <motion.p
              className="mt-6 max-w-2xl mx-auto"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(16px, 1.8vw, 20px)",
                color: "#500a31",
                opacity: 0.7,
              }}
            >
              By 2055, Surigao del Norte will be the Philippines' premier innovation province — a thriving ecosystem where technology, sustainability, and community create lasting prosperity.
            </motion.p>
          </AnimatedSection>

          {/* Vision Letter Cards */}
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {visionLetters.map((item, index) => (
              <StaggerItem key={index}>
                <motion.div
                  onClick={() => setSelectedVisionLetter(selectedVisionLetter === item.letter ? null : item.letter)}
                  whileHover={{ y: -8, scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-gradient-to-br rounded-2xl p-8 border cursor-pointer text-center transition-all duration-300 ${
                    selectedVisionLetter === item.letter
                      ? "from-[#500a31] to-[#500a31]/80 border-[#500a31] shadow-2xl"
                      : "from-[#500a31]/5 to-[#500a31]/10 border-[#500a31]/20 hover:border-[#500a31]/40"
                  }`}
                >
                  <motion.div
                    className={`text-6xl font-extrabold mb-4 ${
                      selectedVisionLetter === item.letter ? "text-white" : "text-[#500a31]"
                    }`}
                    style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.letter}
                  </motion.div>
                  <h3 className={`font-bold text-lg mb-2 ${
                    selectedVisionLetter === item.letter ? "text-white" : "text-[#500a31]"
                  }`} style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                    {item.title}
                  </h3>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Vision Letter Detail */}
          <AnimatePresence>
            {selectedVisionLetter && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 rounded-2xl p-8 border border-[#500a31]/20"
              >
                {(() => {
                  const selected = visionLetters.find(v => v.letter === selectedVisionLetter);
                  if (!selected) return null;
                  return (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 rounded-full bg-[#500a31] flex items-center justify-center">
                            <span className="text-white text-3xl font-extrabold" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                              {selected.letter}
                            </span>
                          </div>
                          <h3 className="font-extrabold text-2xl" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                            {selected.title}
                          </h3>
                        </div>
                        <p className="text-lg leading-relaxed mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.8 }}>
                          {selected.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {selected.pillars.map((pillar, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-[#500a31]/20 text-[#500a31] text-sm font-semibold" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                              {pillar}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-bold text-lg mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                            Strategic Goals
                          </h4>
                          <ul className="space-y-2">
                            {selected.goals.map((goal, i) => (
                              <li key={i} className="flex items-start gap-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.8 }}>
                                <span className="text-[#500a31] mt-1">✓</span>
                                <span>{goal}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                            Expected Outcomes
                          </h4>
                          <ul className="space-y-2">
                            {selected.outcomes.map((outcome, i) => (
                              <li key={i} className="flex items-start gap-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.8 }}>
                                <span className="text-[#500a31] mt-1">→</span>
                                <span>{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Vision Timeline */}
          <AnimatedSection delay={0.3} className="mt-16">
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#500a31]/20 via-[#500a31] to-[#500a31]/20 hidden md:block" />
              <div className="space-y-8">
                {[
                  { year: "2025", milestone: "Foundation Phase Complete" },
                  { year: "2030", milestone: "Ecosystem Established" },
                  { year: "2040", milestone: "Regional Innovation Hub" },
                  { year: "2055", milestone: "Premier Innovation Province" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className="hidden md:block w-1/2" />
                    <div className="hidden md:flex w-8 h-8 rounded-full bg-[#500a31] items-center justify-center z-10 shrink-0">
                      <span className="text-white text-xs font-bold" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                        {item.year}
                      </span>
                    </div>
                    <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 rounded-xl p-6 border border-[#500a31]/10"
                      >
                        <span className="inline-block px-3 py-1 rounded-full bg-[#500a31]/20 text-[#500a31] text-xs font-bold uppercase tracking-wider mb-2 md:hidden" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                          {item.year}
                        </span>
                        <p className="font-semibold" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                          {item.milestone}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SMART MISSION ===== */}
      <section id="mission" className="bg-white py-[120px] px-6" aria-label="SMART Mission">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#500a31",
              }}
            >
              Our Approach
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl mx-auto"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#500a31",
              }}
            >
              SMART MISSION
            </motion.h2>
            <motion.p
              className="mt-6 max-w-2xl mx-auto"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(16px, 1.8vw, 20px)",
                color: "#500a31",
                opacity: 0.7,
              }}
            >
              Our SMART mission guides every initiative — Strategic, Modern, Agile, Resilient, and Transformative approaches to innovation.
            </motion.p>
          </AnimatedSection>

          {/* Mission Cards */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {missionCards.map((item, index) => (
              <StaggerItem key={index}>
                <motion.div
                  onClick={() => setSelectedMissionCard(selectedMissionCard === item.letter ? null : item.letter)}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-gradient-to-br rounded-2xl p-6 border cursor-pointer text-center transition-all duration-300 ${
                    selectedMissionCard === item.letter
                      ? "from-[#500a31] to-[#500a31]/80 border-[#500a31] shadow-2xl"
                      : "from-[#500a31]/5 to-[#500a31]/10 border-[#500a31]/20 hover:border-[#500a31]/40"
                  }`}
                >
                  <motion.div
                    className={`text-5xl font-extrabold mb-3 ${
                      selectedMissionCard === item.letter ? "text-white" : "text-[#500a31]"
                    }`}
                    style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
                    whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.letter}
                  </motion.div>
                  <h3 className={`font-bold text-base mb-2 ${
                    selectedMissionCard === item.letter ? "text-white" : "text-[#500a31]"
                  }`} style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                    {item.title}
                  </h3>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Mission Card Detail */}
          <AnimatePresence>
            {selectedMissionCard && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 rounded-2xl p-8 border border-[#500a31]/20"
              >
                {(() => {
                  const selected = missionCards.find(m => m.letter === selectedMissionCard);
                  if (!selected) return null;
                  return (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 rounded-full bg-[#500a31] flex items-center justify-center">
                            <span className="text-white text-3xl font-extrabold" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                              {selected.letter}
                            </span>
                          </div>
                          <h3 className="font-extrabold text-2xl" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                            {selected.title}
                          </h3>
                        </div>
                        <p className="text-lg leading-relaxed mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.8 }}>
                          {selected.description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-bold text-lg mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                              Objectives
                            </h4>
                            <ul className="space-y-2">
                              {selected.objectives.map((objective, i) => (
                                <li key={i} className="flex items-start gap-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.8 }}>
                                  <span className="text-[#500a31] mt-1">✓</span>
                                  <span>{objective}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                              Programs
                            </h4>
                            <ul className="space-y-2">
                              {selected.programs.map((program, i) => (
                                <li key={i} className="flex items-start gap-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.8 }}>
                                  <span className="text-[#500a31] mt-1">→</span>
                                  <span>{program}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-bold text-lg mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                            Expected Outcomes
                          </h4>
                          <ul className="space-y-2">
                            {selected.outcomes.map((outcome, i) => (
                              <li key={i} className="flex items-start gap-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.8 }}>
                                <span className="text-[#500a31] mt-1">★</span>
                                <span>{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-4 bg-white/50 rounded-xl">
                          <h4 className="font-bold text-sm mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                            Related Activities
                          </h4>
                          <ul className="space-y-1">
                            {selected.activities.slice(0, 2).map((activity, i) => (
                              <li key={i} className="text-sm" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                                • {activity}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-4 bg-white/50 rounded-xl">
                          <h4 className="font-bold text-sm mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                            Latest News
                          </h4>
                          <ul className="space-y-1">
                            {selected.news.slice(0, 2).map((newsItem, i) => (
                              <li key={i} className="text-sm" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                                • {newsItem}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ===== SURIGAONON CORE VALUES ===== */}
      <section id="values" className="bg-white py-[120px] px-6" aria-label="SURIGAONON Core Values">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#500a31",
              }}
            >
              Our Foundation
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl mx-auto"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#500a31",
              }}
            >
              SURIGAONON CORE VALUES
            </motion.h2>
            <motion.p
              className="mt-6 max-w-2xl mx-auto"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(16px, 1.8vw, 20px)",
                color: "#500a31",
                opacity: 0.7,
              }}
            >
              The SURIGAONON values guide our actions and decisions, ensuring we remain true to our mission of serving Surigao del Norte.
            </motion.p>
          </AnimatedSection>

          {/* Core Values Grid */}
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {coreValues.map((item, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -12, scale: 1.05, boxShadow: "0 20px 40px rgba(80, 10, 49, 0.2)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 rounded-2xl p-6 border border-[#500a31]/10 hover:border-[#500a31]/30 cursor-pointer group"
                >
                  <div className="text-center">
                    <motion.div
                      className="text-5xl mb-3"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div className="w-12 h-12 rounded-full bg-[#500a31] flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-2xl font-extrabold" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                        {item.value}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                      {item.fullValue}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                      {item.meaning}
                    </p>
                  </div>

                  {/* Hover Detail */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    whileHover={{ opacity: 1, height: "auto" }}
                    className="mt-4 pt-4 border-t border-[#500a31]/10 overflow-hidden"
                  >
                    <p className="text-xs mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.6 }}>
                      <strong>Application:</strong> {item.application}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {item.initiatives.slice(0, 2).map((initiative, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-full bg-[#500a31]/20 text-[#500a31]" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                          {initiative}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== L.I.G.-ON GOVERNANCE PRINCIPLES ===== */}
      <section id="governance" className="bg-white py-[120px] px-6" aria-label="L.I.G.-ON Governance Principles">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#500a31",
              }}
            >
              Our Foundation
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl mx-auto"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#500a31",
              }}
            >
              L.I.G.-ON GOVERNANCE PRINCIPLES
            </motion.h2>
            <motion.p
              className="mt-6 max-w-2xl mx-auto"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(16px, 1.8vw, 20px)",
                color: "#500a31",
                opacity: 0.7,
              }}
            >
              Leadership, Integrity, Good Governance, Openness, and Network — the pillars that guide our governance framework.
            </motion.p>
          </AnimatedSection>

          {/* Governance Principles Diagram */}
          <div className="relative max-w-4xl mx-auto mb-12">
            {/* Central Circle */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#500a31] flex items-center justify-center z-10"
            >
              <div className="text-center">
                <p className="text-white text-2xl font-extrabold" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                  L.I.G.
                </p>
                <p className="text-white text-lg font-extrabold" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                  -ON
                </p>
              </div>
            </motion.div>

            {/* Principle Cards in Circle */}
            <div className="relative w-full h-[400px]">
              {governancePrinciples.map((item, index) => {
                const angle = (index * 72 - 90) * (Math.PI / 180);
                const radius = 180;
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);
                
                return (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => setSelectedGovernancePrinciple(selectedGovernancePrinciple === item.principle ? null : item.principle)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`absolute w-24 h-24 rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 ${
                      selectedGovernancePrinciple === item.principle
                        ? "bg-[#500a31] shadow-2xl"
                        : "bg-gradient-to-br from-[#500a31]/10 to-[#500a31]/20 border-2 border-[#500a31]/30 hover:border-[#500a31]"
                    }`}
                    style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                  >
                    <span className={`text-3xl font-extrabold ${
                      selectedGovernancePrinciple === item.principle ? "text-white" : "text-[#500a31]"
                    }`} style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                      {item.principle}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Governance Principle Detail */}
          <AnimatePresence>
            {selectedGovernancePrinciple && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl mx-auto"
              >
                {(() => {
                  const selected = governancePrinciples.find(g => g.principle === selectedGovernancePrinciple);
                  if (!selected) return null;
                  return (
                    <div className="bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 rounded-2xl p-8 border border-[#500a31]/20">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full bg-[#500a31] flex items-center justify-center">
                          <span className="text-white text-3xl font-extrabold" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                            {selected.principle}
                          </span>
                        </div>
                        <h3 className="font-extrabold text-2xl" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                          {selected.fullPrinciple}
                        </h3>
                      </div>
                      <p className="text-lg leading-relaxed mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.8 }}>
                        {selected.definition}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold text-lg mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                            Purpose
                          </h4>
                          <p className="mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                            {selected.purpose}
                          </p>
                          <h4 className="font-bold text-lg mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                            Implementation
                          </h4>
                          <p style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                            {selected.implementation}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                            Examples
                          </h4>
                          <ul className="space-y-2 mb-4">
                            {selected.examples.map((example, i) => (
                              <li key={i} className="flex items-start gap-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.8 }}>
                                <span className="text-[#500a31] mt-1">•</span>
                                <span>{example}</span>
                              </li>
                            ))}
                          </ul>
                          <h4 className="font-bold text-lg mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                            Related Policies
                          </h4>
                          <ul className="space-y-2">
                            {selected.policies.map((policy, i) => (
                              <li key={i} className="flex items-start gap-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.8 }}>
                                <span className="text-[#500a31] mt-1">→</span>
                                <span>{policy}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ===== PRIME SDN FRAMEWORK ===== */}
      <section id="framework" className="bg-white py-[120px] px-6" aria-label="PRIME SDN Framework">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#500a31",
              }}
            >
              Our Foundation
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl mx-auto"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#500a31",
              }}
            >
              PRIME SDN FRAMEWORK
            </motion.h2>
            <motion.p
              className="mt-6 max-w-2xl mx-auto"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(16px, 1.8vw, 20px)",
                color: "#500a31",
                opacity: 0.7,
              }}
            >
              Explore our interactive framework — the foundation of our innovation ecosystem. Click on any pillar to discover its programs, projects, and impact.
            </motion.p>
          </AnimatedSection>

          <EcosystemFramework />
        </div>
      </section>

      {/* ===== INNOVATION ROADMAP ===== */}
      <section id="roadmap" className="bg-white py-[120px] px-6" aria-label="Innovation Roadmap">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#500a31",
              }}
            >
              Our Journey
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl mx-auto"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#500a31",
              }}
            >
              INNOVATION ROADMAP
            </motion.h2>
            <motion.p
              className="mt-6 max-w-2xl mx-auto"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(16px, 1.8vw, 20px)",
                color: "#500a31",
                opacity: 0.7,
              }}
            >
              Our strategic journey from foundation to becoming the Philippines' premier innovation province.
            </motion.p>
          </AnimatedSection>

          <SSC2040Roadmap />
        </div>
      </section>

      {/* ===== POLICIES & GOVERNANCE ===== */}
      <section id="policies" className="bg-white py-[120px] px-6" aria-label="Policies & Governance">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#500a31",
              }}
            >
              Our Foundation
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#500a31",
              }}
            >
              POLICIES & GOVERNANCE
            </motion.h2>
            <motion.p
              className="mt-4 max-w-2xl"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(16px, 1.8vw, 20px)",
                color: "#500a31",
                opacity: 0.7,
              }}
            >
              Access our comprehensive collection of policies, ordinances, and governance documents that guide our innovation ecosystem.
            </motion.p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Executive Orders",
                description: "Presidential and provincial executive orders supporting innovation initiatives.",
                icon: "📜",
                count: 12,
                lastUpdated: "2024",
              },
              {
                title: "Provincial Ordinances",
                description: "Local legislation creating the legal framework for innovation programs.",
                icon: "⚖️",
                count: 8,
                lastUpdated: "2024",
              },
              {
                title: "Strategic Plans",
                description: "Comprehensive development plans guiding Surigao's transformation.",
                icon: "📊",
                count: 5,
                lastUpdated: "2023",
              },
              {
                title: "Frameworks",
                description: "Technical and operational frameworks for program implementation.",
                icon: "🔧",
                count: 15,
                lastUpdated: "2024",
              },
            ].map((item, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 rounded-2xl p-8 border border-[#500a31]/10 h-full cursor-pointer group"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-xs mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.6 }}>
                    <span>{item.count} documents</span>
                    <span>Updated {item.lastUpdated}</span>
                  </div>
                  <Button
                    href="/governance"
                    variant="outline"
                    showArrow={true}
                    className="text-sm py-2 px-6 rounded-full border-2 border-[#500a31] text-[#500a31] group-hover:bg-[#500a31] group-hover:text-white transition-all duration-300"
                  >
                    View Documents
                  </Button>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Document Search Bar */}
          <AnimatedSection delay={0.3} className="mt-12">
            <div className="bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 rounded-2xl p-8 border border-[#500a31]/10">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-1 w-full">
                  <input
                    type="text"
                    placeholder="Search policies and documents..."
                    className="w-full px-6 py-4 rounded-xl border-2 border-[#500a31]/20 focus:border-[#500a31] outline-none transition-all duration-300"
                    style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
                  />
                </div>
                <Button
                  variant="maroon"
                  showArrow={true}
                  className="text-base py-4 px-8 rounded-full"
                >
                  Search
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== STRATEGIC GOALS ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Strategic Goals">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#500a31",
              }}
            >
              Our Focus
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl mx-auto"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#500a31",
              }}
            >
              STRATEGIC GOALS
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Innovation", description: "Foster a culture of innovation across all sectors." },
              { title: "Research", description: "Support cutting-edge research and development." },
              { title: "Education", description: "Build a skilled workforce for the digital economy." },
              { title: "Startups", description: "Nurture and scale local technology startups." },
              { title: "Investment", description: "Attract strategic investments to the province." },
              { title: "Communities", description: "Empower communities through digital transformation." },
            ].map((goal, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(80, 10, 49, 0.2)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#500a31] rounded-2xl p-8 text-center h-full"
                >
                  <h3 className="font-bold text-xl mb-3 text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                    {goal.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/80" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                    {goal.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== ORGANIZATIONAL STRUCTURE ===== */}
      <section id="organization" className="bg-white py-[120px] px-6" aria-label="Organization">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#500a31",
              }}
            >
              Our Team
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#500a31",
              }}
            >
              ORGANIZATIONAL STRUCTURE
            </motion.h2>
            <motion.p
              className="mt-4 max-w-2xl"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(16px, 1.8vw, 20px)",
                color: "#500a31",
                opacity: 0.7,
              }}
            >
              Our organizational structure ensures effective governance, coordination, and implementation of innovation initiatives across all levels.
            </motion.p>
          </AnimatedSection>

          <div className="flex flex-col items-center gap-6 max-w-3xl mx-auto">
            {[
              { title: "Governor", level: "Leadership", description: "Chief Executive and overall strategic direction", icon: "👑" },
              { title: "PRIME SDN Council", level: "Executive", description: "Policy-making and strategic oversight body", icon: "🏛️" },
              { title: "Technical Committees", level: "Operations", description: "Expert advisory groups for each pillar", icon: "🔬" },
              { title: "Working Groups", level: "Implementation", description: "Task forces for specific programs and projects", icon: "⚙️" },
              { title: "Partner Organizations", level: "Collaboration", description: "Government, academia, industry, and community partners", icon: "🤝" },
            ].map((org, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02, boxShadow: "0 20px 40px rgba(80, 10, 49, 0.15)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 rounded-2xl p-8 border border-[#500a31]/10 w-full text-center cursor-pointer group"
                >
                  <div className="text-4xl mb-4">{org.icon}</div>
                  <span className="inline-block px-4 py-2 rounded-full bg-[#500a31]/20 text-[#500a31] text-xs font-bold uppercase tracking-wider mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                    {org.level}
                  </span>
                  <h3 className="font-bold text-xl mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                    {org.title}
                  </h3>
                  <p className="text-sm" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                    {org.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STRATEGIC PARTNERS ===== */}
      <section id="partners" className="bg-white py-[120px] px-6" aria-label="Strategic Partners">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#500a31",
              }}
            >
              Our Network
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl mx-auto"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#500a31",
              }}
            >
              STRATEGIC PARTNERS
            </motion.h2>
            <motion.p
              className="mt-6 max-w-2xl mx-auto"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(16px, 1.8vw, 20px)",
                color: "#500a31",
                opacity: 0.7,
              }}
            >
              Our success is built on strong partnerships across government, academia, industry, and community organizations.
            </motion.p>
          </AnimatedSection>

          {/* Partner Categories */}
          <div className="space-y-12">
            {[
              {
                category: "Government Partners",
                description: "National and local government agencies supporting innovation initiatives",
                partners: [
                  { name: "Department of Science and Technology", type: "National Agency" },
                  { name: "Department of Trade and Industry", type: "National Agency" },
                  { name: "Provincial Government of Surigao del Norte", type: "Local Government" },
                  { name: "Surigao City Government", type: "Local Government" },
                ],
                icon: "🏛️",
              },
              {
                category: "Academic Partners",
                description: "Universities and research institutions driving knowledge creation",
                partners: [
                  { name: "Surigao del Norte State University", type: "State University" },
                  { name: "Caraga State University", type: "State University" },
                  { name: "Saint Paul University Surigao", type: "Private University" },
                  { name: "Surigao Education Center", type: "College" },
                ],
                icon: "🎓",
              },
              {
                category: "Industry Partners",
                description: "Private sector companies driving innovation and economic growth",
                partners: [
                  { name: "TechStart Philippines", type: "Technology" },
                  { name: "Surigao Mining Corporation", type: "Mining" },
                  { name: "Philippine Chamber of Commerce", type: "Business Association" },
                  { name: "Local SME Alliance", type: "Business Association" },
                ],
                icon: "💼",
              },
              {
                category: "Community Partners",
                description: "Civil society organizations and community groups",
                partners: [
                  { name: "Surigao Youth Council", type: "Youth Organization" },
                  { name: "Women's Business Network", type: "Women's Organization" },
                  { name: "Environmental Advocacy Group", type: "NGO" },
                  { name: "Farmers Cooperative", type: "Cooperative" },
                ],
                icon: "🌍",
              },
            ].map((category, catIndex) => (
              <AnimatedSection key={catIndex} delay={catIndex * 0.1}>
                <div className="bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 rounded-2xl p-8 border border-[#500a31]/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{category.icon}</div>
                    <div>
                      <h3 className="font-extrabold text-xl" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                        {category.category}
                      </h3>
                      <p className="text-sm" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.partners.map((partner, pIndex) => (
                      <motion.div
                        key={pIndex}
                        whileHover={{ y: -4, scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white/50 rounded-xl p-4 text-center cursor-pointer"
                      >
                        <p className="font-semibold text-sm mb-1" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                          {partner.name}
                        </p>
                        <p className="text-xs" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.6 }}>
                          {partner.type}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Become a Partner CTA */}
          <AnimatedSection delay={0.4} className="mt-12">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#500a31] rounded-2xl p-8 text-center"
            >
              <h3 className="font-extrabold text-2xl mb-4 text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                Become a Strategic Partner
              </h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                Join our growing network of partners and contribute to Surigao del Norte's innovation ecosystem.
              </p>
              <Button
                href="/contact"
                variant="white"
                showArrow={true}
                className="text-base py-3 px-8 rounded-full"
              >
                Partner With Us
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== DOWNLOADS & RESOURCES ===== */}
      <section id="resources" className="bg-white py-[120px] px-6" aria-label="Downloads & Resources">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#500a31",
              }}
            >
              Our Library
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl mx-auto"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#500a31",
              }}
            >
              DOWNLOADS & RESOURCES
            </motion.h2>
            <motion.p
              className="mt-6 max-w-2xl mx-auto"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(16px, 1.8vw, 20px)",
                color: "#500a31",
                opacity: 0.7,
              }}
            >
              Access our digital library of reports, guides, presentations, and multimedia resources.
            </motion.p>
          </AnimatedSection>

          {/* Resource Categories */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                category: "Reports & Publications",
                description: "Annual reports, research papers, and publications",
                icon: "📄",
                count: 25,
                color: "from-blue-500/10 to-blue-500/20",
              },
              {
                category: "Presentations",
                description: "Slide decks and presentation materials",
                icon: "📊",
                count: 18,
                color: "from-green-500/10 to-green-500/20",
              },
              {
                category: "Guides & Toolkits",
                description: "Practical guides and implementation toolkits",
                icon: "📚",
                count: 12,
                color: "from-purple-500/10 to-purple-500/20",
              },
              {
                category: "Videos & Multimedia",
                description: "Recordings, tutorials, and promotional content",
                icon: "🎬",
                count: 30,
                color: "from-red-500/10 to-red-500/20",
              },
              {
                category: "Templates & Forms",
                description: "Downloadable templates and application forms",
                icon: "📝",
                count: 15,
                color: "from-yellow-500/10 to-yellow-500/20",
              },
              {
                category: "Data & Statistics",
                description: "Datasets, statistics, and analytical reports",
                icon: "📈",
                count: 8,
                color: "from-teal-500/10 to-teal-500/20",
              },
            ].map((resource, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-gradient-to-br ${resource.color} rounded-2xl p-8 border border-[#500a31]/10 h-full cursor-pointer group`}
                >
                  <div className="text-4xl mb-4">{resource.icon}</div>
                  <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                    {resource.category}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.6 }}>
                      {resource.count} resources
                    </span>
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="text-[#500a31]"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Featured Downloads */}
          <AnimatedSection delay={0.3} className="mt-12">
            <h3 className="font-extrabold text-xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
              Featured Downloads
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "PRIME SDN Annual Report 2024", type: "PDF", size: "5.2 MB", date: "2024" },
                { title: "Innovation Framework Guide", type: "PDF", size: "3.8 MB", date: "2024" },
                { title: "Strategic Plan 2024-2028", type: "PDF", size: "4.1 MB", date: "2024" },
                { title: "Startup Toolkit", type: "ZIP", size: "12.5 MB", date: "2023" },
              ].map((download, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 4 }}
                  className="bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 rounded-xl p-6 border border-[#500a31]/10 flex items-center justify-between cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#500a31]/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#500a31]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                        {download.title}
                      </p>
                      <p className="text-xs" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.6 }}>
                        {download.type} • {download.size} • {download.date}
                      </p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-[#500a31] opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="bg-white py-[120px] px-6" aria-label="FAQ">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#500a31",
              }}
            >
              Common Questions
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl mx-auto"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#500a31",
              }}
            >
              FREQUENTLY ASKED QUESTIONS
            </motion.h2>
            <motion.p
              className="mt-6 max-w-2xl mx-auto"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(16px, 1.8vw, 20px)",
                color: "#500a31",
                opacity: 0.7,
              }}
            >
              Find answers to common questions about PRIME SDN and our innovation initiatives.
            </motion.p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "What is PRIME SDN?",
                answer: "PRIME SDN (Surigao del Norte Innovation Ecosystem) is a public-private partnership initiative established to drive innovation, economic growth, and sustainable development in Surigao del Norte through collaboration between government, academia, industry, and communities.",
              },
              {
                question: "How can I get involved with PRIME SDN?",
                answer: "There are several ways to get involved: participate in our programs and activities, partner with us as an organization, volunteer for initiatives, or join our startup accelerator. Visit our Activities page or contact us for more information.",
              },
              {
                question: "What programs does PRIME SDN offer?",
                answer: "We offer programs across six pillars: Education, Research, Innovation, Entrepreneurship, Sustainability, Collaboration, Infrastructure, and Governance. These include startup support, research grants, skills training, mentorship programs, and community engagement initiatives.",
              },
              {
                question: "Who can benefit from PRIME SDN initiatives?",
                answer: "Our initiatives benefit a wide range of stakeholders: students and researchers, entrepreneurs and startups, local businesses, government agencies, academic institutions, and community organizations across Surigao del Norte.",
              },
              {
                question: "How is PRIME SDN funded?",
                answer: "PRIME SDN is funded through a combination of government support, private sector partnerships, grants, and program revenues. We maintain transparency in our financial operations through regular reporting and accountability measures.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 rounded-2xl border border-[#500a31]/10 overflow-hidden"
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-semibold" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                      {faq.question}
                    </span>
                    <svg className="w-5 h-5 text-[#500a31] group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.8 }}>
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section id="cta" className="bg-white py-[120px] px-6" aria-label="Call to Action">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="leading-relaxed mb-12 max-w-5xl mx-auto font-extrabold uppercase tracking-tight"
              style={{ color: "#500a31", opacity: 0.8, fontFamily: "Montserrat, Arial, sans-serif", fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 700 }}
            >
              JOIN THE MOVEMENT
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-xl mb-12 leading-relaxed"
              style={{ color: "#500a31", fontFamily: "Montserrat, Arial, sans-serif" }}
            >
              Help Shape the Future of Surigao del Norte
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center max-w-2xl mx-auto"
            >
              <motion.a
                href="/activities"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex-1 text-center py-4 px-10 rounded-full bg-[#500a31] text-white font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-[#500a31] flex items-center justify-center gap-2"
                style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
              >
                Explore Activities
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <motion.a
                href="/contact"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex-1 text-center py-4 px-10 rounded-full bg-white text-[#500a31] font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#500a31] flex items-center justify-center gap-2"
                style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
              >
                Connect With PRIME SDN
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="mt-12 flex justify-center gap-6"
            >
              {[
                { name: "Facebook", icon: "📘" },
                { name: "Twitter", icon: "🐦" },
                { name: "LinkedIn", icon: "💼" },
                { name: "Instagram", icon: "📷" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#500a31]/10 to-[#500a31]/20 border border-[#500a31]/20 flex items-center justify-center text-2xl cursor-pointer transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
