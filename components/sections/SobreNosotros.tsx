'use client'

import { motion, useReducedMotion } from 'motion/react'
import { Code2, TrendingUp, MessageCircle } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { TEAM, ABOUT, CONTACT } from '@/lib/constants'
import { fadeUp, fadeLeft, fadeRight, viewport } from '@/lib/animations'

// ============================================================
// ICON MAP
// ============================================================

const ICON_MAP: Record<string, LucideIcon> = {
  Code2,
  TrendingUp,
}

// ============================================================
// SOBRE NOSOTROS (exported)
// ============================================================

export function SobreNosotros() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-netrix-black section-padding"
      style={{
        backgroundImage:
          'radial-gradient(ellipse at 50% 30%, rgba(255, 46, 46, 0.06) 0%, transparent 55%)',
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
            {ABOUT.sectionLabel}
          </motion.span>

          <motion.h2
            id="about-heading"
            variants={fadeUp}
            className="font-heading font-bold text-[28px] sm:text-3xl lg:text-4xl text-white max-w-2xl leading-tight"
          >
            {ABOUT.sectionTitle}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-body text-base text-netrix-gray max-w-[520px]"
          >
            {ABOUT.sectionSubtitle}
          </motion.p>
        </motion.div>

        {/* ── Intro ────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-2xl mx-auto mb-16 lg:mb-24 space-y-4"
        >
          {ABOUT.intro.split('\n\n').map((para, i) => (
            <p
              key={i}
              className="font-body text-[15px] sm:text-base text-netrix-gray leading-relaxed text-center"
            >
              {para}
            </p>
          ))}
        </motion.div>

        {/* ── Fundadores ───────────────────────────────────── */}
        {/*
          Mobile  (< md): grid 1 col → cada founder apilado (photo arriba, texto abajo)
          Tablet  (md):   grid 2 col → ambos founders side-by-side (portrait card)
          Desktop (lg+):  grid 1 col → cada founder ocupa fila completa con layout alternado
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12 lg:gap-24 mb-16 lg:mb-24">
          {TEAM.map((member, index) => {
            const reversed   = index % 2 !== 0
            const Icon       = ICON_MAP[member.icon]
            const photoAnim  = prefersReduced ? fadeUp : reversed ? fadeRight : fadeLeft
            const textAnim   = prefersReduced ? fadeUp : reversed ? fadeLeft  : fadeRight

            return (
              <motion.div
                key={member.id}
                variants={{
                  hidden:   {},
                  visible:  { transition: { staggerChildren: prefersReduced ? 0 : 0.15 } },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className={[
                  'flex flex-col items-center gap-8',
                  'lg:flex-row lg:gap-16 lg:items-center',
                  reversed ? 'lg:flex-row-reverse' : '',
                ].join(' ')}
              >

                {/* Photo placeholder */}
                <motion.div
                  variants={photoAnim}
                  whileHover={
                    prefersReduced
                      ? undefined
                      : {
                          scale:     1.03,
                          boxShadow: '0 0 40px rgba(255, 46, 46, 0.22)',
                          transition: { duration: 0.2, ease: 'easeOut' },
                        }
                  }
                  className="relative flex-shrink-0 rounded-lg overflow-hidden bg-netrix-card border border-netrix-border w-[220px] h-[220px] md:w-full md:h-[220px] lg:w-[320px] lg:h-[320px]"
                  style={{ borderTop: '2px solid #FF2E2E' }}
                  aria-label={`Foto de ${member.name}`}
                >
                  {/* Radial glow interior */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'radial-gradient(circle at 50% 45%, rgba(255,46,46,0.07) 0%, transparent 65%)',
                    }}
                    aria-hidden="true"
                  />

                  {/* Ícono grande de fondo */}
                  {Icon && (
                    <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                      <Icon
                        size={100}
                        strokeWidth={0.75}
                        className="text-white opacity-[0.12]"
                      />
                    </div>
                  )}

                  {/* Specialty label */}
                  <div className="absolute bottom-4 inset-x-0 flex justify-center" aria-hidden="true">
                    <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-netrix-gray opacity-40">
                      {member.specialty}
                    </span>
                  </div>
                </motion.div>

                {/* Bloque de texto */}
                <motion.div
                  variants={textAnim}
                  className="flex-1 flex flex-col gap-3 text-center lg:text-left"
                >
                  {/* Specialty */}
                  <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-netrix-gray">
                    {member.specialty}
                  </span>

                  {/* Nombre */}
                  <h3 className="font-heading font-bold text-[26px] sm:text-[30px] lg:text-[34px] text-white leading-tight">
                    {member.name}
                  </h3>

                  {/* Rol */}
                  <p className="font-body text-[14px] text-netrix-red font-medium -mt-1">
                    {member.role}
                  </p>

                  {/* Descripción */}
                  <p className="font-body text-[15px] sm:text-base text-netrix-gray leading-relaxed max-w-sm mx-auto lg:mx-0">
                    {member.description}
                  </p>
                </motion.div>

              </motion.div>
            )
          })}
        </div>

        {/* ── CTA ──────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center"
        >
          <a
            href={CONTACT.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-netrix-red text-white font-heading font-bold text-[15px] px-8 py-4 rounded-md transition-colors duration-200 hover:bg-[#CC0000]"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Vamos a arreglarlo juntos
          </a>
        </motion.div>

      </div>
    </section>
  )
}
