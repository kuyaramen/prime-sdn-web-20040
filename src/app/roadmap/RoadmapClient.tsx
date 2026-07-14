"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, AnimatedHero, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";

export function RoadmapClient() {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();
  const scrollX = useTransform(scrollY, [0, 500], [0, 50]);

  const x = prefersReduced ? 0 : scrollX;

  const roadmapMilestones = [
    {
      year: "2025",
      title: "Ecosystem Foundation",
      description: "Consolidating regional networks and laying down policy foundations to spark Surigao's digital transformation.",
      goals: [
        "Establish PRIME SDN governance structure",
        "Launch local startup incubators",
        "Sign key bilateral agreements",
        "Formulate structural frameworks"
      ],
      projects: [
        { name: "PRIME SDN Secretariat Establishment", status: "Completed", date: "Q1 2025" },
        { name: "Startup Incubation Center Launch", status: "In Progress", date: "Q3 2025" },
        { name: "Academia-Industry Partnership MOUs", status: "Completed", date: "Q2 2025" },
        { name: "Digital Infrastructure Assessment", status: "In Progress", date: "Q4 2025" }
      ],
      timeline: [
        { quarter: "Q1 2025", milestone: "Governance structure established" },
        { quarter: "Q2 2025", milestone: "Partnership agreements signed" },
        { quarter: "Q3 2025", milestone: "Incubation centers launched" },
        { quarter: "Q4 2025", milestone: "Digital infrastructure assessment completed" }
      ],
      deliverables: [
        "Provincial Innovation Council operational",
        "3 municipal innovation hubs established",
        "15 partnership agreements executed",
        "Digital infrastructure baseline report"
      ]
    },
    {
      year: "2027",
      title: "Digital & Enterprise Integration",
      description: "Integrating smart technologies into local governance, fisheries, and agricultural sectors.",
      goals: [
        "Deploy IoT solutions in key sectors",
        "Adopt cloud computing in government",
        "Incubate home-grown tech startups",
        "Automate government workflows"
      ],
      projects: [
        { name: "Smart Governance Platform", status: "Planned", date: "Q1 2026" },
        { name: "Fisheries IoT Monitoring System", status: "Planned", date: "Q2 2026" },
        { name: "Agricultural Tech Integration", status: "Planned", date: "Q3 2026" },
        { name: "Startup Accelerator Program", status: "Planned", date: "Q4 2026" }
      ],
      timeline: [
        { quarter: "Q1 2026", milestone: "Smart governance platform deployment" },
        { quarter: "Q2 2026", milestone: "IoT systems in fisheries sector" },
        { quarter: "Q3 2026", milestone: "Agricultural tech integration" },
        { quarter: "Q4 2026", milestone: "Startup accelerator cohort launch" }
      ],
      deliverables: [
        "5 smart governance modules deployed",
        "IoT monitoring in 10 fishing communities",
        "Agricultural tech in 5 municipalities",
        "20 startups accelerated"
      ]
    },
    {
      year: "2030",
      title: "Creative & Talent Clusters",
      description: "Establishing specialized high-tech education centers and creative labs.",
      goals: [
        "Build high-tech education centers",
        "Establish creative labs",
        "Develop specialized training programs",
        "Create AI and robotics curriculum"
      ],
      projects: [
        { name: "SNSU Innovation Center", status: "Planned", date: "2027" },
        { name: "Creative Lab Network", status: "Planned", date: "2028" },
        { name: "AI & Robotics Training Program", status: "Planned", date: "2028" },
        { name: "Digital Media Academy", status: "Planned", date: "2029" }
      ],
      timeline: [
        { quarter: "2027", milestone: "Innovation center construction" },
        { quarter: "2028", milestone: "Creative labs operational" },
        { quarter: "2028", milestone: "AI curriculum launched" },
        { quarter: "2029", milestone: "Digital media academy established" }
      ],
      deliverables: [
        "2 innovation centers constructed",
        "5 creative labs operational",
        "AI curriculum in 3 institutions",
        "500 students trained annually"
      ]
    },
    {
      year: "2033",
      title: "Infrastructure & Smart Communities",
      description: "Launching smart city infrastructure across Surigao City and critical municipal clusters.",
      goals: [
        "Deploy fiber networks",
        "Install clean energy microgrids",
        "Implement disaster risk systems",
        "Develop smart city platforms"
      ],
      projects: [
        { name: "Fiber Network Deployment", status: "Planned", date: "2030" },
        { name: "Clean Energy Microgrids", status: "Planned", date: "2031" },
        { name: "Disaster Risk Management System", status: "Planned", date: "2031" },
        { name: "Smart City Platform", status: "Planned", date: "2032" }
      ],
      timeline: [
        { quarter: "2030", milestone: "Fiber network in Surigao City" },
        { quarter: "2031", milestone: "Microgrids in 5 municipalities" },
        { quarter: "2031", milestone: "Disaster system operational" },
        { quarter: "2032", milestone: "Smart city platform integrated" }
      ],
      deliverables: [
        "100% fiber coverage in Surigao City",
        "5 microgrids operational",
        "Province-wide disaster system",
        "Integrated smart city platform"
      ]
    },
    {
      year: "2040",
      title: "Global Innovation Hub",
      description: "Surigao del Norte stands as a premier self-sustaining global innovation hub in the Philippines.",
      goals: [
        "Achieve thriving digital economy",
        "Enable borderless talent workflows",
        "Implement zero-carbon grids",
        "Integrate global tech corridors"
      ],
      projects: [
        { name: "Digital Economy Ecosystem", status: "Vision", date: "2040" },
        { name: "Talent Mobility Platform", status: "Vision", date: "2040" },
        { name: "Zero-Carbon Municipal Grids", status: "Vision", date: "2040" },
        { name: "Global Tech Corridor Integration", status: "Vision", date: "2040" }
      ],
      timeline: [
        { quarter: "2035", milestone: "Digital economy foundation" },
        { quarter: "2037", milestone: "Talent mobility framework" },
        { quarter: "2038", milestone: "Zero-carbon grid transition" },
        { quarter: "2040", milestone: "Global hub realization" }
      ],
      deliverables: [
        "500+ digital economy businesses",
        "Borderless talent system operational",
        "100% renewable municipal grids",
        "5 global tech corridor partnerships"
      ]
    }
  ];

  return (
    <>
      {/* ===== BACK BUTTON ===== */}
      <div className="fixed top-24 left-6 z-50">
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05, x: -4 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg border border-gray-200 hover:border-[#1E4FBF] transition-all"
            style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm font-medium" style={{ color: "#1E4FBF" }}>Back</span>
          </motion.button>
        </Link>
      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[70vh] w-full overflow-hidden px-10 sm:px-12 md:px-14 lg:px-16 bg-white" aria-label="Roadmap Hero">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1, x: 0, y: 0 }}
            animate={{
              scale: [1, 1.05, 1],
              x: [0, -10, 0],
              y: [0, -5, 0],
            }}
            transition={{
              duration: 20,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 w-full h-full opacity-25 mix-blend-multiply z-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"
              alt="Roadmap Background"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Gradient Overlay Layer */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none" 
          style={{
            background: "linear-gradient(135deg, rgba(80, 10, 49, 0.15) 0%, rgba(80, 10, 49, 0.05) 50%, rgba(255, 255, 255, 0.8) 100%)"
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
              <linearGradient id="roadmapWaveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="50%" stopColor="white" stopOpacity="0.7" />
                <stop offset="100%" stopColor="white" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="url(#roadmapWaveGradient)"
              opacity="0.9"
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
                  fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif",
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  fontWeight: 700,
                  color: "#1E4FBF",
                }}
              >
                ROADMAP
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="font-extrabold uppercase tracking-[-2px] leading-[0.88] mb-8"
                style={{
                  fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif",
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                  color: "#1E4FBF",
                }}
              >
                JOURNEY TO 2040
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="font-normal leading-[1.25] max-w-2xl mb-10"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(16px, 1.8vw, 20px)",
                  color: "#1E4FBF",
                  opacity: 0.8,
                }}
              >
                Our strategic roadmap outlines the journey from ecosystem foundation to becoming a premier global innovation hub by 2040, with clear milestones, projects, and deliverables.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  href="#overview"
                  variant="primary"
                  showArrow={true}
                  className="text-base py-3 px-8 rounded-full"
                >
                  Explore Roadmap
                </Button>
                <Button
                  href="#milestones"
                  variant="outline"
                  showArrow={true}
                  className="text-base py-3 px-8 rounded-full border-2 border-[#1E4FBF] text-[#1E4FBF]"
                >
                  View Milestones
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedHero>
      </section>

      {/* ===== OVERVIEW ===== */}
      <section id="overview" className="bg-white py-20 px-6" aria-label="Roadmap Overview">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#1E4FBF",
              }}
            >
              Overview
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#1E4FBF",
              }}
            >
              STRATEGIC JOURNEY
            </motion.h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <motion.div
              className="bg-gradient-to-br from-[#1E4FBF]/5 to-[#1E4FBF]/10 rounded-2xl p-8 md:p-12 border border-[#1E4FBF]/10"
            >
              <p className="text-base leading-relaxed mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1E4FBF", opacity: 0.8 }}>
                The PRIME SDN roadmap is a comprehensive 15-year strategic plan that transforms Surigao del Norte from an emerging innovation ecosystem into a premier global innovation hub. Each phase builds upon the previous one, creating cumulative impact and sustainable progress.
              </p>
              <p className="text-base leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1E4FBF", opacity: 0.8 }}>
                The journey is divided into five strategic phases, each with specific goals, projects, timelines, and deliverables that ensure measurable progress and accountability at every stage.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== MILESTONES ===== */}
      <section id="milestones" className="bg-white py-20 px-6" aria-label="Milestones">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#1E4FBF",
              }}
            >
              Phases
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#1E4FBF",
              }}
            >
              FIVE STRATEGIC PHASES
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="space-y-16">
            {roadmapMilestones.map((milestone, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(80, 10, 49, 0.15)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-[0_8px 24px rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-[#1E4FBF] to-[#1E4FBF]/80 p-6 md:p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shrink-0">
                        <span className="font-extrabold text-3xl" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1E4FBF" }}>
                          {milestone.year}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl md:text-2xl text-white mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                          {milestone.title}
                        </h3>
                        <p className="text-sm text-white/80" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Left Column */}
                      <div className="space-y-6">
                        {/* Goals */}
                        <div>
                          <h4 className="font-bold text-sm mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1E4FBF" }}>
                            STRATEGIC GOALS
                          </h4>
                          <ul className="space-y-2">
                            {milestone.goals.map((goal, i) => (
                              <li key={i} className="text-sm leading-relaxed flex items-start gap-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1E4FBF", opacity: 0.7 }}>
                                <span className="text-[#1E4FBF] mt-1">•</span>
                                <span>{goal}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Projects */}
                        <div>
                          <h4 className="font-bold text-sm mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1E4FBF" }}>
                            KEY PROJECTS
                          </h4>
                          <div className="space-y-2">
                            {milestone.projects.map((project, i) => (
                              <div key={i} className="flex items-center justify-between text-sm p-2 bg-[#1E4FBF]/5 rounded">
                                <span style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1E4FBF", opacity: 0.8 }}>
                                  {project.name}
                                </span>
                                <span className="text-xs px-2 py-1 rounded-full" style={{ 
                                  fontFamily: "Montserrat, Arial, sans-serif", 
                                  backgroundColor: project.status === "Completed" ? "#10B98120" : project.status === "In Progress" ? "#F59E0B20" : "#6B728020",
                                  color: project.status === "Completed" ? "#10B981" : project.status === "In Progress" ? "#F59E0B" : "#6B7280"
                                }}>
                                  {project.status}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-6">
                        {/* Timeline */}
                        <div>
                          <h4 className="font-bold text-sm mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1E4FBF" }}>
                            TIMELINE
                          </h4>
                          <div className="space-y-2">
                            {milestone.timeline.map((item, i) => (
                              <div key={i} className="flex items-start gap-3 text-sm">
                                <div className="w-16 shrink-0 font-bold" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1E4FBF" }}>
                                  {item.quarter}
                                </div>
                                <div style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1E4FBF", opacity: 0.7 }}>
                                  {item.milestone}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Deliverables */}
                        <div>
                          <h4 className="font-bold text-sm mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1E4FBF" }}>
                            KEY DELIVERABLES
                          </h4>
                          <ul className="space-y-2">
                            {milestone.deliverables.map((deliverable, i) => (
                              <li key={i} className="text-sm leading-relaxed flex items-start gap-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1E4FBF", opacity: 0.7 }}>
                                <span className="text-[#1E4FBF] mt-1">✓</span>
                                <span>{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== RELATED TOPICS ===== */}
      <section className="bg-white py-20 px-6" aria-label="Related Topics">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#1E4FBF",
              }}
            >
              Explore More
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#1E4FBF",
              }}
            >
              RELATED TOPICS
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Our Vision", description: "Surigao del Norte: A thriving innovation ecosystem by 2040", href: "/vision" },
              { title: "Our Mission", description: "S.M.A.R.T. actions for innovation excellence", href: "/mission" },
              { title: "Core Values", description: "SURIGAONON values that guide us", href: "/core-values" },
              { title: "Governance", description: "L.I.G.-ON principles for transparency", href: "/governance" },
              { title: "Startups", description: "Building Surigao's innovation ecosystem", href: "/startups" },
              { title: "About PRIME SDN", description: "Learn about our framework", href: "/about" }
            ].map((topic, index) => (
              <StaggerItem key={index}>
                <Link href={topic.href}>
                  <motion.div
                    whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(80, 10, 49, 0.15)" }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-br from-[#1E4FBF]/5 to-[#1E4FBF]/10 rounded-2xl p-8 border border-[#1E4FBF]/10 h-full"
                  >
                    <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1E4FBF" }}>
                      {topic.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1E4FBF", opacity: 0.7 }}>
                      {topic.description}
                    </p>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="bg-white py-20 px-6" aria-label="Call to Action">
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
              style={{ color: "#1E4FBF", opacity: 0.8, fontFamily: "Montserrat, Arial, sans-serif", fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 700 }}
            >
              BE PART OF SURIGAO'S INNOVATION JOURNEY
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center max-w-2xl mx-auto"
            >
              <motion.a
                href="/contact"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex-1 text-center py-4 px-10 rounded-full bg-[#1E4FBF] text-white font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-[#1E4FBF] flex items-center justify-center gap-2"
                style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
              >
                Join the Journey
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <motion.a
                href="/vision"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex-1 text-center py-4 px-10 rounded-full bg-white text-[#1E4FBF] font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#1E4FBF] flex items-center justify-center gap-2"
                style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
              >
                View Our Vision
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
