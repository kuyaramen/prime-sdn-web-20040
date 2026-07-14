"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowRight, Mail, Link as LinkIcon } from "lucide-react";
import { Researcher } from "@/lib/research-data";

interface ResearchersClientProps {
  researchers: Researcher[];
}

export default function ResearchersClient({ researchers }: ResearchersClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-6 bg-gradient-to-br from-[#0A1628]/5 to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-extrabold text-4xl md:text-5xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
              Researchers Directory
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              Connect with leading researchers and innovators
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchers.map((researcher) => (
              <StaggerItem key={researcher.slug}>
                <Link href={`/research-and-innovation/researchers/${researcher.slug}`}>
                  <motion.div 
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="rounded-2xl p-6 border cursor-pointer h-full text-center"
                    style={{ 
                      background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", 
                      borderColor: "#E2E8F0",
                      boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)"
                    }}
                  >
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-4" style={{ borderColor: "#3B82F6" }}>
                      <img 
                        src={researcher.photo} 
                        alt={researcher.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                      {researcher.name}
                    </h3>
                    <p className="text-sm mb-2" style={{ color: "#3B82F6" }}>{researcher.specialization}</p>
                    <p className="text-sm mb-4" style={{ color: "#64748B" }}>{researcher.institution}</p>
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {researcher.researchInterests.slice(0, 2).map((interest, i) => (
                        <span key={i} className="px-2 py-1 rounded-full text-xs" style={{ backgroundColor: "#DBEAFE", color: "#3B82F6" }}>
                          {interest}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-center gap-3">
                      <a href={`mailto:${researcher.email}`} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#DBEAFE" }}>
                        <Mail className="w-5 h-5" style={{ color: "#3B82F6" }} />
                      </a>
                      {researcher.linkedin && (
                        <a href={researcher.linkedin} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#DBEAFE" }}>
                          <LinkIcon className="w-5 h-5" style={{ color: "#3B82F6" }} />
                        </a>
                      )}
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
