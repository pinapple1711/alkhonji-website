"use client";

import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}

export default function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0F172A]/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6] shadow-xl"
          >
            <div className="mx-auto max-w-7xl px-6 py-8">
              <div className="flex flex-col gap-6">
                {links.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={onClose}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="text-2xl font-semibold text-[#0F172A] hover:text-[#C2410C] transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  onClick={onClose}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                  className="mt-4 inline-flex items-center justify-center rounded-md bg-[#C2410C] px-6 py-3 text-lg font-semibold text-white"
                >
                  Get in Touch
                </motion.a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
