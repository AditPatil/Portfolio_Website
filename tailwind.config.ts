import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          950: '#070A12',
          900: '#0A0F1D',
        },
        panel: {
          900: 'rgba(255,255,255,0.06)',
          800: 'rgba(255,255,255,0.08)',
        },
        stroke: 'rgba(255,255,255,0.10)',
        text: {
          100: '#F7F8FC',
          200: '#E7EAF3',
          300: '#C7CDDD',
          400: '#9AA3BA',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.35)',
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 18px 45px rgba(0,0,0,0.45)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
    },
  },
  plugins: [],
} satisfies Config

