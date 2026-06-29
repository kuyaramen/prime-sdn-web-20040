"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, AnimatedHero, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";

export function CoreValuesClient() {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();
  const scrollX = useTransform(scrollY, [0, 500], [0, 50]);

  const x = prefersReduced ? 0 : scrollX;

  const coreValues = [
    {
      name: "S",
      word: "Service",
      title: "Service to the People",
      description: "Commitment to serving the Surigaonon community with dedication, integrity, and excellence. Every action and decision is guided by the welfare of the people.",
      icon: "Heart",
      examples: [
        "Public servants prioritizing citizen needs",
        "Community programs addressing local concerns",
        "Responsive and accessible government services",
        "Volunteerism and civic engagement"
      ],
      application: "Applied through citizen-centered services, community outreach programs, and responsive governance that puts people first in every initiative."
    },
    {
      name: "U",
      word: "Unity",
      title: "Unity in Purpose",
      description: "Fostering collaboration and solidarity among all stakeholders to achieve common goals. Together, we can overcome challenges and build a stronger province.",
      icon: "Users",
      examples: [
        "Multi-sector partnerships for development",
        "Collaborative innovation initiatives",
        "Community-driven problem solving",
        "Inclusive decision-making processes"
      ],
      application: "Demonstrated through public-private partnerships, community consultations, and collaborative platforms that bring together government, academia, industry, and civil society."
    },
    {
      name: "R",
      word: "Resilience",
      title: "Resilience in Adversity",
      description: "Building capacity to withstand and recover from challenges, turning obstacles into opportunities for growth and innovation.",
      icon: "Shield",
      examples: [
        "Disaster preparedness and response",
        "Economic diversification strategies",
        "Adaptive governance systems",
        "Community-based resilience programs"
      ],
      application: "Implemented through disaster resilience programs, economic diversification initiatives, and adaptive systems that enable the province to thrive despite challenges."
    },
    {
      name: "I",
      word: "Integrity",
      title: "Integrity in Action",
      description: "Upholding honesty, transparency, and accountability in all dealings. Trust is the foundation of sustainable development and good governance.",
      icon: "CheckCircle",
      examples: [
        "Transparent procurement processes",
        "Accountable financial management",
        "Ethical leadership practices",
        "Open data and information sharing"
      ],
      application: "Enforced through transparent governance systems, accountability mechanisms, and ethical standards that build public trust and confidence."
    },
    {
      name: "G",
      word: "Growth",
      title: "Growth through Innovation",
      description: "Embracing continuous improvement and innovation to drive progress. Stagnation is not an option in our journey toward excellence.",
      icon: "TrendingUp",
      examples: [
        "Adoption of new technologies",
        "Continuous learning and development",
        "Innovation-driven solutions",
        "Sustainable economic expansion"
      ],
      application: "Pursued through innovation programs, skills development, and technology adoption that create new opportunities and drive sustainable progress."
    },
    {
      name: "A",
      word: "Accountability",
      title: "Accountability for Results",
      description: "Taking responsibility for actions and outcomes. Every commitment is honored, and every result is measured and reported.",
      icon: "Target",
      examples: [
        "Performance monitoring systems",
        "Result-oriented program management",
        "Regular public reporting",
        "Clear responsibility frameworks"
      ],
      application: "Ensured through performance management systems, regular reporting mechanisms, and clear responsibility frameworks that track and communicate outcomes."
    },
    {
      name: "O",
      word: "Opportunity",
      title: "Opportunity for All",
      description: "Creating inclusive opportunities that enable every Surigaonon to participate in and benefit from development. No one is left behind.",
      icon: "Zap",
      examples: [
        "Inclusive education programs",
        "Accessible economic opportunities",
        "Gender-responsive initiatives",
        "Youth and elderly engagement"
      ],
      application: "Realized through inclusive policies, accessible programs, and targeted initiatives that ensure equitable access to opportunities across all sectors."
    },
    {
      name: "N",
      word: "Nurturing",
      title: "Nurturing the Future",
      description: "Investing in the next generation through education, mentorship, and capacity building. Our youth are the architects of tomorrow's Surigao.",
      icon: "Sprout",
      examples: [
        "Youth development programs",
        "Education and skills training",
        "Mentorship initiatives",
        "Talent retention efforts"
      ],
      application: "Achieved through education enhancement, youth programs, mentorship initiatives, and talent development that prepare the next generation for leadership."
    },
    {
      name: "O",
      word: "Optimism",
      title: "Optimism for Tomorrow",
      description: "Maintaining hope and confidence in Surigao's potential. A positive mindset fuels innovation, resilience, and collective action.",
      icon: "Sun",
      examples: [
        "Visionary planning and goal-setting",
        "Celebrating successes and milestones",
        "Inspiring narratives and storytelling",
        "Future-oriented mindset"
      ],
      application: "Cultivated through visionary leadership, success celebrations, and inspiring narratives that build confidence in Surigao's bright future."
    },
    {
      name: "N",
      word: "Nationalism",
      title: "Nationalism with Pride",
      description: "Taking pride in our Surigaonon identity while contributing to national development. Local excellence strengthens the nation.",
      icon: "Flag",
      examples: [
        "Promoting local culture and heritage",
        "Contributing to national goals",
        "Showcasing Surigao's achievements",
        "Building local-global connections"
      ],
      application: "Expressed through cultural preservation, contribution to national development, and showcasing Surigao's excellence on broader stages."
    }
  ];

  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactElement> = {
      Heart: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
      Users: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
      Shield: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
      CheckCircle: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      TrendingUp: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
      Target: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
      Zap: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      Sprout: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>,
      Sun: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
      Flag: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-8a2 2 0 012-2h14a2 2 0 012 2v8M3 21h18M5 11l7-7 7 7M5 11l7 7 7-7" /></svg>
    };
    return icons[iconName] || icons.Heart;
  };

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
      <section className="relative min-h-[70vh] w-full overflow-hidden px-10 sm:px-12 md:px-14 lg:px-16 bg-white" aria-label="Core Values Hero">
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
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
              alt="Core Values Background"
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
              <linearGradient id="coreValuesWaveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="50%" stopColor="white" stopOpacity="0.7" />
                <stop offset="100%" stopColor="white" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="url(#coreValuesWaveGradient)"
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
                CORE VALUES
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
                SURIGAONON VALUES
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
                The SURIGAONON core values define our identity, guide our actions, and inspire our commitment to building a better Surigao del Norte for present and future generations.
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
                  Explore Values
                </Button>
                <Button
                  href="#values"
                  variant="outline"
                  showArrow={true}
                  className="text-base py-3 px-8 rounded-full border-2 border-[#500a31] text-[#500a31]"
                >
                  View All Values
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedHero>
      </section>

      {/* ===== OVERVIEW ===== */}
      <section id="overview" className="bg-white py-[100px] px-6" aria-label="Core Values Overview">
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
              OUR GUIDING PRINCIPLES
            </motion.h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <motion.div
              className="bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 rounded-2xl p-8 md:p-12 border border-[#500a31]/10"
            >
              <p className="text-base leading-relaxed mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.8 }}>
                The SURIGAONON core values represent the fundamental beliefs and principles that shape our identity as a people and guide our collective actions toward progress. These values are not just words but lived principles that influence every decision, program, and initiative in the province.
              </p>
              <p className="text-base leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.8 }}>
                By embodying these values, we create a culture of excellence, integrity, and inclusivity that drives sustainable development and ensures that the benefits of Surigao's growth are shared by all.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section id="values" className="bg-white py-[100px] px-6" aria-label="Core Values">
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
              Values
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
              SURIGAONON CORE VALUES
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(80, 10, 49, 0.15)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-[0_8px 24px rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-[#500a31] to-[#500a31]/80 p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
                        <span className="font-extrabold text-xl" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                          {value.name}
                        </span>
                      </div>
                      <div className="text-white">
                        <div className="text-sm font-bold text-white/80" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                          {value.word}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                      {value.description}
                    </p>

                    <div className="border-t border-gray-100 pt-4 mt-4">
                      <div className="text-xs font-bold mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                        EXAMPLES
                      </div>
                      <ul className="space-y-1">
                        {value.examples.slice(0, 2).map((example, i) => (
                          <li key={i} className="text-xs leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.6 }}>
                            • {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== DETAILED VALUE EXPLORATION ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Detailed Values">
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
              Deep Dive
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
              VALUE IN PRACTICE
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="space-y-8">
            {coreValues.slice(0, 5).map((value, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-6 items-start"
                >
                  <div className="shrink-0 w-16 h-16 rounded-full bg-[#500a31] flex items-center justify-center">
                    <span className="font-extrabold text-2xl text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                      {value.name}
                    </span>
                  </div>
                  <div className="flex-1 bg-gradient-to-r from-[#500a31]/5 to-[#500a31]/10 rounded-2xl p-6 border border-[#500a31]/10">
                    <h3 className="font-bold text-xl mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                      {value.description}
                    </p>
                    <div className="bg-white/50 rounded-lg p-4">
                      <div className="text-xs font-bold mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                        REAL-WORLD APPLICATION
                      </div>
                      <p className="text-xs leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.6 }}>
                        {value.application}
                      </p>
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
              { title: "Our Mission", description: "S.M.A.R.T. actions for innovation excellence", href: "/mission" },
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
              LIVE THE SURIGAONON VALUES
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
                Join Our Community
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <motion.a
                href="/mission"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex-1 text-center py-4 px-10 rounded-full bg-white text-[#500a31] font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#500a31] flex items-center justify-center gap-2"
                style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
              >
                Explore Our Mission
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
