"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Building2, TrendingUp, Users, CheckCircle2, Clock } from "lucide-react";
import { SmartProject } from "@/lib/digital-data";

interface SmartProjectDetailClientProps {
  project: SmartProject;
}

export default function SmartProjectDetailClient({ project }: SmartProjectDetailClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 px-6 bg-gradient-to-br from-[#0A1628] to-[#1E3A5F]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <Link href="/digital-transformation/projects">
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
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ 
                    backgroundColor: project.status === 'Completed' ? '#10B981' : project.status === 'Implementation' ? '#3B82F6' : '#F59E0B',
                    color: 'white'
                  }}>
                    {project.status}
                  </span>
                </div>
                <h1 className="font-extrabold text-3xl md:text-4xl mb-4 text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                  {project.name}
                </h1>
                <p className="text-lg mb-4 text-white/80">{project.description}</p>
                <div className="space-y-2 text-white/80">
                  <div className="flex items-center gap-3"><MapPin className="w-5 h-5" />{project.location}</div>
                  <div className="flex items-center gap-3"><Building2 className="w-5 h-5" />{project.budget}</div>
                  <div className="flex items-center gap-3"><Calendar className="w-5 h-5" />{project.startDate} - {project.targetCompletion}</div>
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
                  Project Objectives
                </h2>
                <div className="space-y-3">
                  {project.objectives.map((objective, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-xl border" style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)" }}>
                      <CheckCircle2 className="w-5 h-5 mt-0.5" style={{ color: "#10B981" }} />
                      <span className="text-sm" style={{ color: "#64748B" }}>{objective}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: "#DBEAFE", color: "#3B82F6" }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                  Project Timeline
                </h2>
                <div className="space-y-4">
                  {project.timeline.map((milestone, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#3B82F6", color: "white", fontWeight: "bold" }}>
                        {index + 1}
                      </div>
                      <span className="text-sm pt-1" style={{ color: "#64748B" }}>{milestone}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                  Project Impact
                </h2>
                <div className="space-y-3">
                  {project.impact.map((impact, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-xl border" style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)" }}>
                      <TrendingUp className="w-5 h-5 mt-0.5" style={{ color: "#10B981" }} />
                      <span className="text-sm" style={{ color: "#64748B" }}>{impact}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                  Partners
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.partners.map((partner, index) => (
                    <span key={index} className="px-4 py-2 rounded-full text-sm" style={{ backgroundColor: "#D1FAE5", color: "#10B981" }}>
                      {partner}
                    </span>
                  ))}
                </div>
              </AnimatedSection>

              {project.updates && project.updates.length > 0 && (
                <AnimatedSection>
                  <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                    Project Updates
                  </h2>
                  <div className="space-y-4">
                    {project.updates.map((update, index) => (
                      <div key={index} className="p-6 rounded-xl border" style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)" }}>
                        <div className="flex items-center gap-3 mb-3">
                          <Clock className="w-5 h-5" style={{ color: "#3B82F6" }} />
                          <span className="text-sm font-semibold" style={{ color: "#0A1628" }}>{update.date}</span>
                        </div>
                        <h3 className="font-semibold text-sm mb-2" style={{ color: "#0A1628" }}>{update.title}</h3>
                        <p className="text-sm" style={{ color: "#64748B" }}>{update.description}</p>
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
                    <div className="flex items-center gap-3"><Calendar className="w-5 h-5" style={{ color: "#3B82F6" }} /><span className="text-sm" style={{ color: "#64748B" }}>Start: {project.startDate}</span></div>
                    <div className="flex items-center gap-3"><Calendar className="w-5 h-5" style={{ color: "#3B82F6" }} /><span className="text-sm" style={{ color: "#64748B" }}>Target: {project.targetCompletion}</span></div>
                    <div className="flex items-center gap-3"><Building2 className="w-5 h-5" style={{ color: "#3B82F6" }} /><span className="text-sm" style={{ color: "#64748B" }}>{project.budget}</span></div>
                    <div className="flex items-center gap-3"><MapPin className="w-5 h-5" style={{ color: "#3B82F6" }} /><span className="text-sm" style={{ color: "#64748B" }}>{project.location}</span></div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <Link href="/digital-transformation/projects">
                  <Button variant="outline" className="w-full py-4 rounded-full border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white font-semibold">
                    View All Projects
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
