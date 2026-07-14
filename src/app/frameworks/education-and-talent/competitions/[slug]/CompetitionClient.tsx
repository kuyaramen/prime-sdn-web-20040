"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { Calendar, MapPin, Trophy, ArrowLeft, Users, Target } from "lucide-react";
import { Competition } from "@/lib/education-data";

interface CompetitionClientProps {
  competition: Competition;
}

export default function CompetitionClient({ competition }: CompetitionClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 px-6 bg-gradient-to-br from-[#1E4FBF] to-[#2563EB]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <Link href="/education-talent/competitions">
              <Button variant="outline" className="px-4 py-2 rounded-full border-2 border-white text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
          </div>
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-24 h-24 rounded-2xl bg-white/20 flex items-center justify-center">
                <span className="text-5xl">🏆</span>
              </div>
              <div className="flex-1">
                <h1 className="font-extrabold text-4xl md:text-5xl mb-4 text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                  {competition.title}
                </h1>
                <p className="text-xl text-white/90 mb-4">{competition.category}</p>
                <div className="flex gap-4 text-white/80">
                  <div className="flex items-center gap-2"><Calendar className="w-5 h-5" />{competition.date}</div>
                  <div className="flex items-center gap-2"><MapPin className="w-5 h-5" />{competition.location}</div>
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
                <p className="text-lg leading-relaxed" style={{ color: "#6B7280" }}>{competition.description}</p>
              </AnimatedSection>
              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                  Prizes
                </h2>
                <div className="space-y-4">
                  {competition.prizes.map((prize, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-xl border" style={{ borderColor: "#E5E7EB", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)" }}>
                      <Trophy className="w-5 h-5" style={{ color: "#3565D9" }} />
                      <div>
                        <p className="font-semibold" style={{ color: "#1A2F6B" }}>{prize.rank}</p>
                        <p className="text-sm" style={{ color: "#6B7280" }}>{prize.prize}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                  Requirements
                </h2>
                <div className="space-y-3">
                  {competition.requirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-xl border" style={{ borderColor: "#E5E7EB", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)" }}>
                      <Target className="w-5 h-5 mt-0.5" style={{ color: "#3565D9" }} />
                      <span className="text-sm" style={{ color: "#6B7280" }}>{req}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
            <div className="space-y-6">
              <AnimatedSection>
                <div className="p-6 rounded-2xl border" style={{ borderColor: "#E5E7EB", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)", boxShadow: "0 20px 50px rgba(17,24,39,0.08)" }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: "#1A2F6B" }}>Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3"><Calendar className="w-5 h-5" style={{ color: "#3565D9" }} /><span style={{ color: "#6B7280" }}>Deadline: {competition.deadline}</span></div>
                    <div className="flex items-center gap-3"><Users className="w-5 h-5" style={{ color: "#3565D9" }} /><span style={{ color: "#6B7280" }}>Organizer: {competition.organizer}</span></div>
                  </div>
                  {competition.registrationLink && <Button variant="primary" className="w-full mt-6 py-3 rounded-full bg-[#1E4FBF]">Register Now</Button>}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
