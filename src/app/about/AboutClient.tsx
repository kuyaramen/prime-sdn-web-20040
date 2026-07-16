"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { 
  aboutHero, 
  aboutStory, 
  whyExists, 
  visionMission, 
  pillars, 
  howWorks, 
  strategicPriorities, 
  ecosystemNodes, 
  roadmapMilestones, 
  partners, 
  faqs, 
  exploreCTA
} from "@/lib/about-data";
import Image from "next/image";

export function AboutClient() {
  const [activePillar, setActivePillar] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* ===== IMMERSIVE HERO ===== */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={aboutHero.backgroundImage}
            alt="Surigao del Norte landscape"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/85 via-[#1E3A5F]/70 to-[#0A1628]/90" />
        </div>
        
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 py-32 w-full">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <motion.nav 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 text-sm mb-8"
                style={{ color: "#60A5FA", fontFamily: "Montserrat, Arial, sans-serif" }}
              >
                {aboutHero.breadcrumb.split(' / ').map((crumb, index, arr) => (
                  <span key={index}>
                    {crumb}
                    {index < arr.length - 1 && <span className="mx-2">/</span>}
                  </span>
                ))}
              </motion.nav>
              
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
                style={{ backgroundColor: "rgba(59, 130, 246, 0.2)", color: "#60A5FA", border: "1px solid rgba(59, 130, 246, 0.3)", fontFamily: "Montserrat, Arial, sans-serif", letterSpacing: "0.2em" }}
              >
                {aboutHero.eyebrow}
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="font-extrabold leading-tight mb-6 text-white"
                style={{ fontFamily: "Montserrat, Arial, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
              >
                {aboutHero.heading}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl leading-relaxed mb-10 max-w-4xl"
                style={{ color: "rgba(255, 255, 255, 0.85)" }}
              >
                {aboutHero.description}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="#pillars">
                  <Button className="text-base py-4 px-10 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold">
                    {aboutHero.primaryButton} <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button variant="outline" className="text-base py-4 px-10 rounded-full border-2 border-white text-white hover:bg-white/10 font-semibold">
                    {aboutHero.secondaryButton}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/60"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section id="story" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(circle,rgba(59,130,246,0.03)_0%,transparent_60%)] rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={aboutStory.image}
                  alt="Our Story"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatedSection>
            
            <AnimatedSection>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="space-y-8"
              >
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="font-extrabold leading-tight"
                  style={{ fontFamily: "Montserrat, Arial, sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#0A1628" }}
                >
                  {aboutStory.heading}
                </motion.h2>
                
                {aboutStory.paragraphs.map((paragraph, index) => (
                  <motion.p 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-lg leading-relaxed"
                    style={{ color: "#64748B" }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== WHY PRIME SDN EXISTS ===== */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#FAFBFD]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FAFBFD] to-white" />
        
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="space-y-8"
              >
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="font-extrabold leading-tight"
                  style={{ fontFamily: "Montserrat, Arial, sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#0A1628" }}
                >
                  {whyExists.heading}
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.3 }}
                  className="text-lg leading-relaxed"
                  style={{ color: "#64748B" }}
                >
                  {whyExists.description}
                </motion.p>
                
                <div className="space-y-6">
                  {whyExists.reasons.map((reason, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 8 }}
                      className="p-6 rounded-2xl border cursor-pointer transition-all"
                      style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)" }}
                    >
                      <h3 className="font-bold text-xl mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                        {reason.title}
                      </h3>
                      <p className="text-base leading-relaxed" style={{ color: "#64748B" }}>
                        {reason.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
            
            <AnimatedSection>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative h-[700px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={whyExists.image}
                  alt="Why PRIME SDN Exists"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== VISION & MISSION ===== */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#F0F4FF] to-transparent" />
        
        <div className="relative z-10 max-w-[1440px] mx-auto space-y-32">
          {/* Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={visionMission.vision.image}
                  alt="Vision"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatedSection>
            
            <AnimatedSection>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="space-y-6"
              >
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="inline-block font-semibold uppercase tracking-widest text-sm"
                  style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#3B82F6", letterSpacing: "0.2em" }}
                >
                  {visionMission.vision.eyebrow}
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.1 }}
                  className="font-extrabold leading-tight"
                  style={{ fontFamily: "Montserrat, Arial, sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#0A1628" }}
                >
                  {visionMission.vision.heading}
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2 }}
                  className="text-lg leading-relaxed"
                  style={{ color: "#64748B" }}
                >
                  {visionMission.vision.description}
                </motion.p>
              </motion.div>
            </AnimatedSection>
          </div>

          {/* Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="space-y-6"
              >
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="inline-block font-semibold uppercase tracking-widest text-sm"
                  style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#3B82F6", letterSpacing: "0.2em" }}
                >
                  {visionMission.mission.eyebrow}
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.1 }}
                  className="font-extrabold leading-tight"
                  style={{ fontFamily: "Montserrat, Arial, sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#0A1628" }}
                >
                  {visionMission.mission.heading}
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2 }}
                  className="text-lg leading-relaxed"
                  style={{ color: "#64748B" }}
                >
                  {visionMission.mission.description}
                </motion.p>
              </motion.div>
            </AnimatedSection>
            
            <AnimatedSection className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={visionMission.mission.image}
                  alt="Mission"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== SEVEN PILLARS STICKY SCROLL ===== */}
      <section id="pillars" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#FAFBFD]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FAFBFD] to-white" />
        
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-semibold uppercase tracking-widest text-sm mb-4"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#3B82F6", letterSpacing: "0.2em" }}
            >
              DRIVING INNOVATION
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="font-extrabold leading-tight"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#0A1628" }}
            >
              Through Seven Pillars
            </motion.h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Sticky Image - 60% */}
            <div className="lg:sticky lg:top-32 h-[600px]">
              <motion.div
                key={activePillar}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative h-full rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={pillars[activePillar].image}
                  alt={pillars[activePillar].title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Scrolling Content - 40% */}
            <div className="space-y-32">
              {pillars.map((pillar, index) => (
                <div
                  key={pillar.id}
                  className="min-h-[400px]"
                  onMouseEnter={() => setActivePillar(index)}
                >
                  <AnimatedSection>
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="space-y-6"
                    >
                      <Link href={pillar.link}>
                        <motion.h3
                          whileHover={{ x: 8 }}
                          className="font-extrabold leading-tight cursor-pointer"
                          style={{ fontFamily: "Montserrat, Arial, sans-serif", fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)", color: "#0A1628" }}
                        >
                          {pillar.title}
                        </motion.h3>
                      </Link>
                      <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
                        {pillar.description}
                      </p>
                      <Link href={pillar.link}>
                        <Button variant="outline" className="text-sm py-3 px-8 rounded-full border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white">
                          Explore <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </motion.div>
                  </AnimatedSection>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW PRIME SDN WORKS ===== */}
      <section id="how-works" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(59,130,246,0.05)_0%,transparent_60%)] rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-semibold uppercase tracking-widest text-sm mb-4"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#3B82F6", letterSpacing: "0.2em" }}
            >
              OUR APPROACH
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="font-extrabold leading-tight mb-6"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#0A1628" }}
            >
              {howWorks.heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="text-lg max-w-3xl mx-auto"
              style={{ color: "#64748B" }}
            >
              {howWorks.description}
            </motion.p>
          </AnimatedSection>

          <div className="relative max-w-4xl mx-auto">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#3B82F6] via-[#3B82F6]/50 to-transparent transform -translate-x-1/2" />
            
            <div className="space-y-24">
              {howWorks.steps.map((step, index) => (
                <AnimatedSection key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
                  >
                    <div className={`relative ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="hidden lg:block absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-[#3B82F6] transform -translate-x-1/2 -translate-y-1/2" style={{ left: index % 2 === 0 ? 'calc(100% + 0.5rem)' : '-0.5rem' }} />
                      <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: "#EAF2FF", color: "#3B82F6" }}>
                        Step {step.step}
                      </div>
                      <h3 className="font-extrabold text-2xl md:text-3xl mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                        {step.title}
                      </h3>
                      <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
                        {step.description}
                      </p>
                    </div>
                    <div className="hidden lg:block" />
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== STRATEGIC PRIORITIES ===== */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#FAFBFD]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FAFBFD] to-white" />
        
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-semibold uppercase tracking-widest text-sm mb-4"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#3B82F6", letterSpacing: "0.2em" }}
            >
              STRATEGIC ALIGNMENT
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="font-extrabold leading-tight"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#0A1628" }}
            >
              Strategic Priorities
            </motion.h2>
          </AnimatedSection>

          <div className="space-y-32">
            {strategicPriorities.map((priority, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {index % 2 === 0 ? (
                  <>
                    <AnimatedSection>
                      <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
                      >
                        <Image
                          src={priority.image}
                          alt={priority.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    </AnimatedSection>
                    <AnimatedSection>
                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="space-y-6"
                      >
                        <h3 className="font-extrabold leading-tight" style={{ fontFamily: "Montserrat, Arial, sans-serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#0A1628" }}>
                          {priority.title}
                        </h3>
                        <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
                          {priority.description}
                        </p>
                        <Link href={priority.link}>
                          <Button variant="outline" className="text-sm py-3 px-8 rounded-full border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white">
                            Learn More <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </motion.div>
                    </AnimatedSection>
                  </>
                ) : (
                  <>
                    <AnimatedSection className="order-2 lg:order-1">
                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="space-y-6"
                      >
                        <h3 className="font-extrabold leading-tight" style={{ fontFamily: "Montserrat, Arial, sans-serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#0A1628" }}>
                          {priority.title}
                        </h3>
                        <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
                          {priority.description}
                        </p>
                        <Link href={priority.link}>
                          <Button variant="outline" className="text-sm py-3 px-8 rounded-full border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white">
                            Learn More <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </motion.div>
                    </AnimatedSection>
                    <AnimatedSection className="order-1 lg:order-2">
                      <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
                      >
                        <Image
                          src={priority.image}
                          alt={priority.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    </AnimatedSection>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INNOVATION ECOSYSTEM ===== */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] bg-[radial-gradient(circle,rgba(59,130,246,0.02)_0%,transparent_60%)] rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-semibold uppercase tracking-widest text-sm mb-4"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#3B82F6", letterSpacing: "0.2em" }}
            >
              COLLABORATION
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="font-extrabold leading-tight"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#0A1628" }}
            >
              Innovation Ecosystem
            </motion.h2>
          </AnimatedSection>

          <div className="relative max-w-5xl mx-auto">
            {/* Ecosystem Nodes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {ecosystemNodes.map((node, index) => (
                <AnimatedSection key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="p-6 rounded-2xl border text-center cursor-pointer"
                    style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)" }}
                  >
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: "#EAF2FF" }}>
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#3B82F6" }} />
                    </div>
                    <h3 className="font-bold text-base mb-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                      {node.name}
                    </h3>
                    <p className="text-xs" style={{ color: "#64748B" }}>
                      {node.type}
                    </p>
                    <p className="text-xs mt-2" style={{ color: "#3B82F6" }}>
                      {node.description}
                    </p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ROAD TO 2040 ===== */}
      <section id="roadmap" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#FAFBFD]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FAFBFD] to-white" />
        
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-semibold uppercase tracking-widest text-sm mb-4"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#3B82F6", letterSpacing: "0.2em" }}
            >
              OUR JOURNEY
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="font-extrabold leading-tight"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#0A1628" }}
            >
              Road to 2040
            </motion.h2>
          </AnimatedSection>

          <div className="relative max-w-6xl mx-auto overflow-x-auto pb-8">
            <div className="flex gap-8 min-w-max">
              {roadmapMilestones.map((milestone, index) => (
                <AnimatedSection key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                    className="w-72 flex-shrink-0"
                  >
                    <div className="p-8 rounded-2xl border h-full" style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)" }}>
                      <div className="inline-block px-4 py-2 rounded-full text-lg font-extrabold mb-4" style={{ backgroundColor: "#3B82F6", color: "white", fontFamily: "Montserrat, Arial, sans-serif" }}>
                        {milestone.year}
                      </div>
                      <h3 className="font-extrabold text-xl mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                        {milestone.title}
                      </h3>
                      <p className="text-base leading-relaxed" style={{ color: "#64748B" }}>
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PARTNERS & STAKEHOLDERS ===== */}
      <section id="partners" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(circle,rgba(59,130,246,0.03)_0%,transparent_60%)] rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-semibold uppercase tracking-widest text-sm mb-4"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#3B82F6", letterSpacing: "0.2em" }}
            >
              PARTNERSHIP
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="font-extrabold leading-tight"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#0A1628" }}
            >
              Partners & Stakeholders
            </motion.h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <AnimatedSection key={index}>
                <motion.a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl border text-center block grayscale hover:grayscale-0 transition-all"
                  style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)" }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-xs font-semibold mb-2" style={{ color: "#3B82F6" }}>
                    {partner.category}
                  </p>
                  <h3 className="font-bold text-sm" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                    {partner.name}
                  </h3>
                </motion.a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#FAFBFD]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FAFBFD] to-white" />
        
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-semibold uppercase tracking-widest text-sm mb-4"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#3B82F6", letterSpacing: "0.2em" }}
            >
              COMMON QUESTIONS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="font-extrabold leading-tight"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#0A1628" }}
            >
              Frequently Asked Questions
            </motion.h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                  className="border rounded-2xl overflow-hidden"
                  style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)" }}
                >
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full p-6 flex items-center justify-between text-left"
                  >
                    <h3 className="font-semibold text-lg" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                      {faq.question}
                    </h3>
                    <ArrowRight 
                      className={`w-5 h-5 transition-transform duration-300 ${expandedFAQ === index ? 'rotate-90' : ''}`}
                      style={{ color: "#3B82F6" }}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: expandedFAQ === index ? 'auto' : 0, opacity: expandedFAQ === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0">
                      <p className="text-base leading-relaxed" style={{ color: "#64748B" }}>
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPLORE PRIME SDN ===== */}
      <section id="explore" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={exploreCTA.image}
            alt="Explore PRIME SDN"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/90 via-[#1E3A5F]/80 to-[#0A1628]/95" />
        </div>
        
        <div className="relative z-10 max-w-[1440px] mx-auto text-center">
          <AnimatedSection>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-extrabold leading-tight mb-6 text-white"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              {exploreCTA.heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl max-w-3xl mx-auto mb-10"
              style={{ color: "rgba(255, 255, 255, 0.85)" }}
            >
              {exploreCTA.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {exploreCTA.buttons.map((button, index) => (
                <Link key={index} href={button.link}>
                  <Button className="text-base py-4 px-10 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold">
                    {button.text} <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
