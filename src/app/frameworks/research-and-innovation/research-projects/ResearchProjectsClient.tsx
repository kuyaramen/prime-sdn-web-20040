"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowRight, Microscope, Calendar, User, Building2 } from "lucide-react";
import { ResearchProject } from "@/lib/research-data";

interface ResearchProjectsClientProps {
  projects: ResearchProject[];
}

export default function ResearchProjectsClient({ projects }: ResearchProjectsClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-6 bg-gradient-to-br from-[#0A1628]/5 to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-extrabold text-4xl md:text-5xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
              Research Projects
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              Groundbreaking research addressing critical challenges in Surigao del Norte
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <StaggerItem key={project.slug}>
                <Link href={`/research-and-innovation/research-projects/${project.slug}`}>
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
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm mb-2" style={{ color: "#64748B" }}>
                        <User className="w-4 h-4" />
                        {project.leadResearcher}
                      </div>
                      <div className="flex items-center gap-2 text-sm mb-3" style={{ color: "#64748B" }}>
                        <Building2 className="w-4 h-4" />
                        {project.institution}
                      </div>
                      <p className="text-sm mb-4 line-clamp-2" style={{ color: "#94A3B8" }}>
                        {project.summary}
                      </p>
                      <div className="flex items-center gap-2 text-sm mb-4" style={{ color: "#94A3B8" }}>
                        <Calendar className="w-4 h-4" />
                        {project.startDate} {project.endDate && `- ${project.endDate}`}
                      </div>
                      <Button variant="outline" className="w-full py-2 rounded-full border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white">
                        Read Research <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
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
