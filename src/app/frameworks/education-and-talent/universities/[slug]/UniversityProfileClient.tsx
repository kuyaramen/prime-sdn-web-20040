"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { MapPin, GraduationCap, Building2, Phone, Mail, Globe, ArrowLeft, ExternalLink, Award, FlaskConical } from "lucide-react";
import { University } from "@/lib/education-data";

interface UniversityProfileClientProps {
  university: University;
}

export default function UniversityProfileClient({ university }: UniversityProfileClientProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-[#1E4FBF] to-[#2563EB]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <Link href="/education-talent/universities">
              <Button
                variant="outline"
                className="px-4 py-2 rounded-full border-2 border-white text-white hover:bg-white/10 transition-all"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Universities
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
                <span className="text-5xl">{university.logo}</span>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {university.featured && (
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-amber-400/20 text-amber-200">
                      Featured Partner
                    </span>
                  )}
                </div>
                <h1 className="font-extrabold text-4xl md:text-5xl mb-4 text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                  {university.name}
                </h1>
                <p className="text-xl text-white/90 max-w-3xl mb-4 leading-relaxed">
                  {university.overview}
                </p>
                <div className="flex flex-wrap gap-4 text-white/80">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    {university.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    Est. {university.established}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* University Details */}
      <section className="py-20 px-6 bg-gradient-to-br from-white to-[#F8FAFF]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About */}
              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                  About the Institution
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "#6B7280" }}>
                  {university.overview} This institution is committed to providing quality education and fostering innovation through its comprehensive programs, state-of-the-art facilities, and dedicated faculty members.
                </p>
              </AnimatedSection>

              {/* Programs */}
              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                  Academic Programs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {university.programs.map((program, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-xl border"
                      style={{ borderColor: "#E5E7EB", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)" }}
                    >
                      <GraduationCap className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#3565D9" }} />
                      <span className="text-sm" style={{ color: "#6B7280" }}>{program}</span>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Laboratories */}
              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                  Laboratories & Facilities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {university.laboratories.map((lab, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-xl border"
                      style={{ borderColor: "#E5E7EB", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)" }}
                    >
                      <FlaskConical className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#3565D9" }} />
                      <span className="text-sm" style={{ color: "#6B7280" }}>{lab}</span>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Research Areas */}
              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                  Research Areas
                </h2>
                <div className="flex flex-wrap gap-2">
                  {university.researchAreas.map((area, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full text-sm"
                      style={{ backgroundColor: "#EAF2FF", color: "#3565D9" }}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </AnimatedSection>

              {/* Achievements */}
              <AnimatedSection>
                <h2 className="font-extrabold text-2xl mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#1A2F6B" }}>
                  Achievements & Recognition
                </h2>
                <div className="space-y-3">
                  {university.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-xl border"
                      style={{ borderColor: "#E5E7EB", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)" }}
                    >
                      <Award className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#3565D9" }} />
                      <span className="text-sm" style={{ color: "#6B7280" }}>{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <AnimatedSection>
                <div className="p-6 rounded-2xl border" style={{ borderColor: "#E5E7EB", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)", boxShadow: "0 20px 50px rgba(17,24,39,0.08)" }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: "#1A2F6B" }}>Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5" style={{ color: "#3565D9" }} />
                      <div>
                        <p className="text-sm" style={{ color: "#6B7280" }}>Address</p>
                        <p className="font-semibold text-sm" style={{ color: "#1A2F6B" }}>{university.contact.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5" style={{ color: "#3565D9" }} />
                      <div>
                        <p className="text-sm" style={{ color: "#6B7280" }}>Email</p>
                        <p className="font-semibold text-sm" style={{ color: "#1A2F6B" }}>{university.contact.email}</p>
                      </div>
                    </div>
                    {university.contact.phone && (
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5" style={{ color: "#3565D9" }} />
                        <div>
                          <p className="text-sm" style={{ color: "#6B7280" }}>Phone</p>
                          <p className="font-semibold text-sm" style={{ color: "#1A2F6B" }}>{university.contact.phone}</p>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5" style={{ color: "#3565D9" }} />
                      <div className="flex-1">
                        <p className="text-sm" style={{ color: "#6B7280" }}>Website</p>
                        <a
                          href={university.contact.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-sm flex items-center gap-1"
                          style={{ color: "#1A2F6B" }}
                        >
                          Visit Website
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Partnerships */}
              <AnimatedSection>
                <div className="p-6 rounded-2xl border" style={{ borderColor: "#E5E7EB", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)", boxShadow: "0 20px 50px rgba(17,24,39,0.08)" }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: "#1A2F6B" }}>Partnerships</h3>
                  <div className="space-y-2">
                    {university.partnerships.map((partner, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 rounded-lg">
                        <Building2 className="w-4 h-4" style={{ color: "#3565D9" }} />
                        <span className="text-sm" style={{ color: "#6B7280" }}>{partner}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Related Universities */}
              <AnimatedSection>
                <div className="p-6 rounded-2xl border" style={{ borderColor: "#E5E7EB", background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)", boxShadow: "0 20px 50px rgba(17,24,39,0.08)" }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: "#1A2F6B" }}>Related Institutions</h3>
                  <div className="space-y-3">
                    <Link href="/education-talent/universities/caraga-state-university" className="block p-3 rounded-lg hover:bg-white/50 transition-all">
                      <p className="font-semibold text-sm" style={{ color: "#1A2F6B" }}>Caraga State University</p>
                      <p className="text-xs" style={{ color: "#6B7280" }}>Butuan City</p>
                    </Link>
                    <Link href="/education-talent/universities/tesda" className="block p-3 rounded-lg hover:bg-white/50 transition-all">
                      <p className="font-semibold text-sm" style={{ color: "#1A2F6B" }}>TESDA Surigao</p>
                      <p className="text-xs" style={{ color: "#6B7280" }}>Surigao City</p>
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
              Interested in Partnering?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-white/80 text-lg mb-8 max-w-2xl mx-auto"
            >
              Connect with {university.name} to explore partnership opportunities for research, education, and innovation.
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
                <Mail className="w-5 h-5 mr-2" />
                Contact Institution
              </Button>
              <Link href="/education-talent/universities">
                <Button
                  variant="outline"
                  className="px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white/10 transition-all"
                >
                  Browse All Institutions
                </Button>
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
