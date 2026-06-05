'use client'

import { motion, useReducedMotion } from 'motion/react'
import { MessageCircle, Mail, Phone, Linkedin, Instagram } from 'lucide-react'
import { CONTACT, SOCIAL_LINKS } from '@/lib/constants'
import { fadeUp, viewport } from '@/lib/animations'

// ============================================================
// CONTACT CARD
// ============================================================

interface ContactCardProps {
  icon: React.ReactNode
  label: string
  value: string
  href: string
  external?: boolean
}

function ContactCard({ icon, label, value, href, external }: ContactCardProps) {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      variants={fadeUp}
      whileHover={{ scale: 1.02, boxShadow: '0 0 32px rgba(255, 46, 46, 0.2)' }}
      className="flex flex-col items-center gap-4 p-6 bg-netrix-card border border-netrix-border rounded-lg text-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-netrix-red focus-visible:ring-offset-2 focus-visible:ring-offset-netrix-black"
      style={{ borderTop: '2px solid #FF2E2E' }}
    >
      <div className="text-white" aria-hidden="true">
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-heading font-bold text-[16px] text-white">{label}</span>
        <span className="font-body text-[14px] text-netrix-gray break-all">{value}</span>
      </div>
    </motion.a>
  )
}

// ============================================================
// CONTACTO (exported)
// ============================================================

export function Contacto() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-netrix-black section-padding"
      style={{
        backgroundImage:
          'radial-gradient(ellipse at 50% 60%, rgba(255, 46, 46, 0.08) 0%, transparent 55%)',
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
            LISTO PARA CRECER
          </motion.span>

          <motion.h2
            id="contact-heading"
            variants={fadeUp}
            className="font-heading font-bold text-[28px] sm:text-3xl lg:text-4xl text-white max-w-2xl leading-tight"
          >
            {CONTACT.headline}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-body text-base text-netrix-gray max-w-[520px]"
          >
            {CONTACT.subheadline}
          </motion.p>
        </motion.div>

        {/* ── CTA Principal ────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col items-center gap-4 mb-14 lg:mb-20"
        >
          <motion.a
            href={CONTACT.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={
              prefersReduced
                ? undefined
                : {
                    scale: 1.03,
                    boxShadow: '0 0 40px rgba(255, 46, 46, 0.35)',
                    transition: { duration: 0.2, ease: 'easeOut' },
                  }
            }
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-netrix-red hover:bg-[#CC0000] text-white font-heading font-bold text-[16px] px-10 py-4 rounded-md transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-netrix-red focus-visible:ring-offset-2 focus-visible:ring-offset-netrix-black"
            aria-label="Iniciar conversación por WhatsApp con NETRIX"
          >
            <MessageCircle size={20} aria-hidden="true" />
            {CONTACT.ctaButton}
          </motion.a>

          <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-netrix-gray-dark">
            {CONTACT.responseTime}
          </p>
        </motion.div>

        {/* ── 3 Contact Cards ──────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14 lg:mb-16"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: prefersReduced ? 0 : 0.1 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <ContactCard
            icon={<MessageCircle size={40} strokeWidth={1.5} />}
            label="WhatsApp"
            value={CONTACT.phone}
            href={CONTACT.ctaLink}
            external
          />
          <ContactCard
            icon={<Mail size={40} strokeWidth={1.5} />}
            label="Email"
            value={CONTACT.email}
            href={`mailto:${CONTACT.email}`}
          />
          <ContactCard
            icon={<Phone size={40} strokeWidth={1.5} />}
            label="Teléfono"
            value={CONTACT.phone}
            href="tel:+573172785407"
          />
        </motion.div>

        {/* ── Social Footer ────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col items-center gap-4"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-netrix-gray-dark">
            Síguenos
          </span>
          <div className="flex items-center gap-6" role="list" aria-label="Redes sociales NETRIX">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              role="listitem"
              aria-label="NETRIX en LinkedIn"
              className="text-white hover:text-netrix-red transition-colors duration-200 focus-visible:outline-none focus-visible:text-netrix-red"
            >
              <Linkedin size={20} aria-hidden="true" />
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              role="listitem"
              aria-label="NETRIX en Instagram"
              className="text-white hover:text-netrix-red transition-colors duration-200 focus-visible:outline-none focus-visible:text-netrix-red"
            >
              <Instagram size={20} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              role="listitem"
              aria-label="Escribir email a NETRIX"
              className="text-white hover:text-netrix-red transition-colors duration-200 focus-visible:outline-none focus-visible:text-netrix-red"
            >
              <Mail size={20} aria-hidden="true" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
