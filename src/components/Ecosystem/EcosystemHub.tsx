"use client";

import { motion } from "framer-motion";

interface EcosystemHubProps {
  size?: number;
}

export function EcosystemHub({ size = 200 }: EcosystemHubProps) {
  const titleSize = Math.round(size * 0.076);
  const subtitleSize = Math.round(size * 0.048);
  const iconSize = Math.round(size * 0.13);
  const iconWrapSize = Math.round(size * 0.22);
  const dividerW = Math.round(size * 0.32);
  const innerRingSize = size * 0.86;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Center Glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: size + 160,
          height: size + 160,
          background: "radial-gradient(rgba(30,79,191,0.10), transparent)",
          filter: "blur(80px)",
          opacity: 0.35,
        }}
      />
      {/* Outer Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        className="absolute rounded-full pointer-events-none"
        style={{
          width: size + 20,
          height: size + 20,
          padding: "2px",
          background: "conic-gradient(#1E4FBF, #3B82F6, #D4AF37, #1E4FBF)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Main glass hub circle */}
      <motion.div
        animate={{ y: [-2, 2, -2] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
        className="relative flex flex-col items-center justify-center rounded-full select-none"
        style={{
          width: size,
          height: size,
          background: "radial-gradient(circle, rgba(255,255,255,0.98), rgba(242,247,255,0.92))",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: "1.5px solid rgba(23,71,158,0.16)",
          boxShadow:
            "0 24px 64px rgba(23,71,158,0.10), 0 4px 20px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)",
        }}
      >
        {/* Subtle inner ring */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: innerRingSize,
            height: innerRingSize,
            border: "1px solid rgba(23,71,158,0.07)",
          }}
        />

        {/* Central rotating icon cluster */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 80, ease: "linear", repeat: Infinity }}
          className="mb-2 flex items-center justify-center"
          style={{ width: iconWrapSize, height: iconWrapSize }}
        >
          <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="14" cy="14" r="3" fill="#17479E" opacity="0.85" />
            <circle cx="14" cy="5.5" r="1.6" fill="#F59E0B" opacity="0.95" />
            <circle cx="21" cy="9.25" r="1.6" fill="#10B981" opacity="0.95" />
            <circle cx="21" cy="18.75" r="1.6" fill="#3B82F6" opacity="0.95" />
            <circle cx="14" cy="22.5" r="1.6" fill="#6366F1" opacity="0.95" />
            <circle cx="7" cy="18.75" r="1.6" fill="#0EA5A4" opacity="0.95" />
            <circle cx="7" cy="9.25" r="1.6" fill="#8B5CF6" opacity="0.95" />
            <line x1="14" y1="11" x2="14" y2="7.1" stroke="#17479E" strokeWidth="0.7" strokeOpacity="0.25" />
            <line x1="14" y1="11" x2="19.8" y2="10.5" stroke="#17479E" strokeWidth="0.7" strokeOpacity="0.25" />
            <line x1="14" y1="11" x2="19.8" y2="17.5" stroke="#17479E" strokeWidth="0.7" strokeOpacity="0.25" />
            <line x1="14" y1="17" x2="14" y2="20.9" stroke="#17479E" strokeWidth="0.7" strokeOpacity="0.25" />
            <line x1="14" y1="17" x2="8.2" y2="17.5" stroke="#17479E" strokeWidth="0.7" strokeOpacity="0.25" />
            <line x1="14" y1="11" x2="8.2" y2="10.5" stroke="#17479E" strokeWidth="0.7" strokeOpacity="0.25" />
          </svg>
        </motion.div>

         {/* Title */}
         <div
           className="text-center font-bold leading-tight"
           style={{
             fontFamily: "var(--font-body)",
             fontSize: titleSize,
             color: "var(--color-text-brand)",
             letterSpacing: "0.04em",
           }}
         >
           SDN PRIME 2040
         </div>

         {/* Divider */}
         <div
           className="my-1.5"
           style={{
             width: dividerW,
             height: 1,
             background: "linear-gradient(90deg, transparent, var(--color-text-brand), transparent)",
           }}
         />

         {/* Subtitle */}
         <div
           className="text-center"
           style={{
             fontFamily: "var(--font-body)",
             fontSize: subtitleSize,
             color: "var(--color-text-muted)",
             fontWeight: 400,
             letterSpacing: "0.02em",
           }}
         >
           Shared Vision
         </div>
      </motion.div>
    </motion.div>
  );
}
