"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, AnimatedHero, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";

export function StartupsClient() {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();
  const scrollX = useTransform(scrollY, [0, 500], [0, 50]);

  const x = prefersReduced ? 0 : scrollX;

  const startupPrograms = [
    {
      title: "Incubation Program",
      description: "Comprehensive support for early-stage startups including mentorship, workspace, and access to funding networks.",
      features: [
        "Co-working space access",
        "Mentorship from industry experts",
        "Business development support",
        "Investor networking opportunities"
      ],
      eligibility: "Early-stage startups with innovative solutions for local challenges",
      duration: "6-12 months"
    },
    {
      title: "Acceleration Program",
      description: "Intensive growth program for startups ready to scale, focusing on market expansion and investment readiness.",
      features: [
        "Growth strategy consulting",
        "Investment pitch preparation",
        "Market expansion support",
        "Access to funding networks"
      ],
      eligibility: "Startups with validated business models and traction",
      duration: "3-6 months"
    },
    {
      title: "Mentorship Network",
      description: "Connect with experienced entrepreneurs and industry experts who provide guidance and support.",
      features: [
        "One-on-one mentorship",
        "Industry-specific expertise",
        "Networking opportunities",
        "Skill development workshops"
      ],
      eligibility: "Open to all startup founders and entrepreneurs",
      duration: "Ongoing"
    },
    {
      title: "Funding Access",
      description: "Facilitate access to various funding sources including grants, angel investors, and venture capital.",
      features: [
        "Grant application support",
        "Investor matching",
        "Pitch deck development",
        "Financial planning assistance"
      ],
      eligibility: "Startups with scalable business models",
      duration: "As needed"
    }
  ];

  const successStories = [
    {
      name: "AgriTech Solutions",
      industry: "Agriculture",
      story: "Developed IoT-based monitoring systems for local fisheries, improving yield by 40% and reducing waste.",
      impact: "50 fishers now using the technology",
      year: "2024"
    },
    {
      name: "EcoEnergy PH",
      industry: "Clean Energy",
      story: "Created microgrid solutions for remote communities, providing reliable clean energy to 3 municipalities.",
      impact: "2,000 households with stable power",
      year: "2024"
    },
    {
      name: "Digital Health Surigao",
      industry: "Healthcare",
      story: "Built telemedicine platform connecting rural communities with medical specialists in urban centers.",
      impact: "10,000 consultations facilitated",
      year: "2023"
    }
  ];

  const resources = [
    { title: "Startup Toolkit", description: "Essential resources for starting and growing your business", type: "Guide" },
    { title: "Funding Directory", description: "Comprehensive list of available funding sources", type: "Resource" },
    { title: "Legal Templates", description: "Standard legal documents for startups", type: "Template" },
    { title: "Market Research Reports", description: "Industry insights and market analysis", type: "Report" }
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
      <section className="relative min-h-[70vh] w-full overflow-hidden px-10 sm:px-12 md:px-14 lg:px-16 bg-white" aria-label="Startups Hero">
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
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1600&q=80"
              alt="Startups Background"
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
              <linearGradient id="startupsWaveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="50%" stopColor="white" stopOpacity="0.7" />
                <stop offset="100%" stopColor="white" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="url(#startupsWaveGradient)"
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
                STARTUP ECOSYSTEM
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
                BUILDING THE FUTURE OF{"\n"}
                SURIGAO'S INNOVATION
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
                Our startup ecosystem provides comprehensive support for entrepreneurs to build, scale, and succeed. From ideation to market expansion, we're here to help you turn your vision into reality.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  href="#programs"
                  variant="maroon"
                  showArrow={true}
                  className="text-base py-3 px-8 rounded-full"
                >
                  Explore Programs
                </Button>
                <Button
                  href="#apply"
                  variant="outline"
                  showArrow={true}
                  className="text-base py-3 px-8 rounded-full border-2 border-[#500a31] text-[#500a31]"
                >
                  Apply Now
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedHero>
      </section>

      {/* ===== PROGRAMS ===== */}
      <section id="programs" className="bg-white py-[100px] px-6" aria-label="Startup Programs">
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
              Support
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
              STARTUP PROGRAMS
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {startupPrograms.map((program, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(80, 10, 49, 0.15)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-[0_8px 24px rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden"
                >
                  <div className="p-6 md:p-8">
                    <h3 className="font-bold text-xl mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                      {program.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                      {program.description}
                    </p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="text-xs font-bold mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                          FEATURES
                        </div>
                        <ul className="space-y-1">
                          {program.features.map((feature, i) => (
                            <li key={i} className="text-xs leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.6 }}>
                              • {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-xs font-bold mb-1" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                            ELIGIBILITY
                          </div>
                          <div className="text-xs" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.6 }}>
                            {program.eligibility}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-bold mb-1" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                            DURATION
                          </div>
                          <div className="text-xs" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.6 }}>
                            {program.duration}
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button
                      href="#apply"
                      variant="outline"
                      showArrow={true}
                      className="text-sm py-2 px-4 rounded-full border-2 border-[#500a31] text-[#500a31]"
                    >
                      Learn More
                    </Button>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== SUCCESS STORIES ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Success Stories">
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
              Impact
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
              SUCCESS STORIES
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(80, 10, 49, 0.15)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#500a31] rounded-2xl p-6"
                >
                  <div className="text-xs text-white/60 mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                    {story.industry} • {story.year}
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                    {story.name}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4 text-white/80" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                    {story.story}
                  </p>
                  <div className="pt-4 border-t border-white/20">
                    <div className="text-xs font-bold text-white mb-1" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                      Impact
                    </div>
                    <div className="text-sm text-white/70" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                      {story.impact}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== RESOURCES ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Resources">
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
              Tools
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
              STARTUP RESOURCES
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(80, 10, 49, 0.15)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 rounded-2xl p-6 border border-[#500a31]/10 text-center"
                >
                  <div className="text-xs font-bold mb-2 px-3 py-1 rounded-full inline-block" style={{ fontFamily: "Montserrat, Arial, sans-serif", backgroundColor: "#500a31", color: "white" }}>
                    {resource.type}
                  </div>
                  <h3 className="font-bold text-sm mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                    {resource.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                    {resource.description}
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
              { title: "Governance", description: "L.I.G.-ON principles for transparency", href: "/governance" },
              { title: "Roadmap", description: "Journey to 2040 innovation hub", href: "/roadmap" },
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

      {/* ===== APPLY ===== */}
      <section id="apply" className="bg-white py-[100px] px-6" aria-label="Apply">
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
              START YOUR ENTREPRENEURIAL JOURNEY
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
                Apply for Program
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
                Contact Us
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
