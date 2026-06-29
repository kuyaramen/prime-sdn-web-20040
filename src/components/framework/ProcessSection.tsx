"use client";

import { motion } from "framer-motion";
import { EcosystemPillar } from "../Ecosystem/ecosystemData";

interface ProcessSectionProps {
  pillar: EcosystemPillar;
}

export default function ProcessSection({ pillar }: ProcessSectionProps) {
  return (
    <section className="bg-slate-50 py-32 overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4">
            How It Works
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            The Operational <span style={{ color: pillar.accentColor }}>Workflow</span>
          </h3>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 hidden lg:block" />
          <motion.div 
            className="absolute top-1/2 left-0 h-1 hidden lg:block -translate-y-1/2 rounded-full"
            style={{ backgroundColor: pillar.accentColor }}
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4 relative z-10">
            {pillar.workflow.map((item, idx) => (
              <motion.div
                key={idx}
                className="relative bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] lg:mt-0 flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
                whileHover={{ y: -10 }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center text-xl font-black text-white shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3 lg:absolute lg:-top-8 lg:left-1/2 lg:-translate-x-1/2"
                  style={{ backgroundColor: pillar.accentColor }}
                >
                  {item.step}
                </div>
                
                <h4 className="text-lg font-extrabold text-slate-800 mb-3 mt-4 lg:mt-10">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
