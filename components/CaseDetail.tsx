'use client'

import { motion, useReducedMotion } from 'motion/react'
import Link from 'next/link'
import { Monitor, GitMerge, Globe, ArrowLeft, ExternalLink, Clock, Tag } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { CASE_STUDIES, CONTACT } from '@/lib/constants'
import { fadeUp, scaleIn, viewport } from '@/lib/animations'

// ============================================================
// TYPES
// ============================================================

export type CaseStudy = (typeof CASE_STUDIES)[number]

// ============================================================
// ICON MAP
// ============================================================

const CASE_ICONS: Record<string, LucideIcon> = {
  Monitor,
  GitMerge,
  Globe,
}

// ============================================================
// BREADCRUMB
// ============================================================

function Breadcrumb({ title }: { title: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-10">
      <ol className="flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase">
        <li>
          <Link
            href="/"
            className="text-netrix-gray-dark hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:text-white"
          >
            Inicio
          </Link>
        </li>
        <li aria-hidden="true" className="text-netrix-gray-dark">/</li>
        <li>
          <Link
            href="/#casos-de-exito"
            className="text-netrix-gray-dark hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:text-white"
          >
            Portafolio
          </Link>
        </li>
        <li aria-hidden="true" className="text-netrix-gray-dark">/</li>
        <li className="text-netrix-gray truncate max-w-[160px] sm:max-w-none" aria-current="page">
          {title}
        </li>
      </ol>
    </nav>
  )
}

// ============================================================
// SECTION LABEL
// ============================================================

function SectionLabel({ index, text }: { index: string; text: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-netrix-red">
        {index}
      </span>
      <span className="flex-1 h-px bg-netrix-border" aria-hidden="true" />
      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-netrix-gray-dark">
        {text}
      </span>
    </div>
  )
}

// ============================================================
// CASEDETAIL (exported)
// ============================================================

export function CaseDetail({ caso }: { caso: CaseStudy }) {
  const prefersReduced = useReducedMotion()
  const Icon = CASE_ICONS[caso.icon]

  return (
    <article className="bg-netrix-black min-h-screen">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <header
        className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20"
        style={{
          background: 'linear-gradient(180deg, #1A1A1A 0%, #0D0D0D 80%)',
          borderBottom: '1px solid #2C2C2C',
        }}
      >
        {/* Glow superior */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 60% 0%, rgba(255, 46, 46, 0.08) 0%, transparent 55%)',
          }}
        />

        <div className="container-netrix relative">
          <Breadcrumb title={caso.title} />

          <motion.div
            className="max-w-3xl flex flex-col gap-5"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: prefersReduced ? 0 : 0.07 },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {/* Meta row */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white bg-netrix-red px-3 py-1 rounded-sm leading-none">
                {caso.category}
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.15em] uppercase text-netrix-gray-dark">
                <Clock size={10} aria-hidden="true" />
                {caso.timeline}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-[48px] sm:text-[60px] lg:text-[76px] text-white leading-none uppercase tracking-wider"
            >
              {caso.title}
            </motion.h1>

            {/* Result teaser */}
            <motion.p
              variants={fadeUp}
              className="font-heading font-semibold text-[15px] sm:text-[16px] text-netrix-red"
            >
              → {caso.result}
            </motion.p>
          </motion.div>

          {/* Background icon decoration */}
          {Icon && (
            <motion.div
              className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none select-none"
              initial={prefersReduced ? false : { opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              aria-hidden="true"
            >
              <Icon
                size={280}
                strokeWidth={0.4}
                className="text-white opacity-[0.04]"
              />
            </motion.div>
          )}
        </div>
      </header>

      {/* ── Cuerpo ────────────────────────────────────────────── */}
      <div className="container-netrix py-14 lg:py-20 flex flex-col gap-16 lg:gap-20">

        {/* ── 01 Problema / 02 Solución ─────────────────────── */}
        <section aria-labelledby="problem-solution-heading">
          <h2 id="problem-solution-heading" className="sr-only">Problema y solución</h2>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: prefersReduced ? 0 : 0.1 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Problema */}
            <motion.div variants={fadeUp} className="flex flex-col">
              <SectionLabel index="01" text="Problema" />
              <div
                className="bg-netrix-card border border-netrix-border rounded-lg p-6 flex flex-col gap-3 flex-1"
                style={{ borderLeft: '2px solid #2C2C2C' }}
              >
                <h3 className="font-heading font-bold text-[16px] text-white">
                  El desafío
                </h3>
                <p className="font-body text-[15px] text-netrix-gray leading-[1.7]">
                  {caso.description}
                </p>
              </div>
            </motion.div>

            {/* Solución */}
            <motion.div variants={fadeUp} className="flex flex-col">
              <SectionLabel index="02" text="Solución" />
              <div
                className="bg-netrix-card border border-netrix-border rounded-lg p-6 flex flex-col gap-4 flex-1"
                style={{ borderLeft: '2px solid #FF2E2E' }}
              >
                <h3 className="font-heading font-bold text-[16px] text-white">
                  Lo que construimos
                </h3>
                <p className="font-body text-[15px] text-netrix-gray leading-[1.7]">
                  {caso.solution}
                </p>

                {/* Tech badges */}
                <div className="pt-2 flex flex-col gap-2">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.15em] uppercase text-netrix-gray-dark">
                    <Tag size={9} aria-hidden="true" />
                    Stack
                  </span>
                  <div className="flex flex-wrap gap-2" role="list" aria-label="Tecnologías utilizadas">
                    {caso.technologies.map((tech) => (
                      <span
                        key={tech}
                        role="listitem"
                        className="font-mono text-[10px] text-netrix-gray border border-netrix-border rounded px-2.5 py-1 bg-netrix-black"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 03 Resultado ──────────────────────────────────── */}
        <section aria-labelledby="result-heading">
          <SectionLabel index="03" text="Resultado" />
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="rounded-lg overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #1A1A1A 0%, #0D0D0D 100%)',
              border: '1px solid #2C2C2C',
              borderTop: '2px solid #FF2E2E',
            }}
          >
            <div className="p-8 lg:p-12">
              <h2
                id="result-heading"
                className="font-heading font-extrabold text-[26px] sm:text-[34px] lg:text-[42px] text-white leading-tight max-w-2xl"
              >
                {caso.impact}
              </h2>
            </div>
          </motion.div>
        </section>

        {/* ── 04 Galería ────────────────────────────────────── */}
        <section aria-labelledby="gallery-heading">
          <SectionLabel index="04" text="Galería" />
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: prefersReduced ? 0 : 0.07 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <h2 id="gallery-heading" className="sr-only">Galería del proyecto</h2>
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="aspect-video bg-netrix-card border border-netrix-border rounded-lg flex flex-col items-center justify-center gap-2"
                aria-label={`Captura ${i} de ${caso.title}`}
              >
                <div
                  className="w-8 h-8 rounded border border-netrix-border flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="font-mono text-[9px] text-netrix-gray-dark">{i}</span>
                </div>
                <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-netrix-gray-dark">
                  Próximamente
                </span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          aria-labelledby="cta-heading"
          className="flex flex-col items-center gap-6 text-center pt-4 pb-4 border-t border-netrix-border"
        >
          <div className="flex flex-col items-center gap-3 max-w-lg">
            <h2
              id="cta-heading"
              className="font-heading font-bold text-[22px] sm:text-[28px] text-white leading-snug"
            >
              ¿Necesitas algo similar para tu negocio?
            </h2>
            <p className="font-body text-[15px] text-netrix-gray leading-relaxed">
              Cuéntanos tu reto. Analizamos tu caso sin costo y te decimos exactamente qué es posible.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href={CONTACT.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-heading font-bold text-[14px] text-white bg-netrix-red hover:bg-[#CC0000] px-6 py-3 rounded transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-netrix-red focus-visible:ring-offset-2 focus-visible:ring-offset-netrix-black"
            >
              Contáctanos por WhatsApp
              <ExternalLink size={13} aria-hidden="true" />
            </a>

            <Link
              href="/#casos-de-exito"
              className="inline-flex items-center gap-2 font-heading font-semibold text-[14px] text-white border border-netrix-border hover:border-white px-6 py-3 rounded transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-netrix-black"
            >
              <ArrowLeft size={13} aria-hidden="true" />
              Ver más casos
            </Link>
          </div>
        </motion.section>

      </div>
    </article>
  )
}
