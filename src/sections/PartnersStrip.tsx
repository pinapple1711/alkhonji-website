"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";

const partners = [
  "Petroleum Development Oman",
  "Oman LNG",
  "Ministry of Defence",
  "Diwan of Royal Court",
  "Oman Cement Company",
  "Salalah Port Services",
  "Oman Oil Company",
  "Bechtel Corporation",
];

export default function PartnersStrip() {
  return (
    <section className="py-20 md:py-24 bg-[#FAF9F6] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
        <SectionLabel number="03" text="TRUSTED BY" />
        <h2 className="text-h2 font-semibold text-[#0F172A] font-[family-name:var(--font-fraunces)]">
          Partners in Progress
        </h2>
      </div>

      {/* Infinite scroll marquee */}
      <div className="relative">
        <div className="flex gap-16 animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
          {[...partners, ...partners, ...partners].map((partner, i) => (
            <motion.span
              key={`${partner}-${i}`}
              className="inline-flex items-center text-lg md:text-xl font-medium text-[#78716C] uppercase tracking-wide"
            >
              {partner}
              <span className="mx-8 text-[#E7E5E4]">•</span>
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
