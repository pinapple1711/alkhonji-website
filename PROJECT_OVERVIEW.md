# Al Khonji Website — Project Overview

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Fraunces (display), Manrope (body), JetBrains Mono (data) |
| Build Output | Static Export (`output: "export"`) |

---

## Project Structure

```
alkhonji-web/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions → Vercel CI/CD
├── public/
│   └── images/
│       ├── Alkhonji logo.jpg       # Brand logo (header + footer)
│       ├── alkhonji-hero.png.jpeg  # Homepage hero background
│       ├── alkhonji-engineering.png.jpeg
│       ├── alkhonji-safety.png.jpeg
│       ├── alkhonji-construction.png.jpeg
│       ├── alkhonji-oil-auto.png.jpeg
│       ├── alkhonji-group.png.jpeg
│       ├── alkhonji-heritage.png.jpeg
│       ├── alkhonji-careers.png.jpeg
│       ├── alkhonji-contact.png.jpeg
│       ├── alkhonji-stats-texture.png.jpeg
│       └── alkhonji-blueprint.png.png
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Homepage (landing)
│   │   ├── layout.tsx          # Root layout (fonts, metadata, HTML wrapper)
│   │   ├── globals.css         # Tailwind config + custom styles + animations
│   │   ├── about/
│   │   │   └── page.tsx        # About page (heritage, values, timeline, leadership)
│   │   ├── careers/
│   │   │   └── page.tsx        # Careers page (benefits, 8 job listings, culture)
│   │   ├── engineering/
│   │   │   └── page.tsx        # Engineering division detail
│   │   ├── safety/
│   │   │   └── page.tsx        # Health & Safety division detail
│   │   ├── construction/
│   │   │   └── page.tsx        # Electro-Mechanical division detail
│   │   ├── oil-auto/
│   │   │   └── page.tsx        # Oil & Auto division detail
│   │   └── group/
│   │       └── page.tsx        # Group / Holding company detail
│   │
│   ├── components/             # Reusable UI components
│   │   ├── NavBar.tsx          # Fixed top nav (white bg, animated links, mobile hamburger)
│   │   ├── MobileMenu.tsx      # Full-screen overlay menu (slide-down animation)
│   │   ├── Footer.tsx          # 4-column footer (divisions, company, careers, contact)
│   │   ├── SectionLabel.tsx    # "01 / TITLE" label with animated letter-spacing
│   │   ├── DivisionCard.tsx    # Card with image, hover zoom, arrow slide
│   │   ├── StatCounter.tsx     # Animated number count-up (scroll-triggered)
│   │   ├── DivisionPage.tsx    # Reusable template for all 5 division detail pages
│   │   ├── PageTransition.tsx  # Fade-in page transition wrapper
│   │   └── ScrollProgress.tsx  # Orange progress bar at top of page
│   │
│   └── sections/               # Homepage section components
│       ├── HeroSection.tsx     # Full-viewport hero with parallax bg + floating orbs
│       ├── StatsBar.tsx        # Dark band with 4 animated counters
│       ├── DivisionsGrid.tsx   # 5-division asymmetric grid with hover effects
│       ├── LegacySection.tsx   # Split layout: timeline + heritage image
│       ├── PartnersStrip.tsx   # Infinite marquee of client names
│       ├── CareersCTA.tsx      # Full-width image band with overlay text
│       └── ContactCTA.tsx      # Contact cards + form with blueprint bg
│
├── next.config.ts              # Static export, unoptimized images, trailingSlash
├── DEPLOY.md                   # Step-by-step deployment guide (3 options)
└── package.json                # Dependencies: next, react, framer-motion, lucide-react
```

---

## Pages (8 Total)

| Route | File | What It Shows |
|-------|------|---------------|
| `/` | `app/page.tsx` | Homepage — all 7 sections stitched together |
| `/about/` | `app/about/page.tsx` | Hero, 4 values cards, 7-milestone timeline, 3 leadership cards, certifications |
| `/careers/` | `app/careers/page.tsx` | Hero, 6 benefits, filterable job listings (8 roles), culture CTA |
| `/engineering/` | `app/engineering/page.tsx` | Division hero, overview + stats, 6 service cards, CTA |
| `/safety/` | `app/safety/page.tsx` | Same template — division-specific content |
| `/construction/` | `app/construction/page.tsx` | Same template — division-specific content |
| `/oil-auto/` | `app/oil-auto/page.tsx` | Same template — division-specific content |
| `/group/` | `app/group/page.tsx` | Same template — holding company content |

---

## Components Explained

### NavBar.tsx
- **Always white** background with glass blur (`backdrop-blur-md`)
- **Bigger logo** (160px wide, 56px height)
- **Animated link underlines** — orange line grows on hover (`group-hover:w-full`)
- **Staggered entrance** — nav items fade in one by one on load
- **"Get in Touch" button** — scale + lift on hover, orange shadow
- **Mobile hamburger** — rotate animation between Menu/X icons

### MobileMenu.tsx
- **Slide-down entrance** (`y: "-100%" → 0`) with cubic-bezier easing
- **Backdrop blur** on body content
- **Staggered link reveals** — each link slides in with 50ms delay
- Framer Motion `AnimatePresence` for smooth exit

### DivisionCard.tsx
- **Scroll-triggered fade-up** with slight scale (0.98 → 1)
- **Image zoom on hover** (`scale-105`, 500ms transition)
- **Gradient overlay** from bottom for text readability
- **Arrow slide** — "Learn more" arrow moves 4px right on hover
- **Shadow deepen** on hover (`shadow-sm → shadow-xl`)

### StatCounter.tsx
- **Count-up animation** from 0 to target value (2s duration, ease-out cubic)
- **Scroll-triggered** — starts counting when element enters viewport
- **JetBrains Mono labels** + **Fraunces bold numbers**
- Uses `requestAnimationFrame` for smooth counting

### DivisionPage.tsx (Reusable Template)
- **Hero** — division image with gradient overlay, back link, title
- **Overview** — 2-column: description + stats panel
- **Services** — 3-column grid of checkmark cards with hover lift
- **CTA** — dark section with contact button
- Props-driven: title, subtitle, image, services[], stats[], ctaText

### ScrollProgress.tsx
- **Orange progress bar** at very top of page
- **Spring physics** — follows scroll with natural damping (`stiffness: 100, damping: 30`)
- Uses `useScroll` + `useSpring` from Framer Motion

### HeroSection.tsx
- **Mouse parallax** — background image subtly follows cursor movement
- **Floating orbs** — 2 blurred orange/blue circles that drift infinitely
- **Noise texture overlay** — subtle grain for filmic quality
- **Staggered text reveal** — label → headline → subtitle → CTAs (200ms delays)
- **Bouncing chevron** scroll indicator

---

## Animations Summary

| Animation | Trigger | Tech |
|-----------|---------|------|
| Nav entrance | Page load | Framer Motion `initial={{ y: -100 }}` |
| Link underline | Hover | CSS `transition-all`, `group-hover:w-full` |
| Mobile menu | Toggle | Framer Motion `AnimatePresence`, slide-down |
| Hero parallax | Mouse move | `useMotionValue` + `useSpring` + `useTransform` |
| Floating orbs | Always | Framer Motion `animate={{ x, y, scale }}` infinite |
| Hero text | Page load | Staggered `motion.*` with delays |
| Stat count-up | Scroll into view | `requestAnimationFrame` + `useInView` |
| Division cards | Scroll into view | `whileInView` fade-up + scale |
| Card hover | Hover | CSS `scale-105`, shadow transition |
| Arrow slide | Hover | `group-hover:translate-x-1` |
| Timeline items | Scroll into view | `whileInView` slide-left, staggered |
| Section labels | Scroll into view | `whileInView` letter-spacing settle |
| Logo marquee | Always | CSS `@keyframes marquee` 30s loop |
| Page transition | Route change | Framer Motion fade + y-shift |
| Scroll progress | Scroll | `useScroll` + `useSpring` |
| Button hover | Hover | `whileHover={{ scale: 1.05, y: -2 }}` |
| Form focus | Focus | CSS `border-color` + `ring` transition |

---

## Design System (Inline in globals.css)

| Token | Hex | Usage |
|-------|-----|-------|
| `ink` | `#0F172A` | Primary text, dark backgrounds |
| `slate` | `#334155` | Secondary text |
| `concrete` | `#78716C` | Muted text, captions |
| `orange` | `#C2410C` | CTA, accent, hover states |
| `orange-light` | `#FFF7ED` | Highlight backgrounds |
| `blueprint` | `#1E3A8A` | Division headers, trust elements |
| `paper` | `#FAF9F6` | Page background |
| `stone` | `#E7E5E4` | Dividers, borders |
| `engine` | `#1C1917` | Deep dark sections |

---

## Key Files for Quick Editing

| Want to change... | Edit this file |
|-------------------|----------------|
| Contact info (phones/emails) | `src/sections/ContactCTA.tsx` |
| Job listings | `src/app/careers/page.tsx` (jobs array) |
| Division content | `src/app/[division]/page.tsx` |
| Homepage sections order | `src/app/page.tsx` |
| Nav links | `src/components/NavBar.tsx` |
| Footer links | `src/components/Footer.tsx` |
| Colors | `src/app/globals.css` (theme inline) |
| Fonts | `src/app/layout.tsx` (next/font/google) |
| Hero text | `src/sections/HeroSection.tsx` |
| Stats values | `src/sections/StatsBar.tsx` |
| Partners list | `src/sections/PartnersStrip.tsx` |

---

## Build Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Static export to dist/
npm run lint     # ESLint check
```

---

## Deployment

See `DEPLOY.md` for 3 options:
1. **Vercel Git Integration** (easiest — connect repo in dashboard)
2. **GitHub Actions + Vercel CLI** (CI/CD with workflow file)
3. **Manual Vercel CLI** (one-off deploys)
