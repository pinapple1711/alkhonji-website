"use client";

import { motion } from "framer-motion";

interface SectionLabelProps {
  number: string;
  text: string;
}

export default function SectionLabel({ number, text }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, letterSpacing: "0.3em" }}
      whileInView={{ opacity: 1, letterSpacing: "0.15em" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center gap-3 mb-6"
    >
      <span className="text-xs font-normal uppercase tracking-[0.15em] text-[#78716C] font-[family-name:var(--font-jetbrains)]">
        {number} / {text}
      </span>
      <span className="h-px w-12 bg-[#E7E5E4]"></span>
    </motion.div>
  );
}
