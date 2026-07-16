"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, AnimatedHero } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  editorialHero,
  featuredEvent,
  activityCategories,
  upcomingActivities,
  latestEvents,
  successStories,
  galleryImages,
  innovationPartners,
  activitiesFAQ,
  finalCTA
} from "@/lib/activities-editorial-data";
import { Calendar, MapPin, Users, ArrowRight, ChevronRight, Clock } from "lucide-react";

export function ActivitiesClient() {
  const prefersReduced = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  return (
    <>
      {/* ===== EDITORIAL HERO ===== */}
      <section className="relative min-h-[85vh] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={editorialHero.backgroundImage}
            alt="Innovation activities"
            fill
            priority
            className="object-cover"
          />
          {/* Dark Gradient Overlay with Vignette */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/85 via-[#0A1628]/65 to-[#1E3A5F]/75" />
          {/* Subtle Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,22,40,0.3)_100%)]" />
          {/* Blue Ambient Lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
          {/* Soft Blur Behind Text Area */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[rgba(10,22,40,0.2)]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 py-32">
          <div className="max-w-[1440px] mx-auto w-full">
            <AnimatedHero>
              {/* Breadcrumb */}
              <motion.nav
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 text-sm mb-8"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4" />
                <span style={{ color: "white" }}>Activities</span>
              </motion.nav>

              {/* Category Label */}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block font-semibold uppercase tracking-widest text-sm mb-6"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  color: "#3B82F6",
                  letterSpacing: "0.2em"
                }}
              >
                {editorialHero.eyebrow}
              </motion.span>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="font-extrabold leading-tight mb-6 text-white max-w-4xl"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  fontWeight: 700
                }}
              >
                {editorialHero.heading}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="text-lg leading-relaxed max-w-2xl mb-10"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  color: "rgba(255,255,255,0.85)"
                }}
              >
                {editorialHero.description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  href="#featured"
                  variant="primary"
                  showArrow={true}
                  className="text-base py-4 px-8 rounded-full bg-[#3B82F6] hover:bg-[#2563EB]"
                >
                  {editorialHero.primaryButton}
                </Button>
                <Button
                  href="#collection"
                  variant="outline"
                  showArrow={true}
                  className="text-base py-4 px-8 rounded-full border-2 border-white text-white hover:bg-white/10"
                >
                  {editorialHero.secondaryButton}
                </Button>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
                >
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1.5 h-1.5 bg-white rounded-full"
                  />
                </motion.div>
              </motion.div>
            </AnimatedHero>
          </div>
        </div>
      </section>

      {/* ===== FEATURED ACTIVITY ===== */}
      <section id="featured" className="py-32 px-6 relative overflow-hidden">
        {/* Background - White with very soft blue radial glow */}
        <div className="absolute inset-0 bg-white" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(circle,rgba(59,130,246,0.03)_0%,transparent_60%)] rounded-full blur-3xl" />
        {/* Content Container */}
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <AnimatedSection>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8"
              >
                <span className="inline-block px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: "Montserrat, Arial, sans-serif", backgroundColor: "#EAF2FF", color: "#3B82F6", letterSpacing: "0.15em" }}>
                  {featuredEvent.category}
                </span>

                <h2 className="font-extrabold leading-tight" style={{ fontFamily: "Montserrat, Arial, sans-serif", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", color: "#0A1628", lineHeight: 1.1 }}>
                  {featuredEvent.title}
                </h2>

                <p className="text-lg leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#64748B", lineHeight: 1.7 }}>
                  {featuredEvent.story}
                </p>

                <div className="flex items-center gap-8 text-sm" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#64748B" }}>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" style={{ color: "#3B82F6" }} />
                    {featuredEvent.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" style={{ color: "#3B82F6" }} />
                    {featuredEvent.location}
                  </div>
                </div>

                <Button
                  href="#"
                  variant="primary"
                  showArrow={true}
                  className="text-base py-4 px-10 rounded-full"
                >
                  {featuredEvent.cta}
                </Button>
              </motion.div>
            </AnimatedSection>

            {/* Right: Images - Editorial Layout */}
            <AnimatedSection>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="relative"
              >
                {/* Large Portrait Image */}
                <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={featuredEvent.mainImage}
                    alt={featuredEvent.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Smaller Vertical Supporting Image */}
                <div className="absolute -bottom-8 -left-8 w-48 h-72 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={featuredEvent.supportingImages[0]}
                    alt="Supporting image"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== IMAGE STORY GALLERY ===== */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background - Light gray (#FAFBFD) with soft gradient */}
        <div className="absolute inset-0 bg-[#FAFBFD]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FAFBFD] to-white" />
        {/* Content Container */}
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-semibold uppercase tracking-widest text-sm mb-4"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#3B82F6", letterSpacing: "0.2em" }}
            >
              STORIES
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="font-extrabold leading-tight"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#0A1628" }}
            >
              Image Stories
            </motion.h2>
          </AnimatedSection>

          {/* Horizontal Scroll Gallery */}
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {galleryImages.slice(0, 6).map((img, index) => (
              <AnimatedSection key={img.id} className="flex-shrink-0 w-[400px] snap-start">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
                  whileHover={{ scale: 1.03 }}
                  className="relative h-[500px] rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-xs font-semibold uppercase tracking-wider mb-2 block" style={{ fontFamily: "Montserrat, Arial, sans-serif", letterSpacing: "0.1em" }}>
                      {img.alt.split(' ')[0]}
                    </span>
                    <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                      {img.alt}
                    </h3>
                    <p className="text-sm opacity-80">January 2026</p>
                    <ArrowRight className="w-5 h-5 mt-3" />
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ACTIVITY COLLECTION ===== */}
      <section id="collection" className="py-32 px-6 relative overflow-hidden">
        {/* Background - White with large blurred blue circle */}
        <div className="absolute inset-0 bg-white" />
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(59,130,246,0.05)_0%,transparent_60%)] rounded-full blur-3xl" />
        {/* Content Container */}
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-semibold uppercase tracking-widest text-sm mb-4"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#3B82F6", letterSpacing: "0.2em" }}
            >
              COLLECTION
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="font-extrabold leading-tight"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#0A1628" }}
            >
              Activity Collection
            </motion.h2>
          </AnimatedSection>

          {/* Clean Minimal Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {upcomingActivities.slice(0, 6).map((activity, index) => (
              <AnimatedSection key={activity.id}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-3 text-xs mb-3" style={{ color: "#64748B", fontFamily: "Montserrat, Arial, sans-serif" }}>
                    <span className="px-2 py-1 rounded-full text-xs font-semibold uppercase tracking-wide" style={{ backgroundColor: "#EAF2FF", color: "#3B82F6" }}>
                      {activity.category}
                    </span>
                    <span>•</span>
                    <span>{activity.date}</span>
                    <span>•</span>
                    <span>{activity.location}</span>
                  </div>
                  <h3 className="font-bold text-xl mb-3 leading-tight" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                    {activity.title}
                  </h3>
                  <Button
                    href="#"
                    variant="outline"
                    showArrow={true}
                    className="text-sm py-2 px-6 rounded-full border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white"
                  >
                    Read More
                  </Button>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EDITORIAL HIGHLIGHT ===== */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background - White with soft mesh gradient */}
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#F0F4FF] via-white to-[#F8FAFC]" />
        {/* Content Container */}
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative rounded-3xl overflow-hidden"
            >
              <div className="relative h-[500px]">
                <Image
                  src={featuredEvent.mainImage}
                  alt="Editorial highlight"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-12">
                <span className="inline-block px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6" style={{ fontFamily: "Montserrat, Arial, sans-serif", backgroundColor: "#3B82F6", color: "white", letterSpacing: "0.15em" }}>
                  FEATURED
                </span>
                <h2 className="font-extrabold text-4xl md:text-5xl mb-4 text-white leading-tight" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                  Innovation Summit 2026
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                  Join industry leaders, innovators, and visionaries for Surigao del Norte's premier innovation conference. Experience groundbreaking ideas, networking opportunities, and transformative workshops.
                </p>
                <Button
                  href="#"
                  variant="primary"
                  showArrow={true}
                  className="text-base py-4 px-10 rounded-full bg-white text-[#0A1628] hover:bg-gray-100"
                >
                  Register Now
                </Button>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== PHOTO EXPERIENCE ===== */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background - Very light blue with glass blur effect */}
        <div className="absolute inset-0 bg-[#FAFBFD]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F0F4FF]/30 to-white" />
        {/* Content Container */}
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-semibold uppercase tracking-widest text-sm mb-4"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#3B82F6", letterSpacing: "0.2em" }}
            >
              EXPERIENCE
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="font-extrabold leading-tight"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#0A1628" }}
            >
              Photo Experience
            </motion.h2>
          </AnimatedSection>

          {/* Horizontal Scroll with Snap */}
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {galleryImages.map((img, index) => (
              <AnimatedSection key={img.id} className="flex-shrink-0 w-[500px] snap-start">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
                  className="relative h-[600px] rounded-2xl overflow-hidden"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LATEST ACTIVITIES ===== */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background - White with subtle diagonal gradient */}
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(59,130,246,0.02)_0%,transparent_50%)]" />
        {/* Content Container */}
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-semibold uppercase tracking-widest text-sm mb-4"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#3B82F6", letterSpacing: "0.2em" }}
            >
              LATEST
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="font-extrabold leading-tight"
              style={{ fontFamily: "Montserrat, Arial, sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#0A1628" }}
            >
              Latest Activities
            </motion.h2>
          </AnimatedSection>

          {/* Smaller Minimal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {latestEvents.slice(0, 8).map((event, index) => (
              <AnimatedSection key={event.id}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.05, ease: "easeOut" }}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-base mb-2 leading-tight" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#0A1628" }}>
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs mb-2" style={{ color: "#64748B", fontFamily: "Montserrat, Arial, sans-serif" }}>
                    <span>{event.date}</span>
                    <span>•</span>
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide" style={{ backgroundColor: "#EAF2FF", color: "#3B82F6" }}>
                      {event.category}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed line-clamp-2" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#64748B" }}>
                    {event.summary}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CALL TO ACTION ===== */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={finalCTA.backgroundImage}
            alt="Background"
            fill
            className="object-cover"
          />
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/92 via-[#0A1628]/85 to-[#1E3A5F]/88" />
          {/* Subtle Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,22,40,0.4)_100%)]" />
          {/* Blue Ambient Lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.12)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.08)_0%,transparent_50%)]" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto text-center">
          <AnimatedSection>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-extrabold text-4xl md:text-6xl mb-6 text-white"
              style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
            >
              {finalCTA.heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto mb-10 text-white/80"
            >
              {finalCTA.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                href="#featured"
                variant="primary"
                showArrow={true}
                className="text-base py-4 px-8 rounded-full bg-[#3B82F6] hover:bg-[#2563EB]"
              >
                {finalCTA.primaryButton}
              </Button>
              <Button
                href="#"
                variant="outline"
                showArrow={true}
                className="text-base py-4 px-8 rounded-full border-2 border-white text-white hover:bg-white/10"
              >
                {finalCTA.secondaryButton}
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
