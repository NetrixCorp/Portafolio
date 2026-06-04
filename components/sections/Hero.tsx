'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { MessageCircle, Bot, Database, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { HERO } from '@/lib/constants'
import { fadeIn, fadeUp, scaleIn, heroSequence, ease } from '@/lib/animations'

// Shared prop — passed from Hero to avoid re-calling the hook in sub-components
type ReducedMotionProp = { prefersReduced: boolean | null }

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
        {...lineMotion(heroSequence.headline3.delay)}
      >
        {after.trim().replace(/\.$/, '')}.
      </motion.span>
    </h1>
  )
}

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

    let t1: ReturnType<typeof setTimeout>
    let t2: ReturnType<typeof setTimeout>
    let t3: ReturnType<typeof setTimeout>

    function cycle() {
      setStep(0)
      t1 = setTimeout(() => setStep(1), 1300)
      t2 = setTimeout(() => setStep(2), 2600)
      t3 = setTimeout(cycle,            3800)
    }

    cycle()
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
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
                    isActive ? 'bg-white' : 'bg-netrix-gray-dark',
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
                        : { duration: 0.8, ease }
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
          <div className="flex flex-col gap-6 md:max-w-[600px] md:mx-auto lg:max-w-none lg:mx-0">
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
              <p className="font-body text-base text-netrix-gray leading-relaxed">
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
