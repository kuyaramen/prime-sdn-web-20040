"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import Link from "next/link";

const DESTINATIONS = [
  {
    id: "culture",
    title: "Culture",
    subtitle: "Rooted in Heritage",
    description: "Surigao del Norte's rich cultural heritage blends indigenous traditions, Spanish colonial influences, and modern Filipino identity, celebrated through festivals, crafts, and cuisine.",
    thumbnail: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&w=800&q=80",
    duration: "02:15",
    highlights: ["Bonok-Bonok Festival", "Indigenous Crafts", "Local Cuisine"],
  },
  {
    id: "innovation-district",
    title: "Innovation District",
    subtitle: "Building the Future",
    description: "The emerging innovation hub of Surigao del Norte, where technology, entrepreneurship, and sustainable development converge to create opportunities for the next generation.",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    duration: "02:15",
    highlights: ["Tech Startups", "Research Centers", "Sustainable Projects"],
  },
  {
    id: "coastal-life",
    title: "Coastal Life",
    subtitle: "Where Nature Thrives",
    description: "With over 270 kilometers of coastline, Surigao del Norte's marine ecosystems support diverse fishing communities, coral reefs, and mangrove forests vital to ecological balance.",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    duration: "02:15",
    highlights: ["Marine Sanctuaries", "Fishing Communities", "Coral Reefs"],
  },
];

const PROVINCE_STATS = [
  { label: "Municipalities", value: "20", description: "Local government units" },
  { label: "Population", value: "485K", description: "Growing community" },
  { label: "Coastline", value: "270km", description: "Marine resources" },
  { label: "Islands", value: "27", description: "Scenic destinations" },
];

export function CinematicVideoSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-white py-[100px] px-6" aria-label="Discover Surigao">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
          whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row gap-12 items-start mb-16"
        >
          {/* Left Column - Content */}
          <div className="w-full lg:w-[40%] flex flex-col">
            {/* Editorial Heading */}
            <motion.h2
              initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
              whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] mb-6"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#500a31",
              }}
            >
              EXPERIENCE THE NATURAL{"\n"}
              WONDERS, CULTURE,{"\n"}
              AND INNOVATIVE SPIRIT{"\n"}
              OF SURIGAO DEL NORTE.
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
              whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="font-normal leading-[1.35] max-w-[620px] mb-8"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(16px, 1.8vw, 20px)",
                color: "#500a31",
              }}
            >
              Located in the Caraga region of Mindanao, Surigao del Norte is a province blessed with pristine natural landscapes, rich cultural heritage, and a growing innovation ecosystem. From world-class surfing destinations to emerging technology hubs, the province offers unique opportunities for tourism, investment, and sustainable development.
            </motion.p>

            {/* CTA Button */}
            <Link href="/discover-surigao">
              <motion.button
                initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
                whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.03 }}
                className="bg-[#111111] text-white font-bold rounded-full px-[42px] py-[18px] flex items-center gap-3 shadow-[0_10px_25px_rgba(0,0,0,0.10)] transition-transform duration-300 w-fit cursor-pointer"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(16px, 1.5vw, 20px)",
                }}
              >
                Explore Province
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.button>
            </Link>
          </div>

          {/* Right Column - Province Statistics */}
          <div className="w-full lg:w-[60%]">
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
              whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
            >
              {PROVINCE_STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
                  whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.6,
                    delay: prefersReduced ? 0 : index * 0.1,
                    ease: "easeOut",
                  }}
                  className="bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 rounded-2xl p-6 border border-[#500a31]/10"
                >
                  <p className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "#500a31", fontFamily: "Montserrat, Arial, sans-serif" }}>
                    {stat.value}
                  </p>
                  <p className="text-sm font-semibold mb-1" style={{ color: "#500a31", fontFamily: "Montserrat, Arial, sans-serif" }}>
                    {stat.label}
                  </p>
                  <p className="text-xs" style={{ color: "#500a31", opacity: 0.7, fontFamily: "Montserrat, Arial, sans-serif" }}>
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Video Cards Grid - Below Province Statistics */}
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
              whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {DESTINATIONS.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
                  whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.6,
                    delay: prefersReduced ? 0 : index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={prefersReduced ? {} : { y: -4 }}
                  className="group relative rounded-[16px] overflow-hidden bg-white shadow-[0_8px_24px rgba(0,0,0,0.06)] transition-all duration-300 ease-out border border-gray-100"
                >
                  {/* Image */}
                  <div className="relative h-[140px] overflow-hidden">
                    <img
                      src={destination.thumbnail}
                      alt={`${destination.title} - ${destination.subtitle}`}
                      className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Video Badge */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48]" />
                      <span className="text-[10px] font-bold text-black tracking-wider">VIDEO</span>
                    </div>
                    
                    {/* Duration Badge */}
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full">
                      <span className="text-[10px] font-bold text-white tracking-wider">{destination.duration}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3
                      className="font-bold text-base mb-0.5"
                      style={{ color: "#500a31", fontFamily: "Montserrat, Arial, sans-serif" }}
                    >
                      {destination.title}
                    </h3>
                    <p className="text-xs font-semibold mb-2" style={{ color: "#500a31", opacity: 0.7, fontFamily: "Montserrat, Arial, sans-serif" }}>
                      {destination.subtitle}
                    </p>
                    <p className="text-xs leading-relaxed mb-3 line-clamp-2" style={{ color: "#500a31", opacity: 0.8, fontFamily: "Montserrat, Arial, sans-serif" }}>
                      {destination.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-1.5">
                      {destination.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                          style={{
                            backgroundColor: "#500a31",
                            color: "white",
                            fontFamily: "Montserrat, Arial, sans-serif",
                          }}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
