# Portfolio

Personal portfolio site built with **React 19 + Vite 8 + TypeScript 7 + Tailwind CSS 4**.

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server with HMR |
| `npm run build` | Type-check, then build for production |
| `npm run typecheck` | Run `tsc --noEmit` |
| `npm run lint` | Run oxlint |
| `npm run preview` | Preview the production build |

## Stack

- React 19, Vite 8, TypeScript 7 in `strict` mode (`noUncheckedIndexedAccess`, `verbatimModuleSyntax`)
- Tailwind CSS 4 driven by semantic design tokens in `src/index.css`
- Framer Motion, Swiper, lucide-react
- oxlint for static analysis

## Structure

```
src/
├── App.tsx             # Section composition
├── main.tsx            # Entry point + providers
├── components/
│   ├── ui/             # Design-system primitives: Button, Badge, Card, Field, Heading, Text, WindowChrome
│   └── layout/         # Section, SectionHeader, Navbar, IntroOverlay, ThemeToggle
├── features/           # One folder per page section: components/ + typed data + index.ts barrel
├── hooks/              # useEscapeKey, useSnapCarousel
├── config/             # Navigation, environment access
├── store/              # Theme context + useTheme
├── utils/              # cn()
└── index.css           # Design tokens (@theme)
```

## Conventions

- Cross-module imports use the `@/*` alias: `import { Button } from "@/components/ui/Button"`.
- Every action trigger renders through `Button`; every input renders through `Field`. Styling is applied via the `variant`, `size` and `className` props — primitives themselves are never edited to fix a call site.
- Colors come from semantic tokens only (`bg-brand`, `text-muted`, `border-line`). No raw hex outside the documented exceptions in `DESIGN.md`.
- Data lives next to the section that renders it and is typed (`features/*/data.ts`).
- `npm run build` type-checks before bundling.

See [DESIGN.md](./DESIGN.md) for the design system and [PRODUCT.md](./PRODUCT.md) for product intent.
