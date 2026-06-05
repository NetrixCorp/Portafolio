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
  tagline:          'Tu negocio merece una presencia que vende.',
  headline:         'Hacemos que tu negocio se vea grande y venda más.',
  subheadline:      'Soluciones digitales para PyMEs en Bogotá, Colombia',
  description:      'Automatizaciones, bots de WhatsApp, landing pages y software a medida. Todo lo que tu negocio necesita para crecer — sin tecnicismos, sin enredos.',
  servicesLine:     'Landing pages · Bots WhatsApp · Automatización · Software a medida',
  ctaPrimary:       'Agenda tu diagnóstico',
  ctaSecondary:     'Ver nuestros proyectos',
  ctaPrimaryLink:   '#contact',
  ctaSecondaryLink: '#casos-de-exito',
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
    title: 'Diagnóstico gratuito',
    description: 'Agendamos una sesión sin costo para entender tu negocio, tus metas y lo que te está frenando. Sin tecnicismos. Sin presión.',
  },
  {
    step: 2,
    title: 'Mapa de problemas',
    description: 'Identificamos exactamente qué está bloqueando tu crecimiento: procesos manuales, ausencia digital, cuellos de botella. Todo visible sobre la mesa.',
  },
  {
    step: 3,
    title: 'Propuesta de solución',
    description: 'Armamos el plan exacto con herramientas, tiempos y costos claros. Sin extras innecesarios, sin promesas infladas. Solo lo que genera resultado.',
  },
  {
    step: 4,
    title: 'Implementación',
    description: 'Construimos rápido y con comunicación constante. Sabes en qué estamos en todo momento. Sin desaparecer ni dilatar.',
  },
  {
    step: 5,
    title: 'Seguimiento',
    description: 'Hacemos seguimiento a 30 y 60 días. Medimos resultados reales y afinamos lo que sea necesario. Eso es lo que hace un aliado.',
  },
] as const;

// ============================================================
// SOBRE NOSOTROS
// ============================================================

export const ABOUT = {
  sectionLabel:    'SOBRE NOSOTROS',
  sectionTitle:    'Dos personas. Una misión.',
  sectionSubtitle: 'No somos proveedores. Somos el equipo digital de tu negocio.',

  intro: 'NETRIX nació de una conversación entre dos amigos que veían lo mismo en todos lados: negocios buenos, con productos reales, perdiendo clientes frente a competidores que simplemente se veían más grandes en internet.\n\nNo porque fueran mejores. Sino porque tenían una página web que inspiraba confianza, respondían por WhatsApp en segundos y aparecían primero en Google. Eso era todo. Y eso marcaba la diferencia.',

  closing: 'Juntos cubrimos lo que pocas agencias pueden cubrir: el que construye y el que comunica, en la misma mesa desde el día uno. Sin intermediarios, sin teléfono dañado, sin versiones del cliente que se pierden en el camino.\n\nNETRIX no es una agencia grande. Es un equipo pequeño con estándares altos, comprometido con negocios que merecen crecer. Si tu negocio es de esos, hay mucho por hacer juntos.',
} as const

// ============================================================
// TEAM
// ============================================================

export const TEAM = [
  {
    id:          'diego',
    name:        'Diego Alejandro Medina',
    role:        'Co-fundador & Tech Lead',
    description: 'Backend, infraestructura, testing, deploy. Obsesionado con código limpio y sistemas escalables.',
    icon:        'Code2',
    specialty:   'Ingeniero de Software',
  },
  {
    id:          'pablo',
    name:        'Juan Pablo Monroy',
    role:        'Co-fundador & Growth Lead',
    description: 'Marketing, ventas, estrategia. Ve el negocio del cliente antes de verlo el cliente mismo.',
    icon:        'TrendingUp',
    specialty:   'Growth & Marketing',
  },
] as const

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
  { label: 'Servicios',      href: '#services',        id: 'services' },
  { label: 'Proceso',        href: '#process',          id: 'process' },
  { label: 'Portafolio',     href: '#casos-de-exito',   id: 'portfolio' },
  { label: 'Por qué NETRIX', href: '#why-netrix',        id: 'why-netrix' },
  { label: 'Sobre nosotros', href: '#about',             id: 'about' },
  { label: 'Contacto',       href: '#contact',          id: 'contact' },
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
// CASOS DE ÉXITO
// ============================================================

export const CASE_STUDIES = [
  {
    id: 'pos-casa-kumis',
    title: 'POS Casa del Kumis',
    category: 'Software a Medida',
    problem: 'Dependencia de software externo con costos crecientes y sin adaptación a las 18 sucursales propias de la cadena.',
    solution: 'Sistema POS propio con gestión de turnos, inventario por sede, cierre de caja automático y pagos integrados con Credinbanco.',
    result: '18 sucursales en producción desde el primer día',
    icon: 'Monitor',
    tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Credinbanco API'],
    description: 'Casa del Kumis opera 18 sucursales en Bogotá con un volumen transaccional diario que ningún software de caja estándar toleraba sin colapsar o facturar una fortuna en licencias. El sistema anterior no reconocía su modelo de turnos partidos, no separaba inventario por sede y no integraba con Credinbanco, el operador de datáfonos que ya tenían desplegado. Construimos un POS propio desde cero: interfaz táctil optimizada para punto de venta, módulo de inventario multi-sede con traspasos entre sucursales, cierre de caja automático con cuadre por operario y una integración directa con la API de Credinbanco para conciliar pagos en tiempo real. El resultado fue un sistema que conoce su negocio mejor que cualquier solución genérica.',
    impact: '18 sucursales en producción el primer día de lanzamiento, sin un solo incidente de caja en el primer mes operativo.',
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'Credinbanco API', 'Redis', 'Docker'],
    timeline: '3 meses',
  },
  {
    id: 'punteo-bancario',
    title: 'Software de Punteo',
    category: 'Automatización',
    problem: 'El cruce manual de vouchers físicos, extractos bancarios y reportes Redeban consumía horas diarias y dejaba errores sin detectar.',
    solution: 'Pipeline automático con OCR que cruza tres fuentes de datos, clasifica diferencias por categoría y genera reportes auditables exportables.',
    result: 'Proceso reducido de horas a minutos',
    icon: 'GitMerge',
    tags: ['React', 'NestJS', 'OCR', 'PostgreSQL'],
    description: 'El área contable cruzaba manualmente tres fuentes de datos cada día: vouchers físicos escaneados, extractos bancarios en PDF y reportes Redeban en Excel. El proceso tomaba entre 3 y 4 horas, el error humano era inevitable y los descuadres solo aparecían al final del día cuando ya era tarde para actuar. Construimos un pipeline de automatización que ingiere los tres archivos, aplica OCR sobre los vouchers, parsea los PDFs bancarios y normaliza los datos de Redeban. El motor de cruce identifica transacciones coincidentes, clasifica las diferencias por tipo —fecha, monto, referencia— y genera un reporte auditable listo para firma. Lo que antes era trabajo de toda una mañana se convirtió en un proceso de ocho minutos.',
    impact: 'Reconciliación bancaria diaria reducida de 4 horas a menos de 10 minutos, con trazabilidad completa de cada diferencia detectada.',
    technologies: ['React', 'NestJS', 'OCR', 'PostgreSQL', 'Python', 'ExcelJS'],
    timeline: '6 semanas',
  },
  {
    id: 'web-casa-kumis',
    title: 'Casa del Kumis — Web',
    category: 'Landing Page',
    problem: 'La empresa no aparecía en búsquedas locales y carecía de presencia digital que generara confianza en nuevos clientes.',
    solution: 'Sitio responsive con SEO técnico optimizado, catálogo de productos estructurado y carga rápida pensada para búsquedas locales.',
    result: 'Presencia digital activa con mejor rendimiento mobile',
    icon: 'Globe',
    tags: ['HTML', 'CSS', 'JavaScript', 'SEO'],
    description: 'Casa del Kumis lleva años siendo referente de productos lácteos en Bogotá, pero su presencia digital era inexistente: sin sitio web, sin Google Business Profile completo y sin aparecer en las primeras páginas de búsqueda para sus productos. Los clientes que los buscaban en internet no los encontraban y terminaban comprando en competidores con peor producto pero mejor posicionamiento. Construimos el sitio desde cero con arquitectura pensada para SEO local: carga inferior a 2 segundos, Schema.org para productos lácteos y negocio local, meta tags optimizados por barrio, catálogo estructurado con datos ricos para Google Shopping y diseño mobile-first para la audiencia objetivo.',
    impact: 'Sitio indexado y visible en búsquedas locales dentro de los primeros 30 días, con carga mobile bajo 1.8 segundos.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'SEO Técnico', 'Schema.org', 'Google Analytics 4'],
    timeline: '2 semanas',
  },
] as const;

// ============================================================
// DIFERENCIADORES (Por qué NETRIX)
// ============================================================

export const DIFFERENTIATORS = [
  {
    id:          'todo-en-uno',
    icon:        'Layers',
    title:       'Todo en uno',
    tagline:     'Sin coordinar 4 proveedores',
    description: 'Diseño, desarrollo, automatización, SEO y bots — bajo una sola relación de confianza. Sin intermediarios, sin teléfono dañado, sin versiones del cliente que se pierden en el camino.',
    benefit:     'Un solo equipo para todo',
  },
  {
    id:          'precios-visibles',
    icon:        'Eye',
    title:       'Precios visibles',
    tagline:     'Sin cotizaciones eternas ni letras pequeñas',
    description: 'Sabes exactamente cuánto cuesta antes de firmar. Sin extras que aparecen en la factura final, sin sorpresas, sin presupuestos que cambian cada semana.',
    benefit:     'Precio claro desde el día uno',
  },
  {
    id:          'seguimiento-real',
    icon:        'TrendingUp',
    title:       'Seguimiento real',
    tagline:     'Métricas reales, no promesas vacías',
    description: 'Hacemos seguimiento a 30, 60 y 90 días con KPIs claros y reportes concretos. Si algo hay que afinar, lo afinamos. Eso es lo que hace un aliado, no un proveedor.',
    benefit:     'Resultados medibles a 30/60/90 días',
  },
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
  DIFFERENTIATORS,
  ABOUT,
  TEAM,
  MESSAGING_PILLARS,
  CONTACT,
  NAVIGATION,
  SEO_KEYWORDS,
  META,
  CASE_STUDIES,
  SOCIAL_LINKS,
  SITE_CONFIG,
};
