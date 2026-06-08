"use client";

import StatCounter from "@/components/StatCounter";

const stats = [
  { value: 90, suffix: "+", label: "Years of Heritage" },
  { value: 5, suffix: "", label: "Business Divisions" },
  { value: 1000, suffix: "+", label: "Projects Delivered" },
  { value: 500, suffix: "+", label: "Team Members" },
];

export default function StatsBar() {
  return (
    <section className="relative bg-[#1C1917] py-16 md:py-20 overflow-hidden">
      {/* Optional texture background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url(/images/alkhonji-stats-texture.png.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
