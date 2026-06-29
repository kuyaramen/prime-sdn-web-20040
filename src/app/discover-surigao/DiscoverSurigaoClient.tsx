"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, AnimatedHero, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

export default function DiscoverSurigaoClient() {
  const [mounted, setMounted] = useState(false);
  const [activeMunicipality, setActiveMunicipality] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particlePositions = mounted ? [...Array(20)].map((_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 4,
  })) : [];

  const municipalities = [
    {
      id: "surigao-city",
      name: "Surigao City",
      description: "The capital city and gateway to the province, serving as the commercial and educational hub.",
      population: "171,000",
      industries: ["Trade & Commerce", "Education", "Tourism", "Port Services"],
      image: "/images/hero_aerial_surigao_new.jpg",
      innovation: ["Digital Port Systems", "Smart City Initiatives", "Business Incubation"],
      investment: ["Commercial Real Estate", "Logistics", "Tourism Infrastructure"]
    },
    {
      id: "dapa",
      name: "Dapa",
      description: "The gateway to Siargao Island, known as the surfing capital of the Philippines.",
      population: "28,000",
      industries: ["Tourism", "Agriculture", "Fisheries", "Hospitality"],
      image: "/images/media__1781879352600.jpg",
      innovation: ["Sustainable Tourism Tech", "Marine Conservation Systems", "Digital Booking Platforms"],
      investment: ["Resort Development", "Eco-Tourism", "Water Sports Facilities"]
    },
    {
      id: "general-luna",
      name: "General Luna",
      description: "Home to world-famous Cloud 9 surf break and pristine beaches.",
      population: "18,000",
      industries: ["Tourism", "Hospitality", "Water Sports", "Food & Beverage"],
      image: "/images/media__1781879354228.png",
      innovation: ["Surf Forecasting Systems", "Sustainable Resort Management", "Digital Tourism"],
      investment: ["Luxury Resorts", "Surf Schools", "Beachfront Properties"]
    },
    {
      id: "claver",
      name: "Claver",
      description: "Mining and industrial hub with rich mineral deposits.",
      population: "35,000",
      industries: ["Mining", "Agriculture", "Fisheries", "Forestry"],
      image: "/images/media__1781879356225.png",
      innovation: ["Sustainable Mining Tech", "Environmental Monitoring", "Agri-tech Solutions"],
      investment: ["Mining Operations", "Processing Plants", "Reforestation Projects"]
    },
    {
      id: "placer",
      name: "Placer",
      description: "Agricultural municipality known for rice and coconut production.",
      population: "25,000",
      industries: ["Agriculture", "Coconut Processing", "Livestock", "Fisheries"],
      image: "/images/media__1781911485188.png",
      innovation: ["Smart Farming", "Coconut Processing Tech", "Agricultural IoT"],
      investment: ["Agri-processing", "Farm Mechanization", "Organic Farming"]
    },
    {
      id: "bacuag",
      name: "Bacuag",
      description: "Coastal municipality with thriving fishing and tourism industries.",
      population: "22,000",
      industries: ["Fisheries", "Tourism", "Agriculture", "Small-scale Mining"],
      image: "/images/hero_aerial_surigao_new.jpg",
      innovation: ["Fisheries Management Systems", "Community-based Tourism", "Marine Tech"],
      investment: ["Fish Processing", "Eco-Resorts", "Cold Chain Facilities"]
    },
    {
      id: "gigaquit",
      name: "Gigaquit",
      description: "Historical town with rich cultural heritage and agricultural lands.",
      population: "32,000",
      industries: ["Agriculture", "Fisheries", "Tourism", "Handicrafts"],
      image: "/images/media__1781879352600.jpg",
      innovation: ["Heritage Preservation Tech", "Agri-processing", "Craft Digital Marketing"],
      investment: ["Cultural Tourism", "Agri-enterprises", "Handicraft Centers"]
    },
    {
      id: "mainit",
      name: "Mainit",
      description: "Known for hot springs and geothermal energy potential.",
      population: "28,000",
      industries: ["Geothermal Energy", "Agriculture", "Tourism", "Forestry"],
      image: "/images/media__1781879354228.png",
      innovation: ["Geothermal Tech", "Renewable Energy Systems", "Spa & Wellness Tech"],
      investment: ["Geothermal Plants", "Spa Resorts", "Green Energy Projects"]
    },
    {
      id: "malimono",
      name: "Malimono",
      description: "Mountainous municipality with rich biodiversity and eco-tourism potential.",
      population: "18,000",
      industries: ["Eco-Tourism", "Agriculture", "Forestry", "Mining"],
      image: "/images/media__1879356225.png",
      innovation: ["Conservation Tech", "Sustainable Forestry", "Eco-Tourism Platforms"],
      investment: ["Eco-Resorts", "Conservation Projects", "Sustainable Agriculture"]
    },
    {
      id: "sison",
      name: "Sison",
      description: "Coastal town with fishing communities and emerging tourism.",
      population: "15,000",
      industries: ["Fisheries", "Agriculture", "Tourism", "Small-scale Industry"],
      image: "/images/media__1781911485188.png",
      innovation: ["Community Fisheries Tech", "Agri-support Systems", "Tourism Digitalization"],
      investment: ["Fish Processing", "Community Tourism", "Agri-enterprises"]
    },
    {
      id: "tagana-an",
      name: "Tagana-an",
      description: "Mining municipality with nickel deposits and agricultural lands.",
      population: "16,000",
      industries: ["Mining", "Agriculture", "Forestry", "Fisheries"],
      image: "/images/hero_aerial_surigao_new.jpg",
      innovation: ["Responsible Mining Tech", "Rehabilitation Systems", "Agri-tech"],
      investment: ["Mining Operations", "Rehabilitation Projects", "Sustainable Agriculture"]
    },
    {
      id: "tubod",
      name: "Tubod",
      description: "Emerging municipality with agricultural and tourism potential.",
      population: "14,000",
      industries: ["Agriculture", "Tourism", "Fisheries", "Livestock"],
      image: "/images/media__1781879352600.jpg",
      innovation: ["Agri-innovation", "Community Tourism", "Livestock Management"],
      investment: ["Agri-enterprises", "Eco-Tourism", "Food Processing"]
    }
  ];

  const attractions = [
    {
      name: "Siargao Island",
      description: "World-renowned surfing destination with pristine beaches and natural beauty.",
      image: "/images/media__1781879352600.jpg"
    },
    {
      name: "Sohoton Cove",
      description: "Protected landscape and seascape with stunning limestone formations.",
      image: "/images/media__1781879354228.png"
    },
    {
      name: "Bucas Grande",
      description: "Island paradise with hidden lagoons and marine sanctuaries.",
      image: "/images/media__1781879356225.png"
    },
    {
      name: "Magpupungko Rock Pools",
      description: "Natural tidal pools with crystal clear waters.",
      image: "/images/media__1781911485188.png"
    },
    {
      name: "Guyam Island",
      description: "Picture-perfect island with white sand beaches.",
      image: "/images/hero_aerial_surigao_new.jpg"
    },
    {
      name: "Naked Island",
      description: "Bare sandbar emerging from crystal clear waters.",
      image: "/images/media__1781879352600.jpg"
    }
  ];

  const cultureItems = [
    {
      title: "Bonok-Bonok Maradjaw Karadjaw Festival",
      description: "Annual thanksgiving festival celebrating the province's rich cultural heritage and bountiful harvest.",
      image: "/images/media__1781879354228.png"
    },
    {
      title: "Surigao Heritage",
      description: "Deep-rooted traditions passed down through generations, reflecting the province's unique identity.",
      image: "/images/media__1781879356225.png"
    },
    {
      title: "Local Cuisine",
      description: "Authentic Surigaonon dishes featuring fresh seafood, coconut, and indigenous ingredients.",
      image: "/images/media__1781911485188.png"
    },
    {
      title: "Indigenous Culture",
      description: "Preservation of Mamanwa and other indigenous communities' traditions and knowledge.",
      image: "/images/hero_aerial_surigao_new.jpg"
    }
  ];

  const economicSectors = [
    { name: "Agriculture", icon: "🌾", description: "Rice, coconut, and high-value crops", projects: "Smart Farming, Agri-tech" },
    { name: "Fisheries", icon: "🐟", description: "Commercial and municipal fishing", projects: "Marine Tech, Cold Chain" },
    { name: "Tourism", icon: "🏝️", description: "Siargao, eco-tourism, cultural tourism", projects: "Digital Tourism, Sustainable Tech" },
    { name: "Renewable Energy", icon: "⚡", description: "Geothermal, solar, and hydro power", projects: "Green Energy Systems" },
    { name: "ICT", icon: "💻", description: "Digital services and connectivity", projects: "Digital Infrastructure" },
    { name: "MSMEs", icon: "🏪", description: "Micro, small, and medium enterprises", projects: "Business Incubation" },
    { name: "Blue Economy", icon: "🌊", description: "Sustainable marine resources", projects: "Marine Conservation Tech" }
  ];

  const stats = [
    { value: "20", label: "Municipalities & Cities" },
    { value: "27", label: "Islands" },
    { value: "580K", label: "Population" },
    { value: "5", label: "Universities & Colleges" },
    { value: "50+", label: "Tourism Sites" },
    { value: "12", label: "Innovation Programs" }
  ];

  const AnimatedCounter = ({ value, label }: { value: string; label: string }) => {
    const [count, setCount] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
    const suffix = value.replace(/[0-9]/g, "");

    useEffect(() => {
      setIsMounted(true);
    }, []);

    useEffect(() => {
      if (!isMounted) return;
      const duration = 2000;
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }, [numericValue, isMounted]);

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.div
          className="font-extrabold mb-2"
          style={{
            fontFamily: "Montserrat, Arial, sans-serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            color: "#500a31",
          }}
        >
          {count}{suffix}
        </motion.div>
        <div
          className="font-semibold"
          style={{
            fontFamily: "Montserrat, Arial, sans-serif",
            fontSize: "clamp(14px, 1.5vw, 18px)",
            color: "#500a31",
            opacity: 0.7,
          }}
        >
          {label}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#500a31] via-[#7C3AED] to-[#500a31] opacity-90" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particlePositions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: pos.left,
                top: pos.top,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: pos.duration,
                repeat: Infinity,
                delay: pos.delay,
              }}
            />
          ))}
        </div>

        {/* Geographic Contour Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,50 Q25,30 50,50 T100,50"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
            animate={{ d: ["M0,50 Q25,30 50,50 T100,50", "M0,50 Q25,70 50,50 T100,50", "M0,50 Q25,30 50,50 T100,50"] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.path
            d="M0,30 Q25,50 50,30 T100,30"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
            animate={{ d: ["M0,30 Q25,50 50,30 T100,30", "M0,30 Q25,10 50,30 T100,30", "M0,30 Q25,50 50,30 T100,30"] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.path
            d="M0,70 Q25,50 50,70 T100,70"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
            animate={{ d: ["M0,70 Q25,50 50,70 T100,70", "M0,70 Q25,90 50,70 T100,70", "M0,70 Q25,50 50,70 T100,70"] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </svg>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 text-center">
          <AnimatedHero>
            <motion.h1
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] text-white mb-6"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 700,
              }}
            >
              Discover{"\n"}
              Surigao del Norte
            </motion.h1>
            <motion.p
              className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto mb-12"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                lineHeight: 1.4,
              }}
            >
              Where innovation, sustainability, culture, and opportunity come together.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#500a31] font-bold rounded-full px-8 py-4 flex items-center gap-3 shadow-2xl transition-transform duration-300"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(16px, 1.5vw, 20px)",
                }}
                onClick={() => document.getElementById('interactive-map')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Interactive Map
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.button>
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white font-bold rounded-full px-8 py-4 flex items-center gap-3 transition-transform duration-300"
                  style={{
                    fontFamily: "Montserrat, Arial, sans-serif",
                    fontSize: "clamp(16px, 1.5vw, 20px)",
                  }}
                >
                  Explore PRIME SDN
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </Link>
            </div>
          </AnimatedHero>
        </div>

        {/* Back Button */}
        <div className="absolute top-6 left-6 z-20">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full px-6 py-3 flex items-center gap-2 shadow-lg transition-transform duration-300"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(14px, 1.2vw, 16px)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Home
            </motion.button>
          </Link>
        </div>
      </section>

      {/* ===== INTERACTIVE PROVINCE EXPLORER ===== */}
      <section id="interactive-map" className="bg-white py-[100px] px-6" aria-label="Interactive Province Explorer">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#500a31",
              }}
            >
              Explore
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#500a31",
              }}
            >
              INTERACTIVE PROVINCE EXPLORER
            </motion.h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map Area */}
            <div className="lg:col-span-2 bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 rounded-3xl p-8 border border-[#500a31]/10 relative min-h-[500px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="w-48 h-48 mx-auto mb-6 rounded-full border-4 border-[#500a31]/20 flex items-center justify-center"
                  >
                    <div className="w-32 h-32 rounded-full bg-[#500a31]/10 flex items-center justify-center">
                      <span className="text-2xl font-bold" style={{ color: "#500a31", fontFamily: "Montserrat, Arial, sans-serif" }}>
                        SDN
                      </span>
                    </div>
                  </motion.div>
                  <p className="text-sm" style={{ color: "#500a31", opacity: 0.6, fontFamily: "Montserrat, Arial, sans-serif" }}>
                    Interactive Map Coming Soon
                  </p>
                </div>
              </div>

              {/* Municipality Markers */}
              {municipalities.map((municipality, index) => (
                <motion.button
                  key={municipality.id}
                  onClick={() => setActiveMunicipality(municipality.id)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`absolute w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
                    activeMunicipality === municipality.id ? "bg-[#500a31] scale-125" : "bg-[#500a31]/50 hover:bg-[#500a31]"
                  }`}
                  style={{
                    left: `${15 + (index * 7)}%`,
                    top: `${20 + (index % 4) * 15}%`,
                  }}
                  title={municipality.name}
                />
              ))}
            </div>

            {/* Information Panel */}
            <AnimatePresence mode="wait">
              {activeMunicipality ? (
                <motion.div
                  key={activeMunicipality}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200"
                >
                  {(() => {
                    const municipality = municipalities.find(m => m.id === activeMunicipality);
                    if (!municipality) return null;
                    return (
                      <>
                        <h3 className="font-extrabold text-2xl mb-4" style={{ color: "#500a31", fontFamily: "Montserrat, Arial, sans-serif" }}>
                          {municipality.name}
                        </h3>
                        <p className="text-sm mb-6 leading-relaxed" style={{ color: "#500a31", opacity: 0.7, fontFamily: "Montserrat, Arial, sans-serif" }}>
                          {municipality.description}
                        </p>
                        
                        <div className="space-y-4 mb-6">
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#500a31", fontFamily: "Montserrat, Arial, sans-serif" }}>
                              Population
                            </span>
                            <p className="text-lg font-bold" style={{ color: "#500a31", fontFamily: "Montserrat, Arial, sans-serif" }}>
                              {municipality.population}
                            </p>
                          </div>
                          
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#500a31", fontFamily: "Montserrat, Arial, sans-serif" }}>
                              Key Industries
                            </span>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {municipality.industries.map((industry, i) => (
                                <span key={i} className="text-xs px-3 py-1 rounded-full bg-[#500a31]/10" style={{ color: "#500a31", fontFamily: "Montserrat, Arial, sans-serif" }}>
                                  {industry}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#500a31", fontFamily: "Montserrat, Arial, sans-serif" }}>
                              Innovation Initiatives
                            </span>
                            <ul className="mt-2 space-y-1">
                              {municipality.innovation.map((init, i) => (
                                <li key={i} className="text-xs flex items-center gap-2" style={{ color: "#500a31", opacity: 0.7, fontFamily: "Montserrat, Arial, sans-serif" }}>
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#500a31]" />
                                  {init}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#500a31", fontFamily: "Montserrat, Arial, sans-serif" }}>
                              Investment Opportunities
                            </span>
                            <ul className="mt-2 space-y-1">
                              {municipality.investment.map((opp, i) => (
                                <li key={i} className="text-xs flex items-center gap-2" style={{ color: "#500a31", opacity: 0.7, fontFamily: "Montserrat, Arial, sans-serif" }}>
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#500a31]" />
                                  {opp}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <motion.button
                          onClick={() => setActiveMunicipality(null)}
                          whileHover={{ scale: 1.02 }}
                          className="w-full bg-[#500a31] text-white font-semibold rounded-full py-3 transition-transform duration-300"
                          style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
                        >
                          Close
                        </motion.button>
                      </>
                    );
                  })()}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 rounded-3xl p-8 border border-[#500a31]/10 flex items-center justify-center text-center"
                >
                  <div>
                    <p className="text-sm font-semibold mb-2" style={{ color: "#500a31", fontFamily: "Montserrat, Arial, sans-serif" }}>
                      Select a Municipality
                    </p>
                    <p className="text-xs" style={{ color: "#500a31", opacity: 0.6, fontFamily: "Montserrat, Arial, sans-serif" }}>
                      Click on any marker on the map to view details
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ===== PROVINCE AT A GLANCE ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Province at a Glance">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#500a31",
              }}
            >
              Overview
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#500a31",
              }}
            >
              PROVINCE AT A GLANCE
            </motion.h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <AnimatedCounter key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== MUNICIPALITIES & CITIES ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Municipalities & Cities">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#500a31",
              }}
            >
              Local Government Units
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#500a31",
              }}
            >
              MUNICIPALITIES & CITIES
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {municipalities.map((municipality, index) => (
              <StaggerItem key={municipality.id}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(80, 10, 49, 0.15)" }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setActiveMunicipality(municipality.id)}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 cursor-pointer h-full"
                >
                  <div className="h-48 bg-gradient-to-br from-[#500a31]/20 to-[#500a31]/10 flex items-center justify-center">
                    <span className="text-4xl font-bold" style={{ color: "#500a31", fontFamily: "Montserrat, Arial, sans-serif" }}>
                      {municipality.name.split(' ')[0]}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2" style={{ color: "#500a31", fontFamily: "Montserrat, Arial, sans-serif" }}>
                      {municipality.name}
                    </h3>
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: "#500a31", opacity: 0.7, fontFamily: "Montserrat, Arial, sans-serif" }}>
                      {municipality.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {municipality.industries.slice(0, 2).map((industry, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-full bg-[#500a31]/10" style={{ color: "#500a31", fontFamily: "Montserrat, Arial, sans-serif" }}>
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== INNOVATION ECOSYSTEM ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Innovation Ecosystem">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#500a31",
              }}
            >
              Connected Future
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#500a31",
              }}
            >
              INNOVATION ECOSYSTEM
            </motion.h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Government", icon: "🏛️", description: "Policy support, funding, and strategic direction" },
              { title: "Academia", icon: "🎓", description: "Research, talent development, and knowledge transfer" },
              { title: "Industry", icon: "🏭", description: "Market demand, investment, and commercialization" },
              { title: "Communities", icon: "👥", description: "Local participation, feedback, and adoption" },
              { title: "Startups", icon: "🚀", description: "Innovation, agility, and new solutions" },
              { title: "Investors", icon: "💰", description: "Capital, mentorship, and growth support" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(80, 10, 49, 0.15)" }}
                className="bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 rounded-2xl p-8 border border-[#500a31]/10 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#500a31", fontFamily: "Montserrat, Arial, sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#500a31", opacity: 0.7, fontFamily: "Montserrat, Arial, sans-serif" }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EDUCATION & RESEARCH ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Education & Research">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#500a31",
              }}
            >
              Knowledge Hub
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#500a31",
              }}
            >
              EDUCATION & RESEARCH
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Surigao del Norte State University (SNSU)",
                description: "Leading state university providing quality education and research in various fields including agriculture, engineering, and technology.",
                highlights: ["Technology Business Incubator", "Research Centers", "Industry Partnerships"]
              },
              {
                title: "Technology Business Incubator",
                description: "Supports startup development through mentorship, funding access, and networking opportunities.",
                highlights: ["Startup Acceleration", "Mentorship Programs", "Investor Connect"]
              },
              {
                title: "Research Centers",
                description: "Specialized facilities conducting cutting-edge research in agriculture, marine science, and technology.",
                highlights: ["Marine Research", "Agri-tech Innovation", "Environmental Studies"]
              },
              {
                title: "Innovation Labs",
                description: "Collaborative spaces where students, researchers, and industry partners work together on innovative projects.",
                highlights: ["Co-working Spaces", "Equipment Access", "Project Collaboration"]
              }
            ].map((item, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(80, 10, 49, 0.15)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                >
                  <h3 className="font-bold text-xl mb-4" style={{ color: "#500a31", fontFamily: "Montserrat, Arial, sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm mb-6 leading-relaxed" style={{ color: "#500a31", opacity: 0.7, fontFamily: "Montserrat, Arial, sans-serif" }}>
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((highlight, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-[#500a31]/10" style={{ color: "#500a31", fontFamily: "Montserrat, Arial, sans-serif" }}>
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== NATURAL ATTRACTIONS ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Natural Attractions">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#500a31",
              }}
            >
              Paradise Found
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#500a31",
              }}
            >
              NATURAL ATTRACTIONS
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(80, 10, 49, 0.15)" }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedImage(attraction.image)}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 cursor-pointer h-full"
                >
                  <div className="h-64 bg-gradient-to-br from-[#500a31]/20 to-[#500a31]/10 flex items-center justify-center relative overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="text-6xl mb-4"
                    >
                      🏝️
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2" style={{ color: "#500a31", fontFamily: "Montserrat, Arial, sans-serif" }}>
                      {attraction.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#500a31", opacity: 0.7, fontFamily: "Montserrat, Arial, sans-serif" }}>
                      {attraction.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== CULTURE & HERITAGE ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Culture & Heritage">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#500a31",
              }}
            >
              Living Traditions
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#500a31",
              }}
            >
              CULTURE & HERITAGE
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cultureItems.map((item, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(80, 10, 49, 0.15)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 rounded-2xl p-8 border border-[#500a31]/10"
                >
                  <div className="text-4xl mb-4">🎭</div>
                  <h3 className="font-bold text-xl mb-4" style={{ color: "#500a31", fontFamily: "Montserrat, Arial, sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#500a31", opacity: 0.7, fontFamily: "Montserrat, Arial, sans-serif" }}>
                    {item.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== ECONOMIC & INVESTMENT ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Economic & Investment">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#500a31",
              }}
            >
              Growth Sectors
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#500a31",
              }}
            >
              ECONOMY & INVESTMENT
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {economicSectors.map((sector, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(80, 10, 49, 0.15)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
                >
                  <div className="text-4xl mb-4">{sector.icon}</div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "#500a31", fontFamily: "Montserrat, Arial, sans-serif" }}>
                    {sector.name}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: "#500a31", opacity: 0.7, fontFamily: "Montserrat, Arial, sans-serif" }}>
                    {sector.description}
                  </p>
                  <div className="text-xs px-3 py-2 rounded-full bg-[#500a31]/10 inline-block" style={{ color: "#500a31", fontFamily: "Montserrat, Arial, sans-serif" }}>
                    {sector.projects}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== INFRASTRUCTURE & CONNECTIVITY ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Infrastructure & Connectivity">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#500a31",
              }}
            >
              Connected Province
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#500a31",
              }}
            >
              INFRASTRUCTURE & CONNECTIVITY
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Ports", icon: "⚓", description: "Surigao City Port and municipal ports" },
              { title: "Airports", icon: "✈️", description: "Surigao Airport and Sayak Airport" },
              { title: "Road Networks", icon: "🛣️", description: "National highways and provincial roads" },
              { title: "Digital Connectivity", icon: "📶", description: "Fiber optics and mobile networks" },
              { title: "Logistics", icon: "🚚", description: "Cargo handling and distribution" },
              { title: "Power Supply", icon: "💡", description: "Reliable electricity distribution" },
              { title: "Water Systems", icon: "💧", description: "Potable water infrastructure" },
              { title: "Communication", icon: "📡", description: "Telecommunications and internet" }
            ].map((item, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(80, 10, 49, 0.15)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 rounded-2xl p-6 border border-[#500a31]/10 text-center"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-base mb-2" style={{ color: "#500a31", fontFamily: "Montserrat, Arial, sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#500a31", opacity: 0.7, fontFamily: "Montserrat, Arial, sans-serif" }}>
                    {item.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== WHY INVEST IN SURIGAO DEL NORTE ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Why Invest">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#500a31",
              }}
            >
              Competitive Edge
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#500a31",
              }}
            >
              WHY INVEST IN SURIGAO DEL NORTE?
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              { title: "Strategic Location", description: "Gateway to Mindanao and the Pacific, with excellent maritime access" },
              { title: "Rich Natural Resources", description: "Abundant minerals, marine resources, and agricultural lands" },
              { title: "Growing Tourism", description: "Siargao as a world-class destination driving economic growth" },
              { title: "Supportive Government", description: "Pro-business policies and innovation-friendly administration" },
              { title: "Skilled Workforce", description: "Young, educated population with growing technical skills" },
              { title: "Sustainable Development", description: "Commitment to green growth and environmental protection" }
            ].map((item, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-[#500a31] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2" style={{ color: "#500a31", fontFamily: "Montserrat, Arial, sans-serif" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#500a31", opacity: 0.7, fontFamily: "Montserrat, Arial, sans-serif" }}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/vision">
                <Button variant="maroon" showArrow={true} className="text-base py-4 px-8 rounded-full">
                  Explore PRIME SDN Framework
                </Button>
              </Link>
              <Link href="/startups">
                <Button variant="black" showArrow={true} className="text-base py-4 px-8 rounded-full">
                  Contact PRIME SDN
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== EXPLORE PRIME SDN ===== */}
      <section className="bg-gradient-to-br from-[#500a31] to-[#7C3AED] py-[100px] px-6" aria-label="Explore PRIME SDN">
        <div className="max-w-[1440px] mx-auto text-center">
          <AnimatedSection>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] text-white mb-6"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700,
              }}
            >
              Discover the Future of Innovation
            </motion.h2>
            <motion.p
              className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-12"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                lineHeight: 1.5,
              }}
            >
              Explore how PRIME SDN is transforming Surigao del Norte into a thriving innovation ecosystem.
            </motion.p>
            <Link href="/vision">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#500a31] font-bold rounded-full px-8 py-4 flex items-center gap-3 shadow-2xl transition-transform duration-300 mx-auto"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: "clamp(16px, 1.5vw, 20px)",
                }}
              >
                Explore PRIME SDN
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== RELATED TOPICS ===== */}
      <section className="bg-white py-[100px] px-6" aria-label="Related Topics">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16">
            <motion.p
              className="font-bold uppercase tracking-wider mb-4"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#500a31",
              }}
            >
              Explore More
            </motion.p>
            <motion.h2
              className="font-extrabold uppercase tracking-[-2px] leading-[0.9] max-w-3xl"
              style={{
                fontFamily: "Montserrat, Arial, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#500a31",
              }}
            >
              RELATED TOPICS
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Our Vision", description: "Surigao del Norte: A thriving innovation ecosystem by 2040", href: "/vision" },
              { title: "Our Mission", description: "S.M.A.R.T. actions for innovation excellence", href: "/mission" },
              { title: "Core Values", description: "SURIGAONON values that guide us", href: "/core-values" },
              { title: "Governance", description: "L.I.G.-ON principles for transparency", href: "/governance" },
              { title: "Roadmap", description: "Journey to 2040 innovation hub", href: "/roadmap" },
              { title: "Startups", description: "Building Surigao's innovation ecosystem", href: "/startups" }
            ].map((topic, index) => (
              <StaggerItem key={index}>
                <Link href={topic.href}>
                  <motion.div
                    whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(80, 10, 49, 0.15)" }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-br from-[#500a31]/5 to-[#500a31]/10 rounded-2xl p-8 border border-[#500a31]/10 h-full"
                  >
                    <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31" }}>
                      {topic.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif", color: "#500a31", opacity: 0.7 }}>
                      {topic.description}
                    </p>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-4xl max-h-[90vh] relative"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black"
              >
                ✕
              </motion.button>
              <div className="bg-gradient-to-br from-[#500a31]/20 to-[#500a31]/10 rounded-2xl aspect-video flex items-center justify-center">
                <span className="text-8xl">🏝️</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
