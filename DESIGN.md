# Design System

## Color Palette

### Strategy: Restrained

A single saturated teal primary on pure white, with a warm copper accent providing signal against the cool primary.

### Tokens (OKLCH)

```css
--color-bg: oklch(1.000 0.000 0);           /* pure white */
--color-surface: oklch(0.965 0.005 230);     /* near-white with cool tint */
--color-ink: oklch(0.145 0.010 260);         /* near-black with cool undertone */
--color-primary: oklch(0.620 0.140 188);     /* deep teal — confident, not electric */
--color-primary-light: oklch(0.880 0.060 188); /* pale teal for tints */
--color-accent: oklch(0.620 0.120 55);       /* warm copper — distinct from teal */
--color-accent-light: oklch(0.900 0.050 55); /* pale copper for tints */
--color-muted: oklch(0.520 0.015 260);       /* cool gray — secondary text */
--color-border: oklch(0.900 0.008 240);      /* subtle cool border */
```

### Dark Mode

```css
--color-bg: oklch(0.100 0.008 260);          /* deep blue-black */
--color-surface: oklch(0.155 0.010 260);     /* slightly lifted */
--color-ink: oklch(0.935 0.005 240);         /* off-white text */
--color-primary: oklch(0.720 0.120 188);     /* lighter teal for dark bg */
--color-primary-light: oklch(0.250 0.040 188); /* dark teal tint */
--color-accent: oklch(0.720 0.100 55);       /* lighter copper */
--color-accent-light: oklch(0.250 0.040 55); /* dark copper tint */
--color-muted: oklch(0.600 0.010 240);       /* lighter muted */
--color-border: oklch(0.220 0.012 260);      /* subtle border */
```

## Typography

### Font Stack

Display: "Instrument Serif", Georgia, "Times New Roman", serif (headlines only)
Body: "Inter", system-ui, -apple-system, sans-serif
Mono: "JetBrains Mono", "Fira Code", ui-monospace, monospace

### Type Scale (fluid clamp for headings, fixed rem for body)

| Role | Size | Weight | Line-height | Letter-spacing |
|------|------|--------|-------------|----------------|
| display | clamp(2.5rem, 5vw + 1rem, 4.5rem) | 400 | 1.05 | -0.025em |
| h1 | clamp(2rem, 3vw + 0.75rem, 3rem) | 600 | 1.1 | -0.02em |
| h2 | clamp(1.5rem, 2vw + 0.5rem, 2rem) | 600 | 1.2 | -0.015em |
| h3 | 1.25rem | 600 | 1.3 | -0.01em |
| body-lg | 1.125rem | 400 | 1.65 | 0 |
| body | 1rem | 400 | 1.65 | 0 |
| body-sm | 0.875rem | 400 | 1.55 | 0 |
| caption | 0.75rem | 500 | 1.4 | 0.04em |

### Hierarchy Rules

- Display and h1 use Instrument Serif for brand voice
- h2-h3 use Inter semibold
- Body text uses Inter regular at 1rem minimum
- Muted text uses --color-muted
- text-wrap: balance on headings, text-wrap: pretty on prose

## Spacing

Base unit: 4px. Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128.

Section padding: clamp(3rem, 8vw, 7rem) vertical, 1.5rem horizontal (mobile) / max-w-6xl centered (desktop).

## Components

### Buttons
- Primary: filled teal, white text, 44px min-height, 12px radius
- Secondary: outlined, teal border, teal text, transparent bg
- Ghost: no border, teal text, transparent bg

### Badges
- Filled: teal bg, white text, pill radius (9999px), compact padding
- Outlined: teal border, teal text

### Cards
- bg: --color-surface
- border: 1px solid --color-border
- radius: 12px
- hover: subtle elevation (0 8px 30px -12px rgba(0,0,0,0.12))
- transition: 250ms cubic-bezier(0.25, 1, 0.5, 1)

## Motion

- Easing: cubic-bezier(0.25, 1, 0.5, 1) for most transitions
- Duration: 200-300ms for state changes, 500-800ms for entrances
- Stagger: 60ms between sibling items
- Reduced motion: respect prefers-reduced-motion
- Entrance: translateY(12px) + opacity → 0 + translateY(0) + opacity(1)
- Hover on cards: translateY(-2px) + shadow increase

## Layout

- Max content width: 72rem (1152px)
- Grid: repeat(auto-fit, minmax(280px, 1fr)) for card grids
- Responsive breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
