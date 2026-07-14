"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowLeft, Mail, Link as LinkIcon, BookOpen, Award, Building2, MapPin } from "lucide-react";
import { Researcher } from "@/lib/research-data";

interface ResearcherProfileClientProps {
  researcher: Researcher;
}

export default function ResearcherProfileClient({ researcher }: ResearcherProfileClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 px-6 bg-gradient-to-br from-[#0A1628] to-[#1E3A5F]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <Link href="/research-and-innovation/researchers">
              <Button variant="outline" className="px-4 py-2 rounded-full border-2 border-white text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
          </div>
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-1/3">
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                  <img 
                    src={researcher.photo} 
                    alt={researcher.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h1 className="font-extrabold text-3xl md:text-4xl mb-2 text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                  {researcher.name}
                </h1>
                <p className="text-xl mb-4" style={{ color: "#60A5FA" }}>{researcher.specialization}</p>
                <div className="space-y-3 text-white/80">
                  <div className="flex items-center gap-3"><Building2 className="w-5 h-5" />{researcher.institution}</div>
                  <div className="flex items-center gap-3"><Mail className="w-5 h-5" />{researcher.email}</div>
                </div>
                <div className="flex gap-4 mt-6">
                  <a href={`mailto:${researcher.email}`} className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#0A1628]">
                    <Mail className="w-6 h-6" />
                  </a>
                  {researcher.linkedin && (
                    <a href={researcher.linkedin} className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#0A1628]">
                      <LinkIcon className="w-6 h-6" />
                    </a>
                  )}
                  {researcher.orcid && (
                    <a href={researcher.orcid} className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#0A1628]">
                      <BookOpen className="w-6 h-6" />
                    </a>
                  )}
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
                  Biography
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>{researcher.biography}</p>
              </AnimatedSection>
              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                  Research Interests
                </h2>
                <div className="flex flex-wrap gap-3">
                  {researcher.researchInterests.map((interest, index) => (
                    <span key={index} className="px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: "#DBEAFE", color: "#3B82F6" }}>
                      {interest}
                    </span>
                  ))}
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                  Publications
                </h2>
                <div className="space-y-3">
                  {researcher.publications.map((pub, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-xl border" style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)" }}>
                      <BookOpen className="w-5 h-5 mt-0.5" style={{ color: "#3B82F6" }} />
                      <span className="text-sm" style={{ color: "#64748B" }}>{pub}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
              {researcher.awards && researcher.awards.length > 0 && (
                <AnimatedSection>
                  <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                    Awards
                  </h2>
                  <div className="space-y-3">
                    {researcher.awards.map((award, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-xl border" style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)" }}>
                        <Award className="w-5 h-5 mt-0.5" style={{ color: "#F59E0B" }} />
                        <span className="text-sm" style={{ color: "#64748B" }}>{award}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              )}
            </div>
            <div className="space-y-6">
              <AnimatedSection>
                <div className="p-6 rounded-2xl border" style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)" }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: "#0A1628" }}>Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3"><Mail className="w-5 h-5" style={{ color: "#3B82F6" }} /><span style={{ color: "#64748B" }}>{researcher.email}</span></div>
                    <div className="flex items-center gap-3"><Building2 className="w-5 h-5" style={{ color: "#3B82F6" }} /><span style={{ color: "#64748B" }}>{researcher.institution}</span></div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <Button variant="primary" className="w-full py-4 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Researcher
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
