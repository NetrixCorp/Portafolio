/**
 * NETRIX Portafolio — Constants
 * Todos los textos, servicios, colores y datos
 * Actualizado: 25 Mayo 2026
 */

// ============================================================
// COLORES — Del CLAUDE.md (NETRIX Identity)
// ============================================================

export const COLORS = {
  // Primarios
  black: '#0D0D0D',      // Base dominante
  red: '#FF2E2E',        // Acento sagrado
  white: '#FFFFFF',      // Contraste
  
  // Secundarios
  blackSoft: '#1A1A1A',  // Cards, fondos secundarios
  blackMid: '#2C2C2C',   // Bordes, tooltips
  grayLight: '#F4F4F2',  // Fondos documentos
  grayMid: '#CCCCCC',    // Textos secundarios
  grayDark: '#555555',   // Desactivado
} as const;

// ============================================================
// HERO SECTION
// ============================================================

export const HERO = {
  tagline: 'Tu negocio merece una presencia que vende.',
  headline: 'Hacemos que tu negocio se vea grande y venda más.',
  subheadline: 'Automatizaciones, bots de WhatsApp, landing pages y software a medida. Todo lo que tu negocio necesita para crecer — sin tecnicismos, sin enredos.',
  ctaPrimary: 'Agenda tu diagnóstico',
  ctaSecondary: 'Ver nuestros proyectos',
  ctaPrimaryLink: '#contact', // Scroll to contact
  ctaSecondaryLink: '#portfolio', // Scroll to portfolio
} as const;

// ============================================================
// PROPUESTA DE VALOR
// ============================================================

export const VALUE_PROPOSITION = [
  {
    title: 'Un solo equipo. Todo lo que necesitas para digitalizarte.',
    description: 'No coordinas diseñadores, programadores y especialistas por separado. NETRIX lo cubre todo.',
  },
  {
    title: 'Precios claros desde el día uno.',
    description: 'Sin cotizaciones eternas ni letras pequeñas. Sabes cuánto cuesta antes de hablar con nosotros.',
  },
  {
    title: 'Resultados medibles. O volvemos y lo afinamos.',
    description: 'Entregamos el proyecto y hacemos seguimiento a 30, 60 y 90 días. Una alianza real, no una venta y adiós.',
  },
] as const;

// ============================================================
// SERVICIOS (6)
// ============================================================

export const SERVICES = [
  {
    id: 'landing-pages',
    icon: 'Zap', // Lucide icon name
    name: 'Páginas que Venden',
    description: 'Tu presencia online diseñada para convertir visitantes en clientes reales.',
    color: COLORS.red, // Icon color
  },
  {
    id: 'whatsapp-bots',
    icon: 'MessageCircle',
    name: 'Bots de WhatsApp',
    description: 'Responde a tus clientes 24/7 en WhatsApp sin depender de nadie.',
    color: COLORS.red,
  },
  {
    id: 'automation',
    icon: 'Cog',
    name: 'Automatización de Procesos',
    description: 'Eliminamos tareas repetitivas para que tu equipo se enfoque en vender.',
    color: COLORS.red,
  },
  {
    id: 'custom-software',
    icon: 'Code',
    name: 'Software a Medida',
    description: 'La herramienta exacta que tu negocio necesita. Construida para ti.',
    color: COLORS.red,
  },
  {
    id: 'seo',
    icon: 'Search',
    name: 'SEO que Posiciona',
    description: 'Aparecer primero en Google no es suerte — es estrategia ejecutada correctamente.',
    color: COLORS.red,
  },
  {
    id: 'consulting',
    icon: 'Lightbulb',
    name: 'Consultoría Digital',
    description: 'Te decimos exactamente qué necesita tu negocio para crecer en digital.',
    color: COLORS.red,
  },
] as const;

// ============================================================
// PROCESO (4 PASOS)
// ============================================================

export const PROCESS = [
  {
    step: 1,
    title: 'Escuchamos',
    description: 'Agendamos una sesión gratuita para entender tu negocio, tus metas y lo que te está frenando. Sin tecnicismos. Sin presión.',
  },
  {
    step: 2,
    title: 'Diseñamos',
    description: 'Armamos el plan exacto de lo que necesitas. Sin extras innecesarios, sin promesas infladas. Solo lo que genera resultado.',
  },
  {
    step: 3,
    title: 'Ejecutamos',
    description: 'Desarrollamos rápido y con comunicación constante. Sabes en qué estamos en todo momento. Sin desaparecer ni dilatar.',
  },
  {
    step: 4,
    title: 'Medimos',
    description: 'Entregamos resultados reales. Hacemos seguimiento a 30 y 60 días. Si algo hay que afinar, lo afinamos. Eso es lo que hace un aliado.',
  },
] as const;

// ============================================================
// SOBRE NOSOTROS
// ============================================================

export const ABOUT = {
  intro: 'NETRIX nació de una conversación entre dos amigos que veían lo mismo en todos lados: negocios buenos, con productos reales, perdiendo clientes frente a competidores que simplemente se veían más grandes en internet.\n\nNo porque fueran mejores. Sino porque tenían una página web que inspiraba confianza, respondían por WhatsApp en segundos y aparecían primero en Google. Eso era todo. Y eso marcaba la diferencia.',
  
  founders: [
    {
      name: 'Monkey',
      title: 'Arquitecto Técnico',
      bio: 'Desarrollador backend con obsesión por los detalles, lidera el diseño y construcción de cada solución: desde el bot de WhatsApp que responde a las 2am hasta la automatización que conecta inventario con factura sin que nadie la toque. Cuando dice que algo va a funcionar, es porque ya lo probó.',
      icon: 'Code',
    },
    {
      name: 'Polo',
      title: 'Estratega Comercial',
      bio: 'Estratega comercial con años conectando marcas con las personas correctas, lidera la conversación con cada cliente: entiende el negocio, traduce las necesidades en soluciones concretas y se asegura de que el resultado final no sea solo bonito sino efectivo.',
      icon: 'Target',
    },
  ],
  
  closing: 'Juntos cubrimos lo que pocas agencias pueden cubrir: el que construye y el que comunica, en la misma mesa desde el día uno. Sin intermediarios, sin teléfono dañado, sin versiones del cliente que se pierden en el camino.\n\nNETRIX no es una agencia grande. Es un equipo pequeño con estándares altos, comprometido con negocios que merecen crecer. Si tu negocio es de esos, hay mucho por hacer juntos.',
} as const;

// ============================================================
// PILARES DE MENSAJERÍA (Consistencia)
// ============================================================

export const MESSAGING_PILLARS = {
  result: 'No vendemos bots. Vendemos que tus clientes nunca queden sin respuesta.',
  transparency: 'Precios visibles. Sin sorpresas. Sin juegos.',
  alliance: 'No somos proveedores. Somos el equipo digital de tu negocio.',
  pymeFocus: 'Construido para negocios reales, no para corporativos.',
  proof: 'No lo digas tú. Que lo digan los números.',
} as const;

// ============================================================
// CONTACTO / CTA FINAL
// ============================================================

export const CONTACT = {
  headline: 'Listo para crecer tu negocio?',
  subheadline: 'Agenda una sesión gratuita. Sin compromiso.',
  ctaButton: 'Iniciar por WhatsApp',
  ctaLink: 'https://wa.me/57XXXXXXXXX?text=Hola%20NETRIX%2C%20me%20gustaría%20agendar%20una%20sesión%20gratuita.',
  
  // Para formulario alternativo
  email: 'hola@netrix.com.co',
  phone: '+57 XXX XXX XXXX',
  responseTime: 'Respondemos en menos de 1 hora.',
} as const;

// ============================================================
// NAVEGACIÓN
// ============================================================

export const NAVIGATION = [
  { label: 'Servicios', href: '#services', id: 'services' },
  { label: 'Proceso', href: '#process', id: 'process' },
  { label: 'Sobre nosotros', href: '#about', id: 'about' },
  { label: 'Contacto', href: '#contact', id: 'contact' },
] as const;

// ============================================================
// KEYWORDS (SEO)
// ============================================================

export const SEO_KEYWORDS = [
  'automatización de procesos empresariales Colombia',
  'agencia de automatización Bogotá',
  'desarrollo de software a medida Colombia',
  'chatbot WhatsApp para empresas Colombia',
  'soluciones digitales para PyMEs Colombia',
  'landing page para negocios Bogotá',
  'transformación digital PyMEs Colombia',
  'bot WhatsApp ventas Colombia',
  'SEO para pequeñas empresas Bogotá',
  'agencia digital para negocios pequeños Colombia',
] as const;

// ============================================================
// META TAGS (SEO)
// ============================================================

export const META = {
  title: 'NETRIX | Soluciones Digitales para tu Negocio',
  description: 'Automatizaciones, bots WhatsApp, landing pages y software a medida para PyMEs en Bogotá. Precios claros. Resultados medibles.',
  ogTitle: 'NETRIX | Tu negocio merece verse como marca grande',
  ogDescription: 'Agencia digital boutique especializada en soluciones completas para pequeñas empresas.',
  canonicalUrl: 'https://netrix.com.co',
} as const;

// ============================================================
// CASOS DE ÉXITO (ESTRUCTURA)
// Para llenar con datos reales
// ============================================================

export const CASE_STUDIES = [
  {
    id: 'case-1',
    industry: 'Restaurante',
    city: 'Bogotá',
    problem: 'Perdía 60% de consultas por WhatsApp fuera de horario',
    solution: 'Bot WhatsApp con menú interactivo + reservas automáticas',
    solutionTime: '14 días',
    result: '0 consultas sin respuesta',
    resultMetric: '+28% pedidos',
    resultTime: '45 días',
    testimonial: '"Ahora duermo tranquilo"',
    clientName: 'Jorge Morales',
    clientRole: 'Dueño',
    image: '/images/case-1.jpg',
  },
  // Agregar 2-3 más cuando tengas datos reales
] as const;

// ============================================================
// REDES SOCIALES / LINKS EXTERNOS
// ============================================================

export const SOCIAL_LINKS = {
  whatsapp: 'https://wa.me/57XXXXXXXXX',
  instagram: 'https://instagram.com/netrixcorp',
  linkedin: 'https://linkedin.com/company/netrix-corp',
  email: 'hola@netrix.com.co',
} as const;

// ============================================================
// CONFIGURACIÓN DEL SITIO
// ============================================================

export const SITE_CONFIG = {
  siteName: 'NETRIX',
  siteUrl: 'https://netrix.com.co',
  logo: '/logo-netrix.svg',
  logoSmall: '/logo-netrix-symbol.svg',
  year: new Date().getFullYear(),
  companyName: 'NETRIX Corp',
  tagline: 'Tu negocio merece una presencia que vende.',
} as const;

// ============================================================
// EXPORT DEFAULT
// ============================================================

export default {
  COLORS,
  HERO,
  VALUE_PROPOSITION,
  SERVICES,
  PROCESS,
  ABOUT,
  MESSAGING_PILLARS,
  CONTACT,
  NAVIGATION,
  SEO_KEYWORDS,
  META,
  CASE_STUDIES,
  SOCIAL_LINKS,
  SITE_CONFIG,
};
