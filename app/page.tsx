import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import RevealObserver from '@/components/RevealObserver'
import JsonLd from '@/components/JsonLd'
import { SITE_URL } from '@/lib/site'
import { ID, JOB_TITLE, PERSON_NAME, businessNode, jsonLdGraph, pageMetadata, personNode, websiteNode } from '@/lib/seo'

const TITLE = `${JOB_TITLE} | ${PERSON_NAME}`
const DESCRIPTION =
  'Senior WordPress Developer & Full Stack Engineer with 3+ years architecting enterprise web platforms for global brands.'

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
      `Personal portfolio of ${PERSON_NAME} — ${JOB_TITLE}. Showcases enterprise projects, technical skills, career journey, and contact information.`,
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
      <RevealObserver />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>
    </>
  )
}
