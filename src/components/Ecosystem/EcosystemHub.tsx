"use client";

import { motion } from "framer-motion";

interface EcosystemHubProps {
  isAnySelected: boolean;
}

export function EcosystemHub({ isAnySelected }: EcosystemHubProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-center justify-center"
      style={{ width: 380, height: 380 }}
    >
      {/* Outermost pulse ring */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.15, 0.3] }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
        className="absolute rounded-full border border-gray-300"
        style={{ width: 380, height: 380, pointerEvents: "none" }}
      />

      {/* Second decorative ring */}
      <motion.div
        animate={{ scale: [1, 1.02, 1], opacity: [0.4, 0.25, 0.4] }}
        transition={{ duration: 4.5, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
        className="absolute rounded-full border border-gray-200"
        style={{ width: 345, height: 345, pointerEvents: "none" }}
      />

      {/* Main hub circle */}
      <motion.div
        animate={{
          y: [-2, 2, -2]
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity
        }}
        className="relative flex flex-col items-center justify-center rounded-full bg-white select-none"
        style={{
          width: 320,
          height: 320,
          boxShadow:
            "0 16px 48px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04), inset 0 2px 8px rgba(255,255,255,0.9), inset 0 -2px 6px rgba(0,0,0,0.02)",
          border: "1.5px solid rgba(200,200,200,0.45)",
        }}
      >
        {/* Inner subtle stroke ring */}
        <div
          className="absolute rounded-full"
          style={{
            width: 285,
            height: 285,
            border: "1px solid rgba(180,180,180,0.20)",
            pointerEvents: "none",
          }}
        />

        {/* Icon */}
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
          className="mb-3 flex items-center justify-center rounded-full"
          style={{
            width: 62,
            height: 62,
            background: "linear-gradient(135deg, #F59E0B12 0%, #8B5CF612 50%, #3B82F612 100%)",
            border: "1px solid rgba(139,92,246,0.12)",
          }}
        >
          {/* Abstract innovation symbol — custom SVG */}
          <svg width="34" height="34" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="3" fill="#1E293B" opacity="0.85" />
            <circle cx="14" cy="6" r="1.5" fill="#F59E0B" opacity="0.9" />
            <circle cx="20.5" cy="10" r="1.5" fill="#10B981" opacity="0.9" />
            <circle cx="20.5" cy="18" r="1.5" fill="#3B82F6" opacity="0.9" />
            <circle cx="14" cy="22" r="1.5" fill="#6366F1" opacity="0.9" />
            <circle cx="7.5" cy="18" r="1.5" fill="#0EA5A4" opacity="0.9" />
            <circle cx="7.5" cy="10" r="1.5" fill="#8B5CF6" opacity="0.9" />
            <line x1="14" y1="11" x2="14" y2="7.5" stroke="#1E293B" strokeWidth="0.75" strokeOpacity="0.3" />
            <line x1="14" y1="11" x2="19.5" y2="11.5" stroke="#1E293B" strokeWidth="0.75" strokeOpacity="0.3" />
            <line x1="14" y1="11" x2="19.5" y2="17.5" stroke="#1E293B" strokeWidth="0.75" strokeOpacity="0.3" />
            <line x1="14" y1="17" x2="14" y2="20.5" stroke="#1E293B" strokeWidth="0.75" strokeOpacity="0.3" />
            <line x1="14" y1="17" x2="8.5" y2="17.5" stroke="#1E293B" strokeWidth="0.75" strokeOpacity="0.3" />
            <line x1="14" y1="11" x2="8.5" y2="10.5" stroke="#1E293B" strokeWidth="0.75" strokeOpacity="0.3" />
          </svg>
        </motion.div>

        {/* Title */}
        <div
          className="text-center font-bold leading-tight mb-1"
          style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "1.25rem",
            color: "#1E293B",
            letterSpacing: "0.04em",
          }}
        >
          SDN PRIME 2040
        </div>

        {/* Divider */}
        <div
          className="mb-2"
          style={{
            width: 40,
            height: 1.5,
            background: "linear-gradient(90deg, transparent, #94A3B8, transparent)",
            borderRadius: 1,
          }}
        />

        {/* Subtitle */}
        <div
          className="text-center px-8 leading-snug"
          style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "0.75rem",
            color: "#64748B",
            fontWeight: 400,
            maxWidth: 210,
          }}
        >
          Shared Vision
        </div>
      </motion.div>
    </motion.div>
  );
}
