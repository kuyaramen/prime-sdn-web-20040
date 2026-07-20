"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Search as SearchIcon, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl flex flex-col items-center justify-start pt-24 md:pt-32 px-6"
        >
          <button
            onClick={onClose}
            className="absolute top-8 right-8 p-3 text-gray-500 hover:text-[#1E4FBF] transition-colors rounded-full hover:bg-gray-100"
            aria-label="Close search"
          >
            <X size={32} strokeWidth={1.5} />
          </button>

          <div className="w-full max-w-4xl mx-auto flex flex-col">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="relative"
            >
              <div className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400">
                <SearchIcon size={40} strokeWidth={1.5} />
              </div>
              <input
                ref={inputRef}
                type="text"
                placeholder="What are you looking for in Surigao?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent border-none outline-none pl-16 pr-4 py-4 text-3xl md:text-5xl font-bold text-[#081F5C] placeholder:text-gray-300 placeholder:font-medium"
                style={{ fontFamily: "var(--font-display)" }}
              />
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#1E4FBF] to-gray-200" />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-12"
            >
              <div className="md:col-span-5 flex flex-col gap-8">
                <div>
                  <h4 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4 flex items-center gap-2">
                    <TrendingUp size={16} /> Trending Topics
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "Smart City Governance",
                      "Siargao Startups",
                      "Investment Grants",
                      "Innovation Hubs 2026",
                    ].map((topic, i) => (
                      <li key={i}>
                        <button
                          onClick={() => setQuery(topic)}
                          className="text-xl font-medium text-gray-600 hover:text-[#1E4FBF] transition-colors flex items-center gap-2 group"
                        >
                          {topic}
                          <ArrowRight size={16} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="md:col-span-7">
                <h4 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">
                  Featured Story
                </h4>
                <Link
                  href="/news"
                  onClick={onClose}
                  className="group block relative rounded-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9]"
                >
                  <Image
                    src="/images/ChatGPT Image Jul 12, 2026, 08_19_27 PM.png"
                    alt="Surigao Digital Infrastructure"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081F5C]/90 to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white mb-3">
                      DIGITAL INFRASTRUCTURE
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                      Breaking Ground on the New Siargao Innovation Center
                    </h3>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
