"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, LayoutDashboard } from "lucide-react";
import { EcosystemPillar, ECOSYSTEM_PILLARS } from "../Ecosystem/ecosystemData";

interface RelatedFrameworksSectionProps {
  currentPillar: EcosystemPillar;
}

export default function RelatedFrameworksSection({ currentPillar }: RelatedFrameworksSectionProps) {
  // Get next 3 pillars as related, wrapping around if necessary
  const currentIndex = ECOSYSTEM_PILLARS.findIndex(p => p.id === currentPillar.id);
  const relatedPillars = [];
  for (let i = 1; i <= 3; i++) {
    const nextIndex = (currentIndex + i) % ECOSYSTEM_PILLARS.length;
    relatedPillars.push(ECOSYSTEM_PILLARS[nextIndex]);
  }

  return (
    <section className="bg-slate-900 py-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
              <LayoutDashboard size={16} style={{ color: currentPillar.accentColor }} />
              The PRIME Ecosystem
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Explore Other Pillars
            </h3>
          </div>
          <Link 
            href="/"
            className="px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider text-slate-300 border border-slate-700 hover:bg-slate-800 hover:text-white transition-colors self-start md:self-auto"
          >
            View All Pillars
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedPillars.map((pillar, idx) => (
            <Link key={pillar.id} href={`/${pillar.slug}`}>
              <motion.div
                className="bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-slate-500 transition-colors h-full flex flex-col group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div 
                  className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: pillar.accentColor }}
                >
                  <span className="text-white font-bold text-lg">{pillar.title.charAt(0)}</span>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-slate-200 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {pillar.description}
                </p>

                <div 
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mt-auto"
                  style={{ color: pillar.accentColor }}
                >
                  Explore Pillar <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
