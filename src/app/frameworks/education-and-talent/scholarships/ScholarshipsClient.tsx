"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { Search, Filter, Clock, Award, Building2, ChevronRight } from "lucide-react";
import { Scholarship } from "@/lib/education-data";

interface ScholarshipsClientProps {
  scholarships: Scholarship[];
}

export default function ScholarshipsClient({ scholarships }: ScholarshipsClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", "Government", "Private", "Institutional", "International"];

  const filteredScholarships = scholarships.filter((scholarship) => {
    const matchesSearch = scholarship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         scholarship.sponsor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || scholarship.category === selectedCategory;
    return matchesSearch && matchesCategory;
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
              Scholarship Directory
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "#6B7280" }}
            >
              Discover scholarship opportunities from government agencies, private institutions, and international organizations.
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
                placeholder="Search scholarships..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3565D9]"
              />
            </div>
            <div className="flex gap-4">
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

      {/* Scholarships Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <p className="text-sm" style={{ color: "#6B7280" }}>
              Showing {filteredScholarships.length} of {scholarships.length} scholarships
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScholarships.map((scholarship) => (
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
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                          {scholarship.title}
                        </h3>
                        <p className="text-sm mb-2" style={{ color: "#5E7CE2" }}>{scholarship.sponsor}</p>
                      </div>
                      {scholarship.featured && (
                        <span className="px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0" style={{ backgroundColor: "#FEF3C7", color: "#D97706" }}>
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: "#EAF2FF", color: "#3565D9" }}>
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
                      <div className="flex items-center gap-2 text-sm" style={{ color: "#6B7280" }}>
                        <Building2 className="w-4 h-4" />
                        {scholarship.duration}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full py-2 rounded-full border-2 border-[#3565D9] text-[#3565D9] hover:bg-[#3565D9] hover:text-white transition-all"
                    >
                      View Details
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filteredScholarships.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg" style={{ color: "#6B7280" }}>
                No scholarships found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
