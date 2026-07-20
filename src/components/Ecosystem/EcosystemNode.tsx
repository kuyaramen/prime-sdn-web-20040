"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  GraduationCap,
  FlaskConical,
  MonitorSmartphone,
  Leaf,
  Handshake,
  Scale,
  Microscope,
  Building2,
  LucideIcon,
} from "lucide-react";
import type { EcosystemPillar } from "./ecosystemData";

const ICON_MAP: Record<string, LucideIcon> = {
  Rocket,
  GraduationCap,
  FlaskConical,
  MonitorSmartphone,
  Leaf,
  Handshake,
  Scale,
  Microscope,
  Building2,
};

interface EcosystemNodeProps {
  pillar: EcosystemPillar;
  x: number;
  y: number;
  index: number;
  isSelected: boolean;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onClick: () => void;
  nodeSize?: number;
  angleToCenter: number;
  isOtherHovered?: boolean;
}

function getTooltipClasses(index: number) {
  switch (index) {
    case 0: // Top Center
      return "top-full left-1/2 -translate-x-1/2 mt-3";
    case 1: // Upper Right
      return "top-1/2 right-full -translate-y-1/2 mr-3";
    case 2: // Middle Right
      return "top-1/2 right-full -translate-y-1/2 mr-3";
    case 3: // Lower Right
      return "bottom-full left-1/2 -translate-x-1/2 mb-3";
    case 4: // Bottom Center
      return "bottom-full left-1/2 -translate-x-1/2 mb-3";
    case 5: // Lower Left
      return "top-1/2 left-full -translate-y-1/2 ml-3";
    case 6: // Upper Left
      return "top-1/2 left-full -translate-y-1/2 ml-3";
    default:
      return "bottom-full left-1/2 -translate-x-1/2 mb-3";
  }
}

export function EcosystemNode({
  pillar,
  x,
  y,
  index,
  isSelected,
  isHovered,
  onHoverStart,
  onHoverEnd,
  onClick,
  nodeSize = 140,
  angleToCenter,
  isOtherHovered = false,
}: EcosystemNodeProps) {
  const Icon = ICON_MAP[pillar.iconName] ?? Rocket;
  const half = nodeSize / 2;
  const floatDelay = index * 0.7;
  const iconContainerSize = nodeSize * 0.30;
  const iconSize = nodeSize * 0.175;
  const titleFontSize = nodeSize * 0.088;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      animate={{ opacity: isOtherHovered ? 0.78 : 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.65,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        position: "absolute",
        left: x - half,
        top: y - half,
        width: nodeSize,
        height: nodeSize,
        zIndex: isSelected || isHovered ? 40 : 10,
      }}
    >
      {/* Gentle float animation */}
      <motion.div
        animate={{ y: [2, -3.5, 1.5, -2.5, 2] }}
        transition={{
          duration: 7 + index * 0.6,
          delay: floatDelay,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{ width: "100%", height: "100%", position: "relative" }}
      >
        {/* Interactive wrapper */}
        <motion.div
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
          onClick={onClick}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
          style={{ width: "100%", height: "100%", position: "relative", cursor: "pointer" }}
        >
          {/* Main glass circle */}
          <motion.div
            animate={{
              boxShadow: isHovered || isSelected
                ? `0 30px 70px rgba(15,23,42,.16), inset 0 1px 0 rgba(255,255,255,.8)`
                : `0 20px 60px rgba(15,23,42,.10), inset 0 1px 0 rgba(255,255,255,.8)`,
              borderColor: "rgba(255,255,255,0.85)",
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative flex flex-col items-center justify-center rounded-full overflow-hidden"
            style={{
              width: "100%",
              height: "100%",
              zIndex: 1,
              borderWidth: "1.5px",
              borderStyle: "solid",
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            {/* Thematic Background Image */}
            <motion.div
              animate={{
                scale: isHovered || isSelected ? 1.05 : 1,
                opacity: isHovered || isSelected ? 0.95 : 0.80,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 z-0 pointer-events-none"
              style={{
                backgroundImage: `url(${pillar.heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(1.05) contrast(0.95) saturate(0.90)",
              }}
            />

            {/* Bottom White Gradient for Text Readability */}
            <div
              className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
              style={{
                height: "65%",
                background: "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 45%, transparent 100%)",
              }}
            />

            {/* Content Layer */}
            <div className="relative z-20 flex flex-col items-center justify-center pointer-events-none px-3 w-full">
              {/* Icon container */}
              <motion.div
                animate={{ scale: isHovered || isSelected ? 1.08 : 1 }}
                transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
                className="flex items-center justify-center rounded-full mb-[12%]"
                style={{
                  width: iconContainerSize,
                  height: iconContainerSize,
                  background: "rgba(255,255,255,.92)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  boxShadow: "0 8px 25px rgba(15,23,42,.12)",
                  color: pillar.accentColor,
                  flexShrink: 0,
                }}
              >
                <Icon size={iconSize} strokeWidth={2} />
              </motion.div>

              {/* Title */}
              <div
                className="text-center font-bold leading-tight"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: titleFontSize,
                  color: "#0F172A",
                  textShadow: "0 2px 8px rgba(255,255,255,.45)",
                  lineHeight: 1.15,
                }}
              >
                {pillar.title}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
