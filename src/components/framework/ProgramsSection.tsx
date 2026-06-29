"use client";

import { motion } from "framer-motion";
import { Briefcase, ArrowUpRight } from "lucide-react";
import { EcosystemPillar } from "../Ecosystem/ecosystemData";

interface ProgramsSectionProps {
  pillar: EcosystemPillar;
}

export default function ProgramsSection({ pillar }: ProgramsSectionProps) {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
              <Briefcase size={16} style={{ color: pillar.accentColor }} />
              Programs & Initiatives
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Actionable Pathways
            </h3>
          </div>
          <button 
            className="px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 transition-colors self-start md:self-auto"
          >
            View All Programs
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillar.programs.map((program, idx) => (
            <motion.div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 group hover:border-slate-700 transition-colors relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div 
                className="absolute top-0 left-0 w-full h-1"
                style={{ backgroundColor: pillar.accentColor }}
              />
              
              <div className="flex justify-between items-start mb-8">
                <span 
                  className="px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded bg-slate-800"
                  style={{ color: pillar.accentColor }}
                >
                  {program.type}
                </span>
                <div 
                  className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0"
                >
                  <ArrowUpRight size={14} className="text-white" />
                </div>
              </div>

              <h4 className="text-xl font-bold text-white mb-4 leading-snug">
                {program.title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {program.description}
              </p>

              <div className="border-t border-slate-800 pt-4 mt-auto">
                <span className="text-xs font-bold text-slate-500 hover:text-white transition-colors cursor-pointer flex items-center gap-2 w-max">
                  Learn more
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
