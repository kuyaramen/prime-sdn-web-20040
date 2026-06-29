"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, AnimatedHero, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";

export function GovernanceClient() {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();
  const scrollX = useTransform(scrollY, [0, 500], [0, 50]);

  const x = prefersReduced ? 0 : scrollX;

  const ligonPrinciples = [
    {
      letter: "L",
      word: "Leadership",
      title: "Leadership by Example",
      description: "Public officials and leaders must demonstrate integrity, transparency, and accountability in all their actions. Leadership is not just about authority but about inspiring trust through exemplary conduct.",
      purpose: "To establish a culture of ethical leadership that inspires public confidence and sets the standard for governance excellence across all levels of government.",
      implementation: [
        "Regular ethics training for public officials",
        "Transparent decision-making processes",
        "Public disclosure of assets and interests",
        "Leadership development programs"
      ],
      examples: [
        "Provincial officials leading by example in compliance",
        "Mentorship programs for emerging leaders",
        "Recognition of ethical leadership practices",
        "Community leadership initiatives"
      ],
      relevance: "Essential for building public trust and ensuring that governance decisions are made with integrity and in the best interest of the people."
    },
    {
      letter: "I",
      word: "Integrity",
      title: "Integrity in Governance",
      description: "Upholding the highest standards of honesty, transparency, and accountability in all government operations. Every action must withstand public scrutiny and serve the greater good.",
      purpose: "To create a governance system that is free from corruption, where public resources are managed responsibly and decisions are made transparently.",
      implementation: [
        "Anti-corruption measures and mechanisms",
        "Transparent procurement processes",
        "Regular audit and accountability systems",
        "Whistleblower protection programs"
      ],
      examples: [
        "Open bidding for government contracts",
        "Public financial reporting systems",
        "Citizen oversight committees",
        "Digital transparency platforms"
      ],
      relevance: "Critical for ensuring that public resources are used efficiently and that citizens have confidence in government institutions."
    },
    {
      letter: "G",
      word: "Good Governance",
      title: "Good Governance Practices",
      description: "Implementing principles of effective, efficient, equitable, and inclusive governance that serves all citizens and promotes sustainable development.",
      purpose: "To establish governance systems that are responsive to citizen needs, promote inclusive development, and ensure sustainable progress for all.",
      implementation: [
        "Participatory decision-making processes",
        "Service delivery optimization",
        "Performance-based management systems",
        "Citizen feedback mechanisms"
      ],
      examples: [
        "Community consultation forums",
        "Digital government services",
        "Performance monitoring dashboards",
        "Citizen satisfaction surveys"
      ],
      relevance: "Fundamental for ensuring that government services are accessible, efficient, and responsive to the needs of all Surigaonons."
    },
    {
      letter: "O",
      word: "Openness",
      title: "Openness and Transparency",
      description: "Ensuring that government processes, decisions, and information are accessible to the public. Transparency builds trust and enables citizen participation in governance.",
      purpose: "To foster an environment of openness where citizens can access information, participate in decision-making, and hold government accountable.",
      implementation: [
        "Open data initiatives",
        "Public information portals",
        "Freedom of information implementation",
        "Regular public reporting"
      ],
      examples: [
        "Online government information portal",
        "Public budget disclosures",
        "Open meetings and consultations",
        "Citizen access to government records"
      ],
      relevance: "Essential for democratic governance, enabling citizens to make informed decisions and participate meaningfully in governance processes."
    },
    {
      letter: "N",
      word: "Networking",
      title: "Networking and Collaboration",
      description: "Building strategic partnerships and collaborative networks with various stakeholders to enhance governance capacity and achieve shared goals.",
      purpose: "To leverage collective expertise, resources, and networks through partnerships that strengthen governance and drive development outcomes.",
      implementation: [
        "Multi-stakeholder partnerships",
        "Inter-agency collaboration mechanisms",
        "Public-private partnerships",
        "Community engagement platforms"
      ],
      examples: [
        "Academe-government partnerships",
        "Private sector collaboration programs",
        "Civil society engagement initiatives",
        "International cooperation agreements"
      ],
      relevance: "Crucial for accessing expertise, resources, and best practices that enhance governance effectiveness and innovation."
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
      <section className="relative min-h-[70vh] w-full overflow-hidden px-10 sm:px-12 md:px-14 lg:px-16 bg-white" aria-label="Governance Hero">
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
              alt="Governance Background"
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
              <linearGradient id="governanceWaveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="50%" stopColor="white" stopOpacity="0.7" />
                <stop offset="100%" stopColor="white" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="url(#governanceWaveGradient)"
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
                GOVERNANCE
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
                L.I.G.-ON PRINCIPLES
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
                The L.I.G.-ON governance principles provide the foundation for ethical, transparent, and effective governance in Surigao del Norte, ensuring public trust and sustainable development.
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
                  Explore Principles
                </Button>
                <Button
                  href="#principles"
                  variant="outline"
                  showArrow={true}
                  className="text-base py-3 px-8 rounded-full border-2 border-[#500a31] text-[#500a31]"
                >
                  View L.I.G.-ON
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedHero>
      </section>

      {/* ===== OVERVIEW ===== */}
      <section id="overview" className="bg-white py-[100px] px-6" aria-label="Governance Overview">
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
              GOVERNANCE FRAMEWORK
            </motion.h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <motion.div
              className="bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 rounded-2xl p-8 md:p-12 border border-[#500a31]/10"
            >
              <p className="text-base leading-relaxed mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.8 }}>
                The L.I.G.-ON governance principles represent Surigao del Norte's commitment to ethical, transparent, and effective governance. These principles guide every aspect of public administration, from policy formulation to service delivery, ensuring that government actions always serve the best interests of the people.
              </p>
              <p className="text-base leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.8 }}>
                By adhering to these principles, the province builds public trust, attracts investments, and creates an environment where innovation and development can thrive sustainably.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== L.I.G.-ON PRINCIPLES ===== */}
      <section id="principles" className="bg-white py-[100px] px-6" aria-label="L.I.G.-ON Principles">
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
              Principles
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
              FIVE GOVERNANCE PRINCIPLES
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="space-y-12">
            {ligonPrinciples.map((principle, index) => (
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
                          {principle.letter}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-white/80 mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                          {principle.word}
                        </div>
                        <h3 className="font-bold text-xl md:text-2xl text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                          {principle.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <p className="text-base leading-relaxed mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.8 }}>
                      {principle.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      {/* Purpose */}
                      <div className="bg-[#500a31]/5 rounded-lg p-4">
                        <h4 className="font-bold text-sm mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                          PURPOSE
                        </h4>
                        <p className="text-sm leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                          {principle.purpose}
                        </p>
                      </div>

                      {/* Relevance */}
                      <div className="bg-[#500a31]/5 rounded-lg p-4">
                        <h4 className="font-bold text-sm mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                          PROVINCIAL RELEVANCE
                        </h4>
                        <p className="text-sm leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                          {principle.relevance}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Implementation */}
                      <div>
                        <h4 className="font-bold text-sm mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                          IMPLEMENTATION
                        </h4>
                        <ul className="space-y-2">
                          {principle.implementation.map((item, i) => (
                            <li key={i} className="text-sm leading-relaxed flex items-start gap-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                              <span className="text-[#500a31] mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Examples */}
                      <div>
                        <h4 className="font-bold text-sm mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                          EXAMPLES
                        </h4>
                        <ul className="space-y-2">
                          {principle.examples.map((example, i) => (
                            <li key={i} className="text-sm leading-relaxed flex items-start gap-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                              <span className="text-[#500a31] mt-1">•</span>
                              <span>{example}</span>
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

      {/* ===== GOVERNANCE FLOW ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Governance Flow">
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
              Process
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
              GOVERNANCE FLOW
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: 1, title: "Policy Formulation", description: "Evidence-based policy development" },
              { step: 2, title: "Public Consultation", description: "Stakeholder engagement and feedback" },
              { step: 3, title: "Decision Making", description: "Transparent and accountable processes" },
              { step: 4, title: "Implementation", description: "Efficient service delivery" },
              { step: 5, title: "Monitoring", description: "Performance evaluation and improvement" }
            ].map((step, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 rounded-2xl p-6 border border-[#500a31]/10 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-[#500a31] flex items-center justify-center mx-auto mb-4">
                    <span className="font-extrabold text-xl text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                    {step.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                    {step.description}
                  </p>
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
              { title: "Our Mission", description: "S.M.A.R.T. actions for innovation excellence", href: "/mission" },
              { title: "Core Values", description: "SURIGAONON values that guide us", href: "/core-values" },
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
              SUPPORT TRANSPARENT GOVERNANCE
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
                href="/about"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex-1 text-center py-4 px-10 rounded-full bg-white text-[#500a31] font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#500a31] flex items-center justify-center gap-2"
                style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
              >
                Learn About PRIME SDN
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
