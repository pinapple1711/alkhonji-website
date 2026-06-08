"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";
import { Division3DCard } from "@/components/ui/division-3d-card";

const divisions = [
  {
    title: "Engineering",
    subtitle: "Products & Services",
    imageUrl: "/images/alkhonji-engineering.png.jpeg",
    actionText: "Explore Division",
    href: "/engineering/",
  },
  {
    title: "Health & Safety",
    subtitle: "Safety Products",
    imageUrl: "/images/alkhonji-safety.png.jpeg",
    actionText: "Explore Division",
    href: "/safety/",
  },
  {
    title: "Construction",
    subtitle: "Electro-Mechanical & Construction",
    imageUrl: "/images/alkhonji-construction.png.jpeg",
    actionText: "Explore Division",
    href: "/construction/",
  },
  {
    title: "Oil & Auto",
    subtitle: "Oil & Auto Products",
    imageUrl: "/images/alkhonji-oil-auto.png.jpeg",
    actionText: "Explore Division",
    href: "/oil-auto/",
  },
  {
    title: "Al Khonji Group",
    subtitle: "Mohammed & Ahmed Al Khonji",
    imageUrl: "/images/alkhonji-group.png.jpeg",
    actionText: "Explore Division",
    href: "/group/",
  },
];

export default function Divisions3DScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  // Auto-scroll animation
  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.25;

    const animate = () => {
      if (!scrollEl) return;
      scrollPos += speed;
      const maxScroll = scrollEl.scrollWidth - scrollEl.clientWidth;

      if (scrollPos >= maxScroll) {
        scrollPos = 0;
      }

      scrollEl.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section
      id="divisions"
      ref={containerRef}
      className="py-24 md:py-32 bg-[#0F172A] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
        <SectionLabel number="01" text="OUR DIVISIONS" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-h1 font-bold text-white font-[family-name:var(--font-fraunces)] mb-4">
            Our Divisions
          </h2>
          <p className="text-lg text-[#78716C] max-w-2xl leading-relaxed">
            Five divisions operating with deep technical expertise and a shared commitment to quality that has defined Al Khonji for over nine decades.
          </p>
        </motion.div>
      </div>

      {/* Horizontal scrolling container */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto pb-8 px-6 lg:px-8 scrollbar-hide"
        style={{
          scrollBehavior: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {divisions.map((division, index) => (
          <motion.div
            key={division.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div style={{ perspective: "1000px" }}>
              <Division3DCard
                title={division.title}
                subtitle={division.subtitle}
                imageUrl={division.imageUrl}
                actionText={division.actionText}
                href={division.href}
              />
            </div>
          </motion.div>
        ))}

        {/* Duplicate for seamless loop */}
        {divisions.map((division, index) => (
          <motion.div
            key={`${division.title}-dup`}
            className="hidden md:block"
          >
            <div style={{ perspective: "1000px" }}>
              <Division3DCard
                title={division.title}
                subtitle={division.subtitle}
                imageUrl={division.imageUrl}
                actionText={division.actionText}
                href={division.href}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
