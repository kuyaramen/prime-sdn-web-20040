"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { 
  ArrowRight, 
  Globe, 
  Briefcase, 
  Users, 
  CreditCard, 
  MessageSquare,
  Monitor,
  Server,
  Wifi,
  Shield,
  GraduationCap,
  TrendingUp,
  Building2,
  Calendar,
  Zap,
  Cpu,
  Database,
  Lock,
  CheckCircle2
} from "lucide-react";
import { 
  digitalServices, 
  smartProjects, 
  digitalInfrastructure, 
  emergingTechnologies,
  cybersecurityInitiatives,
  digitalTraining,
  digitalSuccessStories,
  digitalPartners,
  digitalEvents
} from "@/lib/digital-data";

export default function DigitalTransformationClient() {
  const digitalMetrics = [
    { value: 18, label: "Online Services", suffix: "" },
    { value: 26, label: "Connected Barangays", suffix: "" },
    { value: 150, label: "Public Wi-Fi Sites", suffix: "" },
    { value: 8, label: "Smart Projects", suffix: "" },
    { value: 50000, label: "Citizens Served", suffix: "+" },
    { value: 150000, label: "Digital Transactions", suffix: "+" },
    { value: 15, label: "Government Agencies", suffix: "" },
    { value: 2000, label: "ICT Training Graduates", suffix: "+" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#0A1628]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 py-20">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <motion.span 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
                style={{ backgroundColor: "rgba(59, 130, 246, 0.2)", color: "#60A5FA", border: "1px solid rgba(59, 130, 246, 0.3)" }}
              >
                DIGITAL TRANSFORMATION
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.3 }}
                className="font-extrabold text-5xl md:text-7xl mb-6 text-white"
                style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
              >
                Building a Smarter, More Connected<br />
                <span style={{ color: "#60A5FA" }}>Surigao del Norte</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.4 }}
                className="text-xl text-white/80 max-w-3xl mx-auto mb-10"
              >
                Discover how digital innovation, smart infrastructure, AI, connectivity, cybersecurity, and digital public services are transforming governance, businesses, education, and communities.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/digital-transformation/services">
                  <Button className="px-8 py-4 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold text-lg">
                    Explore Digital Initiatives <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/digital-transformation/projects">
                  <Button variant="outline" className="px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white/10 font-semibold text-lg">
                    View Smart Projects
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Innovation Dashboard */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-extrabold text-3xl md:text-4xl mb-12 text-center" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
              Innovation Dashboard
            </motion.h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {digitalMetrics.map((metric, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl text-center"
                  style={{ 
                    background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", 
                    borderColor: "#E2E8F0",
                    boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)"
                  }}
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    className="font-extrabold text-4xl md:text-5xl mb-2"
                    style={{ color: "#3B82F6", fontFamily: "Montserrat, Arial, sans-serif" }}
                  >
                    {metric.value.toLocaleString()}{metric.suffix}
                  </motion.div>
                  <div className="text-sm" style={{ color: "#64748B" }}>{metric.label}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Digital Government Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center mb-12">
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
              Digital Government Services
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg" style={{ color: "#64748B" }}>
              Access government services online, anytime, anywhere
            </motion.p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalServices.map((service) => (
              <StaggerItem key={service.slug}>
                <Link href={`/digital-transformation/services/${service.slug}`}>
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
                        src={service.coverImage} 
                        alt={service.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ 
                          backgroundColor: service.status === 'Active' ? '#10B981' : '#F59E0B',
                          color: 'white'
                        }}>
                          {service.status}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: "#3B82F6" }}>
                          {service.icon === 'Globe' && <Globe className="w-6 h-6 text-white" />}
                          {service.icon === 'Briefcase' && <Briefcase className="w-6 h-6 text-white" />}
                          {service.icon === 'Users' && <Users className="w-6 h-6 text-white" />}
                          {service.icon === 'CreditCard' && <CreditCard className="w-6 h-6 text-white" />}
                          {service.icon === 'MessageSquare' && <MessageSquare className="w-6 h-6 text-white" />}
                        </div>
                        <h3 className="font-bold text-xl text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                          {service.name}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-sm mb-4 line-clamp-2" style={{ color: "#64748B" }}>
                        {service.description}
                      </p>
                      <div className="flex items-center text-sm" style={{ color: "#3B82F6" }}>
                        Access Service <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Smart Province Projects */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center mb-12">
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
              Smart Province Projects
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg" style={{ color: "#64748B" }}>
              Flagship digital transformation initiatives across the province
            </motion.p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {smartProjects.map((project) => (
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
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech, i) => (
                            <span key={i} className="px-2 py-1 rounded-full text-xs" style={{ backgroundColor: "#DBEAFE", color: "#3B82F6" }}>
                              {tech}
                            </span>
                          ))}
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

      {/* Digital Infrastructure */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center mb-12">
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
              Digital Infrastructure
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg" style={{ color: "#64748B" }}>
              Building the foundation for a connected province
            </motion.p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {digitalInfrastructure.map((infra) => (
              <StaggerItem key={infra.slug}>
                <Link href={`/digital-transformation/infrastructure/${infra.slug}`}>
                  <motion.div 
                    whileHover={{ y: -8 }}
                    className="p-6 rounded-2xl border cursor-pointer"
                    style={{ 
                      background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", 
                      borderColor: "#E2E8F0",
                      boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)"
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#DBEAFE" }}>
                        {infra.type === 'Connectivity' && <Wifi className="w-6 h-6" style={{ color: "#3B82F6" }} />}
                        {infra.type === 'Cloud' && <Server className="w-6 h-6" style={{ color: "#3B82F6" }} />}
                        {infra.type === 'Data Center' && <Database className="w-6 h-6" style={{ color: "#3B82F6" }} />}
                        {infra.type === 'Smart Facility' && <Monitor className="w-6 h-6" style={{ color: "#3B82F6" }} />}
                        {infra.type === 'Network' && <Zap className="w-6 h-6" style={{ color: "#3B82F6" }} />}
                      </div>
                      <div>
                        <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#3B82F6", color: "white" }}>
                          {infra.type}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-bold text-xl mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                      {infra.name}
                    </h3>
                    <p className="text-sm mb-4" style={{ color: "#64748B" }}>
                      {infra.description}
                    </p>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span style={{ color: "#64748B" }}>Progress</span>
                        <span style={{ color: "#3B82F6", fontWeight: "600" }}>{infra.progress}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full" style={{ backgroundColor: "#E2E8F0" }}>
                        <div 
                          className="h-full rounded-full transition-all duration-500"
                          style={{ width: `${infra.progress}%`, backgroundColor: "#3B82F6" }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center text-sm" style={{ color: "#3B82F6" }}>
                      View Details <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* AI & Emerging Technologies */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center mb-12">
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
              AI & Emerging Technologies
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg" style={{ color: "#64748B" }}>
              Technologies driving the digital transformation
            </motion.p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergingTechnologies.map((tech) => (
              <StaggerItem key={tech.slug}>
                <Link href={`/digital-transformation/technologies/${tech.slug}`}>
                  <motion.div 
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="p-6 rounded-2xl border cursor-pointer h-full"
                    style={{ 
                      background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", 
                      borderColor: "#E2E8F0",
                      boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)"
                    }}
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden mb-4">
                      <img 
                        src={tech.image} 
                        alt={tech.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mb-3">
                      <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ 
                        backgroundColor: tech.adoptionLevel === 'Mature' ? '#10B981' : tech.adoptionLevel === 'Growing' ? '#3B82F6' : '#F59E0B',
                        color: 'white'
                      }}>
                        {tech.adoptionLevel}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                      {tech.name}
                    </h3>
                    <p className="text-sm line-clamp-2" style={{ color: "#64748B" }}>
                      {tech.overview}
                    </p>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Cybersecurity & Data Privacy */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center mb-12">
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
              Cybersecurity & Data Privacy
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg" style={{ color: "#64748B" }}>
              Protecting our digital infrastructure and citizen data
            </motion.p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cybersecurityInitiatives.map((initiative) => (
              <StaggerItem key={initiative.slug}>
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="p-6 rounded-2xl border"
                  style={{ 
                    background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", 
                    borderColor: "#E2E8F0",
                    boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)"
                  }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "#FEF3C7" }}>
                    <Shield className="w-6 h-6" style={{ color: "#F59E0B" }} />
                  </div>
                  <div className="mb-3">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#F59E0B", color: "white" }}>
                      {initiative.type}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                    {initiative.name}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: "#64748B" }}>
                    {initiative.description}
                  </p>
                  <div className="space-y-2">
                    {initiative.bestPractices.slice(0, 2).map((practice, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm" style={{ color: "#64748B" }}>
                        <CheckCircle2 className="w-4 h-4" style={{ color: "#10B981" }} />
                        {practice}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Digital Skills & Adoption */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center mb-12">
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
              Digital Skills & Adoption
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg" style={{ color: "#64748B" }}>
              Programs to help citizens and businesses adopt technology
            </motion.p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {digitalTraining.map((training) => (
              <StaggerItem key={training.slug}>
                <Link href={`/digital-transformation/training/${training.slug}`}>
                  <motion.div 
                    whileHover={{ x: 8 }}
                    className="p-6 rounded-2xl border cursor-pointer"
                    style={{ 
                      background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", 
                      borderColor: "#E2E8F0",
                      boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)"
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#D1FAE5" }}>
                          <GraduationCap className="w-6 h-6" style={{ color: "#10B981" }} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#10B981", color: "white" }}>
                            {training.category}
                          </span>
                          <span className="px-2 py-1 rounded-full text-xs" style={{ backgroundColor: "#DBEAFE", color: "#3B82F6" }}>
                            {training.mode}
                          </span>
                        </div>
                        <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                          {training.title}
                        </h3>
                        <p className="text-sm mb-3" style={{ color: "#64748B" }}>
                          {training.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm" style={{ color: "#64748B" }}>
                          <span>{training.duration}</span>
                          <span>•</span>
                          <span>{training.fee}</span>
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

      {/* Success Stories */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center mb-12">
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
              Success Stories
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg" style={{ color: "#64748B" }}>
              Real impact from digital transformation initiatives
            </motion.p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {digitalSuccessStories.map((story) => (
              <StaggerItem key={story.slug}>
                <Link href={`/digital-transformation/stories/${story.slug}`}>
                  <motion.div 
                    whileHover={{ y: -8 }}
                    className="rounded-2xl overflow-hidden border cursor-pointer h-full"
                    style={{ 
                      background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", 
                      borderColor: "#E2E8F0",
                      boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)"
                    }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={story.images[0]} 
                        alt={story.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#3B82F6", color: "white" }}>
                          {story.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                        {story.title}
                      </h3>
                      <p className="text-sm mb-4 line-clamp-2" style={{ color: "#64748B" }}>
                        {story.story}
                      </p>
                      <div className="space-y-2">
                        {story.metrics.slice(0, 2).map((metric, i) => (
                          <div key={i} className="flex items-center justify-between text-sm">
                            <span style={{ color: "#64748B" }}>{metric.label}</span>
                            <span className="font-semibold" style={{ color: "#10B981" }}>{metric.value}</span>
                          </div>
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

      {/* Partners & Technology Providers */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center mb-12">
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
              Partners & Technology Providers
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg" style={{ color: "#64748B" }}>
              Organizations driving digital transformation together
            </motion.p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {digitalPartners.map((partner, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl border text-center"
                  style={{ 
                    background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", 
                    borderColor: "#E2E8F0",
                    boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)"
                  }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: "#DBEAFE" }}>
                    <Building2 className="w-8 h-8" style={{ color: "#3B82F6" }} />
                  </div>
                  <div className="mb-2">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#3B82F6", color: "white" }}>
                      {partner.type}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                    {partner.name}
                  </h3>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Digital Events */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center mb-12">
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
              Digital Events
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg" style={{ color: "#64748B" }}>
              Upcoming activities and opportunities
            </motion.p>
          </AnimatedSection>
          <StaggerContainer className="space-y-6">
            {digitalEvents.map((event) => (
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
                        <span className="flex items-center gap-2"><Zap className="w-4 h-4" />{event.time}</span>
                        <span className="flex items-center gap-2"><Building2 className="w-4 h-4" />{event.venue}</span>
                      </div>
                      <p className="text-sm mb-3" style={{ color: "#94A3B8" }}>
                        {event.description}
                      </p>
                      <div className="flex items-center gap-4">
                        {event.registrationUrl && (
                          <Button variant="primary" className="px-6 py-2 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm">
                            Register Now
                          </Button>
                        )}
                        <span className="text-sm" style={{ color: "#64748B" }}>{event.fee}</span>
                      </div>
                    </div>
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
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-extrabold text-3xl md:text-4xl mb-6 text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
              Be Part of Surigao del Norte's Digital Future
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Join us in building a smarter, more connected province. Explore digital services, participate in training programs, and discover opportunities in the digital economy.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/digital-transformation/services">
                <Button className="px-8 py-4 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold text-lg">
                  Explore Services
                </Button>
              </Link>
              <Link href="/digital-transformation/training">
                <Button variant="outline" className="px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white/10 font-semibold text-lg">
                  Join Training Programs
                </Button>
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
