"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowRight, Wifi, Server, Database, Monitor, Zap, MapPin } from "lucide-react";
import { DigitalInfrastructure } from "@/lib/digital-data";

interface DigitalInfrastructureClientProps {
  infrastructure: DigitalInfrastructure[];
}

export default function DigitalInfrastructureClient({ infrastructure }: DigitalInfrastructureClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-6 bg-gradient-to-br from-[#0A1628]/5 to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-extrabold text-4xl md:text-5xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
              Digital Infrastructure
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              Building the foundation for a connected province
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {infrastructure.map((infra) => (
              <StaggerItem key={infra.slug}>
                <Link href={`/digital-transformation/infrastructure/${infra.slug}`}>
                  <motion.div 
                    whileHover={{ y: -8 }}
                    className="p-6 rounded-2xl border cursor-pointer"
                    style={{ 
                      background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", 
                      borderColor: "#E2E8F0",
                      boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)"
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#DBEAFE" }}>
                        {infra.type === 'Connectivity' && <Wifi className="w-6 h-6" style={{ color: "#3B82F6" }} />}
                        {infra.type === 'Cloud' && <Server className="w-6 h-6" style={{ color: "#3B82F6" }} />}
                        {infra.type === 'Data Center' && <Database className="w-6 h-6" style={{ color: "#3B82F6" }} />}
                        {infra.type === 'Smart Facility' && <Monitor className="w-6 h-6" style={{ color: "#3B82F6" }} />}
                        {infra.type === 'Network' && <Zap className="w-6 h-6" style={{ color: "#3B82F6" }} />}
                      </div>
                      <div>
                        <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#3B82F6", color: "white" }}>
                          {infra.type}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-bold text-xl mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                      {infra.name}
                    </h3>
                    <p className="text-sm mb-4" style={{ color: "#64748B" }}>
                      {infra.description}
                    </p>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span style={{ color: "#64748B" }}>Progress</span>
                        <span style={{ color: "#3B82F6", fontWeight: "600" }}>{infra.progress}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full" style={{ backgroundColor: "#E2E8F0" }}>
                        <div 
                          className="h-full rounded-full transition-all duration-500"
                          style={{ width: `${infra.progress}%`, backgroundColor: "#3B82F6" }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm mb-4" style={{ color: "#64748B" }}>
                      <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />{infra.location}</span>
                    </div>
                    <div className="flex items-center text-sm" style={{ color: "#3B82F6" }}>
                      View Details <ArrowRight className="w-4 h-4 ml-2" />
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
