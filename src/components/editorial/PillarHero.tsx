"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface PillarHeroProps {
  imageSrc: string;
  imageAlt: string;
  breadcrumb?: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
}

export function PillarHero({
  imageSrc,
  imageAlt,
  breadcrumb,
  title,
  description,
  ctaText,
  ctaHref,
}: PillarHeroProps) {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#111111]">
      {/* Background Image */}
      <motion.div
        initial={{ scale: prefersReduced ? 1 : 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: prefersReduced ? 0 : 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 w-full pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          {breadcrumb && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="font-bold uppercase tracking-[0.18em] mb-6 text-white/80"
              style={{ 
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
              }}
            >
              {breadcrumb}
            </motion.p>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-bold text-white leading-[1.15] mb-6"
            style={{ 
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(42px, 6vw, 64px)",
            }}
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="text-white/90 leading-[1.7] mb-8 max-w-2xl"
            style={{ 
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(16px, 2vw, 18px)",
            }}
          >
            {description}
          </motion.p>

          {/* CTA */}
          {ctaText && ctaHref && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 text-white font-medium transition-opacity duration-300 hover:opacity-72"
                style={{ 
                  fontFamily: "Inter, sans-serif",
                  fontSize: "16px",
                }}
              >
                {ctaText}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
