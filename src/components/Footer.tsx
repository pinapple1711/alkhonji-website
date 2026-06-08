"use client";

import Image from "next/image";
import { ArrowUp } from "lucide-react";

const divisionLinks = [
  { label: "Engineering Products & Services", href: "/engineering/" },
  { label: "Electro-Mechanical & Construction", href: "/construction/" },
  { label: "Oil & Auto Products", href: "/oil-auto/" },
  { label: "Health & Safety", href: "/safety/" },
];

const companyLinks = [
  { label: "About Us", href: "/about/" },
  { label: "Our Heritage", href: "/about/" },
  { label: "Leadership", href: "/about/" },
  { label: "Certifications", href: "/about/" },
];

const careerLinks = [
  { label: "Open Roles", href: "/careers/" },
  { label: "Our Culture", href: "/careers/" },
  { label: "Benefits", href: "/careers/" },
];

const contactLinks = [
  { label: "General Inquiries", href: "mailto:info@alkhonji.com" },
  { label: "Sales", href: "mailto:sales@alkhonji.com" },
  { label: "Careers", href: "mailto:careers@alkhonji.com" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Divisions */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#78716C] mb-6">
              Divisions
            </h4>
            <ul className="space-y-3">
              {divisionLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#E7E5E4] hover:text-[#C2410C] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#78716C] mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#E7E5E4] hover:text-[#C2410C] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Careers */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#78716C] mb-6">
              Careers
            </h4>
            <ul className="space-y-3">
              {careerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#E7E5E4] hover:text-[#C2410C] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#78716C] mb-6">
              Contact
            </h4>
            <ul className="space-y-3">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#E7E5E4] hover:text-[#C2410C] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-xs text-[#78716C]">
                Muscat, Sultanate of Oman
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#334155] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/Alkhonji logo.jpg"
              alt="Al Khonji"
              width={120}
              height={40}
              className="h-8 w-auto opacity-80"
            />
            <span className="text-xs text-[#78716C]">
              © {new Date().getFullYear()} Al Khonji. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/privacy/"
              className="text-xs text-[#78716C] hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 text-xs text-[#78716C] hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              Back to top
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
