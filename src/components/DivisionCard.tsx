"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface DivisionCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  index: number;
  large?: boolean;
}

export default function DivisionCard({
  title,
  description,
  image,
  href,
  index,
  large = false,
}: DivisionCardProps) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer block ${
        large ? "md:col-span-1" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${large ? "h-72 md:h-80" : "h-64"}`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/20 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-[#0F172A] group-hover:text-[#C2410C] transition-colors duration-200">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#78716C]">
          {description}
        </p>
        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#C2410C]">
          <span>Learn more</span>
          <ArrowRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </div>
      </div>
    </motion.a>
  );
}
