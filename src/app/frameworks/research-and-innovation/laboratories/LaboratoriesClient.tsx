"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowRight, MapPin, Building2, Microscope } from "lucide-react";
import { Laboratory } from "@/lib/research-data";

interface LaboratoriesClientProps {
  laboratories: Laboratory[];
}

export default function LaboratoriesClient({ laboratories }: LaboratoriesClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-6 bg-gradient-to-br from-[#0A1628]/5 to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-extrabold text-4xl md:text-5xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
              Research Laboratories
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              State-of-the-art facilities driving scientific discovery
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {laboratories.map((lab) => (
              <StaggerItem key={lab.slug}>
                <Link href={`/research-and-innovation/laboratories/${lab.slug}`}>
                  <motion.div 
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="rounded-2xl overflow-hidden border cursor-pointer h-full"
                    style={{ 
                      background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", 
                      borderColor: "#E2E8F0",
                      boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)"
                    }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={lab.image} 
                        alt={lab.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                        {lab.name}
                      </h3>
                      <div className="space-y-2 text-sm mb-4" style={{ color: "#64748B" }}>
                        <div className="flex items-center gap-2"><Building2 className="w-4 h-4" />{lab.institution}</div>
                        <div className="flex items-center gap-2"><MapPin className="w-4 h-4" />{lab.location}</div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {lab.researchAreas.slice(0, 2).map((area, i) => (
                          <span key={i} className="px-2 py-1 rounded-full text-xs" style={{ backgroundColor: "#DBEAFE", color: "#3B82F6" }}>
                            {area}
                          </span>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full py-2 rounded-full border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white">
                        View Lab <ArrowRight className="w-4 h-4 ml-2" />
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
