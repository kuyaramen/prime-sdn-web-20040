"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About us",
    href: "/about",
    children: [
      { label: "About PRIME SDN", href: "/about" },
      { label: "Vision & Mission", href: "/about#vision" },
      { label: "Our Framework", href: "/about#framework" },
      { label: "Policies & Governance", href: "/about#policies" },
      { label: "Leadership Team", href: "/about#organization" },
    ],
  },
  { label: "Activities", href: "/activities" },
  { label: "News & Blogs", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();


  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownVariants = prefersReduced
    ? {}
    : {
        initial: { opacity: 0, y: -4 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -4 },
      };

  return (
    <header 
      className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm transition-all duration-300"
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between" role="navigation" aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Prime SDN Home">
          <div className="w-11 h-11 rounded-full bg-maroon-900 flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 21c0 .5 4 .5 4 0v-2H9v2zM12 2C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" fill="white"/>
            </svg>
          </div>
          <span className="text-xl tracking-tight leading-none">
            <span className="font-display font-bold text-maroon-900">PRIME</span>{" "}
            <span className="font-display font-bold text-teal-600">SDN</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="relative" ref={dropdownRef}>
                <div className="flex items-center gap-1">
                  <Link
                    href={item.href}
                    className="text-[0.9375rem] font-medium text-gray-700 hover:text-maroon-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                  <button
                    onClick={() => setAboutOpen(!aboutOpen)}
                    onMouseEnter={() => setAboutOpen(true)}
                    className="text-gray-700 hover:text-maroon-900 transition-colors"
                    aria-expanded={aboutOpen}
                    aria-haspopup="true"
                    aria-label="About us menu"
                  >
                    <ChevronDown size={14} className={`transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>
                <AnimatePresence>
                  {aboutOpen && (
                    <motion.div
                      {...dropdownVariants}
                      transition={{ duration: 0.15 }}
                      className="nav-dropdown"
                      onMouseLeave={() => setAboutOpen(false)}
                      role="menu"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block"
                          role="menuitem"
                          onClick={() => setAboutOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-[0.9375rem] font-medium text-gray-700 hover:text-maroon-900 transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={prefersReduced ? {} : { height: 0, opacity: 0 }}
            animate={prefersReduced ? {} : { height: "auto", opacity: 1 }}
            exit={prefersReduced ? {} : { height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-gray-100 overflow-hidden bg-white"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between w-full py-3 text-sm font-medium text-gray-700"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setMobileAboutOpen(!mobileAboutOpen);
                        }}
                        className="text-gray-700"
                      >
                        <ChevronDown
                          size={14}
                          className={`transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </Link>
                    {mobileAboutOpen && (
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-2 text-sm text-gray-600 hover:text-maroon-900"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block py-3 text-sm font-medium text-gray-700 hover:text-maroon-900"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
