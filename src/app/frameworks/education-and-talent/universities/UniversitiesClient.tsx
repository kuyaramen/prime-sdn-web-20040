"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { MapPin, GraduationCap, Building2, ChevronRight } from "lucide-react";
import { University } from "@/lib/education-data";

interface UniversitiesClientProps {
  universities: University[];
}

export default function UniversitiesClient({ universities }: UniversitiesClientProps) {
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
              Universities & Institutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "#6B7280" }}
            >
              Partner with leading educational institutions offering world-class programs and research opportunities.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Universities Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
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
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-bold text-xl mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                            {university.name}
                          </h3>
                          <div className="flex items-center gap-2 text-sm mb-2" style={{ color: "#6B7280" }}>
                            <MapPin className="w-4 h-4" />
                            {university.location}
                          </div>
                          <div className="flex items-center gap-2 text-sm" style={{ color: "#6B7280" }}>
                            <GraduationCap className="w-4 h-4" />
                            Established {university.established}
                          </div>
                        </div>
                        {university.featured && (
                          <span className="px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0" style={{ backgroundColor: "#FEF3C7", color: "#D97706" }}>
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {university.programs.slice(0, 3).map((program, i) => (
                          <span key={i} className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: "#EAF2FF", color: "#3565D9" }}>
                            {program}
                          </span>
                        ))}
                        {university.programs.length > 3 && (
                          <span className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: "#EAF2FF", color: "#3565D9" }}>
                            +{university.programs.length - 3} more
                          </span>
                        )}
                      </div>
                      <Button
                        variant="outline"
                        className="w-full py-2 rounded-full border-2 border-[#3565D9] text-[#3565D9] hover:bg-[#3565D9] hover:text-white transition-all"
                      >
                        View Profile
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
