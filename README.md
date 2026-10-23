# Dhara Patadia — AI Product Ownership & Operations Portfolio

A high-performance, editorial portfolio showcasing AI product management, AutoML product delivery, multimodal data operations, and applied research.

Built according to the portfolio brief specifications, matching the finalised design system, layout, and copy traced directly from Dhara Patadia's CV.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, static export via `output: 'export'`)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with design tokens mapped in `@theme`
- **Typography**: [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) (Display) & [DM Sans](https://fonts.google.com/specimen/DM+Sans) (Body) via `next/font`
- **Motion**: [GSAP](https://gsap.com/) + ScrollTrigger + `@gsap/react` (`useGSAP`) + [Lenis](https://github.com/darkroomengineering/lenis) smooth scroll
- **Icons**: [Lucide React](https://lucide.dev/)
- **Target**: Static HTML export ready for Vercel, Netlify, Cloudflare Pages, or GitHub Pages

---

## Getting Started

### Prerequisites

- Node.js 18.18+ or 20+
- npm (or yarn / pnpm)

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production (Static Export)

```bash
npm run build
```

This compiles TypeScript, bundles styles, statically generates all pages, dynamic social Open Graph images (`opengraph-image.png`), icons (`icon.png`), and exports the production website to the `out/` directory.

---

## Deployment to Vercel

### Method 1: Vercel Dashboard (Recommended)

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New… → Project**.
3. Import your portfolio repository.
4. Vercel automatically detects Next.js:
   - **Framework Preset**: `Next.js`
   - **Build Command**: `npm run build`
   - **Output Directory**: `out` (or default Next.js detection)
5. Click **Deploy**.

### Method 2: Vercel CLI

```bash
# Install Vercel CLI globally or use npx
npx vercel

# Deploy directly to production
npx vercel --prod
```

---

## Site Architecture & Content Management

All copy and data are kept strictly decoupled from UI components so edits never break layout:

- `src/content/site.ts`: Central source of truth for home page copy, navigation, hero copy, stats, about narrative, expertise cards, work preview, experience timeline, and contact information.
- `src/content/case-studies.ts`: Verbatim case study copy for `/work/mlense`, `/work/amazon-guidance`, and `/work/msc-research`, backed by `reference/Dhara_Patadia_CV.pdf`.
- `src/app/globals.css`: Full palette design tokens (`--cream`, `--ink`, `--terracotta`, `--blush`, `--sage`, `--sand`), typography rules, and accessible focus states.
- `public/`: Static assets including `Dhara_Patadia_CV.pdf` and optional custom `portrait.jpg`.

---

## Pages & Routes

- `/` — Single-page portfolio with Hero, Stats, About, Expertise & Tools, Selected Work, Experience & Education, and Contact.
- `/work` — Selected work overview and case study index.
- `/work/mlense` — MLense No-code AutoML product launch case study and 12-week delivery roadmap.
- `/work/amazon-guidance` — Amazon issue-resolution guidance proposal and 4-step workflow architecture.
- `/work/msc-research` — MSc Distinction multimodal content prediction dissertation and empirical benchmark chart.

---

## Accessibility & Performance Standards

- **Semantic Landmarks**: Semantic `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` elements.
- **Accessible Focus**: 2px `--terracotta-strong` outline with 3px offset on `:focus-visible`.
- **Keyboard Navigation**: Full keyboard navigation across all links, drawer menu, and experience accordion.
- **Reduced Motion**: Full fallback support under `prefers-reduced-motion: reduce`, disabling scroll animations and revealing content immediately.
- **SEO & Structured Data**: Native Schema.org `Person` JSON-LD metadata, Open Graph cards, and semantic meta tags.
