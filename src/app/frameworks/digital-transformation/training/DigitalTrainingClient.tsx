"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { GraduationCap, Calendar, MapPin, Users, Clock, DollarSign } from "lucide-react";
import { DigitalTraining } from "@/lib/digital-data";

interface DigitalTrainingClientProps {
  training: DigitalTraining[];
}

export default function DigitalTrainingClient({ training }: DigitalTrainingClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-6 bg-gradient-to-br from-[#0A1628]/5 to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-extrabold text-4xl md:text-5xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
              Digital Skills & Adoption
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              Programs to help citizens and businesses adopt technology
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {training.map((program) => (
              <StaggerItem key={program.slug}>
                <Link href={`/digital-transformation/training/${program.slug}`}>
                  <motion.div 
                    whileHover={{ x: 8 }}
                    className="p-6 rounded-2xl border cursor-pointer"
                    style={{ 
                      background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", 
                      borderColor: "#E2E8F0",
                      boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)"
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#D1FAE5" }}>
                          <GraduationCap className="w-6 h-6" style={{ color: "#10B981" }} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#10B981", color: "white" }}>
                            {program.category}
                          </span>
                          <span className="px-2 py-1 rounded-full text-xs" style={{ backgroundColor: "#DBEAFE", color: "#3B82F6" }}>
                            {program.mode}
                          </span>
                        </div>
                        <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                          {program.title}
                        </h3>
                        <p className="text-sm mb-3" style={{ color: "#64748B" }}>
                          {program.description}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm" style={{ color: "#64748B" }}>
                          <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{program.duration}</span>
                          <span className="flex items-center gap-2"><DollarSign className="w-4 h-4" />{program.fee}</span>
                        </div>
                      </div>
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
