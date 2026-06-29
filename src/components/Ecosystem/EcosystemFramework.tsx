"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { EcosystemHub } from "./EcosystemHub";
import { EcosystemNode } from "./EcosystemNode";
import { EcosystemConnectors } from "./EcosystemConnectors";
import { ECOSYSTEM_PILLARS, NODE_ANGLES } from "./ecosystemData";
import type { EcosystemPillar } from "./ecosystemData";
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

// ─── Icon Map ─────────────────────────────────────────────────────────────────
const ICON_MAP: Record<string, LucideIcon> = {
  Rocket,
  GraduationCap,
  FlaskConical,
  MonitorSmartphone,
  Leaf,
  Handshake,
  Scale,
};

// ─── Constants ────────────────────────────────────────────────────────────────
const DESKTOP_CANVAS = 1050;
const DESKTOP_ORBIT = 390;
const DESKTOP_HUB = 380;
const DESKTOP_NODE = 180;

const TABLET_CANVAS = 820;
const TABLET_ORBIT = 300;
const TABLET_HUB = 270;
const TABLET_NODE = 145;

function getNodeCoords(
  cx: number,
  cy: number,
  orbit: number,
  angles: number[]
) {
  return angles.map((angleDeg) => {
    const rad = (angleDeg * Math.PI) / 180;
    return {
      x: cx + orbit * Math.cos(rad),
      y: cy + orbit * Math.sin(rad),
    };
  });
}

// ─── Mobile Card Component ────────────────────────────────────────────────────
function MobileCard({
  pillar,
  isHovered,
  onHoverStart,
  onHoverEnd,
  onClick,
}: {
  pillar: EcosystemPillar;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onClick: () => void;
}) {
  const Icon = ICON_MAP[pillar.iconName] ?? Rocket;
  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full text-left rounded-2xl bg-white flex items-center gap-4 p-4 transition-all relative overflow-hidden group"
      style={{
        boxShadow: isHovered
          ? `0 12px 32px rgba(${pillar.accentColorRgb},0.20), 0 0 0 2.5px ${pillar.accentColor}`
          : "0 4px 16px rgba(0,0,0,0.04)",
        border: `1.5px solid ${isHovered ? pillar.accentColor : "transparent"}`,
        cursor: "pointer",
      }}
    >
      <div
        className="flex-shrink-0 flex items-center justify-center rounded-xl"
        style={{
          width: 48,
          height: 48,
          background: `${pillar.accentColor}10`,
          color: pillar.accentColor,
        }}
      >
        <Icon size={22} strokeWidth={1.75} />
      </div>
      <div className="flex-1 min-w-0">
        <div
          className="font-bold leading-tight mb-0.5 text-slate-800"
          style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: "0.95rem" }}
        >
          {pillar.title}
        </div>
        <div
          className="text-xs leading-snug line-clamp-2 text-slate-500"
          style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
        >
          {pillar.description}
        </div>
      </div>
      <div
        className="flex-shrink-0 w-2 h-2 rounded-full"
        style={{ background: pillar.accentColor, opacity: 0.75 }}
      />
    </motion.button>
  );
}

// ─── Root EcosystemFramework ──────────────────────────────────────────────────
export default function EcosystemFramework() {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [navigatingPillar, setNavigatingPillar] = useState<EcosystemPillar | null>(null);
  const [canvasSize, setCanvasSize] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive detection
  useEffect(() => {
    function measure() {
      const w = window.innerWidth;
      if (w < 768) setCanvasSize("mobile");
      else if (w < 1100) setCanvasSize("tablet");
      else setCanvasSize("desktop");
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const handleNodeClick = useCallback(
    (index: number) => {
      const pillar = ECOSYSTEM_PILLARS[index];
      setIsNavigating(true);
      setNavigatingPillar(pillar);
      
      // Navigate to dedicated route after framework fades out
      setTimeout(() => {
        router.push(`/frameworks/${pillar.slug}`);
      }, 400);
    },
    [router]
  );

  // Derived canvas config
  const canvasW =
    canvasSize === "desktop" ? DESKTOP_CANVAS : TABLET_CANVAS;
  const orbit =
    canvasSize === "desktop" ? DESKTOP_ORBIT : TABLET_ORBIT;
  const hubSize =
    canvasSize === "desktop" ? DESKTOP_HUB : TABLET_HUB;
  const nodeSize =
    canvasSize === "desktop" ? DESKTOP_NODE : TABLET_NODE;

  const cx = canvasW / 2;
  const cy = canvasW / 2;

  const nodeCoords = getNodeCoords(cx, cy, orbit, NODE_ANGLES);

  // Angle from each node pointing back toward center (for the triangle)
  const anglesToCenter = NODE_ANGLES.map((angle) => {
    return angle + 180;
  });

  return (
    <section
      className="relative w-full overflow-hidden min-h-screen flex flex-col justify-between bg-white"
      aria-label="SDN PRIME 2040 Ecosystem Framework"
    >
      {/* Loading Overlay */}
      <AnimatePresence>
        {isNavigating && navigatingPillar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-white/90 backdrop-blur-md"
          >
            <div className="flex flex-col items-center text-center px-6">
              {/* Spinner using active pillar color */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, ease: "linear", repeat: Infinity }}
                className="w-14 h-14 rounded-full border-[3px] border-slate-200 border-t-current mb-5"
                style={{
                  color: navigatingPillar.accentColor,
                }}
              />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-[#4A116A] font-black text-2xl tracking-tight uppercase mb-1.5"
                style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
              >
                Opening Ecosystem...
              </motion.div>
              <div
                className="text-sm font-bold tracking-widest uppercase"
                style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: navigatingPillar.accentColor }}
              >
                {navigatingPillar.title}
              </div>
              <div className="text-slate-400 text-xs mt-4 animate-pulse">
                Loading dedicated workspace...
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={{
          opacity: isNavigating ? 0 : 1,
          y: isNavigating ? -20 : 0
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="w-full flex-1 flex flex-col"
      >
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center pt-[60px] pb-[40px] px-6 max-w-7xl mx-auto"
        >
          <h2
            className="font-bold mb-8 leading-[0.88] uppercase whitespace-pre-line tracking-tighter md:tracking-[-3px]"
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "clamp(2rem, 5vw, 72px)",
              color: "#500a31",
            }}
          >
            EXPLORE THE ECOSYSTEM{"\n"}
            SHAPING THE FUTURE OF{"\n"}
            SURIGAO DEL NORTE.
          </h2>
        </motion.div>

        {/* ── MOBILE LAYOUT ── */}
        {canvasSize === "mobile" ? (
          <div className="relative z-10 px-4 pb-[140px] flex-1 flex flex-col justify-center">
            {/* Mini Hub at top */}
            <div className="flex justify-center mb-8 mt-6">
              <div
                className="flex flex-col items-center justify-center rounded-full bg-white"
                style={{
                  width: 160,
                  height: 160,
                  boxShadow:
                    "0 12px 36px rgba(0,0,0,0.06), inset 0 2px 6px rgba(255,255,255,0.9)",
                  border: "1.5px solid rgba(200,200,200,0.4)",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="3" fill="#1E293B" opacity="0.85" />
                  <circle cx="14" cy="6" r="1.5" fill="#F59E0B" />
                  <circle cx="20.5" cy="10" r="1.5" fill="#10B981" />
                  <circle cx="20.5" cy="18" r="1.5" fill="#3B82F6" />
                  <circle cx="14" cy="22" r="1.5" fill="#6366F1" />
                  <circle cx="7.5" cy="18" r="1.5" fill="#0EA5A4" />
                  <circle cx="7.5" cy="10" r="1.5" fill="#8B5CF6" />
                </svg>
                <div
                  className="text-center font-bold mt-2 px-3 leading-tight"
                  style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: "0.7rem", color: "#1E293B" }}
                >
                  SDN PRIME 2040
                </div>
                <div
                  className="text-center mt-1 px-3"
                  style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: "0.55rem", color: "#94A3B8" }}
                >
                  Shared Vision
                </div>
              </div>
            </div>

            {/* Stacked cards */}
            <div className="grid grid-cols-1 gap-3 max-w-md mx-auto w-full">
              {ECOSYSTEM_PILLARS.map((pillar, i) => (
                <MobileCard
                  key={pillar.id}
                  pillar={pillar}
                  isHovered={hoveredIndex === i}
                  onHoverStart={() => setHoveredIndex(i)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  onClick={() => handleNodeClick(i)}
                />
              ))}
            </div>
          </div>
        ) : (
          /* ── DESKTOP / TABLET RADIAL LAYOUT ── */
          <div
            className="relative flex items-center justify-center flex-1"
            style={{ minHeight: canvasW + 60, paddingBottom: 100, paddingTop: 10 }}
          >
            {/* Subtle decorative background rings */}
            <div
              className="absolute rounded-full border border-gray-200/50"
              style={{
                width: orbit * 2 + nodeSize + 20,
                height: orbit * 2 + nodeSize + 20,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
              }}
            />
            <div
              className="absolute rounded-full border border-gray-200/30"
              style={{
                width: orbit * 2 + nodeSize + 60,
                height: orbit * 2 + nodeSize + 60,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
              }}
            />

            {/* Canvas */}
            <div
              ref={containerRef}
              className="relative flex-shrink-0"
              style={{ width: canvasW, height: canvasW }}
            >
              {/* SVG Connectors */}
              <EcosystemConnectors
                centerX={cx}
                centerY={cy}
                nodes={nodeCoords}
                pillars={ECOSYSTEM_PILLARS}
                selectedIndex={null}
                hoveredIndex={hoveredIndex}
              />

              {/* Center Hub */}
              <div
                className="absolute"
                style={{
                  left: cx - hubSize / 2,
                  top: cy - hubSize / 2,
                  width: hubSize,
                  height: hubSize,
                  zIndex: 25,
                }}
              >
                <EcosystemHub isAnySelected={false} />
              </div>

              {/* Outer Nodes */}
              {ECOSYSTEM_PILLARS.map((pillar, i) => (
                <EcosystemNode
                  key={pillar.id}
                  pillar={pillar}
                  x={nodeCoords[i].x}
                  y={nodeCoords[i].y}
                  index={i}
                  isSelected={false}
                  isHovered={hoveredIndex === i}
                  onHoverStart={() => setHoveredIndex(i)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  onClick={() => handleNodeClick(i)}
                  nodeSize={nodeSize}
                  angleToCenter={anglesToCenter[i]}
                />
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}
