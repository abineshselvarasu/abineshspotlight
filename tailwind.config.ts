import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // `xs` must precede the defaults so min-width variants cascade in order
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        canvas:  '#F5F1EC',
        surface: '#FFFFFF',
        paper:   '#F7F5F2',
        ink:     '#0F3728',
        'ink-deep': '#0A261B',
        accent:  '#DCBC7D',
        'accent-hover': '#C8A562',
        forest:  '#14503E',
        mist:    '#4A5446',
        rule:    '#E2DDD4',
      },
      fontFamily: {
        sans:    ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'serif'],
        mono:    ['var(--font-sans)', 'sans-serif'],
      },
      animation: {
        'shooting-star-lr': 'shooting-star-lr 4s linear infinite',
        'shooting-star-rl': 'shooting-star-rl 4.5s linear infinite',
        'shooting-star-tb': 'shooting-star-tb 4.2s linear infinite',
        'shooting-star-bt': 'shooting-star-bt 4.8s linear infinite',
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
          '100%': { transform: 'translateY(calc(100vh + 250px))', opacity: '0' },
        },
        'shooting-star-bt': {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { transform: 'translateY(calc(-100vh - 250px))', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
