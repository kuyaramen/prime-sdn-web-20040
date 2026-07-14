"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { Award, ChevronRight } from "lucide-react";
import { SuccessStory } from "@/lib/education-data";

interface SuccessStoriesClientProps {
  stories: SuccessStory[];
}

export default function SuccessStoriesClient({ stories }: SuccessStoriesClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-6 bg-gradient-to-br from-[#1E4FBF]/5 to-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="text-center">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-extrabold text-4xl md:text-5xl mb-4" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
              Success Stories
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg max-w-2xl mx-auto" style={{ color: "#6B7280" }}>
              Read inspiring stories of students and professionals who have achieved their goals.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story) => (
              <StaggerItem key={story.slug}>
                <Link href={`/education-talent/success-stories/${story.slug}`}>
                  <motion.div whileHover={{ y: -8, scale: 1.02 }} className="rounded-2xl p-6 border cursor-pointer h-full" style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)", borderColor: "#E5E7EB", boxShadow: "0 20px 50px rgba(17,24,39,0.08)" }}>
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1E4FBF]/20 to-[#1E4FBF]/5 flex items-center justify-center mb-4 mx-auto">
                      <span className="text-4xl">👤</span>
                    </div>
                    <h3 className="font-bold text-lg mb-1 text-center" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>{story.name}</h3>
                    <p className="text-sm text-center mb-2" style={{ color: "#5E7CE2" }}>{story.category}</p>
                    <p className="text-sm text-center mb-4" style={{ color: "#6B7280" }}>{story.achievement}</p>
                    <Button variant="outline" className="w-full py-2 rounded-full border-2 border-[#3565D9] text-[#3565D9] hover:bg-[#3565D9] hover:text-white">Read Story <ChevronRight className="w-4 h-4 ml-2" /></Button>
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
