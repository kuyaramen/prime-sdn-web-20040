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
  angleToCenter: number; // degrees, used to orient the triangle pointer
}

function getTooltipClasses(index: number) {
  switch (index) {
    case 0: // Startup Development - Top Center
      return "top-full left-1/2 -translate-x-1/2 mt-4";
    case 1: // Education & Talent - Upper Right
      return "top-1/2 right-full -translate-y-1/2 mr-4";
    case 2: // Research & Innovation - Middle Right
      return "top-1/2 right-full -translate-y-1/2 mr-4";
    case 3: // Digital Transformation - Lower Right
      return "bottom-full left-1/2 -translate-x-1/2 mb-4";
    case 4: // Sustainable Communities - Bottom Center
      return "bottom-full left-1/2 -translate-x-1/2 mb-4";
    case 5: // Partnerships & Investments - Lower Left
      return "top-1/2 left-full -translate-y-1/2 ml-4";
    case 6: // Policy & Governance - Upper Left
      return "top-1/2 left-full -translate-y-1/2 ml-4";
    default:
      return "bottom-full left-1/2 -translate-x-1/2 mb-4";
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
  nodeSize = 132,
  angleToCenter,
}: EcosystemNodeProps) {
  const Icon = ICON_MAP[pillar.iconName] ?? Rocket;
  const half = nodeSize / 2;

  // Float animation — each node gets a slightly different phase
  const floatDelay = index * 0.8;

  // Triangle pointer toward center
  const triangleAngle = angleToCenter; 
  const rad = (triangleAngle * Math.PI) / 180;
  const ptrLen = 10;
  const ptrWidth = 7;
  // Tip of triangle: on the edge of the node, toward center
  const tipX = half + Math.cos(rad) * (half - 2);
  const tipY = half + Math.sin(rad) * (half - 2);
  // Base of triangle: perpendicular to angle
  const perpRad = rad + Math.PI / 2;
  const b1x = tipX - Math.cos(rad) * ptrLen + Math.cos(perpRad) * (ptrWidth / 2);
  const b1y = tipY - Math.sin(rad) * ptrLen + Math.sin(perpRad) * (ptrWidth / 2);
  const b2x = tipX - Math.cos(rad) * ptrLen - Math.cos(perpRad) * (ptrWidth / 2);
  const b2y = tipY - Math.sin(rad) * ptrLen - Math.sin(perpRad) * (ptrWidth / 2);

  return (
    <motion.div
      // Entrance animation
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.15 + index * 0.08,
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
      {/* Float wrapper */}
      <motion.div
        animate={{ y: [3, -3, 2] }}
        transition={{
          duration: 6,
          delay: floatDelay,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{ width: "100%", height: "100%", position: "relative" }}
      >
        {/* Triangle pointer SVG (sits at node edge, pointing to center) */}
        <svg
          width={nodeSize}
          height={nodeSize}
          viewBox={`0 0 ${nodeSize} ${nodeSize}`}
          style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}
        >
          <polygon
            points={`${tipX},${tipY} ${b1x},${b1y} ${b2x},${b2y}`}
            fill={pillar.accentColor}
            opacity={isHovered || isSelected ? 1 : 0.6}
            style={{ transition: "opacity 0.3s ease" }}
          />
        </svg>

        {/* Hover/selected wrapper */}
        <motion.div
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
          onClick={onClick}
          animate={{
            scale: isHovered ? 1.08 : 1.0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            cursor: "pointer",
          }}
        >
          {/* Glow layer (hover/selected) */}
          <motion.div
            animate={{
              opacity: isHovered || isSelected ? 0.65 : 0,
              scale: isHovered ? 1.15 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="absolute rounded-full pointer-events-none"
            style={{
              inset: -6,
              background: `radial-gradient(circle, ${pillar.accentColor}44 0%, transparent 70%)`,
              filter: "blur(10px)",
              zIndex: 0,
            }}
          />

          {/* Animated accent ring */}
          {(isHovered || isSelected) && (
            <motion.div
              initial={{ rotate: 0, scale: 0.98 }}
              animate={{ rotate: 360, scale: [0.98, 1.03, 0.98] }}
              transition={{
                rotate: { duration: 8, ease: "linear", repeat: Infinity },
                scale: { duration: 2, ease: "easeInOut", repeat: Infinity }
              }}
              className="absolute rounded-full border border-dashed pointer-events-none"
              style={{
                borderColor: pillar.accentColor,
                zIndex: 10,
                inset: -4,
                opacity: 0.8
              }}
            />
          )}

          {/* Main circle */}
          <motion.div
            animate={{
              boxShadow: isHovered || isSelected
                ? `0 16px 36px rgba(${pillar.accentColorRgb}, 0.28), 0 0 0 3px ${pillar.accentColor}`
                : `0 8px 24px rgba(0, 0, 0, 0.05), 0 0 0 2px ${pillar.accentColor}50`,
            }}
            transition={{ duration: 0.3 }}
            className="ecosystem-node-circle relative flex flex-col items-center justify-center rounded-full bg-white overflow-hidden"
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            {/* Icon */}
            <div
              className="flex items-center justify-center rounded-full mb-1"
              style={{
                width: nodeSize * 0.30,
                height: nodeSize * 0.30,
                background: `${pillar.accentColor}12`,
                color: pillar.accentColor,
                flexShrink: 0,
              }}
            >
              <Icon size={nodeSize * 0.17} strokeWidth={1.75} />
            </div>

            {/* Title */}
            <div
              className="text-center font-bold leading-tight px-3"
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: nodeSize * 0.088,
                color: "#1E293B",
                lineHeight: 1.15,
              }}
            >
              {pillar.title}
            </div>

            {/* Description Overlay — reveals on hover via CSS class */}
            <div
              className="ecosystem-desc-overlay absolute bottom-0 left-0 right-0 flex items-end justify-center pb-2.5 px-2 pointer-events-none"
              style={{
                background: `linear-gradient(to top, ${pillar.accentColor}20 0%, transparent 100%)`,
                borderRadius: "0 0 50% 50%",
                height: "45%",
                opacity: 0,
                transform: "translateY(4px)",
                transition: "opacity 0.25s ease, transform 0.25s ease",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: nodeSize * 0.065,
                  color: "#475569",
                  textAlign: "center",
                  lineHeight: 1.2,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical" as const,
                  overflow: "hidden",
                }}
              >
                {pillar.description}
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Premium Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`absolute z-[100] w-64 p-4 bg-white/95 backdrop-blur-md rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.08)] border border-slate-100 pointer-events-none ${getTooltipClasses(index)}`}
            >
              <div className="text-left">
                <span
                  className="block text-[10px] font-extrabold uppercase tracking-wider mb-1"
                  style={{ color: pillar.accentColor }}
                >
                  {pillar.title.toUpperCase()}
                </span>
                <p className="text-slate-500 text-[11px] leading-relaxed mb-2.5">
                  {pillar.description}
                </p>
                <div className="border-t border-slate-100 my-2" />
                <div className="space-y-1.5">
                  {pillar.tooltipMetrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: pillar.accentColor }}
                      />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
