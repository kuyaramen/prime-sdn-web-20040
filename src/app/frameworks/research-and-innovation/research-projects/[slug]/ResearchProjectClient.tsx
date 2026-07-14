"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Building2, CheckCircle2, Clock, Users, FileText } from "lucide-react";
import { ResearchProject } from "@/lib/research-data";

interface ResearchProjectClientProps {
  project: ResearchProject;
}

export default function ResearchProjectClient({ project }: ResearchProjectClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 px-6 bg-gradient-to-br from-[#0A1628] to-[#1E3A5F]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <Link href="/research-and-innovation/research-projects">
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
                    src={project.coverImage} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#3B82F6", color: "white" }}>
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ 
                      backgroundColor: project.status === 'Ongoing' ? '#10B981' : project.status === 'Completed' ? '#3B82F6' : '#F59E0B',
                      color: "white"
                    }}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h1 className="font-extrabold text-3xl md:text-4xl mb-4 text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                  {project.title}
                </h1>
                <div className="space-y-3 text-white/80">
                  <div className="flex items-center gap-3"><User className="w-5 h-5" />{project.leadResearcher}</div>
                  <div className="flex items-center gap-3"><Building2 className="w-5 h-5" />{project.institution}</div>
                  <div className="flex items-center gap-3"><Calendar className="w-5 h-5" />{project.startDate} {project.endDate && `- ${project.endDate}`}</div>
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
                  About This Research
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>{project.fullDescription}</p>
              </AnimatedSection>
              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                  Research Team
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.researchTeam.map((member, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-xl border" style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)" }}>
                      <Users className="w-5 h-5" style={{ color: "#3B82F6" }} />
                      <span className="text-sm" style={{ color: "#64748B" }}>{member}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                  Timeline
                </h2>
                <div className="space-y-4">
                  {project.timeline.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-xl border" style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)" }}>
                      <Clock className="w-5 h-5 mt-0.5" style={{ color: "#3B82F6" }} />
                      <span className="text-sm" style={{ color: "#64748B" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
              {project.outcomes && project.outcomes.length > 0 && (
                <AnimatedSection>
                  <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                    Expected Outcomes
                  </h2>
                  <div className="space-y-3">
                    {project.outcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-xl border" style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)" }}>
                        <CheckCircle2 className="w-5 h-5 mt-0.5" style={{ color: "#10B981" }} />
                        <span className="text-sm" style={{ color: "#64748B" }}>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              )}
            </div>
            <div className="space-y-6">
              <AnimatedSection>
                <div className="p-6 rounded-2xl border" style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)" }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: "#0A1628" }}>Project Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3"><FileText className="w-5 h-5" style={{ color: "#3B82F6" }} /><span style={{ color: "#64748B" }}>Category: {project.category}</span></div>
                    <div className="flex items-center gap-3"><Clock className="w-5 h-5" style={{ color: "#3B82F6" }} /><span style={{ color: "#64748B" }}>Status: {project.status}</span></div>
                    <div className="flex items-center gap-3"><Calendar className="w-5 h-5" style={{ color: "#3B82F6" }} /><span style={{ color: "#64748B" }}>Duration: {project.startDate} {project.endDate && `- ${project.endDate}`}</span></div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <div className="p-6 rounded-2xl border" style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)" }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: "#0A1628" }}>Lead Researcher</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3B82F6]/20 to-[#3B82F6]/5 flex items-center justify-center">
                      <User className="w-8 h-8" style={{ color: "#3B82F6" }} />
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: "#0A1628" }}>{project.leadResearcher}</p>
                      <p className="text-sm" style={{ color: "#64748B" }}>{project.institution}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
