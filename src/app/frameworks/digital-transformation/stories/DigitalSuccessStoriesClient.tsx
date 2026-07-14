"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowRight, TrendingUp, Building2, GraduationCap, Sprout, MapPin, Calendar } from "lucide-react";
import { DigitalSuccessStory } from "@/lib/digital-data";

interface DigitalSuccessStoriesClientProps {
  stories: DigitalSuccessStory[];
}

export default function DigitalSuccessStoriesClient({ stories }: DigitalSuccessStoriesClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-6 bg-gradient-to-br from-[#0A1628]/5 to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-extrabold text-4xl md:text-5xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
              Success Stories
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              Real impact from digital transformation initiatives
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story) => (
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
                      <div className="space-y-2 mb-4">
                        {story.metrics.slice(0, 2).map((metric, i) => (
                          <div key={i} className="flex items-center justify-between text-sm">
                            <span style={{ color: "#64748B" }}>{metric.label}</span>
                            <span className="font-semibold" style={{ color: "#10B981" }}>{metric.value}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center text-sm" style={{ color: "#3B82F6" }}>
                        Read Story <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
