"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function StatementSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-white py-20 px-6 sm:px-12 md:px-20 lg:px-32" aria-label="Statement">
      <div className="w-full max-w-[1400px] mx-auto">
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={prefersReduced ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <motion.p
            initial={prefersReduced ? {} : { opacity: 0 }}
            whileInView={prefersReduced ? {} : { opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="font-extrabold uppercase text-center leading-[1.08] tracking-[-0.03em]"
            style={{
              color: "#1E4FBF",
              fontSize: "clamp(2.2rem, 5vw, 6rem)"
            }}
          >
            &quot;NAVIGATING SURIGAO DEL NORTE&apos;S FUTURE
            <br />
            THROUGH COLLABORATION,
            <br />
            ISLAND-SMART INNOVATION, AND
            <br />
            STRATEGIC SOLUTIONS&quot;
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
