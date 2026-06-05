'use client'

import { motion, useReducedMotion } from 'motion/react'
import { Layers, Eye, TrendingUp, CheckCircle } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { DIFFERENTIATORS } from '@/lib/constants'
import { fadeUp, viewport } from '@/lib/animations'

// ============================================================
// ICON MAP
// ============================================================

const ICON_MAP: Record<string, LucideIcon> = {
  Layers,
  Eye,
  TrendingUp,
}

// ============================================================
// SECTION COPY
// ============================================================

const SECTION = {
  label:    'POR QUÉ NETRIX',
  title:    'La diferencia que sientes desde el primer día.',
  subtitle: 'No somos proveedores. Somos el equipo digital de tu negocio.',
}

// ============================================================
// POR QUÉ NETRIX (exported)
// ============================================================

export function PorQueNetrix() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      id="why-netrix"
      aria-labelledby="why-heading"
      className="bg-netrix-black section-padding"
      style={{
        backgroundImage:
          'radial-gradient(ellipse at 50% 100%, rgba(255, 46, 46, 0.08) 0%, transparent 55%)',
      }}
    >
      <div className="container-netrix">

        {/* ── Encabezado ───────────────────────────────────── */}
        <motion.div
          className="text-center mb-12 lg:mb-16 flex flex-col items-center gap-3"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: prefersReduced ? 0 : 0.1 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.span
            variants={fadeUp}
            className="font-mono text-[11px] tracking-[0.25em] text-netrix-red uppercase"
          >
            {SECTION.label}
          </motion.span>

          <motion.h2
            id="why-heading"
            variants={fadeUp}
            className="font-heading font-bold text-[28px] sm:text-3xl lg:text-4xl text-white max-w-2xl leading-tight"
          >
            {SECTION.title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-body text-base text-netrix-gray max-w-[480px]"
          >
            {SECTION.subtitle}
          </motion.p>
        </motion.div>

        {/* ── Grid de cards ────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: prefersReduced ? 0 : 0.1 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {DIFFERENTIATORS.map((diff, index) => {
            const Icon = ICON_MAP[diff.icon]
            if (!Icon) return null

            return (
              <motion.article
                key={diff.id}
                variants={fadeUp}
                whileHover={
                  prefersReduced
                    ? undefined
                    : {
                        scale: 1.02,
                        boxShadow: '0 0 32px rgba(255, 46, 46, 0.2)',
                        transition: { duration: 0.2, ease: 'easeOut' },
                      }
                }
                className="relative bg-netrix-card border border-netrix-border rounded-lg p-6 flex flex-col gap-4 overflow-hidden transition-colors duration-200"
                style={{ borderTop: '2px solid #FF2E2E' }}
              >
                {/* Número de fondo */}
                <span
                  className="absolute top-3 right-4 font-display text-[72px] leading-none text-white opacity-[0.04] select-none pointer-events-none tabular-nums"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Ícono */}
                <Icon
                  size={48}
                  strokeWidth={1.25}
                  className="text-white flex-shrink-0"
                  aria-hidden="true"
                />

                {/* Tagline */}
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-netrix-gray -mt-1">
                  {diff.tagline}
                </span>

                {/* Título */}
                <h3 className="font-heading font-bold text-[20px] text-white leading-snug -mt-1">
                  {diff.title}
                </h3>

                {/* Descripción */}
                <p className="font-body text-[14px] text-netrix-gray leading-relaxed flex-1">
                  {diff.description}
                </p>

                {/* Beneficio */}
                <div className="pt-3 border-t border-netrix-border">
                  <div className="inline-flex items-center gap-2">
                    <CheckCircle
                      size={13}
                      strokeWidth={2}
                      className="text-netrix-red flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="font-heading font-semibold text-[13px] text-white">
                      {diff.benefit}
                    </span>
                  </div>
                </div>

              </motion.article>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
