"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useRef } from "react";

interface InvestmentArea {
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const INVESTMENT_AREAS: InvestmentArea[] = [
  {
    category: "AGRICULTURE",
    title: "Agriculture & Fisheries",
    description: "Develop high-value agriculture and food processing industries for export growth.",
    imageSrc: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&h=600&q=80",
    imageAlt: "Lush agribusiness fields in Surigao del Norte"
  },
  {
    category: "TOURISM",
    title: "Tourism",
    description: "World-class island destinations and eco-tourism investments across Surigao.",
    imageSrc: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&h=600&q=80",
    imageAlt: "Immersive beach destination in Surigao"
  },
  {
    category: "GREEN ECONOMY",
    title: "Green Economy",
    description: "Champion sustainable projects and green building standards across communities.",
    imageSrc: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&h=600&q=80",
    imageAlt: "Green sustainable community garden and trees"
  },
  {
    category: "ENERGY",
    title: "Renewable Energy",
    description: "Develop solar, wind, and clean energy infrastructure for sustainable power.",
    imageSrc: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&h=600&q=80",
    imageAlt: "Solar energy farm in Surigao"
  },
  {
    category: "INFRASTRUCTURE",
    title: "Infrastructure",
    description: "Strategic transportation networks and utilities supporting economic growth.",
    imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=600&q=80",
    imageAlt: "Modern infrastructure development"
  },
  {
    category: "HEALTHCARE",
    title: "Healthcare",
    description: "Specialized hospitals and digital health technology networks for communities.",
    imageSrc: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&h=600&q=80",
    imageAlt: "Specialized healthcare laboratory and hospital facilities"
  }
];

const EASE_CURVE = [0.22, 1, 0.36, 1] as const;
const HOVER_EASE = [0.22, 0.61, 0.36, 1] as const;

export default function InvestmentGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="relative w-full select-none"
      aria-label="Strategic Investment Opportunities"
      style={{
        backgroundColor: "#F7F4EF",
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE_CURVE }}
          className="mb-16 text-center"
        >
          {/* Section Label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE_CURVE }}
            className="font-bold uppercase mb-6"
            style={{
              fontSize: "12px",
              letterSpacing: "0.18em",
              fontFamily: "var(--font-body)",
              color: "#1E4FBF"
            }}
          >
            INVESTMENT OPPORTUNITIES
          </motion.p>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE_CURVE }}
            className="font-bold text-[#111111] mb-8 leading-tight"
            style={{
              fontSize: "52px",
              fontFamily: "var(--font-display)"
            }}
          >
            Strategic Investment Areas
          </motion.h2>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE_CURVE }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-[#1E4FBF] font-medium transition-colors duration-300 relative"
              style={{ 
                fontSize: "16px",
                fontFamily: "var(--font-body)" 
              }}
            >
              Explore All Opportunities
              <ArrowRight 
                size={16} 
                className="transform transition-transform duration-300 translate-x-[-4px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100" 
              />
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#1E4FBF] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {INVESTMENT_AREAS.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: prefersReducedMotion ? 0 : 0.3 + (index * 0.08),
                ease: "easeOut"
              }}
              className="group"
            >
              <Link href="/contact" className="block">
                <div 
                  className="relative overflow-hidden bg-white transition-all duration-350 hover:-translate-y-1 hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.06)]"
                  style={{
                    border: "1px solid rgba(15, 23, 42, 0.08)",
                    height: "450px"
                  }}
                >
                  
                  {/* Image - Sharp rectangular edges, ~60% of card height */}
                  <div className="relative w-full overflow-hidden bg-[#F8F9FA]" style={{ height: "240px" }}>
                    <motion.div
                      className="relative w-full h-full"
                      whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
                      transition={{ duration: 1.2, ease: HOVER_EASE }}
                    >
                      <Image
                        src={area.imageSrc}
                        alt={area.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </motion.div>
                  </div>

                  {/* Card Content */}
                  <div className="px-6 pt-5 pb-6">
                    
                    {/* Category Pill - White Badge */}
                    <div className="inline-block mb-4">
                      <span
                        className="inline-block px-3 py-1.5 bg-white text-[#111111] font-bold uppercase"
                        style={{
                          fontSize: "12px",
                          letterSpacing: "0.18em",
                          fontFamily: "var(--font-body)",
                          border: "1px solid rgba(15, 23, 42, 0.08)"
                        }}
                      >
                        {area.category}
                      </span>
                    </div>

                    {/* Investment Title */}
                    <h3
                      className="font-bold text-[#111111] mb-3 leading-tight transition-colors duration-350 group-hover:text-[#1E4FBF]"
                      style={{
                        fontSize: "28px",
                        fontFamily: "var(--font-display)",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                      }}
                    >
                      {area.title}
                    </h3>

                    {/* Description - Max 2 lines */}
                    <p
                      className="text-[#6B7280] font-normal mb-5"
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.6",
                        fontFamily: "var(--font-body)",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                      }}
                    >
                      {area.description}
                    </p>

                    {/* CTA */}
                    <div className="inline-flex items-center gap-2 text-[#6B7280] font-medium transition-colors duration-350 relative group/link">
                      <span style={{ fontSize: "16px", fontFamily: "var(--font-body)" }}>
                        Explore
                      </span>
                      <ArrowRight 
                        size={16} 
                        className="transform transition-transform duration-350 translate-x-0 group-hover/link:translate-x-0.5 group-hover/link:text-[#1E4FBF]" 
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
