"use client";

import { PillarHero } from "@/components/editorial/PillarHero";
import { SectionHeader } from "@/components/editorial/SectionHeader";
import { educationTalentData } from "@/lib/pillar-data";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function TalentPage() {
  const { talent, hero } = educationTalentData;
  const prefersReduced = useReducedMotion();

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      <PillarHero
        imageSrc={hero.imageSrc}
        imageAlt={hero.imageAlt}
        breadcrumb={hero.breadcrumb}
        title={hero.title}
        description={hero.description}
      />

      {/* ===== TALENT CATEGORIES SECTION ===== */}
      <section className="py-[120px] px-6 md:px-12 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeader
            eyebrow="Talent Categories"
            title="Explore by Industry"
            description="Discover the diverse talent ecosystem across key sectors driving Surigao del Norte's economy."
            align="left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {talent.categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                className="bg-white rounded-lg border border-black/[0.04] p-8 flex flex-col items-center justify-center transition-all duration-300 hover:border-black/[0.08] hover:shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
              >
                {/* Icon */}
                <div className="text-5xl mb-4">{category.icon}</div>

                {/* Title */}
                <h3 className="font-semibold text-[17px] text-[#111111] leading-[1.2] mb-2 text-center" style={{ fontFamily: "Inter, sans-serif" }}>
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] text-[#6B7280] leading-[1.5] text-center" style={{ fontFamily: "Inter, sans-serif" }}>
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
