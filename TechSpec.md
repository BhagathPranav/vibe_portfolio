# Technical Specification (TechSpec) — Bhagath Pranav Portfolio

## 1. Codebase Architecture & Structural Blueprint

The repository follows a clean, component-driven static Astro layout:

```
vibe_portfolio/
├── astro.config.mjs          # Astro static configuration
├── postcss.config.mjs        # PostCSS pipeline (Tailwind CSS v3 + Autoprefixer)
├── tailwind.config.mjs       # Custom design system tokens & theme overrides
├── package.json              # Scripts, engines, dependencies
├── scripts/
│   └── copy-certificates.js  # Build hook for syncing PDF certificates to /public
├── Certificates/             # Source directory for PDF credentials & patents
├── public/
│   ├── images/               # Project & avatar preview image assets
│   └── certificates/         # Synced public PDF certificate destination
└── src/
    ├── components/           # Reusable Astro layout and UI components
    │   ├── Layout.astro      # Master HTML shell, meta tags, fonts, global CSS
    │   ├── Navigation.astro  # Header navigation with active link detection
    │   ├── Footer.astro      # Footer navigation, copyright, back-to-top trigger
    │   ├── ProjectCard.astro # Dual-variant project teaser/full card component
    │   └── CertificateCard.astro # Interactive certificate display card
    ├── data/                 # Strongly typed data definitions & content source
    │   ├── site.ts           # Personal identity, bio, capabilities, education
    │   ├── projects.ts       # GitHub project portfolio metadata
    │   └── certificates.ts   # Certificate & patent credential catalog
    ├── pages/                # File-based static routes
    │   ├── index.astro       # Home landing page
    │   ├── about.astro       # Professional background & education
    │   ├── projects.astro    # Complete project grid
    │   └── certificates.astro# Categorized certificate catalog page
    └── styles/
        └── global.css        # Custom CSS variables, base overrides, utility classes
```

---

## 2. Component Specifications & Interfaces

### 2.1 `Layout.astro`
* **Purpose**: Master HTML template establishing `<head>`, SEO meta descriptions, Fontshare CDN links, global CSS imports, `<Navigation />`, main content wrapper, and `<Footer />`.
* **Props**:
  ```ts
  interface Props {
    title?: string;
    description?: string;
  }
  ```

### 2.2 `Navigation.astro`
* **Purpose**: Sticky header bar (`sticky top-0 z-50 bg-white border-b border-black`).
* **Active State**: Calculates active route using `Astro.url.pathname` and applies `text-red font-bold` to active navigation items (`/`, `/about`, `/projects`, `/certificates`).

### 2.3 `ProjectCard.astro`
* **Purpose**: Renders project entries in either compact teaser mode or full detail mode.
* **Props**:
  ```ts
  interface Props {
    title: string;
    description: string;
    tags?: string[];
    href?: string;
    live?: string;
    image?: string;
    mainTech?: string;
    variant?: 'teaser' | 'full';
  }
  ```
* **Variants**:
  * `'teaser'`: Text-heavy card with title, description, and "View →" link.
  * `'full'`: Full card featuring project preview thumbnail image, tech tags, GitHub repository link, and optional live deployment URL.

### 2.4 `CertificateCard.astro`
* **Purpose**: Renders individual certificate credential cards with issuer logo badge, date, title, category tag, and direct PDF view action.
* **Props**:
  ```ts
  interface Props {
    title: string;
    issuer: string;
    date: string;
    file: string;
    category: string | string[];
  }
  ```

---

## 3. Data Flow & Content Management

Data is stored as typed TypeScript modules inside `src/data/`, providing complete separation of content from presentation:

1. **`src/data/site.ts`**:
   * Exports `person`: Identity, github username, avatar URL, tagline, meta description.
   * Exports `bio`: Recruiter-focused headline and summary paragraphs.
   * Exports `whatIDo`: Array of numbered skill statements.
   * Exports `education`: Typed array of `EducationEntry` records.

2. **`src/data/projects.ts`**:
   * Exports `projects`: Array of `Project` objects (SQL, Python, TypeScript, Astro, MERN).

3. **`src/data/certificates.ts`**:
   * Exports `certificates`: Catalog of `Certificate` objects mapping to PDF paths copied by build scripts.

---

## 4. Typography & CSS Styling Layer

### 4.1 Global Utility Classes (`src/styles/global.css`)
* `.headline`: Applies `font-display` (Khand), bold (700), uppercase, negative tracking (`tracking-display: -0.02em`).
* `.section-padding`: Standardizes vertical spacing across mobile (`py-12 px-6`) and desktop (`md:py-20 md:px-12`).
* `.container-content`: Centered wrapper constrained to `max-w-[1200px]`.
* `.btn-primary`: High-contrast Red CTA button (`bg-red text-white hover:bg-black transition-colors`).
* `.link-red`: Accent link style (`text-red hover:text-black transition-colors`).
* `.border-divider`: Standard 1px solid black border (`border-b border-black`).
