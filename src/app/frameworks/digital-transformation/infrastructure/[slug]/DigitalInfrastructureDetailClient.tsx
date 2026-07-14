"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowLeft, Wifi, Server, Database, Monitor, Zap, MapPin, CheckCircle2, Calendar } from "lucide-react";
import { DigitalInfrastructure } from "@/lib/digital-data";

interface DigitalInfrastructureDetailClientProps {
  infrastructure: DigitalInfrastructure;
}

export default function DigitalInfrastructureDetailClient({ infrastructure }: DigitalInfrastructureDetailClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 px-6 bg-gradient-to-br from-[#0A1628] to-[#1E3A5F]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <Link href="/digital-transformation/infrastructure">
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
                    src={infrastructure.images[0]} 
                    alt={infrastructure.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#3B82F6" }}>
                    {infrastructure.type === 'Connectivity' && <Wifi className="w-6 h-6 text-white" />}
                    {infrastructure.type === 'Cloud' && <Server className="w-6 h-6 text-white" />}
                    {infrastructure.type === 'Data Center' && <Database className="w-6 h-6 text-white" />}
                    {infrastructure.type === 'Smart Facility' && <Monitor className="w-6 h-6 text-white" />}
                    {infrastructure.type === 'Network' && <Zap className="w-6 h-6 text-white" />}
                  </div>
                  <div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#3B82F6", color: "white" }}>
                      {infrastructure.type}
                    </span>
                  </div>
                </div>
                <h1 className="font-extrabold text-3xl md:text-4xl mb-4 text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                  {infrastructure.name}
                </h1>
                <p className="text-lg mb-4 text-white/80">{infrastructure.description}</p>
                <div className="space-y-2 text-white/80">
                  <div className="flex items-center gap-3"><MapPin className="w-5 h-5" />{infrastructure.location}</div>
                  <div className="flex items-center gap-3"><Calendar className="w-5 h-5" />Target: {infrastructure.completionDate || "Ongoing"}</div>
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
                  Infrastructure Overview
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>{infrastructure.description}</p>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-3">
                  {infrastructure.technologies.map((tech, index) => (
                    <span key={index} className="px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: "#DBEAFE", color: "#3B82F6" }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                  Specifications
                </h2>
                <div className="space-y-3">
                  {infrastructure.specifications.map((spec, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-xl border" style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)" }}>
                      <CheckCircle2 className="w-5 h-5 mt-0.5" style={{ color: "#10B981" }} />
                      <span className="text-sm" style={{ color: "#64748B" }}>{spec}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {infrastructure.relatedProjects && infrastructure.relatedProjects.length > 0 && (
                <AnimatedSection>
                  <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                    Related Projects
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {infrastructure.relatedProjects.map((project, index) => (
                      <Link key={index} href={`/digital-transformation/projects/${project}`}>
                        <span className="px-4 py-2 rounded-full text-sm cursor-pointer" style={{ backgroundColor: "#D1FAE5", color: "#10B981" }}>
                          {project}
                        </span>
                      </Link>
                    ))}
                  </div>
                </AnimatedSection>
              )}
            </div>

            <div className="space-y-6">
              <AnimatedSection>
                <div className="p-6 rounded-2xl border" style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)" }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: "#0A1628" }}>Infrastructure Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3"><MapPin className="w-5 h-5" style={{ color: "#3B82F6" }} /><span className="text-sm" style={{ color: "#64748B" }}>{infrastructure.location}</span></div>
                    <div className="flex items-center gap-3"><Server className="w-5 h-5" style={{ color: "#3B82F6" }} /><span className="text-sm" style={{ color: "#64748B" }}>Capacity: {infrastructure.capacity}</span></div>
                    <div className="flex items-center gap-3"><Wifi className="w-5 h-5" style={{ color: "#3B82F6" }} /><span className="text-sm" style={{ color: "#64748B" }}>Coverage: {infrastructure.coverage}</span></div>
                    <div className="flex items-center gap-3"><Calendar className="w-5 h-5" style={{ color: "#3B82F6" }} /><span className="text-sm" style={{ color: "#64748B" }}>Target: {infrastructure.completionDate || "Ongoing"}</span></div>
                  </div>
                  <div className="mt-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span style={{ color: "#64748B" }}>Progress</span>
                      <span style={{ color: "#3B82F6", fontWeight: "600" }}>{infrastructure.progress}%</span>
                    </div>
                    <div className="w-full h-3 rounded-full" style={{ backgroundColor: "#E2E8F0" }}>
                      <div 
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${infrastructure.progress}%`, backgroundColor: "#3B82F6" }}
                      />
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <Link href="/digital-transformation/infrastructure">
                  <Button variant="outline" className="w-full py-4 rounded-full border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white font-semibold">
                    View All Infrastructure
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
