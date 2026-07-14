"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { DollarSign, Calendar, Building2, ArrowRight } from "lucide-react";
import { ResearchGrant } from "@/lib/research-data";

interface GrantsClientProps {
  grants: ResearchGrant[];
}

export default function GrantsClient({ grants }: GrantsClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-6 bg-gradient-to-br from-[#0A1628]/5 to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-extrabold text-4xl md:text-5xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
              Research Grants & Funding
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              Funding opportunities to support your research journey
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {grants.map((grant) => (
              <StaggerItem key={grant.slug}>
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
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#D1FAE5" }}>
                      <DollarSign className="w-6 h-6" style={{ color: "#10B981" }} />
                    </div>
                    <div>
                      <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#10B981", color: "white" }}>
                        {grant.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                    {grant.title}
                  </h3>
                  <p className="text-sm mb-2" style={{ color: "#64748B" }}>
                    {grant.agency}
                  </p>
                  <p className="text-lg font-bold mb-4" style={{ color: "#10B981" }}>
                    {grant.amount}
                  </p>
                  <div className="space-y-2 text-sm mb-4" style={{ color: "#94A3B8" }}>
                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4" />Deadline: {grant.deadline}</div>
                  </div>
                  {grant.applicationLink && (
                    <Button variant="outline" className="w-full py-2 rounded-full border-2 border-[#10B981] text-[#10B981] hover:bg-[#10B981] hover:text-white">
                      Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
