# Design System Specification (design.md) — Bhagath Pranav Portfolio

## 1. Design Philosophy & Editorial Rules

The design aesthetic of the **Bhagath Pranav Portfolio** is strictly **editorial, minimalist, and brutalist-adjacent**. It prioritizes extreme visual clarity, sharp contrast, generous whitespace, and immediate content scannability.

> [!CAUTION]
> **Strict Palette Rule**: The interface MUST ONLY use three colors: Black (`#000000`), White (`#FFFFFF`), and Red (`#FF1A1A`). Absolutely no grays, off-whites, drop shadows, color gradients, or parallax effects are permitted anywhere in the project.

---

## 2. Color Palette & Token Definitions

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   WHITE               BLACK               RED               │
│   #FFFFFF             #000000             #FF1A1A           │
│   Background / Text   Body Text / Borders CTAs / Hovers /   │
│   on Red              / Headlines         Active Nav        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

| Token Name | Hex Code | Tailwind Class | Primary Usage |
| :--- | :--- | :--- | :--- |
| `--color-white` | `#FFFFFF` | `bg-white`, `text-white` | Page background, button text on red |
| `--color-black` | `#000000` | `bg-black`, `text-black`, `border-black` | Body text, card borders, display headers |
| `--color-red` | `#FF1A1A` | `bg-red`, `text-red`, `border-red` | Primary CTAs, active route links, hover accents |

---

## 3. Typography System

Fonts are loaded asynchronously from Fontshare CDN in `Layout.astro`:
`https://api.fontshare.com/v2/css?f[]=switzer@400&f[]=khand@700&display=swap`

```
  KHAND 700 (DISPLAY HEADLINES)
  ABCDEFGHIJKLMNOPQRSTUVWXYZ
  1234567890

  Switzer 400 (Body Text & Metadata)
  abcdefghijklmnopqrstuvwxyz
  ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890
```

| Role | Font Family | Weight | CSS / Tailwind Class | Characteristics |
| :--- | :--- | :--- | :--- | :--- |
| **Display / Headlines** | Khand | 700 (Bold) | `font-display`, `.headline` | Uppercase, condensed, `tracking-[-0.02em]` |
| **Body & Content** | Switzer | 400 (Regular) | `font-body` | Clean sans-serif, standard line height |

---

## 4. Spacing, Borders & Layout Tokens

### 4.1 Layout Boundaries
* **Max Content Width**: `1200px` (`max-w-content` / `.container-content`).
* **Section Vertical Padding**: Minimum ~80px vertical spacing (`py-12 md:py-20`).
* **Section Horizontal Padding**: Mobile `px-6`, Desktop `md:px-12`.

### 4.2 Border Styling
* **Standard Border**: `1px solid #000000` (`border border-black`).
* **Card Hover State**: Border turns Red (`group-hover:border-red`).
* **Corner Radius**: Sharp square corners (`rounded-none` / 0px radius) across all cards, buttons, and containers to reinforce editorial precision.

### 4.3 Focus States & Accessibility
* **Focus Indicator**: High-contrast outline on keyboard navigation (`outline: 2px solid #FF1A1A`, `outline-offset: 2px`).

---

## 5. UI Components Guidelines

### 5.1 Primary Buttons (`.btn-primary`)
* **Base State**: Background `#FF1A1A` (Red), Text `#FFFFFF` (White), Khand uppercase display font, `px-6 py-3 border border-black`.
* **Hover State**: Background `#000000` (Black), Text `#FFFFFF` (White). Smooth color transition (`transition-colors duration-200`).

### 5.2 Project & Certificate Cards
* **Teaser Card**: 1px black border, padded text container, red accent text on link hover.
* **Full Card**: Image thumbnail block with 1px black border, tech badges formatted as red text tags, title in bold Khand uppercase, concise description, and external GitHub action button.
