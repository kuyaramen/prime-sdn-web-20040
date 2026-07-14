"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, AnimatedHero } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function NewsClient() {
  const prefersReduced = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");

  const featuredStory = {
    title: "PRIME SDN Launches Provincial Innovation Week 2026",
    category: "Featured",
    author: "PRIME SDN Team",
    date: "January 15, 2026",
    readingTime: "8 min read",
    image: "/images/hero_aerial_surigao_new.jpg",
    summary: "Surigao del Norte's premier innovation event brings together entrepreneurs, researchers, government leaders, and community members to celebrate and accelerate the province's digital transformation journey.",
  };

  const latestNews = [
    {
      title: "Startup Bootcamp Empowers Young Entrepreneurs",
      category: "Programs",
      excerpt: "Intensive 12-week program helps 25 aspiring founders launch their startups with mentorship and funding support.",
      image: "/images/media__1781879352600.jpg",
      date: "January 20, 2026",
      readingTime: "5 min read",
      author: "Maria Santos",
    },
    {
      title: "Surigao del Norte Advances Digital Governance",
      category: "Government",
      excerpt: "Provincial government launches new digital platforms to improve service delivery and citizen engagement.",
      image: "/images/media__1781879354228.png",
      date: "January 18, 2026",
      readingTime: "6 min read",
      author: "John Cruz",
    },
    {
      title: "Research Partnership Strengthens Local Innovation",
      category: "Research",
      excerpt: "SNSU and PRIME SDN sign memorandum of agreement to advance collaborative research projects.",
      image: "/images/media__1781879356225.png",
      date: "January 15, 2026",
      readingTime: "4 min read",
      author: "Dr. Ana Reyes",
    },
    {
      title: "Smart Communities Program Expands Across Municipalities",
      category: "Innovation",
      excerpt: "Five municipalities selected for smart city infrastructure development pilot program.",
      image: "/images/media__1781911485188.png",
      date: "January 12, 2026",
      readingTime: "7 min read",
      author: "Roberto Tan",
    },
  ];

  const todayHighlights = [
    {
      title: "Provincial Innovation Hub Opens Doors to Local Startups",
      category: "Innovation",
      excerpt: "State-of-the-art facility provides workspace, mentorship, and funding opportunities for emerging technology ventures.",
      image: "/images/media__1781879352600.jpg",
      date: "January 22, 2026",
      isLarge: true,
    },
    {
      title: "Digital Literacy Training Reaches 500 Barangay Residents",
      category: "Community",
      excerpt: "Youth-led initiative brings essential digital skills to underserved communities across the province.",
      image: "/images/media__1781879354228.png",
      date: "January 21, 2026",
      isLarge: false,
    },
    {
      title: "SNSU Research Team Wins National Innovation Award",
      category: "Research",
      excerpt: "Breakthrough project on sustainable agriculture receives recognition from the Department of Science and Technology.",
      image: "/images/media__1781879356225.png",
      date: "January 20, 2026",
      isLarge: false,
    },
  ];

  const featuredBlogs = [
    {
      title: "The Future of Digital Transformation in Local Government",
      author: "Tech Insights",
      category: "Digital Government",
      summary: "Exploring how technology is reshaping governance and citizen services in the Philippines.",
 image: "/images/media__1781879352600.jpg",
      readingTime: "10 min read",
    },
    {
      title: "Building a Thriving Startup Ecosystem in the Provinces",
      author: "Startup Weekly",
      category: "Entrepreneurship",
      summary: "Lessons from Surigao del Norte's journey to becoming a startup-friendly province.",
      image: "/images/media__1781879354228.png",
      readingTime: "12 min read",
    },
    {
      title: "Sustainable Innovation: Balancing Growth and Environment",
      author: "Green Tech",
      category: "Sustainability",
      summary: "How innovation can drive economic growth while preserving natural resources.",
      image: "/images/media__1781879356225.png",
      readingTime: "8 min read",
    },
  ];

  const innovationInsights = [
    {
      title: "Innovation Trends to Watch in 2026",
      author: "Dr. Carlos Mendoza",
      role: "Chief Innovation Officer",
      excerpt: "Key technological trends that will shape Surigao del Norte's innovation landscape this year."
    },
    {
      title: "The Startup Ecosystem: From Idea to Scale",
      author: "Sarah Lim",
      role: "Startup Mentor",
      excerpt: "Understanding the journey of building successful startups in provincial settings."
    },
    {
      title: "AI for Local Government: Opportunities and Challenges",
      author: "Engr. Mark Torres",
      role: "Digital Transformation Lead",
      excerpt: "Exploring artificial intelligence applications in municipal governance."
    }
  ];

  const researchPublications = [
    {
      title: "Digital Readiness Assessment of Surigao del Norte SMEs",
      authors: "Dr. Ana Reyes, Prof. John Cruz",
      date: "December 2025",
      abstract: "Comprehensive analysis of digital adoption levels among small and medium enterprises in the province.",
      keywords: ["Digital Transformation", "SMEs", "Assessment"]
    },
    {
      title: "Innovation Ecosystem Mapping: Surigao del Norte Case Study",
      authors: "PRIME SDN Research Team",
      date: "November 2025",
      abstract: "Detailed mapping of innovation actors, networks, and support systems in the province.",
      keywords: ["Ecosystem", "Mapping", "Innovation"]
    },
    {
      title: "Youth Entrepreneurship in the Digital Age",
      authors: "Maria Santos, Roberto Tan",
      date: "October 2025",
      abstract: "Study on youth attitudes and opportunities in digital entrepreneurship.",
      keywords: ["Youth", "Entrepreneurship", "Digital"]
    }
  ];

  const successStories = [
    {
      title: "TechStart Solutions: From Garage to Growth",
      image: "/images/media__1781879352600.jpg",
      story: "How a local startup transformed from a small team to a regional tech company serving 50+ clients.",
      impact: "50+ clients, 30 jobs created"
    },
    {
      title: "Research Commercialization Success",
      image: "/images/media__1781879354228.png",
      story: "SNSU research project on sustainable agriculture now being implemented by 20 local farmers.",
      impact: "20 farmers, increased yields by 40%"
    },
    {
      title: "Community Innovation Champion",
      image: "/images/media__1781879356225.png",
      story: "Youth-led initiative brings digital literacy training to 500 barangay residents.",
      impact: "500 residents trained, 3 community hubs established"
    }
  ];

  const editorsPicks = [
    {
      title: "The Future of Digital Transformation in Local Government",
      category: "Digital Government",
      image: "/images/media__1781879352600.jpg",
      date: "January 15, 2026",
    },
    {
      title: "Building a Thriving Startup Ecosystem in the Provinces",
      category: "Entrepreneurship",
      image: "/images/media__1781879354228.png",
      date: "January 12, 2026",
    },
    {
      title: "Sustainable Innovation: Balancing Growth and Environment",
      category: "Sustainability",
      image: "/images/media__1781879356225.png",
      date: "January 10, 2026",
    },
    {
      title: "AI for Local Government: Opportunities and Challenges",
      category: "Technology",
      image: "/images/media__1781911485188.png",
      date: "January 8, 2026",
    },
  ];

  const categories = ["All", "Innovation", "Government", "Startups", "Research", "Education", "Digital Transformation", "Partnerships", "Community"];

  const filteredNews = activeCategory === "all" 
    ? latestNews 
    : latestNews.filter(news => news.category.toLowerCase() === activeCategory.toLowerCase());

  const searchedNews = searchQuery 
    ? filteredNews.filter(news => 
        news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredNews;

  const displayedNews = searchedNews.slice(0, visibleCount);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[85vh] w-full overflow-hidden bg-white" aria-label="News & Blogs Hero">
        {/* Full-width Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/706317336_1291571619818668_2899914440609868235_n.jpg"
            alt="Premium editorial hero"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>

        {/* Hero Content */}
        <AnimatedHero className="relative z-20 w-full h-full flex flex-col justify-end pb-32 pt-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1440px] mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block font-semibold uppercase tracking-widest text-sm mb-6 text-white"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  letterSpacing: "0.2em"
                }}
              >
                News & Blogs
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="font-extrabold leading-tight mb-6 text-white"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  fontWeight: 700,
                }}
              >
                Stories That Shape the Future of Surigao del Norte
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="font-normal leading-relaxed max-w-2xl mb-10 text-white/90"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(16px, 1.8vw, 18px)",
                }}
              >
                Stay informed with the latest innovation stories, government initiatives, startup milestones, research breakthroughs, community programs, and digital transformation updates across Surigao del Norte.
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
                  className="text-base py-3 px-8 rounded-full bg-white text-[#0A1628] hover:bg-gray-100"
                >
                  Explore Stories
                </Button>
                <Button
                  href="#categories"
                  variant="outline"
                  showArrow={true}
                  className="text-base py-3 px-8 rounded-full border-2 border-white text-white hover:bg-white/10"
                >
                  Browse Categories
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedHero>
      </section>

      {/* ===== FEATURED STORY ===== */}
      <section id="featured" className="bg-white py-[100px] px-6" aria-label="Featured Story">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-5xl mx-auto"
            >
              {/* Large Image on Top */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl mb-8"
              >
                <Image
                  src={featuredStory.image}
                  alt={featuredStory.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/90 text-[#0A1628]" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                    {featuredStory.category}
                  </span>
                </div>
              </motion.div>

              {/* Content Below */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                  className="flex items-center gap-4 text-sm"
                  style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#94A3B8" }}
                >
                  <span>{featuredStory.date}</span>
                  <span>•</span>
                  <span>{featuredStory.readingTime}</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  className="font-extrabold leading-tight"
                  style={{
                    fontFamily: "Montserrat, Arial, sans-serif",
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    fontWeight: 700,
                    color: "#0A1628",
                  }}
                >
                  {featuredStory.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                  className="text-xl leading-relaxed"
                  style={{
                    fontFamily: "Montserrat, Arial, sans-serif",
                    color: "#64748B",
                  }}
                >
                  {featuredStory.summary}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  <Button
                    href="#"
                    variant="primary"
                    showArrow={true}
                    className="text-base py-3 px-8 rounded-full"
                  >
                    Read Full Story
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== TODAY'S HIGHLIGHTS ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Today's Highlights">
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
              Today's Highlights
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
              Latest Updates from Across the Province
            </motion.h2>
          </AnimatedSection>

          {/* Asymmetrical Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Large Story - 65% width */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-8"
            >
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(10, 22, 40, 0.15)" }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_12px 32px rgba(0,0,0,0.08)] border border-gray-100 h-full"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={todayHighlights[0].image}
                    alt={todayHighlights[0].title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-white/90 text-[#0A1628]" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                      {todayHighlights[0].category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <motion.h3 
                    className="font-bold text-2xl mb-3 leading-tight" 
                    style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}
                    whileHover={{ color: "#1E4FBF" }}
                    transition={{ duration: 0.3 }}
                  >
                    {todayHighlights[0].title}
                  </motion.h3>
                  <p className="text-sm mb-4 leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#64748B" }}>
                    {todayHighlights[0].excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#94A3B8" }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {todayHighlights[0].date}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Small Stories Stacked - 35% width */}
            <div className="lg:col-span-4 space-y-6">
              {todayHighlights.slice(1).map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(10, 22, 40, 0.15)" }}
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_12px 32px rgba(0,0,0,0.08)] border border-gray-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-white/90 text-[#0A1628]" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                        {story.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <motion.h3 
                      className="font-bold text-lg mb-2 leading-tight line-clamp-2" 
                      style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}
                      whileHover={{ color: "#1E4FBF" }}
                      transition={{ duration: 0.3 }}
                    >
                      {story.title}
                    </motion.h3>
                    <p className="text-xs mb-3 leading-relaxed line-clamp-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#64748B" }}>
                      {story.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#94A3B8" }}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {story.date}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== EDITOR'S PICKS ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Editor's Picks">
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
              Editor's Picks
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
              Recommended Stories
            </motion.h2>
          </AnimatedSection>

          {/* Horizontal Scrolling Section */}
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {editorsPicks.map((pick, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(10, 22, 40, 0.15)" }}
                className="flex-shrink-0 w-[320px] md:w-[380px] bg-white rounded-2xl overflow-hidden shadow-[0_12px 32px rgba(0,0,0,0.08)] border border-gray-100 snap-start"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={pick.image}
                    alt={pick.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-white/90 text-[#0A1628]" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                      {pick.category}
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
                    {pick.title}
                  </motion.h3>
                  <div className="flex items-center gap-2 text-xs" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#94A3B8" }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {pick.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BROWSE BY CATEGORY ===== */}
      <section id="categories" className="bg-white py-[80px] px-6" aria-label="Browse by Category">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center mb-12">
            <motion.p
              className="font-semibold uppercase tracking-widest text-sm mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                color: "#3B82F6",
                letterSpacing: "0.2em"
              }}
            >
              Browse by Category
            </motion.p>
            <motion.h2
              className="font-extrabold leading-tight max-w-3xl mx-auto"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#0A1628",
              }}
            >
              Find Stories That Interest You
            </motion.h2>
          </AnimatedSection>

          {/* Category Chips */}
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category.toLowerCase())}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.toLowerCase()
                      ? "bg-[#1E4FBF] text-white shadow-lg"
                      : "bg-white text-[#64748B] border border-gray-200 hover:border-[#1E4FBF] hover:text-[#1E4FBF]"
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
        </div>
      </section>

      {/* ===== LATEST ARTICLES ===== */}
      <section id="latest" className="bg-white py-[100px] px-6" aria-label="Latest Articles">
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
              Latest Articles
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
              More Stories from PRIME SDN
            </motion.h2>
          </AnimatedSection>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedNews.map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(10, 22, 40, 0.15)" }}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_12px 32px rgba(0,0,0,0.08)] border border-gray-100 h-full group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-white/90 text-[#0A1628]" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                      {news.category}
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
                    {news.title}
                  </motion.h3>
                  <p className="text-sm mb-4 leading-relaxed line-clamp-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#64748B" }}>
                    {news.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#94A3B8" }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {news.date}
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
          {searchedNews.length > visibleCount && (
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
                Load More Articles
              </motion.button>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* ===== NEWSLETTER / STAY UPDATED ===== */}
      <section className="relative py-[120px] px-6 overflow-hidden" aria-label="Newsletter">
        {/* Soft Blue Mesh Gradient Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(30, 64, 175, 0.05) 50%, rgba(255, 255, 255, 1) 100%)"
          }}
        />
        
        <div className="max-w-[1440px] mx-auto relative z-10">
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
                Stay Updated
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
                Stay Updated with PRIME SDN
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
                Receive the latest innovation news, stories, events, and opportunities from Surigao del Norte.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:border-[#1E4FBF] transition-all duration-300"
                  style={{
                    fontFamily: "Montserrat, Arial, sans-serif",
                    fontSize: "16px",
                    color: "#0A1628",
                  }}
                />
                <Button
                  variant="primary"
                  showArrow={true}
                  className="text-base py-4 px-8 rounded-full whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
