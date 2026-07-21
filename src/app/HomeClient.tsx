"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SSC2040Roadmap from "@/components/sections/SSC2040Roadmap";
import PrimeFramework from "@/components/sections/PrimeFramework";
import InvestmentGrid from "@/components/editorial/InvestmentGrid";
import { Hero } from "@/components/homepage/hero/Hero";

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
  const [isVisionExpanded, setIsVisionExpanded] = useState(false);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <Hero />

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
