"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface InvestmentArea {
  title: string;
  description: string;
  ctaText: string;
  imageSrc: string;
  imageAlt: string;
}

const INVESTMENT_AREAS: InvestmentArea[] = [
  {
    title: "Agriculture & Agribusiness",
    description: "Expand agribusiness, fisheries, food processing, and value-chain investments across fertile coastal and agricultural areas.",
    ctaText: "Explore agribusiness opportunities",
    imageSrc: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&h=1600&q=80",
    imageAlt: "Lush agribusiness fields in Surigao del Norte"
  },
  {
    title: "Mineral Processing & Mining Support",
    description: "Support responsible mineral processing, downstream industries, and industrial value creation.",
    ctaText: "Explore mineral processing opportunities",
    imageSrc: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&h=1600&q=80",
    imageAlt: "Mining support and downstream mineral processing facility"
  },
  {
    title: "Tourism & Hospitality",
    description: "World-class island destinations, eco-tourism investments, and hospitality developments across Surigao del Norte.",
    ctaText: "Explore tourism opportunities",
    imageSrc: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&h=1600&q=80",
    imageAlt: "Immersive beach destination in Surigao"
  },
  {
    title: "Renewable Energy",
    description: "Develop solar, wind, and clean energy infrastructure to power the province’s sustainable future.",
    ctaText: "Explore renewable energy opportunities",
    imageSrc: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&h=1600&q=80",
    imageAlt: "Solar energy farm in Surigao"
  },
  {
    title: "Green Projects",
    description: "Champion eco-efficient projects, sustainable materials, and green building standards across local communities.",
    ctaText: "Explore green opportunities",
    imageSrc: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&h=1600&q=80",
    imageAlt: "Green sustainable community garden and trees"
  },
  {
    title: "Property Development",
    description: "Smart residential, commercial, and mixed-use real estate projects in key growth centers.",
    ctaText: "Explore property developments",
    imageSrc: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&h=1600&q=80",
    imageAlt: "Modern real estate property development"
  },
  {
    title: "Industrial Tree Plantation",
    description: "Invest in sustainable forestry, wood processing, and value-added timber industries.",
    ctaText: "Explore timber opportunities",
    imageSrc: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&h=1600&q=80",
    imageAlt: "Sustainable industrial forestry tree plantation"
  },
  {
    title: "Solid Waste & Wastewater",
    description: "Modern municipal waste treatment, recycling facilities, and wastewater sanitation projects.",
    ctaText: "Explore waste solutions",
    imageSrc: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&h=1600&q=80",
    imageAlt: "Eco-friendly municipal recycling and wastewater plant"
  },
  {
    title: "Disaster Prevention Infrastructure",
    description: "Resilient coastal protections, flood mitigation, and early warning systems to secure Surigaonon communities.",
    ctaText: "Explore resilience infrastructure",
    imageSrc: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&h=1600&q=80",
    imageAlt: "Coastal resilience and disaster prevention setup"
  },
  {
    title: "Healthcare Facilities",
    description: "Specialized provincial hospitals, rural health centers, and digital health technology networks.",
    ctaText: "Explore health investments",
    imageSrc: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&h=1600&q=80",
    imageAlt: "Specialized healthcare laboratory and hospital facilities"
  },
  {
    title: "Research & Training",
    description: "R&D laboratories, specialized STEM institutions, and technical skills academies.",
    ctaText: "Explore educational research",
    imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&h=1600&q=80",
    imageAlt: "Modern research laboratory and student training setup"
  },
  {
    title: "Business Process Outsourcing",
    description: "High-value IT parks, BPO hubs, and digital customer support centers powered by local talent.",
    ctaText: "Explore digital service centers",
    imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=1600&q=80",
    imageAlt: "High-tech BPO office setting and digital servers"
  }
];

const EASE_CURVE = [0.22, 1, 0.36, 1] as const;

export default function InvestmentCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isInteracted, setIsInteracted] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const autoRotateTimer = useRef<NodeJS.Timeout | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % INVESTMENT_AREAS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + INVESTMENT_AREAS.length) % INVESTMENT_AREAS.length);
  }, []);

  const handleInteraction = (action: () => void) => {
    setIsInteracted(true);
    action();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handleInteraction(handlePrev);
      } else if (e.key === "ArrowRight") {
        handleInteraction(handleNext);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Autoplay - Every 8 seconds
  useEffect(() => {
    if (prefersReducedMotion || isHovered || isInteracted) {
      if (autoRotateTimer.current) clearInterval(autoRotateTimer.current);
      return;
    }

    autoRotateTimer.current = setInterval(() => {
      handleNext();
    }, 8000);

    return () => {
      if (autoRotateTimer.current) clearInterval(autoRotateTimer.current);
    };
  }, [handleNext, prefersReducedMotion, isHovered, isInteracted]);

  const activeArea = INVESTMENT_AREAS[activeIndex];

  // Touch swipe support
  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStart.current - touchEnd.current > 50) {
      handleInteraction(handleNext);
    }
    if (touchStart.current - touchEnd.current < -50) {
      handleInteraction(handlePrev);
    }
  };

  // Staggered entry choreography delays (seconds)
  const imageDelay = 0;
  const headingDelay = imageDelay + 0.12;      // +120ms
  const leftDescDelay = headingDelay + 0.10;    // +100ms
  const controlsDelay = leftDescDelay + 0.10;   // +100ms
  const rightTitleDelay = controlsDelay + 0.12; // +120ms
  const rightDescDelay = rightTitleDelay + 0.10; // +100ms
  const rightCtaDelay = rightDescDelay + 0.10;   // +100ms

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-white select-none overflow-hidden"
      aria-label="Strategic Investment Areas"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        paddingTop: "170px",
        paddingBottom: "170px",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-[120px]">
        
        {/* Desktop Layout: 3 Columns. Tablet & Mobile: Stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-[96px] items-stretch">
          
          {/* COLUMN 1: LEFT (35% Desktop / lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between min-h-[420px]">
            <div>
              {/* Section Label */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, ease: EASE_CURVE }}
                className="text-[#5F6368] font-bold uppercase mb-[32px]"
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.16em",
                  fontFamily: "var(--font-body)"
                }}
              >
                INVESTMENT AREAS
              </motion.p>

              {/* Large Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: headingDelay, ease: EASE_CURVE }}
                className="font-bold text-[#111111] mb-[32px] leading-[1.05]"
                style={{
                  fontSize: "54px",
                  fontFamily: "var(--font-display)"
                }}
              >
                Strategic{"\n"}Investment{"\n"}Areas
              </motion.h2>

              {/* Short Editorial Description */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: leftDescDelay, ease: EASE_CURVE }}
                className="text-[#5F6368] font-normal leading-[1.9] mb-[40px]"
                style={{
                  fontSize: "20px",
                  maxWidth: "420px",
                  fontFamily: "var(--font-body)"
                }}
              >
                Discover the industries shaping the future of Surigao del Norte through a curated investment showcase inspired by the editorial experience of Visit Singapore.
              </motion.p>
            </div>

            {/* Navigation controls & Slide indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: controlsDelay, ease: EASE_CURVE }}
              className="flex items-center gap-8 mt-6"
            >
              {/* Circular Arrow Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleInteraction(handlePrev)}
                  className="w-12 h-12 rounded-full bg-[#FFFFFF] border border-[#E9ECEF] flex items-center justify-center text-[#111111] transition-all duration-250 hover:bg-[#F1F3F5] hover:scale-[1.03] active:scale-100 cursor-pointer"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft size={20} strokeWidth={1.5} />
                </button>
                <button
                  onClick={() => handleInteraction(handleNext)}
                  className="w-12 h-12 rounded-full bg-[#FFFFFF] border border-[#E9ECEF] flex items-center justify-center text-[#111111] transition-all duration-250 hover:bg-[#F1F3F5] hover:scale-[1.03] active:scale-100 cursor-pointer"
                  aria-label="Next Slide"
                >
                  <ChevronRight size={20} strokeWidth={1.5} />
                </button>
              </div>

              {/* Slide number indicator */}
              <div 
                className="text-[#5F6368] font-medium"
                style={{
                  fontSize: "14px",
                  fontFamily: "var(--font-body)",
                  letterSpacing: "0.1em"
                }}
              >
                <span className="text-[#111111] font-bold">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                {" / "}
                {String(INVESTMENT_AREAS.length).padStart(2, "0")}
              </div>
            </motion.div>
          </div>

          {/* COLUMN 2: CENTER (30% Desktop / lg:col-span-4) - 3:4 aspect portrait image */}
          <div 
            className="lg:col-span-4 flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 1.08 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.9, delay: imageDelay, ease: EASE_CURVE }}
              className="relative w-full aspect-[3/4] overflow-hidden bg-[#F8F9FA] border border-[#E9ECEF] transition-all duration-250"
            >
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.06 }}
                  transition={{
                    duration: 0.9,
                    ease: EASE_CURVE
                  }}
                  className="absolute inset-0 w-full h-full"
                >
                  {/* Subtle active Ken Burns zoom effect */}
                  <motion.div
                    animate={prefersReducedMotion ? {} : { scale: [1, 1.03] }}
                    transition={{
                      duration: 8,
                      ease: "linear",
                      repeat: Infinity,
                      repeatType: "mirror"
                    }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={activeArea.imageSrc}
                      alt={activeArea.imageAlt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 400px"
                      className="object-cover"
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* COLUMN 3: RIGHT (35% Desktop / lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-center min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={{
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0, y: 12, transition: { duration: 0.3 } } // Fade to 0% and translate down 12px over 300ms
                }}
                className="flex flex-col"
              >
                {/* Title */}
                <motion.h3
                  variants={{
                    initial: { opacity: 0, y: 24 },
                    animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: isInView ? rightTitleDelay : 0, ease: EASE_CURVE } }
                  }}
                  className="text-[#111111] mb-[32px] leading-tight"
                  style={{
                    fontSize: "48px",
                    fontWeight: 650,
                    fontFamily: "var(--font-display)"
                  }}
                >
                  {activeArea.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  variants={{
                    initial: { opacity: 0, y: 18 },
                    animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: isInView ? rightDescDelay : 0.1, ease: EASE_CURVE } }
                  }}
                  className="text-[#5F6368] leading-[1.9] mb-[60px]"
                  style={{
                    fontSize: "20px",
                    maxWidth: "420px",
                    fontFamily: "var(--font-body)"
                  }}
                >
                  {activeArea.description}
                </motion.p>

                {/* CTA Link */}
                <motion.div
                  variants={{
                    initial: { opacity: 0, y: 16 },
                    animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: isInView ? rightCtaDelay : 0.2, ease: EASE_CURVE } }
                  }}
                >
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 text-[#18479B] font-medium transition-colors duration-300 relative py-1"
                    style={{ 
                      fontSize: "16px",
                      fontFamily: "var(--font-body)" 
                    }}
                  >
                    <span>{activeArea.ctaText}</span>
                    <ArrowRight 
                      size={16} 
                      className="transform transition-transform duration-300 translate-x-[-4px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100" 
                    />
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#18479B] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
