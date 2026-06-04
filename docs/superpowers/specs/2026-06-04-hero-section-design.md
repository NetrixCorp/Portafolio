# Hero Section — NETRIX Portafolio
**Date:** 2026-06-04  
**Status:** Approved  
**Component:** `components/sections/Hero.tsx`

---

## Overview

Full-viewport Hero section for the NETRIX portfolio. Left column holds copy + CTAs; right column holds an animated pipeline visualization (WhatsApp → Bot → CRM). Stacks vertically on mobile.

---

## Layout

| Breakpoint | Behavior |
|---|---|
| `375px` (mobile) | Single column, text first, pipeline below |
| `768px` (md) | Single column, max-width 600px centered |
| `1024px` (lg) | Two columns 50/50, text left, pipeline right |
| `1440px` (xl) | Two columns, max-width 1280px container |

Section height: `min-h-[calc(100vh-72px)]` (full viewport minus sticky navbar).

---

## constants.ts Changes

Three fields added/updated in `HERO`:

```ts
HERO.subheadline   = "Soluciones digitales para PyMEs en Bogotá, Colombia"
HERO.description   = "Automatizaciones, bots de WhatsApp, landing pages y software a medida. Todo lo que tu negocio necesita para crecer — sin tecnicismos, sin enredos."
HERO.servicesLine  = "Landing pages · Bots WhatsApp · Automatización · Software a medida"
```

Badge text is hardcoded as a constant inside Hero.tsx (not in HERO object): `"Agencia digital · Bogotá, Colombia"`.

---

## Left Column — Elements (top to bottom)

| Element | Tag | Source | Typography |
|---|---|---|---|
| Badge | `<span>` | `"Agencia digital · Bogotá, Colombia"` | `font-mono text-xs text-netrix-gray border border-netrix-border rounded-sm px-3 py-1` |
| H1 line 1 | `<h1>` block | `"Hacemos que tu negocio se vea"` | `font-display text-[52px] lg:text-[80px] leading-none text-white` |
| H1 "grande" | `<span>` | `"grande"` | same font, `text-netrix-red` |
| H1 line 3 | `<span>` block | `"y venda más"` | same font, `text-white` |
| Subheadline | `<p>` | `HERO.subheadline` | `font-body text-base lg:text-lg text-netrix-gray` |
| Description | `<p>` | `HERO.description` | `font-body text-sm text-netrix-gray leading-relaxed` |
| Services | `<p>` | `HERO.servicesLine` | `font-heading font-medium text-[13px] text-netrix-gray tracking-wide` |
| CTA primary | `Button` | `HERO.ctaPrimary` → `HERO.ctaPrimaryLink` | `variant="primary" size="lg"` |
| CTA secondary | `Button` | `HERO.ctaSecondary` → `HERO.ctaSecondaryLink` | `variant="secondary" size="lg"` |

H1 rule: `HERO.headline` from constants is split into 3 visual lines. "grande" is identified by word index and wrapped in `<span className="text-netrix-red">`.

---

## Right Column — Pipeline Visual

Card container: `bg-netrix-card border border-netrix-border rounded-lg p-6`  
Header label: `>_ flujo en vivo` — `font-mono text-xs text-netrix-gray`

Three nodes in a horizontal row with animated connectors:

```
[WhatsApp]  ──────►  [Bot NETRIX]  ──────►  [CRM]
```

### Node anatomy
- Lucide icon (MessageCircle / Bot / Database)
- Label below icon: `font-heading font-semibold text-sm text-white`
- Status dot: `w-2 h-2 rounded-full` — gray when idle, green when active
- Active state: `border-netrix-red` + `box-shadow: 0 0 20px rgba(255,46,46,0.25)`

### Connector
- `<div>` with `h-px bg-netrix-border` baseline
- Animated fill: nested `<motion.div>` with `scaleX: 0→1`, `originX: 0`, using `lineGrow` variant from `animations.ts`

### Loop sequence (interval-driven with `useEffect`)
| Time | Action |
|---|---|
| 0s | Node 1 (WhatsApp) activates |
| 0.5s | Connector 1 animates (0.8s duration) |
| 1.3s | Node 2 (Bot) activates |
| 1.8s | Connector 2 animates |
| 2.6s | Node 3 (CRM) activates |
| 3.5s | Reset → loop |

State: `activeStep: 0 | 1 | 2 | 3` — drives conditional classes on each node and connector.

---

## Animations (from `lib/animations.ts`)

| Element | Variant | Delay source |
|---|---|---|
| Badge | `fadeIn` | `heroSequence.badge.delay` (0s) |
| H1 line 1 | `fadeUp` | `heroSequence.headline1.delay` (0.1s) |
| H1 line 3 | `fadeUp` | `heroSequence.headline2.delay` (0.2s) |
| H1 "grande" | `fadeUp` | `heroSequence.headlineRed.delay` (0.3s) |
| Subheadline + desc | `fadeUp` | `heroSequence.subheadline.delay` (0.4s) |
| Services line | `fadeUp` | `heroSequence.services.delay` (0.5s) |
| CTAs row | `fadeUp` | `heroSequence.ctas.delay` (0.6s) |
| Pipeline card | `scaleIn` | `heroSequence.visual.delay` (0.3s) |

All animations gated on `useReducedMotion()` — if true, render without motion wrappers.

---

## Accessibility

- `<section aria-label="Hero NETRIX">` wrapping element
- `<h1>` is the only H1 on the page (layout.tsx confirms this)
- `role="img" aria-label="Flujo automatizado: WhatsApp → Bot → CRM"` on pipeline visual
- All `Button` components already have `focus-visible` ring from `Button.tsx`
- Pipeline interval cleared on unmount via `useEffect` cleanup

---

## Files Touched

1. `lib/constants.ts` — update/add 3 HERO fields
2. `components/sections/Hero.tsx` — new file
3. `app/page.tsx` — uncomment `<Hero />` and import

---

## Out of Scope

- No image assets (pipeline is pure CSS/SVG/motion)
- No scroll-triggered animation (Hero is above fold, animates on mount)
- No form or modal — CTAs are anchor links
