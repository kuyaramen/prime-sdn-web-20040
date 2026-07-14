"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { MapPin, Clock, Briefcase, ChevronRight } from "lucide-react";
import { Career } from "@/lib/education-data";

interface CareersClientProps {
  careers: Career[];
}

export default function CareersClient({ careers }: CareersClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-6 bg-gradient-to-br from-[#1E4FBF]/5 to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-extrabold text-4xl md:text-5xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
              Career Opportunities
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg max-w-2xl mx-auto" style={{ color: "#6B7280" }}>
              Find internships, apprenticeships, and job opportunities.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careers.map((career) => (
              <StaggerItem key={career.slug}>
                <Link href={`/education-talent/careers/${career.slug}`}>
                  <motion.div whileHover={{ y: -8, scale: 1.02 }} className="rounded-2xl p-6 border cursor-pointer h-full" style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)", borderColor: "#E5E7EB", boxShadow: "0 20px 50px rgba(17,24,39,0.08)" }}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>{career.title}</h3>
                        <p className="text-sm mb-2" style={{ color: "#5E7CE2" }}>{career.company}</p>
                      </div>
                      {career.featured && <span className="px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0" style={{ backgroundColor: "#FEF3C7", color: "#D97706" }}>Featured</span>}
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm" style={{ color: "#6B7280" }}><MapPin className="w-4 h-4" />{career.location}</div>
                      <div className="flex items-center gap-2 text-sm" style={{ color: "#6B7280" }}><Briefcase className="w-4 h-4" />{career.type}</div>
                      {career.deadline && <div className="flex items-center gap-2 text-sm" style={{ color: "#6B7280" }}><Clock className="w-4 h-4" />Deadline: {career.deadline}</div>}
                    </div>
                    <Button variant="outline" className="w-full py-2 rounded-full border-2 border-[#3565D9] text-[#3565D9] hover:bg-[#3565D9] hover:text-white">View Details <ChevronRight className="w-4 h-4 ml-2" /></Button>
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
