"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Search, Globe, ChevronDown } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { usePathname } from "next/navigation";
import { SearchOverlay } from "./SearchOverlay";

interface NavGroup {
  label: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  featuredLabel?: string;
  featuredTitle?: string;
  featuredLink?: string;
  links: { label: string; href: string }[];
}

interface NavItem {
  label: string;
  href: string;
  contextDescription: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  featuredLabel?: string;
  featuredTitle?: string;
  featuredLink?: string;
  groups?: NavGroup[];
}

const navItems: NavItem[] = [
  {
    label: "Discover Surigao",
    href: "/discover",
    contextDescription: "Experience the unique blend of island ecology, vibrant startup hubs, and prime investment opportunities.",
    featuredImage: "/images/ChatGPT Image Jul 12, 2026, 08_19_27 PM.png",
    featuredImageAlt: "Siargao Island",
    featuredLabel: "FEATURED DESTINATION",
    featuredTitle: "The Siargao Innovation Hub",
    featuredLink: "/hubs/siargao",
    groups: [
      {
        label: "Destinations",
        featuredImage: "/images/ChatGPT Image Jul 12, 2026, 08_19_27 PM.png",
        featuredLabel: "DESTINATIONS",
        featuredTitle: "Explore the Islands",
        featuredLink: "/destinations",
        links: [
          { label: "Tourism", href: "/tourism" },
          { label: "Destinations", href: "/destinations" },
          { label: "Nature", href: "/nature" },
        ]
      },
      {
        label: "Ecology",
        featuredImage: "/images/ChatGPT Image Jul 12, 2026, 08_19_27 PM.png",
        featuredLabel: "ECOLOGY",
        featuredTitle: "Sustainable Surigao",
        featuredLink: "/ecology",
        links: [
          { label: "Islands", href: "/islands" },
          { label: "Culture", href: "/culture" },
        ]
      },
      {
        label: "People",
        links: [
          { label: "Heritage", href: "/heritage" },
          { label: "Communities", href: "/communities" },
        ]
      }
    ]
  },
  {
    label: "The Movement",
    href: "/about",
    contextDescription: "Building the future of Surigao del Norte through collaboration, innovation and sustainable development.",
    featuredImage: "/images/ChatGPT Image Jul 12, 2026, 08_19_27 PM.png",
    featuredImageAlt: "Vision 2040",
    featuredLabel: "MASTERPLAN",
    featuredTitle: "Surigao 2040 Vision",
    featuredLink: "/about#vision",
    groups: [
      {
        label: "About",
        featuredImage: "/images/ChatGPT Image Jul 12, 2026, 08_19_27 PM.png",
        featuredLabel: "ABOUT",
        featuredTitle: "The PRIME Initiative",
        featuredLink: "/about#prime",
        links: [
          { label: "Vision", href: "/about#vision" },
          { label: "About PRIME", href: "/about#prime" },
        ]
      },
      {
        label: "Framework",
        featuredImage: "/images/ChatGPT Image Jul 12, 2026, 08_19_27 PM.png",
        featuredLabel: "ROADMAP",
        featuredTitle: "Strategic Pillars",
        featuredLink: "/about#pillars",
        links: [
          { label: "Roadmap", href: "/about#roadmap" },
          { label: "Framework", href: "/about#framework" },
          { label: "Pillars", href: "/about#pillars" },
        ]
      },
      {
        label: "People",
        links: [
          { label: "Leadership", href: "/about#organization" },
          { label: "Partners", href: "/partners" },
        ]
      }
    ]
  },
  {
    label: "Opportunities",
    href: "/opportunities",
    contextDescription: "Explore the tangible actions, core programs, and milestone events transforming the ecosystem.",
    featuredImage: "/images/ChatGPT Image Jul 12, 2026, 08_19_27 PM.png",
    featuredImageAlt: "Opportunities",
    featuredLabel: "INVESTMENT SPOTLIGHT",
    featuredTitle: "Agri-Tech Innovation",
    featuredLink: "/innovation/agri-tech",
    groups: [
      {
        label: "Business",
        featuredImage: "/images/ChatGPT Image Jul 12, 2026, 08_19_27 PM.png",
        featuredLabel: "STARTUPS",
        featuredTitle: "Funding the Future",
        featuredLink: "/startups",
        links: [
          { label: "Investment", href: "/investment" },
          { label: "Startups", href: "/startups" },
        ]
      },
      {
        label: "Innovation",
        featuredImage: "/images/ChatGPT Image Jul 12, 2026, 08_19_27 PM.png",
        featuredLabel: "RESEARCH",
        featuredTitle: "Advanced Research Labs",
        featuredLink: "/research",
        links: [
          { label: "Research", href: "/research" },
          { label: "Education", href: "/education" },
        ]
      },
      {
        label: "Programs",
        links: [
          { label: "Incubation", href: "/programs" },
          { label: "Acceleration", href: "/programs#acceleration" },
        ]
      }
    ]
  },
  {
    label: "Stories",
    href: "/news",
    contextDescription: "Stay informed with the latest news, feature stories, and data reports from the network.",
    featuredImage: "/images/ChatGPT Image Jul 12, 2026, 08_19_27 PM.png",
    featuredImageAlt: "Stories",
    featuredLabel: "LATEST STORY",
    featuredTitle: "The New Wave of Founders",
    featuredLink: "/articles/new-wave",
    groups: [
      {
        label: "News",
        featuredImage: "/images/ChatGPT Image Jul 12, 2026, 08_19_27 PM.png",
        featuredLabel: "PRESS",
        featuredTitle: "Global Recognition",
        featuredLink: "/press",
        links: [
          { label: "Latest News", href: "/news" },
          { label: "Press Releases", href: "/press" },
        ]
      },
      {
        label: "Features",
        featuredImage: "/images/ChatGPT Image Jul 12, 2026, 08_19_27 PM.png",
        featuredLabel: "SUCCESS STORIES",
        featuredTitle: "Building from the Islands",
        featuredLink: "/success-stories",
        links: [
          { label: "Articles", href: "/articles" },
          { label: "Success Stories", href: "/success-stories" },
        ]
      },
      {
        label: "Media",
        links: [
          { label: "Events", href: "/events" },
          { label: "Galleries", href: "/media" },
        ]
      }
    ]
  },
];

export interface HeaderProps {
  heroMode?: boolean;
}

export function Header({ heroMode = false }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeFeaturedGroup, setActiveFeaturedGroup] = useState<string | null>(null);
  const [mobileAboutOpen, setMobileAboutOpen] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const prefersReduced = useReducedMotion();
  const pathname = usePathname();

  // Scroll detection logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Solid state threshold - 50px for hero mode
      setIsScrolled(currentScrollY > 50);
      
      // Visibility threshold & directional logic
      if (currentScrollY <= 120) {
        // Always show the navigation when near the top of the page
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && !activeDropdown && !mobileOpen && !searchOpen) {
        // Scrolling down past 120px and no menus are actively open: hide navigation
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up: reveal navigation
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    // Run once on mount to capture initial position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeDropdown, mobileOpen, searchOpen]);

  // Close dropdowns on route change
  useEffect(() => {
    setActiveDropdown(null);
    setActiveFeaturedGroup(null);
    setMobileOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  // Reset active featured group when dropdown changes
  useEffect(() => {
    setActiveFeaturedGroup(null);
  }, [activeDropdown]);

  // Handle clicking outside to close
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownVariants = prefersReduced
    ? {}
    : {
        initial: { opacity: 0, y: -6 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -6 },
      };

  // Determine styling based on scroll and interaction
  const isSolid = isScrolled || activeDropdown !== null || mobileOpen || searchOpen || !heroMode;
  
  const transitionSpeed = prefersReduced ? "duration-0" : "duration-[300ms]";
  
  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all ${transitionSpeed} ease ${
    isSolid 
      ? "bg-white border-b border-black/[0.06] shadow-[0_2px_18px_rgba(0,0,0,0.04)]" 
      : "bg-transparent border-b border-transparent shadow-none"
  } ${isVisible ? "translate-y-0" : "-translate-y-full"}`;

  // Colors for hero vs scrolled state
  const linkColor = isSolid 
    ? "text-[#111111]" 
    : "text-white";
  const linkHover = isSolid
    ? "hover:opacity-72"
    : "hover:opacity-72";
  const iconColor = isSolid 
    ? "text-[#111111]" 
    : "text-white";
  
  // Brand text colors
  const brandMainColor = isSolid ? "#111111" : "white";
  const brandSubtitleColor = isSolid ? "#7A7A7A" : "rgba(255,255,255,0.78)";
  
  // Active indicator color - white in hero mode, primary blue in solid state
  const activeIndicatorColor = isSolid ? "#2457D6" : "white";

  return (
    <>
      <header className={headerClasses} role="banner" ref={headerRef} onMouseLeave={() => setActiveDropdown(null)}>
        {/* Scrim overlay when mega menu is open */}
        <AnimatePresence>
          {activeDropdown && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReduced ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 top-[80px] bg-black/[0.06] pointer-events-none -z-10"
            />
          )}
        </AnimatePresence>

        {/* Localized gradient scrim for hero mode */}
        {heroMode && !isSolid && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent pointer-events-none -z-10" />
        )}

        <nav
          className={`max-w-[1600px] mx-auto flex items-center justify-between transition-all ${transitionSpeed} ${
            isSolid ? "h-[78px]" : "h-[88px]"
          } px-6`}
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Brand Lockup */}
          <div className="flex items-center shrink-0">
            {/* Logo Icon */}
            <Link 
              href="/" 
              className="shrink-0" 
              aria-label="Prime SDN Home"
              onClick={() => setActiveDropdown(null)}
            >
              <Image
                src="/00dbb79a-7e8b-4b4e-823c-3ce8f873f46f-removebg-preview.png"
                alt="PRIME SDN Logo"
                width={60}
                height={60}
                className="object-contain"
                style={{ objectFit: "contain" }}
              />
            </Link>
            
            {/* Wordmark */}
            <Link
              href="/"
              className="flex flex-col leading-none"
              style={{ marginTop: "-2px" }}
              aria-label="Prime SDN Home"
              onClick={() => setActiveDropdown(null)}
            >
              <div className="flex items-baseline" style={{ marginBottom: "4px" }}>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "18px",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: isSolid ? "#163B8F" : "#F8F8F8",
                    lineHeight: 1,
                  }}
                >
                  PRIME
                </span>
                <span
                  className="bg-gradient-to-r from-[#E8C547] to-[#D4A72C] bg-clip-text text-transparent"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "18px",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    marginLeft: "4px",
                    lineHeight: 1,
                  }}
                >
                  SDN
                </span>
              </div>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "8.1px",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  color: isSolid ? "#6B7280" : "rgba(255, 255, 255, 0.82)",
                  lineHeight: 1,
                  textTransform: "uppercase",
                }}
              >
                SURIGAO DEL NORTE
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex flex-1 items-center h-full">
            <div className="flex items-center gap-16 ml-[120px] h-full">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.groups && item.groups.some(group => group.links.some(child => pathname === child.href)));
                
                return item.groups ? (
                  <div key={item.label} className="h-full flex items-center">
                    <button
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      className={`relative h-full flex items-center px-3 transition-all duration-[250ms] ease group ${linkColor} ${linkHover}`}
                      style={{ 
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        fontWeight: 500,
                        letterSpacing: "0",
                        lineHeight: 1,
                        WebkitFontSmoothing: "antialiased",
                        MozOsxFontSmoothing: "grayscale",
                      }}
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      {/* Active indicator — persistent thin line */}
                      <span className={`absolute bottom-[30px] left-3 right-3 h-[2px] transition-all duration-[250ms] ease ${
                        isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                      }`} style={{ transformOrigin: "center", backgroundColor: activeIndicatorColor }} />
                    </button>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`relative h-full flex items-center px-3 transition-all duration-[250ms] ease group ${linkColor} ${linkHover}`}
                    style={{ 
                      fontFamily: "Inter, sans-serif",
                      fontSize: "16px",
                      fontWeight: 500,
                      letterSpacing: "0",
                      lineHeight: 1,
                      WebkitFontSmoothing: "antialiased",
                      MozOsxFontSmoothing: "grayscale",
                    }}
                  >
                    {item.label}
                    <span className={`absolute bottom-[30px] left-3 right-3 h-[2px] transition-all duration-[250ms] ease ${
                      isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                    }`} style={{ transformOrigin: "center", backgroundColor: activeIndicatorColor }} />
                  </Link>
                )
              })}
            </div>

            {/* Right Side Actions */}
            <div className={`flex items-center ml-auto gap-8 transition-colors ${transitionSpeed}`}>
              <button 
                className={`flex items-center gap-2.5 text-[16px] font-medium transition-all duration-[250ms] ease ${linkColor} ${linkHover}`}
                aria-label="Change language"
              >
                <Globe size={20} strokeWidth={1.5} className="shrink-0" />
                <span>EN</span>
              </button>
              <button 
                onClick={() => setSearchOpen(true)}
                className={`w-11 h-11 flex items-center justify-center rounded-full transition-all duration-[250ms] ease ${iconColor} ${linkHover}`}
                aria-label="Open search"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Mobile Toggle & Search */}
          <div className="flex items-center gap-3 lg:hidden">
            <button 
              onClick={() => setSearchOpen(true)}
              className={`p-2 transition-colors duration-500 ${iconColor}`}
              aria-label="Open search"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button
              className="p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} strokeWidth={1.5} className="text-[#1C2024]" /> : <Menu size={24} strokeWidth={1.5} className={iconColor} />}
            </button>
          </div>
        </nav>

        {/* Mega Menus (Desktop) */}
        <AnimatePresence>
          {activeDropdown && navItems.find(i => i.label === activeDropdown)?.groups && (
            <motion.div
              {...dropdownVariants}
              transition={{ duration: prefersReduced ? 0 : 0.3, ease: "easeOut" }}
              className="absolute top-full left-0 w-full bg-white border-b border-black/[0.04] overflow-hidden hidden lg:block"
            >
              <div className="max-w-[1400px] mx-auto px-16 pt-[16px] pb-[32px]">
                {(() => {
                  const item = navItems.find(i => i.label === activeDropdown);
                  if (!item) return null;
                  
                  // Resolve dynamic featured story based on hover state
                  let currentFeaturedImage = item.featuredImage;
                  let currentFeaturedLabel = item.featuredLabel;
                  let currentFeaturedTitle = item.featuredTitle;
                  let currentFeaturedLink = item.featuredLink;
                  
                  if (activeFeaturedGroup) {
                    const groupData = item.groups?.find(g => g.label === activeFeaturedGroup);
                    if (groupData?.featuredImage) {
                      currentFeaturedImage = groupData.featuredImage;
                      currentFeaturedLabel = groupData.featuredLabel;
                      currentFeaturedTitle = groupData.featuredTitle;
                      currentFeaturedLink = groupData.featuredLink;
                    }
                  }
                  
                  return (
                    <div className="flex flex-col">
                      {/* Context Area */}
                      <div className="mb-[16px]">
                        <p className="font-[var(--font-body)] text-[16px] text-[#5A6578] max-w-[480px] font-normal leading-[1.5]">
                          {item.contextDescription}
                        </p>
                      </div>

                      {/* Anchor Divider */}
                      <div className="w-full h-[1px] bg-black/[0.06] mb-[24px]" />

                      {/* Editorial Grid: 3 nav columns + featured story card */}
                      <div className="grid grid-cols-[1fr_1fr_1fr_320px] gap-x-[64px]">
                        {/* Navigation Columns */}
                        {item.groups?.map((group, groupIdx) => (
                          <div 
                            key={groupIdx} 
                            className="flex flex-col"
                            onMouseEnter={() => setActiveFeaturedGroup(group.label)}
                          >
                            <h4 
                              className="text-[11px] uppercase tracking-[0.16em] text-[#999999] font-semibold mb-4"
                              style={{ fontFamily: "var(--font-display)" }}
                            >
                              {group.label}
                            </h4>
                            <ul className="space-y-[12px]">
                              {group.links.map((link, linkIdx) => (
                                <li key={linkIdx}>
                                  <Link
                                    href={link.href}
                                    className="group/link inline-flex items-center transition-colors duration-300"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <span className="relative font-[var(--font-body)] text-[17px] font-medium text-[#111111] leading-[1.3] transition-colors duration-300 group-hover/link:text-black">
                                      {link.label}
                                      <span className="absolute -bottom-[2px] left-0 w-full h-[1px] bg-[#111111] origin-left scale-x-0 transition-transform duration-300 group-hover/link:scale-x-100" />
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}

                        {/* Featured Editorial Story Card */}
                        {currentFeaturedImage && (
                          <div className="flex flex-col w-[320px]">
                            <Link href={currentFeaturedLink || item.href} className="group/card flex flex-col" onClick={() => setActiveDropdown(null)}>
                              <div className="relative w-full h-[175px] mb-4 overflow-hidden">
                                <Image
                                  src={currentFeaturedImage}
                                  alt={currentFeaturedTitle || item.label}
                                  fill
                                  className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-[1.02]"
                                />
                              </div>
                              <span className="block text-[11px] uppercase tracking-[0.16em] text-[#999999] font-semibold mb-2">
                                {currentFeaturedLabel}
                              </span>
                              <h3 className="font-[var(--font-display)] text-[20px] font-semibold text-[#111111] leading-[1.25] mb-2 transition-colors duration-300 group-hover/card:text-black">
                                {currentFeaturedTitle}
                              </h3>
                              <span className="text-[13px] font-medium text-[#111111] mt-2 inline-flex items-center w-fit transition-transform duration-300 group-hover/card:translate-x-0.5">
                                Read Story
                                <ArrowRight size={13} strokeWidth={2} className="ml-1 opacity-70" />
                              </span>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })()}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Nav (Fullscreen Editorial) */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={prefersReduced ? {} : { height: 0, opacity: 0 }}
              animate={prefersReduced ? {} : { height: "100vh", opacity: 1 }}
              exit={prefersReduced ? {} : { height: 0, opacity: 0 }}
              transition={{ duration: prefersReduced ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-y-auto bg-white absolute top-full left-0 right-0 pb-32"
              style={{ borderTop: "1px solid rgba(0,0,0,0.04)" }}
            >
              <div className="px-8 py-6 space-y-0">
                {navItems.map((item) =>
                  item.groups ? (
                    <div key={item.label} style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
                      <button
                        className="flex items-center justify-between w-full py-5"
                        style={{ 
                          fontFamily: "var(--font-display)",
                          fontSize: "1.25rem",
                          fontWeight: 500,
                          color: "#1C2024",
                          letterSpacing: "-0.005em",
                        }}
                        onClick={() => setMobileAboutOpen(mobileAboutOpen === item.label ? null : item.label)}
                      >
                        {item.label}
                        <ChevronDown
                          size={18}
                          strokeWidth={1.5}
                          className={`transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] text-[#1C2024]/30 ${mobileAboutOpen === item.label ? "rotate-180 !text-[#1E4FBF]" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileAboutOpen === item.label && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: prefersReduced ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pl-5 pb-6 space-y-4 pt-1 border-l border-[#1E4FBF]/10 ml-1">
                              {item.groups.flatMap(g => g.links).map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="block transition-colors duration-500 hover:text-[#1E4FBF]"
                                  style={{
                                    fontFamily: "var(--font-body)",
                                    fontSize: "0.9375rem",
                                    fontWeight: 400,
                                    color: "#4B5563",
                                    letterSpacing: "0.005em",
                                  }}
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block py-5 transition-colors duration-500 hover:text-[#1E4FBF]"
                      style={{ 
                        fontFamily: "var(--font-display)",
                        fontSize: "1.25rem",
                        fontWeight: 500,
                        color: "#1C2024",
                        letterSpacing: "-0.005em",
                        borderBottom: "1px solid rgba(0,0,0,0.04)",
                      }}
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
      
      {/* Search Overlay */}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
