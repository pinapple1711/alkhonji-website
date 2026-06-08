# Al Khonji Website

A modern, responsive, multi-page corporate website for **Al Khonji** — one of Oman's most established industrial groups, with over 90 years of heritage.

Built with Next.js, Tailwind CSS, and Framer Motion.

---

## Live Preview

Run locally:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## What's Inside

### 8 Pages

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero, stats, divisions grid, heritage timeline, partners, careers CTA, contact |
| **About** | `/about/` | Company values, 7-milestone heritage timeline, leadership team, certifications |
| **Careers** | `/careers/` | Benefits, 8 fictional open roles with expandable details, culture section |
| **Engineering** | `/engineering/` | Division detail — overview, stats, 6 service capabilities |
| **Health & Safety** | `/safety/` | Division detail — PPE, fire safety, gas detection, training |
| **Electro-Mechanical** | `/construction/` | Division detail — MEP, HVAC, building construction, project management |
| **Oil & Auto** | `/oil-auto/` | Division detail — lubricants, automotive, oilfield chemicals |
| **Group** | `/group/` | Division detail — corporate holding company strategy |

### Design

- **Typography:** Fraunces (headings) + Manrope (body) + JetBrains Mono (labels)
- **Colors:** Industrial heritage palette — ink navy, safety orange, warm paper
- **Animations:** Scroll-triggered reveals, mouse parallax hero, stat count-ups, floating orbs, infinite marquee, mobile slide-down menu

---

## Tech Stack

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) — Type-safe code
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- [Framer Motion](https://www.framer.com/motion/) — Animations and gestures
- [Lucide React](https://lucide.dev/) — Icons

---

## Project Structure

```
src/
  app/              # Next.js pages (8 routes)
  components/       # Reusable UI components
  sections/         # Homepage section blocks
public/
  images/           # 12 PNG/JPEG assets
```

Full structure: see `PROJECT_OVERVIEW.md`

---

## Customization Guide

| Want to change... | Edit this file |
|-------------------|----------------|
| Contact emails / phones | `src/sections/ContactCTA.tsx` |
| Job listings | `src/app/careers/page.tsx` |
| Division content | `src/app/[division]/page.tsx` |
| Homepage sections order | `src/app/page.tsx` |
| Nav links or logo | `src/components/NavBar.tsx` |
| Footer links | `src/components/Footer.tsx` |
| Colors or fonts | `src/app/globals.css` |
| Hero headline | `src/sections/HeroSection.tsx` |
| Stats numbers | `src/sections/StatsBar.tsx` |
| Partners list | `src/sections/PartnersStrip.tsx` |

---

## Deployment

### Option 1: Vercel (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel auto-detects Next.js — click **Deploy**

See `DEPLOY.md` for detailed instructions (GitHub Actions, custom domains, and troubleshooting).

---

## Scripts

```bash
npm run dev      # Development server
npm run build    # Static export
npm run lint     # ESLint check
```

---

## Credits

Designed and developed for Al Khonji Group.

Images generated from custom prompts tailored to each division.
