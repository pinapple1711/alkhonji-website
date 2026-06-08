# Al Khonji Website — Deployment Guide

## Option 1: Vercel Git Integration (Recommended — Easiest)

This is the fastest path. No CLI tokens needed.

### Step 1: Push to GitHub

1. Go to [github.com/new](https://github.com/new) and create a repository (e.g. `alkhonji-website`)
2. Make it **Public** or **Private** — both work
3. Do NOT initialize with README (we already have one)

### Step 2: Add remote and push

```bash
git remote add origin https://github.com/YOUR_USERNAME/alkhonji-website.git
git branch -M main
git push -u origin main
```

### Step 3: Import into Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **Import Git Repository**
3. Select your `alkhonji-website` repo
4. Vercel auto-detects Next.js. Keep defaults:
   - **Framework Preset:** Next.js
   - **Build Command:** `next build`
   - **Output Directory:** `dist` (we set `output: "export"` in `next.config.ts`)
5. Click **Deploy**

Done. Vercel will:
- Build on every push to `main`
- Give you a `.vercel.app` URL
- Auto-deploy previews for pull requests

---

## Option 2: GitHub Actions + Vercel CLI

Use this if you want full CI/CD control via GitHub Actions.

### Step 1: Get Vercel credentials

```bash
npx vercel@latest login
npx vercel@latest link
```

This creates a `.vercel` folder with:
- `project.json` containing `orgId` and `projectId`

### Step 2: Get Vercel Token

1. Go to [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Create a new token
3. Copy the token value

### Step 3: Add GitHub Secrets

In your GitHub repo, go to **Settings → Secrets and variables → Actions → New repository secret**

Add these 3 secrets:

| Secret Name | Value |
|-------------|-------|
| `VERCEL_TOKEN` | Your token from Step 2 |
| `VERCEL_ORG_ID` | `orgId` from `.vercel/project.json` |
| `VERCEL_PROJECT_ID` | `projectId` from `.vercel/project.json` |

### Step 4: Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/alkhonji-website.git
git branch -M main
git push -u origin main
```

The workflow in `.github/workflows/deploy.yml` will run automatically and deploy to Vercel.

---

## Option 3: Manual Vercel CLI

For one-off deployments without GitHub integration.

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login (opens browser)
vercel login

# Deploy (follow prompts)
vercel

# Production deploy
vercel --prod
```

---

## Custom Domain

After first deploy:

1. In Vercel dashboard, go to your project **Settings → Domains**
2. Add `alkhonji.com`
3. Vercel gives you DNS records (A + CNAME)
4. Add those records in your domain registrar
5. SSL certificate is auto-provisioned by Vercel

---

## Environment Variables

If you need env vars (analytics IDs, API keys):

1. Vercel Dashboard → Project → Settings → Environment Variables
2. Or add to `.env.local` locally (never commit this file)

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Images not showing | Ensure `images.unoptimized: true` in `next.config.ts` (already set) |
| 404 on sub-pages | `trailingSlash: true` is set; make sure `_next/static` files load |
| Build fails | Run `npm run build` locally first to catch errors |
| Large repo size | Images are in `public/images/` — consider compressing further |

---

## Post-Deploy Checklist

- [ ] Site loads at Vercel URL
- [ ] All 8 pages accessible (`/`, `/about/`, `/careers/`, `/engineering/`, `/safety/`, `/construction/`, `/oil-auto/`, `/group/`)
- [ ] Images display correctly
- [ ] Contact form submits (update email addresses in `ContactCTA.tsx`)
- [ ] Navigation links work between pages
- [ ] Mobile menu opens/closes
- [ ] Scroll progress bar visible
- [ ] Animations play smoothly
- [ ] Custom domain connected (when ready)
