import type { Variants, Transition } from 'motion/react'

/* ============================================================
   NETRIX — Motion Tokens
   Importar estos en los componentes para consistencia
   ============================================================ */

// Transición base
export const ease = [0.22, 1, 0.36, 1] as const

export const baseTransition: Transition = {
  duration: 0.5,
  ease,
}

// ============================================================
// VARIANTES DE ENTRADA
// ============================================================

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
}

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4 },
  },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease },
  },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease },
  },
}

// ============================================================
// CONTENEDOR STAGGER (animar hijos en secuencia)
// ============================================================

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0,
    },
  },
}

// Item del stagger (usar junto a staggerContainer)
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease },
  },
}

// ============================================================
// INTERACCIONES — HOVER / TAP
// ============================================================

export const hoverCard = {
  whileHover: { y: -4, transition: { duration: 0.2, ease: 'easeOut' } },
}

export const hoverButton = {
  whileHover: { scale: 1.02 },
  whileTap:   { scale: 0.97 },
  transition: { duration: 0.15 },
}

export const hoverIcon = {
  whileHover: { scale: 1.1, rotate: 5 },
  transition: { duration: 0.2 },
}

export const hoverGlow = {
  whileHover: {
    boxShadow: '0 0 20px rgba(255, 46, 46, 0.25)',
    borderColor: '#FF2E2E',
    transition: { duration: 0.2 },
  },
}

// ============================================================
// MOBILE MENU
// ============================================================

export const mobileMenuOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit:   { opacity: 0, transition: { duration: 0.2 } },
}

export const mobileMenuPanel: Variants = {
  hidden: { opacity: 0, x: '100%' },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease },
  },
  exit: {
    opacity: 0,
    x: '100%',
    transition: { duration: 0.25, ease: 'easeIn' },
  },
}

export const mobileMenuItems: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
}

export const mobileMenuItem: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
}

// ============================================================
// LÍNEA CONECTORA (para sección Proceso)
// ============================================================

export const lineGrow: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease },
  },
}

export const lineGrowVertical: Variants = {
  hidden: { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.6, ease },
  },
}

// ============================================================
// HERO — SECUENCIA DE ENTRADA
// ============================================================

export const heroSequence = {
  badge:       { delay: 0 },
  headline1:   { delay: 0.1 },
  headlineRed: { delay: 0.2 },
  headline3:   { delay: 0.3 },
  subheadline: { delay: 0.4 },
  services:    { delay: 0.5 },
  ctas:        { delay: 0.6 },
  visual:      { delay: 0.3 },
}

// ============================================================
// VIEWPORT CONFIG (para whileInView)
// ============================================================

export const viewport = {
  once: true,
  margin: '-80px',
} as const
