"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ArrivalProps {
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  partners?: { src: string; label: string }[];
}

export function Arrival({
  titleLine1,
  titleLine2,
  subtitle,
  imageSrc,
  imageAlt,
  partners,
}: ArrivalProps) {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();
  
  // Subtle parallax for typography
  const scrollX1 = useTransform(scrollY, [0, 800], [0, 100]);
  const scrollX2 = useTransform(scrollY, [0, 800], [0, -100]);
  
  const x1 = prefersReduced ? 0 : scrollX1;
  const x2 = prefersReduced ? 0 : scrollX2;

  return (
    <section className="relative w-full overflow-hidden bg-[#040D26]" style={{ height: "100vh", minHeight: "100vh" }} aria-label="Arrival">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full relative"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            className="object-cover"
            style={{ filter: "brightness(0.9) contrast(1.05)" }}
          />
        </motion.div>
      </div>

      {/* Atmospheric Overlay for Legibility & Drama */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(4, 13, 38, 0.9) 0%, rgba(4, 13, 38, 0.4) 40%, transparent 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-20 w-full h-full max-w-[1600px] mx-auto px-6 sm:px-12 flex flex-col justify-end pb-24 md:pb-32 select-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Main Title Area (Spans left) */}
          <div className="lg:col-span-8">
            <div className="leading-none flex flex-col gap-2">
              <motion.h1
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                style={{ x: x1, fontFamily: "var(--font-display)" }}
                className="text-white font-bold text-[clamp(4.5rem,10vw,11rem)] tracking-[-0.03em] drop-shadow-2xl"
              >
                {titleLine1}
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ x: x2, fontFamily: "var(--font-display)" }}
                className="text-white font-bold text-[clamp(4rem,9vw,10.5rem)] tracking-[-0.03em] drop-shadow-2xl flex items-center gap-6"
              >
                <span className="text-[#AABCEB]">{titleLine2.split(' ')[0]}</span>
                <span className="text-white">{titleLine2.split(' ').slice(1).join(' ')}</span>
              </motion.h2>
            </div>
            
            {/* Partners (if provided) */}
            {partners && partners.length > 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="mt-12 hidden md:block"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#AABCEB] mb-4">In Partnership With</p>
                <div className="flex gap-4">
                  {partners.map((p, i) => (
                    <div key={i} className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center p-2 border border-white/20">
                      <Image src={p.src} alt={p.label} width={24} height={24} className="object-contain filter brightness-0 invert opacity-80" />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Subtitle Area (Spans right) */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="text-white/90 text-xl md:text-2xl font-light leading-relaxed max-w-[420px] lg:text-right text-balance"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {subtitle}
            </motion.p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
