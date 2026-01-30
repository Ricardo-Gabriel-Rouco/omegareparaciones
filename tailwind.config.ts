import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        primary: {
          DEFAULT: '#CBE03F',
          foreground: '#000000'
        },
        background: {
          DEFAULT: '#000000',
          foreground: '#CBE03F'
        },
        // Colores alternativos placeholders
        accent: {
          DEFAULT: '#CBE03F',
          hover: '#A8BC35',
          muted: '#2A2A2A'
        },
        secondary: {
          DEFAULT: '#1A1A1A',
          foreground: '#FFFFFF'
        },
        muted: {
          DEFAULT: '#333333',
          foreground: '#CBE03F'
        },
        highlight: {
          DEFAULT: '#D4E453',
          foreground: '#000000'
        }
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      }
    }
  },
  plugins: []
} satisfies Config