"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { EcosystemPillar } from "../Ecosystem/ecosystemData";

interface ImpactStatsSectionProps {
  pillar: EcosystemPillar;
}

const AnimatedCounter = ({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, once: true });

  useEffect(() => {
    if (inView) {
      let startTimestamp: number;
      const duration = 2000; // 2 seconds

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeProgress * value));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(value);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default function ImpactStatsSection({ pillar }: ImpactStatsSectionProps) {
  return (
    <section className="bg-slate-950 py-24 text-white relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ 
          background: `radial-gradient(circle at center, ${pillar.accentColor} 0%, transparent 70%)` 
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-slate-800/50">
          {pillar.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div 
                className="text-4xl md:text-6xl font-black tracking-tighter mb-4"
                style={{ color: pillar.accentColor }}
              >
                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400 leading-snug">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
