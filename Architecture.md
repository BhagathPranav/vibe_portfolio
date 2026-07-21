# Architecture Overview (Architecture.md) — Bhagath Pranav Portfolio

## 1. High-Level Architecture Diagram

The **Bhagath Pranav Portfolio** application uses a decoupled, data-driven static site generation (SSG) model. TypeScript content modules feed into Astro component templates, which compile into pure HTML, CSS, and static PDF assets for Cloudflare Edge delivery.

```mermaid
flowchart TD
    subgraph Data_Layer ["1. Data Layer (src/data/)"]
        D1[site.ts — Identity & Bio]
        D2[projects.ts — GitHub Repos]
        D3[certificates.ts — PDF Catalog]
    end

    subgraph Static_Assets ["2. Static Assets Layer"]
        A1[public/images/ — Preview Images]
        A2[Certificates/ — Raw PDF Files]
        Script[scripts/copy-certificates.js]
        A2 -->|Sync on Build| A3[public/certificates/]
    end

    subgraph Component_Layer ["3. Astro Component Engine (src/components/ & pages/)"]
        Layout[Layout.astro Shell & Fontshare CDN]
        Nav[Navigation.astro Header]
        Footer[Footer.astro]
        P1[index.astro Page]
        P2[about.astro Page]
        P3[projects.astro Page]
        P4[certificates.astro Page]

        Layout --> Nav
        Layout --> Footer
        P1 --> Layout
        P2 --> Layout
        P3 --> Layout
        P4 --> Layout
    end

    subgraph Styling_Engine ["4. PostCSS + Tailwind Engine"]
        CSS[src/styles/global.css]
        TC[tailwind.config.mjs Tokens]
        PC[postcss.config.mjs]
        TC --> PC
        CSS --> PC
    end

    Data_Layer --> Component_Layer
    Static_Assets --> Component_Layer
    Styling_Engine --> Component_Layer

    subgraph Build_Output ["5. Compiled Production Bundle (dist/)"]
        H1[dist/index.html]
        H2[dist/about/index.html]
        H3[dist/projects/index.html]
        H4[dist/certificates/index.html]
        PDF[dist/certificates/*.pdf]
    end

    Component_Layer -->|astro build| Build_Output

    subgraph CDN ["6. Deployment Target (Cloudflare Pages Edge)"]
        CF[Cloudflare Edge Network]
    end

    Build_Output -->|wrangler pages deploy| CF
```

---

## 2. Architectural Design Decisions & Rationale

### 2.1 Astro 6 Static Generator (`output: 'static'`)
* **Decision**: Use Astro set exclusively to static output mode.
* **Rationale**: Eliminates cold starts, database query latencies, server vulnerabilities, and hosting costs. Delivers maximum performance for portfolio presentation.

### 2.2 Direct PostCSS Tailwind CSS v3 Integration
* **Decision**: Integrate Tailwind CSS v3 directly through PostCSS (`postcss.config.mjs`) instead of using `@astrojs/tailwind`.
* **Rationale**: Bypasses the peer dependency version gap between Astro 6 and the official Astro Tailwind integration plugin while keeping build output fast and reliable.

### 2.3 Standalone Pre-Build Asset Synchronization Hook
* **Decision**: Run `node scripts/copy-certificates.js` before `astro build` and `astro dev`.
* **Rationale**: Maintains a clean source-of-truth directory `/Certificates` in root while seamlessly syncing PDF assets into `/public/certificates/` for Astro's static asset router.

### 2.4 Strict 3-Color Editorial Visual Palette
* **Decision**: Restrict color palette to Black (`#000000`), White (`#FFFFFF`), and Red (`#FF1A1A`).
* **Rationale**: Establishes a bold editorial aesthetic that highlights data analytics capabilities and clean typography without relying on complex UI libraries or visual fluff.

---

## 3. Data & Presentation Decoupling

The repository enforces a strict unidirectional data pipeline:

1. **Content Definition**: Data is maintained in typed TypeScript files (`site.ts`, `projects.ts`, `certificates.ts`).
2. **Template Ingestion**: Astro pages load data modules during static build time (`Astro.glob` or standard ESM imports).
3. **Markup Generation**: Components render semantic HTML strings containing predefined CSS classes.
4. **Zero Runtime Hydration**: HTML is rendered directly to the browser without client JS runtime hydration.
