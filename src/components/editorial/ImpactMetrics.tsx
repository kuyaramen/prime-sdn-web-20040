"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Metric {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

interface ImpactMetricsProps {
  label: string;
  metrics: Metric[];
}

function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      let startTime: number | null = null;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // easeOutExpo curve
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setDisplayValue(Math.floor(easeProgress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(end);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
}

export function ImpactMetrics({ label, metrics }: ImpactMetricsProps) {
  return (
    <section className="relative w-full bg-[#040D26] px-6 py-32 md:py-48" aria-label="Impact Metrics">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xs font-bold tracking-[0.2em] uppercase text-[#AABCEB] mb-20 text-center"
        >
          {label}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8 w-full">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              className="flex flex-col items-center text-center"
            >
              <h4 
                className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tighter" 
                style={{ fontFamily: "var(--font-display)" }}
              >
                <Counter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
              </h4>
              <p 
                className="text-sm md:text-base text-[#AABCEB] uppercase tracking-widest font-bold max-w-[200px]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
