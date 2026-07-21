"use client";

import { useState, useEffect } from "react";
import { PillarHero } from "@/components/editorial/PillarHero";
import { educationTalentData } from "@/lib/pillar-data";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function EducationTalentClient() {
  const { hero, institutions, talent, continueExploring } = educationTalentData;
  const prefersReduced = useReducedMotion();
  const [activeSection, setActiveSection] = useState<"institutions" | "talent" | null>(null);

  const { scrollY } = useScroll();

  // Active section detection
  useEffect(() => {
    const handleScroll = () => {
      const institutionsSection = document.getElementById("institutions");
      const talentSection = document.getElementById("talent");

      if (!institutionsSection || !talentSection) return;

      const institutionsRect = institutionsSection.getBoundingClientRect();
      const talentRect = talentSection.getBoundingClientRect();

      if (talentRect.top <= window.innerHeight / 2) {
        setActiveSection("talent");
      } else if (institutionsRect.top <= window.innerHeight / 2) {
        setActiveSection("institutions");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #F8F7F4 0%, #F4F3EF 45%, #F7F6F3 100%)" }}>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[85vh] md:min-h-[75vh] flex items-center overflow-hidden bg-[#111111]">
        {/* Background Image */}
        <motion.div
          initial={{ scale: prefersReduced ? 1 : 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: prefersReduced ? 0 : 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={hero.imageSrc}
            alt={hero.imageAlt}
            fill
            className="object-cover object-center md:object-top"
            priority
            sizes="100vw"
          />
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto sx:px-4 sm:px-6 md:px-12 lg:px-16 w-full sx:pt-24 sx:pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
          <div className="max-w-3xl sx:max-w-full">
            {/* Breadcrumb */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="font-bold uppercase tracking-[0.18em] mb-4 sx:mb-3 md:mb-6 text-white/80"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "11px" }}
            >
              {hero.breadcrumb}
            </motion.p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-bold text-white leading-[1.15] mb-4 sx:mb-3 md:mb-6"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(28px, 8vw, 64px)" }}
            >
              {hero.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
              className="text-white/90 leading-[1.7] mb-8 sx:mb-6 md:mb-12 max-w-2xl sx:max-w-full"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(14px, 3vw, 18px)" }}
            >
              {hero.description}
            </motion.p>

            {/* Section Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="flex items-center gap-6 sx:gap-4 md:gap-8 sx:flex-col sx:items-start md:flex-row"
            >
              <button
                onClick={() => scrollToSection("institutions")}
                className="relative group"
              >
                <span
                  className="text-white font-medium transition-opacity duration-300 group-hover:opacity-72"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}
                >
                  Institutions
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-white"
                  initial={{ width: activeSection === "institutions" ? "100%" : "0%" }}
                  animate={{ width: activeSection === "institutions" ? "100%" : "0%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </button>

              <span className="text-white/40 sx:hidden md:block" style={{ fontSize: "24px" }}>|</span>

              <button
                onClick={() => scrollToSection("talent")}
                className="relative group"
              >
                <span
                  className="text-white font-medium transition-opacity duration-300 group-hover:opacity-72"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}
                >
                  Talent
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-white"
                  initial={{ width: activeSection === "talent" ? "100%" : "0%" }}
                  animate={{ width: activeSection === "talent" ? "100%" : "0%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== INSTITUTIONS SECTION ===== */}
      <section id="institutions" className="min-h-screen py-[100px] sx:py-[80px] md:py-[120px] lg:py-[140px] px-6 md:px-12 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          {/* Editorial Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-[120px] sx:mb-[80px] md:mb-[150px] lg:mb-[200px]"
          >
            {/* Accent Line */}
            <div className="w-12 sx:w-10 md:w-14 lg:w-16 h-[3px] bg-[#2457D6] mb-6 sx:mb-4 md:mb-6 lg:mb-8" />

            {/* Editorial Title */}
            <h2 className="font-bold text-[#111111] leading-[1.15] mb-6 sx:mb-4 md:mb-6 lg:mb-8" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(32px, 8vw, 72px)" }}>
              {institutions.heading}
            </h2>

            {/* Editorial Description */}
            <p className="text-[#6B7280] leading-[1.8] max-w-[700px] sx:max-w-full" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(16px, 3vw, 20px)" }}>
              {institutions.description}
            </p>
          </motion.div>

          {/* Sticky Two-Column Layout */}
          <div className="flex gap-8 sx:gap-6 md:gap-12 lg:gap-16 sx:flex-col md:flex-row">
            {/* Left Sticky Column - Hidden on mobile/tablet */}
            <div className="hidden lg:block w-[400px] shrink-0">
              <div className="sticky top-32">
                <p className="text-[13px] text-[#6B7280] uppercase tracking-[0.15em] mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                  {institutions.title}
                </p>
                <h3 className="font-bold text-[#111111] leading-[1.2] mb-4" style={{ fontFamily: "Inter, sans-serif", fontSize: "32px" }}>
                  {institutions.heading}
                </h3>
                <p className="text-[15px] text-[#6B7280] leading-[1.7]" style={{ fontFamily: "Inter, sans-serif" }}>
                  {institutions.description}
                </p>
              </div>
            </div>

            {/* Right Scrolling Column */}
            <div className="flex-1 space-y-[120px] sx:space-y-[80px] md:space-y-[150px] lg:space-y-[200px]">
              {institutions.institutions.map((institution, index) => (
                <Link key={institution.id} href={institution.href} className="block">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                    className="bg-white rounded-2xl border border-black/[0.04] shadow-[0_2px_20px_rgba(0,0,0,0.04)] p-8 sx:p-6 md:p-12 lg:p-16 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-[0_4px_30px_rgba(0,0,0,0.08)]"
                    style={{ minHeight: "300px" }}
                  >
                    {/* Logo */}
                    <div className="relative w-[200px] sx:w-[160px] md:w-[240px] lg:w-[320px] h-[200px] sx:h-[160px] md:h-[240px] lg:h-[320px] mb-6 sx:mb-4 md:mb-6 lg:mb-8">
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={institution.logo}
                          alt={institution.logoAlt}
                          fill
                          className="object-contain"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TALENT SECTION ===== */}
      <section id="talent" className="py-[100px] sx:py-[80px] md:py-[120px] lg:py-[140px] px-6 md:px-12 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          {/* Editorial Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-[80px] sx:mb-[60px] md:mb-[100px] lg:mb-[120px]"
          >
            {/* Accent Line */}
            <div className="w-12 sx:w-10 md:w-14 lg:w-16 h-[3px] bg-[#2457D6] mb-6 sx:mb-4 md:mb-6 lg:mb-8" />

            {/* Editorial Title */}
            <h2 className="font-bold text-[#111111] leading-[1.15] mb-6 sx:mb-4 md:mb-6 lg:mb-8" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(32px, 8vw, 72px)" }}>
              {talent.heading}
            </h2>

            {/* Editorial Description */}
            <p className="text-[#6B7280] leading-[1.8] max-w-[700px] sx:max-w-full" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(16px, 3vw, 20px)" }}>
              {talent.description}
            </p>
          </motion.div>

          {/* Talent Categories */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sx:gap-3 md:gap-5 lg:gap-6">
              {talent.categories.map((category, index) => (
                <button
                  key={category.id}
                  className="bg-white rounded-lg border border-black/[0.04] p-6 sx:p-5 md:p-7 lg:p-8 flex flex-col items-center justify-center transition-all duration-300 hover:border-black/[0.08] hover:shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-3xl sx:text-2xl md:text-3xl lg:text-4xl mb-4 sx:mb-3 md:mb-5 lg:mb-6"
                  >
                    {category.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-semibold text-[16px] sx:text-[15px] md:text-[17px] lg:text-[18px] text-[#111111] leading-[1.3] mb-2 text-center" style={{ fontFamily: "Inter, sans-serif" }}>
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] sx:text-[12px] md:text-[13px] lg:text-[14px] text-[#6B7280] leading-[1.5] text-center" style={{ fontFamily: "Inter, sans-serif" }}>
                    {category.description}
                  </p>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CONTINUE EXPLORING SECTION ===== */}
      <section className="py-[120px] px-6 md:px-12 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16"
          >
            <h2 className="font-bold text-[#111111] leading-[1.2] mb-4" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(28px, 4vw, 42px)" }}>
              Continue Exploring
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {continueExploring.map((item, index) => (
              <Link key={item.id} href={item.href} className="group block">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                  className="bg-white rounded-lg border border-black/[0.04] p-8 transition-all duration-300 group-hover:shadow-[0_4px_30px_rgba(0,0,0,0.08)]"
                >
                  <h3 className="font-semibold text-[20px] text-[#111111] leading-[1.2] mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-[#6B7280] leading-[1.6] mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#2457D6] font-medium transition-opacity duration-300 group-hover:opacity-72" style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}>
                    <span>Explore →</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
