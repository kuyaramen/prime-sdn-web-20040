"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Building2, TrendingUp } from "lucide-react";
import { SmartProject } from "@/lib/digital-data";

interface SmartProjectsClientProps {
  projects: SmartProject[];
}

export default function SmartProjectsClient({ projects }: SmartProjectsClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-6 bg-gradient-to-br from-[#0A1628]/5 to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-extrabold text-4xl md:text-5xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
              Smart Province Projects
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              Flagship digital transformation initiatives across the province
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <StaggerItem key={project.slug}>
                <Link href={`/digital-transformation/projects/${project.slug}`}>
                  <motion.div 
                    whileHover={{ x: 8 }}
                    className="p-6 rounded-2xl border cursor-pointer"
                    style={{ 
                      background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", 
                      borderColor: "#E2E8F0",
                      boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)"
                    }}
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 rounded-xl overflow-hidden">
                          <img 
                            src={project.coverImage} 
                            alt={project.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ 
                            backgroundColor: project.status === 'Completed' ? '#10B981' : project.status === 'Implementation' ? '#3B82F6' : '#F59E0B',
                            color: 'white'
                          }}>
                            {project.status}
                          </span>
                        </div>
                        <h3 className="font-bold text-xl mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                          {project.name}
                        </h3>
                        <p className="text-sm mb-3 line-clamp-2" style={{ color: "#64748B" }}>
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.technologies.slice(0, 3).map((tech, i) => (
                            <span key={i} className="px-2 py-1 rounded-full text-xs" style={{ backgroundColor: "#DBEAFE", color: "#3B82F6" }}>
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 text-sm" style={{ color: "#64748B" }}>
                          <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />{project.location}</span>
                          <span className="flex items-center gap-2"><Building2 className="w-4 h-4" />{project.budget}</span>
                        </div>
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
