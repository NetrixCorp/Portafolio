import Image from 'next/image'
import { Instagram, Linkedin, MessageCircle, Mail } from 'lucide-react'
import { NAVIGATION, SOCIAL_LINKS, SITE_CONFIG, SERVICES } from '@/lib/constants'

// ============================================================
// LOGO (footer version — más pequeño)
// ============================================================

function FooterLogo() {
  return (
    <a
      href="/"
      aria-label="NETRIX — Ir al inicio"
      className="flex items-center w-fit"
    >
      <Image
        src="/logo-netrix.jpeg"
        alt="NETRIX — Agencia de soluciones digitales, Bogotá"
        width={1254}
        height={1254}
        className="h-7 sm:h-8 w-auto object-contain transition-opacity duration-200 hover:opacity-80"
      />
    </a>
  )
}

// ============================================================
// LINKS DE SECCIÓN
// ============================================================

function FooterSection({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string; external?: boolean }[]
}) {
  return (
    <div>
      <h3 className="font-heading font-bold text-sm uppercase tracking-[0.15em] text-white mb-4">
        {title}
      </h3>
      <ul className="space-y-2.5" role="list">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="font-body text-sm text-netrix-gray hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ============================================================
// ICONOS SOCIALES
// ============================================================

const socialIcons = [
  {
    label: 'Instagram',
    href: SOCIAL_LINKS.instagram,
    icon: Instagram,
  },
  {
    label: 'LinkedIn',
    href: SOCIAL_LINKS.linkedin,
    icon: Linkedin,
  },
  {
    label: 'WhatsApp',
    href: SOCIAL_LINKS.whatsapp,
    icon: MessageCircle,
  },
  {
    label: 'Email',
    href: `mailto:${SOCIAL_LINKS.email}`,
    icon: Mail,
  },
] as const

// ============================================================
// FOOTER
// ============================================================

export function Footer() {
  const serviceLinks = SERVICES.map((s) => ({
    label: s.name,
    href:  `/servicios/${s.id}`,
  }))

  const companyLinks = [
    { label: 'Sobre nosotros',   href: '#about' },
    { label: 'Portafolio',       href: '#casos-de-exito' },
    { label: 'Blog',             href: '/blog' },
    { label: 'Casos de éxito',   href: '#casos-de-exito' },
  ]

  const contactLinks = [
    { label: 'Bogotá, Colombia',   href: '#' },
    { label: 'WhatsApp',           href: SOCIAL_LINKS.whatsapp, external: true },
    { label: SOCIAL_LINKS.email,   href: `mailto:${SOCIAL_LINKS.email}` },
  ]

  return (
    <footer
      className="bg-netrix-black border-red-accent"
      role="contentinfo"
    >
      {/* ── Contenido principal ──────────────────────────────── */}
      <div className="container-netrix py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-8">

          {/* Columna 1 — Marca */}
          <div className="space-y-4">
            <FooterLogo />
            <p className="text-netrix-gray text-sm leading-relaxed max-w-[260px]">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-netrix-gray-dark text-xs leading-relaxed max-w-[260px]">
              Bogotá, Colombia — Atención L–V 8am–6pm
            </p>

            {/* Redes sociales */}
            <div className="flex items-center gap-3 pt-1" role="list" aria-label="Redes sociales">
              {socialIcons.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center text-netrix-gray hover:text-netrix-red transition-colors duration-200 focus-visible:outline-none focus-visible:text-netrix-red"
                  role="listitem"
                >
                  <Icon size={17} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2 — Servicios */}
          <FooterSection title="Servicios" links={serviceLinks} />

          {/* Columna 3 — Empresa */}
          <FooterSection title="Empresa" links={companyLinks} />

          {/* Columna 4 — Contacto */}
          <FooterSection title="Contacto" links={contactLinks} />
        </div>
      </div>

      {/* ── Barra inferior ──────────────────────────────────── */}
      <div className="border-t border-netrix-border">
        <div className="container-netrix py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-netrix-gray-dark text-xs">
            © {SITE_CONFIG.year} {SITE_CONFIG.companyName}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/privacidad"
              className="font-mono text-netrix-gray-dark text-xs hover:text-netrix-gray transition-colors"
            >
              Privacidad
            </a>
            <a
              href="/terminos"
              className="font-mono text-netrix-gray-dark text-xs hover:text-netrix-gray transition-colors"
            >
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
