'use client'

import { motion, useReducedMotion } from 'motion/react'
import { Monitor, GitMerge, Globe, ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { CASE_STUDIES } from '@/lib/constants'
import { fadeUp, viewport } from '@/lib/animations'

// ============================================================
// ICON MAP
// ============================================================

const CASE_ICONS: Record<string, LucideIcon> = {
  Monitor,
  GitMerge,
  Globe,
}

// ============================================================
// SECTION COPY
// ============================================================

const SECTION = {
  label:    'PORTAFOLIO',
  title:    'Resultados reales para negocios reales.',
  subtitle: 'Proyectos en producción. Métricas concretas. Sin promesas infladas.',
}

// ============================================================
// CASOSDEEXITO (exported)
// ============================================================

export function CasosDeExito() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="bg-netrix-black section-padding"
      style={{
        backgroundImage:
          'radial-gradient(ellipse at 50% 100%, rgba(255, 46, 46, 0.07) 0%, transparent 55%)',
      }}
    >
      <div className="container-netrix">

        {/* ── Encabezado de sección ────────────────────────── */}
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
            id="portfolio-heading"
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
            visible: { transition: { staggerChildren: prefersReduced ? 0 : 0.09 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {CASE_STUDIES.map((caso) => {
            const Icon = CASE_ICONS[caso.icon]
            if (!Icon) return null

            return (
              <motion.article
                key={caso.id}
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
                className="bg-netrix-card border border-netrix-border rounded-lg overflow-hidden flex flex-col hover:border-netrix-red transition-colors duration-200"
              >
                {/* ── Visual 16:9 ──────────────────────────── */}
                <div
                  className="relative aspect-video flex items-center justify-center overflow-hidden"
                  aria-hidden="true"
                  style={{
                    background: 'linear-gradient(135deg, #1A1A1A 0%, #0D0D0D 100%)',
                  }}
                >
                  {/* Glow detrás del ícono */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage:
                        'radial-gradient(ellipse at 50% 50%, rgba(255, 46, 46, 0.14) 0%, transparent 65%)',
                    }}
                  />

                  <Icon
                    size={48}
                    strokeWidth={1.25}
                    className="relative text-netrix-red"
                  />

                  {/* Badge de categoría */}
                  <span className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.18em] uppercase text-white bg-netrix-red px-2.5 py-1 rounded-sm leading-none">
                    {caso.category}
                  </span>
                </div>

                {/* ── Contenido ────────────────────────────── */}
                <div className="flex flex-col gap-4 p-5 flex-1">

                  {/* Título */}
                  <h3 className="font-heading font-bold text-[17px] text-white leading-snug">
                    {caso.title}
                  </h3>

                  {/* Problema */}
                  <div className="flex flex-col gap-1.5">
                    <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-netrix-gray-dark">
                      Problema
                    </span>
                    <p className="font-body text-sm text-netrix-gray leading-relaxed">
                      {caso.problem}
                    </p>
                  </div>

                  {/* Solución */}
                  <div className="flex flex-col gap-1.5">
                    <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-netrix-gray-dark">
                      Solución
                    </span>
                    <p className="font-body text-sm text-white leading-relaxed">
                      {caso.solution}
                    </p>
                  </div>

                  {/* Resultado */}
                  <div className="mt-auto pt-4 border-t border-netrix-border">
                    <p className="font-heading font-bold text-[13px] text-netrix-red leading-snug">
                      → {caso.result}
                    </p>
                  </div>

                  {/* Tags + CTA */}
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className="flex flex-wrap gap-1.5">
                      {caso.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] text-netrix-gray-dark border border-netrix-border rounded px-2 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 font-heading font-semibold text-[13px] text-white hover:text-netrix-red transition-colors duration-150 flex-shrink-0"
                      aria-label={`Ver caso completo: ${caso.title}`}
                    >
                      Ver caso
                      <ArrowRight size={14} aria-hidden="true" />
                    </button>
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
