"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

import { Card } from "@/components/ui/Card";
import {
  AnimatedHero,
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import SSC2040Roadmap from "@/components/sections/SSC2040Roadmap";
import { CinematicVideoSection } from "@/components/sections/CinematicVideoSection";
import { StatementSection } from "@/components/sections/StatementSection";
import PrimeFramework from "@/components/sections/PrimeFramework";

interface Pillar {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  order: number;
}

interface Activity {
  id: string;
  title: string;
  slug: string;
  pillarTag: string;
  excerpt: string;
  coverImage: string;
  publishedAt: string;
}

interface NewsPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  coverImage: string;
  publishedAt: string;
}

interface HomeClientProps {
  pillars: Pillar[];
  activities: Activity[];
  news: NewsPost[];
}

export function HomeClient({ pillars, activities, news }: HomeClientProps) {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();
  const scrollXPrime = useTransform(scrollY, [0, 800], [0, 150]);
  const scrollXSurigao = useTransform(scrollY, [0, 800], [0, -150]);
  const [activeNewsIndex, setActiveNewsIndex] = useState(0);
  const [isHoveringNews, setIsHoveringNews] = useState(false);

  const xPrime = prefersReduced ? 0 : scrollXPrime;
  const xSurigao = prefersReduced ? 0 : scrollXSurigao;

  // Autoplay for news cards
  useEffect(() => {
    if (news.length <= 1) return;
    
    const interval = setInterval(() => {
      if (!isHoveringNews) {
        setActiveNewsIndex((prev) => (prev + 1) % Math.min(news.length, 3));
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [news.length, isHoveringNews]);

  return (
    <>

      <section className="relative min-h-fit w-full overflow-hidden px-10 sm:px-12 md:px-14 lg:px-16 bg-white" aria-label="Hero">
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
        {/* Gradient Overlay Layer */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none" 
          style={{
            background: "linear-gradient(135deg, rgba(253, 224, 71, 0.4) 0%, rgba(249, 115, 22, 0.15) 25%, rgba(255, 255, 255, 0.7) 60%, rgba(45, 212, 191, 0.3) 100%)"
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
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="50%" stopColor="white" stopOpacity="0.7" />
                <stop offset="100%" stopColor="white" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="url(#waveGradient)"
              opacity="0.9"
            />
            <path
              d="M0,80L48,74.7C96,69,192,59,288,64C384,69,480,91,576,96C672,101,768,91,864,85.3C960,80,1056,80,1152,85.3C1248,91,1344,101,1392,106.7L1440,112L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="url(#waveGradient)"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* Title — near top of screen, left aligned, prominent positioning */}
        <AnimatedHero className="relative z-20 w-full h-full flex flex-col justify-between pt-8 md:pt-12 lg:pt-16 pb-12 md:pb-16 lg:pb-20 select-none">
          {/* Top — Brand Title */}
          <div className="leading-none tracking-tight font-extrabold shrink-0">
            {/* Row 1: SURIGAO */}
            <motion.h1
              style={{ x: xPrime, color: "#500a31" }}
              className="text-7xl sm:text-8xl md:text-[7rem] lg:text-[8.5rem] xl:text-[10rem] font-[900] uppercase tracking-wide mb-1 md:mb-3 font-display"
            >
              SURIGAO
            </motion.h1>

            {/* Row 2: PRIME 2040 */}
            <motion.h2
              style={{ x: xSurigao }}
              className="text-7xl sm:text-8xl md:text-[7rem] lg:text-[8.5rem] xl:text-[10rem] font-[900] uppercase tracking-wide flex flex-wrap items-center gap-x-4 md:gap-x-8 font-display"
            >
              <span style={{ color: "#500a31" }}>PRIME</span>
              <span style={{ color: "#114d4a", fontFamily: "Montserrat, Arial, sans-serif", fontWeight: 900 }}>2040</span>
            </motion.h2>
          </div>

          {/* Bottom — Partner Agency Logos (Near the end of the picture) */}
          <div className="w-full flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-current opacity-20" style={{ color: "#500a31" }} />
              <p className="text-xs font-bold uppercase tracking-widest whitespace-nowrap" style={{ color: "#500a31", opacity: 0.6 }}>
                In Partnership With
              </p>
              <span className="h-[1px] w-full max-w-xs md:max-w-md bg-current opacity-20" style={{ color: "#500a31" }} />
            </div>
            <div className="flex items-center gap-6 md:gap-8">
              {/* Left: Partner Logo Marquee */}
              <div className="flex-1 overflow-hidden relative select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
                <motion.div
                  className="flex items-center w-max"
                  animate={{ x: ["-25%", "-75%"] }}
                  transition={{
                    ease: "linear",
                    duration: 25,
                    repeat: Infinity,
                  }}
                >
                  {[...Array(2)].map((_, arrayIndex) => (
                    <div key={arrayIndex} className="flex items-center gap-4 pr-4">
                      {[
                        { src: "/images/logos/dost.jpg", label: "DOST" },
                        { src: "/images/logos/dti.jpg",  label: "DTI" },
                        { src: "/images/logos/dict.png",  label: "DICT" },
                        { src: "/images/logos/ched.png",  label: "CHED" },
                        { src: "/images/logos/surigao_del_norte.png",  label: "Province of Surigao del Norte" },
                        { src: "/images/logos/tesda_new.jpg",  label: "TESDA" },
                        { src: "/images/logos/snsu.jpg",  label: "SNSU" },
                      ].map((agency) => (
                        <div
                          key={agency.label}
                          className="group flex items-center justify-center bg-white backdrop-blur-sm rounded-full p-2 w-12 h-12 md:w-[56px] md:h-[56px] shadow-sm border border-white/60 hover:shadow-md hover:scale-110 transition-all duration-300 cursor-default flex-shrink-0"
                          title={agency.label}
                        >
                          <Image
                            src={agency.src}
                            alt={agency.label + " logo"}
                            width={32}
                            height={32}
                            className="object-contain w-8 h-8 md:w-[32px] md:h-[32px] opacity-100 transition-all duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>
              {/* Right: Description Text */}
              <div className="hidden md:block max-w-[520px] text-right">
                <p className="text-[28px] leading-[1.2] font-normal" style={{ color: "#500a31", opacity: 0.7 }}>
                  A public-private movement to promote innovation in the city & province of Surigao del Norte, Philippines
                </p>
              </div>
            </div>
          </div>
        </AnimatedHero>

        {/* Scroll Chevron */}
        <div 
          style={{ color: "#500a31" }} 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-70 animate-bounce z-20"
        >
          <ChevronDown size={32} />
        </div>
      </section>

      {/* ===== PRIME SDN FRAMEWORK SECTION ===== */}
      <PrimeFramework />

      {/* ===== VISION SECTION ===== */}
      <section className="bg-white pt-[60px] pb-[120px] px-6" aria-label="Our Vision">
        <div className="max-w-[1400px] mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Small Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-black uppercase tracking-[-3px] leading-[0.9]"
              style={{
                fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif",
                fontSize: "clamp(48px, 8vw, 96px)",
                color: "#500a31",
              }}
            >
              VISION
            </motion.h2>

            {/* Main Statement */}
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="font-extrabold uppercase tracking-[-2px] leading-[0.88] mt-[50px] max-w-[1200px]"
              style={{
                fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif",
                fontSize: "clamp(32px, 5vw, 76px)",
                color: "#500a31",
              }}
            >
              SURIGAO DEL NORTE:{"\n"}
              A THRIVING INNOVATION{"\n"}
              ECOSYSTEM BY 2040.
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-normal leading-[1.25] mt-[50px] max-w-[1300px]"
              style={{
                fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif",
                fontSize: "clamp(18px, 2vw, 28px)",
                color: "#500a31",
              }}
            >
              Through PRIME SDN, the province seeks to nurture an ecosystem that empowers entrepreneurs, strengthens research and talent development, embraces digital transformation, and fosters resilient communities capable of creating lasting economic and social impact.
            </motion.p>

            {/* Primary Button */}
            <Link href="/vision">
              <motion.button
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                whileHover={{ scale: 1.03 }}
                className="mt-[60px] bg-[#111111] text-white font-bold rounded-full px-[42px] py-[18px] flex items-center gap-3 shadow-[0_10px_25px_rgba(0,0,0,0.10)] transition-transform duration-300"
                style={{
                  fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif",
                  fontSize: "clamp(16px, 1.5vw, 20px)",
                }}
              >
                Learn More
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== MISSION SECTION ===== */}
      <section className="bg-white py-[80px] px-6" aria-label="Our Mission">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Column (25%) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-[25%]"
            >
              <h2
                className="leading-[1.05]"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(20px, 3vw, 28px)",
                  fontWeight: 700,
                  color: "#500a31",
                }}
              >
                MISSION
              </h2>
            </motion.div>

            {/* Right Column (75%) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="w-full lg:w-[75%] flex flex-col"
            >
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="mb-8"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                  fontWeight: 700,
                  lineHeight: 0.95,
                  letterSpacing: "-0.015em",
                  color: "#500a31",
                  maxWidth: "900px",
                }}
              >
                S.M.A.R.T. ACTIONS FOR{"\n"}
                INNOVATION EXCELLENCE
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="mb-8"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(16px, 1.8vw, 20px)",
                  fontWeight: 400,
                  lineHeight: 1.35,
                  color: "#500a31",
                  maxWidth: "900px",
                }}
              >
                Strengthening innovation infrastructure, mobilizing resources and partnerships, advancing research and development, reinforcing human capital, and transforming governance for sustainable development.
              </motion.p>

              <Link href="/mission">
                <motion.button
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-[#111111] text-white font-semibold rounded-full px-[42px] py-[18px] flex items-center gap-3 shadow-[0_10px_25px_rgba(0,0,0,0.10)] transition-transform duration-300 w-fit cursor-pointer"
                  style={{
                    fontFamily: "Montserrat, Arial, sans-serif",
                    fontSize: "clamp(16px, 1.5vw, 20px)",
                  }}
                >
                  Explore Mission
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES SECTION ===== */}
      <section className="bg-white py-[80px] px-6" aria-label="Core Values">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Column (25%) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-[25%]"
            >
              <h2
                className="leading-[1.05]"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(20px, 3vw, 28px)",
                  fontWeight: 700,
                  color: "#500a31",
                }}
              >
                CORE VALUES
              </h2>
            </motion.div>

            {/* Right Column (75%) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="w-full lg:w-[75%] flex flex-col"
            >
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="mb-8"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                  fontWeight: 700,
                  lineHeight: 0.95,
                  letterSpacing: "-0.015em",
                  color: "#500a31",
                  maxWidth: "900px",
                }}
              >
                SURIGAONON VALUES
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="mb-8"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(16px, 1.8vw, 20px)",
                  fontWeight: 400,
                  lineHeight: 1.35,
                  color: "#500a31",
                  maxWidth: "900px",
                }}
              >
                Service, Unity, Resilience, Integrity, Growth, Accountability, Opportunity, Nurturing, Optimism, Nationalism - the guiding principles that define our identity and shape our future.
              </motion.p>

              <Link href="/core-values">
                <motion.button
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-[#111111] text-white font-semibold rounded-full px-[42px] py-[18px] flex items-center gap-3 shadow-[0_10px_25px_rgba(0,0,0,0.10)] transition-transform duration-300 w-fit cursor-pointer"
                  style={{
                    fontFamily: "Montserrat, Arial, sans-serif",
                    fontSize: "clamp(16px, 1.5vw, 20px)",
                  }}
                >
                  Explore Core Values
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== STARTUPS SECTION ===== */}
      <section className="bg-white py-[80px] px-6" aria-label="Startups">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Column (25%) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-[25%]"
            >
              <h2
                className="leading-[1.05]"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(20px, 3vw, 28px)",
                  fontWeight: 700,
                  color: "#500a31",
                }}
              >
                STARTUPS
              </h2>
            </motion.div>

            {/* Right Column (75%) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="w-full lg:w-[75%] flex flex-col"
            >
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="mb-8"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                  fontWeight: 700,
                  lineHeight: 0.95,
                  letterSpacing: "-0.015em",
                  color: "#500a31",
                  maxWidth: "900px",
                }}
              >
                BUILDING SURIGAO'S{"\n"}
                INNOVATION ECOSYSTEM
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="mb-8"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(16px, 1.8vw, 20px)",
                  fontWeight: 400,
                  lineHeight: 1.35,
                  color: "#500a31",
                  maxWidth: "900px",
                }}
              >
                Comprehensive support for entrepreneurs through incubation programs, mentorship networks, funding access, and resources to build, scale, and succeed in Surigao del Norte.
              </motion.p>

              <Link href="/startups">
                <motion.button
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-[#111111] text-white font-semibold rounded-full px-[42px] py-[18px] flex items-center gap-3 shadow-[0_10px_25px_rgba(0,0,0,0.10)] transition-transform duration-300 w-fit cursor-pointer"
                  style={{
                    fontFamily: "Montserrat, Arial, sans-serif",
                    fontSize: "clamp(16px, 1.5vw, 20px)",
                  }}
                >
                  Explore Startup Ecosystem
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CINEMATIC VIDEO SECTION ===== */}
      <CinematicVideoSection />

      {/* ===== SSC2040 INTERACTIVE ROADMAP ===== */}
      <SSC2040Roadmap />

      {/* ===== POLICIES BANNER ===== */}
      <section
        className="py-[80px] px-6 bg-white"
        aria-label="Policies"
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Column (25%) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-[25%]"
            >
              <h2
                className="leading-[1.05]"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(20px, 3vw, 28px)",
                  fontWeight: 700,
                  color: "#500a31",
                }}
              >
                POLICIES &{"\n"}GOVERNANCE
              </h2>
            </motion.div>

            {/* Right Column (75%) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="w-full lg:w-[75%] flex flex-col"
            >
              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="mb-8"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                  fontWeight: 700,
                  lineHeight: 0.95,
                  letterSpacing: "-0.015em",
                  color: "#500a31",
                  maxWidth: "900px",
                }}
              >
                POLICIES GUIDING{"\n"}
                THE DEVELOPMENT{"\n"}
                OF PRIME SDN.
              </motion.h2>

              {/* Supporting Text */}
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="mb-8"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(16px, 1.8vw, 20px)",
                  fontWeight: 400,
                  lineHeight: 1.35,
                  color: "#500a31",
                  maxWidth: "900px",
                }}
              >
                Backed by provincial ordinances, executive orders, and strategic frameworks, PRIME SDN advances accountable, transparent, and innovation-driven governance for a resilient Surigao del Norte.
              </motion.p>

              {/* CTA Button */}
              <Link href="/governance">
                <motion.button
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-[#111111] text-white font-semibold rounded-full px-[42px] py-[18px] flex items-center gap-3 shadow-[0_10px_25px_rgba(0,0,0,0.10)] transition-transform duration-300 w-fit cursor-pointer"
                  style={{
                    fontFamily: "Montserrat, Arial, sans-serif",
                    fontSize: "clamp(16px, 1.5vw, 20px)",
                  }}
                >
                  Explore all policies
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== ACTIVITIES PREVIEW ===== */}
      <section className="py-[80px] px-6 bg-white" aria-label="Activities">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start mb-12">
            {/* Left Column (25%) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-[25%]"
            >
              <h2
                className="leading-[1.05]"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(20px, 3vw, 28px)",
                  fontWeight: 700,
                  color: "#500a31",
                }}
              >
                ACTIVITIES
              </h2>
            </motion.div>

            {/* Right Column (75%) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="w-full lg:w-[75%] flex flex-col"
            >
              {/* Large Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="mb-8"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                  fontWeight: 700,
                  lineHeight: 0.95,
                  letterSpacing: "-0.015em",
                  color: "#500a31",
                  maxWidth: "900px",
                }}
              >
                DISCOVER PROGRAMS,{"\n"}
                EVENTS, AND INITIATIVES{"\n"}
                THAT EMPOWER INNOVATION{"\n"}
                AND MEANINGFUL IMPACT.
              </motion.h2>

              {/* Button and Description Row */}
              <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                {/* View All Activities Button */}
                <motion.button
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-[#111111] text-white font-semibold rounded-full px-[42px] py-[18px] flex items-center gap-3 shadow-[0_10px_25px_rgba(0,0,0,0.10)] transition-all duration-300 w-fit cursor-pointer hover:bg-[#4B0F5F]"
                  style={{
                    fontFamily: "Montserrat, Arial, sans-serif",
                    fontSize: "clamp(16px, 1.5vw, 20px)",
                  }}
                >
                  View all activities
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.3 }}
                    className="w-9 h-9 bg-white rounded-full flex items-center justify-center"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </motion.button>

                {/* Supporting Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  style={{
                    fontFamily: "Montserrat, Arial, sans-serif",
                    fontSize: "clamp(16px, 1.8vw, 20px)",
                    fontWeight: 400,
                    lineHeight: 1.35,
                    color: "#500a31",
                    maxWidth: "900px",
                  }}
                >
                  Explore events, innovation programs, startup engagements, and ecosystem milestones that cultivate collaboration, accelerate ideas, and showcase the progress of PRIME SDN across Surigao del Norte.
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Three-Card Layout */}
          {activities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                >
                  <Link href={`/activities/${activity.slug}`} className="block group">
                    <div className="relative overflow-hidden rounded-[18px] mb-4" style={{ height: "320px" }}>
                      {activity.coverImage ? (
                        <Image
                          src={activity.coverImage}
                          alt={activity.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-200">
                          <span className="text-2xl font-bold text-gray-400">Activity Image</span>
                        </div>
                      )}
                      {/* Overlay Gradient */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: "linear-gradient(transparent, rgba(0,0,0,0.35))",
                        }}
                      />
                    </div>
                    <h3
                      className="font-semibold mb-3"
                      style={{
                        fontFamily: "Montserrat, Arial, sans-serif",
                        fontSize: "clamp(18px, 2vw, 24px)",
                        color: "#4B156D",
                      }}
                    >
                      {activity.title}
                    </h3>
                    {/* Card Metadata */}
                    <div className="flex flex-col gap-1 text-sm" style={{ color: "#2D7187" }}>
                      <span className="font-medium">{activity.publishedAt}</span>
                      <span className="font-medium">{activity.pillarTag}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16" style={{ color: "#2D7187" }}>
              <p>Activities coming soon. <Link href="/contact" className="underline" style={{ color: "#4B156D" }}>Get in touch</Link> to learn more.</p>
            </div>
          )}
        </div>
      </section>

      {/* ===== NEWS & INSIGHTS PREVIEW ===== */}
      <section className="py-[80px] px-6 bg-white" aria-label="News and Insights">
        <div className="max-w-[1440px] mx-auto">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
            {/* Left Label */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-[25%]"
            >
              <h2
                className="leading-[1.05]"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(20px, 3vw, 28px)",
                  fontWeight: 700,
                  color: "#500a31",
                }}
              >
                NEWS & INSIGHTS
              </h2>
            </motion.div>

            {/* Right Title */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="w-full lg:w-[75%]"
            >
              <h2
                className="leading-[0.95] uppercase"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                  fontWeight: 700,
                  lineHeight: 0.95,
                  letterSpacing: "-0.015em",
                  color: "#500a31",
                  maxWidth: "900px",
                }}
              >
                STAY UPDATED WITH{"\n"}
                THE LATEST STORIES,{"\n"}
                POLICIES, STARTUP{"\n"}
                MILESTONES, AND{"\n"}
                INNOVATION NEWS.
              </h2>
            </motion.div>
          </div>

          {/* Three-Card Featured News Layout */}
          {news.length > 0 ? (
            <div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
              onMouseEnter={() => setIsHoveringNews(true)}
              onMouseLeave={() => setIsHoveringNews(false)}
            >
              {news.slice(0, 3).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative overflow-hidden rounded-[24px] cursor-pointer group"
                  style={{ 
                    height: "500px",
                    opacity: index === activeNewsIndex ? 1 : 0.6,
                    transition: "opacity 0.5s ease-in-out",
                  }}
                >
                  <Link href={`/news/${post.slug}`} className="block w-full h-full">
                    {/* Background Image */}
                    {post.coverImage ? (
                      <motion.div
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    ) : (
                      <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                        <span className="text-2xl font-bold text-gray-400">News Image</span>
                      </div>
                    )}

                    {/* Bottom Overlay */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(transparent, rgba(0,0,0,0.85))",
                      }}
                    />

                    {/* Card Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      {/* Category Pill */}
                      <span
                        className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3"
                        style={{
                          backgroundColor: "#4B0F5F",
                          fontFamily: "Montserrat, Arial, sans-serif",
                        }}
                      >
                        {post.category}
                      </span>

                      {/* Date & Reading Time */}
                      <div className="flex items-center gap-3 mb-3 text-xs opacity-80" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                        <span>{post.publishedAt}</span>
                        <span>•</span>
                        <span>5 min read</span>
                      </div>

                      {/* Headline */}
                      <h3
                        className="font-semibold mb-4 line-clamp-3 leading-tight"
                        style={{
                          fontFamily: "Montserrat, Arial, sans-serif",
                          fontSize: "clamp(16px, 2vw, 20px)",
                        }}
                      >
                        {post.title}
                      </h3>

                      {/* Explore Story Button */}
                      <div className="flex items-center gap-2 text-sm font-semibold" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                        <span>Explore Story</span>
                        <motion.div
                          whileHover={{ x: 8 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16" style={{ color: "#2D6F88" }}>
              <p>News & insights coming soon.</p>
            </div>
          )}

          {/* Bottom Content Row */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* View All News Button */}
            <motion.button
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              className="bg-[#111111] text-white font-semibold rounded-full px-[42px] py-[18px] flex items-center gap-3 shadow-[0_10px_25px_rgba(0,0,0,0.10)] transition-all duration-300 w-fit cursor-pointer hover:bg-[#4B0F5F]"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(16px, 1.5vw, 20px)",
              }}
            >
              View all news
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ duration: 0.3 }}
                className="w-9 h-9 bg-white rounded-full flex items-center justify-center"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.div>
            </motion.button>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(16px, 1.8vw, 20px)",
                fontWeight: 400,
                lineHeight: 1.35,
                color: "#500a31",
                maxWidth: "900px",
              }}
            >
              Remain informed with updates, announcements, startup achievements, ecosystem partnerships, and innovation initiatives shaping the future of Surigao del Norte.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Join the PRIME Movement">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            {/* Description - Wide Top */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="leading-relaxed mb-12 max-w-5xl mx-auto font-extrabold uppercase tracking-tight"
              style={{ color: "#500a31", opacity: 0.8, fontFamily: "Montserrat, Arial, sans-serif", fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 700 }}
            >
              Join researchers, entrepreneurs, and community leaders building Surigao's innovation ecosystem.
            </motion.p>

            {/* Action Buttons - Narrow Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center max-w-2xl mx-auto"
            >
              <motion.a
                href="/partners"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex-1 text-center py-4 px-10 rounded-full bg-[#500a31] text-white font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-[#500a31] flex items-center justify-center gap-2"
                style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
              >
                Become a Partner
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
