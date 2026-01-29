import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
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
      }
    }
  },
  plugins: []
} satisfies Config