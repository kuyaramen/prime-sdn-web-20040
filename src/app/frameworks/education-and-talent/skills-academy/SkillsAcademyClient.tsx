"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { Search, Filter, Clock, Star, Users, ChevronRight } from "lucide-react";
import { Course } from "@/lib/education-data";

interface SkillsAcademyClientProps {
  courses: Course[];
}

export default function SkillsAcademyClient({ courses }: SkillsAcademyClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const difficulties = ["all", "Beginner", "Intermediate", "Advanced"];
  const categories = ["all", ...Array.from(new Set(courses.map((c) => c.category)))];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = selectedDifficulty === "all" || course.difficulty === selectedDifficulty;
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    return matchesSearch && matchesDifficulty && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#1E4FBF]/5 to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-extrabold text-4xl md:text-5xl mb-4"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}
            >
              Skills Academy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "#6B7280" }}
            >
              Access free online courses taught by industry experts and academic professionals.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-6 bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="relative flex-1 min-w-[300px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3565D9]"
              />
            </div>
            <div className="flex gap-4">
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3565D9]"
              >
                {difficulties.map((level) => (
                  <option key={level} value={level}>
                    {level === "all" ? "All Levels" : level}
                  </option>
                ))}
              </select>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3565D9]"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <p className="text-sm" style={{ color: "#6B7280" }}>
              Showing {filteredCourses.length} of {courses.length} courses
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
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
                    <div className="flex items-center gap-2 text-sm mb-4" style={{ color: "#6B7280" }}>
                      <Users className="w-4 h-4" />
                      {course.enrolled} enrolled
                    </div>
                    {course.featured && (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block" style={{ backgroundColor: "#FEF3C7", color: "#D97706" }}>
                        Featured
                      </span>
                    )}
                    <Button
                      variant="outline"
                      className="w-full py-2 rounded-full border-2 border-[#3565D9] text-[#3565D9] hover:bg-[#3565D9] hover:text-white transition-all"
                    >
                      View Course
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg" style={{ color: "#6B7280" }}>
                No courses found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
