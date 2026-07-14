"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { InnovationEvent } from "@/lib/research-data";

interface EventsClientProps {
  events: InnovationEvent[];
}

export default function EventsClient({ events }: EventsClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-6 bg-gradient-to-br from-[#0A1628]/5 to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-extrabold text-4xl md:text-5xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
              Innovation Events
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              Conferences, symposiums, and technology expos
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
                        <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />{event.location}</span>
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
                        <span className="text-sm" style={{ color: "#64748B" }}><Users className="w-4 h-4 inline mr-1" />Capacity: {event.capacity}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
