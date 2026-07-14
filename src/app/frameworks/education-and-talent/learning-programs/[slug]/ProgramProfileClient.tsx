"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { Clock, Users, Award, BookOpen, Target, CheckCircle, ArrowLeft, ExternalLink } from "lucide-react";
import { LearningProgram } from "@/lib/education-data";

interface ProgramProfileClientProps {
  program: LearningProgram;
}

export default function ProgramProfileClient({ program }: ProgramProfileClientProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-[#1E4FBF] to-[#2563EB]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <Link href="/education-talent/learning-programs">
              <Button
                variant="outline"
                className="px-4 py-2 rounded-full border-2 border-white text-white hover:bg-white/10 transition-all"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Programs
              </Button>
            </Link>
          </div>
          
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col md:flex-row items-start gap-8"
            >
              <div className="text-9xl">{program.icon}</div>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-4 py-2 rounded-full text-sm font-semibold bg-white/20 text-white">
                    {program.level}
                  </span>
                  <span className="px-4 py-2 rounded-full text-sm font-semibold bg-white/20 text-white">
                    {program.duration}
                  </span>
                  {program.certificate && (
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-white/20 text-white">
                      <Award className="w-4 h-4 inline mr-1" />
                      Certificate
                    </span>
                  )}
                </div>
                <h1 className="font-extrabold text-4xl md:text-5xl mb-4 text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                  {program.title}
                </h1>
                <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
                  {program.description}
                </p>
                {program.partner && (
                  <div className="mt-4">
                    <span className="text-white/80">Partnered with </span>
                    <span className="font-semibold text-white">{program.partner}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 px-6 bg-gradient-to-br from-white to-[#F8FAFF]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About */}
              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                  About This Program
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "#6B7280" }}>
                  {program.description} This comprehensive program is designed to equip you with the knowledge and skills needed to excel in this field. Through a combination of theoretical learning and practical applications, you'll gain hands-on experience and develop a strong foundation.
                </p>
              </AnimatedSection>

              {/* Learning Outcomes */}
              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                  What You'll Learn
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {program.outcomes.map((outcome, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-xl border"
                      style={{ borderColor: "#E5E7EB", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)" }}
                    >
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#3565D9" }} />
                      <span className="text-sm" style={{ color: "#6B7280" }}>{outcome}</span>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Curriculum */}
              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                  Curriculum
                </h2>
                <div className="space-y-4">
                  {program.curriculum.map((module, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 rounded-xl border"
                      style={{ borderColor: "#E5E7EB", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)" }}
                    >
                      <h3 className="font-bold text-lg mb-3" style={{ color: "#1A2F6B" }}>
                        {module}
                      </h3>
                      <ul className="space-y-2">
                        {program.curriculum.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm" style={{ color: "#6B7280" }}>
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#3565D9" }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Prerequisites */}
              {program.prerequisites && program.prerequisites.length > 0 && (
                <AnimatedSection>
                  <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                    Prerequisites
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {program.prerequisites.map((prereq, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-full text-sm"
                        style={{ backgroundColor: "#EAF2FF", color: "#3565D9" }}
                      >
                        {prereq}
                      </span>
                    ))}
                  </div>
                </AnimatedSection>
              )}

              {/* Target Audience */}
              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                  Who Should Take This Program
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {program.targetAudience.map((audience, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-4 rounded-xl border"
                      style={{ borderColor: "#E5E7EB", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)" }}
                    >
                      <Users className="w-5 h-5" style={{ color: "#3565D9" }} />
                      <span className="text-sm" style={{ color: "#6B7280" }}>{audience}</span>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Program Info Card */}
              <AnimatedSection>
                <div className="p-6 rounded-2xl border" style={{ borderColor: "#E5E7EB", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)", boxShadow: "0 20px 50px rgba(17,24,39,0.08)" }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: "#1A2F6B" }}>Program Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5" style={{ color: "#3565D9" }} />
                      <div>
                        <p className="text-sm" style={{ color: "#6B7280" }}>Duration</p>
                        <p className="font-semibold" style={{ color: "#1A2F6B" }}>{program.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Target className="w-5 h-5" style={{ color: "#3565D9" }} />
                      <div>
                        <p className="text-sm" style={{ color: "#6B7280" }}>Level</p>
                        <p className="font-semibold" style={{ color: "#1A2F6B" }}>{program.level}</p>
                      </div>
                    </div>
                    {program.certificate && (
                      <div className="flex items-center gap-3">
                        <Award className="w-5 h-5" style={{ color: "#3565D9" }} />
                        <div>
                          <p className="text-sm" style={{ color: "#6B7280" }}>Certificate</p>
                          <p className="font-semibold" style={{ color: "#1A2F6B" }}>Included</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <Button
                    variant="primary"
                    className="w-full mt-6 py-3 rounded-full bg-[#1E4FBF] hover:bg-[#1E4FBF]/90 transition-all"
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    Enroll Now
                  </Button>
                </div>
              </AnimatedSection>

              {/* Partner Card */}
              {program.partner && (
                <AnimatedSection>
                  <div className="p-6 rounded-2xl border" style={{ borderColor: "#E5E7EB", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)", boxShadow: "0 20px 50px rgba(17,24,39,0.08)" }}>
                    <h3 className="font-bold text-lg mb-4" style={{ color: "#1A2F6B" }}>Program Partner</h3>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1E4FBF]/20 to-[#1E4FBF]/5 flex items-center justify-center">
                        <span className="text-3xl">🏢</span>
                      </div>
                      <div>
                        <p className="font-semibold" style={{ color: "#1A2F6B" }}>{program.partner}</p>
                        <p className="text-sm" style={{ color: "#6B7280" }}>Official Partner</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              )}

              {/* Related Programs */}
              <AnimatedSection>
                <div className="p-6 rounded-2xl border" style={{ borderColor: "#E5E7EB", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)", boxShadow: "0 20px 50px rgba(17,24,39,0.08)" }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: "#1A2F6B" }}>Related Programs</h3>
                  <div className="space-y-3">
                    <Link href="/education-talent/learning-programs/artificial-intelligence" className="block p-3 rounded-lg hover:bg-white/50 transition-all">
                      <p className="font-semibold text-sm" style={{ color: "#1A2F6B" }}>Artificial Intelligence</p>
                      <p className="text-xs" style={{ color: "#6B7280" }}>Advanced • 16 weeks</p>
                    </Link>
                    <Link href="/education-talent/learning-programs/entrepreneurship" className="block p-3 rounded-lg hover:bg-white/50 transition-all">
                      <p className="font-semibold text-sm" style={{ color: "#1A2F6B" }}>Entrepreneurship</p>
                      <p className="text-xs" style={{ color: "#6B7280" }}>Intermediate • 10 weeks</p>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#1E4FBF] to-[#2563EB]">
        <div className="max-w-[1440px] mx-auto text-center">
          <AnimatedSection>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-extrabold text-3xl md:text-4xl mb-4 text-white"
              style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
            >
              Ready to Start Learning?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-white/80 text-lg mb-8 max-w-2xl mx-auto"
            >
              Enroll in this program and start your journey toward mastering new skills and advancing your career.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button
                variant="primary"
                className="px-8 py-4 rounded-full bg-white text-[#1E4FBF] hover:bg-white/90 transition-all"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Enroll Now
              </Button>
              <Link href="/education-talent/learning-programs">
                <Button
                  variant="outline"
                  className="px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white/10 transition-all"
                >
                  Browse All Programs
                </Button>
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
