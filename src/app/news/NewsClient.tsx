"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, AnimatedHero, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function NewsClient() {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();
  const scrollX = useTransform(scrollY, [0, 500], [0, 50]);
  const [activeCategory, setActiveCategory] = useState("all");

  const x = prefersReduced ? 0 : scrollX;

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
      excerpt: "Key technological trends that will shape Surigao del Norte's innovation landscape this year.",
    },
    {
      title: "The Startup Ecosystem: From Idea to Scale",
      author: "Sarah Lim",
      role: "Startup Mentor",
      excerpt: "Understanding the journey of building successful startups in provincial settings.",
    },
    {
      title: "AI for Local Government: Opportunities and Challenges",
      author: "Engr. Mark Torres",
      role: "Digital Transformation Lead",
      excerpt: "Exploring artificial intelligence applications in municipal governance.",
    },
  ];

  const researchPublications = [
    {
      title: "Digital Readiness Assessment of Surigao del Norte SMEs",
      authors: "Dr. Ana Reyes, Prof. John Cruz",
      date: "December 2025",
      abstract: "Comprehensive analysis of digital adoption levels among small and medium enterprises in the province.",
      keywords: ["Digital Transformation", "SMEs", "Assessment"],
    },
    {
      title: "Innovation Ecosystem Mapping: Surigao del Norte Case Study",
      authors: "PRIME SDN Research Team",
      date: "November 2025",
      abstract: "Detailed mapping of innovation actors, networks, and support systems in the province.",
      keywords: ["Ecosystem", "Mapping", "Innovation"],
    },
    {
      title: "Youth Entrepreneurship in the Digital Age",
      authors: "Maria Santos, Roberto Tan",
      date: "October 2025",
      abstract: "Study on youth attitudes and opportunities in digital entrepreneurship.",
      keywords: ["Youth", "Entrepreneurship", "Digital"],
    },
  ];

  const successStories = [
    {
      title: "TechStart Solutions: From Garage to Growth",
      image: "/images/media__1781879352600.jpg",
      story: "How a local startup transformed from a small team to a regional tech company serving 50+ clients.",
      impact: "50+ clients, 30 jobs created",
    },
    {
      title: "Research Commercialization Success",
      image: "/images/media__1781879354228.png",
      story: "SNSU research project on sustainable agriculture now being implemented by 20 local farmers.",
      impact: "20 farmers, increased yields by 40%",
    },
    {
      title: "Community Innovation Champion",
      image: "/images/media__1781879356225.png",
      story: "Youth-led initiative brings digital literacy training to 500 barangay residents.",
      impact: "500 residents trained, 3 community hubs established",
    },
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "news", label: "News" },
    { id: "programs", label: "Programs" },
    { id: "research", label: "Research" },
    { id: "innovation", label: "Innovation" },
    { id: "government", label: "Government" },
  ];

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[70vh] w-full overflow-hidden px-10 sm:px-12 md:px-14 lg:px-16 bg-white" aria-label="News & Blogs Hero">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1, x: 0, y: 0 }}
            animate={{
              scale: [1, 1.05, 1],
              x: [0, -10, 0],
              y: [0, -5, 0],
            }}
            transition={{
              duration: 20,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 w-full h-full opacity-25 mix-blend-multiply z-0"
          >
            <Image
              src="/images/hero_aerial_surigao_new.jpg"
              alt="Aerial view of Surigao City"
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
            background: "linear-gradient(135deg, rgba(80, 10, 49, 0.15) 0%, rgba(80, 10, 49, 0.05) 50%, rgba(255, 255, 255, 0.8) 100%)"
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
              <linearGradient id="newsWaveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="50%" stopColor="white" stopOpacity="0.7" />
                <stop offset="100%" stopColor="white" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="url(#newsWaveGradient)"
              opacity="0.9"
            />
          </svg>
        </div>

        {/* Hero Content */}
        <AnimatedHero className="relative z-20 w-full h-full flex flex-col justify-center pt-20 pb-32">
          <div className="max-w-[1440px] mx-auto w-full">
            <motion.div
              style={{ x }}
              className="max-w-4xl"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="font-extrabold uppercase tracking-[-2px] leading-[0.9] mb-6"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  fontWeight: 700,
                  color: "#500a31",
                }}
              >
                STORIES, IDEAS, AND{"\n"}
                INNOVATIONS SHAPING{"\n"}
                THE FUTURE
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="font-normal leading-[1.35] max-w-2xl mb-10"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(16px, 1.8vw, 20px)",
                  color: "#500a31",
                  opacity: 0.8,
                }}
              >
                Discover the latest news, research, insights, and stories driving innovation in Surigao del Norte. From startup successes to research breakthroughs, stay informed about the province's transformation journey.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  href="#featured"
                  variant="maroon"
                  showArrow={true}
                  className="text-base py-3 px-8 rounded-full"
                >
                  Explore Articles
                </Button>
                <Button
                  href="#latest"
                  variant="outline"
                  showArrow={true}
                  className="text-base py-3 px-8 rounded-full border-2 border-[#500a31] text-[#500a31]"
                >
                  Latest News
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
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(80, 10, 49, 0.15)" }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_12px 32px rgba(0,0,0,0.1)] border border-gray-100"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-80 lg:h-auto">
                  <Image
                    src={featuredStory.image}
                    alt={featuredStory.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 rounded-full bg-[#500a31] text-white text-sm font-bold uppercase" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                      {featuredStory.category}
                    </span>
                  </div>
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6 text-sm" style={{ color: "#500a31", opacity: 0.6, fontFamily: "Montserrat, Arial, sans-serif" }}>
                    <span>{featuredStory.author}</span>
                    <span>•</span>
                    <span>{featuredStory.date}</span>
                    <span>•</span>
                    <span>{featuredStory.readingTime}</span>
                  </div>
                  <h2 className="font-extrabold text-3xl mb-4 leading-tight" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", fontWeight: 700 }}>
                    {featuredStory.title}
                  </h2>
                  <p className="text-lg mb-8 leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                    {featuredStory.summary}
                  </p>
                  <Button
                    href="#"
                    variant="maroon"
                    showArrow={true}
                    className="w-fit text-base py-3 px-8 rounded-full"
                  >
                    Read Full Story
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== LATEST NEWS ===== */}
      <section id="latest" className="bg-white py-[100px] px-6" aria-label="Latest News">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#500a31",
              }}
            >
              News
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#500a31",
              }}
            >
              LATEST NEWS
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestNews.map((news, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_8px 24px rgba(0,0,0,0.08)] border border-gray-100 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-[#500a31] text-white text-xs font-bold uppercase" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                        {news.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-3 leading-tight" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                      {news.title}
                    </h3>
                    <p className="text-sm mb-4 leading-relaxed line-clamp-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                      {news.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs mb-4" style={{ color: "#500a31", opacity: 0.6, fontFamily: "Montserrat, Arial, sans-serif" }}>
                      <span>{news.date}</span>
                      <span>{news.readingTime}</span>
                    </div>
                    <div className="text mb-4" style={{ color: "#500a31", opacity: 0.6, fontFamily: "Montserrat, Arial, sans-serif", fontSize: "12px" }}>
                      By {news.author}
                    </div>
                    <Button
                      href="#"
                      variant="outline"
                      showArrow={true}
                      className="w-full text-sm py-2 px-4 rounded-full border-2 border-[#500a31] text-[#500a31]"
                    >
                      Read More
                    </Button>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== FEATURED BLOGS ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Featured Blogs">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#500a31",
              }}
            >
              Insights
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#500a31",
              }}
            >
              FEATURED BLOGS
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBlogs.map((blog, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(80, 10, 49, 0.15)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_8px 24px rgba(0,0,0,0.08)] border border-gray-100 h-full"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-[#500a31]/10 text-[#500a31] text-xs font-bold uppercase" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                        {blog.category}
                      </span>
                      <span className="text-xs" style={{ color: "#500a31", opacity: 0.6, fontFamily: "Montserrat, Arial, sans-serif" }}>
                        {blog.readingTime}
                      </span>
                    </div>
                    <h3 className="font-bold text-xl mb-3 leading-tight" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                      {blog.title}
                    </h3>
                    <p className="text-sm mb-4 leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                      {blog.summary}
                    </p>
                    <div className="text-sm" style={{ color: "#500a31", opacity: 0.6, fontFamily: "Montserrat, Arial, sans-serif" }}>
                      By {blog.author}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== INNOVATION INSIGHTS ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Innovation Insights">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#500a31",
              }}
            >
              Expert Opinion
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#500a31",
              }}
            >
              INNOVATION INSIGHTS
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {innovationInsights.map((insight, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(80, 10, 49, 0.15)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 rounded-2xl p-8 border border-[#500a31]/10 h-full"
                >
                  <h3 className="font-bold text-xl mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                    {insight.title}
                  </h3>
                  <div className="mb-4">
                    <div className="font-bold text-sm" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                      {insight.author}
                    </div>
                    <div className="text-xs" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.6 }}>
                      {insight.role}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                    {insight.excerpt}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== RESEARCH & PUBLICATIONS ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Research & Publications">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#500a31",
              }}
            >
              Research
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#500a31",
              }}
            >
              RESEARCH & PUBLICATIONS
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="space-y-6">
            {researchPublications.map((pub, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ x: 8, boxShadow: "0 10px 30px rgba(80, 10, 49, 0.1)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-r from-[#500a31]/5 to-[#500a31]/10 rounded-2xl p-8 border border-[#500a31]/10"
                >
                  <h3 className="font-bold text-xl mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                    {pub.title}
                  </h3>
                  <div className="flex items-center gap-4 mb-4 text-sm" style={{ color: "#500a31", opacity: 0.6, fontFamily: "Montserrat, Arial, sans-serif" }}>
                    <span>{pub.authors}</span>
                    <span>•</span>
                    <span>{pub.date}</span>
                  </div>
                  <p className="text-sm mb-4 leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                    {pub.abstract}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {pub.keywords.map((keyword, i) => (
                        <span key={i} className="px-2 py-1 rounded-full bg-[#500a31]/10 text-[#500a31] text-xs" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                          {keyword}
                        </span>
                      ))}
                    </div>
                    <Button
                      href="#"
                      variant="outline"
                      showArrow={true}
                      className="text-sm py-2 px-4 rounded-full border-2 border-[#500a31] text-[#500a31]"
                    >
                      Download PDF
                    </Button>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== SUCCESS STORIES ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Success Stories">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#500a31",
              }}
            >
              Impact
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#500a31",
              }}
            >
              SUCCESS STORIES
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(80, 10, 49, 0.2)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#500a31] rounded-2xl overflow-hidden h-full"
                >
                  <div className="relative h-48">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                      {story.title}
                    </h3>
                    <p className="text-sm mb-4 leading-relaxed text-white/80" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                      {story.story}
                    </p>
                    <div className="pt-4 border-t border-white/20">
                      <div className="text-sm font-bold text-white mb-1" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                        Impact
                      </div>
                      <div className="text-sm text-white/70" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                        {story.impact}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== SEARCH & FILTER ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Search & Filter">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#500a31",
              }}
            >
              Discover
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#500a31",
              }}
            >
              SEARCH & FILTER
            </motion.h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 rounded-2xl p-8 border border-[#500a31]/10">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <input
                  type="text"
                  placeholder="Search articles, news, research..."
                  className="flex-1 px-6 py-4 rounded-xl bg-white border border-[#500a31]/20 text-base focus:outline-none focus:border-[#500a31]"
                  style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
                />
                <Button
                  variant="maroon"
                  showArrow={false}
                  className="px-8 py-4 rounded-xl"
                >
                  Search
                </Button>
              </div>

              <div className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-bold uppercase transition-all duration-300 ${
                      activeCategory === cat.id
                        ? "bg-[#500a31] text-white"
                        : "bg-white text-[#500a31] border-2 border-[#500a31]"
                    }`}
                    style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Newsletter">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-gradient-to-br from-[#500a31] to-[#3a0725] rounded-2xl p-12 md:p-16 text-center"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="font-extrabold uppercase tracking-[-2px] leading-[0.9] mb-6 text-white"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                  fontWeight: 700,
                }}
              >
                STAY UPDATED WITH PRIME SDN
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="text-lg mb-8 text-white/80 leading-relaxed max-w-2xl mx-auto"
                style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
              >
                Subscribe to receive the latest news, innovation updates, research publications, upcoming events, and startup opportunities.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/60 text-base focus:outline-none focus:border-white"
                  style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
                />
                <Button
                  variant="white"
                  showArrow={true}
                  className="px-8 py-4 rounded-xl"
                >
                  Subscribe
                </Button>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Call to Action">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="leading-relaxed mb-12 max-w-5xl mx-auto font-extrabold uppercase tracking-tight"
              style={{ color: "#500a31", opacity: 0.8, fontFamily: "Montserrat, Arial, sans-serif", fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 700 }}
            >
              EXPLORE MORE STORIES{"\n"}
              OF INNOVATION
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center max-w-2xl mx-auto"
            >
              <motion.a
                href="#"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex-1 text-center py-4 px-10 rounded-full bg-[#500a31] text-white font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-[#500a31] flex items-center justify-center gap-2"
                style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
              >
                Browse All Articles
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <motion.a
                href="/activities"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex-1 text-center py-4 px-10 rounded-full bg-white text-[#500a31] font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#500a31] flex items-center justify-center gap-2"
                style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
              >
                View Activities
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
