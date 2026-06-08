"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CareersCTA() {
  return (
    <section id="careers" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/alkhonji-careers.png.jpeg"
          alt="Al Khonji team"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0F172A]/75" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[#C2410C] font-[family-name:var(--font-jetbrains)] mb-4">
            Careers
          </p>
          <h2 className="text-h1 font-bold text-white font-[family-name:var(--font-fraunces)] mb-6">
            Build Your Career With Us
          </h2>
          <p className="text-lg text-[#E7E5E4] max-w-2xl mx-auto mb-10 leading-relaxed">
            Join one of Oman&apos;s most established industrial groups. We invest in our people,
            celebrate craftsmanship, and build careers that last.
          </p>
          <a
            href="#careers"
            className="inline-flex items-center gap-2 rounded-md bg-[#C2410C] px-8 py-4 text-base font-semibold text-white hover:bg-[#9A3412] transition-colors duration-200"
          >
            View Open Roles
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
