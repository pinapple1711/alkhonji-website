"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export default function StatCounter({
  value,
  suffix = "",
  label,
  duration = 2,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="flex items-baseline justify-center gap-1">
        <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-fraunces)] leading-none">
          {count}
        </span>
        {suffix && (
          <span className="text-2xl md:text-3xl font-semibold text-[#C2410C]">
            {suffix}
          </span>
        )}
      </div>
      <p className="mt-3 text-sm uppercase tracking-wider text-[#78716C] font-[family-name:var(--font-jetbrains)]">
        {label}
      </p>
    </motion.div>
  );
}
