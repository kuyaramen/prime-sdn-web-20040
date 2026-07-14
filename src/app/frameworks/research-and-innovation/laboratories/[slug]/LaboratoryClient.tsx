"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowLeft, MapPin, Building2, Microscope, Users, Calendar, Cpu } from "lucide-react";
import { Laboratory } from "@/lib/research-data";

interface LaboratoryClientProps {
  laboratory: Laboratory;
}

export default function LaboratoryClient({ laboratory }: LaboratoryClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 px-6 bg-gradient-to-br from-[#0A1628] to-[#1E3A5F]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <Link href="/research-and-innovation/laboratories">
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
                    src={laboratory.image} 
                    alt={laboratory.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h1 className="font-extrabold text-3xl md:text-4xl mb-4 text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                  {laboratory.name}
                </h1>
                <div className="space-y-3 text-white/80">
                  <div className="flex items-center gap-3"><Building2 className="w-5 h-5" />{laboratory.institution}</div>
                  <div className="flex items-center gap-3"><MapPin className="w-5 h-5" />{laboratory.location}</div>
                  <div className="flex items-center gap-3"><Users className="w-5 h-5" />Capacity: {laboratory.capacity} researchers</div>
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
                  About This Laboratory
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>{laboratory.description}</p>
              </AnimatedSection>
              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                  Equipment
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {laboratory.equipment.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-xl border" style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)" }}>
                      <Cpu className="w-5 h-5" style={{ color: "#3B82F6" }} />
                      <span className="text-sm" style={{ color: "#64748B" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                  Facilities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {laboratory.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-xl border" style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)" }}>
                      <Building2 className="w-5 h-5" style={{ color: "#3B82F6" }} />
                      <span className="text-sm" style={{ color: "#64748B" }}>{facility}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                  Research Areas
                </h2>
                <div className="flex flex-wrap gap-3">
                  {laboratory.researchAreas.map((area, index) => (
                    <span key={index} className="px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: "#DBEAFE", color: "#3B82F6" }}>
                      {area}
                    </span>
                  ))}
                </div>
              </AnimatedSection>
            </div>
            <div className="space-y-6">
              <AnimatedSection>
                <div className="p-6 rounded-2xl border" style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)" }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: "#0A1628" }}>Lab Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3"><Building2 className="w-5 h-5" style={{ color: "#3B82F6" }} /><span style={{ color: "#64748B" }}>Institution: {laboratory.institution}</span></div>
                    <div className="flex items-center gap-3"><MapPin className="w-5 h-5" style={{ color: "#3B82F6" }} /><span style={{ color: "#64748B" }}>Location: {laboratory.location}</span></div>
                    <div className="flex items-center gap-3"><Users className="w-5 h-5" style={{ color: "#3B82F6" }} /><span style={{ color: "#64748B" }}>Capacity: {laboratory.capacity}</span></div>
                  </div>
                </div>
              </AnimatedSection>
              {laboratory.bookingLink && (
                <AnimatedSection>
                  <Button variant="primary" className="w-full py-4 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Facility
                  </Button>
                </AnimatedSection>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
