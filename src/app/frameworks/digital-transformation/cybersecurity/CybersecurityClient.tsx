"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Shield, CheckCircle2, AlertTriangle, Lock, Phone, Mail } from "lucide-react";
import { CybersecurityInitiative } from "@/lib/digital-data";

interface CybersecurityClientProps {
  initiatives: CybersecurityInitiative[];
}

export default function CybersecurityClient({ initiatives }: CybersecurityClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-6 bg-gradient-to-br from-[#0A1628]/5 to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-extrabold text-4xl md:text-5xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
              Cybersecurity & Data Privacy
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              Protecting our digital infrastructure and citizen data
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((initiative) => (
              <StaggerItem key={initiative.slug}>
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="p-6 rounded-2xl border"
                  style={{ 
                    background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", 
                    borderColor: "#E2E8F0",
                    boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)"
                  }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "#FEF3C7" }}>
                    <Shield className="w-6 h-6" style={{ color: "#F59E0B" }} />
                  </div>
                  <div className="mb-3">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#F59E0B", color: "white" }}>
                      {initiative.type}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                    {initiative.name}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: "#64748B" }}>
                    {initiative.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {initiative.bestPractices.slice(0, 2).map((practice, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm" style={{ color: "#64748B" }}>
                        <CheckCircle2 className="w-4 h-4" style={{ color: "#10B981" }} />
                        {practice}
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t" style={{ borderColor: "#E2E8F0" }}>
                    <div className="text-xs" style={{ color: "#94A3B8" }}>
                      Status: {initiative.status}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <div className="p-8 rounded-2xl border" style={{ 
              background: "linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)", 
              borderColor: "#F59E0B",
              boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)"
            }}>
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "#F59E0B" }}>
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="font-extrabold text-2xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                    Report a Security Incident
                  </h2>
                  <p className="text-lg mb-6" style={{ color: "#64748B" }}>
                    If you encounter a security incident or suspect unauthorized access to government systems, please report it immediately.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5" style={{ color: "#F59E0B" }} />
                      <span className="font-semibold" style={{ color: "#0A1628" }}>(086) 826-9999</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5" style={{ color: "#F59E0B" }} />
                      <span className="font-semibold" style={{ color: "#0A1628" }}>security@surigaodelnorte.gov.ph</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
