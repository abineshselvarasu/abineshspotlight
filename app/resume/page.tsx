import type { Metadata } from 'next'
import Link from 'next/link'
import ResumeActions from '@/components/ResumeActions'
import JsonLd from '@/components/JsonLd'
import { SITE_URL } from '@/lib/site'
import { ID, PERSON_NAME, breadcrumbNode, jsonLdGraph, pageMetadata, personNode, websiteNode } from '@/lib/seo'

const TITLE = 'Resume – WordPress Developer'
const DESCRIPTION =
  'Resume of Abinesh Selvarasu, WordPress Developer — 3.5+ years delivering enterprise WordPress, Drupal, Craft CMS, and Next.js websites.'

export const metadata: Metadata = {
  // Template appends "| Abinesh Selvarasu"
  title: TITLE,
  ...pageMetadata({ path: '/resume', title: `${TITLE} | ${PERSON_NAME}`, description: DESCRIPTION, ogType: 'profile' }),
}

const skills = [
  {
    category: 'WordPress & CMS Architecture',
    items: ['Custom Themes & Plugins', 'Gutenberg Blocks (React & PHP)', 'ACF Pro (Modular Layouts)', 'Custom Post Types & Taxonomies', 'Hooks & Filters', 'REST API & WPGraphQL', 'WooCommerce', 'Multisite', 'Drupal 7/9/10 (Twig & Views)', 'Craft CMS'],
  },
  {
    category: 'Languages & Frontend',
    items: ['PHP (OOP / MVC)', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js 15', 'HTML5', 'CSS3 / SCSS', 'Tailwind CSS'],
  },
  {
    category: 'SEO & Performance Engineering',
    items: ['Core Web Vitals (LCP / CLS / INP)', 'Technical SEO', 'JSON-LD Structured Data', 'Sitemap Optimisation', 'PageSpeed Insights', 'Asset & Cache Optimisation', 'WCAG Accessibility'],
  },
  {
    category: 'DevOps & Hosting Environments',
    items: ['Git', 'GitHub Actions CI/CD', 'SSH Multi-Key Configs', 'Docker', 'Pantheon', 'WP Engine', 'Kinsta', 'Servd', 'Vercel', 'Staging-to-Production Deployments'],
  },
  {
    category: 'Backend, Databases & APIs',
    items: ['MySQL', 'REST API Design & Integration', 'Node.js', 'Nodemailer', 'Razorpay / UPI Integration', 'Firebase Auth', 'Supabase'],
  },
  {
    category: 'Design & Prototyping Tools',
    items: ['Figma to Pixel-Perfect Code', 'Responsive UI Prototyping', 'Photoshop', 'GIMP'],
  },
]

const plugins = [
  {
    name: 'WP SVG Engine',
    slug: 'svigent-tools',
    tagline: 'Secure SVG & SVGZ Upload, Preview, Dimension & Inlining',
    description: 'Enables safe SVG & SVGZ uploads with automated DOM sanitization, Media Library preview fixes, dimension detection, and fast client-side inlining.',
    stack: ['PHP', 'WordPress', 'DOM Sanitization', 'SVG'],
    url: 'https://wordpress.org/plugins/svigent-tools/',
  },
  {
    name: 'ClickReach – Social Share Buttons & Counter',
    slug: 'clickreach-social-share-buttons',
    tagline: 'Lightweight, Privacy-Friendly Social Sharing & Live Click Counter',
    description: 'Zero-bloat social sharing buttons with live click counters, pure inline SVGs, and Core Web Vitals friendly performance without third-party tracking scripts.',
    stack: ['WordPress', 'PHP', 'JavaScript', 'REST API'],
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

      <div className="relative min-h-screen bg-ink text-canvas py-6 sm:py-10 lg:py-12 px-3 sm:px-6 lg:px-8 overflow-x-clip print:bg-white print:text-black print:py-0 print:px-0 print:min-h-0">
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Floating Action Bar */}
          <ResumeActions />

          {/* Main Resume Sheet */}
          <main className="bg-ink-deep border border-canvas/15 rounded-2xl p-5 sm:p-8 lg:p-12 shadow-xl print:bg-white print:text-black print:border-none print:p-0 print:shadow-none">
            {/* ── HEADER ── */}
            <header className="border-b border-canvas/15 pb-6 sm:pb-8 mb-6 sm:mb-8 print:border-neutral-300 print:pb-4 print:mb-5">
              <div className="flex flex-col md:flex-row print:flex-row md:items-end print:items-end justify-between gap-5 sm:gap-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-accent font-semibold block mb-1.5 print:text-neutral-700">
                    Curriculum Vitae
                  </span>
                  <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal text-canvas tracking-tight print:text-black">
                    Abinesh <span className="text-accent print:text-black font-semibold">S</span>
                  </h1>
                  <p className="text-sm sm:text-base lg:text-lg text-canvas/85 mt-1.5 font-medium print:text-neutral-800">
                    WordPress Developer · WordPress, Drupal, Craft CMS &amp; Next.js
                  </p>
                </div>

                {/* Contact Details */}
                <div className="text-xs sm:text-sm space-y-1.5 text-canvas/75 md:text-right print:text-neutral-700">
                  <p>Coimbatore, Tamil Nadu, India</p>
                  <p>
                    <a href="tel:+919042972156" className="hover:text-accent transition-colors print:text-black">
                      +91 90429 72156
                    </a>
                  </p>
                  <p className="break-all sm:break-normal">
                    <a href="mailto:mailtoabineshselva@gmail.com" className="hover:text-accent transition-colors print:text-black">
                      mailtoabineshselva@gmail.com
                    </a>
                  </p>
                  <div className="flex flex-wrap md:justify-end items-center gap-2 sm:gap-3 pt-1">
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
                      Portfolio
                    </Link>
                  </div>
                </div>
              </div>
            </header>

            {/* ── PROFESSIONAL SUMMARY ── */}
            <section className="mb-8 sm:mb-10">
              <h2 className="text-xs sm:text-sm uppercase tracking-wider text-accent font-bold mb-3 print:text-black">
                Professional Summary
              </h2>
              <p className="text-canvas/85 text-sm sm:text-base leading-relaxed print:text-neutral-800">
                WordPress Developer with <strong>3.5+ years</strong> delivering production websites for global enterprise SaaS, nonprofit organizations, and growing businesses. Experienced in custom PHP development, WordPress theme and plugin architecture, Gutenberg block systems, and ACF Pro modular builds across WordPress, Drupal, and Craft CMS. Proven measurable impact across 20+ international sites: <strong>+15% organic CTR</strong>, <strong>−30% LCP</strong>, resolved critical sitemap indexing bugs across <strong>1,700+ URLs</strong>, and scaled integration UIs from 16 to 57+ items with zero regressions. Extends into React and Next.js frontends — CI/CD-disciplined with managed hosting expertise across Pantheon, WP Engine, Kinsta, Servd, and Vercel.
              </p>
            </section>

            {/* ── PUBLISHED WORDPRESS PLUGINS ── */}
            <section className="mb-8 sm:mb-10 print:mb-5 print:break-inside-avoid">
              <div className="flex items-center justify-between mb-3.5 print:mb-2">
                <h2 className="text-xs sm:text-sm uppercase tracking-wider text-accent font-bold print:text-black">
                  Published WordPress.org Plugins
                </h2>
                <span className="text-xs text-canvas/60 hidden xs:inline print:hidden">Official Plugin Author</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-4 print:gap-3">
                {plugins.map((plugin) => (
                  <div key={plugin.name} className="border border-canvas/15 rounded-xl p-4 sm:p-5 bg-ink/60 print:border-neutral-300 print:bg-neutral-50 print:p-3 print:break-inside-avoid">
                    <div className="flex flex-col xs:flex-row xs:items-start justify-between gap-1.5 xs:gap-2 mb-2">
                      <h3 className="font-display text-lg sm:text-xl text-canvas font-normal print:text-black">
                        {plugin.name}
                      </h3>
                      <span className="self-start text-xs px-2.5 py-0.5 rounded-full border border-accent/40 text-accent bg-accent/10 whitespace-nowrap print:border-neutral-400 print:text-neutral-800">
                        Live on WP.org
                      </span>
                    </div>
                    <p className="text-xs text-accent/90 font-medium mb-2 leading-snug print:text-neutral-700">{plugin.tagline}</p>
                    <p className="text-xs sm:text-sm text-canvas/75 leading-relaxed mb-4 print:text-neutral-700">{plugin.description}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2.5 border-t border-canvas/10 print:border-neutral-200">
                      <div className="flex flex-wrap gap-1.5">
                        {plugin.stack.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-0.5 rounded bg-canvas/5 border border-canvas/10 text-canvas/70 print:bg-neutral-200 print:text-black">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={plugin.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1 self-start sm:self-auto print:text-black"
                      >
                        View on WP.org ↗
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── TECHNICAL SKILLS ── */}
            <section className="mb-8 sm:mb-10 print:mb-5">
              <h2 className="text-xs sm:text-sm uppercase tracking-wider text-accent font-bold mb-3.5 print:mb-2 print:text-black">
                Technical Competencies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-3.5 print:gap-2.5">
                {skills.map((group) => (
                  <div key={group.category} className="border border-canvas/10 rounded-xl p-3.5 sm:p-4 bg-ink/40 print:border-neutral-300 print:p-2.5 print:break-inside-avoid">
                    <h3 className="text-xs uppercase tracking-wider text-accent font-semibold mb-2 print:text-black">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-2.5 py-1 rounded-md bg-canvas/5 border border-canvas/10 text-canvas/85 print:bg-neutral-100 print:border-neutral-300 print:text-black"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── WORK EXPERIENCE ── */}
            <section className="mb-8 sm:mb-10">
              <h2 className="text-xs sm:text-sm uppercase tracking-wider text-accent font-bold mb-4 print:text-black">
                Professional Experience
              </h2>

              <div className="space-y-6 sm:space-y-8">
                {/* FueInt Technologies */}
                <div className="border-l-2 border-accent/40 pl-4 sm:pl-6 relative print:border-neutral-400">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <h3 className="font-display text-xl sm:text-2xl text-canvas font-normal print:text-black">
                      Engineer – Web Apps
                    </h3>
                    <span className="text-xs text-accent font-semibold print:text-neutral-700">
                      July 2022 – May 2026 (Full-time)
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-canvas/65 mb-3.5 print:text-neutral-600">
                    FueInt Technologies · Coimbatore, Tamil Nadu, India
                  </p>

                  <ul className="space-y-2 text-xs sm:text-sm lg:text-base text-canvas/85 leading-relaxed list-disc list-outside ml-4 print:text-neutral-800">
                    <li>
                      Built custom WordPress themes and plugins from Figma across <strong>20+ international enterprise SaaS and nonprofit sites</strong> in Agile/Scrum teams; engineered reusable Gutenberg blocks and ACF Pro flexible content components, reducing repeat-project delivery time by ~25%.
                    </li>
                    <li>
                      Developed a custom <strong>Gutenberg block suite</strong> (including Data, CTA, Expand Text, FAQ, and Video Popup blocks) utilizing React and native WordPress APIs for enterprise marketing teams.
                    </li>
                    <li>
                      Implemented comprehensive <strong>JSON-LD structured data schemas</strong> (FAQ, Product, Breadcrumb, ProfessionalService, Organisation), increasing Rich Results eligibility and lifting organic search CTRs by ~15%.
                    </li>
                    <li>
                      Optimised Core Web Vitals via caching hierarchies, asset minimization, and render pipeline refactoring — <strong>reduced LCP by ~30%</strong>, improved CLS by 0.05, and resolved a URL-encoding bug in sitemap generation affecting <strong>1,700+ indexed URLs</strong>.
                    </li>
                    <li>
                      Spearheaded <strong>PHP 7.4 → 8.x upgrades</strong>, custom modules, Twig templates, and WCAG accessibility compliance across enterprise WordPress, Drupal, and Craft CMS platforms; managed monthly vulnerability patching and dependency updates.
                    </li>
                    <li>
                      Managed multi-SSH key configurations, Git workflows, and staging-to-production deployment pipelines across <strong>Pantheon, WP Engine, Kinsta, and Servd</strong>, diagnosing production issues under tight deadlines.
                    </li>
                  </ul>
                </div>

                {/* Freelance / Gradiolex */}
                <div className="border-l-2 border-accent/40 pl-4 sm:pl-6 relative print:border-neutral-400">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <h3 className="font-display text-xl sm:text-2xl text-canvas font-normal print:text-black">
                      Freelance Web Developer
                    </h3>
                    <span className="text-xs text-accent font-semibold print:text-neutral-700">
                      May 2025 – Present
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-canvas/65 mb-2.5 print:text-neutral-600">
                    Gradiolex · Independent Client &amp; Utility Engineering
                  </p>

                  <p className="text-xs sm:text-sm lg:text-base text-canvas/85 leading-relaxed mb-2.5 print:text-neutral-800">
                    Independently designs, scopes, and ships WordPress platforms and modern web applications:
                  </p>

                  <ul className="space-y-1.5 text-xs sm:text-sm lg:text-base text-canvas/85 leading-relaxed list-disc list-outside ml-4 print:text-neutral-800">
                    <li><strong>NILAM Ventures:</strong> WordPress website for a PhD-led aquaculture and farmtech advisory firm in Tamil Nadu — turnkey pond design, Biofloc &amp; RAS tank setups, and fish seed catalogue with farm consultation forms and one-tap WhatsApp enquiries.</li>
                    <li><strong>Card About Me:</strong> Link-in-bio platform for creators and businesses with appointment bookings, WhatsApp client chat, and 0% commission direct UPI payments (<a href="https://www.cardabout.me/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline print:text-black">cardabout.me</a>).</li>
                    <li><strong>MySupportInfo:</strong> Centralised device diagnostics and instant system info portal for remote teams and IT helpdesks (<a href="https://mysupportinfo.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline print:text-black">mysupportinfo.com</a>).</li>
                    <li><strong>NaviCakes:</strong> Custom bakery ordering and brand identity portal built with Next.js and Tailwind CSS — pixel-perfect from Figma to production.</li>
                    <li><strong>Sri Dhanamoorthy Traders:</strong> B2B wholesale cement and steel distributor WordPress platform with custom product catalogues and digital trade inquiry flows.</li>
                    <li><strong>Parithadam:</strong> E-commerce web platform for organic agricultural goods built with Next.js 15, React, Tailwind CSS, Razorpay payment processing, and automated Nodemailer notification pipelines.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* ── EDUCATION ── */}
            <section className="border-t border-canvas/15 pt-6 sm:pt-8 print:border-neutral-300 print:pt-4 print:break-inside-avoid">
              <h2 className="text-xs sm:text-sm uppercase tracking-wider text-accent font-bold mb-3 print:mb-2 print:text-black">
                Education
              </h2>
              <div className="flex flex-col sm:flex-row print:flex-row sm:items-baseline print:items-baseline justify-between gap-1">
                <div>
                  <h3 className="font-display text-lg sm:text-xl text-canvas font-normal print:text-black">
                    Bachelor of Engineering (B.E.) — Computer Science &amp; Engineering
                  </h3>
                  <p className="text-xs sm:text-sm text-canvas/75 print:text-neutral-700">
                    Vidyaa Vikas College of Engineering · Anna University, Tamil Nadu
                  </p>
                </div>
                <div className="text-xs sm:text-sm text-accent font-semibold sm:text-right print:text-black">
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
