"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect } from "react";

export default function HeroSection() {
  // Mouse parallax for background
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const bgX = useTransform(springX, [-500, 500], [15, -15]);
  const bgY = useTransform(springY, [-500, 500], [15, -15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with parallax */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 scale-110"
          style={{ x: bgX, y: bgY }}
        >
          <Image
            src="/images/alkhonji-hero.png.jpeg"
            alt="Al Khonji industrial facilities in Oman"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/50 to-[#0F172A]/20" />

        {/* Floating decorative shapes */}
        <motion.div
          className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full bg-[#C2410C]/10 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-[15%] w-48 h-48 rounded-full bg-[#1E3A8A]/15 blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm uppercase tracking-[0.2em] text-[#C2410C] font-[family-name:var(--font-jetbrains)] mb-6"
        >
          Established 1934 — Muscat, Oman
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-hero font-bold text-white font-[family-name:var(--font-fraunces)] leading-[1.05] max-w-4xl mx-auto"
        >
          Building Oman
          <br />
          Since 1934
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-lg md:text-xl text-[#E7E5E4] max-w-2xl mx-auto leading-relaxed"
        >
          Engineering. Construction. Safety. Supply.
          <br className="hidden md:block" />
          One legacy. Five divisions. Countless projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#divisions"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-md bg-[#C2410C] px-8 py-4 text-base font-semibold text-white hover:bg-[#9A3412] transition-colors duration-200 shadow-lg shadow-orange-900/30"
          >
            Explore Divisions
            <ArrowRight size={18} />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-md border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:border-white hover:bg-white/10 transition-all duration-200"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
