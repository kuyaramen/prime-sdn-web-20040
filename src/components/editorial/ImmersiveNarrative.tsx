"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

interface ImmersiveNarrativeProps {
  label: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  linkText?: string;
  linkHref?: string;
  imagePosition?: "left" | "right";
}

export function ImmersiveNarrative({
  label,
  title,
  description,
  imageSrc,
  imageAlt,
  linkText,
  linkHref,
  imagePosition = "left",
}: ImmersiveNarrativeProps) {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const yImage = prefersReduced ? 0 : yParallax;

  return (
    <section ref={containerRef} className="relative w-full bg-white px-6 py-24 md:py-32" aria-label={title}>
      <div className="max-w-[1440px] mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center ${imagePosition === "right" ? "lg:flex-row-reverse" : ""}`}>
          
          {/* Image Block (7 columns) */}
          <div className={`lg:col-span-7 relative ${imagePosition === "right" ? "lg:order-2" : "lg:order-1"}`}>
            <motion.div 
              style={{ y: yImage }}
              className="relative w-full aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-2xl"
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Text Block (4 columns, with a 1 col gap implied by grid spacing) */}
          <div className={`lg:col-span-5 flex flex-col justify-center ${imagePosition === "right" ? "lg:order-1" : "lg:order-2"}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#1E4FBF] mb-6">
                {label}
              </p>
              
              <h3 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight text-[#081F5C] mb-8" style={{ fontFamily: "var(--font-display)" }}>
                {title}
              </h3>
              
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-10 max-w-[65ch]" style={{ fontFamily: "var(--font-body)" }}>
                {description}
              </p>

              {linkText && linkHref && (
                <Link href={linkHref} className="group inline-flex items-center gap-3 text-[#1E4FBF] font-semibold uppercase tracking-wide text-sm">
                  {linkText}
                  <span className="w-8 h-8 rounded-full bg-[#1E4FBF]/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-2 group-hover:bg-[#1E4FBF] group-hover:text-white">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
