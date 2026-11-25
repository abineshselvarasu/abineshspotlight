import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import { SITE_URL } from '@/lib/site'
import { JOB_TITLE, PERSON_NAME } from '@/lib/seo'
import './globals.css'

const dmSerifDisplay = localFont({
  src: [
    { path: './fonts/DMSerifDisplay-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/DMSerifDisplay-Italic.woff2',  weight: '400', style: 'italic' },
  ],
  variable: '--font-display',
  display: 'swap',
})

const albertSans = localFont({
  src: [
    { path: './fonts/AlbertSans-Normal-Variable.woff2', weight: '100 900', style: 'normal' },
    { path: './fonts/AlbertSans-Italic-Variable.woff2', weight: '100 900', style: 'italic' },
  ],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${JOB_TITLE} | ${PERSON_NAME}`,
    template: `%s | ${PERSON_NAME}`,
  },

  description:
    'WordPress Developer with 3.5+ years building production WordPress, Drupal, Craft CMS, and Next.js websites for enterprise SaaS and nonprofit teams.',

  keywords: [
    'Abinesh Selvarasu',
    'WordPress Developer',
    'WordPress Plugin Developer',
    'ACF Pro Developer',
    'Gutenberg Blocks Developer',
    'Headless WordPress',
    'WPGraphQL',
    'Craft CMS Developer',
    'Drupal Developer',
    'Technical SEO Specialist',
    'Core Web Vitals Optimization',
    'PHP Developer',
    'JavaScript Developer',
    'Next.js Developer',
    'React Developer',
  ],

  authors: [{ name: PERSON_NAME, url: SITE_URL }],
  creator: PERSON_NAME,
  publisher: PERSON_NAME,
  category: 'Technology',

  // Canonical, robots, Open Graph and JSON-LD are set per page (see lib/seo.ts) so
  // nothing page-specific leaks into other routes such as the 404.

  icons: {
    icon: { url: '/favicon.ico', sizes: 'any' },
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0F3728',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${albertSans.variable} scroll-smooth`}>
      <body className="font-sans bg-ink text-ink antialiased overflow-x-clip min-h-screen">
        {children}
        <Analytics />

        {/* Google Analytics — loaded when the browser is idle so it never competes with first render or input (TBT/INP) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-P18SXZK5DY" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P18SXZK5DY');
          `}
        </Script>
      </body>
    </html>
  )
}
