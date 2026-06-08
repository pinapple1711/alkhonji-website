"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import { ArrowRight } from "lucide-react";

const milestones = [
  { year: "1934", event: "Al Khonji founded as a trading enterprise in Muscat." },
  { year: "1960", event: "Expanded into construction materials and industrial supply." },
  { year: "1980", event: "Launched Engineering Products & Services division." },
  { year: "2000", event: "Diversified into Oil & Auto products for Oman’s energy boom." },
  { year: "2024", event: "Five divisions strong, serving Oman’s most critical industries." },
];

export default function LegacySection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionLabel number="02" text="HERITAGE" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Timeline */}
          <div className="order-2 lg:order-1">
            <h2 className="text-h1 font-semibold text-[#0F172A] font-[family-name:var(--font-fraunces)] mb-8">
              Nine Decades
              <br />
              of Building Trust
            </h2>

            <div className="relative pl-8 border-l-2 border-[#E7E5E4] space-y-8">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative"
                >
                  <span className="absolute -left-[41px] top-0 h-5 w-5 rounded-full bg-[#C2410C] ring-4 ring-white"></span>
                  <span className="text-sm font-medium text-[#C2410C] font-[family-name:var(--font-jetbrains)]">
                    {milestone.year}
                  </span>
                  <p className="mt-1 text-base text-[#334155] leading-relaxed">
                    {milestone.event}
                  </p>
                </motion.div>
              ))}
            </div>

            <a
              href="#about"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[#C2410C] hover:gap-3 transition-all duration-200"
            >
              Read Our Full Story
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 relative h-96 lg:h-[540px] rounded-lg overflow-hidden"
          >
            <Image
              src="/images/alkhonji-heritage.png.jpeg"
              alt="Al Khonji heritage — vintage artifacts and ledgers"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
