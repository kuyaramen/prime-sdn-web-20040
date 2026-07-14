"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { BookOpen, Calendar, FileText, ArrowRight } from "lucide-react";
import { Publication } from "@/lib/research-data";

interface PublicationsClientProps {
  publications: Publication[];
}

export default function PublicationsClient({ publications }: PublicationsClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-6 bg-gradient-to-br from-[#0A1628]/5 to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-extrabold text-4xl md:text-5xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
              Publications Repository
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              Access research papers, journals, and technical reports
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <StaggerContainer className="space-y-4">
            {publications.map((pub) => (
              <StaggerItem key={pub.slug}>
                <motion.div 
                  whileHover={{ x: 8 }}
                  className="p-6 rounded-2xl border cursor-pointer"
                  style={{ 
                    background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", 
                    borderColor: "#E2E8F0",
                    boxShadow: "0 4px 20px rgba(10, 22, 40, 0.05)"
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#F3E8FF" }}>
                      <BookOpen className="w-6 h-6" style={{ color: "#8B5CF6" }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#8B5CF6", color: "white" }}>
                          {pub.type}
                        </span>
                        <span className="text-sm" style={{ color: "#64748B" }}>{pub.year}</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                        {pub.title}
                      </h3>
                      <p className="text-sm mb-2" style={{ color: "#64748B" }}>
                        {pub.authors.join(", ")} • {pub.institution}
                      </p>
                      <p className="text-sm line-clamp-2 mb-3" style={{ color: "#94A3B8" }}>
                        {pub.abstract}
                      </p>
                      <div className="flex items-center gap-4">
                        {pub.pdfUrl && (
                          <Button variant="outline" className="px-4 py-2 rounded-full border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white text-sm">
                            <FileText className="w-4 h-4 mr-2" />
                            Download PDF
                          </Button>
                        )}
                        <ArrowRight className="w-5 h-5" style={{ color: "#8B5CF6" }} />
                      </div>
                    </div>
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
