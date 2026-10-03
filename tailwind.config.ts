import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F5F1EC',
        paper:  '#EBE5DC',
        ink:    '#0F3728',
        accent: '#DCBC7D',
        forest: '#14503E',
        blush:  '#F5B8AE',
        mist:   '#4A5446',
        rule:   '#DDD5C5',
      },
      fontFamily: {
        sans:    ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'serif'],
        mono:    ['var(--font-sans)', 'monospace'],
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shooting-star-lr': 'shooting-star-lr 4s linear infinite',
        'shooting-star-rl': 'shooting-star-rl 4.5s linear infinite',
        'shooting-star-tb': 'shooting-star-tb 4.2s linear infinite',
        'shooting-star-bt': 'shooting-star-bt 4.8s linear infinite',
        'timeline-flow': 'timeline-flow 2s linear infinite',
      },
      keyframes: {
        'shooting-star-lr': {
          '0%': { transform: 'translateX(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { transform: 'translateX(calc(100vw + 250px))', opacity: '0' },
        },
        'shooting-star-rl': {
          '0%': { transform: 'translateX(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { transform: 'translateX(calc(-100vw - 250px))', opacity: '0' },
        },
        'shooting-star-tb': {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { transform: 'translateY(calc(120vh + 250px))', opacity: '0' },
        },
        'shooting-star-bt': {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { transform: 'translateY(calc(-120vh - 250px))', opacity: '0' },
        },
        'timeline-flow': {
          '0%': { strokeDashoffset: '48' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      transitionDelay: {
        '400': '400ms',
        '600': '600ms',
      },
    },
  },
  plugins: [],
}

export default config
