"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Premium cubic-bezier easing ─────────────────────────────────────────────
const EASE_PREMIUM = "power3.out";

export function RibbonTransition() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const goldBarRef = useRef<HTMLDivElement>(null);
  const blueBarRef = useRef<HTMLDivElement>(null);
  const mergedBarRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const sweepRef = useRef<HTMLDivElement>(null);
  const [hasMerged, setHasMerged] = useState(false);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const buildTimeline = useCallback(() => {
    if (
      !sectionRef.current ||
      !goldBarRef.current ||
      !blueBarRef.current ||
      !mergedBarRef.current ||
      !pulseRef.current ||
      !flashRef.current ||
      !sweepRef.current
    )
      return;

    // Kill previous timeline if any
    if (tlRef.current) {
      tlRef.current.kill();
    }

    // Reset all elements
    gsap.set(goldBarRef.current, { xPercent: -105, opacity: 1 });
    gsap.set(blueBarRef.current, { xPercent: 105, opacity: 1 });
    gsap.set(mergedBarRef.current, { opacity: 0, scaleX: 0.98 });
    gsap.set(pulseRef.current, { scale: 0, opacity: 0 });
    gsap.set(flashRef.current, { opacity: 0 });
    gsap.set(sweepRef.current, { xPercent: -10, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        end: "bottom 40%",
        scrub: 0.8,
        toggleActions: "play reverse play reverse",
        onLeaveBack: () => setHasMerged(false),
        onLeave: () => setHasMerged(false),
      },
    });

    // ── Phase 1: Slide bars toward center (0% → 60% of scroll) ────────────
    tl.to(
      goldBarRef.current,
      {
        xPercent: 0,
        duration: 0.6,
        ease: "power2.inOut",
      },
      0
    );

    tl.to(
      blueBarRef.current,
      {
        xPercent: 0,
        duration: 0.6,
        ease: "power2.inOut",
      },
      0
    );

    // ── Phase 2: Collision — flash + pulse (at 60%) ───────────────────────
    tl.to(
      flashRef.current,
      {
        opacity: 1,
        duration: 0.04,
        ease: "power4.in",
      },
      0.58
    );

    tl.to(
      flashRef.current,
      {
        opacity: 0,
        duration: 0.06,
        ease: "power2.out",
      },
      0.62
    );

    tl.to(
      pulseRef.current,
      {
        scale: 1,
        opacity: 0.7,
        duration: 0.08,
        ease: "power2.out",
      },
      0.58
    );

    tl.to(
      pulseRef.current,
      {
        scale: 2.8,
        opacity: 0,
        duration: 0.12,
        ease: EASE_PREMIUM,
      },
      0.66
    );

    // ── Phase 3: Hide individual bars, reveal merged gradient (at 65%) ────
    tl.to(
      goldBarRef.current,
      {
        opacity: 0,
        duration: 0.05,
        ease: "none",
      },
      0.63
    );

    tl.to(
      blueBarRef.current,
      {
        opacity: 0,
        duration: 0.05,
        ease: "none",
      },
      0.63
    );

    tl.to(
      mergedBarRef.current,
      {
        opacity: 1,
        scaleX: 1,
        duration: 0.1,
        ease: "power2.out",
        onComplete: () => setHasMerged(true),
      },
      0.64
    );

    // ── Phase 4: Premium light sweep across merged bar (75% → 95%) ────────
    tl.to(
      sweepRef.current,
      {
        opacity: 1,
        duration: 0.04,
        ease: "power2.in",
      },
      0.76
    );

    tl.to(
      sweepRef.current,
      {
        xPercent: 110,
        duration: 0.2,
        ease: "power1.inOut",
      },
      0.76
    );

    tl.to(
      sweepRef.current,
      {
        opacity: 0,
        duration: 0.04,
        ease: "power2.out",
      },
      0.94
    );

    tlRef.current = tl;
  }, []);

  useEffect(() => {
    // Small delay to ensure DOM is fully painted
    const rafId = requestAnimationFrame(() => {
      buildTimeline();
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (tlRef.current) {
        tlRef.current.kill();
      }
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === sectionRef.current) {
          st.kill();
        }
      });
    };
  }, [buildTimeline]);

  return (
    <div
      ref={sectionRef}
      className="relative w-full bg-white overflow-hidden"
      style={{ height: 100 }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative w-full h-[8px]"
          style={{ maxWidth: "calc(100% - 48px)" }}
        >
          {/* ── Left Gold Bar ── */}
          <div
            ref={goldBarRef}
            className="absolute top-0 left-0 h-full will-change-transform"
            style={{
              width: "50%",
              borderRadius: "999px 0 0 999px",
              background:
                "linear-gradient(90deg, #B8962F 0%, #D4AF37 60%, #E2C05C 100%)",
              boxShadow:
                "inset 0 1px 1px rgba(255,255,255,0.45), inset 0 -1px 1px rgba(0,0,0,0.08), 0 1px 6px rgba(212,175,55,0.25)",
            }}
          >
            {/* Metallic highlight */}
            <div
              className="absolute inset-x-0 top-0 rounded-full"
              style={{
                height: "40%",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%)",
                borderRadius: "inherit",
              }}
            />
          </div>

          {/* ── Right Blue Bar ── */}
          <div
            ref={blueBarRef}
            className="absolute top-0 right-0 h-full will-change-transform"
            style={{
              width: "50%",
              borderRadius: "0 999px 999px 0",
              background:
                "linear-gradient(270deg, #1D4ED8 0%, #2563EB 60%, #3B82F6 100%)",
              boxShadow:
                "inset 0 1px 1px rgba(255,255,255,0.3), inset 0 -1px 1px rgba(0,0,0,0.1), 0 1px 6px rgba(37,99,235,0.25)",
            }}
          >
            {/* Metallic highlight */}
            <div
              className="absolute inset-x-0 top-0 rounded-full"
              style={{
                height: "40%",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 100%)",
                borderRadius: "inherit",
              }}
            />
          </div>

          {/* ── Merged Gradient Bar ── */}
          <div
            ref={mergedBarRef}
            className="absolute top-0 left-0 w-full h-full will-change-transform"
            style={{
              borderRadius: 999,
              background:
                "linear-gradient(90deg, #B8962F 0%, #D4AF37 25%, #F5F1E6 50%, #2563EB 75%, #1D4ED8 100%)",
              boxShadow:
                "inset 0 1px 1px rgba(255,255,255,0.4), inset 0 -1px 1px rgba(0,0,0,0.06), 0 1px 8px rgba(0,0,0,0.08)",
              opacity: 0,
            }}
          >
            {/* Metallic top highlight */}
            <div
              className="absolute inset-x-0 top-0 h-[40%] rounded-full"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 100%)",
              }}
            />
          </div>

          {/* ── Light Sweep ── */}
          <div
            ref={sweepRef}
            className="absolute top-[-4px] h-[16px] will-change-transform pointer-events-none"
            style={{
              width: "15%",
              left: 0,
              borderRadius: 999,
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.0) 15%, rgba(255,255,255,0.55) 45%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.55) 55%, rgba(255,255,255,0.0) 85%, transparent 100%)",
              opacity: 0,
              filter: "blur(1px)",
            }}
          />

          {/* ── Collision Pulse ── */}
          <div
            ref={pulseRef}
            className="absolute pointer-events-none"
            style={{
              width: 60,
              height: 60,
              left: "50%",
              top: "50%",
              marginLeft: -30,
              marginTop: -30,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(230,210,160,0.3) 40%, rgba(37,99,235,0.15) 70%, transparent 100%)",
              transform: "scale(0)",
              opacity: 0,
            }}
          />

          {/* ── Flash ── */}
          <div
            ref={flashRef}
            className="absolute pointer-events-none"
            style={{
              width: 24,
              height: 24,
              left: "50%",
              top: "50%",
              marginLeft: -12,
              marginTop: -12,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 80%)",
              filter: "blur(3px)",
              opacity: 0,
            }}
          />
        </div>
      </div>
    </div>
  );
}
