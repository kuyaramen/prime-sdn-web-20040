"use client";

import { PillarHero } from "@/components/editorial/PillarHero";
import { SectionHeader } from "@/components/editorial/SectionHeader";
import { educationTalentData } from "@/lib/pillar-data";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function TalentPage() {
  const { talent } = educationTalentData;
  const prefersReduced = useReducedMotion();

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      <PillarHero
        imageSrc={talent.hero.imageSrc}
        imageAlt={talent.hero.imageAlt}
        breadcrumb={talent.hero.breadcrumb}
        title={talent.hero.title}
        description={talent.hero.description}
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
              <Link key={category.id} href={category.href} className="group block">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                  className="bg-white rounded-lg overflow-hidden border border-black/[0.04] shadow-[0_2px_20px_rgba(0,0,0,0.04)] transition-shadow duration-300 group-hover:shadow-[0_4px_30px_rgba(0,0,0,0.08)]"
                >
                  {/* Image Container */}
                  <div className="relative w-full h-[160px] overflow-hidden bg-gray-100">
                    <motion.div
                      initial={{ scale: prefersReduced ? 1 : 1.05 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: prefersReduced ? 0 : 1.2, ease: "easeOut" }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={category.imageSrc}
                        alt={category.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Title */}
                    <h3 className="font-semibold text-[17px] text-[#111111] leading-[1.2] mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                      {category.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[14px] text-[#6B7280] leading-[1.5] mb-3 line-clamp-2" style={{ fontFamily: "Inter, sans-serif" }}>
                      {category.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-[#2457D6] font-medium transition-opacity duration-300 group-hover:opacity-72" style={{ fontFamily: "Inter, sans-serif", fontSize: "14px" }}>
                      <span>Explore →</span>
                    </div>
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
