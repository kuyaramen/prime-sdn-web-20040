"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Calendar, Clock, Building2, Users, Zap } from "lucide-react";
import { DigitalEvent } from "@/lib/digital-data";

interface DigitalEventsClientProps {
  events: DigitalEvent[];
}

export default function DigitalEventsClient({ events }: DigitalEventsClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-6 bg-gradient-to-br from-[#0A1628]/5 to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-extrabold text-4xl md:text-5xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
              Digital Events
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              Upcoming activities and opportunities
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <StaggerContainer className="space-y-6">
            {events.map((event) => (
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
                        <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{event.time}</span>
                        <span className="flex items-center gap-2"><Building2 className="w-4 h-4" />{event.venue}</span>
                      </div>
                      <p className="text-sm mb-3" style={{ color: "#94A3B8" }}>
                        {event.description}
                      </p>
                      <div className="flex items-center gap-4">
                        {event.registrationUrl && (
                          <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="primary" className="px-6 py-2 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm">
                              Register Now
                            </Button>
                          </a>
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

      <section className="py-20 px-6 bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <div className="p-8 rounded-2xl border text-center" style={{ 
              background: "linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)", 
              borderColor: "#10B981",
              boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)"
            }}>
              <Zap className="w-12 h-12 mx-auto mb-4" style={{ color: "#10B981" }} />
              <h2 className="font-extrabold text-2xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                Host an Event
              </h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto" style={{ color: "#64748B" }}>
                Interested in hosting a digital transformation event? Partner with us to bring innovation and learning opportunities to the community.
              </p>
              <Button className="px-8 py-4 rounded-full bg-[#10B981] hover:bg-[#059669] text-white font-semibold">
                Contact Us
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
