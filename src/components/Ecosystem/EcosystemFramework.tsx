"use client";

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  Fragment,
} from "react";
import {
  motion,
  AnimatePresence,
  useInView,
} from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Users2,
  Rocket as RocketIcon,
  Lightbulb,
  TrendingUp,
  Handshake as HandshakeIcon,
  MousePointer2,
  LucideIcon,
} from "lucide-react";
import { EcosystemHub } from "./EcosystemHub";
import { EcosystemNode } from "./EcosystemNode";
import { EcosystemConnectors } from "./EcosystemConnectors";
import { RibbonTransition } from "../sections/RibbonTransition";
import { ECOSYSTEM_PILLARS, NODE_ANGLES } from "./ecosystemData";
import type { EcosystemPillar } from "./ecosystemData";

// ─── Canvas Constants (Centered Full-Width Layout) ────────────────────────────
const DESKTOP_CANVAS = 880;
const DESKTOP_ORBIT   = 360;
const DESKTOP_HUB     = 206;
const DESKTOP_NODE    = 220;

const TABLET_CANVAS   = 700;
const TABLET_ORBIT    = 290;
const TABLET_HUB      = 162;
const TABLET_NODE     = 175;

// ─── Statistics Data ──────────────────────────────────────────────────────────
interface StatData {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  Icon: LucideIcon;
  color: string;
  delay: number;
}

const STATS: StatData[] = [
  {
    value: 2500, suffix: "+",
    label: "Entrepreneurs\nSupported",
    Icon: Users2, color: "#1E4FBF", delay: 0,
  },
  {
    value: 150, suffix: "+",
    label: "Startups\nNurtured",
    Icon: RocketIcon, color: "#1E4FBF", delay: 150,
  },
  {
    value: 48,
    label: "Innovation\nPrograms",
    Icon: Lightbulb, color: "#D8A629", delay: 300,
  },
  {
    value: 250, prefix: "₱", suffix: "M+",
    label: "Investments\nFacilitated",
    Icon: TrendingUp, color: "#1E4FBF", delay: 450,
  },
  {
    value: 30, suffix: "+",
    label: "Partner\nOrganizations",
    Icon: HandshakeIcon, color: "#1E4FBF", delay: 600,
  },
];

// ─── Easing ───────────────────────────────────────────────────────────────────
function easeOutExpo(t: number): number {
  return t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

// ─── Counter Hook (re-triggers on every scroll-in) ────────────────────────────
function useCounter(
  target: number,
  duration: number,
  delayMs: number,
  active: boolean
): number {
  const [count, setCount] = useState(0);
  const animRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    // Clean up any running animation
    if (animRef.current) clearTimeout(animRef.current);
    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    if (!active) {
      // Reset to 0 when scrolled out of view
      setCount(0);
      return;
    }

    // Start fresh count-up animation
    setCount(0);
    animRef.current = setTimeout(() => {
      const start = Date.now();
      const tick = () => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        setCount(Math.round(easeOutExpo(progress) * target));
        if (progress < 1) {
          frameRef.current = requestAnimationFrame(tick);
        }
      };
      frameRef.current = requestAnimationFrame(tick);
    }, delayMs);

    return () => {
      if (animRef.current) clearTimeout(animRef.current);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [active, target, duration, delayMs]);

  return count;
}

// ─── Individual Counter Display ───────────────────────────────────────────────
function StatCounter({
  stat,
  inView,
}: {
  stat: StatData;
  inView: boolean;
}) {
  const count = useCounter(stat.value, 1800, stat.delay, inView);

  const display = `${stat.prefix ?? ""}${count.toLocaleString()}${stat.suffix ?? ""}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: stat.delay / 1000, ease: "easeOut" }}
      className="flex flex-col items-center text-center"
    >
      {/* Icon */}
      <div
        className="mb-4 flex items-center justify-center rounded-full"
        style={{
          width: 50,
          height: 50,
          background: `${stat.color}0C`,
          color: stat.color,
        }}
      >
        <stat.Icon size={22} strokeWidth={1.5} />
      </div>

      {/* Animated number */}
      <div
        className="font-bold tracking-tight mb-2"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--font-size-statistic)",
          color: stat.color,
          fontVariantNumeric: "tabular-nums",
          lineHeight: 1,
        }}
      >
        {display}
      </div>

      {/* Label */}
      <div
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--font-size-label)",
          color: "var(--color-text-tertiary)",
          whiteSpace: "pre-line",
          lineHeight: 1.45,
        }}
      >
        {stat.label}
      </div>
    </motion.div>
  );
}

// ─── Background Wave Decoration ───────────────────────────────────────────────
function DecoWaves() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      <svg
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="sbg1" cx="25%" cy="50%" r="40%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="sbg2" cx="75%" cy="50%" r="40%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.035" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="1440" height="600" fill="url(#sbg1)" />
        <rect x="0" y="0" width="1440" height="600" fill="url(#sbg2)" />
        {/* Wave lines */}
        <path
          d="M0 220 C300 170, 600 260, 900 200 C1140 155, 1320 215, 1440 205"
          stroke="#3B82F6"
          strokeWidth="1.2"
          opacity="0.045"
          fill="none"
        />
        <path
          d="M0 320 C300 285, 600 360, 900 300 C1140 252, 1320 318, 1440 305"
          stroke="#3B82F6"
          strokeWidth="1.5"
          opacity="0.03"
          fill="none"
        />
        <path
          d="M0 400 C360 368, 720 430, 1080 375 C1260 350, 1380 400, 1440 388"
          stroke="#F59E0B"
          strokeWidth="1"
          opacity="0.045"
          fill="none"
        />
        <path
          d="M0 460 C400 430, 800 490, 1200 445 C1320 428, 1400 462, 1440 455"
          stroke="#3B82F6"
          strokeWidth="0.8"
          opacity="0.025"
          fill="none"
        />
      </svg>
    </div>
  );
}

// ─── Section 1: Hero → Statistics Atmospheric Mist ───────────────────────────
function HeroTransitionMist() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "relative",
        zIndex: 5,
        marginTop: -60,
        height: 80,
        pointerEvents: "none",
        background:
          "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.85) 50%, #ffffff 100%)",
      }}
    >
      {/* Radial atmospheric glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(230,242,255,0.55) 0%, transparent 75%)",
        }}
      />
      {/* Tiny floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 2 + (i % 2),
            height: 2 + (i % 2),
            left: `${10 + i * 11}%`,
            top: `${30 + (i % 3) * 20}%`,
            background: i % 2 === 0 ? "#3B82F6" : "#F59E0B",
            opacity: 0.06,
          }}
          animate={{ y: [0, -8, 0], opacity: [0.06, 0.12, 0.06] }}
          transition={{
            duration: 4 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}

// ─── Section 2: Interactive Statistics ───────────────────────────────────────
function StatisticsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white overflow-hidden"
      style={{ paddingTop: 72, paddingBottom: 32 }}
      aria-label="Our Impact Statistics"
    >
      <DecoWaves />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 flex flex-col items-center">
        {/* ── Interactive Stats Grid ── */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-6 gap-x-4 mb-12">
          {STATS.map((stat, i) => (
            <InteractiveStatCard key={i} stat={stat} inView={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Interactive Stat Card Component ───────────────────────────────────────
function InteractiveStatCard({
  stat,
  inView,
  index,
}: {
  stat: StatData;
  inView: boolean;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const count = useCounter(stat.value, 1800, stat.delay, inView);
  const display = `${stat.prefix ?? ""}${count.toLocaleString()}${stat.suffix ?? ""}`;

  // Calculate progress percentage (for visual indicator)
  const progress = Math.min(100, (count / stat.value) * 100);

  // Generate unique gradient IDs per card
  const gradId = `stat-grad-${index}`;
  const glowId = `stat-glow-${index}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.7, 
        delay: stat.delay / 1000, 
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        y: -6,
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
      }}
      whileTap={{ scale: 0.97 }}
      className="relative flex flex-col items-center cursor-pointer group"
    >
      {/* Icon Container with Premium Ring */}
      <div className="relative mb-5">
        {/* Ambient Glow (behind everything) */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.5 : 0,
            scale: isHovered ? 1.1 : 0.8,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${stat.color}20 0%, transparent 70%)`,
            filter: "blur(10px)",
            transform: "scale(1.6)",
          }}
        />

        <svg
          width="80"
          height="80"
          viewBox="0 0 100 100"
          className="transform -rotate-90"
        >
          <defs>
            {/* Gradient for progress ring */}
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={stat.color} stopOpacity="1" />
              <stop offset="100%" stopColor={stat.color === "#D8A629" ? "#F5D565" : "#60A5FA"} stopOpacity="0.8" />
            </linearGradient>
            {/* Glow filter */}
            <filter id={glowId}>
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer subtle track */}
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke={isHovered ? `${stat.color}10` : `${stat.color}06`}
            strokeWidth="1"
          />

          {/* Background ring */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke={isHovered ? `${stat.color}18` : `${stat.color}0A`}
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Progress ring with gradient */}
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke={`url(#${gradId})`}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="251"
            strokeDashoffset={251 - (251 * progress) / 100}
            animate={{
              strokeDashoffset: 251 - (251 * progress) / 100,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              filter: isHovered ? `url(#${glowId})` : "none",
            }}
          />

          {/* Dot at the progress tip */}
          {progress > 5 && (
            <motion.circle
              cx={50 + 40 * Math.cos(((251 - (251 * progress) / 100) / 251) * 2 * Math.PI - Math.PI / 2)}
              cy={50 + 40 * Math.sin(((251 - (251 * progress) / 100) / 251) * 2 * Math.PI - Math.PI / 2)}
              r={isHovered ? "4" : "3"}
              fill="white"
              stroke={stat.color}
              strokeWidth="2"
              className="transform rotate-90"
              style={{ transformOrigin: "50px 50px" }}
            />
          )}
        </svg>

        {/* Central Icon Container — Glassmorphic */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            width: 52,
            height: 52,
            margin: "auto",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <motion.div
            animate={{
              scale: isHovered ? 1.12 : 1,
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center justify-center rounded-full"
            style={{
              width: 48,
              height: 48,
              background: isHovered
                ? `linear-gradient(135deg, ${stat.color}1A 0%, ${stat.color}0D 100%)`
                : `linear-gradient(135deg, ${stat.color}0D 0%, ${stat.color}06 100%)`,
              backdropFilter: "blur(8px)",
              border: `1.5px solid ${isHovered ? `${stat.color}25` : `${stat.color}10`}`,
              boxShadow: isHovered
                ? `0 4px 16px ${stat.color}18, inset 0 1px 1px rgba(255,255,255,0.3)`
                : `inset 0 1px 1px rgba(255,255,255,0.15)`,
              color: stat.color,
              transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
            }}
          >
            <stat.Icon size={22} strokeWidth={1.8} />
          </motion.div>
        </div>
      </div>

      {/* Animated number */}
      <motion.div
        animate={{
          scale: isHovered ? 1.06 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="font-bold tracking-tight mb-2"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--font-size-statistic)",
          color: isHovered ? stat.color : "var(--color-text-primary)",
          fontVariantNumeric: "tabular-nums",
          lineHeight: 1,
          transition: "color 0.3s ease",
        }}
      >
        {display}
      </motion.div>

      {/* Label with category tag */}
      <div className="flex flex-col items-center">
        <span
          className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider mb-1.5"
          style={{
            fontFamily: "var(--font-body)",
            background: isHovered ? `${stat.color}12` : "#F1F5F9",
            color: isHovered ? stat.color : "var(--color-text-tertiary)",
            letterSpacing: "0.08em",
            transition: "background 0.3s ease, color 0.3s ease",
          }}
        >
          {stat.label.split("\n")[0]}
        </span>
        {stat.label.includes("\n") && (
          <span
            className="text-[11px] font-medium"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--color-text-muted)",
              lineHeight: 1.3,
            }}
          >
            {stat.label.split("\n")[1]}
          </span>
        )}
      </div>

      {/* Hover tooltip with additional context */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute -top-14 left-1/2 -translate-x-1/2 px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap pointer-events-none"
            style={{
              background: "rgba(15, 23, 42, 0.92)",
              color: "#FFFFFF",
              backdropFilter: "blur(12px)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {getStatContext(stat.label)}
            <div
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45"
              style={{ background: "rgba(15, 23, 42, 0.92)" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Get contextual description for stats ───────────────────────────────────
function getStatContext(label: string): string {
  const contexts: Record<string, string> = {
    "Entrepreneurs\nSupported": "Local founders empowered through mentorship and funding",
    "Startups\nNurtured": "Ventures scaled from ideation to market-ready",
    "Innovation\nPrograms": "Active programs driving provincial transformation",
    "Investments\nFacilitated": "Capital deployed for sustainable growth",
    "Partner\nOrganizations": "Strategic alliances accelerating impact",
  };
  return contexts[label] || "Making a difference";
}

// ─── Orbital Background Decoration ───────────────────────────────────────────
function OrbitalBackground({
  cx,
  cy,
  orbitRadius,
}: {
  cx: number;
  cy: number;
  orbitRadius: number;
}) {
  const rings = [
    orbitRadius * 0.3,
    orbitRadius * 0.55,
    orbitRadius * 0.78,
    orbitRadius,
    orbitRadius * 1.24,
    orbitRadius * 1.5,
  ];

  return (
    <svg
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <defs>
        <radialGradient id="orbGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.055" />
          <stop offset="60%" stopColor="#3B82F6" stopOpacity="0.018" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="orbGold" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.025" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Soft radial glows */}
      <circle cx={cx} cy={cy} r={orbitRadius * 1.5} fill="url(#orbGlow)" />
      <circle cx={cx} cy={cy} r={orbitRadius * 0.9} fill="url(#orbGold)" />

      {/* Concentric faint rings */}
      {rings.map((r, i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="#94A3B8"
          strokeWidth={0.8}
          opacity={Math.max(0.03, 0.065 - i * 0.01)}
          strokeDasharray={i % 2 === 0 ? "3 9" : "2 12"}
        />
      ))}

      {/* Corner flowing lines */}
      <path
        d="M 0 80 Q 80 0 160 60"
        stroke="#3B82F6"
        strokeWidth="0.8"
        opacity="0.04"
        fill="none"
      />
      <path
        d={`M ${cx * 2} 80 Q ${cx * 2 - 80} 0 ${cx * 2 - 160} 60`}
        stroke="#3B82F6"
        strokeWidth="0.8"
        opacity="0.04"
        fill="none"
      />
    </svg>
  );
}

// ─── Tiny Floating Particles Behind Orbital ───────────────────────────────────
function OrbitalParticles({ cx, cy }: { cx: number; cy: number }) {
  const particles = [
    { x: cx * 0.18, y: cy * 0.22, r: 2, c: "#3B82F6", o: 0.08 },
    { x: cx * 1.82, y: cy * 0.25, r: 1.5, c: "#F59E0B", o: 0.07 },
    { x: cx * 0.12, y: cy * 1.6, r: 2, c: "#3B82F6", o: 0.06 },
    { x: cx * 1.88, y: cy * 1.65, r: 1.5, c: "#10B981", o: 0.07 },
    { x: cx * 0.5, y: cy * 0.08, r: 1.5, c: "#F59E0B", o: 0.07 },
    { x: cx * 1.5, y: cy * 0.10, r: 1.5, c: "#3B82F6", o: 0.06 },
    { x: cx * 0.3, y: cy * 1.85, r: 2, c: "#8B5CF6", o: 0.06 },
    { x: cx * 1.7, y: cy * 1.88, r: 1.5, c: "#3B82F6", o: 0.07 },
  ];

  return (
    <>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: p.x,
            top: p.y,
            width: p.r * 2,
            height: p.r * 2,
            background: p.c,
            opacity: p.o,
          }}
          animate={{
            y: [0, -7, 0],
            opacity: [p.o, p.o * 1.8, p.o],
          }}
          transition={{
            duration: 5 + i * 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}
    </>
  );
}

// ─── Mobile Pillar Card ───────────────────────────────────────────────────────
function MobilePillarCard({
  pillar,
  onClick,
}: {
  pillar: EcosystemPillar;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileTap={{ scale: 0.97 }}
      className="w-full text-left rounded-2xl bg-white flex items-center gap-4 p-4"
      style={{
        boxShadow: `0 2px 16px rgba(0,0,0,0.05), 0 0 0 1px ${pillar.accentColor}30`,
        cursor: "pointer",
      }}
      whileHover={{ y: -2 }}
    >
      <div
        className="flex-shrink-0 flex items-center justify-center rounded-xl"
        style={{
          width: 46,
          height: 46,
          background: `${pillar.accentColor}0D`,
          color: pillar.accentColor,
        }}
      >
        <span style={{ fontSize: 20 }}>●</span>
      </div>
      <div className="flex-1 min-w-0">
        <div
          className="font-semibold leading-tight mb-0.5"
          style={{ 
            fontFamily: "var(--font-display)", 
            fontSize: "var(--font-size-body)",
            color: "var(--color-text-primary)"
          }}
        >
          {pillar.title}
        </div>
        <div
          className="text-xs leading-snug line-clamp-2"
          style={{ 
            fontFamily: "var(--font-body)",
            color: "var(--color-text-secondary)"
          }}
        >
          {pillar.description}
        </div>
      </div>
    </motion.button>
  );
}

// ─── Navigation Overlay ───────────────────────────────────────────────────────
function NavigationOverlay({
  pillar,
}: {
  pillar: EcosystemPillar;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
      style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(24px)" }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.1, ease: "linear", repeat: Infinity }}
        className="w-12 h-12 rounded-full border-[2.5px] border-slate-200 mb-5"
        style={{ borderTopColor: pillar.accentColor }}
      />
      <div
        className="font-bold text-xl tracking-tight uppercase mb-1"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
      >
        Opening Ecosystem...
      </div>
      <div
        className="text-sm font-semibold tracking-widest uppercase"
        style={{ fontFamily: "var(--font-body)", color: pillar.accentColor }}
      >
        {pillar.title}
      </div>
    </motion.div>
  );
}

// ─── Main Export ─────────────────────────────────────────────────────────────
export default function EcosystemFramework() {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [navigatingPillar, setNavigatingPillar] = useState<EcosystemPillar | null>(null);
  const [canvasSize, setCanvasSize] = useState<"desktop" | "tablet" | "mobile">("desktop");

  useEffect(() => {
    function measure() {
      const w = window.innerWidth;
      if (w < 768) setCanvasSize("mobile");
      else if (w < 1080) setCanvasSize("tablet");
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
      setTimeout(() => {
        router.push(`/frameworks/${pillar.slug}`);
      }, 420);
    },
    [router]
  );

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

  const nodeCoords = NODE_ANGLES.map((angleDeg) => {
    const rad = (angleDeg * Math.PI) / 180;
    return { x: cx + orbit * Math.cos(rad), y: cy + orbit * Math.sin(rad) };
  });

  const anglesToCenter = NODE_ANGLES.map((a) => a + 180);
  const hubEdgeRadius = hubSize / 2 + 10;
  const nodeEdgeRadius = nodeSize / 2 + 6;

  return (
    <>
      {/* ── Navigation Overlay ── */}
      <AnimatePresence>
        {isNavigating && navigatingPillar && (
          <NavigationOverlay pillar={navigatingPillar} />
        )}
      </AnimatePresence>

      {/* ── Section 1: Atmospheric Hero→Stats Mist ── */}
      <HeroTransitionMist />

      {/* ── Premium Ribbon Transition: Public-Private Partnership ── */}
      <RibbonTransition />

      {/* ── Section 2: Statistics + Vision Bridge ── */}
      <StatisticsSection />

      {/* ── Section 3 + 4: Framework Introduction + Interactive Orbital ── */}
      <section
        className="relative w-full overflow-hidden"
        aria-label="SDN PRIME 2040 Innovation Ecosystem Framework"
        style={{
          minHeight: "800px",
          position: "relative",
        }}
      >
        {/* Background Image Layer */}
        <img
          src="/images/ChatGPT Image Jul 13, 2026, 06_12_59 PM.png"
          alt="Framework background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%",
            zIndex: 0,
          }}
          onLoad={() => console.log("Image loaded successfully")}
          onError={(e) => console.error("Image failed to load:", e)}
        />

        {/* Grid Pattern Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* Premium Multi-Layer Gradient Overlay System */}
        {/* Left Edge Fade */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "25%",
            height: "100%",
            background: "linear-gradient(to right, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.15) 40%, transparent 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Right Edge Fade */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "25%",
            height: "100%",
            background: "linear-gradient(to left, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.15) 40%, transparent 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Bottom Fade for Section Transition */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "35%",
            background: "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.1) 30%, rgba(255, 255, 255, 0.25) 60%, rgba(255, 255, 255, 0.4) 85%, rgba(255, 255, 255, 0.6) 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Radial Vignette */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "radial-gradient(ellipse at center, transparent 40%, rgba(255, 255, 255, 0.08) 70%, rgba(255, 255, 255, 0.15) 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Orbital Area Subtle Highlight */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: canvasW,
            height: canvasW,
            top: 280,
            background: "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.08) 0%, transparent 70%)",
            zIndex: 2,
            pointerEvents: "none",
            borderRadius: "50%",
          }}
        />

        {/* Mobile layout: stacked cards */}
        {canvasSize === "mobile" ? (
          <div className="relative z-10 px-4 pt-16 pb-20">
             {/* Mobile header */}
             <div className="mb-8 text-center">
               <motion.h2
                 initial={{ opacity: 0, y: 26 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -26 }}
                 viewport={{ once: false, amount: 0.3 }}
                 transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
                 className="font-bold leading-tight mb-3"
                 style={{
                   fontFamily: "var(--font-display)",
                   fontSize: "var(--font-size-display-lg)",
                   color: "var(--color-text-primary)",
                 }}
               >
                 <span style={{ color: "#081F5C" }}>FRAMEWORK</span>
               </motion.h2>
             </div>
            <div className="flex flex-col gap-3">
              {ECOSYSTEM_PILLARS.map((pillar) => (
                <MobilePillarCard
                  key={pillar.id}
                  pillar={pillar}
                  onClick={() =>
                    handleNodeClick(
                      ECOSYSTEM_PILLARS.findIndex((p) => p.id === pillar.id)
                    )
                  }
                />
              ))}
            </div>
          </div>
        ) : (
          /* ── Desktop / Tablet: Centered full layout ── */
          <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 text-center">
            <div style={{ paddingTop: 56, paddingBottom: 0 }}>

              {/* Main heading */}
              <motion.h2
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -26 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
                className="font-bold leading-tight mb-5"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3rem, 5vw, 4.5rem)",
                  color: "#081F5C",
                  textShadow: "0 2px 10px rgba(255, 255, 255, 0.8)",
                }}
              >
                FRAMEWORK
              </motion.h2>

              {/* ── Orbital Canvas ── */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
                className="relative flex items-center justify-center"
                style={{ marginTop: 120, marginBottom: 32 }}
              >
                <div
                  style={{
                    width: canvasW,
                    height: canvasW,
                    position: "relative",
                  }}
                >
                  {/* Background orbital deco */}
                  <OrbitalBackground cx={cx} cy={cy} orbitRadius={orbit} />

                  {/* Floating particles behind orbital */}
                  <OrbitalParticles cx={cx} cy={cy} />

                  {/* Connectors (draw on scroll) */}
                  <EcosystemConnectors
                    centerX={cx}
                    centerY={cy}
                    nodes={nodeCoords}
                    pillars={ECOSYSTEM_PILLARS}
                    selectedIndex={null}
                    hoveredIndex={hoveredIndex}
                    hubEdgeRadius={hubEdgeRadius}
                    nodeEdgeRadius={nodeEdgeRadius}
                  />

                  {/* Center Hub */}
                  <div
                    style={{
                      position: "absolute",
                      left: cx - hubSize / 2,
                      top: cy - hubSize / 2,
                      width: hubSize,
                      height: hubSize,
                      zIndex: 25,
                    }}
                  >
                    <EcosystemHub size={hubSize} />
                  </div>

                  {/* Pillar Nodes */}
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
                      isOtherHovered={hoveredIndex !== null && hoveredIndex !== i}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Scroll hint */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex items-center justify-center gap-2"
              >
                {/* Scroll icon */}
                <svg
                  width="14"
                  height="22"
                  viewBox="0 0 14 22"
                  fill="none"
                  style={{ opacity: 0.35 }}
                >
                  <rect
                    x="1"
                    y="1"
                    width="12"
                    height="20"
                    rx="6"
                    stroke="var(--color-text-tertiary)"
                    strokeWidth="1.5"
                  />
                  <motion.rect
                    x="5.5"
                    y="5"
                    width="3"
                    height="5"
                    rx="1.5"
                    fill="var(--color-text-tertiary)"
                    animate={{ y: [5, 9, 5] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </svg>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--font-size-caption)",
                    color: "var(--color-text-muted)",
                    letterSpacing: "0.03em",
                  }}
                >
                  Scroll to explore each pillar
                </span>
              </motion.div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
