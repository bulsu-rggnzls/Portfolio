<div align="center">

# Argie Gonzales — Frontend Developer Portfolio

Personal developer portfolio engineered with **React 19**, **Vite 8**, **TypeScript 7**, and **Tailwind CSS 4**. Designed with a restrained, dark-only developer aesthetic, high-craft motion, accessibility compliance, and live GitHub contributions activity.

[![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-emerald?style=flat-square)](LICENSE)

[Live Demo](https://bulsu-rggnzls.github.io/Portfolio/) · [Report Bug](https://github.com/bulsu-rggnzls/Portfolio/issues) · [Request Feature](https://github.com/bulsu-rggnzls/Portfolio/issues)

</div>

---

## 🌟 Highlights & Features

- **⚡ Modern Stack Architecture**: Built on React 19 + TypeScript strict mode (`noUncheckedIndexedAccess`, `verbatimModuleSyntax`) with lightning-fast Vite 8 builds.
- **🎨 Custom Design System**: Dark-only palette driven by semantic design tokens defined in Tailwind CSS 4 (`@theme`), featuring emerald (`#10b981`) and teal (`#2dd4bf`) accents on deep slate surfaces.
- **📈 Live GitHub Activity Heatmap**: Interactive contributions calendar fetching live data from `@bulsu-rggnzls` with year filters (`Last Year`, `2026`, `2025`, `2024`, `2023`), weekday labels, and mobile scroll support.
- **💼 Interactive Projects Showcase**: Custom carousel with touch/mouse snap navigation, full-screen image preview modal with macOS-style window chrome, and quick links to live demos and source repos.
- **💻 Dev Console Modal**: An interactive interactive developer console / code inspector Easter egg (`about.js`) accessible straight from the hero section.
- **📬 Contact Integration**: Fully validated contact form with real-time feedback wired to Web3Forms API.
- **♿ Accessibility & Inclusion**: WCAG AA compliant contrast ratios, visible focus indicators, reduced motion fallbacks, and mobile touch targets $\ge 44\text{px}$.

---

## 🛠️ Tech Stack

### Core
- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 8](https://vitejs.dev/)
- **Language:** [TypeScript 7](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)

### UI & Animations
- **Motion:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Carousels & Sliders:** [Swiper](https://swiperjs.com/)
- **Activity Heatmap:** [react-github-calendar](https://github.com/grubersjoe/react-github-calendar)
- **Utilities:** `clsx`, `tailwind-merge`

### Tooling & Quality
- **Linter:** [Oxlint](https://oxc.rs/)
- **Forms:** [Web3Forms API](https://web3forms.com/)

---

## 📂 Project Structure

```text
Portfolio/
├── public/                  # Static assets & resume documents
│   └── assets/
│       ├── images/          # Project mockups and portrait
│       └── Gonzales-Resume.pdf
├── src/
│   ├── components/
│   │   ├── layout/          # Layout wrappers (Navbar, Section, SectionHeader, IntroOverlay)
│   │   └── ui/              # Design-system primitives (Badge, Button, Card, Field, Heading, Text, etc.)
│   ├── config/              # Navigation links and environment variable contracts
│   ├── features/            # Feature-driven modules (components, data, and index barrel)
│   │   ├── activity/        # GitHub Activity heatmap section
│   │   ├── certifications/  # Certifications carousel & credentials
│   │   ├── contact/         # Contact form & social connections
│   │   ├── education/       # Academic background & timeline
│   │   ├── hero/            # Hero section & DevConsoleModal ("about.js")
│   │   ├── projects/        # Featured projects carousel & zoom preview
│   │   └── skills/          # Tech stack grid & capability highlights
│   ├── hooks/               # Custom hooks (useEscapeKey, useSnapCarousel)
│   ├── store/               # Theme context providers
│   ├── utils/               # Helper utilities (cn for Tailwind class merging)
│   ├── App.tsx              # Root section composition
│   ├── index.css            # Tailwind 4 @theme token declarations
│   └── main.tsx             # Application bootstrap
├── DESIGN.md                # Comprehensive design tokens, colors & typography guide
├── PRODUCT.md               # Product intent, positioning & user persona
└── vite.config.ts           # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher) or `pnpm` / `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bulsu-rggnzls/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory:
   ```env
   VITE_WEB3FORMS_KEY=your_web3forms_access_key_here
   ```
   > *Note: Get a free key at [web3forms.com](https://web3forms.com) to enable email forwarding on the contact form.*

4. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

---

## 📜 Available Scripts

| Script | Command | Purpose |
|---|---|---|
| **dev** | `npm run dev` | Runs the local development server with Hot Module Replacement (HMR). |
| **build** | `npm run build` | Runs TypeScript type checking (`tsc --noEmit`), followed by the Vite production build. |
| **typecheck** | `npm run typecheck` | Validates TypeScript types across the entire project without emitting output files. |
| **lint** | `npm run lint` | Fast static analysis via Oxlint. |
| **preview** | `npm run preview` | Locally serves the built production bundle from `dist/` for inspection. |

---

## 📐 Architecture & Conventions

- **Feature-First Architecture:** Each page section is isolated under `src/features/<feature-name>` containing its own component code, typed static data (`data.ts`), and clean exports via `index.ts`.
- **Design System Primitives:** All action targets use `<Button>`, all inputs use `<Field>`, and all containers use `<Card>` with polymorphic variants (`primary`, `secondary`, `soft`, `ghost`).
- **Semantic Design Tokens:** No arbitrary colors or unapproved raw hex codes. All colors derive from semantic variables (`bg-canvas`, `text-ink`, `border-line`, `bg-panel-raised`). See [DESIGN.md](./DESIGN.md) for full token specs.
- **Strict TypeScript:** Type safety is strictly enforced across module boundaries using the `@/*` path alias with zero implicit `any`.

---

## 👤 Author

**Argie Gonzales**
- GitHub: [@bulsu-rggnzls](https://github.com/bulsu-rggnzls)
- Email: [rggonzales.work@gmail.com](mailto:rggonzales.work@gmail.com)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
