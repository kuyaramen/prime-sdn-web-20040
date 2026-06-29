"use client";

import { motion } from "framer-motion";
import { Target, CheckCircle2 } from "lucide-react";
import { EcosystemPillar } from "../Ecosystem/ecosystemData";

interface ObjectivesSectionProps {
  pillar: EcosystemPillar;
}

export default function ObjectivesSection({ pillar }: ObjectivesSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        
        <div className="lg:w-1/3 sticky top-32">
          <div 
            className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center shadow-sm"
            style={{ backgroundColor: `${pillar.accentColor}15` }}
          >
            <Target size={24} style={{ color: pillar.accentColor }} />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight mb-6">
            Strategic Objectives
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            The measurable goals that will drive our vision to reality. Each objective is designed to create lasting impact.
          </p>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {pillar.objectives.map((obj, i) => (
            <motion.div 
              key={i} 
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_4px_15px_rgba(0,0,0,0.02)] group hover:border-slate-200 transition-colors"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4, boxShadow: `0 10px 30px rgba(${pillar.accentColorRgb}, 0.1)` }}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <CheckCircle2 size={24} style={{ color: pillar.accentColor }} className="opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">
                    Objective 0{i + 1}
                  </span>
                  <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
                    {obj}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
