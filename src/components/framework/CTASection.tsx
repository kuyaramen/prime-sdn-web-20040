"use client";

import { motion } from "framer-motion";
import { EcosystemPillar } from "../Ecosystem/ecosystemData";

interface CTASectionProps {
  pillar: EcosystemPillar;
}

export default function CTASection({ pillar }: CTASectionProps) {
  return (
    <section className="py-32 bg-slate-50 overflow-hidden relative">
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ 
          background: `radial-gradient(circle at 50% 100%, ${pillar.accentColor} 0%, transparent 60%)` 
        }}
      />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-3xl p-10 md:p-16 border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.05)] relative overflow-hidden group"
        >
          <div 
            className="absolute -top-32 -left-32 w-64 h-64 rounded-full filter blur-[80px] opacity-20 pointer-events-none transition-opacity duration-700 group-hover:opacity-40"
            style={{ backgroundColor: pillar.accentColor }}
          />
          <div 
            className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full filter blur-[80px] opacity-20 pointer-events-none transition-opacity duration-700 group-hover:opacity-40"
            style={{ backgroundColor: pillar.accentColor }}
          />

          <h2 
            className="text-4xl md:text-6xl font-black tracking-tight text-slate-800 uppercase mb-6 leading-tight relative z-10"
            style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
          >
            Ready to explore the <br />
            <span style={{ color: pillar.accentColor }}>{pillar.title}</span> Framework?
          </h2>
          
          <p className="text-slate-500 max-w-xl mx-auto text-base md:text-lg leading-relaxed mb-10 relative z-10 font-medium">
            Join us in building the future of Surigao del Norte. Access the full strategic roadmap, or contact the provincial secretariat to participate.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button 
              className="px-8 py-4 rounded-full text-sm font-black uppercase tracking-wider text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
              style={{ backgroundColor: pillar.accentColor }}
            >
              {pillar.ctaText}
            </button>
            
            <button className="px-8 py-4 rounded-full text-sm font-black uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors shadow-sm">
              Contact Secretariat
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
