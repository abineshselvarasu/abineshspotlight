import type { Metadata } from 'next'
import Link from 'next/link'
import ResumeActions from '@/components/ResumeActions'
import JsonLd from '@/components/JsonLd'
import { ForwardArrowIcon } from '@/components/icons'
import { SITE_URL } from '@/lib/site'
import { ID, PERSON_NAME, breadcrumbNode, jsonLdGraph, pageMetadata, personNode, websiteNode } from '@/lib/seo'

const TITLE = 'Resume – Senior WordPress Developer'
const DESCRIPTION =
  'Resume of Abinesh Selvarasu (Abinesh S), Senior WordPress & PHP Developer — nearly 4 years building, maintaining, and optimizing WordPress, Drupal, Craft CMS, and headless Next.js platforms for international enterprise clients.'

export const metadata: Metadata = {
  // Template appends "| Abinesh Selvarasu"
  title: TITLE,
  ...pageMetadata({ path: '/resume', title: `${TITLE} | ${PERSON_NAME}`, description: DESCRIPTION, ogType: 'profile' }),
}

const skillGroups = [
  {
    category: 'WordPress & CMS',
    items: [
      'Custom Themes and Plugins',
      'Gutenberg Blocks',
      'ACF Pro',
      'Custom Post Types',
      'Hooks and Filters',
      'REST API',
      'Elementor Pro',
      'Headless WordPress (Next.js)',
      'WooCommerce (maintenance & extensions)',
      'Drupal 7/9/10 (upgrades, security)',
      'Craft CMS',
    ],
  },
  {
    category: 'Languages & Frameworks',
    items: ['PHP', 'JavaScript (ES6+)', 'TypeScript', 'MySQL', 'Next.js', 'HTML5 / CSS3 / SCSS'],
  },
  {
    category: 'Frontend & QA',
    items: [
      'React.js (custom Gutenberg block creation)',
      'Next.js',
      'Tailwind CSS',
      'Bootstrap framework',
      'Pixel-perfect Figma translation',
      'Cross-browser compatibility testing',
    ],
  },
  {
    category: 'SEO & Performance',
    items: [
      'Core Web Vitals Optimization (LCP, INP, CLS)',
      'JSON-LD Structured Data Schema',
      'Sitemap & Redirect Resolution',
      'WCAG Accessibility Remediation',
      'Google Search Console',
      'PageSpeed Insights',
      'GTmetrix',
      'Semrush Audit Workflows',
      'Cloudflare Bot Traffic Analytics',
      'A/B Testing Implementation (VWO, Elfsight)',
    ],
  },
  {
    category: 'DevOps & Hosting',
    items: [
      'Git',
      'GitHub',
      'Bitbucket',
      'GitHub Actions CI/CD workflows',
      'SSH',
      'Containerization (Docker)',
      'Ubuntu Server management',
      'Virtualmin',
      'CapRover',
      'Pantheon',
      'WP Engine',
      'Kinsta',
      'Servd',
      'Staging-to-production deployments',
    ],
  },
  {
    category: 'Backend & Database',
    items: ['PHP OOP / MVC', 'MySQL', 'REST API Design & Integration', 'Node.js'],
  },
  {
    category: 'Tools',
    items: [
      'Redmine',
      'ClickUp',
      'Monday.com',
      'Figma (handoff & basics)',
      'Canva',
      'Adobe Photoshop (basic editing)',
      'GIMP (basic editing)',
    ],
  },
  {
    category: 'Emerging Technologies & Continuous Learning',
    items: [
      'Advanced React.js ecosystem',
      'Node.js backend development',
      'Flutter',
      'Supabase',
      'Firebase Authentication',
      'LLM Integration',
      'Model Context Protocol (MCP)',
      'Autonomous AI Agents',
    ],
  },
]

const clientProjects = [
  {
    name: 'Unbounce.com',
    scope: 'ACF architecture, Gutenberg blocks, performance, CPT and theme customisation',
  },
  {
    name: 'Insightly.com',
    scope: 'Redesign landing pages with 15+ Gutenberg blocks',
  },
  {
    name: 'TractionComplete.com',
    scope: 'ACF architecture, performance, custom plugin development and production support',
  },
  {
    name: 'OpenGovernmentPartnership.org',
    scope: 'Large-scale CMS, Custom Post Types, headless WordPress, PHP upgrades',
  },
  {
    name: 'PPIC.org',
    scope: 'ACF architecture, headless WordPress, performance, CPT and theme customisation',
  },
  {
    name: 'Intiveo.com',
    scope: 'Elementor Pro architecture, page development, security and performance',
  },
  {
    name: 'Loopio.com',
    scope: 'ACF modular layout architecture, security and performance',
  },
  {
    name: 'ElasticPath.com',
    scope: 'Craft CMS, WCAG, security and performance',
  },
  {
    name: 'PremierBoxingChampions.com & DialedIn.ca',
    scope: 'Drupal 7 upgrade, PHP upgrades, security updates and 2FA rollout',
  },
]

const domesticProjects = [
  { name: 'Parithadam', stack: 'Next.js 15, Nodemailer' },
  { name: 'Developer Academy Quiz App', stack: 'Flutter, Firebase Auth' },
]

const plugins = [
  {
    name: 'WP SVG Engine',
    slug: 'svigent-tools',
    tagline: 'Secure SVG & SVGZ Upload, Preview, Dimension & Inlining',
    description:
      'Official WordPress.org plugin enabling safe SVG & SVGZ uploads via server-side XML/DOM sanitization, Media Library preview fixes, dimension detection, and fast client-side inlining.',
    stack: ['PHP 8', 'WordPress', 'DOM Sanitization', 'SVG'],
    url: 'https://wordpress.org/plugins/svigent-tools/',
  },
  {
    name: 'ClickReach – Social Share Buttons & Counter',
    slug: 'clickreach-social-share-buttons',
    tagline: 'Lightweight, Privacy-Friendly Social Sharing & Live Click Counter',
    description:
      'Official WordPress.org plugin powered by a custom WordPress REST API endpoint and pure inline SVGs for Core Web Vitals friendly social sharing without third-party tracking.',
    stack: ['WordPress', 'PHP 8', 'REST API', 'JavaScript'],
    url: 'https://wordpress.org/plugins/clickreach-social-share-buttons/',
  },
]

const gradiolexBuilds = [
  {
    name: 'NILAM Ventures',
    detail: 'WordPress advisory & product catalogue platform for an aquaculture and farmtech firm',
  },
  {
    name: 'Card About Me',
    detail: 'Link-in-bio platform with Razorpay payments, appointment bookings & WhatsApp chat',
    url: 'https://www.cardabout.me/',
  },
  {
    name: 'MySupportInfo',
    detail: '100% client-side device diagnostics tool with zero tracking',
    url: 'https://mysupportinfo.com/',
  },
  {
    name: 'NaviCakes',
    detail: 'Custom bakery ordering and brand identity website',
  },
  {
    name: 'Sri Dhanamoorthy Traders',
    detail: 'B2B wholesale cement and steel trader website',
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

          {/* Main Resume Sheet (Screen: dark editorial layout; Print: clean ATS format) */}
          <main className="bg-ink-deep border border-canvas/15 rounded-2xl p-5 sm:p-8 lg:p-12 shadow-xl text-base leading-relaxed print:bg-white print:text-black print:border-none print:p-0 print:shadow-none print:text-base print:leading-[1.45]">
            {/* ── HEADER ── */}
            <header className="border-b border-canvas/15 pb-6 sm:pb-8 mb-6 sm:mb-8 print:border-neutral-300 print:pb-3 print:mb-4">
              <div className="flex flex-col md:flex-row print:flex-row md:items-end print:items-end justify-between gap-5 sm:gap-6 print:gap-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-accent font-semibold block mb-1.5 print:hidden">
                    Curriculum Vitae
                  </span>
                  <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal text-canvas tracking-tight print:text-black print:text-3xl print:font-bold">
                    Abinesh <span className="text-accent print:text-black font-semibold">S</span>
                    <span className="sr-only"> (Abinesh Selvarasu)</span>
                  </h1>
                  <p className="text-base lg:text-lg text-canvas/85 mt-1.5 font-medium print:text-neutral-800 print:text-sm print:mt-1">
                    Senior WordPress Developer | PHP Developer
                  </p>
                </div>

                {/* Contact Details */}
                <div className="text-base space-y-1.5 text-canvas/75 md:text-right print:text-right print:text-neutral-700 print:text-sm print:space-y-0.5">
                  <p>Coimbatore, Tamil Nadu</p>
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
                    <a
                      href="https://www.linkedin.com/in/abineshselvarasu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline font-semibold print:text-black"
                    >
                      LinkedIn
                    </a>
                    <span>·</span>
                    <a
                      href="https://github.com/abineshselvarasu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline font-semibold print:text-black"
                    >
                      GitHub
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
            <section className="mb-8 sm:mb-10 print:mb-4">
              <h2 className="text-xs sm:text-sm uppercase tracking-wider text-accent font-bold mb-3 print:mb-1.5 print:text-sm print:text-black">
                Professional Summary
              </h2>
              <p className="text-canvas/85 text-base leading-relaxed print:text-neutral-800 print:text-base print:leading-[1.45]">
                Senior WordPress &amp; Full-Stack Developer with nearly <strong>4 years</strong> of experience building,
                maintaining, and optimizing high-performance websites and web applications for international enterprise
                clients. Specialized in custom WordPress theme and plugin development, PHP OOP/MVC, React-based
                Gutenberg blocks, ACF architecture, Drupal, Craft CMS, and headless WordPress with Next.js. Delivered
                solutions for clients including <strong>Unbounce</strong>, <strong>Open Government Partnership</strong>,{' '}
                <strong>PPIC</strong>, <strong>Insightly</strong>, <strong>Intiveo</strong>,{' '}
                <strong>Traction Complete</strong>, and <strong>Premier Boxing Champions</strong>. Experienced in
                leading a team of three developers, conducting code reviews, and improving Core Web Vitals, including
                achieving approximately <strong>30% reduction in LCP</strong>. Active open-source contributor with
                published WordPress.org plugins and independently developed web applications.
              </p>
            </section>

            {/* ── SKILLS (8 categories matching Resume.pdf) ── */}
            <section className="mb-8 sm:mb-10 print:mb-4">
              <h2 className="text-xs sm:text-sm uppercase tracking-wider text-accent font-bold mb-3.5 print:mb-2 print:text-sm print:text-black">
                Skills
              </h2>

              {/* Visual grid for screen */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 print:hidden">
                {skillGroups.map((group) => (
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

              {/* Single-column linear list for print */}
              <ul className="hidden print:block space-y-1.5 text-base text-neutral-800 leading-[1.45]">
                {skillGroups.map((group) => (
                  <li key={group.category}>
                    <strong className="text-black">{group.category}:</strong> {group.items.join(', ')}
                  </li>
                ))}
              </ul>
            </section>

            {/* ── PROFESSIONAL EXPERIENCE ── */}
            <section className="mb-8 sm:mb-10 print:mb-4">
              <h2 className="text-xs sm:text-sm uppercase tracking-wider text-accent font-bold mb-4 print:mb-2 print:text-sm print:text-black">
                Professional Experience
              </h2>

              <div className="space-y-8 print:space-y-4">
                {/* FueInt Technologies */}
                <div className="border-l-2 border-accent/40 pl-4 sm:pl-6 relative print:border-none print:pl-0">
                  <div className="flex flex-col sm:flex-row print:flex-row sm:items-baseline print:items-baseline justify-between gap-1 mb-1 print:mb-1">
                    <h3 className="font-display text-xl sm:text-2xl text-canvas font-normal print:text-black print:text-base print:font-bold">
                      Engineer, Web Apps (Senior WordPress Developer)
                      <span className="hidden print:inline font-normal text-neutral-700"> · FueInt Technologies, Coimbatore</span>
                    </h3>
                    <span className="text-xs text-accent font-semibold print:text-neutral-700 print:text-sm shrink-0">
                      July 2022 to May 2026 | Full-time
                    </span>
                  </div>

                  <p className="text-base text-canvas/65 mb-4 print:hidden">
                    FueInt Technologies, Coimbatore
                  </p>

                  <ul className="space-y-2.5 text-base text-canvas/85 leading-relaxed list-disc list-outside ml-4 print:text-base print:text-neutral-800 print:space-y-1.5 print:leading-[1.45]">
                    <li>
                      Engineered bespoke WordPress themes and plugins translated from Figma UI prototypes for{' '}
                      <strong>20+ client implementations</strong> under Dialed In Design, collaborating within Agile
                      environments using modular Gutenberg blocks and ACF architecture.
                    </li>
                    <li>
                      <strong>Led a team of 3 developers</strong> on a website revamp and reviewed their code. Supported
                      junior developers and took part in code reviews.
                    </li>
                    <li>
                      Developed a custom <strong>Gutenberg block suite for Unbounce</strong> (Data, CTA, Expand Text,
                      FAQ, Video Popup) with React and native WordPress APIs. Also worked with the Unbounce page
                      builder and Elfsight widgets.
                    </li>
                    <li>
                      Built redesign landing pages for <strong>Insightly</strong> with{' '}
                      <strong>15+ custom Gutenberg blocks</strong> in 3 weeks.
                    </li>
                    <li>
                      Built <strong>headless WordPress</strong> frontends with <strong>Next.js and Tailwind CSS</strong>{' '}
                      for PPIC and OGP.
                    </li>
                    <li>
                      Integrated <strong>JSON-LD schema markup</strong> including FAQ, Product, Breadcrumb, and
                      Organization schemas while resolving canonical errors and multi-hop redirect chains for client
                      websites.
                    </li>
                    <li>
                      Optimized Core Web Vitals via caching implementation, asset refinement, and code restructuring,
                      achieving a <strong>~30% reduction in LCP</strong>. Resolved a sitemap indexing issue across{' '}
                      <strong>1,700+ URLs</strong> for ElasticPath.com.
                    </li>
                    <li>
                      Executed <strong>WCAG accessibility evaluations</strong> and web compliance remediations for Elastic
                      Path using Craft CMS.
                    </li>
                    <li>
                      Executed major <strong>PHP 7.4 to 8.x migrations</strong> for enterprise clients including OGP,
                      Premier Boxing Champions, and Elastic Path, while managing routine security patches, Drupal and
                      Craft CMS updates, and Node package dependencies.
                    </li>
                    <li>
                      Managed Git workflows, multi-SSH key configs, and staging-to-production deployments across{' '}
                      <strong>Pantheon, WP Engine, Kinsta, and Servd</strong>; diagnosed production issues (JS
                      conflicts, plugin incompatibilities, ACF/Gutenberg interactions) under tight deadlines.
                    </li>
                    <li>
                      Administered <strong>Ubuntu server infrastructure</strong> supporting development environments via{' '}
                      <strong>Virtualmin and CapRover</strong>; leveraged <strong>Containerization (Docker)</strong>{' '}
                      to streamline staging and live deployments for domestic clients.
                    </li>
                    <li>
                      Investigated and cleaned a hacked client server (<strong>warroominc.com</strong>): traced
                      repeated malware injection to an open port and a cron job that kept re-adding the code, removed
                      it, and built a scanning system to detect new injections.
                    </li>
                  </ul>

                  {/* Selected Client Projects */}
                  <div className="mt-7 pt-6 border-t border-canvas/10 print:mt-4 print:pt-3 print:border-neutral-300">
                    <h4 className="text-xs uppercase tracking-wider text-accent font-bold mb-3.5 print:text-black print:mb-2">
                      Selected Client Projects
                    </h4>

                    {/* Screen Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 print:hidden">
                      {clientProjects.map((client) => (
                        <div
                          key={client.name}
                          className="min-w-0 rounded-xl border border-canvas/10 bg-ink/50 p-3.5 sm:p-4"
                        >
                          <p className="font-semibold text-sm text-canvas [overflow-wrap:anywhere]">{client.name}</p>
                          <p className="mt-1 text-xs sm:text-sm text-canvas/75 leading-snug">{client.scope}</p>
                        </div>
                      ))}
                    </div>

                    {/* Print List */}
                    <ul className="hidden print:block space-y-1 text-base text-neutral-800 list-disc list-outside ml-4">
                      {clientProjects.map((client) => (
                        <li key={client.name}>
                          <strong className="text-black">{client.name}</strong> — {client.scope}
                        </li>
                      ))}
                    </ul>

                    {/* Notable Domestic Projects */}
                    <div className="mt-4 rounded-xl border border-canvas/10 bg-ink/40 px-4 py-3 text-sm text-canvas/85 print:border-none print:bg-transparent print:px-0 print:py-0 print:mt-2 print:text-neutral-800">
                      <span className="font-semibold text-accent print:text-black">Notable Domestic Projects: </span>
                      {domesticProjects.map((proj, idx) => (
                        <span key={proj.name}>
                          <strong className="text-canvas print:text-black">{proj.name}</strong> ({proj.stack})
                          {idx < domesticProjects.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Gradiolex (Freelance) */}
                <div className="border-l-2 border-accent/40 pl-4 sm:pl-6 relative print:border-none print:pl-0 print:break-inside-avoid">
                  <div className="flex flex-col sm:flex-row print:flex-row sm:items-baseline print:items-baseline justify-between gap-1 mb-2 print:mb-1">
                    <h3 className="font-display text-xl sm:text-2xl text-canvas font-normal print:text-black print:text-base print:font-bold">
                      Gradiolex <span className="text-canvas/70 font-sans text-base font-normal print:text-neutral-700">(Freelance)</span>
                    </h3>
                    <span className="text-xs text-accent font-semibold print:text-neutral-700 print:text-sm">
                      May 2025 – Present
                    </span>
                  </div>

                  <p className="text-canvas/85 text-base leading-relaxed mb-5 print:text-neutral-800 print:mb-2">
                    Designs and delivers websites and web apps for local businesses and startups. Published two plugins
                    on WordPress.org (ClickReach and WP SVG Engine). Built NILAM Ventures, Card About Me (link-in-bio
                    platform with Razorpay payments), MySupportInfo (device diagnostics tool with zero tracking),
                    NaviCakes, and Sri Dhanamoorthy Traders.
                  </p>

                  {/* Visual breakdown for screen visitors */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-5 print:hidden">
                    {plugins.map((plugin) => (
                      <div key={plugin.name} className="border border-canvas/15 rounded-xl p-4 sm:p-5 bg-ink/60">
                        <div className="flex flex-col xs:flex-row xs:items-start justify-between gap-1.5 xs:gap-2 mb-2">
                          <h4 className="font-display text-lg text-canvas font-normal">{plugin.name}</h4>
                          <span className="self-start text-xs px-2.5 py-0.5 rounded-full border border-accent/40 text-accent bg-accent/10 whitespace-nowrap">
                            Live on WP.org
                          </span>
                        </div>
                        <p className="text-sm text-accent/90 font-medium mb-1.5 leading-snug">{plugin.tagline}</p>
                        <p className="text-sm text-canvas/75 leading-relaxed mb-3.5">{plugin.description}</p>
                        <div className="flex flex-wrap items-center justify-between gap-2 pt-2.5 border-t border-canvas/10">
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
                            className="group text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1"
                          >
                            <span>View on WP.org</span>
                            <ForwardArrowIcon className="w-3.5 h-3.5" strokeWidth={2.2} />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 print:hidden">
                    {gradiolexBuilds.map((build) => (
                      <div
                        key={build.name}
                        className="rounded-xl border border-canvas/10 bg-ink/40 p-3.5 flex flex-col justify-between"
                      >
                        <div>
                          <p className="font-semibold text-sm text-canvas">{build.name}</p>
                          <p className="mt-1 text-xs sm:text-sm text-canvas/75 leading-snug">{build.detail}</p>
                        </div>
                        {build.url && (
                          <a
                            href={build.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline"
                          >
                            Visit Live Site
                            <ForwardArrowIcon className="w-3 h-3" strokeWidth={2.2} />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ── EDUCATION ── */}
            <section className="border-t border-canvas/15 pt-6 sm:pt-8 print:border-neutral-300 print:pt-3 print:break-inside-avoid">
              <h2 className="text-xs sm:text-sm uppercase tracking-wider text-accent font-bold mb-3 print:mb-1.5 print:text-sm print:text-black">
                Education
              </h2>
              <div className="flex flex-col sm:flex-row print:flex-row sm:items-baseline print:items-baseline justify-between gap-1">
                <div>
                  <h3 className="font-display text-lg sm:text-xl text-canvas font-normal print:text-black print:text-base print:font-bold">
                    B.E. Computer Science and Engineering ·{' '}
                    <span className="font-normal">Vidyaa Vikas College of Engineering (Anna University)</span>
                  </h3>
                </div>
                <div className="text-base text-accent font-semibold sm:text-right print:text-neutral-700 print:text-sm shrink-0 print:whitespace-nowrap">
                  2016 to 2020 · CGPA 7.04 / 10
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  )
}
