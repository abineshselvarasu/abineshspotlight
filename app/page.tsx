import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import BackToTop from '@/components/BackToTop'
import JsonLd from '@/components/JsonLd'
import { SITE_URL } from '@/lib/site'
import { ID, JOB_TITLE, PERSON_NAME, businessNode, jsonLdGraph, pageMetadata, personNode, websiteNode } from '@/lib/seo'

const TITLE = `${JOB_TITLE} | ${PERSON_NAME}`
const DESCRIPTION =
  'WordPress Developer with 3 years 10 months of experience building production WordPress, Drupal, Craft CMS, and Next.js websites for enterprise SaaS and nonprofit teams.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  ...pageMetadata({ path: '/', title: TITLE, description: DESCRIPTION }),
}

const schema = jsonLdGraph(
  personNode,
  websiteNode,
  businessNode,
  {
    '@type': 'ProfilePage',
    '@id': `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: TITLE,
    description:
      `Portfolio of ${PERSON_NAME} — ${JOB_TITLE}. Showcases WordPress plugins, independent web builds, technical capabilities, career background, and contact details.`,
    isPartOf: { '@id': ID.website },
    mainEntity: { '@id': ID.person },
    inLanguage: 'en-US',
    dateCreated: '2023-01-01T08:00:00+05:30',
    dateModified: new Date().toISOString(),
  },
)

export default function Home() {
  return (
    <>
      <JsonLd data={schema} />
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Blog />
        <Contact />
      </main>
      <BackToTop />
    </>
  )
}
