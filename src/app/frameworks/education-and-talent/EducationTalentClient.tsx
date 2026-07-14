"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, AnimatedHero, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Award,
  Building2,
  FlaskConical,
  Trophy,
  Users,
  Briefcase,
  Star,
  Calendar,
  Search,
  Filter,
  ChevronRight,
  Clock,
  MapPin,
  ExternalLink,
  Mail,
  Phone,
} from "lucide-react";
import {
  learningPrograms,
  scholarships,
  universities,
  courses,
  laboratories,
  competitions,
  mentors,
  careers,
  successStories,
  events,
} from "@/lib/education-data";

export function EducationTalentClient() {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();
  const scrollX = useTransform(scrollY, [0, 500], [0, 50]);
  const [activeSection, setActiveSection] = useState("programs");

  const x = prefersReduced ? 0 : scrollX;

  // Generate deterministic particle positions
  const particlePositions = Array.from({ length: 20 }, (_, i) => ({
    x: ((i * 37) % 100) + "%",
    y: ((i * 53) % 100) + "%",
    delay: (i * 0.3) % 5,
    duration: 5 + ((i * 7) % 5),
  }));

  const navigationSections = [
    { id: "programs", label: "Learning Programs" },
    { id: "scholarships", label: "Scholarships" },
    { id: "universities", label: "Universities" },
    { id: "skills", label: "Skills Academy" },
    { id: "laboratories", label: "Laboratories" },
    { id: "competitions", label: "Competitions" },
    { id: "mentors", label: "Mentors" },
    { id: "careers", label: "Careers" },
    { id: "stories", label: "Success Stories" },
    { id: "events", label: "Events" },
  ];

  // Hero collage images (using placeholders for now)
  const heroImages = [
    "🎓",
    "💻",
    "🏫",
    "🤖",
    "🔬",
    "⚙️",
    "🧪",
    "🎓",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Photo Collage Background */}
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-0 opacity-30">
          {heroImages.map((emoji, i) => (
            <div
              key={i}
              className="flex items-center justify-center text-9xl bg-gradient-to-br from-blue-100 to-blue-200"
              style={{
                animation: `float ${5 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            >
              {emoji}
            </div>
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2F6B]/90 via-[#1A2F6B]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-amber-100/30 to-transparent" />

        {/* Particles */}
        {!prefersReduced && (
          <div className="absolute inset-0 pointer-events-none">
            {particlePositions.map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/30 rounded-full"
                style={{ left: pos.x, top: pos.y }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: pos.duration,
                  delay: pos.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 pt-20 pb-32">
          <AnimatedHero>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-bold uppercase tracking-wider mb-8"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(48px, 8vw, 72px)",
                color: "#5E7CE2",
              }}
            >
              EDUCATION & TALENT
            </motion.p>

            <h1
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] mb-8 text-white"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(2rem, 4vw, 4rem)",
                fontWeight: 700,
              }}
            >
              Building Future-Ready{"\n"}Innovators for{"\n"}Surigao del Norte
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-xl md:text-2xl text-white/90 max-w-3xl mb-12 leading-relaxed"
              style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
            >
              Empowering students, educators, researchers, and professionals through world-class education, innovation, digital skills, research collaboration, and industry partnerships.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/education-talent/learning-programs">
                <Button
                  variant="primary"
                  className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#1E4FBF] hover:bg-[#1E4FBF]/90 transition-all"
                >
                  <BookOpen className="w-5 h-5" />
                  Explore Learning Programs
                </Button>
              </Link>
              <Link href="/education-talent/scholarships">
                <Button
                  variant="outline"
                  className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white/10 transition-all"
                >
                  <Award className="w-5 h-5" />
                  Find Scholarships
                </Button>
              </Link>
            </motion.div>
          </AnimatedHero>
        </div>
      </section>

      {/* ===== STICKY NAVIGATION ===== */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {navigationSections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap"
                style={{
                  background: activeSection === section.id
                    ? "linear-gradient(135deg, #1E4FBF 0%, #2563EB 100%)"
                    : "white",
                  color: activeSection === section.id ? "white" : "#5E7CE2",
                  borderRadius: "9999px",
                }}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ===== LEARNING PROGRAMS ===== */}
      <section id="programs" className="py-20 px-6 bg-gradient-to-br from-white to-[#F8FAFF]">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(32px, 5vw, 48px)",
                color: "#5E7CE2",
              }}
            >
              Learning Programs
            </motion.p>
            <h2
              className="font-extrabold text-3xl md:text-4xl mb-4"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}
            >
              Discover Your Path
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6B7280" }}>
              Explore our comprehensive learning programs designed to equip you with cutting-edge skills for the future.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPrograms.slice(0, 8).map((program) => (
              <StaggerItem key={program.slug}>
                <Link href={`/education-talent/learning-programs/${program.slug}`}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-2xl p-6 border transition-all duration-300 cursor-pointer h-full"
                    style={{
                      background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)",
                      borderColor: "#E5E7EB",
                      boxShadow: "0 20px 50px rgba(17,24,39,0.08)",
                    }}
                  >
                    <div className="text-5xl mb-4">{program.icon}</div>
                    <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                      {program.title}
                    </h3>
                    <p className="text-sm mb-4" style={{ color: "#6B7280", lineHeight: 1.6 }}>
                      {program.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#3565D9" }}>
                      Learn More
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center mt-12">
            <Link href="/education-talent/learning-programs">
              <Button
                variant="outline"
                className="px-8 py-3 rounded-full border-2 border-[#3565D9] text-[#3565D9] hover:bg-[#3565D9] hover:text-white transition-all"
              >
                View All Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SCHOLARSHIPS ===== */}
      <section id="scholarships" className="py-20 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(32px, 5vw, 48px)",
                color: "#5E7CE2",
              }}
            >
              Scholarship Directory
            </motion.p>
            <h2
              className="font-extrabold text-3xl md:text-4xl mb-4"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}
            >
              Fund Your Education
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6B7280" }}>
              Discover scholarship opportunities from government agencies, private institutions, and international organizations.
            </p>
          </AnimatedSection>

          <div className="mb-8 flex flex-wrap gap-4 justify-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search scholarships..."
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3565D9] w-64"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-all">
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scholarships.slice(0, 6).map((scholarship) => (
              <StaggerItem key={scholarship.slug}>
                <Link href={`/education-talent/scholarships/${scholarship.slug}`}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-2xl p-6 border transition-all duration-300 cursor-pointer h-full"
                    style={{
                      background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)",
                      borderColor: "#E5E7EB",
                      boxShadow: "0 20px 50px rgba(17,24,39,0.08)",
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                          {scholarship.title}
                        </h3>
                        <p className="text-sm" style={{ color: "#5E7CE2" }}>{scholarship.sponsor}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#EAF2FF", color: "#3565D9" }}>
                        {scholarship.category}
                      </span>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm" style={{ color: "#6B7280" }}>
                        <Clock className="w-4 h-4" />
                        Deadline: {scholarship.deadline}
                      </div>
                      <div className="flex items-center gap-2 text-sm" style={{ color: "#6B7280" }}>
                        <Award className="w-4 h-4" />
                        {scholarship.coverage}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full py-2 rounded-full border-2 border-[#3565D9] text-[#3565D9] hover:bg-[#3565D9] hover:text-white transition-all"
                    >
                      Apply Now
                    </Button>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center mt-12">
            <Link href="/education-talent/scholarships">
              <Button
                variant="outline"
                className="px-8 py-3 rounded-full border-2 border-[#3565D9] text-[#3565D9] hover:bg-[#3565D9] hover:text-white transition-all"
              >
                View All Scholarships
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== UNIVERSITIES ===== */}
      <section id="universities" className="py-20 px-6 bg-gradient-to-br from-[#1E4FBF]/5 to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(32px, 5vw, 48px)",
                color: "#5E7CE2",
              }}
            >
              Universities & Institutions
            </motion.p>
            <h2
              className="font-extrabold text-3xl md:text-4xl mb-4"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}
            >
              Our Educational Partners
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6B7280" }}>
              Partner with leading educational institutions offering world-class programs and research opportunities.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {universities.map((university) => (
              <StaggerItem key={university.slug}>
                <Link href={`/education-talent/universities/${university.slug}`}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer"
                    style={{
                      background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)",
                      borderColor: "#E5E7EB",
                      boxShadow: "0 20px 50px rgba(17,24,39,0.08)",
                    }}
                  >
                    <div className="h-48 bg-gradient-to-br from-[#1E4FBF]/20 to-[#1E4FBF]/5 flex items-center justify-center">
                      <span className="text-8xl">{university.logo}</span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                        {university.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm mb-4" style={{ color: "#6B7280" }}>
                        <MapPin className="w-4 h-4" />
                        {university.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm mb-4" style={{ color: "#6B7280" }}>
                        <GraduationCap className="w-4 h-4" />
                        Established {university.established}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {university.programs.slice(0, 3).map((program, i) => (
                          <span key={i} className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: "#EAF2FF", color: "#3565D9" }}>
                            {program}
                          </span>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        className="w-full py-2 rounded-full border-2 border-[#3565D9] text-[#3565D9] hover:bg-[#3565D9] hover:text-white transition-all"
                      >
                        View Profile
                      </Button>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== SKILLS ACADEMY ===== */}
      <section id="skills" className="py-20 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(32px, 5vw, 48px)",
                color: "#5E7CE2",
              }}
            >
              Skills Academy
            </motion.p>
            <h2
              className="font-extrabold text-3xl md:text-4xl mb-4"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}
            >
              Online Learning Catalog
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6B7280" }}>
              Access free online courses taught by industry experts and academic professionals.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.slice(0, 8).map((course) => (
              <StaggerItem key={course.slug}>
                <Link href={`/education-talent/skills-academy/${course.slug}`}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-2xl p-6 border transition-all duration-300 cursor-pointer h-full"
                    style={{
                      background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)",
                      borderColor: "#E5E7EB",
                      boxShadow: "0 20px 50px rgba(17,24,39,0.08)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#EAF2FF", color: "#3565D9" }}>
                        {course.difficulty}
                      </span>
                      <div className="flex items-center gap-1 text-sm" style={{ color: "#F59E0B" }}>
                        <Star className="w-4 h-4 fill-current" />
                        {course.rating}
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                      {course.title}
                    </h3>
                    <p className="text-sm mb-4" style={{ color: "#6B7280" }}>
                      {course.instructor}
                    </p>
                    <div className="flex items-center gap-2 text-sm mb-4" style={{ color: "#6B7280" }}>
                      <Clock className="w-4 h-4" />
                      {course.duration} • {course.hours} hours
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#3565D9" }}>
                      View Course
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center mt-12">
            <Link href="/education-talent/skills-academy">
              <Button
                variant="outline"
                className="px-8 py-3 rounded-full border-2 border-[#3565D9] text-[#3565D9] hover:bg-[#3565D9] hover:text-white transition-all"
              >
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== LABORATORIES ===== */}
      <section id="laboratories" className="py-20 px-6 bg-gradient-to-br from-[#1E4FBF]/5 to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(32px, 5vw, 48px)",
                color: "#5E7CE2",
              }}
            >
              Innovation Laboratories
            </motion.p>
            <h2
              className="font-extrabold text-3xl md:text-4xl mb-4"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}
            >
              State-of-the-Art Facilities
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6B7280" }}>
              Access cutting-edge laboratories and equipment for research, prototyping, and innovation.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {laboratories.map((lab) => (
              <StaggerItem key={lab.slug}>
                <Link href={`/education-talent/laboratories/${lab.slug}`}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer"
                    style={{
                      background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)",
                      borderColor: "#E5E7EB",
                      boxShadow: "0 20px 50px rgba(17,24,39,0.08)",
                    }}
                  >
                    <div className="h-48 bg-gradient-to-br from-[#1E4FBF]/20 to-[#1E4FBF]/5 flex items-center justify-center">
                      <span className="text-8xl">🔬</span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                        {lab.name}
                      </h3>
                      <p className="text-sm mb-4" style={{ color: "#6B7280", lineHeight: 1.6 }}>
                        {lab.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm mb-4" style={{ color: "#6B7280" }}>
                        <MapPin className="w-4 h-4" />
                        {lab.location}
                      </div>
                      <Button
                        variant="outline"
                        className="w-full py-2 rounded-full border-2 border-[#3565D9] text-[#3565D9] hover:bg-[#3565D9] hover:text-white transition-all"
                      >
                        View Details
                      </Button>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== COMPETITIONS ===== */}
      <section id="competitions" className="py-20 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(32px, 5vw, 48px)",
                color: "#5E7CE2",
              }}
            >
              Competitions & Challenges
            </motion.p>
            <h2
              className="font-extrabold text-3xl md:text-4xl mb-4"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}
            >
              Showcase Your Talent
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6B7280" }}>
              Participate in hackathons, robotics competitions, and innovation challenges to win prizes and recognition.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitions.map((competition) => (
              <StaggerItem key={competition.slug}>
                <Link href={`/education-talent/competitions/${competition.slug}`}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-2xl p-6 border transition-all duration-300 cursor-pointer h-full"
                    style={{
                      background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)",
                      borderColor: "#E5E7EB",
                      boxShadow: "0 20px 50px rgba(17,24,39,0.08)",
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl">🏆</span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#EAF2FF", color: "#3565D9" }}>
                        {competition.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                      {competition.title}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm" style={{ color: "#6B7280" }}>
                        <Calendar className="w-4 h-4" />
                        {competition.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm" style={{ color: "#6B7280" }}>
                        <MapPin className="w-4 h-4" />
                        {competition.location}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full py-2 rounded-full border-2 border-[#3565D9] text-[#3565D9] hover:bg-[#3565D9] hover:text-white transition-all"
                    >
                      View Details
                    </Button>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== MENTORS ===== */}
      <section id="mentors" className="py-20 px-6 bg-gradient-to-br from-[#1E4FBF]/5 to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(32px, 5vw, 48px)",
                color: "#5E7CE2",
              }}
            >
              Mentor Directory
            </motion.p>
            <h2
              className="font-extrabold text-3xl md:text-4xl mb-4"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}
            >
              Learn from Experts
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6B7280" }}>
              Connect with industry professionals and academic experts for guidance and mentorship.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor) => (
              <StaggerItem key={mentor.slug}>
                <Link href={`/education-talent/mentors/${mentor.slug}`}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-2xl p-6 border transition-all duration-300 cursor-pointer h-full"
                    style={{
                      background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)",
                      borderColor: "#E5E7EB",
                      boxShadow: "0 20px 50px rgba(17,24,39,0.08)",
                    }}
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1E4FBF]/20 to-[#1E4FBF]/5 flex items-center justify-center mb-4 mx-auto">
                      <span className="text-4xl">👤</span>
                    </div>
                    <h3 className="font-bold text-lg mb-1 text-center" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                      {mentor.name}
                    </h3>
                    <p className="text-sm text-center mb-2" style={{ color: "#5E7CE2" }}>
                      {mentor.role}
                    </p>
                    <p className="text-sm text-center mb-4" style={{ color: "#6B7280" }}>
                      {mentor.organization}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                      {mentor.expertise.slice(0, 3).map((exp, i) => (
                        <span key={i} className="px-2 py-1 rounded-full text-xs" style={{ backgroundColor: "#EAF2FF", color: "#3565D9" }}>
                          {exp}
                        </span>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full py-2 rounded-full border-2 border-[#3565D9] text-[#3565D9] hover:bg-[#3565D9] hover:text-white transition-all"
                    >
                      View Profile
                    </Button>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== CAREERS ===== */}
      <section id="careers" className="py-20 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(32px, 5vw, 48px)",
                color: "#5E7CE2",
              }}
            >
              Career Opportunities
            </motion.p>
            <h2
              className="font-extrabold text-3xl md:text-4xl mb-4"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}
            >
              Launch Your Career
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6B7280" }}>
              Find internships, apprenticeships, and job opportunities with leading companies and organizations.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careers.map((career) => (
              <StaggerItem key={career.slug}>
                <Link href={`/education-talent/careers/${career.slug}`}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-2xl p-6 border transition-all duration-300 cursor-pointer h-full"
                    style={{
                      background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)",
                      borderColor: "#E5E7EB",
                      boxShadow: "0 20px 50px rgba(17,24,39,0.08)",
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                          {career.title}
                        </h3>
                        <p className="text-sm" style={{ color: "#5E7CE2" }}>{career.company}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#EAF2FF", color: "#3565D9" }}>
                        {career.type}
                      </span>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm" style={{ color: "#6B7280" }}>
                        <MapPin className="w-4 h-4" />
                        {career.location}
                      </div>
                      {career.deadline && (
                        <div className="flex items-center gap-2 text-sm" style={{ color: "#6B7280" }}>
                          <Clock className="w-4 h-4" />
                          Deadline: {career.deadline}
                        </div>
                      )}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full py-2 rounded-full border-2 border-[#3565D9] text-[#3565D9] hover:bg-[#3565D9] hover:text-white transition-all"
                    >
                      View Details
                    </Button>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== SUCCESS STORIES ===== */}
      <section id="stories" className="py-20 px-6 bg-gradient-to-br from-[#1E4FBF]/5 to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(32px, 5vw, 48px)",
                color: "#5E7CE2",
              }}
            >
              Success Stories
            </motion.p>
            <h2
              className="font-extrabold text-3xl md:text-4xl mb-4"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}
            >
              Inspiring Journeys
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6B7280" }}>
              Read stories of scholars, innovators, and achievers who transformed their education into success.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {successStories.map((story) => (
              <StaggerItem key={story.slug}>
                <Link href={`/education-talent/success-stories/${story.slug}`}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer h-full"
                    style={{
                      background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)",
                      borderColor: "#E5E7EB",
                      boxShadow: "0 20px 50px rgba(17,24,39,0.08)",
                    }}
                  >
                    <div className="h-48 bg-gradient-to-br from-[#1E4FBF]/20 to-[#1E4FBF]/5 flex items-center justify-center">
                      <span className="text-8xl">👤</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#EAF2FF", color: "#3565D9" }}>
                          {story.category}
                        </span>
                        <span className="text-sm" style={{ color: "#6B7280" }}>{story.year}</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                        {story.name}
                      </h3>
                      <p className="text-sm mb-4" style={{ color: "#5E7CE2" }}>
                        {story.achievement}
                      </p>
                      {story.quote && (
                        <p className="text-sm italic mb-4" style={{ color: "#6B7280", lineHeight: 1.6 }}>
                          "{story.quote}"
                        </p>
                      )}
                      <Button
                        variant="outline"
                        className="w-full py-2 rounded-full border-2 border-[#3565D9] text-[#3565D9] hover:bg-[#3565D9] hover:text-white transition-all"
                      >
                        Read Story
                      </Button>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== EVENTS ===== */}
      <section id="events" className="py-20 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(32px, 5vw, 48px)",
                color: "#5E7CE2",
              }}
            >
              Upcoming Events
            </motion.p>
            <h2
              className="font-extrabold text-3xl md:text-4xl mb-4"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}
            >
              Join Our Events
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6B7280" }}>
              Participate in workshops, seminars, conferences, and training programs to enhance your skills.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <StaggerItem key={event.slug}>
                <Link href={`/education-talent/events/${event.slug}`}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-2xl p-6 border transition-all duration-300 cursor-pointer h-full"
                    style={{
                      background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)",
                      borderColor: "#E5E7EB",
                      boxShadow: "0 20px 50px rgba(17,24,39,0.08)",
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl">📅</span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#EAF2FF", color: "#3565D9" }}>
                        {event.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                      {event.title}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm" style={{ color: "#6B7280" }}>
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm" style={{ color: "#6B7280" }}>
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full py-2 rounded-full border-2 border-[#3565D9] text-[#3565D9] hover:bg-[#3565D9] hover:text-white transition-all"
                    >
                      View Details
                    </Button>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#1E4FBF] to-[#2563EB]">
        <div className="max-w-[1440px] mx-auto text-center">
          <AnimatedSection>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-extrabold text-3xl md:text-4xl mb-4 text-white"
              style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
            >
              Ready to Start Your Journey?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-white/80 text-lg mb-8 max-w-2xl mx-auto"
            >
              Explore our learning programs, find scholarships, and connect with mentors to achieve your educational and career goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link href="/education-talent/learning-programs">
                <Button
                  variant="primary"
                  className="px-8 py-4 rounded-full bg-white text-[#1E4FBF] hover:bg-white/90 transition-all"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explore Programs
                </Button>
              </Link>
              <Link href="/education-talent/scholarships">
                <Button
                  variant="outline"
                  className="px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white/10 transition-all"
                >
                  <Award className="w-5 h-5 mr-2" />
                  Find Scholarships
                </Button>
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
