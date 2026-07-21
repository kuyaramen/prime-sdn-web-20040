"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface NavigationCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description?: string;
  href: string;
  delay?: number;
}

export function NavigationCard({
  imageSrc,
  imageAlt,
  title,
  description,
  href,
  delay = 0,
}: NavigationCardProps) {
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
        <div className="relative w-full h-[180px] overflow-hidden bg-gray-100">
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
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 25vw"
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Title */}
          <h3 className="font-semibold text-[17px] text-[#111111] leading-[1.3] mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
            {title}
          </h3>

          {/* Description */}
          {description && (
            <p className="text-[14px] text-[#6B7280] leading-[1.5] mb-3 line-clamp-2" style={{ fontFamily: "Inter, sans-serif" }}>
              {description}
            </p>
          )}

          {/* CTA */}
          <div className="flex items-center gap-2 text-[#2457D6] font-medium transition-opacity duration-300 group-hover:opacity-72" style={{ fontFamily: "Inter, sans-serif", fontSize: "14px" }}>
            <span>Explore</span>
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
