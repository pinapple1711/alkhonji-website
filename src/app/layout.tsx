import type { Metadata } from "next";
import { Fraunces, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Al Khonji — Building Oman Since 1934",
  description:
    "Al Khonji is one of Oman's most established industrial groups. Engineering, construction, safety, and supply solutions for over 90 years.",
  openGraph: {
    title: "Al Khonji — Building Oman Since 1934",
    description:
      "Engineering Products & Services, Health & Safety, Electro-Mechanical & Construction, Oil & Auto Products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF9F6] text-[#0F172A] font-[family-name:var(--font-manrope)]">
        {children}
      </body>
    </html>
  );
}
