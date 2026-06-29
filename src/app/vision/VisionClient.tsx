"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, AnimatedHero, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";

export function VisionClient() {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();
  const scrollX = useTransform(scrollY, [0, 500], [0, 50]);

  const x = prefersReduced ? 0 : scrollX;

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
      <section className="relative min-h-[70vh] w-full overflow-hidden px-10 sm:px-12 md:px-14 lg:px-16 bg-white" aria-label="Vision Hero">
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
              alt="Vision Background"
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
              <linearGradient id="visionWaveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="50%" stopColor="white" stopOpacity="0.7" />
                <stop offset="100%" stopColor="white" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="url(#visionWaveGradient)"
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
                VISION
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="font-extrabold uppercase tracking-[-2px] leading-[0.88] mb-8"
                style={{
                  fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif",
                  fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                  fontWeight: 700,
                  color: "#500a31",
                }}
              >
                SURIGAO DEL NORTE:{"\n"}
                A THRIVING INNOVATION{"\n"}
                ECOSYSTEM BY 2040
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
                Through PRIME SDN, the province seeks to nurture an ecosystem that empowers entrepreneurs, strengthens research and talent development, embraces digital transformation, and fosters resilient communities capable of creating lasting economic and social impact.
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
                  Explore Vision
                </Button>
                <Button
                  href="#pillars"
                  variant="outline"
                  showArrow={true}
                  className="text-base py-3 px-8 rounded-full border-2 border-[#500a31] text-[#500a31]"
                >
                  View Pillars
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedHero>
      </section>

      {/* ===== VISION OVERVIEW ===== */}
      <section id="overview" className="bg-white py-[100px] px-6" aria-label="Vision Overview">
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
              SDN PRIME 2055
            </motion.h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <motion.div
              className="bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 rounded-2xl p-8 md:p-12 border border-[#500a31]/10"
            >
              <p className="text-base leading-relaxed mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.8 }}>
                The SDN PRIME 2055 Vision represents a transformative journey for Surigao del Norte, positioning the province as a leading innovation hub in the Philippines by 2040. This comprehensive framework integrates technology, entrepreneurship, education, and sustainable development to create a resilient and prosperous future for all Surigaonons.
              </p>
              <p className="text-base leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.8 }}>
                Built on the foundation of public-private partnership, community engagement, and strategic governance, PRIME SDN aims to unlock the full potential of our people, resources, and geographic advantages to drive inclusive economic growth and social progress.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SEVEN PILLARS ===== */}
      <section id="pillars" className="bg-white py-[100px] px-6" aria-label="Seven Pillars">
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
              SEVEN PILLARS OF INNOVATION
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Startup Development",
                description: "Building a thriving startup culture that transforms local ideas into scalable ventures.",
                color: "#F59E0B"
              },
              {
                title: "Education & Talent",
                description: "Developing human capital through STEM education, skills training, and talent retention programs.",
                color: "#3B82F6"
              },
              {
                title: "Research & Innovation",
                description: "Advancing scientific research and innovation through partnerships with academia and industry.",
                color: "#10B981"
              },
              {
                title: "Digital Transformation",
                description: "Modernizing governance and services through digital technologies and smart city initiatives.",
                color: "#8B5CF6"
              },
              {
                title: "Sustainable Communities",
                description: "Creating resilient communities through sustainable development and environmental stewardship.",
                color: "#06B6D4"
              },
              {
                title: "Partnerships & Investments",
                description: "Attracting investments and building strategic partnerships for economic growth.",
                color: "#EC4899"
              },
              {
                title: "Policy & Governance",
                description: "Establishing enabling policies and governance structures for innovation-driven development.",
                color: "#6B7280"
              }
            ].map((pillar, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: `0 20px 40px ${pillar.color}30` }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-6 shadow-[0_8px 24px rgba(0,0,0,0.08)] border border-gray-100"
                  style={{ borderTop: `4px solid ${pillar.color}` }}
                >
                  <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: `${pillar.color}20` }}>
                    <div className="w-6 h-6 rounded-full" style={{ backgroundColor: pillar.color }} />
                  </div>
                  <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                    {pillar.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.5} className="mt-12 text-center">
            <Button
              href="/frameworks/startup-development"
              variant="maroon"
              showArrow={true}
              className="text-base py-3 px-8 rounded-full"
            >
              Explore All Pillars
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== VISION TIMELINE ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Vision Timeline">
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
              Journey
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
              VISION TIMELINE
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="space-y-8">
            {[
              {
                year: "2025",
                title: "Foundation Phase",
                description: "Establish the PRIME SDN framework, launch key programs, and build initial partnerships with stakeholders across the province."
              },
              {
                year: "2027",
                title: "Growth Phase",
                description: "Scale successful programs, expand startup incubation, strengthen research collaborations, and increase investment inflows."
              },
              {
                year: "2030",
                title: "Acceleration Phase",
                description: "Achieve critical mass in innovation activities, establish Surigao as a recognized innovation hub, and demonstrate measurable impact."
              },
              {
                year: "2040",
                title: "Realization Phase",
                description: "Fully realize the vision of Surigao del Norte as a thriving innovation ecosystem with sustainable economic and social transformation."
              }
            ].map((milestone, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-6 items-start"
                >
                  <div className="shrink-0 w-24 text-center">
                    <div className="font-extrabold text-3xl" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 bg-gradient-to-r from-[#500a31]/5 to-[#500a31]/10 rounded-2xl p-6 border border-[#500a31]/10">
                    <h3 className="font-bold text-xl mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                      {milestone.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== EXPECTED IMPACT ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Expected Impact">
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
              EXPECTED OUTCOMES
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Startups Supported" },
              { value: "10K+", label: "Jobs Created" },
              { value: "₱5B+", label: "Investments Attracted" },
              { value: "26", label: "Municipalities Engaged" }
            ].map((stat, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(80, 10, 49, 0.2)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#500a31] rounded-2xl p-8 text-center"
                >
                  <div className="text-5xl font-bold text-white mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/80" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                    {stat.label}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== STRATEGIC ALIGNMENT ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Strategic Alignment">
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
              Alignment
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
              STRATEGIC ALIGNMENT
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Philippine Development Plan",
                description: "Aligned with national goals for innovation, digital transformation, and inclusive economic growth."
              },
              {
                title: "Regional Development Plan",
                description: "Supports CARAGA Region's development priorities and competitive advantages."
              },
              {
                title: "Provincial Development Plan",
                description: "Integrated with Surigao del Norte's long-term development framework and local priorities."
              },
              {
                title: "UN Sustainable Development Goals",
                description: "Contributing to global goals on quality education, decent work, industry innovation, and partnerships."
              }
            ].map((alignment, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(80, 10, 49, 0.15)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 rounded-2xl p-8 border border-[#500a31]/10"
                >
                  <h3 className="font-bold text-xl mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                    {alignment.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                    {alignment.description}
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
              { title: "Our Mission", description: "S.M.A.R.T. actions for innovation excellence", href: "/mission" },
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
                className="flex-1 text-center py-4 px-10 rounded-full bg-[#500a31] text-white font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-[#500a31] flex items-center justify-center gap-2"
                style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
              >
                Join the Movement
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
