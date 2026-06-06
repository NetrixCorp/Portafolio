import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Montserrat, Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { AudioInit } from '@/components/ui/AudioInit'
import { GA_MEASUREMENT_ID, HOTJAR_SCRIPT_SRC } from '@/lib/constants'
import '@/styles/globals.css'

// ============================================================
// FUENTES — next/font (cero layout shift, self-hosted)
// ============================================================

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '700'],
})

// ============================================================
// METADATA SEO
// ============================================================

export const metadata: Metadata = {
  metadataBase: new URL('https://netrix.com.co'),
  title: {
    default: 'NETRIX | Agencia Digital y Automatización Bogotá',
    template: '%s | NETRIX',
  },
  description:
    'Hacemos que tu negocio se vea grande y venda más. Landing pages, bots WhatsApp, automatización y software para PyMEs en Bogotá. Sin complicaciones.',
  keywords: [
    'automatización de procesos empresariales Colombia',
    'agencia de automatización Bogotá',
    'desarrollo de software a medida Colombia',
    'chatbot WhatsApp para empresas Colombia',
    'soluciones digitales para PyMEs Colombia',
    'landing page para negocios Bogotá',
    'bot WhatsApp ventas Colombia',
    'SEO para pequeñas empresas Bogotá',
    'agencia digital para negocios pequeños Colombia',
  ],
  authors: [{ name: 'NETRIX Corp' }],
  creator: 'NETRIX Corp',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://netrix.com.co',
    siteName: 'NETRIX',
    title: 'NETRIX | Agencia Digital para PyMEs en Bogotá',
    description:
      'Landing pages, bots WhatsApp, automatización y software a medida. Todo lo que tu negocio necesita para crecer — sin tecnicismos.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NETRIX — Agencia Digital Bogotá',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NETRIX | Agencia Digital Bogotá',
    description:
      'Landing pages, bots WhatsApp, automatización y software a medida para PyMEs en Bogotá.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://netrix.com.co',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0D0D0D',
  width: 'device-width',
  initialScale: 1,
}

// ============================================================
// SCHEMA JSON-LD
// ============================================================

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://netrix.com.co/#organization',
      name: 'NETRIX',
      url: 'https://netrix.com.co',
      logo: {
        '@type': 'ImageObject',
        url: 'https://netrix.com.co/logo-netrix.svg',
      },
      description:
        'Soluciones digitales para PyMEs en Bogotá. Landing pages, bots WhatsApp, automatización de procesos y software a medida.',
      foundingDate: '2025',
      areaServed: { '@type': 'City', name: 'Bogotá' },
      sameAs: [
        'https://www.instagram.com/netrix_col/',
        'https://www.linkedin.com/company/netrixcol/',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://netrix.com.co/#localbusiness',
      name: 'NETRIX',
      description:
        'Agencia digital para PyMEs en Bogotá. Automatización, bots WhatsApp, landing pages y software a medida con resultados medibles.',
      url: 'https://netrix.com.co',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bogotá',
        addressRegion: 'Cundinamarca',
        addressCountry: 'CO',
      },
      areaServed: [
        { '@type': 'City', name: 'Bogotá' },
        { '@type': 'Country', name: 'Colombia' },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://netrix.com.co/#website',
      url: 'https://netrix.com.co',
      name: 'NETRIX',
      inLanguage: 'es-CO',
    },
  ],
}

// ============================================================
// ROOT LAYOUT
// ============================================================

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const fontClasses = [
    bebasNeue.variable,
    montserrat.variable,
    inter.variable,
    jetbrainsMono.variable,
  ].join(' ')

  return (
    <html lang="es" className={fontClasses}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-netrix-black text-white font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-netrix-red focus:text-white focus:font-heading focus:font-bold focus:rounded-sm"
        >
          Saltar al contenido principal
        </a>
        <AudioInit />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
      <Script
        strategy="afterInteractive"
        src={HOTJAR_SCRIPT_SRC}
      />
    </html>
  )
}
