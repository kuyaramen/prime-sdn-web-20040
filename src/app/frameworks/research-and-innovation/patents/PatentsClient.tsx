"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Award, Calendar, FileText } from "lucide-react";
import { Patent } from "@/lib/research-data";

interface PatentsClientProps {
  patents: Patent[];
}

export default function PatentsClient({ patents }: PatentsClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-6 bg-gradient-to-br from-[#0A1628]/5 to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-extrabold text-4xl md:text-5xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
              Patents & Intellectual Property
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              Innovation outputs protecting local intellectual property
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {patents.map((patent) => (
              <StaggerItem key={patent.slug}>
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="rounded-2xl p-6 border h-full"
                  style={{ 
                    background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", 
                    borderColor: "#E2E8F0",
                    boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)"
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#FEF3C7" }}>
                      <Award className="w-6 h-6" style={{ color: "#F59E0B" }} />
                    </div>
                    <div>
                      <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ 
                        backgroundColor: patent.status === 'Granted' ? '#10B981' : patent.status === 'Pending' ? '#F59E0B' : '#6B7280',
                        color: 'white'
                      }}>
                        {patent.status}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                    {patent.title}
                  </h3>
                  <p className="text-sm mb-2" style={{ color: "#64748B" }}>
                    {patent.inventor} • {patent.institution}
                  </p>
                  {patent.patentNumber && (
                    <p className="text-sm mb-2" style={{ color: "#94A3B8" }}>
                      Patent No: {patent.patentNumber}
                    </p>
                  )}
                  <div className="space-y-2 text-sm" style={{ color: "#94A3B8" }}>
                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4" />Filed: {patent.filingDate}</div>
                    {patent.registrationDate && (
                      <div className="flex items-center gap-2"><FileText className="w-4 h-4" />Registered: {patent.registrationDate}</div>
                    )}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
