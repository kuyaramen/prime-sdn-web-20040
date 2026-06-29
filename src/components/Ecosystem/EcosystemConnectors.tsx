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
}

export function EcosystemConnectors({
  centerX,
  centerY,
  nodes,
  pillars,
  selectedIndex,
  hoveredIndex,
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
      }}
    >
      {nodes.map((node, i) => {
        const pillar = pillars[i];
        const isHovered = hoveredIndex === i;
        const isActive = selectedIndex === i;
        const isHighlight = isHovered || isActive;

        // Draw from center to node, but stop at circle edges
        // hub radius ~140px on desktop, node radius ~66px
        const dx = node.x - centerX;
        const dy = node.y - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const nx = dx / dist;
        const ny = dy / dist;

        const hubEdge = 190; // radius of hub visual + gap (for 380px hub)
        const nodeEdge = 95; // radius of node + gap (for 180px node)

        const x1 = centerX + nx * hubEdge;
        const y1 = centerY + ny * hubEdge;
        const x2 = node.x - nx * nodeEdge;
        const y2 = node.y - ny * nodeEdge;

        return (
          <g key={pillar.id}>
            {/* Base faint normal line */}
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#94A3B8"
              strokeWidth={2}
              opacity={0.3}
              strokeDasharray="4 4"
            />

            {/* Active / Hovered glow line */}
            {isHighlight && (
              <motion.line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={pillar.accentColor}
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: [0.6, 1.0, 0.6],
                  strokeWidth: [3.5, 4.5, 3.5],
                }}
                transition={{
                  pathLength: { duration: 0.4, ease: "easeOut" },
                  opacity: { duration: 4, ease: "easeInOut", repeat: Infinity },
                  strokeWidth: { duration: 4, ease: "easeInOut", repeat: Infinity },
                }}
                style={{ filter: `drop-shadow(0 0 3px ${pillar.accentColor}50)` }}
              />
            )}

            {/* Traveling dot along spoke */}
            <motion.circle
              r={isHighlight ? 3.5 : 2.5}
              fill={pillar.accentColor}
              animate={{
                opacity: isHighlight ? 1 : 0.3,
              }}
              transition={{ duration: 0.3 }}
            >
              <animateMotion
                dur={`${4 + i * 0.4}s`}
                repeatCount="indefinite"
                begin={`${i * 0.4}s`}
                path={`M ${x1} ${y1} L ${x2} ${y2}`}
              />
            </motion.circle>
          </g>
        );
      })}
    </svg>
  );
}
