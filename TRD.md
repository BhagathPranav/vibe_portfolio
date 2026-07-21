# Technical Requirements Document (TRD) — Bhagath Pranav Portfolio

## 1. System Architecture & Target Environment

| Parameter | Specification |
| :--- | :--- |
| **Node.js Environment** | `>=22.12.0` (Enforced via `package.json` `engines`) |
| **Framework Engine** | [Astro](https://astro.build) `^6.3.3` (`output: 'static'`) |
| **Styling Pipeline** | PostCSS (`postcss.config.mjs`) + Tailwind CSS `^3.4.19` + Autoprefixer `^10.5.0` |
| **Deployment Target** | Cloudflare Pages (Serving static pre-built assets from `dist/`) |
| **Deployment Tooling** | `wrangler` `^4.91.0` CLI script (`npm run deploy`) |
| **Client JS Frameworks** | None (Zero React, Vue, Svelte, or UI library islands) |

---

## 2. Dependencies & Package Specifications

### 2.1 Direct Dependencies (`package.json`)
```json
"dependencies": {
  "astro": "^6.3.3"
}
```

### 2.2 Development Dependencies (`package.json`)
```json
"devDependencies": {
  "autoprefixer": "^10.5.0",
  "postcss": "^8.5.14",
  "tailwindcss": "^3.4.19",
  "wrangler": "^4.91.0"
}
```

> [!NOTE]
> Tailwind CSS is integrated directly through PostCSS (`postcss.config.mjs`) rather than `@astrojs/tailwind` to bypass the Astro 6 peer dependency version gap.

---

## 3. Build & Execution Pipeline Scripts

### 3.1 Script Commands
* `npm run dev`: Executes `node scripts/copy-certificates.js` to sync PDF assets, then launches local dev server at `http://localhost:4321`.
* `npm run build`: Executes `node scripts/copy-certificates.js`, then builds static production bundle into `dist/`.
* `npm run preview`: Serves local `dist/` production build for pre-deployment testing.
* `npm run deploy`: Builds static bundle and deploys `dist/` to Cloudflare Pages via `wrangler pages deploy dist --project-name=vibe-portfolio`.

### 3.2 Certificate Asset Copier (`scripts/copy-certificates.js`)
* **Source Directory**: `/Certificates` (Root-level folder containing PDF certificate files and subdirectories like `/AWS`).
* **Destination Directory**: `/public/certificates` (Static public folder copied to `dist/ certificates` during build).
* **Behavior**: Recursively walks `/Certificates`, creates target directories, and synchronously copies files if updated or missing.

---

## 4. Web Performance & Asset Technical Budgets

* **HTML Payload Size**: Target `< 25 KB` uncompressed per page.
* **CSS Bundle Size**: Target `< 15 KB` minified Tailwind CSS bundle.
* **Font Loading Strategy**: Asynchronous CSS load from Fontshare CDN (`Switzer@400`, `Khand@700`) with `display=swap`.
* **Image Optimization**: Local PNG/SVG static previews stored in `/public/images/`. Responsive rendering with explicit `width` and `height` attributes to prevent Cumulative Layout Shift (CLS).

---

## 5. Hosting & Cloudflare Deployment Configuration

* **Build Output Directory**: `dist`
* **Build Command**: `npm run build`
* **Static Asset Routing**: Cloudflare Edge handles static HTML/CSS/PDF file resolution with 301 redirects and automatic compression (Brotli/Gzip).
* **Routing Behavior**: All pages (`index.html`, `about/index.html`, `projects/index.html`, `certificates/index.html`) prerendered statically at build time.
