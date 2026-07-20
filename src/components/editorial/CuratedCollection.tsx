"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CollectionItem {
  id: string;
  title: string;
  category: string;
  date?: string;
  excerpt?: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

interface CuratedCollectionProps {
  label: string;
  title: string;
  items: CollectionItem[];
  viewAllText?: string;
  viewAllHref?: string;
}

export function CuratedCollection({
  label,
  title,
  items,
  viewAllText,
  viewAllHref
}: CuratedCollectionProps) {
  return (
    <section className="relative w-full bg-white px-6 py-32 md:py-48" aria-label={title}>
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-xs font-bold tracking-[0.2em] uppercase text-[#1E4FBF] mb-6"
            >
              {label}
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-[#081F5C] max-w-2xl text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {title}
            </motion.h3>
          </div>

          {viewAllText && viewAllHref && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link href={viewAllHref} className="group inline-flex items-center gap-3 text-gray-500 hover:text-[#1E4FBF] font-semibold uppercase tracking-widest text-xs transition-colors">
                {viewAllText}
                <span className="w-8 h-8 rounded-full border border-gray-200 group-hover:border-[#1E4FBF] flex items-center justify-center transition-colors">
                  <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          )}
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            >
              <Link href={item.href} className="group block">
                {/* Image Container */}
                <div className="relative w-full aspect-[4/5] overflow-hidden mb-8">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Meta */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-bold tracking-widest uppercase text-[#1E4FBF]">
                    {item.category}
                  </span>
                  {item.date && (
                    <span className="text-xs font-medium text-gray-400 tracking-wider">
                      {item.date}
                    </span>
                  )}
                </div>
                
                {/* Title */}
                <h4 className="text-2xl font-bold text-[#081F5C] leading-[1.25] group-hover:text-[#1E4FBF] transition-colors duration-300 text-balance mb-4" style={{ fontFamily: "var(--font-display)" }}>
                  {item.title}
                </h4>

                {/* Excerpt */}
                {item.excerpt && (
                  <p className="text-gray-500 font-light leading-relaxed line-clamp-2" style={{ fontFamily: "var(--font-body)" }}>
                    {item.excerpt}
                  </p>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
