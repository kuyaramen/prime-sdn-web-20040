"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowRight, Cpu, Brain, Database, Map, Plane, Building, Cloud } from "lucide-react";
import { EmergingTechnology } from "@/lib/digital-data";

interface EmergingTechnologiesClientProps {
  technologies: EmergingTechnology[];
}

export default function EmergingTechnologiesClient({ technologies }: EmergingTechnologiesClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-6 bg-gradient-to-br from-[#0A1628]/5 to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-extrabold text-4xl md:text-5xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
              AI & Emerging Technologies
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              Technologies driving the digital transformation
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech) => (
              <StaggerItem key={tech.slug}>
                <Link href={`/digital-transformation/technologies/${tech.slug}`}>
                  <motion.div 
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="p-6 rounded-2xl border cursor-pointer h-full"
                    style={{ 
                      background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", 
                      borderColor: "#E2E8F0",
                      boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)"
                    }}
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden mb-4">
                      <img 
                        src={tech.image} 
                        alt={tech.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mb-3">
                      <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ 
                        backgroundColor: tech.adoptionLevel === 'Mature' ? '#10B981' : tech.adoptionLevel === 'Growing' ? '#3B82F6' : '#F59E0B',
                        color: 'white'
                      }}>
                        {tech.adoptionLevel}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                      {tech.name}
                    </h3>
                    <p className="text-sm line-clamp-2" style={{ color: "#64748B" }}>
                      {tech.overview}
                    </p>
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
