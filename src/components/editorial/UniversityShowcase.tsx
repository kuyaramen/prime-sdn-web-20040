"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface UniversityShowcaseProps {
  institutions: Array<{
    id: string;
    name: string;
    logo: string;
    logoAlt: string;
    shortDescription: string;
  }>;
  onSelect: (id: string) => void;
}

export function UniversityShowcase({ institutions, onSelect }: UniversityShowcaseProps) {
  const prefersReduced = useReducedMotion();

  return (
    <div className="w-full overflow-hidden">
      <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
        {institutions.map((institution, index) => (
          <motion.button
            key={institution.id}
            onClick={() => onSelect(institution.id)}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="flex-shrink-0 w-[380px] bg-white rounded-2xl p-12 flex flex-col items-center justify-center border border-black/[0.04] shadow-[0_2px_20px_rgba(0,0,0,0.04)] snap-start"
          >
            {/* Logo */}
            <div className="relative w-32 h-32 mb-8">
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src={institution.logo}
                  alt={institution.logoAlt}
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>

            {/* Institution Name */}
            <h3 className="font-semibold text-[20px] text-[#111111] leading-[1.2] mb-3 text-center" style={{ fontFamily: "Inter, sans-serif" }}>
              {institution.name}
            </h3>

            {/* Short Description */}
            <p className="text-[15px] text-[#6B7280] leading-[1.5] text-center" style={{ fontFamily: "Inter, sans-serif" }}>
              {institution.shortDescription}
            </p>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
