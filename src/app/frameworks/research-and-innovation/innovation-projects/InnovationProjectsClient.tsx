"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { TrendingUp, Clock, DollarSign, Users } from "lucide-react";
import { InnovationProject } from "@/lib/research-data";

interface InnovationProjectsClientProps {
  projects: InnovationProject[];
}

export default function InnovationProjectsClient({ projects }: InnovationProjectsClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-6 bg-gradient-to-br from-[#0A1628]/5 to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-extrabold text-4xl md:text-5xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
              Innovation Projects
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              Active initiatives transforming research into real-world solutions
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <StaggerItem key={project.slug}>
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="rounded-2xl overflow-hidden border h-full"
                  style={{ 
                    background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", 
                    borderColor: "#E2E8F0",
                    boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)"
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#8B5CF6", color: "white" }}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                      {project.title}
                    </h3>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1" style={{ color: "#64748B" }}>
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full" style={{ backgroundColor: "#E2E8F0" }}>
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${project.progress}%` }}
                          viewport={{ once: true }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: "#8B5CF6" }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="px-2 py-1 rounded-full text-xs" style={{ backgroundColor: "#F3E8FF", color: "#8B5CF6" }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-2 text-sm" style={{ color: "#94A3B8" }}>
                      <div className="flex items-center gap-2"><Clock className="w-4 h-4" />{project.timeline}</div>
                      <div className="flex items-center gap-2"><DollarSign className="w-4 h-4" />{project.fundingSource}</div>
                      <div className="flex items-center gap-2"><Users className="w-4 h-4" />{project.collaborators.length} collaborators</div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
