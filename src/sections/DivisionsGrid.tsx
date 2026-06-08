"use client";

import SectionLabel from "@/components/SectionLabel";
import DivisionCard from "@/components/DivisionCard";

const divisions = [
  {
    title: "Engineering Products & Services",
    description:
      "Precision-engineered components, industrial valves, gauges, and technical solutions for Oman’s infrastructure.",
    image: "/images/alkhonji-engineering.png.jpeg",
    href: "/engineering/",
    large: true,
  },
  {
    title: "Electro-Mechanical & Construction",
    description:
      "Full-spectrum construction, MEP systems, and electro-mechanical contracting for commercial and industrial projects.",
    image: "/images/alkhonji-construction.png.jpeg",
    href: "/construction/",
    large: true,
  },
  {
    title: "Health & Safety Products",
    description:
      "Comprehensive PPE, safety equipment, and compliance solutions protecting Oman’s workforce across every industry.",
    image: "/images/alkhonji-safety.png.jpeg",
    href: "/safety/",
  },
  {
    title: "Oil & Auto Products",
    description:
      "Lubricants, automotive supplies, and oilfield products powering Oman's energy and transportation sectors.",
    image: "/images/alkhonji-oil-auto.png.jpeg",
    href: "/oil-auto/",
  },
  {
    title: "Mohammed & Ahmed Al Khonji",
    description:
      "The corporate holding company guiding strategy, governance, and the continued growth of the Al Khonji Group.",
    image: "/images/alkhonji-group.png.jpeg",
    href: "/group/",
  },
];

export default function DivisionsGrid() {
  return (
    <section id="divisions" className="py-24 md:py-32 bg-[#FAF9F6]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionLabel number="01" text="OUR DIVISIONS" />

        <h2 className="text-h1 font-semibold text-[#0F172A] font-[family-name:var(--font-fraunces)] mb-4">
          Five Pillars.
          <br />
          One Legacy.
        </h2>

        <p className="text-lg text-[#78716C] max-w-2xl mb-16 leading-relaxed">
          Each division operates with deep technical expertise and a shared commitment to quality that has defined Al Khonji for over nine decades.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((division, i) => (
            <DivisionCard
              key={division.title}
              title={division.title}
              description={division.description}
              image={division.image}
              href={division.href}
              index={i}
              large={division.large}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
