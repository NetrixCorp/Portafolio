import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'netrix-black':      '#0D0D0D',
        'netrix-red':        '#FF2E2E',
        'netrix-red-dark':   '#CC0000',
        'netrix-card':       '#1A1A1A',
        'netrix-border':     '#2C2C2C',
        'netrix-gray-light': '#F4F4F2',
        'netrix-gray':       '#CCCCCC',
        'netrix-gray-dark':  '#555555',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        heading: ['var(--font-heading)', 'sans-serif'],
        body:    ['var(--font-body)', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        'display-xl': ['72px', { lineHeight: '1',    letterSpacing: '0.05em' }],
        'display-lg': ['60px', { lineHeight: '1.05', letterSpacing: '0.03em' }],
        'display-md': ['48px', { lineHeight: '1.1',  letterSpacing: '0.02em' }],
        'display-sm': ['36px', { lineHeight: '1.15', letterSpacing: '0.02em' }],
      },
      letterSpacing: {
        'display': '0.05em',
        'wide-xl': '0.2em',
      },
      borderWidth: {
        '3': '3px',
      },
      maxWidth: {
        'container': '1280px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink':      'blink 1.2s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0' },
        },
      },
      backgroundImage: {
        'red-glow': 'radial-gradient(ellipse at center, rgba(255,46,46,0.12) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}

export default config
