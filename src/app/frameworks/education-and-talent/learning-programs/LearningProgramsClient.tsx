"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { Search, Filter, Clock, Users, Award, ChevronRight } from "lucide-react";
import { LearningProgram } from "@/lib/education-data";

interface LearningProgramsClientProps {
  programs: LearningProgram[];
}

export default function LearningProgramsClient({ programs }: LearningProgramsClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [selectedPartner, setSelectedPartner] = useState<string>("all");

  const levels = ["all", "Beginner", "Intermediate", "Advanced"];
  const partners = ["all", ...Array.from(new Set(programs.map((p) => p.partner).filter(Boolean)))];

  const filteredPrograms = programs.filter((program) => {
    const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel === "all" || program.level === selectedLevel;
    const matchesPartner = selectedPartner === "all" || program.partner === selectedPartner;
    return matchesSearch && matchesLevel && matchesPartner;
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
              Learning Programs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "#6B7280" }}
            >
              Discover comprehensive learning programs designed to equip you with cutting-edge skills for the future.
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
                placeholder="Search programs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3565D9]"
              />
            </div>
            <div className="flex gap-4">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3565D9]"
              >
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level === "all" ? "All Levels" : level}
                  </option>
                ))}
              </select>
              <select
                value={selectedPartner}
                onChange={(e) => setSelectedPartner(e.target.value)}
                className="px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3565D9]"
              >
                {partners.map((partner) => (
                  <option key={partner} value={partner}>
                    {partner === "all" ? "All Partners" : partner}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <p className="text-sm" style={{ color: "#6B7280" }}>
              Showing {filteredPrograms.length} of {programs.length} programs
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program) => (
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
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-5xl">{program.icon}</span>
                      {program.featured && (
                        <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#FEF3C7", color: "#D97706" }}>
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-xl mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                      {program.title}
                    </h3>
                    <p className="text-sm mb-4" style={{ color: "#6B7280", lineHeight: 1.6 }}>
                      {program.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: "#EAF2FF", color: "#3565D9" }}>
                        {program.level}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: "#EAF2FF", color: "#3565D9" }}>
                        {program.duration}
                      </span>
                      {program.partner && (
                        <span className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: "#EAF2FF", color: "#3565D9" }}>
                          {program.partner}
                        </span>
                      )}
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm" style={{ color: "#6B7280" }}>
                        <Clock className="w-4 h-4" />
                        {program.duration}
                      </div>
                      {program.certificate && (
                        <div className="flex items-center gap-2 text-sm" style={{ color: "#6B7280" }}>
                          <Award className="w-4 h-4" />
                          Certificate Included
                        </div>
                      )}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full py-2 rounded-full border-2 border-[#3565D9] text-[#3565D9] hover:bg-[#3565D9] hover:text-white transition-all"
                    >
                      View Program
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg" style={{ color: "#6B7280" }}>
                No programs found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
