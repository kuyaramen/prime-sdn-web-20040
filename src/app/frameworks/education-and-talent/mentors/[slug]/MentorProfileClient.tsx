"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { Building2, Mail, ArrowLeft, Award, Clock } from "lucide-react";
import { Mentor } from "@/lib/education-data";

interface MentorProfileClientProps {
  mentor: Mentor;
}

export default function MentorProfileClient({ mentor }: MentorProfileClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 px-6 bg-gradient-to-br from-[#1E4FBF] to-[#2563EB]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <Link href="/education-talent/mentors">
              <Button variant="outline" className="px-4 py-2 rounded-full border-2 border-white text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
          </div>
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-24 h-24 rounded-2xl bg-white/20 flex items-center justify-center">
                <span className="text-5xl">👤</span>
              </div>
              <div className="flex-1">
                <h1 className="font-extrabold text-4xl md:text-5xl mb-4 text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                  {mentor.name}
                </h1>
                <p className="text-xl text-white/90 mb-4">{mentor.role}</p>
                <div className="flex gap-4 text-white/80">
                  <div className="flex items-center gap-2"><Building2 className="w-5 h-5" />{mentor.organization}</div>
                  <div className="flex items-center gap-2"><Award className="w-5 h-5" />{mentor.yearsOfExperience} years experience</div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-white to-[#F8FAFF]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                  About
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "#6B7280" }}>{mentor.bio}</p>
              </AnimatedSection>
              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                  Expertise
                </h2>
                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.map((exp, index) => (
                    <span key={index} className="px-4 py-2 rounded-full text-sm" style={{ backgroundColor: "#EAF2FF", color: "#3565D9" }}>{exp}</span>
                  ))}
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                  Mentorship Areas
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mentor.mentorshipAreas.map((area, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-xl border" style={{ borderColor: "#E5E7EB", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)" }}>
                      <Award className="w-5 h-5" style={{ color: "#3565D9" }} />
                      <span className="text-sm" style={{ color: "#6B7280" }}>{area}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
            <div className="space-y-6">
              <AnimatedSection>
                <div className="p-6 rounded-2xl border" style={{ borderColor: "#E5E7EB", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)", boxShadow: "0 20px 50px rgba(17,24,39,0.08)" }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: "#1A2F6B" }}>Availability</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3"><Clock className="w-5 h-5" style={{ color: "#3565D9" }} /><span style={{ color: "#6B7280" }}>{mentor.availability}</span></div>
                  </div>
                  <Button variant="primary" className="w-full mt-6 py-3 rounded-full bg-[#1E4FBF]">
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Mentor
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
