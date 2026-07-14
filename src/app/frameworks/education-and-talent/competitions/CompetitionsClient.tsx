"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { Calendar, MapPin, Trophy, ChevronRight } from "lucide-react";
import { Competition } from "@/lib/education-data";

interface CompetitionsClientProps {
  competitions: Competition[];
}

export default function CompetitionsClient({ competitions }: CompetitionsClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-6 bg-gradient-to-br from-[#1E4FBF]/5 to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-extrabold text-4xl md:text-5xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
              Competitions & Challenges
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg max-w-2xl mx-auto" style={{ color: "#6B7280" }}>
              Participate in hackathons, robotics competitions, and innovation challenges.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitions.map((comp) => (
              <StaggerItem key={comp.slug}>
                <Link href={`/education-talent/competitions/${comp.slug}`}>
                  <motion.div whileHover={{ y: -8, scale: 1.02 }} className="rounded-2xl p-6 border cursor-pointer h-full" style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)", borderColor: "#E5E7EB", boxShadow: "0 20px 50px rgba(17,24,39,0.08)" }}>
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl">🏆</span>
                      {comp.featured && <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#FEF3C7", color: "#D97706" }}>Featured</span>}
                    </div>
                    <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>{comp.title}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm" style={{ color: "#6B7280" }}><Calendar className="w-4 h-4" />{comp.date}</div>
                      <div className="flex items-center gap-2 text-sm" style={{ color: "#6B7280" }}><MapPin className="w-4 h-4" />{comp.location}</div>
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
