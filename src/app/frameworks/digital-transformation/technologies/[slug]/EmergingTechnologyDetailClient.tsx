"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowLeft, Cpu, Brain, Database, Map, Plane, Building, Cloud, CheckCircle2, TrendingUp } from "lucide-react";
import { EmergingTechnology } from "@/lib/digital-data";

interface EmergingTechnologyDetailClientProps {
  technology: EmergingTechnology;
}

export default function EmergingTechnologyDetailClient({ technology }: EmergingTechnologyDetailClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 px-6 bg-gradient-to-br from-[#0A1628] to-[#1E3A5F]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <Link href="/digital-transformation/technologies">
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
                    src={technology.image} 
                    alt={technology.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ 
                    backgroundColor: technology.adoptionLevel === 'Mature' ? '#10B981' : technology.adoptionLevel === 'Growing' ? '#3B82F6' : '#F59E0B',
                    color: 'white'
                  }}>
                    {technology.adoptionLevel}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#3B82F6", color: "white" }}>
                    {technology.category}
                  </span>
                </div>
                <h1 className="font-extrabold text-3xl md:text-4xl mb-4 text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                  {technology.name}
                </h1>
                <p className="text-lg mb-4 text-white/80">{technology.overview}</p>
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
                  Technology Overview
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>{technology.overview}</p>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                  Applications
                </h2>
                <div className="space-y-3">
                  {technology.applications.map((app, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-xl border" style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)" }}>
                      <CheckCircle2 className="w-5 h-5 mt-0.5" style={{ color: "#10B981" }} />
                      <span className="text-sm" style={{ color: "#64748B" }}>{app}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                  Local Use Cases
                </h2>
                <div className="space-y-3">
                  {technology.localUseCases.map((useCase, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-xl border" style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)" }}>
                      <TrendingUp className="w-5 h-5 mt-0.5" style={{ color: "#3B82F6" }} />
                      <span className="text-sm" style={{ color: "#64748B" }}>{useCase}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                  Future Opportunities
                </h2>
                <div className="space-y-3">
                  {technology.futureOpportunities.map((opportunity, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-xl border" style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)" }}>
                      <CheckCircle2 className="w-5 h-5 mt-0.5" style={{ color: "#F59E0B" }} />
                      <span className="text-sm" style={{ color: "#64748B" }}>{opportunity}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {technology.relatedProjects && technology.relatedProjects.length > 0 && (
                <AnimatedSection>
                  <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                    Related Projects
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {technology.relatedProjects.map((project, index) => (
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
                  <h3 className="font-bold text-lg mb-4" style={{ color: "#0A1628" }}>Technology Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3"><Cpu className="w-5 h-5" style={{ color: "#3B82F6" }} /><span className="text-sm" style={{ color: "#64748B" }}>Category: {technology.category}</span></div>
                    <div className="flex items-center gap-3"><TrendingUp className="w-5 h-5" style={{ color: "#3B82F6" }} /><span className="text-sm" style={{ color: "#64748B" }}>Adoption: {technology.adoptionLevel}</span></div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <Link href="/digital-transformation/technologies">
                  <Button variant="outline" className="w-full py-4 rounded-full border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white font-semibold">
                    View All Technologies
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
