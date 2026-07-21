"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface EditorialCardProps {
  imageSrc: string;
  imageAlt: string;
  logo?: string;
  logoAlt?: string;
  category?: string;
  title: string;
  description: string;
  href: string;
  delay?: number;
}

export function EditorialCard({
  imageSrc,
  imageAlt,
  logo,
  logoAlt,
  category,
  title,
  description,
  href,
  delay = 0,
}: EditorialCardProps) {
  const prefersReduced = useReducedMotion();

  return (
    <Link href={href} className="group block">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        className="bg-white rounded-lg overflow-hidden border border-black/[0.04] shadow-[0_2px_20px_rgba(0,0,0,0.04)] transition-shadow duration-300 group-hover:shadow-[0_4px_30px_rgba(0,0,0,0.08)]"
      >
        {/* Image Container */}
        <div className="relative w-full h-[220px] overflow-hidden bg-gray-100">
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
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
          
          {/* Category Label */}
          {category && (
            <div className="absolute top-4 left-4">
              <span className="inline-block px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-md text-[11px] font-semibold uppercase tracking-[0.16em] text-[#111111]">
                {category}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Logo */}
          {logo && (
            <div className="mb-4 h-8 flex items-center">
              <Image
                src={logo}
                alt={logoAlt || "Logo"}
                width={80}
                height={32}
                className="object-contain max-h-full"
              />
            </div>
          )}

          {/* Title */}
          <h3 className="font-semibold text-[18px] text-[#111111] leading-[1.3] mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
            {title}
          </h3>

          {/* Description */}
          <p className="text-[15px] text-[#6B7280] leading-[1.6] mb-4 line-clamp-2" style={{ fontFamily: "Inter, sans-serif" }}>
            {description}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-2 text-[#2457D6] font-medium transition-opacity duration-300 group-hover:opacity-72" style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}>
            <span>Read More</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
