'use client'

import { motion, useReducedMotion } from 'motion/react'
import { forwardRef, useCallback } from 'react'
import { cn } from '@/lib/utils'
import { playButtonHover } from '@/lib/sounds'

// ============================================================
// TIPOS
// ============================================================

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize    = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:  ButtonVariant
  size?:     ButtonSize
  fullWidth?: boolean
  asChild?:  boolean
  href?:     string
  external?: boolean
}

// ============================================================
// ESTILOS POR VARIANTE
// ============================================================

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    'bg-netrix-red text-white',
    'border border-transparent',
    'hover:bg-netrix-red-dark',
    'focus-visible:ring-netrix-red',
  ].join(' '),

  secondary: [
    'bg-transparent text-white',
    'border border-white',
    'hover:bg-white/5',
    'focus-visible:ring-white',
  ].join(' '),

  ghost: [
    'bg-transparent text-netrix-black',
    'border border-netrix-black',
    'hover:bg-netrix-black/5',
    'focus-visible:ring-netrix-black',
  ].join(' '),
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const baseStyles = [
  'inline-flex items-center justify-center gap-2',
  'font-heading font-bold rounded-sm',
  'transition-colors duration-200',
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-netrix-black',
  'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',
  'cursor-pointer select-none',
].join(' ')

// ============================================================
// COMPONENTE
// ============================================================

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant    = 'primary',
      size       = 'md',
      fullWidth  = false,
      className,
      children,
      disabled,
      href,
      external,
      onMouseEnter: consumerMouseEnter,
      ...props
    },
    ref
  ) => {
    const prefersReduced = useReducedMotion()

    // onMouseEnter fires once per entry — naturally plays sound only once per hover
    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLElement>) => {
        if (prefersReduced) return
        if (variant === 'primary' && !disabled) void playButtonHover()
        consumerMouseEnter?.(e as React.MouseEvent<HTMLButtonElement>)
      },
      [prefersReduced, variant, disabled, consumerMouseEnter],
    )

    const classes = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      fullWidth && 'w-full',
      className
    )

    const motionProps = prefersReduced
      ? {}
      : {
          whileHover: disabled ? {} : { scale: 1.02 },
          whileTap:   disabled ? {} : { scale: 0.97 },
          transition: { duration: 0.15 },
        }

    // Render como <a> si se pasa href
    if (href) {
      return (
        <motion.a
          href={href}
          className={classes}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          onMouseEnter={handleMouseEnter}
          {...(props as React.ComponentProps<typeof motion.a>)}
          {...(motionProps as React.ComponentProps<typeof motion.a>)}
        >
          {children}
        </motion.a>
      )
    }

    return (
      <motion.button
        ref={ref}
        className={classes}
        disabled={disabled}
        onMouseEnter={handleMouseEnter}
        {...(motionProps as React.ComponentProps<typeof motion.button>)}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
export type { ButtonVariant, ButtonSize, ButtonProps }
