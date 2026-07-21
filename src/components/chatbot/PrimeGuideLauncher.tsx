"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PrimeGuideMascot } from "./PrimeGuideMascot";

interface PrimeGuideLauncherProps {
  onOpen?: () => void;
  isOpen?: boolean;
}

export function PrimeGuideLauncher({ onOpen, isOpen = false }: PrimeGuideLauncherProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onClick={onOpen}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: isOpen ? 0 : 1,
        opacity: isOpen ? 0 : 1,
        y: isHovered ? -4 : 0,
      }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
      style={{
        background: "linear-gradient(135deg, #1E4FBF 0%, #18479B 100%)",
      }}
      aria-label="Open PRIME Guide"
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(216, 166, 41, 0.3) 0%, transparent 70%)",
        }}
        animate={{
          opacity: isHovered ? 0.6 : 0.3,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Mascot */}
      <motion.div
        animate={{
          scale: isHovered ? 1.08 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="relative z-10 flex items-center justify-center w-full h-full"
      >
        <PrimeGuideMascot 
          size={48} 
          state={isHovered ? "hover" : "idle"} 
        />
      </motion.div>

      {/* Gold highlight ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-transparent"
        style={{
          borderColor: "rgba(216, 166, 41, 0.4)",
        }}
        animate={{
          scale: isHovered ? 1.1 : 1,
          opacity: isHovered ? 1 : 0.5,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Particle sparkles */}
      <AnimatePresence>
        {isHovered && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  background: "#D8A629",
                  top: "50%",
                  left: "50%",
                }}
                initial={{ 
                  scale: 0, 
                  x: 0, 
                  y: 0,
                  opacity: 1,
                }}
                animate={{
                  scale: [0, 1, 0],
                  x: Math.cos((i * 2 * Math.PI) / 3) * 30,
                  y: Math.sin((i * 2 * Math.PI) / 3) * 30,
                  opacity: [1, 0.8, 0],
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
