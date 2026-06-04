'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { NAVIGATION, CONTACT, SITE_CONFIG } from '@/lib/constants'
import {
  mobileMenuOverlay,
  mobileMenuPanel,
  mobileMenuItems,
  mobileMenuItem,
} from '@/lib/animations'
import { cn } from '@/lib/utils'

// ============================================================
// LOGO
// ============================================================

function NetrixLogo({ className }: { className?: string }) {
  return (
    <a
      href="/"
      aria-label="NETRIX — Ir al inicio"
      className={cn('flex items-center', className)}
    >
      <Image
        src="/logo-netrix.jpeg"
        alt="NETRIX — Agencia de soluciones digitales, Bogotá"
        width={1254}
        height={1254}
        className="h-8 sm:h-10 w-auto object-contain"
        priority
      />
    </a>
  )
}

// ============================================================
// NAV LINK
// ============================================================

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string
  label: string
  onClick?: () => void
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'font-heading font-medium text-[15px] tracking-wide',
        'text-netrix-gray transition-colors duration-200',
        'hover:text-white',
        'focus-visible:outline-none focus-visible:text-white'
      )}
    >
      {label}
    </a>
  )
}

// ============================================================
// NAVBAR
// ============================================================

export function Navbar() {
  const [isScrolled,    setIsScrolled]    = useState(false)
  const [isMobileOpen,  setIsMobileOpen]  = useState(false)
  const prefersReduced = useReducedMotion()

  // Detectar scroll para añadir backdrop blur
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Bloquear scroll del body con el menú mobile abierto
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  // Cerrar mobile menu en ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileOpen) setIsMobileOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isMobileOpen])

  const closeMobile = () => setIsMobileOpen(false)

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'border-b-2 border-netrix-red',
          'bg-netrix-black',
          isScrolled && 'backdrop-blur-sm bg-netrix-black/95',
          'transition-[background-color,backdrop-filter] duration-300'
        )}
        role="banner"
      >
        <nav
          className="container-netrix flex items-center justify-between h-16 lg:h-[72px]"
          role="navigation"
          aria-label="Navegación principal"
        >
          {/* Logo */}
          <NetrixLogo />

          {/* Links — desktop */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {NAVIGATION.map((item) => (
              <li key={item.id}>
                <NavLink href={item.href} label={item.label} />
              </li>
            ))}
          </ul>

          {/* CTA — desktop */}
          <div className="hidden md:flex">
            <Button
              href={CONTACT.ctaLink}
              external
              variant="primary"
              size="sm"
              aria-label="Agendar diagnóstico gratuito por WhatsApp"
            >
              Agenda gratis
            </Button>
          </div>

          {/* Hamburger — mobile */}
          <button
            className={cn(
              'md:hidden p-2 rounded-sm -mr-2',
              'text-netrix-gray hover:text-white',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-netrix-red',
              'transition-colors duration-200'
            )}
            onClick={() => setIsMobileOpen((v) => !v)}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* ── Mobile menu ─────────────────────────────────────── */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Overlay — key requerido para que AnimatePresence coordine exit */}
            <motion.div
              key="netrix-menu-overlay"
              className="fixed inset-0 z-40 bg-black/60 md:hidden"
              variants={mobileMenuOverlay}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={prefersReduced ? { duration: 0 } : undefined}
              onClick={closeMobile}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              key="netrix-menu-panel"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menú de navegación"
              className={cn(
                'fixed top-0 right-0 bottom-0 z-50 md:hidden',
                'w-[280px] bg-netrix-black border-l border-netrix-border',
                'flex flex-col pt-20 pb-8 px-6'
              )}
              variants={mobileMenuPanel}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={prefersReduced ? { duration: 0 } : undefined}
            >
              {/* Logo pequeño + cierre */}
              <div className="absolute top-0 left-0 right-0 h-16 flex items-center justify-between px-6 border-b border-netrix-border">
                <NetrixLogo />
                <button
                  onClick={closeMobile}
                  className="p-1 text-netrix-gray hover:text-white transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Links */}
              <motion.ul
                className="flex flex-col gap-1 mt-2"
                variants={mobileMenuItems}
                initial="hidden"
                animate="visible"
                transition={prefersReduced ? { duration: 0, staggerChildren: 0 } : undefined}
                role="list"
              >
                {NAVIGATION.map((item) => (
                  <motion.li
                    key={item.id}
                    variants={mobileMenuItem}
                    transition={prefersReduced ? { duration: 0 } : undefined}
                  >
                    <a
                      href={item.href}
                      onClick={closeMobile}
                      className={cn(
                        'block py-3 px-2 rounded-sm',
                        'font-heading font-semibold text-lg text-white',
                        'border-b border-netrix-border/50',
                        'hover:text-netrix-red hover:border-netrix-red/30',
                        'transition-colors duration-200'
                      )}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              {/* CTA bottom */}
              <div className="mt-auto">
                <Button
                  href={CONTACT.ctaLink}
                  external
                  variant="primary"
                  fullWidth
                  aria-label="Agendar diagnóstico gratuito por WhatsApp"
                >
                  {CONTACT.ctaButton}
                </Button>
                <p className="mt-3 text-center text-netrix-gray-dark text-xs font-mono">
                  {SITE_CONFIG.siteName} · Bogotá, Colombia
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer — evita que el contenido quede debajo del navbar fixed */}
      <div className="h-16 lg:h-[72px]" aria-hidden="true" />
    </>
  )
}
