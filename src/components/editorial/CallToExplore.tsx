"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CallToExploreProps {
  title: string;
  description?: string;
  linkText: string;
  linkHref: string;
}

export function CallToExplore({
  title,
  description,
  linkText,
  linkHref,
}: CallToExploreProps) {
  return (
    <section className="relative w-full bg-[#F4F7F9] px-6 py-48 md:py-64" aria-label="Explore">
      <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center justify-center">
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-[#081F5C] max-w-6xl text-balance mb-12"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </motion.h2>

        {description && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl leading-relaxed text-balance mb-16"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {description}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Link href={linkHref}>
            <button className="group relative inline-flex items-center justify-center bg-[#081F5C] text-white overflow-hidden rounded-full px-12 py-5 text-lg font-bold tracking-wide transition-transform duration-300 hover:scale-105">
              <span className="relative z-10 flex items-center gap-3">
                {linkText}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1E4FBF] to-[#5A2396] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </Link>
        </motion.div>
        
      </div>
    </section>
  );
}
