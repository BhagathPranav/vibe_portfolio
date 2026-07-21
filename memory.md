# Memory Bank & Context Record (memory.md) — Bhagath Pranav Portfolio

## 1. Project Identity & Purpose
* **Project Name**: Bhagath Pranav Personal Portfolio (`vibe_portfolio`)
* **Owner / Developer**: Bhagath Pranav
* **Primary Domain Focus**: Data Analytics (SQL, Python, Pandas, Tableau), Data Engineering, Artificial Intelligence, and High-Performance Static Web Craft (Astro, TypeScript, Tailwind).
* **Live Deployment Target**: Cloudflare Pages (`vibe-portfolio`) & Vercel mirror.

---

## 2. Core Architectural Decisions & State Record

### 2.1 Technology Stack Selection
* **Framework**: Astro 6.x configured for static HTML generation (`output: 'static'`).
* **CSS Framework**: Tailwind CSS v3 integrated via PostCSS (`postcss.config.mjs`) alongside `autoprefixer`.
* **Deployment Target**: Cloudflare Pages serving static assets pre-compiled in `dist/`.
* **Fonts**: Fontshare CDN loading `Switzer` (Regular 400) for body and `Khand` (Bold 700) for display headers.

### 2.2 Aesthetic & Design Rules
* **Color System**: Strictly 3 colors — Black (`#000000`), White (`#FFFFFF`), and Red (`#FF1A1A`).
* **Typography**: Uppercase condensed display headers with negative tracking (`-0.02em`).
* **Borders & Layout**: 1px solid black borders, 1200px max content width, square sharp corners, zero drop shadows or color gradients.
* **JavaScript Policy**: Zero client JS frameworks or UI islands.

---

## 3. Data & Content Structure

* **`src/data/site.ts`**: Contains `person` object, recruiter hook tagline, `bio` summary, `whatIDo` array, and `education` history.
* **`src/data/projects.ts`**: Contains array of 9 public GitHub repositories (*AI-chart*, *Customer Shopping Analysis*, *Zepto E-Commerce SQL*, *Pinventory*, *Zomato Analytics*, *Movie Data Analysis*, etc.).
* **`src/data/certificates.ts`**: Catalog of 30 verified certificates spanning AI & Data Engineering (IBM AI Fundamentals, NASSCOM AI), Cloud & GenAI (AWS Bedrock, AWS Cloud Practitioner), Data Analytics (DataCamp, Reliance Skilling Academy, Tata Job Simulation, NASSCOM ML), Development (HackerRank React/Node/Problem Solving, MERN, MEAN), and Patents (Intellectual Property India).

---

## 4. Key Scripts & Build Operations

* `npm run dev`: Syncs certificates via `node scripts/copy-certificates.js` and starts Astro dev server.
* `npm run build`: Syncs certificates and builds static bundle into `dist/`.
* `npm run deploy`: Builds static bundle and deploys to Cloudflare Pages via `wrangler`.

---

## 5. Project History & Evolution
* **Phase 1**: Initial Astro project scaffolding and Tailwind PostCSS integration.
* **Phase 2**: Creation of editorial design system and component architecture (`Layout`, `Navigation`, `Footer`, `ProjectCard`, `CertificateCard`).
* **Phase 3**: Integration of certificate PDF sync script (`scripts/copy-certificates.js`) to handle static PDF serving.
* **Phase 4**: Expansion of content data (`site.ts`, `projects.ts`, `certificates.ts`) and pages (`/`, `/about`, `/projects`, `/certificates`).
* **Phase 5**: Authoring of comprehensive 10-document project specification suite (`PRD.md`, `TRD.md`, `TechSpec.md`, `Appflow.md`, `design.md`, `Schema.md`, `Tracker.md`, `rules.md`, `Architecture.md`, `memory.md`).
* **Phase 6**: Addition of 7 new AI, HackerRank, and Data Science certificates (total 30 certificates), reorganized under domain-specific subdirectories (`AI`, `Cloud_and_GenAI`, `Data_Analytics`, `Development`, `Internship_and_Patent`).
