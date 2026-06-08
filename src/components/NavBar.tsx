"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "About Us", href: "/about/" },
  { label: "Divisions", href: "/#divisions" },
  { label: "Careers", href: "/careers/" },
  { label: "Contact", href: "/#contact" },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6]/95 backdrop-blur-md shadow-sm"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-24 items-center justify-between">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image
                  src="/images/Alkhonji logo.jpg"
                  alt="Al Khonji"
                  width={200}
                  height={65}
                  className="h-14 w-auto object-contain"
                  priority
                />
              </motion.div>
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="relative text-sm font-medium text-[#334155] hover:text-[#C2410C] transition-colors duration-200 tracking-wide group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C2410C] transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
              <motion.a
                href="/#contact"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="ml-4 inline-flex items-center rounded-md bg-[#C2410C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#9A3412] transition-colors duration-200 shadow-lg shadow-orange-900/20"
              >
                Get in Touch
              </motion.a>
            </nav>

            {/* Mobile Toggle */}
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 text-[#0F172A] cursor-pointer"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} links={navLinks} />
    </>
  );
}
