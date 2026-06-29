"use client";

import { useEffect, useRef, useCallback, useMemo } from "react";

// ─── Seeded Random Generator ─────────────────────────────────────────────────────
class SeededRandom {
  private seed: number;
  
  constructor(seed: string) {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      const char = seed.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    this.seed = Math.abs(hash) || 1;
  }
  
  next(): number {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }
  
  range(min: number, max: number): number {
    return min + this.next() * (max - min);
  }
}

// ─── Types ─────────────────────────────────────────────────────────────────────────
interface Node {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  baseRadius: number;
  connections: number[];
  phase: number;
  brightness: number;
  targetBrightness: number;
  color: string;
  accentColor: string;
  pulsePhase: number;
}

interface DataPacket {
  fromIndex: number;
  toIndex: number;
  progress: number;
  color: string;
  speed: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  activatedNodes: Set<number>;
}

// ─── Color Palette ────────────────────────────────────────────────────────────────
const PRIMARY_MAROON = "#6B0F2A";
const ACCENT_COLORS = [
  "#7C3AED", // Purple
  "#14B8A6", // Teal
  "#06B6D4", // Cyan
  "#60A5FA", // Light Blue
  "#F4C95D", // Soft Gold
];

// ─── Component ───────────────────────────────────────────────────────────────────
export function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const packetsRef = useRef<DataPacket[]>([]);
  const ripplesRef = useRef<Ripple[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const isHoveringRef = useRef(false);
  const observerRef = useRef<IntersectionObserver | undefined>(undefined);
  const isVisibleRef = useRef(true);
  const lastPacketTimeRef = useRef(0);

  // Generate deterministic constellation layout with 18-25 clusters
  const generateNodes = useCallback((width: number, height: number): Node[] => {
    const rng = new SeededRandom("sdn-prime-2040-constellation-v2");
    const nodes: Node[] = [];
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Create 18-25 geometric clusters distributed around the framework
    const numClusters = Math.floor(rng.range(18, 26));
    const maxRadius = Math.min(width, height) * 0.45;
    
    for (let c = 0; c < numClusters; c++) {
      // Distribute clusters in rings around center
      const ringIndex = c % 3;
      const ringRadius = maxRadius * (0.3 + ringIndex * 0.25);
      const clusterAngle = (c / numClusters) * Math.PI * 2 + rng.range(-0.2, 0.2);
      
      const clusterX = centerX + Math.cos(clusterAngle) * ringRadius * rng.range(0.7, 1.0);
      const clusterY = centerY + Math.sin(clusterAngle) * ringRadius * rng.range(0.7, 1.0);
      
      const nodesInCluster = Math.floor(rng.range(3, 9));
      
      for (let n = 0; n < nodesInCluster; n++) {
        const angle = rng.range(0, Math.PI * 2);
        const distance = rng.range(25, 70);
        const x = clusterX + Math.cos(angle) * distance;
        const y = clusterY + Math.sin(angle) * distance;
        
        const accentIndex = Math.floor(rng.range(0, ACCENT_COLORS.length));
        
        nodes.push({
          x,
          y,
          baseX: x,
          baseY: y,
          radius: rng.range(5, 8), // Temporarily larger for visibility
          baseRadius: rng.range(5, 8),
          connections: [],
          phase: rng.range(0, Math.PI * 2),
          brightness: 0,
          targetBrightness: 0,
          color: PRIMARY_MAROON,
          accentColor: ACCENT_COLORS[accentIndex],
          pulsePhase: rng.range(0, Math.PI * 2),
        });
      }
    }
    
    // Create connections within clusters and between nearby clusters
    const connectionDistance = 100;
    const crossClusterDistance = 150;
    
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < connectionDistance) {
          nodes[i].connections.push(j);
          nodes[j].connections.push(i);
        } else if (dist < crossClusterDistance && rng.next() < 0.15) {
          // Occasional cross-cluster connections for network feel
          nodes[i].connections.push(j);
          nodes[j].connections.push(i);
        }
      }
    }
    
    return nodes;
  }, []);

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    if (nodesRef.current.length === 0) {
      nodesRef.current = generateNodes(rect.width, rect.height);
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0].isIntersecting;
      },
      { threshold: 0.1 }
    );
    observerRef.current.observe(canvas);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [generateNodes]);

  // Mouse move handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    isHoveringRef.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    isHoveringRef.current = false;
    mouseRef.current = { x: -1000, y: -1000 };
  }, []);

  // Click handler - create ripple
  const handleClick = useCallback(() => {
    const newRipple: Ripple = {
      x: mouseRef.current.x,
      y: mouseRef.current.y,
      radius: 0,
      alpha: 1,
      activatedNodes: new Set(),
    };
    ripplesRef.current.push(newRipple);
    
    // Trigger data packets from nearby nodes
    const nodes = nodesRef.current;
    const packets: DataPacket[] = [];
    
    nodes.forEach((node, i) => {
      const dx = node.x - mouseRef.current.x;
      const dy = node.y - mouseRef.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 200 && node.connections.length > 0) {
        node.connections.forEach((connIndex) => {
          packets.push({
            fromIndex: i,
            toIndex: connIndex,
            progress: 0,
            color: node.accentColor,
            speed: rngRange(0.008, 0.015),
          });
        });
      }
    });
    
    packetsRef.current.push(...packets);
  }, []);

  // Helper for random range
  const rngRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const animate = (time: number) => {
      if (!isVisibleRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const nodes = nodesRef.current;
      const mouse = mouseRef.current;
      const interactionRadius = 220;

      // Update nodes
      nodes.forEach((node, i) => {
        // Idle floating motion (3-4 pixels, 4-6 second cycle for more visible motion)
        if (!prefersReducedMotion) {
          const floatSpeed = 0.001; // Faster for 4-6 second cycle
          const floatX = Math.sin(time * floatSpeed + node.phase) * 3.5;
          const floatY = Math.cos(time * floatSpeed + node.phase * 1.3) * 3.5;
          node.x = node.baseX + floatX;
          node.y = node.baseY + floatY;
        }

        // Mouse interaction
        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        let targetBrightness = 0;
        if (dist < interactionRadius) {
          targetBrightness = 1 - dist / interactionRadius;
        }
        
        // Smooth brightness transition (350ms)
        node.brightness += (targetBrightness - node.brightness) * 0.08;
        
        // Size increase on hover (20%)
        const sizeMultiplier = 1 + node.brightness * 0.2;
        node.radius = node.baseRadius * sizeMultiplier;
        
        // Ripple interaction
        ripplesRef.current.forEach(ripple => {
          const pdx = node.x - ripple.x;
          const pdy = node.y - ripple.y;
          const pdist = Math.sqrt(pdx * pdx + pdy * pdy);
          const pulseDiff = Math.abs(pdist - ripple.radius);
          
          if (pulseDiff < 40 && !ripple.activatedNodes.has(i)) {
            node.brightness = Math.max(node.brightness, ripple.alpha * 0.8);
            ripple.activatedNodes.add(i);
          }
        });
      });

      // Draw connections with gradient color transition
      nodes.forEach((node, i) => {
        node.connections.forEach((connIndex) => {
          if (connIndex <= i) return;
          
          const other = nodes[connIndex];
          const combinedBrightness = (node.brightness + other.brightness) / 2;
          
          // Color transition from maroon to accent
          let lineColor: string;
          if (combinedBrightness > 0.1) {
            // Use accent color based on which node is brighter
            const accentColor = node.brightness > other.brightness ? node.accentColor : other.accentColor;
            const r = parseInt(PRIMARY_MAROON.slice(1, 3), 16);
            const g = parseInt(PRIMARY_MAROON.slice(3, 5), 16);
            const b = parseInt(PRIMARY_MAROON.slice(5, 7), 16);
            
            const ar = parseInt(accentColor.slice(1, 3), 16);
            const ag = parseInt(accentColor.slice(3, 5), 16);
            const ab = parseInt(accentColor.slice(5, 7), 16);
            
            const nr = Math.round(r + (ar - r) * combinedBrightness);
            const ng = Math.round(g + (ag - g) * combinedBrightness);
            const nb = Math.round(b + (ab - b) * combinedBrightness);
            
            const alpha = 0.18 + combinedBrightness * 0.25;
            lineColor = `rgba(${nr}, ${ng}, ${nb}, ${alpha})`;
          } else {
            lineColor = `rgba(107, 15, 42, ${0.18 + combinedBrightness * 0.1})`;
          }
          
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(other.x, other.y);
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = 0.8 + combinedBrightness * 0.3;
          ctx.stroke();
        });
      });

      // Draw nodes with glow
      nodes.forEach((node) => {
        const alpha = 0.35 + node.brightness * 0.4;
        
        // Subtle glow
        if (node.brightness > 0.1) {
          const glowGradient = ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, node.radius * 3
          );
          const glowColor = node.accentColor;
          glowGradient.addColorStop(0, `${glowColor}${Math.floor(alpha * 0.3).toString(16).padStart(2, '0')}`);
          glowGradient.addColorStop(1, `${glowColor}00`);
          
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
          ctx.fillStyle = glowGradient;
          ctx.fill();
        }
        
        // Node color transition
        let nodeColor: string;
        if (node.brightness > 0.3) {
          nodeColor = node.accentColor;
        } else {
          nodeColor = PRIMARY_MAROON;
        }
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${nodeColor}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
      });

      // Knowledge flow packets on hover
      if (!prefersReducedMotion && isHoveringRef.current) {
        const now = time;
        if (now - lastPacketTimeRef.current > 300) { // Spawn packets every 300ms
          lastPacketTimeRef.current = now;
          
          // Spawn a few packets from random connected nodes near mouse
          const nearbyNodes = nodes.filter((node, i) => {
            const dx = node.x - mouse.x;
            const dy = node.y - mouse.y;
            return Math.sqrt(dx * dx + dy * dy) < interactionRadius && node.connections.length > 0;
          });
          
          if (nearbyNodes.length > 0) {
            const randomNode = nearbyNodes[Math.floor(Math.random() * nearbyNodes.length)];
            const nodeIndex = nodes.indexOf(randomNode);
            
            if (randomNode.connections.length > 0) {
              const randomConn = randomNode.connections[Math.floor(Math.random() * randomNode.connections.length)];
              packetsRef.current.push({
                fromIndex: nodeIndex,
                toIndex: randomConn,
                progress: 0,
                color: randomNode.accentColor,
                speed: rngRange(0.01, 0.02),
              });
            }
          }
        }
      }

      // Update and draw data packets
      if (!prefersReducedMotion) {
        packetsRef.current = packetsRef.current.filter((packet) => {
          packet.progress += packet.speed;
          
          if (packet.progress >= 1) return false;
          
          const fromNode = nodes[packet.fromIndex];
          const toNode = nodes[packet.toIndex];
          
          const x = fromNode.x + (toNode.x - fromNode.x) * packet.progress;
          const y = fromNode.y + (toNode.y - fromNode.y) * packet.progress;
          
          // Packet glow
          const packetGradient = ctx.createRadialGradient(x, y, 0, x, y, 6);
          packetGradient.addColorStop(0, packet.color + "80");
          packetGradient.addColorStop(1, packet.color + "00");
          
          ctx.beginPath();
          ctx.arc(x, y, 6, 0, Math.PI * 2);
          ctx.fillStyle = packetGradient;
          ctx.fill();
          
          // Packet core
          ctx.beginPath();
          ctx.arc(x, y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = packet.color;
          ctx.fill();
          
          return true;
        });
      }

      // Update and draw ripples
      if (!prefersReducedMotion) {
        ripplesRef.current = ripplesRef.current.filter((ripple) => {
          ripple.radius += 4;
          ripple.alpha -= 0.008;
          
          if (ripple.alpha <= 0) return false;
          
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(107, 15, 42, ${ripple.alpha * 0.4})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
          
          // Secondary ripple
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.radius * 0.7, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(124, 58, 237, ${ripple.alpha * 0.2})`;
          ctx.lineWidth = 1;
          ctx.stroke();
          
          return true;
        });
      }

      // Radial mask - fade only outer edges (80-90% visible)
      const gradient = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, Math.max(width, height) * 0.7
      );
      gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
      gradient.addColorStop(0.7, "rgba(255, 255, 255, 0)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0.85)");
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Event listeners
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("click", handleClick);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("click", handleClick);
    };
  }, [handleMouseMove, handleMouseLeave, handleClick]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 1, zIndex: 0 }}
    />
  );
}
