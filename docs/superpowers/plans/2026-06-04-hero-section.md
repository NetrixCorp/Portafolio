# Hero Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the full-viewport Hero section for NETRIX portafolio with animated pipeline visual and staggered entry animations.

**Architecture:** Single `Hero.tsx` client component with three internal sub-components (`HeroBadge`, `HeroHeadline`, `PipelineVisual`). Left column holds copy + CTAs; right column holds an interval-driven 3-node pipeline animation. Layout stacks on mobile, splits 50/50 at `lg`.

**Tech Stack:** Next.js 14 App Router, Tailwind CSS (netrix-* tokens), motion/react, Lucide React, existing `Button` component, animation tokens from `lib/animations.ts`, text from `lib/constants.ts`.

---

## File Map

| Action | Path | Responsibility |
|---|---|---|
| Modify | `lib/constants.ts` | Add `HERO.description`, `HERO.servicesLine`; update `HERO.subheadline` |
| Create | `components/sections/Hero.tsx` | Full Hero section with all sub-components |
| Modify | `app/page.tsx` | Import Hero and render it |

---

## Task 1: Update `lib/constants.ts`

**Files:**
- Modify: `lib/constants.ts` (lines 29–37, the HERO block)

- [ ] **Step 1: Open `lib/constants.ts` and replace the HERO block**

Find this block (lines 29–37):
```ts
export const HERO = {
  tagline: 'Tu negocio merece una presencia que vende.',
  headline: 'Hacemos que tu negocio se vea grande y venda más.',
  subheadline: 'Automatizaciones, bots de WhatsApp, landing pages y software a medida. Todo lo que tu negocio necesita para crecer — sin tecnicismos, sin enredos.',
  ctaPrimary: 'Agenda tu diagnóstico',
  ctaSecondary: 'Ver nuestros proyectos',
  ctaPrimaryLink: '#contact',
  ctaSecondaryLink: '#portfolio',
} as const;
```

Replace with:
```ts
export const HERO = {
  tagline:          'Tu negocio merece una presencia que vende.',
  headline:         'Hacemos que tu negocio se vea grande y venda más.',
  subheadline:      'Soluciones digitales para PyMEs en Bogotá, Colombia',
  description:      'Automatizaciones, bots de WhatsApp, landing pages y software a medida. Todo lo que tu negocio necesita para crecer — sin tecnicismos, sin enredos.',
  servicesLine:     'Landing pages · Bots WhatsApp · Automatización · Software a medida',
  ctaPrimary:       'Agenda tu diagnóstico',
  ctaSecondary:     'Ver nuestros proyectos',
  ctaPrimaryLink:   '#contact',
  ctaSecondaryLink: '#portfolio',
} as const;
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors. If you see `Property 'description' does not exist`, you missed a field — re-check the block above.

- [ ] **Step 3: Commit**

```bash
git add lib/constants.ts
git commit -m "feat(constants): add HERO.description, HERO.servicesLine; update subheadline"
```

---

## Task 2: Create `components/sections/Hero.tsx`

**Files:**
- Create: `components/sections/Hero.tsx`

This is the main deliverable. Implement all sub-components in the same file (they are internal to Hero and not exported).

- [ ] **Step 1: Create the file with imports and types**

Create `components/sections/Hero.tsx`:

```tsx
'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { MessageCircle, Bot, Database, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { HERO } from '@/lib/constants'
import { fadeIn, fadeUp, scaleIn, heroSequence, ease } from '@/lib/animations'

// Shared prop — passed from Hero to avoid re-calling the hook in sub-components
type ReducedMotionProp = { prefersReduced: boolean | null }
```

- [ ] **Step 2: Add the HeroBadge sub-component**

Append to `components/sections/Hero.tsx`:

```tsx
// ============================================================
// BADGE
// ============================================================

function HeroBadge({ prefersReduced }: ReducedMotionProp) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={
        prefersReduced
          ? { duration: 0 }
          : { duration: 0.4, delay: heroSequence.badge.delay }
      }
    >
      <span className="inline-flex items-center gap-1.5 border border-netrix-border rounded-sm px-3 py-1 font-mono text-xs text-netrix-gray">
        <MapPin size={11} className="text-netrix-red" aria-hidden="true" />
        Agencia digital · Bogotá, Colombia
      </span>
    </motion.div>
  )
}
```

- [ ] **Step 3: Add the HeroHeadline sub-component**

Append to `components/sections/Hero.tsx`:

```tsx
// ============================================================
// HEADLINE — H1 split: "grande" en rojo
// Splits HERO.headline around the word "grande" at runtime so
// the word receives its own color span while text stays in constants.
// ============================================================

function HeroHeadline({ prefersReduced }: ReducedMotionProp) {
  const [before, after] = HERO.headline.split('grande')

  const lineMotion = (delay: number) => ({
    variants: fadeUp,
    initial: 'hidden' as const,
    animate: 'visible' as const,
    transition: prefersReduced
      ? { duration: 0 }
      : { duration: 0.5, ease, delay },
  })

  return (
    <h1 className="font-display leading-[1] tracking-[0.02em]">
      <motion.span
        className="block text-white text-[52px] lg:text-[80px]"
        {...lineMotion(heroSequence.headline1.delay)}
      >
        {before.trim()}
      </motion.span>
      <motion.span
        className="block text-netrix-red text-[52px] lg:text-[80px]"
        {...lineMotion(heroSequence.headlineRed.delay)}
      >
        grande
      </motion.span>
      <motion.span
        className="block text-white text-[52px] lg:text-[80px]"
        {...lineMotion(heroSequence.headline2.delay)}
      >
        {after.trim().replace(/\.$/, '')}.
      </motion.span>
    </h1>
  )
}
```

- [ ] **Step 4: Add the PipelineVisual sub-component**

Append to `components/sections/Hero.tsx`:

```tsx
// ============================================================
// PIPELINE VISUAL
// Three nodes animate in sequence on a repeating interval.
// step 0 → WhatsApp active
// step 1 → connector 1 fills, Bot active
// step 2 → connector 2 fills, CRM active
// ============================================================

const NODES = [
  { id: 'whatsapp', label: 'WhatsApp',   Icon: MessageCircle },
  { id: 'bot',      label: 'Bot NETRIX', Icon: Bot },
  { id: 'crm',      label: 'CRM',        Icon: Database },
] as const

function PipelineVisual({ prefersReduced }: ReducedMotionProp) {
  const [step, setStep] = useState(prefersReduced ? 2 : 0)

  useEffect(() => {
    if (prefersReduced) {
      setStep(2)
      return
    }

    const ts: ReturnType<typeof setTimeout>[] = []

    function cycle() {
      setStep(0)
      ts.push(setTimeout(() => setStep(1), 1300))
      ts.push(setTimeout(() => setStep(2), 2600))
      ts.push(setTimeout(cycle,            3800))
    }

    cycle()
    return () => ts.forEach(clearTimeout)
  }, [prefersReduced])

  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      transition={
        prefersReduced
          ? { duration: 0 }
          : { duration: 0.45, ease, delay: heroSequence.visual.delay }
      }
      role="img"
      aria-label="Flujo automatizado: WhatsApp → Bot NETRIX → CRM"
      className="bg-netrix-card border border-netrix-border rounded-lg p-6 w-full"
    >
      {/* Header */}
      <p className="font-mono text-xs text-netrix-gray mb-6" aria-hidden="true">
        <span className="text-netrix-red mr-1">›_</span>
        flujo en vivo
      </p>

      {/* Nodes + connectors */}
      <div className="flex items-center">
        {NODES.map((node, i) => {
          const isActive = step >= i
          const { Icon } = node

          return (
            <div key={node.id} className="flex items-center flex-1 min-w-0">
              {/* Node card */}
              <div
                className={[
                  'flex flex-col items-center gap-2 p-3 sm:p-4 rounded-md border',
                  'transition-all duration-300 flex-shrink-0',
                  isActive
                    ? 'border-netrix-red shadow-[0_0_20px_rgba(255,46,46,0.18)]'
                    : 'border-netrix-border',
                ].join(' ')}
              >
                <Icon
                  size={22}
                  strokeWidth={1.5}
                  className={isActive ? 'text-netrix-red' : 'text-netrix-gray-dark'}
                  aria-hidden="true"
                />
                <span className="font-heading font-semibold text-xs text-white whitespace-nowrap">
                  {node.label}
                </span>
                {/* Status dot */}
                <span
                  className={[
                    'w-2 h-2 rounded-full transition-colors duration-300',
                    isActive ? 'bg-green-500' : 'bg-netrix-gray-dark',
                  ].join(' ')}
                  aria-hidden="true"
                />
              </div>

              {/* Connector — not rendered after the last node */}
              {i < NODES.length - 1 && (
                <div className="flex-1 relative h-px mx-2 bg-netrix-border overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-netrix-red origin-left"
                    animate={{ scaleX: step > i ? 1 : 0 }}
                    transition={
                      step === 0
                        ? { duration: 0.05 }
                        : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                    }
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Footer stat */}
      <div className="mt-6 pt-4 border-t border-netrix-border flex items-center justify-between">
        <span className="font-mono text-[11px] text-netrix-gray-dark">
          respuesta automática
        </span>
        <span className="font-mono text-[11px] text-netrix-red">&lt; 0.3s</span>
      </div>
    </motion.div>
  )
}
```

- [ ] **Step 5: Add the Hero export**

Append to `components/sections/Hero.tsx`:

```tsx
// ============================================================
// HERO (exported)
// ============================================================

export function Hero() {
  const prefersReduced = useReducedMotion()

  const fadeItem = (delay: number) => ({
    variants:   fadeUp,
    initial:    'hidden'  as const,
    animate:    'visible' as const,
    transition: prefersReduced
      ? { duration: 0 }
      : { duration: 0.5, ease, delay },
  })

  return (
    <section
      aria-label="Hero NETRIX"
      className="bg-netrix-black min-h-[calc(100vh-72px)] flex items-center"
    >
      <div className="container-netrix section-padding w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left column: copy + CTAs ───────────────────── */}
          <div className="flex flex-col gap-6">
            <HeroBadge prefersReduced={prefersReduced} />

            <HeroHeadline prefersReduced={prefersReduced} />

            {/* Subheadline + description */}
            <motion.div
              className="flex flex-col gap-2"
              {...fadeItem(heroSequence.subheadline.delay)}
            >
              <p className="font-body text-base lg:text-lg text-netrix-gray">
                {HERO.subheadline}
              </p>
              <p className="font-body text-sm text-netrix-gray leading-relaxed">
                {HERO.description}
              </p>
            </motion.div>

            {/* Services line */}
            <motion.p
              className="font-heading font-medium text-[13px] text-netrix-gray tracking-wide"
              {...fadeItem(heroSequence.services.delay)}
            >
              {HERO.servicesLine}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3 pt-2"
              {...fadeItem(heroSequence.ctas.delay)}
            >
              <Button href={HERO.ctaPrimaryLink} variant="primary" size="lg">
                {HERO.ctaPrimary}
              </Button>
              <Button href={HERO.ctaSecondaryLink} variant="secondary" size="lg">
                {HERO.ctaSecondary}
              </Button>
            </motion.div>
          </div>

          {/* ── Right column: pipeline ─────────────────────── */}
          <div className="w-full lg:pl-8">
            <PipelineVisual prefersReduced={prefersReduced} />
          </div>

        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 6: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors. Common issues:
- `Property 'description' does not exist on typeof HERO` → Task 1 wasn't completed yet.
- `Cannot find module 'motion/react'` → run `npm install` first.

- [ ] **Step 7: Commit**

```bash
git add components/sections/Hero.tsx
git commit -m "feat(hero): add Hero section with pipeline visual and staggered animations"
```

---

## Task 3: Wire `Hero` into `app/page.tsx`

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace the placeholder content in `app/page.tsx`**

Current file content:
```tsx
export default function Home() {
  return (
    <>
      {/* Secciones se integran aquí en orden */}
      {/* <Hero /> */}
      ...
      <section className="min-h-screen flex items-center justify-center container-netrix">
        ...
      </section>
    </>
  )
}
```

Replace with:
```tsx
import { Hero } from '@/components/sections/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Servicios /> */}
      {/* <Proceso /> */}
      {/* <CasosDeExito /> */}
      {/* <PorQueNetrix /> */}
      {/* <SobreNosotros /> */}
      {/* <Contacto /> */}
    </>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat(page): integrate Hero section"
```

---

## Task 4: Visual Verification

**Goal:** Confirm all visual requirements from the spec are met in the browser.

- [ ] **Step 1: Start the dev server**

```bash
npm run dev
```

Open `http://localhost:3000` in a browser.

- [ ] **Step 2: Mobile verification (375px)**

Open DevTools → set viewport to 375px wide. Verify:
- [ ] Badge appears first, single line, mono font, small border
- [ ] H1 displays in 3 visual lines: line 1 white, "grande" red, "y venda más." white
- [ ] Font is Bebas Neue (display font) at ~52px
- [ ] Subheadline + description below H1, gray text
- [ ] Services line below description, smaller gray text with dots
- [ ] Two buttons stacked or wrapping — primary red, secondary ghost white border
- [ ] Pipeline visual below CTAs, full width, card with dark background
- [ ] Three nodes visible: WhatsApp, Bot NETRIX, CRM with icons below

- [ ] **Step 3: Desktop verification (1280px)**

Set viewport to 1280px. Verify:
- [ ] Two-column 50/50 layout — text left, pipeline right
- [ ] H1 at ~80px, still 3 visual lines
- [ ] Pipeline card centered vertically in its column
- [ ] Connector lines visible between nodes

- [ ] **Step 4: Animation verification**

Reload the page (`Cmd/Ctrl + R`). Verify in order:
- [ ] Badge fades in immediately (0ms)
- [ ] H1 lines stagger up one by one (~100ms apart)
- [ ] Pipeline card scales in with a slight pop
- [ ] Subheadline, services, and CTAs fade up after H1
- [ ] Pipeline nodes: node 1 lights up on mount → connector 1 fills → node 2 lights → connector 2 fills → node 3 lights → pauses → resets and loops

- [ ] **Step 5: Accessibility spot-check**

In browser DevTools → Accessibility tree. Verify:
- [ ] `<section>` has label "Hero NETRIX"
- [ ] `<h1>` is present and contains the full headline text
- [ ] Pipeline card has `role="img"` with descriptive label
- [ ] Both buttons are focusable and show a red outline ring on focus (Tab key)

- [ ] **Step 6: Reduced motion**

In DevTools → Rendering → Emulate CSS media feature `prefers-reduced-motion: reduce`. Reload. Verify:
- [ ] All elements appear instantly without animation
- [ ] Pipeline shows final state (all 3 nodes active, both connectors filled) — no cycling

- [ ] **Step 7: Final commit**

```bash
git add -A
git commit -m "chore: verify Hero section — all visual checks pass"
```

---

## Spec Coverage Checklist

| Requirement | Task |
|---|---|
| Mobile-first 375px → 1440px | Task 2 (grid responsive classes) |
| Fondo negro `#0D0D0D` | Task 2 (`bg-netrix-black` on section) |
| H1 Bebas Neue 52px/80px | Task 2 `HeroHeadline` |
| "grande" en rojo `#FF2E2E` | Task 2 `HeroHeadline` (string split) |
| H2 subheadline Inter 16px `#CCCCCC` | Task 2 Hero body, `HERO.subheadline` |
| Services line Montserrat 13px | Task 2 Hero body, `HERO.servicesLine` |
| Botón primario rojo → `#contact` | Task 2 Hero CTAs |
| Botón secundario ghost → `#portfolio` | Task 2 Hero CTAs |
| Terminal animado 3 nodos pipeline | Task 2 `PipelineVisual` |
| bg `#1A1A1A` border `#2C2C2C` padding 24px | Task 2 `PipelineVisual` card |
| Badge fade-in (0ms) | Task 2 `HeroBadge` |
| H1 stagger 100ms | Task 2 `HeroHeadline` (heroSequence delays) |
| Visual fade+scale (300ms) | Task 2 `PipelineVisual` (heroSequence.visual) |
| CTAs fade-up (600ms) | Task 2 Hero CTAs (heroSequence.ctas) |
| Animaciones de `lib/animations.ts` | Task 2 (imports fadeIn, fadeUp, scaleIn, heroSequence) |
| Textos de `lib/constants.ts` HERO | Task 1 + Task 2 |
| `Button` component imported | Task 2 |
| `useReducedMotion` support | Task 2 (all motion wrappers) |
| `app/page.tsx` wired up | Task 3 |
