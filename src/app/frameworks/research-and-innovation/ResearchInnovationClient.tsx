"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { 
  ArrowRight, 
  BookOpen, 
  Microscope, 
  Users, 
  Award, 
  Cpu, 
  DollarSign, 
  Calendar,
  Network,
  TrendingUp,
  FileText,
  Lightbulb,
  Building2
} from "lucide-react";
import { 
  researchProjects, 
  innovationProjects, 
  laboratories, 
  publications, 
  researchers, 
  patents, 
  technologies, 
  researchGrants, 
  innovationEvents,
  partners 
} from "@/lib/research-data";

export default function ResearchInnovationClient() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroY = useTransform(scrollY, [0, 500], [0, 100]);

  const metrics = [
    { value: 25, label: "Research Projects", icon: Microscope },
    { value: 150, label: "Publications", icon: FileText },
    { value: 45, label: "Researchers", icon: Users },
    { value: 12, label: "Innovation Grants", icon: DollarSign },
    { value: 8, label: "Patents", icon: Award },
    { value: 18, label: "Research Partners", icon: Network },
    { value: 5, label: "Technology Transfers", icon: TrendingUp },
    { value: 6, label: "Laboratories", icon: Building2 },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#0D2137]" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 py-32 text-center">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm"
              >
                <span className="text-sm font-semibold tracking-wider text-white/90">RESEARCH & INNOVATION</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.4 }}
                className="font-extrabold text-5xl md:text-7xl text-white leading-tight"
                style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
              >
                Advancing Knowledge Through<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#34D399]">
                  Research, Technology, and Innovation
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.6 }}
                className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
              >
                Discover groundbreaking research, emerging technologies, innovation laboratories, collaborative projects, and scientific breakthroughs driving the future of Surigao del Norte.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button variant="primary" className="px-8 py-4 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold">
                  <Microscope className="w-5 h-5 mr-2" />
                  Explore Research
                </Button>
                <Button variant="outline" className="px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white/10 font-semibold">
                  <Lightbulb className="w-5 h-5 mr-2" />
                  Innovation Projects
                </Button>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2">
            <motion.div 
              animate={{ y: [0, 12, 0] }} 
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-white"
            />
          </div>
        </motion.div>
      </section>

      {/* Innovation Metrics */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-extrabold text-3xl md:text-4xl text-center mb-16"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}
            >
              Innovation Metrics
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="p-6 rounded-2xl border text-center"
                  style={{ 
                    background: "linear-gradient(135deg, #FFFFFF 0%, #F1F5F9 100%)", 
                    borderColor: "#E2E8F0",
                    boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)"
                  }}
                >
                  <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: "#EFF6FF" }}>
                    <metric.icon className="w-6 h-6" style={{ color: "#3B82F6" }} />
                  </div>
                  <motion.div 
                    initial={{ scale: 0 }} 
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="font-extrabold text-4xl mb-2"
                    style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}
                  >
                    {metric.value}+
                  </motion.div>
                  <p className="text-sm font-medium" style={{ color: "#64748B" }}>{metric.label}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Research Projects */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                Featured Research Projects
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
                Groundbreaking research addressing critical challenges in Surigao del Norte
              </p>
            </motion.div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchProjects.map((project) => (
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
                        <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#10B981", color: "white" }}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                        {project.title}
                      </h3>
                      <p className="text-sm mb-3" style={{ color: "#64748B" }}>
                        {project.leadResearcher} • {project.institution}
                      </p>
                      <p className="text-sm mb-4 line-clamp-2" style={{ color: "#94A3B8" }}>
                        {project.summary}
                      </p>
                      <Button variant="outline" className="w-full py-2 rounded-full border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white">
                        Read Research <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center mt-12">
            <Link href="/research-and-innovation/research-projects">
              <Button variant="outline" className="px-8 py-3 rounded-full border-2 border-[#0A1628] text-[#0A1628] hover:bg-[#0A1628] hover:text-white">
                View All Projects <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Innovation Projects */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                Innovation Projects
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
                Active initiatives transforming research into real-world solutions
              </p>
            </motion.div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovationProjects.map((project) => (
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
                    <p className="text-sm" style={{ color: "#94A3B8" }}>
                      {project.fundingSource} • {project.timeline}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Research Laboratories */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                Research Laboratories
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
                State-of-the-art facilities driving scientific discovery
              </p>
            </motion.div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {laboratories.map((lab) => (
              <StaggerItem key={lab.slug}>
                <Link href={`/research-and-innovation/laboratories/${lab.slug}`}>
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
                        src={lab.image} 
                        alt={lab.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                        {lab.name}
                      </h3>
                      <p className="text-sm mb-3" style={{ color: "#64748B" }}>
                        {lab.institution} • {lab.location}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {lab.researchAreas.slice(0, 2).map((area, i) => (
                          <span key={i} className="px-2 py-1 rounded-full text-xs" style={{ backgroundColor: "#DBEAFE", color: "#3B82F6" }}>
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Publications Repository */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                Publications Repository
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
                Access research papers, journals, and technical reports
              </p>
            </motion.div>
          </AnimatedSection>

          <StaggerContainer className="space-y-4">
            {publications.map((pub) => (
              <StaggerItem key={pub.slug}>
                <motion.div 
                  whileHover={{ x: 8 }}
                  className="p-6 rounded-2xl border cursor-pointer"
                  style={{ 
                    background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", 
                    borderColor: "#E2E8F0",
                    boxShadow: "0 4px 20px rgba(10, 22, 40, 0.05)"
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#F3E8FF" }}>
                      <BookOpen className="w-6 h-6" style={{ color: "#8B5CF6" }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#8B5CF6", color: "white" }}>
                          {pub.type}
                        </span>
                        <span className="text-sm" style={{ color: "#64748B" }}>{pub.year}</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                        {pub.title}
                      </h3>
                      <p className="text-sm mb-2" style={{ color: "#64748B" }}>
                        {pub.authors.join(", ")} • {pub.institution}
                      </p>
                      <p className="text-sm line-clamp-2" style={{ color: "#94A3B8" }}>
                        {pub.abstract}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 flex-shrink-0 mt-2" style={{ color: "#8B5CF6" }} />
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center mt-12">
            <Link href="/research-and-innovation/publications">
              <Button variant="outline" className="px-8 py-3 rounded-full border-2 border-[#0A1628] text-[#0A1628] hover:bg-[#0A1628] hover:text-white">
                Browse All Publications <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Researchers Directory */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                Researchers Directory
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
                Connect with leading researchers and innovators
              </p>
            </motion.div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchers.map((researcher) => (
              <StaggerItem key={researcher.slug}>
                <Link href={`/research-and-innovation/researchers/${researcher.slug}`}>
                  <motion.div 
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="rounded-2xl p-6 border cursor-pointer h-full text-center"
                    style={{ 
                      background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", 
                      borderColor: "#E2E8F0",
                      boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)"
                    }}
                  >
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-4" style={{ borderColor: "#3B82F6" }}>
                      <img 
                        src={researcher.photo} 
                        alt={researcher.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                      {researcher.name}
                    </h3>
                    <p className="text-sm mb-2" style={{ color: "#3B82F6" }}>{researcher.specialization}</p>
                    <p className="text-sm mb-4" style={{ color: "#64748B" }}>{researcher.institution}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {researcher.researchInterests.slice(0, 2).map((interest, i) => (
                        <span key={i} className="px-2 py-1 rounded-full text-xs" style={{ backgroundColor: "#DBEAFE", color: "#3B82F6" }}>
                          {interest}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Patents & Intellectual Property */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                Patents & Intellectual Property
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
                Innovation outputs protecting local intellectual property
              </p>
            </motion.div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {patents.map((patent) => (
              <StaggerItem key={patent.slug}>
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="rounded-2xl p-6 border h-full"
                  style={{ 
                    background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", 
                    borderColor: "#E2E8F0",
                    boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)"
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#FEF3C7" }}>
                      <Award className="w-6 h-6" style={{ color: "#F59E0B" }} />
                    </div>
                    <div>
                      <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ 
                        backgroundColor: patent.status === 'Granted' ? '#10B981' : patent.status === 'Pending' ? '#F59E0B' : '#6B7280',
                        color: 'white'
                      }}>
                        {patent.status}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                    {patent.title}
                  </h3>
                  <p className="text-sm mb-2" style={{ color: "#64748B" }}>
                    {patent.inventor} • {patent.institution}
                  </p>
                  {patent.patentNumber && (
                    <p className="text-sm mb-2" style={{ color: "#94A3B8" }}>
                      Patent No: {patent.patentNumber}
                    </p>
                  )}
                  <p className="text-sm" style={{ color: "#94A3B8" }}>
                    Filed: {patent.filingDate}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                Technology Showcase
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
                Emerging technologies driving innovation in Surigao del Norte
              </p>
            </motion.div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech) => (
              <StaggerItem key={tech.slug}>
                <Link href={`/research-and-innovation/technologies/${tech.slug}`}>
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
                        src={tech.image} 
                        alt={tech.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-bold text-xl text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                          {tech.name}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-sm mb-4 line-clamp-3" style={{ color: "#64748B" }}>
                        {tech.overview}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {tech.applications.slice(0, 3).map((app, i) => (
                          <span key={i} className="px-2 py-1 rounded-full text-xs" style={{ backgroundColor: "#DBEAFE", color: "#3B82F6" }}>
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Research Grants & Funding */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                Research Grants & Funding
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
                Funding opportunities to support your research journey
              </p>
            </motion.div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchGrants.map((grant) => (
              <StaggerItem key={grant.slug}>
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="rounded-2xl p-6 border h-full"
                  style={{ 
                    background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", 
                    borderColor: "#E2E8F0",
                    boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)"
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#D1FAE5" }}>
                      <DollarSign className="w-6 h-6" style={{ color: "#10B981" }} />
                    </div>
                    <div>
                      <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#10B981", color: "white" }}>
                        {grant.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                    {grant.title}
                  </h3>
                  <p className="text-sm mb-2" style={{ color: "#64748B" }}>
                    {grant.agency}
                  </p>
                  <p className="text-lg font-bold mb-4" style={{ color: "#10B981" }}>
                    {grant.amount}
                  </p>
                  <div className="flex items-center gap-2 text-sm mb-4" style={{ color: "#94A3B8" }}>
                    <Calendar className="w-4 h-4" />
                    Deadline: {grant.deadline}
                  </div>
                  {grant.applicationLink && (
                    <Button variant="outline" className="w-full py-2 rounded-full border-2 border-[#10B981] text-[#10B981] hover:bg-[#10B981] hover:text-white">
                      Apply Now
                    </Button>
                  )}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Innovation Events */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                Innovation Events
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
                Conferences, symposiums, and technology expos
              </p>
            </motion.div>
          </AnimatedSection>

          <StaggerContainer className="space-y-6">
            {innovationEvents.map((event) => (
              <StaggerItem key={event.slug}>
                <motion.div 
                  whileHover={{ x: 8 }}
                  className="p-6 rounded-2xl border"
                  style={{ 
                    background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", 
                    borderColor: "#E2E8F0",
                    boxShadow: "0 4px 20px rgba(10, 22, 40, 0.05)"
                  }}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 rounded-xl flex flex-col items-center justify-center" style={{ backgroundColor: "#3B82F6" }}>
                        <span className="text-white font-bold text-2xl">{event.date.split(',')[0].split(' ')[0]}</span>
                        <span className="text-white/80 text-xs">{event.date.split(',')[0].split(' ')[1]}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#3B82F6", color: "white" }}>
                          {event.category}
                        </span>
                      </div>
                      <h3 className="font-bold text-xl mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                        {event.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm mb-3" style={{ color: "#64748B" }}>
                        <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{event.date}</span>
                        <span className="flex items-center gap-2">{event.time}</span>
                        <span className="flex items-center gap-2">{event.location}</span>
                      </div>
                      <p className="text-sm mb-3" style={{ color: "#94A3B8" }}>
                        {event.description}
                      </p>
                      <div className="flex items-center gap-4">
                        {event.registrationLink && (
                          <Button variant="primary" className="px-6 py-2 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm">
                            Register Now
                          </Button>
                        )}
                        {event.fee && (
                          <span className="text-sm" style={{ color: "#64748B" }}>Fee: {event.fee}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Collaboration Network */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                Collaboration Network
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
                Partner organizations driving research and innovation
              </p>
            </motion.div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-6 rounded-2xl border"
                  style={{ 
                    background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", 
                    borderColor: "#E2E8F0",
                    boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)"
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#DBEAFE" }}>
                      <Building2 className="w-6 h-6" style={{ color: "#3B82F6" }} />
                    </div>
                    <div>
                      <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#3B82F6", color: "white" }}>
                        {partner.type}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                    {partner.name}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: "#64748B" }}>
                    {partner.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {partner.collaborationAreas.slice(0, 2).map((area, i) => (
                      <span key={i} className="px-2 py-1 rounded-full text-xs" style={{ backgroundColor: "#F3E8FF", color: "#8B5CF6" }}>
                        {area}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0A1628] to-[#1E3A5F]">
        <div className="max-w-[1440px] mx-auto text-center">
          <AnimatedSection>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="font-extrabold text-3xl md:text-5xl text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                Ready to Contribute to Research & Innovation?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Join the thriving research community in Surigao del Norte and help shape the future through groundbreaking discoveries and innovations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" className="px-8 py-4 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold">
                  <Microscope className="w-5 h-5 mr-2" />
                  Submit Research Proposal
                </Button>
                <Button variant="outline" className="px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white/10 font-semibold">
                  <Users className="w-5 h-5 mr-2" />
                  Join as Researcher
                </Button>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
