"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`mb-12 ${align === "center" ? "text-center" : ""}`}
    >
      {/* Eyebrow */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="font-bold uppercase tracking-[0.18em] mb-4 text-[#2457D6]"
        style={{ 
          fontFamily: "Inter, sans-serif",
          fontSize: "12px",
        }}
      >
        {eyebrow}
      </motion.p>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        className="font-bold text-[#111111] leading-[1.2] mb-4"
        style={{ 
          fontFamily: "Inter, sans-serif",
          fontSize: "clamp(28px, 4vw, 42px)",
        }}
      >
        {title}
      </motion.h2>

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[#6B7280] leading-[1.6] max-w-2xl"
          style={{ 
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
          }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
