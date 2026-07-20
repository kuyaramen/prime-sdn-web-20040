"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const EASE_CURVE = [0.22, 1, 0.36, 1] as const;

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleNewsletter(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer 
      className="relative w-full select-none"
      role="contentinfo"
      style={{
        backgroundColor: "#F7F5F2",
        paddingTop: "120px",
        paddingBottom: "80px"
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">

        {/* ZONE 1: Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE_CURVE }}
          className="text-center mb-20"
        >
          <h2
            className="font-bold text-[#111111] mb-6"
            style={{
              fontSize: "72px",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              lineHeight: "1.0"
            }}
          >
            Let's Build the Future
            <br />
            of Surigao del Norte.
          </h2>
          
          <p
            className="text-[#666666] mb-10"
            style={{
              fontSize: "18px",
              fontFamily: "var(--font-body)",
              lineHeight: "1.6"
            }}
          >
            Explore opportunities, discover innovation, and become part of PRIME SDN 2040.
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/explore"
              className="inline-flex items-center justify-center rounded-full text-white font-semibold transition-all duration-300 hover:bg-[#1E4FBF]"
              style={{
                backgroundColor: "#1E5EFF",
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                height: "54px",
                padding: "0 30px"
              }}
            >
              Explore SDN →
            </Link>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div 
          className="w-full mb-20"
          style={{ height: "1px", backgroundColor: "rgba(0,0,0,0.08)" }}
        />

        {/* ZONE 2: Footer Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE_CURVE }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20"
        >
          {/* Column 1: Discover */}
          <div>
            <h3
              className="font-bold uppercase mb-6"
              style={{
                fontSize: "13px",
                letterSpacing: "0.12em",
                fontFamily: "var(--font-body)",
                color: "#111111",
                fontWeight: 600
              }}
            >
              Discover
            </h3>
            <ul className="space-y-[18px]">
              {[
                { label: "About SDN", href: "/about" },
                { label: "Investment Areas", href: "/invest" },
                { label: "Innovation Districts", href: "/districts" },
                { label: "Tourism", href: "/tourism" },
                { label: "Infrastructure", href: "/infrastructure" },
                { label: "News", href: "/news" }
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-block relative"
                    style={{
                      fontSize: "17px",
                      fontFamily: "var(--font-body)",
                      fontWeight: 500,
                      color: "#666666",
                      transition: "color 0.3s ease"
                    }}
                  >
                    <span className="group-hover:text-[#1E5EFF] transition-colors duration-300">
                      {link.label}
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#1E5EFF] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: PRIME */}
          <div>
            <h3
              className="font-bold uppercase mb-6"
              style={{
                fontSize: "13px",
                letterSpacing: "0.12em",
                fontFamily: "var(--font-body)",
                color: "#111111",
                fontWeight: 600
              }}
            >
              PRIME
            </h3>
            <ul className="space-y-[18px]">
              {[
                { label: "Vision", href: "/about/vision" },
                { label: "Framework", href: "/about/framework" },
                { label: "Roadmap", href: "/about/roadmap" },
                { label: "Projects", href: "/projects" },
                { label: "Partners", href: "/partners" }
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-block relative"
                    style={{
                      fontSize: "17px",
                      fontFamily: "var(--font-body)",
                      fontWeight: 500,
                      color: "#666666",
                      transition: "color 0.3s ease"
                    }}
                  >
                    <span className="group-hover:text-[#1E5EFF] transition-colors duration-300">
                      {link.label}
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#1E5EFF] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3
              className="font-bold uppercase mb-6"
              style={{
                fontSize: "13px",
                letterSpacing: "0.12em",
                fontFamily: "var(--font-body)",
                color: "#111111",
                fontWeight: 600
              }}
            >
              Resources
            </h3>
            <ul className="space-y-[18px]">
              {[
                { label: "Downloads", href: "/downloads" },
                { label: "Reports", href: "/reports" },
                { label: "Media", href: "/media" },
                { label: "FAQs", href: "/faq" },
                { label: "Contact", href: "/contact" }
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-block relative"
                    style={{
                      fontSize: "17px",
                      fontFamily: "var(--font-body)",
                      fontWeight: 500,
                      color: "#666666",
                      transition: "color 0.3s ease"
                    }}
                  >
                    <span className="group-hover:text-[#1E5EFF] transition-colors duration-300">
                      {link.label}
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#1E5EFF] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h3
              className="font-bold uppercase mb-6"
              style={{
                fontSize: "13px",
                letterSpacing: "0.12em",
                fontFamily: "var(--font-body)",
                color: "#111111",
                fontWeight: 600
              }}
            >
              Connect
            </h3>
            <ul className="space-y-[18px]">
              {[
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Instagram", href: "https://instagram.com" },
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "YouTube", href: "https://youtube.com" },
                { label: "Email", href: "mailto:info@primesdn.ph" }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group inline-block relative"
                    style={{
                      fontSize: "17px",
                      fontFamily: "var(--font-body)",
                      fontWeight: 500,
                      color: "#666666",
                      transition: "color 0.3s ease"
                    }}
                  >
                    <span className="group-hover:text-[#1E5EFF] transition-colors duration-300">
                      {link.label}
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#1E5EFF] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <div 
          className="w-full mb-16"
          style={{ height: "1px", backgroundColor: "rgba(0,0,0,0.08)" }}
        />

        {/* ZONE 3: Brand Area + Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE_CURVE }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16"
        >
          {/* Brand Area */}
          <div className="flex items-start gap-6">
            <motion.div
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.3 }}
              className="shrink-0"
            >
              <Image
                src="/00dbb79a-7e8b-4b4e-823c-3ce8f873f46f-removebg-preview.png"
                alt="PRIME SDN Logo"
                width={120}
                height={40}
                className="object-contain"
                style={{ objectFit: "contain" }}
              />
            </motion.div>
            
            <div>
              <div className="mb-3">
                <span
                  className="block font-bold"
                  style={{
                    fontSize: "24px",
                    fontFamily: "var(--font-display)",
                    color: "#111111",
                    lineHeight: "1.2"
                  }}
                >
                  PRIME
                </span>
                <span
                  className="block font-medium"
                  style={{
                    fontSize: "14px",
                    fontFamily: "var(--font-display)",
                    color: "#666666",
                    letterSpacing: "0.05em",
                    lineHeight: "1.4"
                  }}
                >
                  SURIGAO DEL NORTE
                </span>
              </div>
              
              <p
                className="text-[#666666]"
                style={{
                  fontSize: "15px",
                  fontFamily: "var(--font-body)",
                  lineHeight: "1.7",
                  maxWidth: "430px"
                }}
              >
                Building the innovation capital of Mindanao through education, infrastructure, sustainability, research, entrepreneurship, and partnerships.
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:max-w-md">
            <h3
              className="font-bold uppercase mb-4"
              style={{
                fontSize: "13px",
                letterSpacing: "0.12em",
                fontFamily: "var(--font-body)",
                color: "#111111",
                fontWeight: 600
              }}
            >
              Newsletter
            </h3>
            <form onSubmit={handleNewsletter} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
                className="flex-1 px-5 py-3 rounded-full border text-[#111111] placeholder-[#999999] focus:outline-none focus:border-[#1E5EFF] transition-all duration-300"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  borderColor: "rgba(0,0,0,0.12)",
                  backgroundColor: "#FFFFFF"
                }}
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:bg-[#1E4FBF] hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
                style={{
                  backgroundColor: "#1E5EFF",
                  fontFamily: "var(--font-body)",
                  fontSize: "15px"
                }}
              >
                {status === "loading" ? "..." : "Subscribe"}
              </button>
            </form>
            {status === "success" && (
              <p className="text-sm mt-3" style={{ fontFamily: "var(--font-body)", color: "#666666" }}>
                Thanks for subscribing!
              </p>
            )}
            {status === "error" && (
              <p className="text-sm mt-3" style={{ fontFamily: "var(--font-body)", color: "#666666" }}>
                Something went wrong. Try again.
              </p>
            )}
          </div>
        </motion.div>

        {/* Divider */}
        <div 
          className="w-full mb-12"
          style={{ height: "1px", backgroundColor: "rgba(0,0,0,0.08)" }}
        />

        {/* ZONE 4: Bottom Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.25, ease: EASE_CURVE }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Left: Copyright */}
          <p
            className="text-[#666666]"
            style={{
              fontSize: "14px",
              fontFamily: "var(--font-body)"
            }}
          >
            © 2026 PRIME SDN 2040
          </p>

          {/* Center: Legal Links */}
          <div className="flex items-center gap-6">
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Accessibility", href: "/accessibility" },
              { label: "Terms", href: "/terms" },
              { label: "Cookies", href: "/cookies" }
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group inline-block relative"
                style={{
                  fontSize: "14px",
                  fontFamily: "var(--font-body)",
                  color: "#666666",
                  transition: "color 0.3s ease"
                }}
              >
                <span className="group-hover:text-[#1E5EFF] transition-colors duration-300">
                  {link.label}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#1E5EFF] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </Link>
            ))}
          </div>

          {/* Right: Developer Credit */}
          <p
            className="text-[#666666]"
            style={{
              fontSize: "14px",
              fontFamily: "var(--font-body)"
            }}
          >
            Developed by Province of Surigao del Norte
          </p>
        </motion.div>

      </div>
    </footer>
  );
}
