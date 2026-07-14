"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { Calendar, MapPin, Users, ArrowLeft, Building2, DollarSign } from "lucide-react";
import { Event } from "@/lib/education-data";

interface EventClientProps {
  event: Event;
}

export default function EventClient({ event }: EventClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 px-6 bg-gradient-to-br from-[#1E4FBF] to-[#2563EB]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <Link href="/education-talent/events">
              <Button variant="outline" className="px-4 py-2 rounded-full border-2 border-white text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
          </div>
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-24 h-24 rounded-2xl bg-white/20 flex items-center justify-center">
                <span className="text-5xl">📅</span>
              </div>
              <div className="flex-1">
                <h1 className="font-extrabold text-4xl md:text-5xl mb-4 text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                  {event.title}
                </h1>
                <p className="text-xl text-white/90 mb-4">{event.category}</p>
                <div className="flex gap-4 text-white/80">
                  <div className="flex items-center gap-2"><Calendar className="w-5 h-5" />{event.date} • {event.time}</div>
                  <div className="flex items-center gap-2"><MapPin className="w-5 h-5" />{event.location}</div>
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
                  About This Event
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "#6B7280" }}>{event.description}</p>
              </AnimatedSection>
              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                  Target Audience
                </h2>
                <div className="flex flex-wrap gap-2">
                  {event.targetAudience.map((audience, index) => (
                    <span key={index} className="px-4 py-2 rounded-full text-sm" style={{ backgroundColor: "#EAF2FF", color: "#3565D9" }}>{audience}</span>
                  ))}
                </div>
              </AnimatedSection>
            </div>
            <div className="space-y-6">
              <AnimatedSection>
                <div className="p-6 rounded-2xl border" style={{ borderColor: "#E5E7EB", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)", boxShadow: "0 20px 50px rgba(17,24,39,0.08)" }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: "#1A2F6B" }}>Event Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3"><Calendar className="w-5 h-5" style={{ color: "#3565D9" }} /><span style={{ color: "#6B7280" }}>{event.date} • {event.time}</span></div>
                    <div className="flex items-center gap-3"><MapPin className="w-5 h-5" style={{ color: "#3565D9" }} /><span style={{ color: "#6B7280" }}>{event.location}</span></div>
                    <div className="flex items-center gap-3"><Users className="w-5 h-5" style={{ color: "#3565D9" }} /><span style={{ color: "#6B7280" }}>Capacity: {event.capacity}</span></div>
                    {event.fee && <div className="flex items-center gap-3"><DollarSign className="w-5 h-5" style={{ color: "#3565D9" }} /><span style={{ color: "#6B7280" }}>Fee: {event.fee}</span></div>}
                  </div>
                  {event.registrationLink && <Button variant="primary" className="w-full mt-6 py-3 rounded-full bg-[#1E4FBF]">Register Now</Button>}
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <div className="p-6 rounded-2xl border" style={{ borderColor: "#E5E7EB", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)", boxShadow: "0 20px 50px rgba(17,24,39,0.08)" }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: "#1A2F6B" }}>Organizer</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1E4FBF]/20 to-[#1E4FBF]/5 flex items-center justify-center">
                      <Building2 className="w-8 h-8" style={{ color: "#3565D9" }} />
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: "#1A2F6B" }}>{event.organizer}</p>
                      <p className="text-sm" style={{ color: "#6B7280" }}>Event Organizer</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
