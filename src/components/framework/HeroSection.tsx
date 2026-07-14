"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { EcosystemPillar } from "../Ecosystem/ecosystemData";

interface HeroSectionProps {
  pillar: EcosystemPillar;
}

export default function HeroSection({ pillar }: HeroSectionProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-end overflow-hidden bg-slate-950">
      {/* Background Image with Ken Burns effect and Parallax */}
      <motion.div
        className="absolute inset-0 z-0 origin-center"
        style={{ y, opacity }}
      >
        <Image 
          src="/hero_background.png" 
          alt={pillar.title}
          fill
          priority
          className="object-cover opacity-50 filter grayscale-[10%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pb-24 md:pb-32">
        <motion.div 
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span 
            className="inline-block px-4 py-1.5 text-xs font-black uppercase tracking-widest rounded-full mb-6 text-white shadow-lg"
            style={{ backgroundColor: pillar.accentColor }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            PRIME Framework Pillar
          </motion.span>
          
          <motion.h1
            className="font-extrabold uppercase tracking-tight text-white mb-8 leading-[0.9]"
            style={{ 
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontFamily: "var(--font-display), Inter, system-ui, sans-serif"
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {pillar.title}
          </motion.h1>
          
          <motion.p 
            className="text-slate-300 font-light leading-relaxed max-w-2xl mb-10"
            style={{ fontSize: "clamp(1rem, 1.5vw, 1.5rem)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {pillar.description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button 
              className="px-8 py-4 rounded-full text-sm font-black uppercase tracking-wider text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
              style={{ backgroundColor: pillar.accentColor }}
            >
              {pillar.ctaText}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
