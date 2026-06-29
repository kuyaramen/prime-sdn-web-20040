"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, AnimatedHero, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function ActivitiesClient() {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();
  const scrollX = useTransform(scrollY, [0, 500], [0, 50]);
  const [activeFilter, setActiveFilter] = useState("all");

  const x = prefersReduced ? 0 : scrollX;

  const featuredActivities = [
    {
      id: 1,
      title: "Startup Bootcamp 2026",
      category: "Program",
      description: "Intensive 12-week program for aspiring entrepreneurs to build and launch their startups.",
      image: "/images/media__1781879352600.jpg",
      date: "January 15 - April 15, 2026",
      location: "Surigao City Innovation Hub",
      status: "Ongoing",
    },
    {
      id: 2,
      title: "Digital Transformation Workshop",
      category: "Training",
      description: "Hands-on workshop on implementing digital solutions for local businesses and government.",
      image: "/images/media__1781879354228.png",
      date: "February 20-22, 2026",
      location: "SNSU Main Campus",
      status: "Upcoming",
    },
    {
      id: 3,
      title: "Research & Innovation Forum",
      category: "Event",
      description: "Annual forum showcasing cutting-edge research from local universities and institutions.",
      image: "/images/media__1781879356225.png",
      date: "March 10, 2026",
      location: "Provincial Convention Center",
      status: "Registration Open",
    },
  ];

  const innovationPrograms = [
    {
      title: "Startup Incubation",
      icon: "🚀",
      description: "Comprehensive support for early-stage startups including mentorship, funding, and resources.",
      objectives: "Nurture 50 startups by 2030",
      participants: "Entrepreneurs, Students",
      outcomes: "Sustainable businesses, job creation",
    },
    {
      title: "Research & Innovation",
      icon: "🔬",
      description: "Funding and support for research projects in technology, agriculture, and marine sciences.",
      objectives: "100 research grants by 2030",
      participants: "Researchers, Academics",
      outcomes: "Published papers, patents, innovations",
    },
    {
      title: "Digital Transformation",
      icon: "💻",
      description: "Modernizing government services and business processes through technology adoption.",
      objectives: "Digital-first governance by 2030",
      participants: "Government, SMEs",
      outcomes: "Efficient services, reduced costs",
    },
    {
      title: "Education & Talent",
      icon: "🎓",
      description: "Building a skilled workforce through specialized training and education programs.",
      objectives: "Train 10,000 professionals by 2030",
      participants: "Students, Professionals",
      outcomes: "Job-ready talent, industry partnerships",
    },
    {
      title: "Smart Communities",
      icon: "🏙️",
      description: "Developing smart city infrastructure and sustainable community solutions.",
      objectives: "5 smart municipalities by 2030",
      participants: "LGUs, Communities",
      outcomes: "Improved quality of life, sustainability",
    },
    {
      title: "Investment Promotion",
      icon: "💰",
      description: "Attracting strategic investments to fuel Surigao's innovation ecosystem.",
      objectives: "₱5B investments by 2030",
      participants: "Investors, Startups",
      outcomes: "Economic growth, job creation",
    },
  ];

  const upcomingEvents = [
    {
      date: "Feb 15, 2026",
      time: "9:00 AM - 5:00 PM",
      venue: "Surigao City Innovation Hub",
      organizer: "PRIME SDN",
      category: "Workshop",
      title: "AI for Local Government Seminar",
      status: "Registration Open",
    },
    {
      date: "Feb 28, 2026",
      time: "10:00 AM - 4:00 PM",
      venue: "SNSU Auditorium",
      organizer: "CHED & PRIME SDN",
      category: "Forum",
      title: "Education Innovation Summit",
      status: "Limited Slots",
    },
    {
      date: "Mar 5, 2026",
      time: "8:00 AM - 6:00 PM",
      venue: "Provincial Capitol",
      organizer: "Provincial Government",
      category: "Conference",
      title: "Sustainable Development Conference",
      status: "Registration Open",
    },
  ];

  const trainings = [
    {
      title: "Technology Business Incubator Orientation",
      instructor: "PRIME SDN Team",
      date: "March 1-2, 2026",
      venue: "Innovation Hub",
      level: "Beginner",
      slots: 25,
    },
    {
      title: "Entrepreneurship Mentorship Program",
      instructor: "Industry Experts",
      date: "March 15 - June 15, 2026",
      venue: "Online & Hybrid",
      level: "Intermediate",
      slots: 50,
    },
    {
      title: "Digital Marketing for SMEs",
      instructor: "Digital Experts",
      date: "April 5-7, 2026",
      venue: "Business Center",
      level: "Beginner",
      slots: 30,
    },
  ];

  const challenges = [
    {
      title: "Surigao Startup Week 2026",
      prize: "₱500,000",
      timeline: "May 2026",
      eligibility: "Open to all",
      objectives: "Launch innovative startups",
    },
    {
      title: "Youth Innovation Challenge",
      prize: "₱200,000",
      timeline: "June 2026",
      eligibility: "Students 18-25",
      objectives: "Youth-led solutions",
    },
    {
      title: "Smart City Hackathon",
      prize: "₱300,000",
     Timeline: "July 2026",
      eligibility: "Developers, Designers",
      objectives: "Smart city solutions",
    },
  ];

  const resources = [
    {
      title: "Program Guidelines 2026",
      type: "PDF",
      size: "2.5 MB",
      description: "Complete guidelines for all PRIME SDN programs.",
    },
    {
      title: "Event Registration Form",
      type: "DOCX",
      size: "156 KB",
      description: "Standard registration form for all activities.",
    },
    {
      title: "Startup Toolkit",
      type: "ZIP",
      size: "15 MB",
      description: "Resources and templates for startup founders.",
    },
    {
      title: "Research Grant Application",
      type: "PDF",
      size: "1.8 MB",
      description: "Application form for research funding.",
    },
  ];

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[70vh] w-full overflow-hidden px-10 sm:px-12 md:px-14 lg:px-16 bg-white" aria-label="Activities Hero">
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
                EMPOWERING INNOVATION{"\n"}
                THROUGH PROGRAMS,{"\n"}
                EVENTS, AND COMMUNITY
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
                Discover programs, events, trainings, and initiatives driving Surigao del Norte's innovation ecosystem. Join a vibrant community of innovators, entrepreneurs, and changemakers.
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
                  Explore Activities
                </Button>
                <Button
                  href="#calendar"
                  variant="outline"
                  showArrow={true}
                  className="text-base py-3 px-8 rounded-full border-2 border-[#500a31] text-[#500a31]"
                >
                  View Calendar
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedHero>
      </section>

      {/* ===== FEATURED ACTIVITIES ===== */}
      <section id="featured" className="bg-white py-[100px] px-6" aria-label="Featured Activities">
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
              Featured
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
              HIGHLIGHTED ACTIVITIES
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredActivities.map((activity) => (
              <StaggerItem key={activity.id}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_24px rgba(0,0,0,0.08)] border border-gray-100 h-full"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-[#500a31] text-white text-xs font-bold uppercase" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                        {activity.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#500a31] text-xs font-bold uppercase" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                        {activity.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                      {activity.title}
                    </h3>
                    <p className="text-sm mb-4 leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                      {activity.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm" style={{ color: "#500a31", opacity: 0.6, fontFamily: "Montserrat, Arial, sans-serif" }}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {activity.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm" style={{ color: "#500a31", opacity: 0.6, fontFamily: "Montserrat, Arial, sans-serif" }}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {activity.location}
                      </div>
                    </div>
                    <Button
                      href="#"
                      variant="outline"
                      showArrow={true}
                      className="w-full text-sm py-2 px-6 rounded-full border-2 border-[#500a31] text-[#500a31]"
                    >
                      Learn More
                    </Button>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== INNOVATION PROGRAMS ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Innovation Programs">
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
              Our Programs
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
              INNOVATION PROGRAMS
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {innovationPrograms.map((program, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(80, 10, 49, 0.15)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 rounded-2xl p-8 border border-[#500a31]/10 h-full"
                >
                  <div className="text-4xl mb-4">{program.icon}</div>
                  <h3 className="font-bold text-xl mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                    {program.title}
                  </h3>
                  <p className="text-sm mb-4 leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                    {program.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="text-xs" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.6 }}>
                      <span className="font-bold">Objectives:</span> {program.objectives}
                    </div>
                    <div className="text-xs" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.6 }}>
                      <span className="font-bold">Participants:</span> {program.participants}
                    </div>
                    <div className="text-xs" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.6 }}>
                      <span className="font-bold">Outcomes:</span> {program.outcomes}
                    </div>
                  </div>
                  <Button
                    href="#"
                    variant="maroon"
                    showArrow={true}
                    className="w-full text-sm py-2 px-6 rounded-full"
                  >
                    Explore Program
                  </Button>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== UPCOMING EVENTS ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Upcoming Events">
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
              Events
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
              UPCOMING EVENTS
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ x: 8, boxShadow: "0 10px 30px rgba(80, 10, 49, 0.1)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-r from-[#500a31]/5 to-[#500a31]/10 rounded-2xl p-8 border border-[#500a31]/10 flex flex-col md:flex-row gap-6 items-start"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-[#500a31] text-white text-xs font-bold uppercase" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                        {event.category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#500a31] text-xs font-bold uppercase" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                        {event.status}
                      </span>
                    </div>
                    <h3 className="font-bold text-xl mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                      {event.title}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm" style={{ color: "#500a31", opacity: 0.6, fontFamily: "Montserrat, Arial, sans-serif" }}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm" style={{ color: "#500a31", opacity: 0.6, fontFamily: "Montserrat, Arial, sans-serif" }}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-sm" style={{ color: "#500a31", opacity: 0.6, fontFamily: "Montserrat, Arial, sans-serif" }}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.venue}
                      </div>
                      <div className="text-sm" style={{ color: "#500a31", opacity: 0.6, fontFamily: "Montserrat, Arial, sans-serif" }}>
                        <span className="font-bold">Organizer:</span> {event.organizer}
                      </div>
                    </div>
                  </div>
                  <Button
                    href="#"
                    variant="maroon"
                    showArrow={true}
                    className="text-sm py-2 px-6 rounded-full whitespace-nowrap"
                  >
                    Register
                  </Button>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== TRAININGS & WORKSHOPS ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Trainings & Workshops">
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
              Learning
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
              TRAININGS & WORKSHOPS
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trainings.map((training, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-6 shadow-[0_8px 24px rgba(0,0,0,0.08)] border border-gray-100 h-full"
                >
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#500a31]/10 text-[#500a31] text-xs font-bold uppercase mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                      {training.level}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                    {training.title}
                  </h3>
                  <div className="space-y-2 mb-4 text-sm" style={{ color: "#500a31", opacity: 0.6, fontFamily: "Montserrat, Arial, sans-serif" }}>
                    <div><span className="font-bold">Instructor:</span> {training.instructor}</div>
                    <div><span className="font-bold">Date:</span> {training.date}</div>
                    <div><span className="font-bold">Venue:</span> {training.venue}</div>
                    <div><span className="font-bold">Slots:</span> {training.slots} available</div>
                  </div>
                  <Button
                    href="#"
                    variant="maroon"
                    showArrow={true}
                    className="w-full text-sm py-2 px-6 rounded-full"
                  >
                    Register
                  </Button>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== INNOVATION CHALLENGES ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Innovation Challenges">
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
              Competitions
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
              INNOVATION CHALLENGES
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(80, 10, 49, 0.2)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#500a31] rounded-2xl p-8 text-center h-full"
                >
                  <div className="text-5xl mb-4">🏆</div>
                  <h3 className="font-bold text-xl mb-4 text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                    {challenge.title}
                  </h3>
                  <div className="space-y-2 mb-6 text-sm text-white/80" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                    <div><span className="font-bold text-white">Prize:</span> {challenge.prize}</div>
                    <div><span className="font-bold text-white">Timeline:</span> {challenge.timeline}</div>
                    <div><span className="font-bold text-white">Eligibility:</span> {challenge.eligibility}</div>
                    <div><span className="font-bold text-white">Objectives:</span> {challenge.objectives}</div>
                  </div>
                  <Button
                    href="#"
                    variant="white"
                    showArrow={true}
                    className="w-full text-sm py-2 px-6 rounded-full"
                  >
                    Apply Now
                  </Button>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== COMMUNITY ENGAGEMENT ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Community Engagement">
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
              Outreach
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
              COMMUNITY ENGAGEMENT
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Barangays Reached", value: "20" },
              { label: "Schools Partnered", value: "15" },
              { label: "Youth Engaged", value: "5,000+" },
              { label: "Community Projects", value: "50+" },
            ].map((stat, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 rounded-2xl p-8 border border-[#500a31]/10 text-center"
                >
                  <div className="text-4xl font-bold mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                    {stat.value}
                  </div>
                  <div className="text-sm" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                    {stat.label}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== RESOURCES & DOWNLOADS ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Resources & Downloads">
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
              Resources
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
              DOWNLOADS & MATERIALS
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(80, 10, 49, 0.15)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 rounded-2xl p-6 border border-[#500a31]/10 h-full"
                >
                  <div className="w-12 h-12 rounded-full bg-[#500a31] flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-base mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                    {resource.title}
                  </h3>
                  <p className="text-xs mb-4 leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between text-xs mb-4" style={{ color: "#500a31", opacity: 0.6, fontFamily: "Montserrat, Arial, sans-serif" }}>
                    <span>{resource.type}</span>
                    <span>{resource.size}</span>
                  </div>
                  <Button
                    href="#"
                    variant="outline"
                    showArrow={true}
                    className="w-full text-sm py-2 px-4 rounded-full border-2 border-[#500a31] text-[#500a31]"
                  >
                    Download
                  </Button>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== GET INVOLVED CTA ===== */}
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
              BECOME PART OF{"\n"}
              SURIGAO DEL NORTE'S{"\n"}
              INNOVATION JOURNEY
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
                Register for an Event
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <motion.a
                href="#"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex-1 text-center py-4 px-10 rounded-full bg-white text-[#500a31] font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#500a31] flex items-center justify-center gap-2"
                style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
              >
                Explore Programs
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
