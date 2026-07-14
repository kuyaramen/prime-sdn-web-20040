"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { 
  ArrowRight, 
  Eye, 
  Target, 
  Rocket, 
  GraduationCap, 
  FlaskConical, 
  Monitor, 
  Handshake, 
  Sprout,
  TrendingUp,
  Building2,
  ExternalLink,
  Lightbulb,
  Users,
  Leaf
} from "lucide-react";
import { 
  aboutHero, 
  aboutStory, 
  visionMission, 
  impactStats, 
  aboutPartners, 
  aboutCTA 
} from "@/lib/about-data";
import { ECOSYSTEM_PILLARS } from "@/components/Ecosystem/ecosystemData";

// Animated Counter Component
function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <div ref={ref} className="text-5xl md:text-6xl font-extrabold" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {value.toLocaleString()}{suffix}
        </motion.span>
      ) : (
        <span>0{suffix}</span>
      )}
    </div>
  );
}

export function AboutClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={aboutHero.backgroundImage} 
            alt="Surigao del Norte landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/80 via-[#1E3A5F]/70 to-[#0A1628]/90" />
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
                {aboutHero.eyebrow}
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.3 }}
                className="font-extrabold text-5xl md:text-7xl mb-6 text-white"
                style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
              >
                {aboutHero.heading}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.4 }}
                className="text-xl text-white/80 max-w-3xl mx-auto mb-10"
              >
                {aboutHero.description}
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="#pillars">
                  <Button className="px-8 py-4 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold text-lg">
                    {aboutHero.primaryButton} <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button variant="outline" className="px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white/10 font-semibold text-lg">
                    {aboutHero.secondaryButton}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== OUR STORY SECTION ===== */}
      <section id="story" className="py-20 px-6 bg-gradient-to-br from-white to-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <img 
                  src={aboutStory.image} 
                  alt="Collaboration and innovation"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <h2 className="font-extrabold text-3xl md:text-4xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                {aboutStory.heading}
              </h2>
              <div className="space-y-4 mb-8">
                {aboutStory.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {aboutStory.highlightCards.map((card, index) => (
                  <div key={index} className="p-4 rounded-xl border" style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)" }}>
                    <h3 className="font-bold text-sm mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                      {card.title}
                    </h3>
                    <p className="text-xs" style={{ color: "#64748B" }}>{card.description}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== VISION SECTION ===== */}
      <section id="vision" className="py-24 px-6 bg-gradient-to-br from-white to-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <img 
                  src={visionMission.vision.image} 
                  alt="Vision of Surigao del Norte"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/30 to-transparent" />
              </motion.div>
            </AnimatedSection>
            <AnimatedSection>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.3 }}
                  className="inline-block font-semibold uppercase tracking-widest text-sm mb-6"
                  style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#3B82F6", letterSpacing: "0.2em" }}
                >
                  {visionMission.vision.eyebrow}
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.4 }}
                  className="font-extrabold text-4xl md:text-5xl mb-8 leading-tight"
                  style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}
                >
                  {visionMission.vision.heading}
                </motion.h2>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.5 }}
                  className="space-y-6 mb-10"
                >
                  {visionMission.vision.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-lg leading-[1.8] max-w-[650px]" style={{ color: "#64748B" }}>
                      {paragraph}
                    </p>
                  ))}
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.6 }}
                  className="space-y-6"
                >
                  {visionMission.vision.highlights.map((highlight, index) => {
                    const IconComponent = 
                      highlight.icon === "Lightbulb" ? Lightbulb :
                      highlight.icon === "Users" ? Users :
                      highlight.icon === "Leaf" ? Leaf :
                      Eye;
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#EAF2FF" }}>
                          <IconComponent className="w-6 h-6" style={{ color: "#3B82F6" }} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                            {highlight.title}
                          </h3>
                          <p className="text-sm" style={{ color: "#64748B" }}>
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== MISSION SECTION ===== */}
      <section id="mission" className="py-24 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2 }}
                  className="inline-block font-semibold uppercase tracking-widest text-sm mb-6"
                  style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#3B82F6", letterSpacing: "0.2em" }}
                >
                  {visionMission.mission.eyebrow}
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.3 }}
                  className="font-extrabold text-4xl md:text-5xl mb-8 leading-tight"
                  style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}
                >
                  {visionMission.mission.heading}
                </motion.h2>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.4 }}
                  className="space-y-6 mb-10"
                >
                  {visionMission.mission.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-lg leading-[1.8] max-w-[650px]" style={{ color: "#64748B" }}>
                      {paragraph}
                    </p>
                  ))}
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {visionMission.mission.principles.map((principle, index) => {
                    const IconComponent = 
                      principle.icon === "Rocket" ? Rocket :
                      principle.icon === "GraduationCap" ? GraduationCap :
                      principle.icon === "Handshake" ? Handshake :
                      principle.icon === "Monitor" ? Monitor :
                      Target;
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#EAF2FF" }}>
                          <IconComponent className="w-6 h-6" style={{ color: "#3B82F6" }} />
                        </div>
                        <div>
                          <h3 className="font-bold text-base mb-1" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                            {principle.title}
                          </h3>
                          <p className="text-sm" style={{ color: "#64748B" }}>
                            {principle.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </AnimatedSection>
            <AnimatedSection>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <img 
                  src={visionMission.mission.image} 
                  alt="Mission in action"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/30 to-transparent" />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== SIX STRATEGIC PILLARS SECTION ===== */}
      <section id="pillars" className="py-20 px-6 bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
              Six Strategic Pillars
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              The foundation of our innovation ecosystem
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ECOSYSTEM_PILLARS.map((pillar) => (
              <StaggerItem key={pillar.slug}>
                <Link href={`/frameworks/${pillar.slug}`}>
                  <motion.div 
                    whileHover={{ y: -12, scale: 1.02 }}
                    className="p-8 rounded-2xl border cursor-pointer h-full"
                    style={{ 
                      background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", 
                      borderColor: "#E2E8F0",
                      boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)"
                    }}
                  >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: pillar.accentColor }}>
                      {pillar.slug === "startup-development" && <Rocket className="w-8 h-8 text-white" />}
                      {pillar.slug === "education-and-talent" && <GraduationCap className="w-8 h-8 text-white" />}
                      {pillar.slug === "research-and-innovation" && <FlaskConical className="w-8 h-8 text-white" />}
                      {pillar.slug === "digital-transformation" && <Monitor className="w-8 h-8 text-white" />}
                      {pillar.slug === "partnerships-investments" && <Handshake className="w-8 h-8 text-white" />}
                      {pillar.slug === "sustainable-communities" && <Sprout className="w-8 h-8 text-white" />}
                    </div>
                    <h3 className="font-extrabold text-xl mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                      {pillar.title}
                    </h3>
                    <p className="text-sm mb-6" style={{ color: "#64748B" }}>
                      {pillar.description}
                    </p>
                    <div className="flex items-center text-sm font-semibold" style={{ color: pillar.accentColor }}>
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== OUR IMPACT SECTION ===== */}
      <section id="impact" className="py-20 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
              Our Impact
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              Measurable results driving transformation
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {impactStats.map((stat, index) => (
              <AnimatedSection key={index} className="text-center">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-sm mt-2" style={{ color: "#64748B" }}>{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STRATEGIC PARTNERS SECTION ===== */}
      <section id="partners" className="py-20 px-6 bg-gradient-to-br from-white to-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
              Strategic Partners
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              Organizations driving innovation together
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {aboutPartners.map((partner, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="p-6 rounded-2xl border text-center cursor-pointer"
                  style={{ 
                    background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", 
                    borderColor: "#E2E8F0",
                    boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)"
                  }}
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: "#DBEAFE" }}>
                    <Building2 className="w-6 h-6" style={{ color: "#3B82F6" }} />
                  </div>
                  <div className="mb-2">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#3B82F6", color: "white" }}>
                      {partner.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                    {partner.name}
                  </h3>
                  <a 
                    href={partner.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs mt-3"
                    style={{ color: "#3B82F6" }}
                  >
                    Visit <ExternalLink className="w-3 h-3" />
                  </a>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <AnimatedSection className="text-center">
            <Link href="/partners">
              <Button variant="outline" className="px-8 py-4 rounded-full border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white font-semibold">
                View All Partners
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== JOIN THE INNOVATION MOVEMENT CTA SECTION ===== */}
      <section id="contact" className="relative py-20 px-6 bg-white">
        <div className="relative z-10 max-w-[1440px] mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-extrabold text-3xl md:text-5xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
              {aboutCTA.heading}
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-10" style={{ color: "#64748B" }}>
              {aboutCTA.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/partners">
                <Button className="px-8 py-4 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold text-lg">
                  {aboutCTA.primaryButton}
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="px-8 py-4 rounded-full border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white font-semibold text-lg">
                  {aboutCTA.secondaryButton}
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
