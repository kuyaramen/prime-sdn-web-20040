"use client";

import { motion } from "framer-motion";

interface PrimeGuideMascotProps {
  size?: number;
  state?: "idle" | "hover" | "thinking" | "speaking" | "loading";
  className?: string;
}

export function PrimeGuideMascot({ size = 64, state = "idle", className = "" }: PrimeGuideMascotProps) {
  const getEyeAnimation = () => {
    switch (state) {
      case "hover":
        return {
          scale: 1.1,
          opacity: 1,
        };
      case "thinking":
        return {
          scale: [1, 0.9, 1],
          opacity: [1, 0.7, 1],
        };
      case "speaking":
        return {
          scale: [1, 1.05, 1],
        };
      case "loading":
        return {
          rotate: 360,
        };
      default:
        return {
          scale: 1,
          opacity: 1,
        };
    }
  };

  const getSmileAnimation = () => {
    switch (state) {
      case "hover":
        return {
          scale: 1.1,
        };
      case "thinking":
        return {
          scale: [1, 0.95, 1],
        };
      case "speaking":
        return {
          scale: [1, 1.15, 1],
        };
      default:
        return {
          scale: 1,
        };
    }
  };

  const getGlowAnimation = () => {
    switch (state) {
      case "hover":
        return {
          opacity: 0.6,
          scale: 1.2,
        };
      case "thinking":
        return {
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        };
      case "speaking":
        return {
          opacity: 0.5,
          scale: 1.15,
        };
      case "loading":
        return {
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        };
      default:
        return {
          opacity: 0.3,
          scale: 1,
        };
    }
  };

  const getAntennaAnimation = () => {
    switch (state) {
      case "thinking":
        return {
          y: [0, -3, 0],
        };
      case "loading":
        return {
          rotate: 360,
        };
      default:
        return {
          y: 0,
        };
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Glow */}
      <motion.circle
        cx="32"
        cy="32"
        r={size * 0.45}
        fill="url(#glowGradient)"
        initial={getGlowAnimation()}
        animate={getGlowAnimation()}
        transition={{
          duration: state === "loading" ? 2 : 0.3,
          repeat: state === "thinking" || state === "loading" ? Infinity : 0,
          ease: "easeInOut",
        }}
      />

      {/* Head */}
      <rect
        x="12"
        y="14"
        width="40"
        height="36"
        rx="12"
        fill="url(#headGradient)"
      />

      {/* Antenna */}
      <motion.g
        initial={getAntennaAnimation()}
        animate={getAntennaAnimation()}
        transition={{
          duration: state === "loading" ? 2 : 1.5,
          repeat: state === "thinking" || state === "loading" ? Infinity : 0,
          ease: "easeInOut",
        }}
      >
        <line x1="32" y1="14" x2="32" y2="8" stroke="#D8A629" strokeWidth="2" />
        <circle cx="32" cy="6" r="3" fill="#D8A629" />
      </motion.g>

      {/* Eyes */}
      <motion.g
        initial={getEyeAnimation()}
        animate={getEyeAnimation()}
        transition={{
          duration: state === "loading" ? 2 : 0.3,
          repeat: state === "thinking" || state === "loading" ? Infinity : 0,
          ease: "easeInOut",
        }}
      >
        {/* Left Eye */}
        <ellipse cx="24" cy="30" rx="5" ry="6" fill="#FFFFFF" />
        <ellipse cx="24" cy="30" rx="3" ry="4" fill="#1E4FBF" />
        
        {/* Right Eye */}
        <ellipse cx="40" cy="30" rx="5" ry="6" fill="#FFFFFF" />
        <ellipse cx="40" cy="30" rx="3" ry="4" fill="#1E4FBF" />
      </motion.g>

      {/* Smile */}
      <motion.path
        d="M 22 40 Q 32 48 42 40"
        stroke="#D8A629"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={getSmileAnimation()}
        animate={getSmileAnimation()}
        transition={{
          duration: 0.3,
          repeat: state === "speaking" ? Infinity : 0,
          ease: "easeInOut",
        }}
      />

      {/* Innovation Ring (subtle) */}
      {state === "loading" && (
        <motion.circle
          cx="32"
          cy="32"
          r="28"
          stroke="url(#ringGradient)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="8 4"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}

      {/* Gradients */}
      <defs>
        <radialGradient id="glowGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(32 32)">
          <stop stopColor="#1E4FBF" stopOpacity="0.4" />
          <stop offset="1" stopColor="#1E4FBF" stopOpacity="0" />
        </radialGradient>
        
        <linearGradient id="headGradient" x1="12" y1="14" x2="52" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E4FBF" />
          <stop offset="1" stopColor="#18479B" />
        </linearGradient>
        
        <linearGradient id="ringGradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D8A629" />
          <stop offset="1" stopColor="#1E4FBF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
