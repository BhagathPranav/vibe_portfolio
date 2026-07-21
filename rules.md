# Project & Development Guidelines (rules.md) — Bhagath Pranav Portfolio

> [!IMPORTANT]
> These rules and guidelines govern all AI agents, developers, and automated tools working on the **Bhagath Pranav Portfolio** (`vibe_portfolio`) repository. All rules must be enforced strictly without exception.

---

## 1. Core Architecture & Tech Stack Mandates

1. **Framework & Output**:
   * Must use **Astro 6.x** configured with static output (`output: 'static'` in `astro.config.mjs`).
   * **DO NOT** introduce Server-Side Rendering (SSR), API routes, server endpoints, or cloud adapters unless product requirements explicitly mandate dynamic server functionality.

2. **Styling Pipeline**:
   * Must use **Tailwind CSS v3 via PostCSS** (`postcss.config.mjs`).
   * **DO NOT** install or use `@astrojs/tailwind` due to peer dependency version gaps in Astro 6.
   * Extend custom theme tokens in `tailwind.config.mjs`; do not pollute markup with arbitrary un-tokenized hex codes.

3. **Zero Client JavaScript Policy**:
   * **NO** client-side framework islands (React, Vue, Svelte, Preact, Alpine, Solid, etc.).
   * **NO** heavy animation or scroll libraries (GSAP, Framer Motion, Lenis).
   * **NO** client JS scripts for standard navigation, modals, or theme toggles unless strictly approved. Keep output pure static HTML/CSS.

---

## 2. Design System Constraints (Strict Palette & Fonts)

### 2.1 The 3-Color Rule
Only the following 3 color values are permitted across the entire codebase:

* **Black**: `#000000` (`bg-black`, `text-black`, `border-black`)
* **White**: `#FFFFFF` (`bg-white`, `text-white`, `border-white`)
* **Red**: `#FF1A1A` (`bg-red`, `text-red`, `border-red`)

> [!CAUTION]
> **Forbidden Colors**: Grays, off-whites, neutral zincs, default Tailwind red (`#ef4444`), gradients, and box shadows are strictly forbidden.

### 2.2 Typography Rules
* **Headlines, CTAs, Nav**: Khand (700 bold), uppercase, negative tracking (`tracking-display: -0.02em`), using `.headline` or `font-display`.
* **Body Text**: Switzer (400 regular), using `font-body`.

### 2.3 Layout & Component Rules
* Max content width: `1200px` (`max-w-content` / `.container-content`).
* Borders: `1px solid #000000` only (`border border-black`).
* Focus rings: `outline: 2px solid #FF1A1A` on `:focus-visible`.

---

## 3. Workflow & Verification Mandates

1. **Build Verification**:
   * Always run `npm run build` after making structural, data, or styling changes.
   * All pages must prerender into `dist/` without compilation errors or unhandled exceptions.

2. **Data & Presentation Separation**:
   * Edit personal identity, bio, education, or recruiter hooks in `src/data/site.ts`.
   * Edit project catalog and GitHub links in `src/data/projects.ts`.
   * Edit certificate catalog in `src/data/certificates.ts`.
   * Do not hardcode content arrays directly inside page templates.

3. **Git & Commit Safety**:
   * Do not push unverified code or create broken commits.
   * Ensure `scripts/copy-certificates.js` completes cleanly during `npm run build`.
