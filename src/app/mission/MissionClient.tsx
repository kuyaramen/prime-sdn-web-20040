"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, AnimatedHero, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";

export function MissionClient() {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();
  const scrollX = useTransform(scrollY, [0, 500], [0, 50]);

  const x = prefersReduced ? 0 : scrollX;

  const smartActions = [
    {
      letter: "S",
      word: "Strengthening",
      title: "Strengthening Innovation Infrastructure",
      description: "Build and upgrade physical and digital infrastructure that supports innovation activities across the province, including co-working spaces, innovation hubs, research facilities, and digital connectivity.",
      objectives: [
        "Establish innovation hubs in key municipalities",
        "Upgrade digital infrastructure for seamless connectivity",
        "Create shared facilities for startups and researchers",
        "Develop technology parks and incubation centers"
      ],
      programs: [
        "Innovation Hub Development Program",
        "Digital Infrastructure Upgrade Initiative",
        "Shared Facilities Network",
        "Technology Park Establishment"
      ],
      outcomes: [
        "Increased access to innovation resources",
        "Improved digital connectivity across municipalities",
        "Reduced operational costs for startups",
        "Enhanced collaboration opportunities"
      ]
    },
    {
      letter: "M",
      word: "Mobilizing",
      title: "Mobilizing Resources and Partnerships",
      description: "Leverage public and private resources, forge strategic partnerships, and attract investments to fuel innovation initiatives and create sustainable funding mechanisms.",
      objectives: [
        "Establish investment promotion mechanisms",
        "Build partnerships with academic institutions",
        "Engage private sector in innovation initiatives",
        "Create funding pools for innovation projects"
      ],
      programs: [
        "Investment Promotion and Facilitation",
        "Academe-Industry Partnership Program",
        "Private Sector Engagement Initiative",
        "Innovation Fund Establishment"
      ],
      outcomes: [
        "Increased investment inflows",
        "Stronger collaboration networks",
        "Sustainable funding for innovation",
        "Enhanced resource mobilization capacity"
      ]
    },
    {
      letter: "A",
      word: "Advancing",
      title: "Advancing Research and Development",
      description: "Promote research and development activities that address local challenges, create new knowledge, and drive technological innovation relevant to Surigao del Norte's context.",
      objectives: [
        "Support applied research in priority sectors",
        "Strengthen research capacity in local institutions",
        "Facilitate technology transfer and commercialization",
        "Promote innovation in traditional industries"
      ],
      programs: [
        "Applied Research Grant Program",
        "Research Capacity Building Initiative",
        "Technology Transfer and Commercialization",
        "Industry Innovation Support"
      ],
      outcomes: [
        "Increased research output and publications",
        "Enhanced research capabilities",
        "More technologies commercialized",
        "Modernized traditional industries"
      ]
    },
    {
      letter: "R",
      word: "Reinforcing",
      title: "Reinforcing Human Capital Development",
      description: "Develop and retain talent through education, training, and capacity-building programs that equip Surigaonons with the skills needed for the innovation economy.",
      objectives: [
        "Enhance STEM education at all levels",
        "Provide skills training for innovation jobs",
        "Implement talent retention programs",
        "Build mentorship and coaching networks"
      ],
      programs: [
        "STEM Education Enhancement",
        "Skills Training and Certification",
        "Talent Retention Initiative",
        "Mentorship and Coaching Program"
      ],
      outcomes: [
        "Improved STEM competencies",
        "More skilled workforce available",
        "Reduced brain drain",
        "Stronger mentorship ecosystem"
      ]
    },
    {
      letter: "T",
      word: "Transforming",
      title: "Transforming Governance and Communities",
      description: "Modernize governance systems and empower communities to participate in innovation, ensuring that innovation benefits are inclusive and sustainable across all sectors.",
      objectives: [
        "Digitize government services",
        "Promote citizen participation in innovation",
        "Build smart and sustainable communities",
        "Ensure inclusive innovation outcomes"
      ],
      programs: [
        "Digital Governance Transformation",
        "Citizen Innovation Engagement",
        "Smart Community Development",
        "Inclusive Innovation Initiative"
      ],
      outcomes: [
        "More efficient government services",
        "Increased citizen engagement",
        "Sustainable community development",
        "Equitable distribution of innovation benefits"
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
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg border border-gray-200 hover:border-[#500a31] transition-all"
            style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm font-medium" style={{ color: "#500a31" }}>Back</span>
          </motion.button>
        </Link>
      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[70vh] w-full overflow-hidden px-10 sm:px-12 md:px-14 lg:px-16 bg-white" aria-label="Mission Hero">
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
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
              alt="Mission Background"
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
              <linearGradient id="missionWaveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="50%" stopColor="white" stopOpacity="0.7" />
                <stop offset="100%" stopColor="white" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="url(#missionWaveGradient)"
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
                  color: "#500a31",
                }}
              >
                MISSION
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
                  color: "#500a31",
                }}
              >
                S.M.A.R.T. ACTIONS FOR{"\n"}
                INNOVATION EXCELLENCE
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="font-normal leading-[1.25] max-w-2xl mb-10"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(16px, 1.8vw, 20px)",
                  color: "#500a31",
                  opacity: 0.8,
                }}
              >
                Our SMART mission guides every initiative, ensuring strategic, measurable, achievable, relevant, and time-bound actions that drive meaningful innovation across Surigao del Norte.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  href="#overview"
                  variant="maroon"
                  showArrow={true}
                  className="text-base py-3 px-8 rounded-full"
                >
                  Explore Mission
                </Button>
                <Button
                  href="#actions"
                  variant="outline"
                  showArrow={true}
                  className="text-base py-3 px-8 rounded-full border-2 border-[#500a31] text-[#500a31]"
                >
                  View SMART Actions
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedHero>
      </section>

      {/* ===== MISSION OVERVIEW ===== */}
      <section id="overview" className="bg-white py-[100px] px-6" aria-label="Mission Overview">
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
              Overview
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
              OUR MISSION
            </motion.h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <motion.div
              className="bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 rounded-2xl p-8 md:p-12 border border-[#500a31]/10"
            >
              <p className="text-base leading-relaxed mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.8 }}>
                PRIME SDN is committed to building a thriving innovation ecosystem in Surigao del Norte through strategic, collaborative, and inclusive approaches. Our mission is to empower communities, nurture talent, attract investments, and create sustainable pathways for economic and social development through innovation.
              </p>
              <p className="text-base leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.8 }}>
                By focusing on five key SMART actions, we ensure that every initiative is purposeful, measurable, and aligned with the long-term vision of transforming Surigao del Norte into a leading innovation hub in the Philippines.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SMART ACTIONS ===== */}
      <section id="actions" className="bg-white py-[100px] px-6" aria-label="SMART Actions">
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
              Framework
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
              FIVE SMART ACTIONS
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="space-y-12">
            {smartActions.map((action, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(80, 10, 49, 0.15)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-[0_8px 24px rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-[#500a31] to-[#500a31]/80 p-6 md:p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0">
                        <span className="font-extrabold text-3xl" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                          {action.letter}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-white/80 mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                          {action.word}
                        </div>
                        <h3 className="font-bold text-xl md:text-2xl text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                          {action.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <p className="text-base leading-relaxed mb-8" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.8 }}>
                      {action.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Objectives */}
                      <div>
                        <h4 className="font-bold text-sm mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                          OBJECTIVES
                        </h4>
                        <ul className="space-y-2">
                          {action.objectives.map((objective, i) => (
                            <li key={i} className="text-sm leading-relaxed flex items-start gap-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                              <span className="text-[#500a31] mt-1">•</span>
                              <span>{objective}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Programs */}
                      <div>
                        <h4 className="font-bold text-sm mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                          PROGRAMS
                        </h4>
                        <ul className="space-y-2">
                          {action.programs.map((program, i) => (
                            <li key={i} className="text-sm leading-relaxed flex items-start gap-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                              <span className="text-[#500a31] mt-1">•</span>
                              <span>{program}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Outcomes */}
                      <div>
                        <h4 className="font-bold text-sm mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                          EXPECTED OUTCOMES
                        </h4>
                        <ul className="space-y-2">
                          {action.outcomes.map((outcome, i) => (
                            <li key={i} className="text-sm leading-relaxed flex items-start gap-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                              <span className="text-[#500a31] mt-1">•</span>
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
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
      <section className="bg-white py-[100px] px-6" aria-label="Related Topics">
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
              Explore More
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
              RELATED TOPICS
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Our Vision", description: "Surigao del Norte: A thriving innovation ecosystem by 2040", href: "/vision" },
              { title: "Core Values", description: "SURIGAONON values that guide us", href: "/core-values" },
              { title: "Governance", description: "L.I.G.-ON principles for transparency", href: "/governance" },
              { title: "Roadmap", description: "Journey to 2040 innovation hub", href: "/roadmap" },
              { title: "Startups", description: "Building Surigao's innovation ecosystem", href: "/startups" },
              { title: "About PRIME SDN", description: "Learn about our framework", href: "/about" }
            ].map((topic, index) => (
              <StaggerItem key={index}>
                <Link href={topic.href}>
                  <motion.div
                    whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(80, 10, 49, 0.15)" }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 rounded-2xl p-8 border border-[#500a31]/10 h-full"
                  >
                    <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                      {topic.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
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
      <section className="bg-white py-[100px] px-6" aria-label="Call to Action">
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
              JOIN US IN BUILDING SURIGAO'S INNOVATION FUTURE
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
                className="flex-1 text-center py-4 px-10 rounded-full bg-[#500a31] text-white font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-[#500a31] flex items-center justify-center gap-2"
                style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
              >
                Get Involved
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
                className="flex-1 text-center py-4 px-10 rounded-full bg-white text-[#500a31] font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#500a31] flex items-center justify-center gap-2"
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
