# Product Requirements Document (PRD) — Bhagath Pranav Portfolio

## 1. Overview & Vision
The **Bhagath Pranav Portfolio** (`vibe_portfolio`) is a high-performance, minimal static personal portfolio website designed to showcase Bhagath Pranav's expertise in **Data Analytics, SQL, Python, Cloud/GenAI**, and **modern static web engineering**. 

The website operates on a strict **editorial design system** using only 3 core colors (Black, White, Red), large bold display headlines, generous whitespace, and **zero client-side JavaScript overhead**.

## 2. Product Goals & Target Audience

### 2.1 Core Goals
* **Recruiter & Hiring Manager Conversions**: Instantly convey data analytics capability, technical depth, verified certifications, and published GitHub repositories.
* **Flawless Static Performance**: Achieve 100/100 performance, accessibility, and SEO scores via static HTML prerendering and Cloudflare edge delivery.
* **Editorial Aesthetic**: Stand out from standard developer templates through a striking, brutalist-editorial design language (Black/White with sharp Red CTAs).

### 2.2 Target Audience
* **Technical Recruiters & Talent Acquisition Specialists**: Seeking data analysts, SQL developers, Python data engineers, or full-stack static site builders.
* **Engineering Managers & Data Leads**: Evaluating code quality, project documentation, reproducible Jupyter notebooks, and certificate verification.
* **Peer Developers & Tech Community**: Exploring static site architectures with Astro & Tailwind.

---

## 3. Key Features & Functionality

### 3.1 Home Page (`/`)
* **Hero Section**: Strong headline, high-impact recruiter hook tagline, avatar portrait, quick action CTAs (View Projects, Explore Certificates).
* **Teaser Showcase**: Highlight 3 top-tier projects with minimal metadata ("teaser" variant cards).
* **Certificates Teaser**: Quick grid preview of top Cloud & Data certifications with quick links to `/certificates`.
* **Recruiter Call-to-Action**: Direct links to GitHub repositories, LinkedIn, and email options.

### 3.2 About Page (`/about`)
* **Professional Bio**: Concise multi-paragraph summary outlining data analytics background, SQL schema design, Python exploratory analysis, and frontend craft.
* **"What I Do" Core Capabilities**: Numbered list highlighting SQL query design, Jupyter prototyping, Tableau story-finding, and Astro static web delivery.
* **Education & Career Timeline**: Structured timeline displaying degrees, certifications, independent work, and key accomplishments.

### 3.3 Projects Page (`/projects`)
* **Projects Grid**: Responsive grid featuring all public GitHub-linked analytical and development projects (e.g., *Customer Shopping Behavior Analysis*, *Zepto E-Commerce SQL*, *Zomato Analytics*, *AI-chart*, *Pinventory*).
* **Rich Project Cards**: "Full" card variant containing preview thumbnail image, title, description, technology tags (SQL, Python, TypeScript, Astro, MERN), and direct links to GitHub repositories and live deployments.

### 3.4 Certificates Showcase Page (`/certificates`)
* **Categorized Certificate Hub**: Structured view of 20+ verified certificates across categories: *Cloud & GenAI*, *Data Analytics*, *Development*, *Internship & Patent*.
* **PDF Certificate Viewing**: Clickable certificate cards opening full PDF credentials served directly from static storage (`public/certificates/`).

### 3.5 Global Layout & Navigation (`Layout.astro`, `Navigation.astro`, `Footer.astro`)
* **Sticky Navigation Header**: Clean header with active route highlighting using `text-red` driven by `Astro.url.pathname`.
* **Footer**: Repeated site links, current copyright notice, GitHub profile link, and smooth scroll "Back to Top" trigger (`#top`).

---

## 4. Non-Functional Requirements (NFRs)

| Category | Requirement | Validation Method |
| :--- | :--- | :--- |
| **Performance** | Page load under 1.0s globally; Lighthouse Performance > 95 | WebPageTest / Lighthouse |
| **JS Overhead** | 0KB Client-side JavaScript framework bundle (No React/Vue/Svelte) | Network tab inspection |
| **SEO & Meta** | Semantic HTML5 structure, descriptive Open Graph tags, canonical URLs | Meta tag audit / Lighthouse |
| **Accessibility** | WCAG 2.1 AA compliance, key focus rings (`outline: 2px solid #FF1A1A`), proper `alt` text | Axe DevTools / DevTools A11y |
| **Deployability** | Static build bundle in `dist/` ready for Cloudflare Pages deployment | `npm run build` |

---

## 5. Success Metrics (KPIs)
1. **100% Prerender Rate**: 0 dynamic server runtime calls or client hydration failures.
2. **Sub-second LCP**: Largest Contentful Paint under 1.2s on desktop and mobile.
3. **Recruiter Friction Index**: Recruiter can reach GitHub source code or view a PDF certificate in <= 2 clicks from any page.
