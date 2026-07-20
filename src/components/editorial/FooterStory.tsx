"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function FooterStory() {
  return (
    <footer className="relative w-full bg-[#020817] text-white pt-32 pb-16 px-6" aria-label="Footer">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
          
          {/* Brand Story (Spans 6 cols) */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col">
            <Link href="/" className="inline-block mb-12">
              <span className="text-3xl font-bold tracking-tight text-white flex gap-2" style={{ fontFamily: "var(--font-display)" }}>
                PRIME <span className="text-[#AABCEB]">SDN</span>
              </span>
            </Link>
            
            <p className="text-gray-400 font-light leading-relaxed max-w-sm mb-12" style={{ fontFamily: "var(--font-body)" }}>
              The official promotional and digital platform of Surigao del Norte. Curating the vision, ecosystem, and endless possibilities of a thriving island province.
            </p>

            <div className="flex gap-6 mt-auto">
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                <span className="text-xs font-bold">FB</span>
              </div>
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                <span className="text-xs font-bold">IG</span>
              </div>
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                <span className="text-xs font-bold">LI</span>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-6 lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              <h5 className="text-xs font-bold tracking-widest uppercase text-[#5A2396] mb-4">The Movement</h5>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Vision 2040</Link>
              <Link href="/framework" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">The Framework</Link>
              <Link href="/leadership" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Leadership</Link>
              <Link href="/policies" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Governance</Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              <h5 className="text-xs font-bold tracking-widest uppercase text-[#5A2396] mb-4">Discover</h5>
              <Link href="/hubs" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Innovation Hubs</Link>
              <Link href="/startups" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Local Startups</Link>
              <Link href="/invest" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Invest</Link>
              <Link href="/ecology" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Island Ecology</Link>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              <h5 className="text-xs font-bold tracking-widest uppercase text-[#5A2396] mb-4">Insights</h5>
              <Link href="/news" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Latest News</Link>
              <Link href="/stories" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Features</Link>
              <Link href="/reports" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Data & Reports</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm font-medium mt-4 text-[#1E4FBF]">Contact Us</Link>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} PRIME SDN. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
