"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { Clock, Users, Star, BookOpen, CheckCircle, ArrowLeft, Play } from "lucide-react";
import { Course } from "@/lib/education-data";

interface CourseClientProps {
  course: Course;
}

export default function CourseClient({ course }: CourseClientProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-[#1E4FBF] to-[#2563EB]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <Link href="/education-talent/skills-academy">
              <Button
                variant="outline"
                className="px-4 py-2 rounded-full border-2 border-white text-white hover:bg-white/10 transition-all"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Courses
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
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-4 py-2 rounded-full text-sm font-semibold bg-white/20 text-white">
                    {course.difficulty}
                  </span>
                  <span className="px-4 py-2 rounded-full text-sm font-semibold bg-white/20 text-white">
                    {course.category}
                  </span>
                  {course.featured && (
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-amber-400/20 text-amber-200">
                      Featured
                    </span>
                  )}
                </div>
                <h1 className="font-extrabold text-4xl md:text-5xl mb-4 text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                  {course.title}
                </h1>
                <p className="text-xl text-white/90 max-w-3xl mb-4">
                  {course.instructor}
                </p>
                <div className="flex flex-wrap gap-4 text-white/80 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    {course.duration} • {course.hours} hours
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    {course.enrolled} enrolled
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-current" />
                    {course.rating} ({course.reviews} reviews)
                  </div>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <span>Language:</span>
                  <span className="font-semibold">{course.language}</span>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20 px-6 bg-gradient-to-br from-white to-[#F8FAFF]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About */}
              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                  About This Course
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "#6B7280" }}>
                  This comprehensive course is designed to equip you with practical skills and knowledge in {course.category.toLowerCase()}. Through hands-on projects and expert instruction, you'll gain the expertise needed to excel in this field.
                </p>
              </AnimatedSection>

              {/* Learning Outcomes */}
              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                  What You'll Learn
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.learningOutcomes.map((outcome, index) => (
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
                  Course Curriculum
                </h2>
                <div className="space-y-4">
                  {course.curriculum.map((module, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 rounded-xl border"
                      style={{ borderColor: "#E5E7EB", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)" }}
                    >
                      <h3 className="font-bold text-lg mb-3" style={{ color: "#1A2F6B" }}>
                        Module {index + 1}: {module.module}
                      </h3>
                      <ul className="space-y-2">
                        {module.topics.map((topic, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm" style={{ color: "#6B7280" }}>
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#3565D9" }} />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Prerequisites */}
              {course.prerequisites && course.prerequisites.length > 0 && (
                <AnimatedSection>
                  <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                    Prerequisites
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {course.prerequisites.map((prereq, index) => (
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
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Course Info Card */}
              <AnimatedSection>
                <div className="p-6 rounded-2xl border" style={{ borderColor: "#E5E7EB", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)", boxShadow: "0 20px 50px rgba(17,24,39,0.08)" }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: "#1A2F6B" }}>Course Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5" style={{ color: "#3565D9" }} />
                      <div>
                        <p className="text-sm" style={{ color: "#6B7280" }}>Duration</p>
                        <p className="font-semibold" style={{ color: "#1A2F6B" }}>{course.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5" style={{ color: "#3565D9" }} />
                      <div>
                        <p className="text-sm" style={{ color: "#6B7280" }}>Hours</p>
                        <p className="font-semibold" style={{ color: "#1A2F6B" }}>{course.hours} hours</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5" style={{ color: "#3565D9" }} />
                      <div>
                        <p className="text-sm" style={{ color: "#6B7280" }}>Enrolled</p>
                        <p className="font-semibold" style={{ color: "#1A2F6B" }}>{course.enrolled}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5" style={{ color: "#3565D9" }} />
                      <div>
                        <p className="text-sm" style={{ color: "#6B7280" }}>Rating</p>
                        <p className="font-semibold" style={{ color: "#1A2F6B" }}>{course.rating} ({course.reviews})</p>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="primary"
                    className="w-full mt-6 py-3 rounded-full bg-[#1E4FBF] hover:bg-[#1E4FBF]/90 transition-all"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Start Learning
                  </Button>
                </div>
              </AnimatedSection>

              {/* Instructor Card */}
              <AnimatedSection>
                <div className="p-6 rounded-2xl border" style={{ borderColor: "#E5E7EB", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)", boxShadow: "0 20px 50px rgba(17,24,39,0.08)" }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: "#1A2F6B" }}>Instructor</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1E4FBF]/20 to-[#1E4FBF]/5 flex items-center justify-center">
                      <span className="text-3xl">👤</span>
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: "#1A2F6B" }}>{course.instructor}</p>
                      <p className="text-sm" style={{ color: "#6B7280" }}>Course Instructor</p>
                    </div>
                  </div>
                  {course.instructorBio && (
                    <p className="text-sm" style={{ color: "#6B7280", lineHeight: 1.6 }}>
                      {course.instructorBio}
                    </p>
                  )}
                </div>
              </AnimatedSection>

              {/* Related Courses */}
              <AnimatedSection>
                <div className="p-6 rounded-2xl border" style={{ borderColor: "#E5E7EB", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)", boxShadow: "0 20px 50px rgba(17,24,39,0.08)" }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: "#1A2F6B" }}>Related Courses</h3>
                  <div className="space-y-3">
                    <Link href="/education-talent/skills-academy/web-development" className="block p-3 rounded-lg hover:bg-white/50 transition-all">
                      <p className="font-semibold text-sm" style={{ color: "#1A2F6B" }}>Full-Stack Web Development</p>
                      <p className="text-xs" style={{ color: "#6B7280" }}>Intermediate • 60 hours</p>
                    </Link>
                    <Link href="/education-talent/skills-academy/ui-ux-design" className="block p-3 rounded-lg hover:bg-white/50 transition-all">
                      <p className="font-semibold text-sm" style={{ color: "#1A2F6B" }}>UI/UX Design Fundamentals</p>
                      <p className="text-xs" style={{ color: "#6B7280" }}>Beginner • 30 hours</p>
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
              Enroll in this course and start your journey toward mastering new skills and advancing your career.
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
                <Play className="w-5 h-5 mr-2" />
                Start Learning
              </Button>
              <Link href="/education-talent/skills-academy">
                <Button
                  variant="outline"
                  className="px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white/10 transition-all"
                >
                  Browse All Courses
                </Button>
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
