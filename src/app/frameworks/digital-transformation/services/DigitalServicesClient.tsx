"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowRight, Globe, Briefcase, Users, CreditCard, MessageSquare } from "lucide-react";
import { DigitalService } from "@/lib/digital-data";

interface DigitalServicesClientProps {
  services: DigitalService[];
}

export default function DigitalServicesClient({ services }: DigitalServicesClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-6 bg-gradient-to-br from-[#0A1628]/5 to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-extrabold text-4xl md:text-5xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
              Digital Government Services
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              Access government services online, anytime, anywhere
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <Link href={`/digital-transformation/services/${service.slug}`}>
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
                        src={service.coverImage} 
                        alt={service.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ 
                          backgroundColor: service.status === 'Active' ? '#10B981' : '#F59E0B',
                          color: 'white'
                        }}>
                          {service.status}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: "#3B82F6" }}>
                          {service.icon === 'Globe' && <Globe className="w-6 h-6 text-white" />}
                          {service.icon === 'Briefcase' && <Briefcase className="w-6 h-6 text-white" />}
                          {service.icon === 'Users' && <Users className="w-6 h-6 text-white" />}
                          {service.icon === 'CreditCard' && <CreditCard className="w-6 h-6 text-white" />}
                          {service.icon === 'MessageSquare' && <MessageSquare className="w-6 h-6 text-white" />}
                        </div>
                        <h3 className="font-bold text-xl text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                          {service.name}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-sm mb-4 line-clamp-2" style={{ color: "#64748B" }}>
                        {service.description}
                      </p>
                      <div className="flex items-center text-sm" style={{ color: "#3B82F6" }}>
                        Access Service <ArrowRight className="w-4 h-4 ml-2" />
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
