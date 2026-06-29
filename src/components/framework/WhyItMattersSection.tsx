"use client";

import { motion } from "framer-motion";
import { EcosystemPillar } from "../Ecosystem/ecosystemData";

interface WhyItMattersSectionProps {
  pillar: EcosystemPillar;
}

export default function WhyItMattersSection({ pillar }: WhyItMattersSectionProps) {
  return (
    <section className="bg-slate-50 py-24 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4">
            Why This Framework Matters
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            The Context for <span style={{ color: pillar.accentColor }}>Transformation</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillar.whyItMatters.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(0,0,0,0.06)" }}
            >
              <div 
                className="text-xs font-black uppercase tracking-widest mb-6 px-3 py-1 inline-block rounded self-start"
                style={{ 
                  backgroundColor: `${pillar.accentColor}15`,
                  color: pillar.accentColor 
                }}
              >
                {item.type}
              </div>
              <h4 className="text-xl font-extrabold text-slate-800 mb-4 leading-snug">
                {item.title}
              </h4>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed flex-grow">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
