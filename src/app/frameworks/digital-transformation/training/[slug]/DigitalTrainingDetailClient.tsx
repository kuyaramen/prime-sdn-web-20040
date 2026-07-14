"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowLeft, GraduationCap, Calendar, MapPin, Users, Clock, DollarSign, CheckCircle2, Building2 } from "lucide-react";
import { DigitalTraining } from "@/lib/digital-data";

interface DigitalTrainingDetailClientProps {
  training: DigitalTraining;
}

export default function DigitalTrainingDetailClient({ training }: DigitalTrainingDetailClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 px-6 bg-gradient-to-br from-[#0A1628] to-[#1E3A5F]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <Link href="/digital-transformation/training">
              <Button variant="outline" className="px-4 py-2 rounded-full border-2 border-white text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
          </div>
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#10B981", color: "white" }}>
                  {training.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#3B82F6", color: "white" }}>
                  {training.mode}
                </span>
              </div>
              <h1 className="font-extrabold text-3xl md:text-4xl mb-4 text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                {training.title}
              </h1>
              <p className="text-lg mb-4 text-white/80">{training.description}</p>
              <div className="flex flex-wrap gap-4 text-white/80">
                <span className="flex items-center gap-2"><Building2 className="w-5 h-5" />{training.provider}</span>
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
                  Program Overview
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>{training.description}</p>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                  Topics Covered
                </h2>
                <div className="space-y-3">
                  {training.topics.map((topic, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-xl border" style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)" }}>
                      <CheckCircle2 className="w-5 h-5 mt-0.5" style={{ color: "#10B981" }} />
                      <span className="text-sm" style={{ color: "#64748B" }}>{topic}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                  Target Audience
                </h2>
                <div className="flex flex-wrap gap-3">
                  {training.targetAudience.map((audience, index) => (
                    <span key={index} className="px-4 py-2 rounded-full text-sm" style={{ backgroundColor: "#DBEAFE", color: "#3B82F6" }}>
                      {audience}
                    </span>
                  ))}
                </div>
              </AnimatedSection>

              {training.prerequisites && training.prerequisites.length > 0 && (
                <AnimatedSection>
                  <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                    Prerequisites
                  </h2>
                  <div className="space-y-3">
                    {training.prerequisites.map((prereq, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-xl border" style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)" }}>
                        <CheckCircle2 className="w-5 h-5 mt-0.5" style={{ color: "#F59E0B" }} />
                        <span className="text-sm" style={{ color: "#64748B" }}>{prereq}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              )}
            </div>

            <div className="space-y-6">
              <AnimatedSection>
                <div className="p-6 rounded-2xl border" style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)" }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: "#0A1628" }}>Program Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3"><Clock className="w-5 h-5" style={{ color: "#3B82F6" }} /><span className="text-sm" style={{ color: "#64748B" }}>{training.duration}</span></div>
                    <div className="flex items-center gap-3"><Calendar className="w-5 h-5" style={{ color: "#3B82F6" }} /><span className="text-sm" style={{ color: "#64748B" }}>{training.schedule}</span></div>
                    <div className="flex items-center gap-3"><MapPin className="w-5 h-5" style={{ color: "#3B82F6" }} /><span className="text-sm" style={{ color: "#64748B" }}>{training.location}</span></div>
                    <div className="flex items-center gap-3"><Users className="w-5 h-5" style={{ color: "#3B82F6" }} /><span className="text-sm" style={{ color: "#64748B" }}>Capacity: {training.capacity}</span></div>
                    <div className="flex items-center gap-3"><DollarSign className="w-5 h-5" style={{ color: "#3B82F6" }} /><span className="text-sm" style={{ color: "#64748B" }}>{training.fee}</span></div>
                    <div className="flex items-center gap-3"><GraduationCap className="w-5 h-5" style={{ color: "#3B82F6" }} /><span className="text-sm" style={{ color: "#64748B" }}>{training.certification ? "Certificate Included" : "No Certificate"}</span></div>
                  </div>
                </div>
              </AnimatedSection>

              {training.registrationUrl && (
                <AnimatedSection>
                  <a href={training.registrationUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="primary" className="w-full py-4 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold">
                      Register Now
                    </Button>
                  </a>
                </AnimatedSection>
              )}

              <AnimatedSection>
                <Link href="/digital-transformation/training">
                  <Button variant="outline" className="w-full py-4 rounded-full border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white font-semibold">
                    View All Programs
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
