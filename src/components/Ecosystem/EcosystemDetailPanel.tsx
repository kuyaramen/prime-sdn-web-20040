"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2, CalendarDays, Tag, Building2 } from "lucide-react";
import Link from "next/link";
import type { EcosystemPillar } from "./ecosystemData";

interface EcosystemDetailPanelProps {
  pillar: EcosystemPillar | null;
  onClose: () => void;
}

export function EcosystemDetailPanel({ pillar, onClose }: EcosystemDetailPanelProps) {
  return (
    <AnimatePresence>
      {pillar && (
        <>
          {/* Backdrop (mobile only) */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-30 lg:hidden"
          />

          {/* Panel */}
          <motion.aside
            key="panel"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 35 }}
            className="fixed right-0 top-0 bottom-0 z-40 flex flex-col"
            style={{
              width: "min(420px, 100vw)",
              background: "rgba(255,255,255,0.96)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderLeft: "1px solid rgba(0,0,0,0.07)",
              boxShadow: "-8px 0 40px rgba(0,0,0,0.10)",
            }}
          >
            {/* Accent bar at top */}
            <motion.div
              key={pillar.id + "-bar"}
              layoutId="accent-bar"
              className="w-full flex-shrink-0"
              style={{
                height: 4,
                background: `linear-gradient(90deg, ${pillar.accentColor}, ${pillar.accentColor}66)`,
              }}
            />

            {/* Header */}
            <div
              className="flex items-start justify-between px-6 pt-6 pb-4 flex-shrink-0"
              style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex-shrink-0 rounded-lg flex items-center justify-center"
                  style={{
                    width: 42,
                    height: 42,
                    background: `${pillar.accentColor}18`,
                  }}
                >
                  <div
                    className="rounded-full"
                    style={{ width: 10, height: 10, background: pillar.accentColor }}
                  />
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-0.5"
                    style={{ color: pillar.accentColor }}
                  >
                    SDN PRIME 2040 Pillar
                  </p>
                  <h2
                    className="font-bold leading-tight"
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      fontSize: "1.125rem",
                      color: "#1E293B",
                    }}
                  >
                    {pillar.title}
                  </h2>
                </div>
              </div>
              <button
                onClick={onClose}
                className="flex-shrink-0 flex items-center justify-center rounded-full transition-colors hover:bg-gray-100"
                style={{ width: 32, height: 32, color: "#64748B" }}
                aria-label="Close panel"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-6 py-5 space-y-7">

              {/* Mission */}
              <section>
                <SectionHeading color={pillar.accentColor} label="Mission" />
                <p
                  className="leading-relaxed"
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: "0.875rem",
                    color: "#475569",
                    lineHeight: 1.75,
                  }}
                >
                  {pillar.mission}
                </p>
              </section>

              {/* Programs */}
              <section>
                <SectionHeading color={pillar.accentColor} label="Key Programs" />
                <ul className="space-y-2">
                  {pillar.programs.map((prog, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.35 }}
                      className="flex items-start gap-2.5"
                    >
                      <CheckCircle2
                        size={14}
                        strokeWidth={2}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: pillar.accentColor }}
                      />
                      <span
                        style={{
                          fontFamily: "Inter, system-ui, sans-serif",
                          fontSize: "0.8125rem",
                          color: "#374151",
                        }}
                      >
                        {prog.title}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </section>

              {/* Roadmap */}
              <section>
                <SectionHeading color={pillar.accentColor} label="Roadmap Initiatives" />
                <div className="relative pl-4">
                  {/* Vertical line */}
                  <div
                    className="absolute left-0 top-1 bottom-1 w-px"
                    style={{ background: `${pillar.accentColor}40` }}
                  />
                  <ul className="space-y-3.5">
                    {pillar.roadmap.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i + 0.1, duration: 0.35 }}
                        className="flex items-start gap-3 relative"
                      >
                        {/* Dot */}
                        <div
                          className="absolute -left-4 top-1 w-2 h-2 rounded-full flex-shrink-0 ring-2 ring-white"
                          style={{ background: pillar.accentColor }}
                        />
                        <div>
                          <span
                            className="font-bold mr-2"
                            style={{ fontSize: "0.75rem", color: pillar.accentColor }}
                          >
                            {item.year}
                          </span>
                          <span
                            style={{
                              fontFamily: "Inter, system-ui, sans-serif",
                              fontSize: "0.8125rem",
                              color: "#374151",
                            }}
                          >
                            {item.milestone}
                          </span>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Key Projects */}
              <section>
                <SectionHeading color={pillar.accentColor} label="Key Projects" />
                <div className="flex flex-wrap gap-2">
                  {pillar.projects.map((proj, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.05 * i, duration: 0.3 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: `${pillar.accentColor}12`,
                        color: pillar.accentColor,
                        border: `1px solid ${pillar.accentColor}30`,
                        fontFamily: "Inter, system-ui, sans-serif",
                      }}
                    >
                      <Tag size={10} strokeWidth={2} />
                      {proj.title}
                    </motion.span>
                  ))}
                </div>
              </section>

              {/* Partner Agencies */}
              <section>
                <SectionHeading color={pillar.accentColor} label="Partner Agencies" />
                <div className="flex flex-wrap gap-2">
                  {pillar.partners.map((partner, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.04 * i, duration: 0.3 }}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium"
                      style={{
                        background: "#F1F5F9",
                        color: "#475569",
                        border: "1px solid #E2E8F0",
                        fontFamily: "Inter, system-ui, sans-serif",
                      }}
                    >
                      <Building2 size={10} strokeWidth={2} />
                      {partner.name}
                    </motion.span>
                  ))}
                </div>
              </section>
            </div>

            {/* Footer CTA */}
            <div
              className="flex-shrink-0 px-6 py-4"
              style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
            >
              <Link
                href={`/pillars/${pillar.slug}`}
                className="w-full flex items-center justify-center gap-2 rounded-xl py-3 font-semibold text-sm transition-all hover:opacity-90 hover:-translate-y-0.5 active:scale-[0.98]"
                style={{
                  background: pillar.accentColor,
                  color: "#ffffff",
                  fontFamily: "Inter, system-ui, sans-serif",
                  boxShadow: `0 4px 16px ${pillar.accentColor}40`,
                }}
              >
                Explore {pillar.title}
                <ArrowRight size={15} strokeWidth={2.5} />
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function SectionHeading({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div className="h-px flex-1" style={{ background: `${color}25` }} />
      <h3
        className="text-xs font-bold uppercase tracking-widest flex-shrink-0"
        style={{ color, fontFamily: "Inter, system-ui, sans-serif" }}
      >
        {label}
      </h3>
      <div className="h-px flex-1" style={{ background: `${color}25` }} />
    </div>
  );
}
