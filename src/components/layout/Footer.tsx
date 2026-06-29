"use client";

import Link from "next/link";
import { SITE_CONFIG } from "@/lib/utils";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const socialLinks = [
    {
      svg: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ),
      href: SITE_CONFIG.social.facebook,
      label: "Facebook"
    },
    {
      svg: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ),
      href: SITE_CONFIG.social.instagram,
      label: "Instagram"
    },
    {
      svg: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
        </svg>
      ),
      href: SITE_CONFIG.social.twitter,
      label: "X (Twitter)"
    },
    {
      svg: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
        </svg>
      ),
      href: SITE_CONFIG.social.youtube,
      label: "YouTube"
    }
  ];

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
    <footer className="bg-[#500a31] text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo + Social */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-8" aria-label="Prime SDN Home">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 21c0 .5 4 .5 4 0v-2H9v2zM12 2C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" fill="#500a31"/>
                </svg>
              </div>
              <span className="text-xl tracking-tight" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                <span className="font-bold text-white">PRIME</span>{" "}
                <span className="font-bold text-white/80">SDN</span>
              </span>
            </Link>
            <p className="text-sm text-white/70 mb-6 leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
              Building Surigao del Norte's innovation ecosystem through collaboration, research, and sustainable development.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ svg, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 text-white"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white text-sm mb-6 uppercase tracking-wider" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About", href: "/about/vision" },
                { label: "Policies & Governance", href: "/about/policies" },
                { label: "Activities", href: "/activities" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors duration-300" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-white text-sm mb-6 uppercase tracking-wider" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
              Resources
            </h3>
            <ul className="space-y-3">
              {[
                { label: "News & Blogs", href: "/news" },
                { label: "Startups", href: "/startups" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors duration-300" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-white text-sm mb-6 uppercase tracking-wider" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
              Stay Informed
            </h3>
            <p className="text-sm mb-5 text-white/70 leading-relaxed" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
              Subscribe to our newsletter for the latest updates and innovation stories from Surigao Del Norte.
            </p>
            <form onSubmit={handleNewsletter} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-all duration-300"
                aria-label="Email address for newsletter"
                style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3 rounded-lg bg-white text-[#500a31] text-sm font-semibold hover:bg-white/90 transition-all duration-300 disabled:opacity-50"
                style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
              >
                {status === "loading" ? "..." : "Subscribe"}
              </button>
            </form>
            {status === "success" && (
              <p className="text-xs text-white mt-3" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>Thanks for subscribing!</p>
            )}
            {status === "error" && (
              <p className="text-xs text-white/70 mt-3" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>Something went wrong. Try again.</p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
          <div className="flex items-center gap-4">
            <span>{SITE_CONFIG.phone}</span>
            <span className="hidden sm:inline">|</span>
            <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors duration-300">
              {SITE_CONFIG.email}
            </a>
          </div>
          <span>© {new Date().getFullYear()} Prime SDN. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
