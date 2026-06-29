"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

interface Milestone {
  year: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

const roadmapMilestones: Milestone[] = [
  {
    year: "2025",
    title: "Ecosystem Foundation",
    description: "Consolidating regional networks and laying down policy foundations to spark Surigao's digital transformation. Formulating structural frameworks, launching local startup incubators, and signing key bilateral agreements across academia, government, and private industry.",
    image: "/images/media__1781879352600.jpg",
    buttonText: "Explore Full Roadmap",
    buttonLink: "/roadmap",
  },
  {
    year: "2027",
    title: "Digital & Enterprise Integration",
    description: "Integrating smart technologies into local governance, fisheries, and agricultural sectors. Driving the adoption of IoT, cloud computing, and automated workflows while incubating home-grown tech startups to solve local challenges.",
    image: "/images/media__1781879354228.png",
    buttonText: "Explore Full Roadmap",
    buttonLink: "/roadmap",
  },
  {
    year: "2030",
    title: "Creative & Talent Clusters",
    description: "Establishing specialized high-tech education centers, creative labs, and specialized training programs in collaboration with SNSU and CHED. Building a skilled local workforce ready for AI, robotics, and global digital media demands.",
    image: "/images/media__1781879356225.png",
    buttonText: "Explore Full Roadmap",
    buttonLink: "/roadmap",
  },
  {
    year: "2033",
    title: "Infrastructure & Smart Communities",
    description: "Launching smart city infrastructure across Surigao City and critical municipal clusters. Developing community-wide fiber networks, clean energy microgrids, and tech-driven disaster risk management systems.",
    image: "/images/media__1781911485188.png",
    buttonText: "Explore Full Roadmap",
    buttonLink: "/roadmap",
  },
  {
    year: "2040",
    title: "Global Innovation Hub",
    description: "Surigao del Norte stands as a premier self-sustaining global innovation hub in the Philippines. Achieving a thriving digital economy, borderless talent workflows, and zero-carbon smart municipal grids integrated with advanced global tech corridors.",
    image: "/images/hero_aerial_surigao_new.jpg",
    buttonText: "Explore Full Roadmap",
    buttonLink: "/roadmap",
  },
];

export default function SSC2040Roadmap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextMilestone = () => {
    setActiveIndex((prev) => Math.min(prev + 1, roadmapMilestones.length - 1));
  };

  const prevMilestone = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="bg-white py-[100px] px-6" aria-label="Vision 2040 Roadmap">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="font-bold uppercase tracking-wider mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", fontSize: "clamp(20px, 3vw, 28px)", color: "#500a31" }}>
            Vision 2040
          </p>
          <h2 className="font-extrabold uppercase tracking-tight leading-[0.9]" style={{ fontFamily: "Montserrat, Arial, sans-serif", fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 700, color: "#500a31" }}>
            JOURNEY TO A{"\n"}THRIVING INNOVATION{"\n"}ECOSYSTEM
          </h2>
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="relative mb-12">
          {/* Progress Line */}
          <div className="h-1 bg-gray-200 rounded-full max-w-4xl mx-auto mb-8">
            <motion.div
              className="h-full bg-gradient-to-r from-[#500a31] to-[#7C3AED] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(activeIndex / (roadmapMilestones.length - 1)) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>

          {/* Year Indicators */}
          <div className="flex justify-between max-w-4xl mx-auto px-4">
            {roadmapMilestones.map((milestone, idx) => (
              <button
                key={milestone.year}
                onClick={() => setActiveIndex(idx)}
                className="flex flex-col items-center gap-2 cursor-pointer group focus:outline-none"
              >
                <motion.div
                  animate={{
                    scale: idx === activeIndex ? 1.2 : 1,
                    backgroundColor: idx === activeIndex ? "#500a31" : idx < activeIndex ? "#7C3AED" : "#D1D5DB",
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-4 h-4 rounded-full border-2 border-white shadow-md"
                />
                <span
                  className={`text-sm font-bold transition-colors ${
                    idx === activeIndex ? "text-[#500a31]" : idx < activeIndex ? "text-[#7C3AED]" : "text-gray-400"
                  }`}
                  style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
                >
                  {milestone.year}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Milestone Cards */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -50, y: 30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-gradient-to-br from-[#500a31]/5 to-[#7C3AED]/5 rounded-[32px] p-8 md:p-12 border border-[#500a31]/10"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Image */}
                <div className="w-full lg:w-1/2 relative h-[300px] md:h-[400px] rounded-[24px] overflow-hidden shadow-xl">
                  <Image
                    src={roadmapMilestones[activeIndex].image}
                    alt={roadmapMilestones[activeIndex].title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Year Badge */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                    <span className="text-2xl font-black" style={{ color: "#500a31", fontFamily: "Montserrat, Arial, sans-serif" }}>
                      {roadmapMilestones[activeIndex].year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 flex flex-col">
                  <span className="inline-block px-4 py-2 rounded-full text-xs font-bold bg-[#500a31] text-white uppercase tracking-wider mb-4 w-fit">
                    Phase {activeIndex + 1}
                  </span>
                  
                  <h3 className="font-extrabold text-3xl md:text-4xl mb-4 leading-tight" style={{ color: "#500a31", fontFamily: "Montserrat, Arial, sans-serif" }}>
                    {roadmapMilestones[activeIndex].title}
                  </h3>
                  
                  <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: "#500a31", opacity: 0.8, fontFamily: "Montserrat, Arial, sans-serif" }}>
                    {roadmapMilestones[activeIndex].description}
                  </p>

                  <div className="mt-auto">
                    <Button
                      href={roadmapMilestones[activeIndex].buttonLink}
                      variant="black"
                      showArrow={true}
                      className="text-sm md:text-base py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                    >
                      {roadmapMilestones[activeIndex].buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevMilestone}
              disabled={activeIndex === 0}
              className="w-12 h-12 rounded-full bg-white border-2 border-[#500a31] flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#500a31] hover:text-white transition-all duration-300 shadow-md"
              aria-label="Previous milestone"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            
            <button
              onClick={nextMilestone}
              disabled={activeIndex === roadmapMilestones.length - 1}
              className="w-12 h-12 rounded-full bg-white border-2 border-[#500a31] flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#500a31] hover:text-white transition-all duration-300 shadow-md"
              aria-label="Next milestone"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Milestone Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {roadmapMilestones.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? "w-8 bg-[#500a31]" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to milestone ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
