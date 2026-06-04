'use client'

import { motion, useReducedMotion } from 'motion/react'
import { Zap, MessageCircle, Cog, Code, Search, Lightbulb } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { fadeUp, viewport } from '@/lib/animations'

// ============================================================
// ICON MAP
// ============================================================

const ICON_MAP: Record<string, LucideIcon> = {
  Zap,
  MessageCircle,
  Cog,
  Code,
  Search,
  Lightbulb,
}

// ============================================================
// SECTION COPY (presentación, no datos de negocio)
// ============================================================

const SECTION = {
  label:    'SERVICIOS',
  title:    'Todo lo que tu negocio necesita para crecer',
  subtitle: 'Un solo equipo. Sin coordinar proveedores, sin tecnicismos, sin enredos.',
}

// ============================================================
// SERVICIOS (exported)
// ============================================================

export function Servicios() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
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
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: prefersReduced ? 0 : 0.1,
              },
            },
          }}
        >
          {/* Label rojo */}
          <motion.span
            variants={fadeUp}
            className="font-mono text-[11px] tracking-[0.25em] text-netrix-red uppercase"
          >
            {SECTION.label}
          </motion.span>

          {/* H2 */}
          <motion.h2
            id="services-heading"
            variants={fadeUp}
            className="font-heading font-bold text-[28px] sm:text-3xl lg:text-4xl text-white max-w-xl leading-tight"
          >
            {SECTION.title}
          </motion.h2>

          {/* Subtítulo */}
          <motion.p
            variants={fadeUp}
            className="font-body text-base text-netrix-gray max-w-[480px]"
          >
            {SECTION.subtitle}
          </motion.p>
        </motion.div>

        {/* ── Grid de cards ────────────────────────────────── */}
        {/* motion.div orquesta el stagger desde un solo trigger de viewport.
            Los cards heredan initial/animate y responden a staggerChildren. */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: prefersReduced ? 0 : 0.08,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon]
            if (!Icon) return null   // Issue #1: guard contra íconos no importados

            return (
              <motion.article
                key={service.id}
                variants={fadeUp}   // Issue #3: fadeUp maneja duration y ease
                whileHover={
                  prefersReduced
                    ? undefined
                    : {
                        scale: 1.02,
                        boxShadow: '0 0 28px rgba(255, 46, 46, 0.18)',
                        transition: { duration: 0.2, ease: 'easeOut' },
                      }
                }
                className="bg-netrix-card border border-netrix-border rounded-lg p-6 flex flex-col gap-4 hover:border-netrix-red transition-colors duration-200"
              >
                {/* Ícono */}
                <Icon
                  size={32}
                  strokeWidth={1.5}
                  className="text-netrix-red flex-shrink-0"
                  aria-hidden="true"
                />

                {/* Título */}
                <h3 className="font-heading font-bold text-[18px] text-white leading-snug">
                  {service.name}
                </h3>

                {/* Descripción */}
                <p className="font-body text-sm text-netrix-gray leading-relaxed">
                  {service.description}
                </p>
              </motion.article>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
