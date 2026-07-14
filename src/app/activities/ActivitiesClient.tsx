"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, AnimatedHero } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function ActivitiesClient() {
  const prefersReduced = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const featuredActivity = {
    id: 1,
    title: "Startup Bootcamp 2026",
    category: "Program",
    description: "Intensive 12-week program for aspiring entrepreneurs to build and launch their startups with comprehensive mentorship, funding opportunities, and access to a network of industry experts and investors.",
    image: "/514695335_1032434945732338_6111306649684435036_n.jpg",
    date: "January 15 - April 15, 2026",
    location: "Surigao City Innovation Hub",
    status: "Ongoing",
  };

  const activities = [
    {
      id: 1,
      title: "Startup Bootcamp 2026",
      category: "Program",
      description: "Intensive 12-week program for aspiring entrepreneurs to build and launch their startups.",
      image: "/images/media__1781879352600.jpg",
      date: "January 15 - April 15, 2026",
    },
    {
      id: 2,
      title: "Digital Transformation Workshop",
      category: "Training",
      description: "Hands-on workshop on implementing digital solutions for local businesses and government.",
      image: "/images/media__1781879354228.png",
      date: "February 20-22, 2026",
    },
    {
      id: 3,
      title: "Research & Innovation Forum",
      category: "Event",
      description: "Annual forum showcasing cutting-edge research from local universities and institutions.",
      image: "/images/media__1781879356225.png",
      date: "March 10, 2026",
    },
    {
      id: 4,
      title: "AI for Local Government Seminar",
      category: "Workshop",
      description: "Seminar on implementing AI solutions for local government operations.",
      image: "/images/hero_aerial_surigao_new.jpg",
      date: "February 15, 2026",
    },
    {
      id: 5,
      title: "Education Innovation Summit",
      category: "Forum",
      description: "Summit on innovative approaches to education and learning.",
      image: "/images/media__1781911485188.png",
      date: "February 28, 2026",
    },
    {
      id: 6,
      title: "Sustainable Development Conference",
      category: "Conference",
      description: "Conference on sustainable development practices and initiatives.",
      image: "/images/media__1781879352600.jpg",
      date: "March 5, 2026",
    },
    {
      id: 7,
      title: "Technology Business Incubator Orientation",
      category: "Training",
      description: "Orientation program for technology business incubator participants.",
      image: "/images/media__1781879354228.png",
      date: "March 1-2, 2026",
    },
    {
      id: 8,
      title: "Entrepreneurship Mentorship Program",
      category: "Program",
      description: "Mentorship program connecting entrepreneurs with industry experts.",
      image: "/images/media__1781879356225.png",
      date: "March 15 - June 15, 2026",
    },
  ];

  const categories = ["All", "Workshops", "Seminars", "Training", "Innovation", "Community", "Research", "Technology"];

  const filteredActivities = activeFilter === "all" 
    ? activities 
    : activities.filter(activity => activity.category.toLowerCase() === activeFilter.toLowerCase());

  const displayedActivities = filteredActivities.slice(0, visibleCount);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[70vh] w-full overflow-hidden px-10 sm:px-12 md:px-14 lg:px-16 bg-white" aria-label="Activities Hero">
        {/* Background Image Layer - Premium Editorial Collage */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1, x: 0, y: 0 }}
            animate={{
              scale: [1, 1.03, 1],
              x: [0, -5, 0],
              y: [0, -3, 0],
            }}
            transition={{
              duration: 25,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 w-full h-full opacity-30 mix-blend-multiply z-0"
          >
            <Image
              src="/706317336_1291571619818668_2899914440609868235_n.jpg"
              alt="Innovation workshop and collaboration"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Gradient Overlay Layer */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none" 
          style={{
            background: "linear-gradient(135deg, rgba(30, 58, 138, 0.15) 0%, rgba(251, 191, 36, 0.1) 50%, rgba(255, 255, 255, 0.85) 100%)"
          }}
        />

        {/* Bottom wave brush mask transition */}
        <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none">
          <svg
            className="w-full h-32 md:h-48"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="activitiesWaveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="50%" stopColor="white" stopOpacity="0.7" />
                <stop offset="100%" stopColor="white" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="url(#activitiesWaveGradient)"
              opacity="0.9"
            />
          </svg>
        </div>

        {/* Hero Content */}
        <AnimatedHero className="relative z-20 w-full h-full flex flex-col justify-center pt-20 pb-32">
          <div className="max-w-[1440px] mx-auto w-full">
            <div className="max-w-4xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block font-semibold uppercase tracking-widest text-sm mb-6"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  color: "#3B82F6",
                  letterSpacing: "0.2em"
                }}
              >
                ACTIVITIES
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="font-extrabold leading-tight mb-6"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  fontWeight: 700,
                  color: "#183B8C",
                }}
              >
                Discover Activities Driving Innovation Across Surigao del Norte
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="font-normal leading-relaxed max-w-[650px] mb-10"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(16px, 1.8vw, 18px)",
                  color: "#475569",
                }}
              >
                Explore workshops, seminars, conferences, innovation programs, community engagements, and technology events shaping the future of Surigao del Norte.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  href="#featured"
                  variant="primary"
                  showArrow={true}
                  className="text-base py-3 px-8 rounded-full"
                >
                  Explore Activities
                </Button>
                <Button
                  href="#calendar"
                  variant="outline"
                  showArrow={true}
                  className="text-base py-3 px-8 rounded-full border-2 border-[#183B8C] text-[#183B8C]"
                >
                  View Calendar
                </Button>
              </motion.div>
            </div>
          </div>
        </AnimatedHero>
      </section>

      {/* ===== FEATURED ACTIVITY ===== */}
      <section id="featured" className="bg-white py-[120px] px-6" aria-label="Featured Activity">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Large Editorial Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={featuredActivity.image}
                  alt={featuredActivity.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>

              {/* Content */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                >
                  <span className="inline-block px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "Montserrat, Arial, sans-serif", backgroundColor: "#EAF2FF", color: "#1E4FBF" }}>
                    {featuredActivity.category}
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  className="font-extrabold leading-tight"
                  style={{
                    fontFamily: "Montserrat, Arial, sans-serif",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 700,
                    color: "#0A1628",
                  }}
                >
                  {featuredActivity.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                  className="text-lg leading-relaxed"
                  style={{
                    fontFamily: "Montserrat, Arial, sans-serif",
                    color: "#64748B",
                  }}
                >
                  {featuredActivity.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                  className="flex items-center gap-6 text-sm"
                  style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#94A3B8" }}
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {featuredActivity.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {featuredActivity.location}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                >
                  <Button
                    href="#"
                    variant="primary"
                    showArrow={true}
                    className="text-base py-3 px-8 rounded-full"
                  >
                    Read More
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== ACTIVITIES GRID ===== */}
      <section id="activities" className="bg-white py-[100px] px-6" aria-label="Activities Grid">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-12">
            <motion.p
              className="font-semibold uppercase tracking-widest text-sm mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                color: "#3B82F6",
                letterSpacing: "0.2em"
              }}
            >
              All Activities
            </motion.p>
            <motion.h2
              className="font-extrabold leading-tight max-w-3xl"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#0A1628",
              }}
            >
              Explore More Activities
            </motion.h2>
          </AnimatedSection>

          {/* Pill Filters */}
          <AnimatedSection className="mb-12">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveFilter(category.toLowerCase())}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === category.toLowerCase()
                      ? "bg-[#1E4FBF] text-white shadow-lg"
                      : "bg-white text-[#64748B] border border-gray-200 hover:border-[#1E4FBF]"
                  }`}
                  style={{
                    fontFamily: "Montserrat, Arial, sans-serif",
                  }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </AnimatedSection>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(10, 22, 40, 0.15)" }}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_12px 32px rgba(0,0,0,0.08)] border border-gray-100 h-full group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide" style={{ fontFamily: "Montserrat, Arial, sans-serif", backgroundColor: "#EAF2FF", color: "#1E4FBF" }}>
                      {activity.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <motion.h3 
                    className="font-bold text-lg mb-3 leading-tight line-clamp-2" 
                    style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}
                    whileHover={{ color: "#1E4FBF" }}
                    transition={{ duration: 0.3 }}
                  >
                    {activity.title}
                  </motion.h3>
                  <p className="text-sm mb-4 leading-relaxed line-clamp-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#64748B" }}>
                    {activity.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#94A3B8" }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {activity.date}
                  </div>
                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300"
                    style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1E4FBF" }}
                    whileHover={{ x: 4 }}
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {filteredActivities.length > visibleCount && (
            <AnimatedSection className="text-center">
              <motion.button
                onClick={() => setVisibleCount(prev => prev + 6)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full border-2 border-[#1E4FBF] text-[#1E4FBF] font-medium transition-all duration-300 hover:bg-[#1E4FBF] hover:text-white"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                }}
              >
                Load More Activities
              </motion.button>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* ===== GET INVOLVED CTA ===== */}
      <section className="bg-white py-[120px] px-6" aria-label="Call to Action">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl mx-auto"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="font-semibold uppercase tracking-widest text-sm mb-6"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  color: "#3B82F6",
                  letterSpacing: "0.2em"
                }}
              >
                Get Involved
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="font-extrabold leading-tight mb-6"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                  fontWeight: 700,
                  color: "#0A1628",
                }}
              >
                Become Part of{"\n"}
                Surigao del Norte's{"\n"}
                Innovation Journey
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="text-lg leading-relaxed mb-10"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  color: "#64748B",
                }}
              >
                Whether you're a student, entrepreneur, researcher, or community member, there's a place for you in our innovation ecosystem.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  href="#"
                  variant="primary"
                  showArrow={true}
                  className="text-base py-3 px-8 rounded-full"
                >
                  Register for an Event
                </Button>
                <Button
                  href="#"
                  variant="outline"
                  showArrow={true}
                  className="text-base py-3 px-8 rounded-full border-2 border-[#0A1628] text-[#0A1628]"
                >
                  Explore Programs
                </Button>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
