"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { EcosystemPillar } from "../Ecosystem/ecosystemData";

interface StakeholdersSectionProps {
  pillar: EcosystemPillar;
}

export default function StakeholdersSection({ pillar }: StakeholdersSectionProps) {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center justify-center gap-2">
            <Users size={16} style={{ color: pillar.accentColor }} />
            Stakeholders & Partners
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            The Collaborative Ecosystem
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillar.partners.map((partner, idx) => (
            <motion.div
              key={idx}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center gap-4 hover:bg-white hover:border-slate-200 hover:shadow-lg transition-all cursor-pointer group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-sm"
                style={{ backgroundColor: pillar.accentColor }}
              >
                {partner.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-extrabold text-slate-800 text-sm leading-tight mb-1 group-hover:text-slate-950 transition-colors">
                  {partner.name}
                </h4>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  {partner.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
