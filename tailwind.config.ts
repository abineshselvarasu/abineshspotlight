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
    },
  },
  plugins: [],
}

export default config
