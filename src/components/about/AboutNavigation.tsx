"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface AboutNavigationProps {
  sections: { id: string; label: string }[];
}

export function AboutNavigation({ sections }: AboutNavigationProps) {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    const handleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleVisibility);
    handleScroll();
    handleVisibility();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleVisibility);
    };
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-[#500a31]/10 px-2 py-2"
    >
      <div className="flex items-center gap-1 overflow-x-auto max-w-[90vw]">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
              activeSection === section.id
                ? "bg-[#500a31] text-white"
                : "text-[#500a31] hover:bg-[#500a31]/10"
            }`}
            style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
          >
            {section.label}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
