"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowLeft, TrendingUp, Building2, GraduationCap, Sprout, MapPin, Calendar, Quote } from "lucide-react";
import { DigitalSuccessStory } from "@/lib/digital-data";

interface DigitalSuccessStoryDetailClientProps {
  story: DigitalSuccessStory;
}

export default function DigitalSuccessStoryDetailClient({ story }: DigitalSuccessStoryDetailClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 px-6 bg-gradient-to-br from-[#0A1628] to-[#1E3A5F]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <Link href="/digital-transformation/stories">
              <Button variant="outline" className="px-4 py-2 rounded-full border-2 border-white text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
          </div>
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-1/2">
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                  <img 
                    src={story.images[0]} 
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#3B82F6", color: "white" }}>
                    {story.category}
                  </span>
                </div>
                <h1 className="font-extrabold text-3xl md:text-4xl mb-4 text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                  {story.title}
                </h1>
                <p className="text-lg mb-4 text-white/80">{story.beneficiary}</p>
                <div className="flex items-center gap-3 text-white/80">
                  <Calendar className="w-5 h-5" />
                  <span>{story.date}</span>
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
              <InteractiveSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                  The Story
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>{story.story}</p>
              </InteractiveSection>

              <InteractiveSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                  Impact Metrics
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {story.metrics.map((metric, index) => (
                    <div key={index} className="p-6 rounded-xl border text-center" style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)" }}>
                      <div className="font-extrabold text-3xl mb-2" style={{ color: "#10B981", fontFamily: "Montserrat, Arial, sans-serif" }}>
                        {metric.value}
                      </div>
                      <div className="text-sm" style={{ color: "#64748B" }}>{metric.label}</div>
                    </div>
                  ))}
                </div>
              </InteractiveSection>

              {story.testimonial && (
                <InteractiveSection>
                  <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                    Testimonial
                  </h2>
                  <div className="p-8 rounded-2xl border" style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)" }}>
                    <Quote className="w-8 h-8 mb-4" style={{ color: "#3B82F6" }} />
                    <p className="text-lg mb-4 italic" style={{ color: "#64748B" }}>"{story.testimonial}"</p>
                    <div className="font-semibold" style={{ color: "#0A1628" }}>— {story.testimonialAuthor}</div>
                  </div>
                </InteractiveSection>
              )}
            </div>

            <div className="space-y-6">
              <InteractiveSection>
                <div className="p-6 rounded-2xl border" style={{ borderColor: "#E2E8F0", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", boxShadow: "0 20px 50px rgba(10, 22, 40, 0.08)" }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: "#0A1628" }}>Story Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3"><Building2 className="w-5 h-5" style={{ color: "#3B82F6" }} /><span className="text-sm" style={{ color: "#64748B" }}>{story.beneficiary}</span></div>
                    <div className="flex items-center gap-3"><Calendar className="w-5 h-5" style={{ color: "#3B82F6" }} /><span className="text-sm" style={{ color: "#64748B" }}>{story.date}</span></div>
                  </div>
                </div>
              </InteractiveSection>

              <InteractiveSection>
                <Link href="/digital-transformation/stories">
                  <Button variant="outline" className="w-full py-4 rounded-full border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white font-semibold">
                    View All Stories
                  </Button>
                </Link>
              </InteractiveSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function InteractiveSection({ children }: { children: React.ReactNode }) {
  return (
    <AnimatedSection>
      {children}
    </AnimatedSection>
  );
}
