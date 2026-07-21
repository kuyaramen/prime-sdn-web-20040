"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface FeaturedInstitutionProps {
  name: string;
  logo: string;
  logoAlt: string;
  type: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  href: string;
}

export function FeaturedInstitution({
  name,
  logo,
  logoAlt,
  type,
  imageSrc,
  imageAlt,
  description,
  href,
}: FeaturedInstitutionProps) {
  const prefersReduced = useReducedMotion();

  return (
    <Link href={href} className="group block">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white rounded-lg overflow-hidden border border-black/[0.04] shadow-[0_2px_20px_rgba(0,0,0,0.04)] transition-shadow duration-300 group-hover:shadow-[0_4px_30px_rgba(0,0,0,0.08)]"
      >
        {/* Image Container */}
        <div className="relative w-full h-[320px] overflow-hidden bg-gray-100">
          <motion.div
            initial={{ scale: prefersReduced ? 1 : 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReduced ? 0 : 1.2, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-10">
          {/* Logo */}
          <div className="relative w-24 h-24 mb-6">
            <Image
              src={logo}
              alt={logoAlt}
              fill
              className="object-contain"
            />
          </div>

          {/* Institution Name */}
          <h3 className="font-semibold text-[28px] text-[#111111] leading-[1.2] mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
            {name}
          </h3>

          {/* Type */}
          <p className="text-[14px] text-[#6B7280] uppercase tracking-[0.1em] mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            {type}
          </p>

          {/* Description */}
          <p className="text-[16px] text-[#6B7280] leading-[1.7] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
            {description}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-2 text-[#2457D6] font-medium transition-opacity duration-300 group-hover:opacity-72" style={{ fontFamily: "Inter, sans-serif", fontSize: "16px" }}>
            <span>Explore Institution →</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
