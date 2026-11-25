import type { Metadata } from 'next'
import Link from 'next/link'
import ResumeActions from '@/components/ResumeActions'
import JsonLd from '@/components/JsonLd'
import { ForwardArrowIcon } from '@/components/icons'
import { SITE_URL } from '@/lib/site'
import { ID, PERSON_NAME, breadcrumbNode, jsonLdGraph, pageMetadata, personNode, websiteNode } from '@/lib/seo'

const TITLE = 'Resume – Senior WordPress Developer'
const DESCRIPTION =
  'Resume of Abinesh Selvarasu, Senior WordPress Developer — 3 years 10 months delivering enterprise WordPress, Drupal, Craft CMS, and React/Next.js websites.'

export const metadata: Metadata = {
  // Template appends "| Abinesh Selvarasu"
  title: TITLE,
  ...pageMetadata({ path: '/resume', title: `${TITLE} | ${PERSON_NAME}`, description: DESCRIPTION, ogType: 'profile' }),
}

const skills = [
  {
    category: 'WordPress & CMS Architecture',
    items: ['Custom Themes & Plugins', 'Gutenberg Blocks (React & PHP)', 'ACF Pro (Modular Layouts)', 'Custom Post Types & Taxonomies', 'Hooks & Filters', 'Multisite', 'Drupal 7/9/10 (Upgrades, Security Patching & Twig)', 'Craft CMS'],
  },
  {
    category: 'Languages & Frontend',
    items: ['PHP 8 (OOP / MVC)', 'JavaScript (ES6+)', 'TypeScript', 'React 19', 'Next.js 15 App Router', 'HTML5', 'CSS3 / SCSS', 'Tailwind CSS'],
  },
  {
    category: 'APIs, Databases & Integrations',
    items: ['WP REST API', 'MySQL', 'Webhook & CRM Wiring', 'Node.js', 'Nodemailer', 'Razorpay / UPI Integration', 'Firebase Auth', 'Supabase'],
  },
  {
    category: 'SEO, Performance & Maintenance',
    items: ['Core Web Vitals (LCP / CLS / INP)', 'PHP 7.4 → 8.x Upgrades', 'Security & Malware Recovery', 'Technical SEO', 'JSON-LD Structured Data', 'Sitemap Optimisation', 'WCAG Accessibility'],
  },
  {
    category: 'DevOps, Servers & Hosting',
    items: ['Agile / Scrum Sprints', 'Git & Code Reviews', 'GitHub Actions CI/CD', 'SSH Multi-Key Configs', 'Ubuntu Server Maintenance', 'Virtualmin', 'CapRover', 'Docker', 'Pantheon', 'WP Engine', 'Kinsta', 'Servd', 'Vercel'],
  },
  {
    category: 'Design & UI Engineering',
    items: ['Figma to Pixel-Perfect Code', 'Responsive UI Prototyping', 'Cross-Browser QA', 'Photoshop', 'GIMP'],
  },
]

const plugins = [
  {
    name: 'WP SVG Engine',
    slug: 'svigent-tools',
    tagline: 'Secure SVG & SVGZ Upload, Preview, Dimension & Inlining',
    description: 'Enables safe SVG & SVGZ uploads using server-side XML/DOM sanitization, Media Library preview fixes, dimension detection, and fast client-side inlining.',
    stack: ['PHP 8', 'WordPress', 'DOM Sanitization', 'SVG'],
    url: 'https://wordpress.org/plugins/svigent-tools/',
  },
  {
    name: 'ClickReach – Social Share Buttons & Counter',
    slug: 'clickreach-social-share-buttons',
    tagline: 'Lightweight, Privacy-Friendly Social Sharing & Live Click Counter',
    description: 'Zero-bloat social sharing buttons powered by a custom WordPress REST API endpoint, pure inline SVGs, and Core Web Vitals friendly performance without third-party tracking scripts.',
    stack: ['WordPress', 'PHP 8', 'REST API', 'JavaScript'],
    url: 'https://wordpress.org/plugins/clickreach-social-share-buttons/',
  },
]

const schema = jsonLdGraph(
  personNode,
  websiteNode,
  {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/resume#webpage`,
    url: `${SITE_URL}/resume`,
    name: `${TITLE} | ${PERSON_NAME}`,
    description: DESCRIPTION,
    isPartOf: { '@id': ID.website },
    about: { '@id': ID.person },
    breadcrumb: { '@id': `${SITE_URL}/resume#breadcrumb` },
    inLanguage: 'en-US',
  },
  breadcrumbNode('/resume', [
    { name: 'Home', path: '/' },
    { name: 'Resume', path: '/resume' },
  ]),
)

export default function ResumePage() {
  return (
    <>
      <JsonLd data={schema} />

      <div className="relative min-h-screen bg-ink text-canvas py-6 sm:py-10 lg:py-12 overflow-x-clip print:bg-white print:text-black print:py-0 print:min-h-0">
        <div className="relative z-10 max-w-7xl mx-auto px-6 print:px-0 print:max-w-none">
          {/* Floating Action Bar */}
          <ResumeActions />

          {/* Main Resume Sheet (Screen: dark card layout; Print: clean 1-column 2-page ATS format) */}
          <main className="bg-ink-deep border border-canvas/15 rounded-2xl p-5 sm:p-8 lg:p-12 shadow-xl text-base leading-relaxed print:bg-white print:text-black print:border-none print:p-0 print:shadow-none print:text-base print:leading-[1.45]">
            {/* ── HEADER ── */}
            <header className="border-b border-canvas/15 pb-6 sm:pb-8 mb-6 sm:mb-8 print:border-neutral-300 print:pb-3 print:mb-4">
              <div className="flex flex-col md:flex-row print:flex-row md:items-end print:items-end justify-between gap-5 sm:gap-6 print:gap-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-accent font-semibold block mb-1.5 print:hidden">
                    Curriculum Vitae
                  </span>
                  <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal text-canvas tracking-tight print:text-black print:text-3xl print:font-bold">
                    Abinesh <span className="text-accent print:text-black font-semibold">Selvarasu</span>
                  </h1>
                  <p className="text-base lg:text-lg text-canvas/85 mt-1.5 font-medium print:text-neutral-800 print:text-sm print:mt-1">
                    Senior WordPress Developer · WordPress, Drupal, Craft CMS &amp; React / Next.js
                  </p>
                </div>

                {/* Contact Details */}
                <div className="text-base space-y-1.5 text-canvas/75 md:text-right print:text-right print:text-neutral-700 print:text-sm print:space-y-0.5">
                  <p>Coimbatore, Tamil Nadu, India</p>
                  <p>
                    <a href="tel:+919042972156" className="hover:text-accent transition-colors print:text-black">
                      +91 90429 72156
                    </a>
                    <span className="hidden print:inline"> · </span>
                    <a href="mailto:mailtoabineshselva@gmail.com" className="hidden print:inline print:text-black">
                      mailtoabineshselva@gmail.com
                    </a>
                  </p>
                  <p className="break-all sm:break-normal print:hidden">
                    <a href="mailto:mailtoabineshselva@gmail.com" className="hover:text-accent transition-colors">
                      mailtoabineshselva@gmail.com
                    </a>
                  </p>
                  <div className="flex flex-wrap md:justify-end print:justify-end items-center gap-2 sm:gap-3 pt-1 print:pt-0 print:gap-1.5">
                    <a href="https://linkedin.com/in/abineshselvarasu/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold print:text-black">
                      LinkedIn
                    </a>
                    <span>·</span>
                    <a href="https://github.com/abineshselvarasu" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold print:text-black">
                      GitHub
                    </a>
                    <span>·</span>
                    <a href="https://profiles.wordpress.org/abineshselvarasu/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold print:text-black">
                      WordPress.org
                    </a>
                    <span>·</span>
                    <Link href="/" className="text-accent hover:underline font-semibold print:text-black">
                      abineshspotlight.online
                    </Link>
                  </div>
                </div>
              </div>
            </header>

            {/* ── PROFESSIONAL SUMMARY ── */}
            <section className="mb-8 sm:mb-10 print:mb-4">
              <h2 className="text-xs sm:text-sm uppercase tracking-wider text-accent font-bold mb-3 print:mb-1.5 print:text-sm print:text-black">
                Professional Summary
              </h2>
              <p className="text-canvas/85 text-base leading-relaxed print:text-neutral-800 print:text-base print:leading-[1.45]">
                Senior WordPress Developer with <strong>3 years 10 months</strong> of experience delivering production websites across WordPress, Drupal, Craft CMS, and React/Next.js for international enterprise SaaS, nonprofit organizations, and independent businesses. Experienced in PHP 8 upgrades, WordPress theme and plugin architecture, Gutenberg blocks, ACF Pro modular builds, REST API integrations, and Agile/Scrum delivery. Measurable impact across 20+ enterprise sites: <strong>−30% LCP</strong>, <strong>+15% organic CTR</strong>, resolved critical sitemap indexing bugs across <strong>1,700+ URLs</strong>, and scaled integration UIs from 16 to 57+ items with zero regressions.
              </p>
            </section>

            {/* ── TECHNICAL SKILLS (Screen: 2-col visual cards; Print: 1-col linear ATS list) ── */}
            <section className="mb-8 sm:mb-10 print:mb-4">
              <h2 className="text-xs sm:text-sm uppercase tracking-wider text-accent font-bold mb-3.5 print:mb-2 print:text-sm print:text-black">
                Technical Competencies
              </h2>

              {/* Visual grid for web */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 print:hidden">
                {skills.map((group) => (
                  <div key={group.category} className="border border-canvas/10 rounded-xl p-3.5 sm:p-4 bg-ink/40">
                    <h3 className="text-xs uppercase tracking-wider text-accent font-semibold mb-2">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-2.5 py-1 rounded-md bg-canvas/5 border border-canvas/10 text-canvas/85"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Single-column linear text for ATS PDF parsing */}
              <ul className="hidden print:block space-y-1.5 text-base text-neutral-800 leading-[1.45]">
                {skills.map((group) => (
                  <li key={group.category}>
                    <strong className="text-black">{group.category}:</strong> {group.items.join(', ')}
                  </li>
                ))}
              </ul>
            </section>

            {/* ── WORK EXPERIENCE ── */}
            <section className="mb-8 sm:mb-10 print:mb-4">
              <h2 className="text-xs sm:text-sm uppercase tracking-wider text-accent font-bold mb-4 print:mb-2 print:text-sm print:text-black">
                Professional Experience
              </h2>

              <div className="space-y-6 sm:space-y-8 print:space-y-4">
                {/* FueInt Technologies */}
                <div className="border-l-2 border-accent/40 pl-4 sm:pl-6 relative print:border-none print:pl-0">
                  <div className="flex flex-col sm:flex-row print:flex-row sm:items-baseline print:items-baseline justify-between gap-1 mb-1 print:mb-1">
                    <h3 className="font-display text-xl sm:text-2xl text-canvas font-normal print:text-black print:text-base print:font-bold">
                      Engineer – Web Apps <span className="hidden print:inline font-normal text-neutral-700">· FueInt Technologies, Coimbatore</span>
                    </h3>
                    <span className="text-xs text-accent font-semibold print:text-neutral-700 print:text-sm">
                      July 2022 – May 2026 (Full-time)
                    </span>
                  </div>

                  <p className="text-base text-canvas/65 mb-3.5 print:hidden">
                    FueInt Technologies · Coimbatore, Tamil Nadu, India
                  </p>

                  <ul className="space-y-2 text-base text-canvas/85 leading-relaxed list-disc list-outside ml-4 print:text-base print:text-neutral-800 print:space-y-1.5 print:leading-[1.45]">
                    <li>
                      <strong>WordPress Themes, ACF Pro &amp; Gutenberg:</strong> Built custom themes, plugins, reusable React/PHP Gutenberg block suites (Data, CTA, FAQ, Video Popup), and 50+ ACF Pro modular layouts across <strong>20+ international enterprise SaaS and nonprofit projects</strong>.
                    </li>
                    <li>
                      <strong>PHP 8 Upgrades, Multi-CMS &amp; Incident Recovery:</strong> Led <strong>PHP 7.4 → 8.x upgrades</strong>, monthly security patching, malware/incident recovery, Drupal 7/9/10 upgrades and Twig fixes, and Craft CMS WCAG accessibility compliance.
                    </li>
                    <li>
                      <strong>Core Web Vitals &amp; Technical SEO:</strong> Cut <strong>LCP by ~30%</strong> via caching and PHP/asset refactoring; implemented JSON-LD structured data lifting organic CTR by <strong>~15%</strong>, and resolved a sitemap URL-encoding bug across <strong>1,700+ indexed URLs</strong>.
                    </li>
                    <li>
                      <strong>REST APIs, Servers &amp; Agile/Scrum Delivery:</strong> Integrated WP REST APIs and CRM webhooks in <strong>Agile/Scrum</strong> teams; maintained Ubuntu dev servers via <strong>Virtualmin, CapRover &amp; Docker</strong>, and shipped across <strong>Pantheon, WP Engine, Kinsta, and Servd</strong>.
                    </li>
                  </ul>
                </div>

                {/* Freelance / Gradiolex */}
                <div className="border-l-2 border-accent/40 pl-4 sm:pl-6 relative print:border-none print:pl-0 print:break-inside-avoid">
                  <div className="flex flex-col sm:flex-row print:flex-row sm:items-baseline print:items-baseline justify-between gap-1 mb-1 print:mb-1">
                    <h3 className="font-display text-xl sm:text-2xl text-canvas font-normal print:text-black print:text-base print:font-bold">
                      Freelance Web Developer <span className="hidden print:inline font-normal text-neutral-700">· Gradiolex</span>
                    </h3>
                    <span className="text-xs text-accent font-semibold print:text-neutral-700 print:text-sm">
                      May 2025 – Present
                    </span>
                  </div>

                  <p className="text-base text-canvas/65 mb-2.5 print:hidden">
                    Gradiolex · Independent Client &amp; Utility Engineering
                  </p>

                  <ul className="space-y-1.5 text-base text-canvas/85 leading-relaxed list-disc list-outside ml-4 print:text-base print:text-neutral-800 print:space-y-1 print:leading-[1.45]">
                    <li><strong>NILAM Ventures:</strong> WordPress platform for an aquaculture &amp; farmtech advisory firm (Kadence, ACF Pro, Fluent Forms, WhatsApp lead routing on Pantheon).</li>
                    <li><strong>Card About Me:</strong> Next.js, React &amp; TypeScript link-in-bio SaaS with appointment bookings, WhatsApp chat, and 0%-commission direct UPI payments (<a href="https://www.cardabout.me/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline print:text-black">cardabout.me</a>).</li>
                    <li><strong>MySupportInfo:</strong> Next.js, React &amp; TypeScript client-side device diagnostics tool inspecting browser, OS, WebRTC leaks, and bufferbloat latency (<a href="https://mysupportinfo.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline print:text-black">mysupportinfo.com</a>).</li>
                    <li><strong>NaviCakes &amp; Sri Dhanamoorthy Traders:</strong> Custom Next.js bakery portal and WordPress/ACF B2B wholesale catalogue site from Figma to production.</li>
                    <li><strong>MoneyArk:</strong> AI personal finance app with receipt OCR scanning, voice expense tracking, Google OAuth, Expo / React Native, TanStack Query, and Supabase Edge Functions.</li>
                    <li><strong>Parithadam:</strong> E-commerce web platform built with Next.js 15, React, Tailwind CSS, Razorpay integration, and Nodemailer order notifications.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* ── PUBLISHED WORDPRESS PLUGINS ── */}
            <section className="mb-8 sm:mb-10 print:mb-4 print:break-inside-avoid">
              <div className="flex items-center justify-between mb-3.5 print:mb-1.5">
                <h2 className="text-xs sm:text-sm uppercase tracking-wider text-accent font-bold print:text-sm print:text-black">
                  Published WordPress.org Plugins
                </h2>
                <span className="text-xs text-canvas/60 hidden xs:inline print:hidden">Official Plugin Author</span>
              </div>

              {/* Screen: 2-column visual cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:hidden">
                {plugins.map((plugin) => (
                  <div key={plugin.name} className="border border-canvas/15 rounded-xl p-4 sm:p-5 bg-ink/60">
                    <div className="flex flex-col xs:flex-row xs:items-start justify-between gap-1.5 xs:gap-2 mb-2">
                      <h3 className="font-display text-lg sm:text-xl text-canvas font-normal">
                        {plugin.name}
                      </h3>
                      <span className="self-start text-xs px-2.5 py-0.5 rounded-full border border-accent/40 text-accent bg-accent/10 whitespace-nowrap">
                        Live on WP.org
                      </span>
                    </div>
                    <p className="text-base text-accent/90 font-medium mb-2 leading-snug">{plugin.tagline}</p>
                    <p className="text-base text-canvas/75 leading-relaxed mb-4">{plugin.description}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2.5 border-t border-canvas/10">
                      <div className="flex flex-wrap gap-1.5">
                        {plugin.stack.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-0.5 rounded bg-canvas/5 border border-canvas/10 text-canvas/70">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={plugin.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1 self-start sm:self-auto"
                      >
                        <span>View on WP.org</span>
                        <ForwardArrowIcon className="w-3.5 h-3.5" strokeWidth={2.2} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Print: compact 1-column ATS list */}
              <ul className="hidden print:block space-y-1.5 text-base text-neutral-800 leading-[1.45] list-disc list-outside ml-4">
                {plugins.map((plugin) => (
                  <li key={plugin.name}>
                    <strong className="text-black">{plugin.name}:</strong> {plugin.description} ({plugin.url})
                  </li>
                ))}
              </ul>
            </section>

            {/* ── EDUCATION ── */}
            <section className="border-t border-canvas/15 pt-6 sm:pt-8 print:border-neutral-300 print:pt-3 print:break-inside-avoid">
              <h2 className="text-xs sm:text-sm uppercase tracking-wider text-accent font-bold mb-3 print:mb-1.5 print:text-sm print:text-black">
                Education
              </h2>
              <div className="flex flex-col sm:flex-row print:flex-row sm:items-baseline print:items-baseline justify-between gap-1">
                <div>
                  <h3 className="font-display text-lg sm:text-xl text-canvas font-normal print:text-black print:text-base print:font-bold">
                    B.E. Computer Science &amp; Engineering · <span className="font-normal">Vidyaa Vikas College of Engineering (Anna University)</span>
                  </h3>
                </div>
                <div className="text-base text-accent font-semibold sm:text-right print:text-neutral-700 print:text-sm shrink-0 print:whitespace-nowrap">
                  2016 – 2020 · CGPA: 7.04 / 10
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  )
}
