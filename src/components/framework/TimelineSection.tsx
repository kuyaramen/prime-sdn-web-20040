"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar } from "lucide-react";
import { EcosystemPillar } from "../Ecosystem/ecosystemData";

interface TimelineSectionProps {
  pillar: EcosystemPillar;
}

export default function TimelineSection({ pillar }: TimelineSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-24 max-w-5xl mx-auto px-6 md:px-12">
      <div className="mb-16">
        <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
          <Calendar size={16} style={{ color: pillar.accentColor }} />
          Implementation Timeline
        </h2>
        <h3 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
          Strategic Target Milestones
        </h3>
      </div>

      <div className="space-y-4">
        {pillar.roadmap.map((item, idx) => {
          const isExpanded = expandedIndex === idx;

          return (
            <motion.div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => toggleExpand(idx)}
            >
              <div className="p-6 md:p-8 flex items-center justify-between gap-4">
                <div className="flex items-center gap-6 md:gap-10">
                  <span 
                    className="text-2xl md:text-4xl font-black tracking-tighter"
                    style={{ color: pillar.accentColor }}
                  >
                    {item.year}
                  </span>
                  <div>
                    <h4 className="text-lg md:text-xl font-extrabold text-slate-800 leading-tight">
                      {item.milestone}
                    </h4>
                  </div>
                </div>
                <div 
                  className={`w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                >
                  <ChevronDown size={20} className="text-slate-400" />
                </div>
              </div>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-slate-50 border-t border-slate-100"
                  >
                    <div className="p-6 md:p-8 ml-[80px] md:ml-[116px]">
                      <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                        Success Target Metrics
                      </span>
                      <p className="text-slate-700 font-bold text-lg">
                        {item.target}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
