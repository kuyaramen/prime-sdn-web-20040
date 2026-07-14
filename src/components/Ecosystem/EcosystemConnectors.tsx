"use client";

import { motion } from "framer-motion";
import type { EcosystemPillar } from "./ecosystemData";

interface NodeCoord {
  x: number;
  y: number;
}

interface EcosystemConnectorsProps {
  centerX: number;
  centerY: number;
  nodes: NodeCoord[];
  pillars: EcosystemPillar[];
  selectedIndex: number | null;
  hoveredIndex: number | null;
  hubEdgeRadius?: number;
  nodeEdgeRadius?: number;
}

export function EcosystemConnectors({
  centerX,
  centerY,
  nodes,
  pillars,
  selectedIndex,
  hoveredIndex,
  hubEdgeRadius = 105,
  nodeEdgeRadius = 72,
}: EcosystemConnectorsProps) {
  return (
    <svg
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        overflow: "visible",
      }}
    >
      <defs>
        {pillars.map((pillar) => (
          <linearGradient
            key={`grad-${pillar.id}`}
            id={`lineGrad-${pillar.id}`}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor={pillar.accentColor} stopOpacity="0.05" />
            <stop offset="50%" stopColor={pillar.accentColor} stopOpacity="0.25" />
            <stop offset="100%" stopColor={pillar.accentColor} stopOpacity="0.08" />
          </linearGradient>
        ))}
      </defs>

      {nodes.map((node, i) => {
        const pillar = pillars[i];
        const isHovered = hoveredIndex === i;
        const isActive = selectedIndex === i;
        const isHighlight = isHovered || isActive;

        const dx = node.x - centerX;
        const dy = node.y - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const nx = dx / dist;
        const ny = dy / dist;

        const x1 = centerX + nx * hubEdgeRadius;
        const y1 = centerY + ny * hubEdgeRadius;
        const x2 = node.x - nx * nodeEdgeRadius;
        const y2 = node.y - ny * nodeEdgeRadius;

        // Small dot coords at node end
        const dotX = node.x - nx * (nodeEdgeRadius - 4);
        const dotY = node.y - ny * (nodeEdgeRadius - 4);

        return (
          <g key={pillar.id}>
            {/* Base line — draw-on-scroll via whileInView */}
            <motion.line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={isHighlight ? pillar.accentColor : `url(#lineGrad-${pillar.id})`}
              strokeWidth={isHighlight ? 1.5 : 1}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: isHighlight ? 0.75 : 0.4 }}
              viewport={{ once: true }}
              transition={{
                pathLength: { duration: 0.9, delay: 0.3 + i * 0.08, ease: "easeOut" },
                opacity: { duration: 0.5, delay: 0.3 + i * 0.08 },
              }}
              style={{
                filter: isHighlight
                  ? `drop-shadow(0 0 4px ${pillar.accentColor}60)`
                  : "none",
              }}
            />

            {/* Highlight animated glow line */}
            {isHighlight && (
              <motion.line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={pillar.accentColor}
                strokeWidth={3}
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: [0.5, 0.9, 0.5],
                }}
                transition={{
                  pathLength: { duration: 0.4, ease: "easeOut" },
                  opacity: { duration: 2.5, ease: "easeInOut", repeat: Infinity },
                }}
                style={{ filter: `drop-shadow(0 0 6px ${pillar.accentColor}70)` }}
              />
            )}

            {/* Dot at node connection point */}
            <motion.circle
              cx={dotX}
              cy={dotY}
              r={isHighlight ? 3.5 : 2}
              fill={pillar.accentColor}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: isHighlight ? 0.9 : 0.25 }}
              viewport={{ once: true }}
              transition={{
                scale: { duration: 0.3, delay: 0.9 + i * 0.09 },
                opacity: { duration: 0.3, delay: 0.9 + i * 0.09 },
              }}
            />

            {/* Traveling light particle */}
            <motion.circle
              r={isHighlight ? 2.5 : 1.5}
              fill={pillar.accentColor}
              opacity={isHighlight ? 0.8 : 0.18}
            >
              <animateMotion
                dur={`${4.5 + i * 0.35}s`}
                repeatCount="indefinite"
                begin={`${i * 0.45}s`}
                path={`M ${x1} ${y1} L ${x2} ${y2}`}
              />
            </motion.circle>
          </g>
        );
      })}
    </svg>
  );
}
