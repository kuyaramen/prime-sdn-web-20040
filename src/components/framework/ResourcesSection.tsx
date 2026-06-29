"use client";

import { motion } from "framer-motion";
import { FileText, Download, ExternalLink } from "lucide-react";
import { EcosystemPillar } from "../Ecosystem/ecosystemData";

interface ResourcesSectionProps {
  pillar: EcosystemPillar;
}

export default function ResourcesSection({ pillar }: ResourcesSectionProps) {
  return (
    <section className="bg-slate-50 py-24 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
            <FileText size={16} style={{ color: pillar.accentColor }} />
            Regulatory Resources
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Policies & Executive Orders
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillar.policies.map((policy, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_4px_15px_rgba(0,0,0,0.02)] group hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="flex justify-between items-start mb-6">
                <div 
                  className="p-3 rounded-xl"
                  style={{ backgroundColor: `${pillar.accentColor}10` }}
                >
                  <FileText size={24} style={{ color: pillar.accentColor }} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-1 rounded">
                  {policy.year}
                </span>
              </div>
              
              <div className="flex-grow">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                  {policy.type} • {policy.number}
                </div>
                <h4 className="text-lg font-extrabold text-slate-800 leading-snug mb-6">
                  {policy.title}
                </h4>
              </div>

              <div className="flex gap-2 mt-auto">
                <button className="flex-1 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-slate-900 text-white hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                  <Download size={14} /> Download
                </button>
                <button className="w-10 h-10 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors flex items-center justify-center flex-shrink-0">
                  <ExternalLink size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
