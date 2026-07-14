"use client";

import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useRef, useState } from "react";
import Link from "next/link";

const VIDEO_CARDS = [
  {
    id: "featured-1",
    title: "Innovation Ecosystem",
    subtitle: "Building Tomorrow's Technology Hub",
    category: "Innovation",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    duration: "04:25",
    description: "Discover how Surigao del Norte is transforming into a premier innovation district with cutting-edge technology and sustainable development.",
    date: "2024",
    featured: true,
  },
  {
    id: "featured-2",
    title: "Cultural Heritage",
    subtitle: "Preserving Our Rich Traditions",
    category: "Culture",
    thumbnail: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&w=1200&q=80",
    duration: "05:12",
    description: "Experience the vibrant Bonok-Bonok Festival and explore the indigenous crafts, traditions, and culinary heritage of Surigao.",
    date: "2024",
    featured: true,
  },
  {
    id: "supporting-1",
    title: "Coastal Paradise",
    subtitle: "Marine Sanctuaries & Beaches",
    category: "Nature",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    duration: "03:45",
    description: "Explore pristine coastlines, world-class surfing destinations, and diverse marine ecosystems.",
    date: "2024",
    featured: false,
  },
  {
    id: "supporting-2",
    title: "Adventure Awaits",
    subtitle: "Islands & Eco-Tourism",
    category: "Adventure",
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    duration: "04:30",
    description: "Journey through scenic islands, hidden coves, and eco-tourism destinations across the province.",
    date: "2024",
    featured: false,
  },
];

export function CinematicVideoSection() {
  const prefersReduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.25, margin: "0px" });
  
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const featuredCards = VIDEO_CARDS.filter(card => card.featured);
  const supportingCards = VIDEO_CARDS.filter(card => !card.featured);

  return (
    <section 
      ref={sectionRef} 
      className="bg-white relative overflow-hidden"
      style={{
        paddingTop: "140px",
        paddingBottom: "140px",
        paddingLeft: "56px",
        paddingRight: "56px",
      }}
      aria-label="Discover Surigao"
    >
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
          whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ amount: 0.25, margin: "0px" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-0"
        >
          <motion.h2
            initial={prefersReduced ? {} : { opacity: 0, y: 50, scale: 0.98 }}
            whileInView={prefersReduced ? {} : { opacity: 1, y: 0, scale: 1 }}
            viewport={{ amount: 0.25, margin: "0px" }}
            transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-bold leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#5A2396",
            }}
          >
            Adventure Begins Where Beauty Never Ends
          </motion.h2>
        </motion.div>

        {/* Featured Videos Row */}
        <div className="flex flex-col md:flex-row gap-8 mb-8 justify-center" style={{ marginTop: 120 }}>
          {featuredCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={prefersReduced ? {} : { opacity: 0, y: 60, scale: 0.95 }}
              whileInView={prefersReduced ? {} : { opacity: 1, y: 0, scale: 1 }}
              viewport={{ amount: 0.25, margin: "0px" }}
              transition={{ 
                duration: 1.2, 
                delay: prefersReduced ? 0 : 0.75 + index * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ width: "48%" }}
            >
              <Link href="/discover-surigao" className="block">
                <motion.div
                  whileHover={prefersReduced ? {} : { scale: 1.02, y: -8 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="relative rounded-[24px] overflow-hidden cursor-pointer"
                  style={{
                    boxShadow: hoveredCard === card.id
                      ? "0 30px 60px -20px rgba(37,99,235,0.4)"
                      : "0 20px 40px -15px rgba(0,0,0,0.3)",
                    border: `1px solid ${hoveredCard === card.id ? "rgba(56,189,248,0.4)" : "rgba(96,165,250,0.18)"}`,
                  }}
                >
                  {/* Thumbnail */}
                  <div 
                    className="relative"
                    style={{ aspectRatio: "16/10" }}
                  >
                    <motion.img
                      src={card.thumbnail}
                      alt={card.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.08 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ amount: 0.25, margin: "0px" }}
                      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        transform: hoveredCard === card.id ? "scale(1.05)" : "scale(1)",
                      }}
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlay */}
                    <motion.div 
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ amount: 0.25, margin: "0px" }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        background: "linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.55) 50%, transparent 100%)",
                        opacity: hoveredCard === card.id ? 0.9 : 0.85,
                      }}
                    />
                    
                    {/* Play Button */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={hoveredCard === card.id ? { scale: 1.1 } : { scale: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <motion.div
                        className="relative"
                        whileHover={prefersReduced ? {} : { scale: 1.15 }}
                        whileTap={prefersReduced ? {} : { scale: 0.95 }}
                      >
                        {/* Pulse Effect */}
                        {isInView && !prefersReduced && (
                          <>
                            <motion.div
                              className="absolute inset-0 rounded-full bg-white/30"
                              animate={{
                                scale: [1, 1.5, 2],
                                opacity: [0.5, 0.25, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeOut",
                              }}
                              style={{ width: 70, height: 70 }}
                            />
                            <motion.div
                              className="absolute inset-0 rounded-full bg-white/20"
                              animate={{
                                scale: [1, 1.3, 1.6],
                                opacity: [0.35, 0.18, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: 0.5,
                                ease: "easeOut",
                              }}
                              style={{ width: 70, height: 70 }}
                            />
                          </>
                        )}
                        
                        {/* Main Play Button */}
                        <div
                          className="relative w-16 h-16 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg"
                          style={{ boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)" }}
                        >
                          <motion.div
                            animate={hoveredCard === card.id ? { x: 2 } : { x: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          >
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="#2563EB">
                              <path d="M5 3l14 9-14 9V3z" />
                            </svg>
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>


                    {/* Duration Badge */}
                    <motion.div
                      className="absolute bottom-4 right-4 px-3 py-1 rounded-full backdrop-blur-sm"
                      animate={hoveredCard === card.id ? { scale: 1.05 } : { scale: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        background: "rgba(15,23,42,0.8)",
                        border: "1px solid rgba(96,165,250,0.3)",
                      }}
                    >
                      <span className="text-xs font-bold text-white tracking-wider" style={{ fontFamily: "var(--font-body)" }}>
                        {card.duration}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Supporting Videos Row */}
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {supportingCards.map((card, index) => {
            const isLeft = index === 0;
            const initialX = isLeft ? -120 : 120;
            
            return (
              <motion.div
                key={card.id}
                initial={prefersReduced ? {} : { opacity: 0, y: 60, scale: 0.95 }}
                whileInView={prefersReduced ? {} : { opacity: 1, y: 0, scale: 1 }}
                viewport={{ amount: 0.25, margin: "0px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: prefersReduced ? 0 : 0.7 + index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ width: "38%" }}
              >
                <Link href="/discover-surigao" className="block">
                  <motion.div
                    whileHover={prefersReduced ? {} : { scale: 1.02, y: -8 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="relative rounded-[24px] overflow-hidden cursor-pointer"
                    style={{
                      boxShadow: hoveredCard === card.id
                        ? "0 25px 50px -15px rgba(37,99,235,0.35)"
                        : "0 15px 35px -12px rgba(0,0,0,0.25)",
                      border: `1px solid ${hoveredCard === card.id ? "rgba(56,189,248,0.35)" : "rgba(96,165,250,0.15)"}`,
                    }}
                  >
                    {/* Thumbnail */}
                    <div 
                      className="relative"
                      style={{ aspectRatio: "16:10" }}
                    >
                      <motion.img
                        src={card.thumbnail}
                        alt={card.title}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.08 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ amount: 0.25, margin: "0px" }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                          transform: hoveredCard === card.id ? "scale(1.05)" : "scale(1)",
                        }}
                        loading="lazy"
                      />
                      
                      {/* Gradient Overlay */}
                      <motion.div 
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ amount: 0.25, margin: "0px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                          background: "linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.55) 50%, transparent 100%)",
                          opacity: hoveredCard === card.id ? 0.9 : 0.85,
                        }}
                      />
                      
                      {/* Play Button */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={hoveredCard === card.id ? { scale: 1.1 } : { scale: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <motion.div
                          className="relative"
                          whileHover={prefersReduced ? {} : { scale: 1.15 }}
                          whileTap={prefersReduced ? {} : { scale: 0.95 }}
                        >
                          {/* Pulse Effect */}
                          {isInView && !prefersReduced && (
                            <>
                              <motion.div
                                className="absolute inset-0 rounded-full bg-white/30"
                                animate={{
                                  scale: [1, 1.5, 2],
                                  opacity: [0.5, 0.25, 0],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeOut",
                                }}
                                style={{ width: 60, height: 60 }}
                              />
                              <motion.div
                                className="absolute inset-0 rounded-full bg-white/20"
                                animate={{
                                  scale: [1, 1.3, 1.6],
                                  opacity: [0.35, 0.18, 0],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 0.5,
                                  ease: "easeOut",
                                }}
                                style={{ width: 60, height: 60 }}
                              />
                            </>
                          )}
                          
                          {/* Main Play Button */}
                          <div
                            className="relative w-14 h-14 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg"
                            style={{ boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)" }}
                          >
                            <motion.div
                              animate={hoveredCard === card.id ? { x: 2 } : { x: 0 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="#2563EB">
                                <path d="M5 3l14 9-14 9V3z" />
                              </svg>
                            </motion.div>
                          </div>
                        </motion.div>
                      </motion.div>


                      {/* Duration Badge */}
                      <motion.div
                        className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full backdrop-blur-sm"
                        animate={hoveredCard === card.id ? { scale: 1.05 } : { scale: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          background: "rgba(15,23,42,0.8)",
                          border: "1px solid rgba(96,165,250,0.3)",
                        }}
                      >
                        <span className="text-[11px] font-bold text-white tracking-wider" style={{ fontFamily: "var(--font-body)" }}>
                          {card.duration}
                        </span>
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0 }}
          whileInView={prefersReduced ? {} : { opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="text-center mt-12 flex justify-center"
        >
          <Link href="/discover-surigao">
            <motion.button
              whileHover={prefersReduced ? {} : { scale: 1.05 }}
              whileTap={prefersReduced ? {} : { scale: 0.95 }}
              className="mt-[30px] text-white font-bold rounded-full px-[42px] py-[18px] flex items-center gap-3 shadow-[0_10px_25px_rgba(90,35,150,0.25)] transition-all duration-300 w-fit cursor-pointer"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--font-size-body-lg)",
                background: "linear-gradient(135deg, #5A2396 0%, #1E4FBF 100%)",
              }}
            >
              Explore All Videos
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

