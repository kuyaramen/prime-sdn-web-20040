"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { Award, ArrowLeft, Calendar } from "lucide-react";
import { SuccessStory } from "@/lib/education-data";

interface StoryClientProps {
  story: SuccessStory;
}

export default function StoryClient({ story }: StoryClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 px-6 bg-gradient-to-br from-[#1E4FBF] to-[#2563EB]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <Link href="/education-talent/success-stories">
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
                  {story.name}
                </h1>
                <p className="text-xl text-white/90 mb-4">{story.category}</p>
                <div className="flex gap-4 text-white/80">
                  <div className="flex items-center gap-2"><Award className="w-5 h-5" />{story.achievement}</div>
                  <div className="flex items-center gap-2"><Calendar className="w-5 h-5" />{story.year}</div>
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
                  Story
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "#6B7280" }}>{story.story}</p>
              </AnimatedSection>
              {story.quote && (
                <AnimatedSection>
                  <div className="p-8 rounded-2xl border" style={{ borderColor: "#E5E7EB", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)" }}>
                    <p className="text-xl italic" style={{ color: "#1A2F6B" }}>"{story.quote}"</p>
                  </div>
                </AnimatedSection>
              )}
            </div>
            <div className="space-y-6">
              <AnimatedSection>
                <div className="p-6 rounded-2xl border" style={{ borderColor: "#E5E7EB", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)", boxShadow: "0 20px 50px rgba(17,24,39,0.08)" }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: "#1A2F6B" }}>Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3"><Award className="w-5 h-5" style={{ color: "#3565D9" }} /><span style={{ color: "#6B7280" }}>{story.category}</span></div>
                    <div className="flex items-center gap-3"><Calendar className="w-5 h-5" style={{ color: "#3565D9" }} /><span style={{ color: "#6B7280" }}>{story.year}</span></div>
                    {story.institution && <div className="flex items-center gap-3"><span style={{ color: "#6B7280" }}>{story.institution}</span></div>}
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
