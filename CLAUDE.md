# NETRIX PORTAFOLIO — INSTRUCCIONES PARA CLAUDE CODE

## Contexto del proyecto
NETRIX es una empresa colombiana de soluciones digitales para micro y pequeñas empresas.
**"Convertimos negocios pequeños en marcas que se ven grandes, confiables y competitivas."**

**Fundadores:**
- Monkey (Diego) — Dev, backend, automatizaciones, deploy
- Polo — Marketing, ventas, estrategia comercial

**Servicios:**
- Automatizaciones de procesos (Make, Zapier, custom)
- Software / Apps a medida
- Landing Pages de alto impacto
- SEO técnico + IA SEO
- Bots WhatsApp / Email / Chat
- Consultoría digital

**Mercado objetivo:** Micro y pequeñas empresas en Bogotá, Colombia

---

## Tech Stack

```
Framework:  Next.js 14 (App Router)
Styling:    Tailwind CSS
Animations: motion (from "motion/react") — NUNCA framer-motion
Icons:      Lucide React
Fonts:      Google Fonts (Bebas Neue, Montserrat, Inter, JetBrains Mono)
Deploy:     Vercel
Repo:       github.com/NetrixCorp/Portafolio
```

---

## Sistema de colores NETRIX (EXACTO — no inventar)

```css
/* PRIMARIOS */
--color-black:    #0D0D0D;  /* Base dominante. Fondo principal. */
--color-red:      #FF2E2E;  /* Acento. Solo en CTAs, énfasis, detalles clave. */
--color-white:    #FFFFFF;  /* Contraste. Texto sobre fondos oscuros. */

/* SECUNDARIOS */
--color-black-soft:  #1A1A1A;  /* Cards, fondos secundarios */
--color-black-mid:   #2C2C2C;  /* Bordes, tooltips, separadores */
--color-gray-light:  #F4F4F2;  /* Fondos de docs, secciones claras */
--color-gray-mid:    #CCCCCC;  /* Textos secundarios */
--color-gray-dark:   #555555;  /* Estados desactivados */
```

**REGLAS CRÍTICAS DEL COLOR:**
- El rojo `#FF2E2E` es el activo más valioso. Máximo 2 elementos rojos por componente.
- NUNCA usar rojo como fondo de secciones completas.
- NUNCA usar rojo en texto corrido.
- El negro dominante da autoridad. No aclarar fondos sin razón.
- Texto sobre fondos oscuros: siempre blanco o `#F4F4F2`. NUNCA pesos thin (100-300).

---

## Sistema tipográfico NETRIX

```
Display / Hero:   Bebas Neue Regular — títulos grandes, hero sections
Titulares H1/H2:  Montserrat Bold/ExtraBold
Subtítulos H3/H4: Montserrat SemiBold/Medium
Cuerpo:           Inter Regular/Medium (o DM Sans)
Datos/Números:    Montserrat Bold
Código/Técnico:   JetBrains Mono Regular
```

**Jerarquía web:**
```
H1: 48-64px  Montserrat Bold    color: white o black
H2: 32-40px  Montserrat Bold    color: white o black
H3: 22-28px  Montserrat SemiBold color: white, black o red
Body: 16-18px Inter Regular     color: #CCCCCC o #F4F4F2
Caption: 12-14px Inter Medium   color: #CCCCCC
CTA: 14-16px Montserrat Bold    color: white sobre red
```

**Reglas tipográficas:**
- NETRIX siempre en MAYÚSCULAS. Sin excepciones.
- Tracking mínimo en títulos uppercase: 50 unidades.
- Interlineado cuerpo: 1.6x el tamaño de fuente.
- NUNCA texto justificado — siempre left o center.
- NUNCA fuentes con serifa.
- NUNCA más de 2 familias en una misma sección.

---

## Sistema de botones

```
Primario:    bg:#FF2E2E  text:white  border:none     → CTA principal
Secundario:  bg:transparent  text:white  border:1px white → Acción secundaria
Ghost dark:  bg:transparent  text:black  border:1px black → Sobre fondos claros
Disabled:    bg:#555555  text:#CCCCCC  border:none    → Inactivo
```

**Hover del primario:** `#CC0000` (rojo más oscuro, no más brillante)

---

## Componentes web — especificaciones

### Navbar
- Fondo: `#0D0D0D` + borde inferior rojo 1-2px
- Logo: horizontal compacto, blanco + acento rojo, alineado izquierda
- Links: Montserrat Medium 15-16px, blanco, spacing amplio
- CTA navbar: fondo rojo, texto blanco bold, border-radius pequeño
- Sticky, nunca transparente en scroll

### Hero section
- Fondo: negro total o imagen oscura con overlay negro
- Título: Bebas Neue 60-72px blanco — palabra clave en rojo
- Subtítulo: Inter Regular 18-20px `#CCCCCC`
- CTA primario: rojo sólido, texto blanco, padding generoso
- CTA secundario: borde blanco, texto blanco, fondo transparente

### Cards de servicios
- Fondo: `#1A1A1A`
- Borde: 1px `#2C2C2C`
- Acento superior: 2-3px rojo en cards activas/destacadas
- Ícono: blanco o rojo, línea simple sin relleno
- Título: Montserrat Bold 18-20px blanco
- Descripción: Inter Regular 15px `#CCCCCC`

### Footer
- Fondo: `#0D0D0D`
- Logo compacto blanco + acento rojo, esquina superior izquierda
- Links: Montserrat Regular gris, hover blanco
- Línea separadora superior: roja 1-2px
- Redes: íconos blancos, hover rojo
- Copyright: tipografía muy pequeña, gris medio

### Formularios
- Fondo input: `#1A1A1A`
- Borde: `#2C2C2C`
- Focus: borde rojo `#FF2E2E`
- Texto: blanco

### Separadores
- Línea roja delgada O cambio de tono de fondo entre secciones

---

## Personalidad de marca (para copy y UX)

**ES:** seria, moderna, directa, profesional, ambiciosa, premium
**NO ES:** startup genérica, futurista exagerada, gubernamental rígida, juvenil pop, banco

**Tono de voz:**
- Habla de RESULTADOS, no de tecnología
- Directo y sin rodeos
- Accesible para PyMEs — no jerga técnica
- Confianza sin arrogancia

**Metáfora del logo:**
El chip = tecnología NETRIX. El $ = resultado que entrega. La moneda = valor que recibe el cliente.

---

## Secciones del portafolio

1. **Hero** — Tagline principal + propuesta de valor + CTAs
2. **Servicios** — 6 servicios con cards
3. **Proceso** — Cómo trabajamos (3-4 pasos)
4. **Casos de éxito / Portfolio** — Proyectos reales con métricas
5. **Por qué NETRIX** — Diferenciadores vs competencia
6. **Sobre nosotros** — Monkey + Polo, historia, misión
7. **CTA final / Contacto** — WhatsApp + formulario

---

## Principios de desarrollo

- **SIEMPRE mobile-first.** Diseñar para 375px → 768px → 1024px → 1440px
- **Performance:** < 3s load. Sin imágenes pesadas sin optimizar.
- **Accesibilidad:** WCAG AA mínimo. Focus states, ARIA labels, contraste 4.5:1
- **Componentes reutilizables** en `/components/ui/` y `/components/sections/`
- **Custom siempre.** Cero templates genéricos.
- **Sin hardcode.** Colores y textos en `/lib/constants.ts`
- **Context7** para versiones actuales de Next.js, Tailwind y Motion
- **Ramas:** feature/X → development → main

---

## Estructura del repositorio

```
/app                → páginas (Next.js App Router)
/components
  /ui               → Button, Card, Badge, Input, etc.
  /sections         → Hero, Servicios, Proceso, Portafolio, etc.
  /layout           → Navbar, Footer
/lib
  /constants.ts     → Textos, colores, datos de servicios
  /utils.ts         → Helpers
/public
  /images           → Optimizadas (WebP preferido)
  /fonts            → Si se usa self-host
/docs
  /identidad.md     → Este documento resumido
  /servicios.md     → Descripción detallada de servicios
```

---

## Skills activas en este proyecto

```
/research-agent      → Investigación de competencia, mercado
/marketing-strategist → Messaging, copy, taglines, CTAs
/seo-audit           → Keywords, meta tags, estructura SEO
/frontend-ux         → Componentes, flujos, accesibilidad
```

**Flujo correcto:**
```
/research-agent → /marketing-strategist → /seo-audit → /frontend-ux → código
```

---

## Repo guía

El portafolio personal de Monkey (`otpvayne/Portafolio`) es referencia visual.
**NUNCA modificar ese repo. Solo leer como inspiración.**
Está clonado en `/portafolio-guia/` — solo lectura.

---

## NUNCA hacer

- Modificar `/portafolio-guia/` (repo personal de Monkey)
- Push directo a `main` — siempre pasar por `development`
- Hardcodear colores HEX — usar variables CSS o constantes
- Usar `framer-motion` — usar `motion` (`from "motion/react"`)
- Texto justificado
- Fuentes con serifa
- NETRIX en minúsculas
- Más de 2 familias tipográficas por sección
- Rojo como fondo de página o sección completa
- Más de 2 elementos rojos por componente
- Templates genéricos de UI

---

## Variables CSS base (para `globals.css`)

```css
:root {
  --color-black:      #0D0D0D;
  --color-red:        #FF2E2E;
  --color-red-dark:   #CC0000;
  --color-white:      #FFFFFF;
  --color-black-soft: #1A1A1A;
  --color-black-mid:  #2C2C2C;
  --color-gray-light: #F4F4F2;
  --color-gray-mid:   #CCCCCC;
  --color-gray-dark:  #555555;

  --font-display:  'Bebas Neue', sans-serif;
  --font-heading:  'Montserrat', sans-serif;
  --font-body:     'Inter', sans-serif;
  --font-mono:     'JetBrains Mono', monospace;

  --radius-sm:  4px;
  --radius-md:  8px;
  --radius-lg:  12px;
}
```

---

**Versión:** 1.0
**Fecha:** 25 Mayo 2026
**Proyecto:** NETRIX Corp — Portafolio web
