"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, AnimatedHero, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import {
  Rocket,
  Lightbulb,
  TrendingUp,
  Users,
  Award,
  Target,
  Zap,
  Building2,
  GraduationCap,
  Handshake,
  DollarSign,
  Network,
} from "lucide-react";

export function StartupEcosystemClient() {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();
  const scrollX = useTransform(scrollY, [0, 500], [0, 50]);
  const [activeSection, setActiveSection] = useState("ventures");

  const x = prefersReduced ? 0 : scrollX;

  // Generate deterministic particle positions
  const particlePositions = Array.from({ length: 20 }, (_, i) => ({
    x: ((i * 37) % 100) + "%",
    y: ((i * 53) % 100) + "%",
    delay: (i * 0.3) % 5,
    duration: 5 + ((i * 7) % 5),
  }));

  const navigationSections = [
    { id: "ventures", label: "Startup Ventures" },
    { id: "programs", label: "Startup Programs" },
    { id: "stories", label: "Success Stories" },
  ];

  const startupVentures = [
    {
      id: 1,
      name: "TechNova Solutions",
      category: "Technology",
      description: "AI-powered agricultural technology helping farmers optimize crop yields through data analytics.",
      logo: "🚀",
      slug: "technova-solutions",
    },
    {
      id: 2,
      name: "EcoSurigao",
      category: "Sustainability",
      description: "Sustainable waste management solutions turning plastic waste into construction materials.",
      logo: "🌱",
      slug: "ecosurigao",
    },
    {
      id: 3,
      name: "MarineTech PH",
      category: "Marine Technology",
      description: "Innovative aquaculture monitoring systems for sustainable fishing practices.",
      logo: "🌊",
      slug: "marinetech-ph",
    },
    {
      id: 4,
      name: "HealthConnect",
      category: "Healthcare",
      description: "Telemedicine platform connecting remote communities with healthcare providers.",
      logo: "🏥",
      slug: "healthconnect",
    },
    {
      id: 5,
      name: "EduLearn Surigao",
      category: "Education",
      description: "Digital learning platform providing quality education to underserved areas.",
      logo: "📚",
      slug: "edulearn-surigao",
    },
    {
      id: 6,
      name: "TourismX",
      category: "Tourism",
      description: "Smart tourism app enhancing visitor experiences with AR and local recommendations.",
      logo: "✈️",
      slug: "tourismx",
    },
  ];

  const startupPrograms = [
    {
      icon: Building2,
      title: "Incubation",
      description: "Comprehensive incubation program providing workspace, mentorship, and resources for early-stage startups.",
    },
    {
      icon: Rocket,
      title: "Acceleration",
      description: "Intensive accelerator program helping startups scale rapidly with funding and strategic guidance.",
    },
    {
      icon: Users,
      title: "Mentorship",
      description: "One-on-one mentorship from industry experts and successful entrepreneurs.",
    },
    {
      icon: GraduationCap,
      title: "Training",
      description: "Skill development workshops and training programs for startup founders and teams.",
    },
    {
      icon: DollarSign,
      title: "Grants",
      description: "Funding opportunities and grants to support innovative startup ideas and growth.",
    },
    {
      icon: Network,
      title: "Networking",
      description: "Events and platforms connecting startups with investors, partners, and peers.",
    },
  ];

  const successStories = [
    {
      founder: "Maria Santos",
      founderImage: "👩‍💼",
      startup: "TechNova Solutions",
      summary: "From a small idea to a regional leader in agricultural technology, transforming farming practices across Surigao del Norte.",
      achievements: ["Raised ₱5M in Series A", "Expanded to 3 provinces", "500+ farmers using platform", "National Innovation Award 2024"],
      testimonial: "PRIME SDN's incubation program gave us the foundation we needed to turn our vision into reality.",
    },
    {
      founder: "Juan Cruz",
      founderImage: "👨‍💼",
      startup: "EcoSurigao",
      summary: "Pioneering sustainable solutions while creating economic opportunities for local communities.",
      achievements: ["Processed 100 tons of plastic waste", "Created 50+ jobs", "Partnership with LGUs", "Featured in national media"],
      testimonial: "The mentorship and networking opportunities were invaluable for our growth.",
    },
    {
      founder: "Ana Reyes",
      founderImage: "👩‍💼",
      startup: "MarineTech PH",
      summary: "Revolutionizing aquaculture with technology while promoting sustainable fishing practices.",
      achievements: ["Deployed in 20 fishing communities", "30% increase in yield", "Government partnership", "Exporting to ASEAN markets"],
      testimonial: "PRIME SDN connected us with the right partners and helped us navigate the regulatory landscape.",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full overflow-hidden px-10 sm:px-12 md:px-14 lg:px-16 bg-white" aria-label="Startup Ecosystem Hero" style={{ height: "calc(100vh - 5rem)", minHeight: "calc(100vh - 5rem)" }}>
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 w-full h-full opacity-30 mix-blend-multiply z-0">
            <Image
              src="/images/ChatGPT Image Jul 13, 2026, 06_12_59 PM.png"
              alt="Innovation ecosystem in Surigao del Norte"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
          {particlePositions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#1E4FBF]/10"
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


        {/* Hero Content */}
        <AnimatedHero className="relative z-20 w-full h-full flex flex-col justify-center pt-20 pb-32">
          <div className="max-w-[1440px] mx-auto w-full">
            <div className="max-w-4xl">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="font-bold uppercase tracking-wider mb-8"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(48px, 8vw, 72px)",
                  color: "#5E7CE2",
                }}
              >
                Startup Ecosystem
              </motion.p>

              <h1
                className="font-extrabold uppercase tracking-[-2px] leading-[0.9] mb-16"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                  fontWeight: 700,
                  color: "#1A2F6B",
                }}
              >
                Build the Next{"\n"}Generation of{"\n"}Surigao Startups
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4"
              >
                {navigationSections.map((section) => (
                  <motion.button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    className={`relative px-6 py-3 font-medium transition-all duration-300 ${
                      activeSection === section.id
                        ? "text-white shadow-lg"
                        : "text-[#0F172A] hover:opacity-90"
                    }`}
                    style={{
                      fontFamily: "Montserrat, Arial, sans-serif",
                      fontSize: "clamp(14px, 1.5vw, 16px)",
                      background: activeSection === section.id 
                        ? "linear-gradient(135deg, #1E4FBF 0%, #2563EB 100%)"
                        : "white",
                      borderRadius: "9999px",
                    }}
                  >
                    {activeSection !== section.id && (
                      <span 
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{
                          padding: "2px",
                          background: "linear-gradient(135deg, #1E4FBF 0%, #2563EB 100%)",
                          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                          WebkitMaskComposite: "xor",
                          maskComposite: "exclude",
                        }}
                      />
                    )}
                    <span className="relative z-10">{section.label}</span>
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </div>
        </AnimatedHero>
      </section>

      {/* ===== STARTUP VENTURES ===== */}
      <section id="ventures" className="bg-white py-20 px-6" aria-label="Startup Ventures">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(14px, 2vw, 16px)",
                color: "#5E7CE2",
              }}
            >
              Startup Ventures
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl mx-auto"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#1A2F6B",
              }}
            >
              Innovation Starts{"\n"}With Great Founders
            </motion.h2>
            <motion.p
              className="mt-6 max-w-2xl mx-auto"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(16px, 1.8vw, 20px)",
                color: "#5F6E89",
              }}
            >
              Meet the innovators building solutions in technology, sustainability, agriculture, tourism, education, and marine industries.
            </motion.p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {startupVentures.map((venture) => (
              <StaggerItem key={venture.id}>
                <Link href={`/startups/${venture.slug}`}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-2xl p-8 border transition-all duration-300 cursor-pointer"
                    style={{
                      background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)",
                      borderColor: "#E5E7EB",
                      boxShadow: "0 20px 50px rgba(17,24,39,0.08)",
                    }}
                  >
                    <div className="text-5xl mb-4">{venture.logo}</div>
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3" style={{ backgroundColor: "#EAF2FF", color: "#3565D9" }}>
                      {venture.category}
                    </div>
                    <h3 className="font-bold text-xl mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                      {venture.name}
                    </h3>
                    <p className="text-base leading-relaxed mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#6B7280" }}>
                      {venture.description}
                    </p>
                    <Button
                      variant="outline"
                      showArrow={true}
                      className="w-full text-sm py-2 px-4 rounded-full border-2 border-[#3565D9] text-[#3565D9] hover:bg-[#3565D9] hover:text-white transition-all duration-300"
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== STARTUP PROGRAMS ===== */}
      <section id="programs" className="bg-gradient-to-br from-[#1E4FBF]/5 to-white py-20 px-6" aria-label="Startup Programs">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(14px, 2vw, 16px)",
                color: "#5E7CE2",
              }}
            >
              Startup Programs
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl mx-auto"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#1A2F6B",
              }}
            >
              Programs Designed{"\n"}to Help You Scale
            </motion.h2>
            <motion.p
              className="mt-6 max-w-2xl mx-auto"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(16px, 1.8vw, 20px)",
                color: "#5F6E89",
              }}
            >
              Access incubation, acceleration, training, mentorship, funding opportunities, and expert guidance to grow every stage of your entrepreneurial journey.
            </motion.p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {startupPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-2xl p-8 border transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)",
                      borderColor: "#E5E7EB",
                      boxShadow: "0 20px 50px rgba(17,24,39,0.08)",
                    }}
                  >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "#EAF2FF" }}>
                      <Icon className="w-8 h-8" style={{ color: "#3565D9" }} />
                    </div>
                    <h3 className="font-bold text-xl mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                      {program.title}
                    </h3>
                    <p className="text-base leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#6B7280" }}>
                      {program.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== SUCCESS STORIES ===== */}
      <section id="stories" className="bg-white py-20 px-6" aria-label="Success Stories">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(14px, 2vw, 16px)",
                color: "#5E7CE2",
              }}
            >
              Success Stories
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl mx-auto"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#1A2F6B",
              }}
            >
              Real Founders.{"\n"}Real Impact.
            </motion.h2>
            <motion.p
              className="mt-6 max-w-2xl mx-auto"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(16px, 1.8vw, 20px)",
                color: "#5F6E89",
              }}
            >
              Discover inspiring entrepreneurs who transformed innovative ideas into successful businesses with the support of the PRIME SDN ecosystem.
            </motion.p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl p-8 border transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)",
                    borderColor: "#E5E7EB",
                    boxShadow: "0 20px 50px rgba(17,24,39,0.08)",
                  }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl" style={{ backgroundColor: "#EAF2FF" }}>
                      {story.founderImage}
                    </div>
                    <div>
                      <p className="font-bold text-lg" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                        {story.founder}
                      </p>
                      <p className="text-sm" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#6B7280" }}>
                        Founder, {story.startup}
                      </p>
                    </div>
                  </div>

                  <h3 className="font-bold text-xl mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                    {story.startup}
                  </h3>

                  <p className="text-base leading-relaxed mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#6B7280" }}>
                    {story.summary}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-bold text-sm uppercase tracking-wider mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#5E7CE2" }}>
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {story.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#6B7280" }}>
                          <Award className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#3565D9" }} />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl p-4 border" style={{ backgroundColor: "#F8FAFF", borderColor: "#EAF2FF" }}>
                    <p className="text-sm italic" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#6B7280" }}>
                      "{story.testimonial}"
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="bg-white py-20 px-6" aria-label="Join the Ecosystem">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl mx-auto mb-6"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#1A2F6B",
              }}
            >
              Ready to Build the Future?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="max-w-2xl mx-auto mb-10"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(16px, 1.8vw, 20px)",
                color: "#64748B",
              }}
            >
              Become part of Surigao del Norte's growing innovation ecosystem and turn your ideas into meaningful impact.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <Button
                href="#"
                variant="primary"
                showArrow={true}
                className="text-base py-3 px-8 rounded-full bg-[#1E4FBF] text-white hover:bg-[#2563EB]"
              >
                Join the Ecosystem
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
