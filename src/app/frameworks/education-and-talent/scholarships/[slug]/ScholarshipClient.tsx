"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { Clock, Award, Building2, CheckCircle, ArrowLeft, ExternalLink, Users, FileText } from "lucide-react";
import { Scholarship } from "@/lib/education-data";

interface ScholarshipClientProps {
  scholarship: Scholarship;
}

export default function ScholarshipClient({ scholarship }: ScholarshipClientProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-[#1E4FBF] to-[#2563EB]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <Link href="/education-talent/scholarships">
              <Button
                variant="outline"
                className="px-4 py-2 rounded-full border-2 border-white text-white hover:bg-white/10 transition-all"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Scholarships
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
              <div className="w-24 h-24 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <Award className="w-12 h-12 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-4 py-2 rounded-full text-sm font-semibold bg-white/20 text-white">
                    {scholarship.category}
                  </span>
                  {scholarship.featured && (
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-amber-400/20 text-amber-200">
                      Featured
                    </span>
                  )}
                </div>
                <h1 className="font-extrabold text-4xl md:text-5xl mb-4 text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                  {scholarship.title}
                </h1>
                <p className="text-xl text-white/90 max-w-3xl mb-4">
                  {scholarship.sponsor}
                </p>
                <div className="flex flex-wrap gap-4 text-white/80">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Deadline: {scholarship.deadline}
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    {scholarship.duration}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Scholarship Details */}
      <section className="py-20 px-6 bg-gradient-to-br from-white to-[#F8FAFF]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About */}
              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                  About This Scholarship
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "#6B7280" }}>
                  This scholarship opportunity is designed to support deserving students in pursuing their educational goals. The program provides comprehensive coverage and support to ensure scholars can focus on their academic excellence without financial burden.
                </p>
              </AnimatedSection>

              {/* Benefits */}
              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                  Benefits & Coverage
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {scholarship.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-xl border"
                      style={{ borderColor: "#E5E7EB", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)" }}
                    >
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#3565D9" }} />
                      <span className="text-sm" style={{ color: "#6B7280" }}>{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Eligibility */}
              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                  Eligibility Requirements
                </h2>
                <div className="space-y-3">
                  {scholarship.eligibility.map((requirement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-xl border"
                      style={{ borderColor: "#E5E7EB", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)" }}
                    >
                      <Users className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#3565D9" }} />
                      <span className="text-sm" style={{ color: "#6B7280" }}>{requirement}</span>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Requirements */}
              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                  Application Requirements
                </h2>
                <div className="space-y-3">
                  {scholarship.requirements.map((requirement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-xl border"
                      style={{ borderColor: "#E5E7EB", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)" }}
                    >
                      <FileText className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#3565D9" }} />
                      <span className="text-sm" style={{ color: "#6B7280" }}>{requirement}</span>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Scholarship Info Card */}
              <AnimatedSection>
                <div className="p-6 rounded-2xl border" style={{ borderColor: "#E5E7EB", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)", boxShadow: "0 20px 50px rgba(17,24,39,0.08)" }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: "#1A2F6B" }}>Scholarship Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5" style={{ color: "#3565D9" }} />
                      <div>
                        <p className="text-sm" style={{ color: "#6B7280" }}>Deadline</p>
                        <p className="font-semibold" style={{ color: "#1A2F6B" }}>{scholarship.deadline}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Building2 className="w-5 h-5" style={{ color: "#3565D9" }} />
                      <div>
                        <p className="text-sm" style={{ color: "#6B7280" }}>Duration</p>
                        <p className="font-semibold" style={{ color: "#1A2F6B" }}>{scholarship.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5" style={{ color: "#3565D9" }} />
                      <div>
                        <p className="text-sm" style={{ color: "#6B7280" }}>Coverage</p>
                        <p className="font-semibold" style={{ color: "#1A2F6B" }}>{scholarship.coverage}</p>
                      </div>
                    </div>
                  </div>
                  {scholarship.applicationLink && (
                    <Button
                      variant="primary"
                      className="w-full mt-6 py-3 rounded-full bg-[#1E4FBF] hover:bg-[#1E4FBF]/90 transition-all"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Apply Now
                    </Button>
                  )}
                </div>
              </AnimatedSection>

              {/* Sponsor Card */}
              <AnimatedSection>
                <div className="p-6 rounded-2xl border" style={{ borderColor: "#E5E7EB", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)", boxShadow: "0 20px 50px rgba(17,24,39,0.08)" }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: "#1A2F6B" }}>Sponsor</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1E4FBF]/20 to-[#1E4FBF]/5 flex items-center justify-center">
                      <Building2 className="w-8 h-8" style={{ color: "#3565D9" }} />
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: "#1A2F6B" }}>{scholarship.sponsor}</p>
                      <p className="text-sm" style={{ color: "#6B7280" }}>{scholarship.category}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Related Scholarships */}
              <AnimatedSection>
                <div className="p-6 rounded-2xl border" style={{ borderColor: "#E5E7EB", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)", boxShadow: "0 20px 50px rgba(17,24,39,0.08)" }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: "#1A2F6B" }}>Related Scholarships</h3>
                  <div className="space-y-3">
                    <Link href="/education-talent/scholarships/ched-scholarship" className="block p-3 rounded-lg hover:bg-white/50 transition-all">
                      <p className="font-semibold text-sm" style={{ color: "#1A2F6B" }}>CHED UniFAST Scholarship</p>
                      <p className="text-xs" style={{ color: "#6B7280" }}>Government • Until graduation</p>
                    </Link>
                    <Link href="/education-talent/scholarships/tesda-programs" className="block p-3 rounded-lg hover:bg-white/50 transition-all">
                      <p className="font-semibold text-sm" style={{ color: "#1A2F6B" }}>TESDA Training Programs</p>
                      <p className="text-xs" style={{ color: "#6B7280" }}>Government • Varies</p>
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
              Ready to Apply?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-white/80 text-lg mb-8 max-w-2xl mx-auto"
            >
              Don't miss this opportunity to fund your education. Apply before the deadline and take the first step toward your academic goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-wrap justify-center gap-4"
            >
              {scholarship.applicationLink && (
                <Button
                  variant="primary"
                  className="px-8 py-4 rounded-full bg-white text-[#1E4FBF] hover:bg-white/90 transition-all"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Apply Now
                </Button>
              )}
              <Link href="/education-talent/scholarships">
                <Button
                  variant="outline"
                  className="px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white/10 transition-all"
                >
                  Browse All Scholarships
                </Button>
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
