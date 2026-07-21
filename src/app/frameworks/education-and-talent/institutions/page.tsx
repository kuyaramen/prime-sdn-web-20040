"use client";

import { PillarHero } from "@/components/editorial/PillarHero";
import { educationTalentData } from "@/lib/pillar-data";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function InstitutionsPage() {
  const { institutions, hero } = educationTalentData;

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

      {/* ===== INSTITUTION LOGO GALLERY ===== */}
      <section className="py-[120px] px-6 md:px-12 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {institutions.institutions.map((institution, index) => (
              <Link key={institution.id} href={institution.href} className="group block">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                  className="bg-white rounded-lg border border-black/[0.04] shadow-[0_2px_20px_rgba(0,0,0,0.04)] p-12 flex flex-col items-center justify-center transition-all duration-300 group-hover:shadow-[0_4px_30px_rgba(0,0,0,0.08)] group-hover:bg-gray-50"
                >
                  {/* Logo */}
                  <div className="relative w-32 h-32 mb-6">
                    <Image
                      src={institution.logo}
                      alt={institution.logoAlt}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Institution Name */}
                  <h3 className="font-semibold text-[18px] text-[#111111] leading-[1.3] text-center" style={{ fontFamily: "Inter, sans-serif" }}>
                    {institution.name}
                  </h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
