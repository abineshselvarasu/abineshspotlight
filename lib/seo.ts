import type { Metadata } from 'next'
import { SITE_URL, SOCIAL_PROFILES } from './site'

// ── Shared metadata ───────────────────────────────────────────────────────────
// Next.js replaces (does not deep-merge) nested metadata objects like `openGraph`
// per route, so each page builds its own from these helpers.

export const PERSON_NAME = 'Abinesh Selvarasu'
export const JOB_TITLE = 'Senior WordPress Developer & Full Stack Engineer'
export const SITE_NAME = `${PERSON_NAME} — ${JOB_TITLE}`
export const OG_IMAGE = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  alt: `${PERSON_NAME} — ${JOB_TITLE}`,
  type: 'image/png',
}

// Indexable pages only — the 404 gets Next's automatic `noindex` with nothing conflicting
export const INDEXABLE_ROBOTS: Metadata['robots'] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
}

export function pageMetadata({ path, title, description, ogType = 'website' }: {
  path: string
  title: string // full title shown in social cards
  description: string
  ogType?: 'website' | 'profile'
}): Pick<Metadata, 'description' | 'alternates' | 'openGraph' | 'twitter' | 'robots'> {
  const url = `${SITE_URL}${path === '/' ? '' : path}`
  return {
    description,
    alternates: { canonical: url },
    robots: INDEXABLE_ROBOTS,
    openGraph: {
      type: ogType,
      locale: 'en_US',
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE.url],
    },
  }
}

// ── Structured data (JSON-LD) ─────────────────────────────────────────────────
// Each page emits one @graph; shared entities are referenced by @id so Google sees
// a single Person / WebSite across the site instead of conflicting duplicates.

export const ID = {
  person: `${SITE_URL}/#person`,
  website: `${SITE_URL}/#website`,
  business: `${SITE_URL}/#localbusiness`,
}

const address = {
  '@type': 'PostalAddress',
  addressLocality: 'Coimbatore',
  addressRegion: 'Tamil Nadu',
  postalCode: '641001',
  addressCountry: 'IN',
}

export const personNode = {
  '@type': 'Person',
  '@id': ID.person,
  name: PERSON_NAME,
  alternateName: 'Abinesh S',
  url: SITE_URL,
  image: `${SITE_URL}${OG_IMAGE.url}`,
  email: 'mailtoabineshselva@gmail.com',
  telephone: '+919042972156',
  jobTitle: JOB_TITLE,
  description:
    'Senior WordPress Developer and Full Stack Engineer with 3+ years building production-grade web platforms for global enterprise clients.',
  knowsAbout: [
    'WordPress Development',
    'WordPress Plugin Development',
    'ACF Pro',
    'Gutenberg Blocks',
    'Headless WordPress',
    'Craft CMS',
    'Drupal',
    'PHP',
    'JavaScript',
    'Technical SEO',
    'Core Web Vitals',
    'Next.js',
    'Tailwind CSS',
  ],
  sameAs: SOCIAL_PROFILES,
  address,
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Vidyaa Vikas College of Engineering',
    url: 'https://www.vvcengg.com',
  },
}

export const websiteNode = {
  '@type': 'WebSite',
  '@id': ID.website,
  url: SITE_URL,
  name: `${PERSON_NAME} — Portfolio`,
  description: `Portfolio of ${PERSON_NAME} — ${JOB_TITLE} based in Tamil Nadu, India.`,
  publisher: { '@id': ID.person },
  inLanguage: 'en-US',
}

export const businessNode = {
  '@type': 'ProfessionalService',
  '@id': ID.business,
  name: SITE_NAME,
  image: `${SITE_URL}${OG_IMAGE.url}`,
  url: SITE_URL,
  telephone: '+919042972156',
  email: 'mailtoabineshselva@gmail.com',
  priceRange: '$$',
  founder: { '@id': ID.person },
  address,
  geo: { '@type': 'GeoCoordinates', latitude: 11.0168, longitude: 76.9558 },
  areaServed: 'Worldwide',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  sameAs: SOCIAL_PROFILES,
}

export function breadcrumbNode(path: string, trail: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${SITE_URL}${path}#breadcrumb`,
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: `${SITE_URL}${t.path === '/' ? '' : t.path}`,
    })),
  }
}

export function jsonLdGraph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes }
}
