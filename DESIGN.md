# Design System

## Color Palette

### Strategy: Restrained, dark-only

A single saturated emerald brand carries every interactive signal, a teal accent carries
section identity and decoration, on a cool near-black canvas with a violet atmospheric glow.

The app is **dark-only**: `<html class="dark">` is locked in `index.html` and there are no
`light:`/`dark:` branches anywhere — every value below is the one true value.

### Source of truth

All colors live in `src/index.css` under `@theme`. Components reference semantic tokens
only — never raw hex, never palette-scale utilities (`slate-*`, `emerald-*`, …), except in
the three documented cases under "Deliberate scale usage".

### Tokens

| Token | Value | Role |
|---|---|---|
| `--color-canvas` | `#020617` | Page background, image wells, deep insets |
| `--color-veil` | `#0e1015` | Intro overlay veil |
| `--color-surface` | `rgb(15 23 42 / 0.4)` | Card surface (translucent + blur) |
| `--color-panel` | `#0f172a` | Opaque panels: navbar, menus, tooltips, window chrome |
| `--color-panel-raised` | `#1e293b` | Raised UI: chips, secondary buttons, pills |
| `--color-ink` | `#f1f5f9` | Headings, high-emphasis text |
| `--color-ink-body` | `#e2e8f0` | Body copy |
| `--color-ink-quiet` | `#cbd5e1` | Subdued interactive text, chips, descriptions |
| `--color-muted` | `#94a3b8` | Secondary text, labels, descriptions (AA-safe) |
| `--color-faint` | `#64748b` | Decorative/tertiary only (line numbers, inactive dots) |
| `--color-line` | `rgb(255 255 255 / 0.1)` | Hairline borders on dark |
| `--color-line-strong` | `rgb(51 65 85 / 0.5)` | Emphasized borders: inputs, chips, secondary buttons |
| `--color-brand` | `#10b981` | Brand fills: primary buttons, tiles, focus ring |
| `--color-brand-ink` | `#34d399` | Brand as text/icon on dark, hovers, status dots |
| `--color-accent` | `#2dd4bf` | Section identity: icons, timelines, card hover borders |
| `--color-glow` | `#c084fc` | Atmospheric glow orbs, syntax keywords |
| `--color-danger` | `#f87171` | Error states |

#### Console sub-palette (GitHub-dark mimic — DevConsoleModal only)

`--color-console` `#0d1117` · `--color-console-bar` `#161b22` · `--color-console-line` `#30363d` ·
`--color-console-ink` `#8b949e` · `--color-console-bright` `#f0f6fc`

### Named shadows (brand halos)

| Token | Value | Used by |
|---|---|---|
| `--shadow-halo` | `0 16px 48px -16px rgb(45 212 191 / 0.35)` | Project card hover |
| `--shadow-halo-sm` | `0 10px 30px -10px rgb(45 212 191 / 0.35)` | Preview frame hover |
| `--shadow-halo-ring` | `0 0 16px -4px rgb(45 212 191 / 0.3)` | Timeline dots, education icon tile |
| `--shadow-halo-portrait` | `0 0 80px rgb(16 185 129 / 0.4)` | Hero portrait hover |

### Contrast rules

- Body/secondary text uses `text-muted` or lighter — placeholders, labels, and descriptions
  must hit ≥4.5:1 on their surface.
- `text-faint` is decorative only (line numbers, inactive pagination dots) — never for
  copy that must be read.
- Text on `bg-brand` uses `text-canvas` (~7.9:1).

### Deliberate scale usage (not drift)

- `text-amber-400` — string literals in the two code surfaces (syntax palette).
- Window traffic lights — `red/yellow/green-500` in `WindowChrome`, one component, one place.
- `src/features/skills/data.jsx` — per-technology brand colors (`sky-400`, `blue-500`, …)
  and `brandHex` values are third-party identity colors by design.

## Typography

- Body / sans: **"Space Mono"** (`--font-sans`), monospace stack fallback.
- Mono accents (`font-mono`): Tailwind default `ui-monospace` system stack.
- Fluid display sizes stay at call sites via `text-[clamp(...)]` on the hero.
- Hierarchy: `Heading` (h1–h4 sizes) for titles, `Text` (xs–2xl, variants
  `default`/`muted`/`accent`) for copy.

## Spacing & Layout

- Base unit: 4px.
- Section shell: `Section` component → `max-w-6xl` container, `py-20`, `px-4 sm:px-8`
  page gutters, min-h-screen. Width/vertical overrides via `containerClass`
  (e.g. `py-0 max-w-7xl` on Hero).
- Ambient orbs: `glow` utility + a tint (`glow bg-accent/15`).

## Z-index scale

`:root` custom properties — never hardcode stacking numbers:

| Token | Value | Used by |
|---|---|---|
| `--z-nav` | 50 | Fixed navbar |
| `--z-modal` | 100 | Preview + dev-console modals |
| `--z-intro` | 1000 | Intro overlay |

## Components

### Button (`components/ui/Button`)
- Variants: `primary` (filled brand), `secondary` (raised panel), `ghost` (panel + line),
  `soft` (quiet icon/link button).
- Sizes: `sm`, `md`, `lg`, `icon`, `icon-sm`.
- Shared states in the base: `transition-all duration-200`, `disabled:opacity-50`,
  `disabled:cursor-not-allowed`, `disabled:pointer-events-none`.

### Badge (`components/ui/Badge`)
- Variants: `default`/`status` (brand tint pill), `tag`/`skill` (panel chip).
- Sizes `xs`–`lg`, optional `dot` (pulsing brand-ink indicator).

### Card (`components/ui/Card`)
- `bg-surface backdrop-blur-md border border-line rounded-xl`, `transition-all duration-300`
  (cards transition shadow + transform on hover, so `all` is intentional here).

### Field (`components/ui/Field`)
- Label + input/textarea in one primitive. Label: mono, uppercase, `text-muted`.
- Control: `border-line-strong bg-canvas/60 text-ink-body placeholder:text-muted`,
  `focus:border-brand`, `transition-colors duration-200`, `disabled:opacity-50`.
- Focus ring itself comes from the global rule below.

### WindowChrome (`components/ui/WindowChrome`)
- Traffic-light header for browser/terminal frames. `tone="default"` (macOS lights) or
  `tone="github"` (console modal). `title`, optional `right` slot (close button).

### Focus (global, `src/index.css`)

```css
:focus-visible { outline: 2px solid var(--color-brand); outline-offset: 2px; }
```

Every interactive element gets the same brand focus ring — do not add per-component focus styles.

## Motion

- Color-only interactions (links, nav, fields): `transition-colors duration-200`.
- Buttons/cards/transform interactions: `transition-all duration-200` / `duration-300`.
- Entrance animations: `animate-fade-in`, `animate-zoom-in` (keyframes in `src/index.css`).
- Easing for entrances: `cubic-bezier(0.16, 1, 0.3, 1)`; stagger via per-item `delay`.
- Reduced motion: honor `prefers-reduced-motion` for any new animation.

## Responsive

- Breakpoints: 640 (sm), 768 (md), 1024 (lg), 1280 (xl).
- Touch targets ≥44px on primary navigation controls.
- Card grids: `grid-cols-2 sm:grid-cols-4 md:grid-cols-6` style auto-fit patterns per section.
