'use client'

import { motion, useReducedMotion } from 'motion/react'
import { PROCESS } from '@/lib/constants'
import { fadeUp, lineGrow, viewport } from '@/lib/animations'

// ============================================================
// SECTION COPY
// ============================================================

const SECTION = {
  label:    'PROCESO',
  title:    'Primero entendemos el caos. Luego diseñamos el control.',
  subtitle: 'Cinco pasos claros. Sin rodeos, sin sorpresas, sin desaparecer.',
}

// ============================================================
// PROCESO (exported)
// ============================================================

export function Proceso() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="bg-netrix-black section-padding"
      style={{
        backgroundImage:
          'radial-gradient(ellipse at 50% 50%, rgba(255, 46, 46, 0.06) 0%, transparent 65%)',
      }}
    >
      <div className="container-netrix">

        {/* ── Encabezado de sección ────────────────────────── */}
        <motion.div
          className="text-center mb-16 lg:mb-20 flex flex-col items-center gap-3"
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
            id="process-heading"
            variants={fadeUp}
            className="font-heading font-bold text-[28px] sm:text-3xl lg:text-4xl text-white max-w-2xl leading-tight"
          >
            {SECTION.title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-body text-base text-netrix-gray max-w-lg"
          >
            {SECTION.subtitle}
          </motion.p>
        </motion.div>

        {/* ── Pasos ────────────────────────────────────────── */}
        <div className="relative">

          {/* Línea conectora — solo desktop, crece al entrar en viewport */}
          <div
            className="hidden lg:block absolute left-0 right-0 top-[24px] h-px overflow-hidden"
            aria-hidden="true"
          >
            <motion.div
              className="h-full bg-netrix-red"
              variants={lineGrow}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            />
          </div>

          {/* Grid de pasos */}
          <motion.div
            className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-6"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: prefersReduced ? 0 : 0.12 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {PROCESS.map((step) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                className="flex flex-col gap-4"
              >
                {/* Número — Bebas Neue 48px rojo */}
                <span
                  className="font-display text-5xl leading-none text-netrix-red select-none"
                  aria-hidden="true"
                >
                  {String(step.step).padStart(2, '0')}
                </span>

                {/* Separador corto — mobile/tablet */}
                <div className="h-px w-8 bg-netrix-border lg:hidden" aria-hidden="true" />

                {/* Título */}
                <h3 className="font-heading font-bold text-[16px] text-white leading-snug">
                  {step.title}
                </h3>

                {/* Descripción */}
                <p className="font-body text-sm text-netrix-gray leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
