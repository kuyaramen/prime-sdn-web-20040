"use client";

import { motion } from "framer-motion";
import { Compass, Sparkles } from "lucide-react";
import { EcosystemPillar } from "../Ecosystem/ecosystemData";

interface OverviewSectionProps {
  pillar: EcosystemPillar;
}

export default function OverviewSection({ pillar }: OverviewSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Mission Card */}
        <motion.div 
          className="bg-white p-10 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div 
            className="absolute -top-12 -right-12 w-40 h-40 rounded-full filter blur-[50px] opacity-20 transition-opacity duration-500 group-hover:opacity-40"
            style={{ backgroundColor: pillar.accentColor }}
          />
          <div className="relative z-10">
            <div 
              className="w-14 h-14 rounded-2xl mb-8 flex items-center justify-center shadow-sm"
              style={{ backgroundColor: `${pillar.accentColor}15` }}
            >
              <Compass size={28} style={{ color: pillar.accentColor }} />
            </div>
            <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4">
              Core Mission
            </h2>
            <p className="text-slate-800 text-xl md:text-2xl leading-relaxed font-medium">
              {pillar.mission}
            </p>
          </div>
        </motion.div>

        {/* Vision Card */}
        <motion.div 
          className="bg-slate-900 text-white p-10 rounded-3xl shadow-xl relative overflow-hidden group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div 
            className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full filter blur-[50px] opacity-20 transition-opacity duration-500 group-hover:opacity-40"
            style={{ backgroundColor: pillar.accentColor }}
          />
          <div className="relative z-10">
            <div 
              className="w-14 h-14 rounded-2xl mb-8 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/10"
            >
              <Sparkles size={28} style={{ color: pillar.accentColor }} />
            </div>
            <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4">
              2040 Vision
            </h2>
            <p className="text-slate-100 text-xl md:text-2xl leading-relaxed font-light">
              {pillar.vision}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
