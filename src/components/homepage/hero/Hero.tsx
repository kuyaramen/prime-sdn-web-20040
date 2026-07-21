"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  AnimatedHero,
} from "@/components/ui/AnimatedSection";

export function Hero() {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();
  const scrollXPrime = useTransform(scrollY, [0, 800], [0, 150]);
  const scrollXSurigao = useTransform(scrollY, [0, 800], [0, -150]);

  const xPrime = prefersReduced ? 0 : scrollXPrime;
  const xSurigao = prefersReduced ? 0 : scrollXSurigao;

  return (
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
  );
}
