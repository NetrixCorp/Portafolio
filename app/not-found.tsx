'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'
import { fadeUp } from '@/lib/animations'

// ============================================================
// NOT FOUND — 404
// Renders inside root layout (Navbar + Footer already present)
// ============================================================

export default function NotFound() {
  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-netrix-black"
      style={{
        backgroundImage:
          'radial-gradient(ellipse at 50% 60%, rgba(255, 46, 46, 0.06) 0%, transparent 55%)',
      }}
    >
      {/* Background number */}
      <span
        className="absolute select-none pointer-events-none font-display text-[28vw] leading-none text-white opacity-[0.03] tabular-nums"
        aria-hidden="true"
      >
        404
      </span>

      <motion.div
        className="relative z-10 flex flex-col items-center gap-7 text-center px-6 max-w-xl"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
        initial="hidden"
        animate="visible"
      >
        {/* Label */}
        <motion.span
          variants={fadeUp}
          className="font-mono text-[11px] tracking-[0.3em] uppercase text-netrix-red"
        >
          Error 404
        </motion.span>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="font-display text-[48px] sm:text-[64px] lg:text-[72px] text-white uppercase leading-none tracking-wider"
        >
          Página no encontrada
        </motion.h1>

        {/* Divider */}
        <motion.div
          variants={fadeUp}
          className="w-12 h-0.5 bg-netrix-red"
          aria-hidden="true"
        />

        {/* Message */}
        <motion.p
          variants={fadeUp}
          className="font-body text-[16px] text-netrix-gray leading-relaxed"
        >
          El caso de éxito que buscas no existe o fue retirado del portafolio.
          Puedes explorar el resto de nuestro trabajo desde abajo.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <Link
            href="/#casos-de-exito"
            className="inline-flex items-center gap-2 font-heading font-bold text-[14px] text-white bg-netrix-red hover:bg-[#CC0000] px-6 py-3 rounded transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-netrix-red focus-visible:ring-offset-2 focus-visible:ring-offset-netrix-black"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            Volver a Casos de Éxito
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 font-heading font-semibold text-[14px] text-white border border-netrix-border hover:border-white px-6 py-3 rounded transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-netrix-black"
          >
            <Home size={14} aria-hidden="true" />
            Ir al inicio
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
