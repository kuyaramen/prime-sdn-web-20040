"use client";

import { useState } from "react";
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
import InvestmentGrid from "@/components/editorial/InvestmentGrid";

interface Pillar {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  order: number;
}

interface HomeClientProps {
  pillars: Pillar[];
}

export function HomeClient({ pillars }: HomeClientProps) {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();
  const scrollXPrime = useTransform(scrollY, [0, 800], [0, 150]);
  const scrollXSurigao = useTransform(scrollY, [0, 800], [0, -150]);
  const [isVisionExpanded, setIsVisionExpanded] = useState(false);

  const xPrime = prefersReduced ? 0 : scrollXPrime;
  const xSurigao = prefersReduced ? 0 : scrollXSurigao;


  return (
    <>
      <section className="relative w-full overflow-hidden px-10 sm:px-12 md:px-14 lg:px-16 bg-white" aria-label="Hero" style={{ height: "100vh", minHeight: "100vh" }}>
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/ChatGPT Image Jul 12, 2026, 08_19_27 PM.png"
            alt="Cinematic aerial view of Surigao del Norte"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "center 30%", filter: "brightness(1.0) contrast(1.1) saturate(0.95)" }}
          />
        </div>

        {/* Subtle Editorial Top Scrim */}
        <div 
          className="absolute inset-x-0 top-0 z-10 pointer-events-none"
          style={{
            height: "150px",
            background: "linear-gradient(to bottom, rgba(0, 10, 30, 0.25) 0%, rgba(0, 10, 30, 0) 100%)"
          }}
        />
        
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
          <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-28 mt-[120px]">
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

      {/* ===== STRATEGIC INVESTMENT AREAS GRID ===== */}
      <InvestmentGrid />

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

      {/* ===== SSC2040 INTERACTIVE ROADMAP ===== */}
      <SSC2040Roadmap />


    </>
  );
}
