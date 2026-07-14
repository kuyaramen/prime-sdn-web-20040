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
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
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
  const [isVisionExpanded, setIsVisionExpanded] = useState(false);

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
      <section className="relative w-full overflow-hidden px-10 sm:px-12 md:px-14 lg:px-16 bg-white" aria-label="Hero" style={{ height: "calc(100vh - 5rem)", minHeight: "calc(100vh - 5rem)" }}>
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/ChatGPT Image Jul 12, 2026, 08_19_27 PM.png"
            alt="Cinematic aerial view of Surigao del Norte"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "center 120%", filter: "brightness(1.0) contrast(1.1) saturate(0.95)" }}
          />
        </div>
        {/* Atmospheric Fog Overlay: Blue x Gold x White */}
        <div
          className="absolute inset-0 z-10 pointer-events-none mix-blend-screen"
          style={{
            background: "radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.15) 0%, transparent 40%), radial-gradient(circle at 20% 60%, rgba(30, 79, 191, 0.2) 0%, transparent 50%)"
          }}
        />
        
        {/* Soft Gold & Blue Bottom Fog Transition */}
        <div
          className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
          style={{
            height: "60%",
            background: "linear-gradient(to bottom, transparent 0%, rgba(212, 175, 55, 0.05) 20%, rgba(30, 79, 191, 0.08) 40%, rgba(255, 255, 255, 0.6) 65%, #FFFFFF 85%, #FFFFFF 100%)",
            filter: "blur(4px)"
          }}
        />
        
        {/* Clean White Edge Blending */}
        <div
          className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
          style={{
            height: "30%",
            background: "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.9) 40%, #FFFFFF 100%)"
          }}
        />

        {/* Hero Content — Premium Editorial Composition */}
        <AnimatedHero className="relative z-20 w-full h-full flex items-center select-none">
          <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-28">
            {/* Left Column: Title, Partners, CTA */}
            <div className="md:col-span-12 lg:col-span-12 flex flex-col">
              {/* Brand Title — Oversized, Dominant */}
              <div className="leading-none max-w-[750px]" style={{ marginBottom: "32px", marginTop: "40px" }}>
                {/* Row 1: SURIGAO */}
                <motion.h1
                  initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  style={{
                    x: xPrime,
                    background: "linear-gradient(135deg, #081F5C 0%, #1E4FBF 70%, #3B82F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: "clamp(7rem, 11.5vw, 13.5rem)",
                    fontFamily: "Montserrat, Inter, system-ui, -apple-system, sans-serif",
                    fontWeight: "800",
                    lineHeight: "0.85",
                    letterSpacing: "-0.03em",
                    filter: "drop-shadow(0px 8px 24px rgba(30,79,191,0.12))"
                  }}
                  className="mb-2"
                >
                  SURIGAO
                </motion.h1>

                {/* Row 2: PRIME 2040 */}
                <motion.h2
                  initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    x: xSurigao,
                    fontSize: "clamp(6.5rem, 11vw, 13rem)",
                    fontFamily: "Montserrat, Inter, system-ui, -apple-system, sans-serif",
                    fontWeight: "800",
                    lineHeight: "0.85",
                    letterSpacing: "-0.03em",
                  }}
                  className="flex items-center gap-x-5"
                >
                  <span style={{ 
                    background: "linear-gradient(135deg, #081F5C 0%, #1E4FBF 70%, #3B82F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0px 8px 24px rgba(30,79,191,0.12))"
                  }}>PRIME</span>
                  <span
                    className="gold-text-animate"
                    style={{
                      display: "inline-block",
                      fontWeight: "800",
                      fontSize: "clamp(6rem, 10vw, 12.5rem)",
                      letterSpacing: "-0.02em",
                      filter: "drop-shadow(0px 8px 24px rgba(212,175,55,0.2))"
                    }}
                  >
                    2040
                  </span>
                </motion.h2>
              </div>

              {/* Partnership Section — Left-aligned */}
              <div style={{ marginBottom: "40px", marginTop: "40px" }}>
                <div className="flex items-center justify-start gap-3 mb-6">
                  <span className="h-[1px] w-10 bg-current" style={{ color: "#081F5C" }} />
                  <p className="text-xs font-bold uppercase tracking-widest whitespace-nowrap" style={{ color: "#081F5C" }}>
                    In Partnership With
                  </p>
                  <span className="h-[1px] w-10 bg-current" style={{ color: "#081F5C" }} />
                </div>
                <div className="overflow-hidden relative select-none [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] py-4 px-6 rounded-full" style={{ maxWidth: "520px" }}>
                  <motion.div
                    className="flex items-center w-max"
                    animate={{ x: ["0%", "-50%"], y: [0, -2, 0] }}
                    transition={{
                      ease: "linear",
                      duration: 35,
                      repeat: Infinity,
                      y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    {[...Array(4)].map((_, arrayIndex) => (
                      <div key={arrayIndex} className="flex items-center gap-6 pr-6">
                        {[
                          { src: "/images/logos/dost.jpg", label: "DOST" },
                          { src: "/images/logos/dti.jpg", label: "DTI" },
                          { src: "/images/logos/dict.png", label: "DICT" },
                          { src: "/images/logos/ched.png", label: "CHED" },
                          { src: "/images/logos/surigao_del_norte.png", label: "Province of Surigao del Norte" },
                          { src: "/images/logos/tesda_new.jpg", label: "TESDA" },
                          { src: "/images/logos/snsu.jpg", label: "SNSU" },
                        ].map((agency) => (
                          <div
                            key={agency.label}
                            className="group flex items-center justify-center rounded-full hover:scale-105 transition-all duration-300 cursor-default flex-shrink-0"
                            style={{ width: "52px", height: "52px", padding: "6px", boxShadow: "0 2px 8px rgba(0,0,0,0.15)", backgroundColor: "#ffffff" }}
                            title={agency.label}
                          >
                            <Image
                              src={agency.src}
                              alt={agency.label + " logo"}
                              width={32}
                              height={32}
                              className="object-contain transition-all duration-300"
                              style={{ width: "26px", height: "26px" }}
                            />
                          </div>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedHero>

        {/* Description — Bottom-right caption */}
        <div
          className="hidden md:block z-20"
          style={{
            position: "absolute",
            right: "96px",
            bottom: "24px",
            width: "40vw",
            maxWidth: "520px",
            textAlign: "right"
          }}
        >
          <div className="flex items-end justify-end gap-4">
            <p
              className="font-normal"
              style={{
                color: "#081F5C",
                fontSize: "1.35rem",
                lineHeight: "1.6",
                letterSpacing: "0.01em",
                textWrap: "balance",
                paddingBottom: "2px",
                fontFamily: "Inter, system-ui, -apple-system, sans-serif"
              }}
            >
              A public-private movement to promote innovation in the city & province of Surigao del Norte, Philippines
            </p>
          </div>
        </div>
      </section>

      {/* ===== PRIME SDN FRAMEWORK SECTION ===== */}
      <PrimeFramework />

      {/* ===== VISION SECTION (Expandable) ===== */}
      <section className="relative bg-white pt-[60px] pb-[120px] px-6 overflow-hidden" aria-label="Our Vision">
        <div className="relative z-10 max-w-[1400px] mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.25, margin: "0px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
               {/* Section Label */}
               <motion.h2
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ amount: 0.25, margin: "0px" }}
                 transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                 className="font-bold leading-tight"
                 style={{
                   fontFamily: "var(--font-display)",
                   fontSize: "clamp(6rem, 9vw, 8rem)",
                   color: "#081F5C",
                 }}
               >
                 VISION
               </motion.h2>

            {/* Main Statement */}
            <motion.h3
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ amount: 0.25, margin: "0px" }}
              transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="font-bold leading-[1.05] mt-[50px] max-w-[1200px]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 5vw, 4.5rem)",
                fontWeight: "var(--font-weight-bold)",
                color: "#1E4FBF",
              }}
            >
              SURIGAO DEL NORTE:{"\n"}
              A THRIVING INNOVATION{"\n"}
              ECOSYSTEM BY 2040.
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.25, margin: "0px" }}
              transition={{ duration: 1.0, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="font-normal leading-[1.25] mt-[50px] max-w-[1300px]"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--font-size-body-lg)",
                color: "var(--color-text-secondary)",
                letterSpacing: "var(--letter-spacing-body)",
              }}
            >
              Through <span style={{ color: "var(--color-text-brand)", fontWeight: 700 }}>PRIME SDN</span>, the province seeks to nurture an ecosystem that empowers entrepreneurs, strengthens research and talent development, embraces digital transformation, and fosters resilient communities capable of creating lasting economic and social impact.
            </motion.p>

            {/* Expandable Content - Mission, Core Values, Startups */}
            <AnimatePresence>
              {isVisionExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full mt-12 overflow-hidden"
                >
                  {/* Mission Section */}
                  <div className="py-12 border-b border-[#1E4DBF]/10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                      <div className="w-full lg:w-[25%]">
                        <div className="inline-block">
                          <h3
                            className="leading-[1.05]"
                            style={{
                              fontFamily: "var(--font-display)",
                              fontSize: "var(--font-size-heading-2)",
                              fontWeight: "var(--font-weight-bold)",
                              color: "var(--color-text-brand)",
                            }}
                          >
                            MISSION
                          </h3>
                          <div className="w-10 h-0.75 bg-[var(--color-accent-gold)] mt-2 rounded-full" />
                        </div>
                      </div>
                      <div className="w-full lg:w-[75%] flex flex-col">
                        <h3
                          className="mb-4"
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "var(--font-size-heading-1)",
                            fontWeight: "var(--font-weight-bold)",
                            lineHeight: "var(--line-height-heading)",
                            letterSpacing: "var(--letter-spacing-heading)",
                            color: "var(--color-text-primary)",
                          }}
                        >
                          S.M.A.R.T. ACTIONS FOR{"\n"}
                          <span style={{ color: "var(--color-text-brand)" }}>INNOVATION EXCELLENCE</span>
                        </h3>
                        <p
                          className="mb-6"
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "var(--font-size-body-lg)",
                            color: "var(--color-text-secondary)",
                            maxWidth: "900px",
                          }}
                        >
                          Strengthening innovation infrastructure, mobilizing resources and partnerships, advancing research and development, reinforcing human capital, and transforming governance for sustainable development.
                        </p>
                        <Link href="/mission">
                          <button
                            className="bg-[#1E4DB7] hover:bg-[#173C96] text-white font-semibold rounded-full px-[32px] py-[14px] flex items-center gap-2 transition-all duration-300 w-fit cursor-pointer"
                            style={{
                              fontFamily: "var(--font-body)",
                              fontSize: "var(--font-size-button)",
                            }}
                          >
                            Explore Mission
                            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1E4DB7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                              </svg>
                            </div>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Core Values Section */}
                  <div className="py-12 border-b border-[#1E4DBF]/10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                      <div className="w-full lg:w-[25%]">
                        <div className="inline-block">
                          <h3
                            className="leading-[1.05]"
                            style={{
                              fontFamily: "var(--font-display)",
                              fontSize: "var(--font-size-heading-2)",
                              fontWeight: "var(--font-weight-bold)",
                              color: "var(--color-text-brand)",
                            }}
                          >
                            CORE VALUES
                          </h3>
                          <div className="w-10 h-0.75 bg-[var(--color-accent-gold)] mt-2 rounded-full" />
                        </div>
                      </div>
                      <div className="w-full lg:w-[75%] flex flex-col">
                        <h3
                          className="mb-4"
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "var(--font-size-heading-1)",
                            fontWeight: "var(--font-weight-bold)",
                            lineHeight: "var(--line-height-heading)",
                            letterSpacing: "var(--letter-spacing-heading)",
                            color: "var(--color-text-primary)",
                          }}
                        >
                          <span style={{ color: "var(--color-text-brand)" }}>SURIGAONON</span> VALUES
                        </h3>
                        <p
                          className="mb-6"
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "var(--font-size-body-lg)",
                            color: "var(--color-text-secondary)",
                            maxWidth: "900px",
                          }}
                        >
                          Service, Unity, Resilience, Integrity, Growth, Accountability, Opportunity, Nurturing, Optimism, Nationalism - the guiding principles that define our identity and shape our future.
                        </p>
                        <Link href="/core-values">
                          <button
                            className="bg-[#1E4DB7] hover:bg-[#173C96] text-white font-semibold rounded-full px-[32px] py-[14px] flex items-center gap-2 transition-all duration-300 w-fit cursor-pointer"
                            style={{
                              fontFamily: "var(--font-body)",
                              fontSize: "var(--font-size-button)",
                            }}
                          >
                            Explore Core Values
                            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1E4DB7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                              </svg>
                            </div>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

             {/* Toggle Button */}
             <motion.button
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ amount: 0.25, margin: "0px" }}
               transition={{ duration: 1.0, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               onClick={() => setIsVisionExpanded(!isVisionExpanded)}
               className="mt-[30px] text-white font-bold rounded-full px-[42px] py-[18px] flex items-center gap-3 shadow-[0_10px_25px_rgba(90,35,150,0.25)] transition-all duration-300 w-fit cursor-pointer"
               style={{
                 fontFamily: "var(--font-body)",
                 fontSize: "var(--font-size-body-lg)",
                 background: "linear-gradient(135deg, #5A2396 0%, #1E4FBF 100%)",
               }}
             >
               {isVisionExpanded ? "Collapse" : "Explore Vision"}
               <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E4DB7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                   <path d="M5 12h14M12 5l7 7-7 7" />
                 </svg>
               </div>
             </motion.button>
          </motion.div>
        </div>

         {/* Elegant fading divider */}
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-[1px] opacity-20" style={{
           background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.2) 50%, transparent 100%)"
         }} />
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
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--font-size-heading-2)",
                  fontWeight: "var(--font-weight-bold)",
                  color: "#5A2396",
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
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--font-size-heading-1)",
                  fontWeight: "var(--font-weight-bold)",
                  lineHeight: "var(--line-height-heading)",
                  letterSpacing: "var(--letter-spacing-heading)",
                  color: "#1E4FBF",
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
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--font-size-body-lg)",
                  fontWeight: "var(--font-weight-regular)",
                  lineHeight: "var(--line-height-body)",
                  color: "#6B7280",
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-[30px] text-white font-bold rounded-full px-[42px] py-[18px] flex items-center gap-3 shadow-[0_10px_25px_rgba(90,35,150,0.25)] transition-all duration-300 w-fit cursor-pointer"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--font-size-body-lg)",
                    background: "linear-gradient(135deg, #5A2396 0%, #1E4FBF 100%)",
                  }}
                >
                  Explore all policies
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E4DB7" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
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
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--font-size-heading-2)",
                  fontWeight: "var(--font-weight-bold)",
                  color: "#5A2396",
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
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--font-size-heading-1)",
                  fontWeight: "var(--font-weight-bold)",
                  lineHeight: "var(--line-height-heading)",
                  letterSpacing: "var(--letter-spacing-heading)",
                  color: "#1E4FBF",
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-[30px] text-white font-bold rounded-full px-[42px] py-[18px] flex items-center gap-3 shadow-[0_10px_25px_rgba(90,35,150,0.25)] transition-all duration-300 w-fit cursor-pointer"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--font-size-body-lg)",
                    background: "linear-gradient(135deg, #5A2396 0%, #1E4FBF 100%)",
                  }}
                >
                  View all activities
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.3 }}
                    className="w-9 h-9 bg-white rounded-full flex items-center justify-center"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E4DB7" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
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
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--font-size-body-lg)",
                    fontWeight: "var(--font-weight-regular)",
                    lineHeight: "var(--line-height-body)",
                    color: "#6B7280",
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
                        fontFamily: "var(--font-body)",
                        fontSize: "var(--font-size-heading-2)",
                        color: "var(--color-text-primary)",
                      }}
                    >
                      {activity.title}
                    </h3>
                    {/* Card Metadata */}
                    <div className="flex flex-col gap-1 text-sm" style={{ color: "var(--color-text-tertiary)" }}>
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
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--font-size-heading-2)",
                  fontWeight: "var(--font-weight-bold)",
                  color: "#5A2396",
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
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--font-size-heading-1)",
                  fontWeight: "var(--font-weight-bold)",
                  lineHeight: "var(--line-height-heading)",
                  letterSpacing: "var(--letter-spacing-heading)",
                  color: "#1E4FBF",
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
                          backgroundColor: "var(--color-secondary-purple)",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {post.category}
                      </span>

                      {/* Date & Reading Time */}
                      <div className="flex items-center gap-3 mb-3 text-xs opacity-80" style={{ fontFamily: "var(--font-body)" }}>
                        <span>{post.publishedAt}</span>
                        <span>•</span>
                        <span>5 min read</span>
                      </div>

                      {/* Headline */}
                      <h3
                        className="font-semibold mb-4 line-clamp-3 leading-tight"
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "var(--font-size-body)",
                        }}
                      >
                        {post.title}
                      </h3>

                      {/* Explore Story Button */}
                      <div className="flex items-center gap-2 text-sm font-semibold" style={{ fontFamily: "var(--font-body)" }}>
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-[30px] text-white font-bold rounded-full px-[42px] py-[18px] flex items-center gap-3 shadow-[0_10px_25px_rgba(90,35,150,0.25)] transition-all duration-300 w-fit cursor-pointer"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--font-size-body-lg)",
                background: "linear-gradient(135deg, #5A2396 0%, #1E4FBF 100%)",
              }}
            >
              View all news
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ duration: 0.3 }}
                className="w-9 h-9 bg-white rounded-full flex items-center justify-center"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E4DB7" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
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
                fontFamily: "var(--font-body)",
                fontSize: "var(--font-size-body-lg)",
                fontWeight: "var(--font-weight-regular)",
                lineHeight: "var(--line-height-body)",
                color: "#6B7280",
                maxWidth: "900px",
              }}
            >
              Remain informed with updates, announcements, startup achievements, ecosystem partnerships, and innovation initiatives shaping the future of Surigao del Norte.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <section className="bg-white py-20 px-6" aria-label="Join the PRIME Movement">
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
              style={{ color: "#6B7280", fontFamily: "var(--font-display)", fontSize: "var(--font-size-heading-1)", fontWeight: "var(--font-weight-bold)" }}
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
                className="flex-1 text-center py-4 px-10 rounded-full text-white font-bold text-base shadow-[0_10px_25px_rgba(90,35,150,0.25)] transition-all duration-300 flex items-center justify-center gap-2"
                style={{ fontFamily: "var(--font-body)", background: "linear-gradient(135deg, #5A2396 0%, #1E4FBF 100%)" }}
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
                className="flex-1 text-center py-4 px-10 rounded-full text-white font-bold text-base shadow-[0_10px_25px_rgba(90,35,150,0.25)] transition-all duration-300 flex items-center justify-center gap-2"
                style={{ fontFamily: "var(--font-body)", background: "linear-gradient(135deg, #5A2396 0%, #1E4FBF 100%)" }}
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
