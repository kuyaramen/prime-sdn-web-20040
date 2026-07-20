"use client";

import { motion } from "framer-motion";

interface EditorialStatementProps {
  statement: string;
  description?: string;
  label?: string;
}

export function EditorialStatement({ statement, description, label }: EditorialStatementProps) {
  return (
    <section className="relative w-full bg-white px-6 py-48 md:py-64" aria-label="Editorial Statement">
      <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center justify-center">
        
        {label && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-xs font-bold tracking-[0.2em] uppercase text-[#1E4FBF] mb-8"
          >
            {label}
          </motion.p>
        )}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-[#081F5C] max-w-5xl text-balance"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {statement}
        </motion.h2>

        {description && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="mt-12 text-xl md:text-2xl text-gray-500 font-light max-w-3xl leading-relaxed text-balance"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {description}
          </motion.p>
        )}
        
      </div>
    </section>
  );
}
