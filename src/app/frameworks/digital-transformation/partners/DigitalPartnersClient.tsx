"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Building2, ExternalLink } from "lucide-react";
import { DigitalPartner } from "@/lib/digital-data";

interface DigitalPartnersClientProps {
  partners: DigitalPartner[];
}

export default function DigitalPartnersClient({ partners }: DigitalPartnersClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-6 bg-gradient-to-br from-[#0A1628]/5 to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-extrabold text-4xl md:text-5xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
              Partners & Technology Providers
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              Organizations driving digital transformation together
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {partners.map((partner, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl border text-center"
                  style={{ 
                    background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", 
                    borderColor: "#E2E8F0",
                    boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)"
                  }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: "#DBEAFE" }}>
                    <Building2 className="w-8 h-8" style={{ color: "#3B82F6" }} />
                  </div>
                  <div className="mb-2">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#3B82F6", color: "white" }}>
                      {partner.type}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                    {partner.name}
                  </h3>
                  <a 
                    href={partner.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs mt-3"
                    style={{ color: "#3B82F6" }}
                  >
                    Visit <ExternalLink className="w-3 h-3" />
                  </a>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <div className="p-8 rounded-2xl border text-center" style={{ 
              background: "linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)", 
              borderColor: "#3B82F6",
              boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)"
            }}>
              <Building2 className="w-12 h-12 mx-auto mb-4" style={{ color: "#3B82F6" }} />
              <h2 className="font-extrabold text-2xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                Become a Partner
              </h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto" style={{ color: "#64748B" }}>
                Join us in building a smarter, more connected Surigao del Norte. Partner with us to drive digital transformation and innovation across the province.
              </p>
              <Button className="px-8 py-4 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold">
                Contact Us
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
