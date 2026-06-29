"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    let isScrolling = false;
    let scrollTarget = window.pageYOffset || document.documentElement.scrollTop;
    let scrollCurrent = scrollTarget;
    let scrollVelocity = 0;
    let scrollEase = 0.025;
    let friction = 0.97;
    let rafId: number | null = null;
    let lastInteractionTime = Date.now();

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      lastInteractionTime = Date.now();
      scrollVelocity += e.deltaY * 0.15;
      scrollTarget += e.deltaY * 0.15;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      scrollTarget = Math.max(0, Math.min(scrollTarget, maxScroll));
      if (!isScrolling) {
        isScrolling = true;
        if (rafId === null) {
          rafId = requestAnimationFrame(smoothScroll);
        }
      }
    };

    const smoothScroll = () => {
      const diff = scrollTarget - scrollCurrent;
      const timeSinceInteraction = Date.now() - lastInteractionTime;

      // Stop scrolling if no interaction for 100ms and velocity is very low
      if (timeSinceInteraction > 100 && Math.abs(scrollVelocity) < 0.1 && Math.abs(diff) < 0.5) {
        isScrolling = false;
        scrollVelocity = 0;
        scrollTarget = scrollCurrent;
        rafId = null;
        return;
      }

      // Apply velocity and friction for momentum
      scrollVelocity *= friction;
      scrollCurrent += scrollVelocity + (diff * scrollEase);

      // Clamp current scroll to valid range
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      scrollCurrent = Math.max(0, Math.min(scrollCurrent, maxScroll));

      if (Math.abs(diff) > 0.01 || Math.abs(scrollVelocity) > 0.01) {
        window.scrollTo(0, scrollCurrent);
        rafId = requestAnimationFrame(smoothScroll);
      } else {
        isScrolling = false;
        scrollVelocity = 0;
        scrollTarget = scrollCurrent;
        rafId = null;
      }
    };

    // Sync scroll position periodically to prevent drift
    const syncScroll = () => {
      const actualScroll = window.pageYOffset || document.documentElement.scrollTop;
      if (!isScrolling && Math.abs(actualScroll - scrollCurrent) > 1) {
        scrollCurrent = actualScroll;
        scrollTarget = actualScroll;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    const syncInterval = setInterval(syncScroll, 100);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      clearInterval(syncInterval);
    };
  }, []);

  return null;
}
