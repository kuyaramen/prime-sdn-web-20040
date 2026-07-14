"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowLeft, Globe, Briefcase, Users, CreditCard, MessageSquare, CheckCircle2, HelpCircle, Phone, Mail } from "lucide-react";
import { DigitalService } from "@/lib/digital-data";

interface DigitalServiceDetailClientProps {
  service: DigitalService;
}

export default function DigitalServiceDetailClient({ service }: DigitalServiceDetailClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 px-6 bg-gradient-to-br from-[#0A1628] to-[#1E3A5F]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <Link href="/digital-transformation/services">
              <Button variant="outline" className="px-4 py-2 rounded-full border-2 border-white text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
          </div>
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-1/2">
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                  <img 
                    src={service.coverImage} 
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#3B82F6" }}>
                    {service.icon === 'Globe' && <Globe className="w-6 h-6 text-white" />}
                    {service.icon === 'Briefcase' && <Briefcase className="w-6 h-6 text-white" />}
                    {service.icon === 'Users' && <Users className="w-6 h-6 text-white" />}
                    {service.icon === 'CreditCard' && <CreditCard className="w-6 h-6 text-white" />}
                    {service.icon === 'MessageSquare' && <MessageSquare className="w-6 h-6 text-white" />}
                  </div>
                  <div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ 
                      backgroundColor: service.status === 'Active' ? '#10B981' : '#F59E0B',
                      color: 'white'
                    }}>
                      {service.status}
                    </span>
                  </div>
                </div>
                <h1 className="font-extrabold text-3xl md:text-4xl mb-4 text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                  {service.name}
                </h1>
                <p className="text-lg mb-4 text-white/80">{service.description}</p>
                <div className="space-y-2 text-white/80">
                  <div className="flex items-center gap-3"><span className="font-semibold">Office:</span> {service.officeResponsible}</div>
                  <div className="flex items-center gap-3"><span className="font-semibold">Category:</span> {service.category}</div>
                </div>
                <div className="flex gap-4 mt-6">
                  <a href={service.serviceUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold text-sm">
                    Access Service
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-white to-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                  About This Service
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>{service.fullDescription}</p>
              </AnimatedSection>
              
              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                  Benefits
                </h2>
                <div className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-xl border" style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)" }}>
                      <CheckCircle2 className="w-5 h-5 mt-0.5" style={{ color: "#10B981" }} />
                      <span className="text-sm" style={{ color: "#64748B" }}>{benefit}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                  Requirements
                </h2>
                <div className="space-y-3">
                  {service.requirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-xl border" style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)" }}>
                      <CheckCircle2 className="w-5 h-5 mt-0.5" style={{ color: "#3B82F6" }} />
                      <span className="text-sm" style={{ color: "#64748B" }}>{req}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                  Access Process
                </h2>
                <div className="space-y-4">
                  {service.accessProcess.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#3B82F6", color: "white", fontWeight: "bold" }}>
                        {index + 1}
                      </div>
                      <span className="text-sm pt-1" style={{ color: "#64748B" }}>{step}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {service.faqs && service.faqs.length > 0 && (
                <AnimatedSection>
                  <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {service.faqs.map((faq, index) => (
                      <div key={index} className="p-6 rounded-xl border" style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)" }}>
                        <div className="flex items-start gap-3 mb-3">
                          <HelpCircle className="w-5 h-5 mt-0.5" style={{ color: "#3B82F6" }} />
                          <h3 className="font-semibold text-sm" style={{ color: "#0A1628" }}>{faq.question}</h3>
                        </div>
                        <p className="text-sm pl-8" style={{ color: "#64748B" }}>{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              )}
            </div>

            <div className="space-y-6">
              <AnimatedSection>
                <div className="p-6 rounded-2xl border" style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)" }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: "#0A1628" }}>Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3"><Phone className="w-5 h-5" style={{ color: "#3B82F6" }} /><span className="text-sm" style={{ color: "#64748B" }}>{service.contactInfo}</span></div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <a href={service.serviceUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button variant="primary" className="w-full py-4 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold">
                    Access Service Now
                  </Button>
                </a>
              </AnimatedSection>

              <AnimatedSection>
                <Link href="/digital-transformation/services">
                  <Button variant="outline" className="w-full py-4 rounded-full border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white font-semibold">
                    View All Services
                  </Button>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
