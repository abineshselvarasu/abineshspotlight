import SectionReveal, { RevealItem } from './SectionReveal'

interface CapabilityPillar {
  title: string
  icon: string
  summary: string
  points: string[]
}

interface ToolItem {
  name: string
  icon: string
}

const pillars: CapabilityPillar[] = [
  {
    title: 'WordPress & ACF Architecture',
    icon: 'wp',
    summary: 'Clean, modular WordPress builds tailored for marketing teams.',
    points: [
      'Custom themes, hooks, filters & Custom Post Types',
      'ACF Pro flexible layouts (50+ reusable components)',
      'Official plugins published on WordPress.org',
      'PHP 8.x upgrades, security & malware incident recovery',
    ],
  },
  {
    title: 'Gutenberg, Drupal & Craft CMS',
    icon: 'drupal',
    summary: 'Multi-CMS fluency across structured enterprise workflows.',
    points: [
      'Native Gutenberg block suites (React & PHP)',
      'Drupal 7/9/10 upgrades, security patching & Twig',
      'Craft CMS maintenance, templates & WCAG compliance',
      'Agile/Scrum sprints, code reviews & QA handoffs',
    ],
  },
  {
    title: 'React, Next.js & API Wiring',
    icon: 'api',
    summary: 'Modern frontends and reliable third-party backend integrations.',
    points: [
      'React / Next.js 15 App Router, TypeScript & Tailwind',
      'WP REST API endpoints, webhooks & CRM integrations',
      'Payment gateways (UPI / Razorpay) & automated emails',
      'Pixel-accurate Figma to accessible HTML5 & CSS3',
    ],
  },
  {
    title: 'Performance, SEO & Hosting',
    icon: 'cwv',
    summary: 'Technical foundations that keep sites ranking and reliable.',
    points: [
      'Core Web Vitals optimization (LCP, CLS, INP)',
      'JSON-LD schema & XML sitemap debugging',
      'Pantheon, WP Engine, Kinsta, Servd & Vercel',
      'Ubuntu servers (Virtualmin, CapRover), Docker, Git & CI/CD',
    ],
  },
]

const dailyStack: ToolItem[] = [
  { name: 'WordPress', icon: 'wp' },
  { name: 'ACF Pro', icon: 'acf' },
  { name: 'Gutenberg', icon: 'gb' },
  { name: 'Headless WP', icon: 'hwp' },
  { name: 'Drupal', icon: 'drupal' },
  { name: 'Craft CMS', icon: 'craft' },
  { name: 'PHP 8', icon: 'php' },
  { name: 'MySQL', icon: 'sql' },
  { name: 'HTML5', icon: 'html' },
  { name: 'CSS3 / SCSS', icon: 'css' },
  { name: 'JavaScript', icon: 'js' },
  { name: 'TypeScript', icon: 'ts' },
  { name: 'React 19', icon: 'react' },
  { name: 'Next.js 15', icon: 'nextjs' },
  { name: 'Tailwind CSS', icon: 'tw' },
  { name: 'Webpack', icon: 'webpack' },
  { name: 'REST API', icon: 'api' },
  { name: 'Core Web Vitals', icon: 'cwv' },
  { name: 'Technical SEO', icon: 'seo' },
  { name: 'Pantheon', icon: 'pantheon' },
  { name: 'Git', icon: 'git' },
  { name: 'Figma', icon: 'figma' },
  { name: 'Vercel', icon: 'vercel' },
]

const hostingAndDevOps: ToolItem[] = [
  { name: 'WordPress Multisite', icon: 'wp' },
  { name: 'Twig', icon: 'twig' },
  { name: 'JSON-LD Schema', icon: 'jsonld' },
  { name: 'WCAG Accessibility', icon: 'wcag' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Ubuntu Server', icon: 'ubuntu' },
  { name: 'Virtualmin / CapRover', icon: 'server' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Malware & Incident Recovery', icon: 'shield' },
  { name: 'GitHub Actions CI/CD', icon: 'ghactions' },
  { name: 'SSH Deploys', icon: 'ssh' },
  { name: 'WP Engine', icon: 'wpengine' },
  { name: 'Kinsta', icon: 'kinsta' },
  { name: 'Servd', icon: 'servd' },
  { name: 'Agile / Scrum', icon: 'scrum' },
  { name: 'Supabase', icon: 'supabase' },
  { name: 'Firebase Auth', icon: 'firebase' },
  { name: 'Nodemailer', icon: 'mail' },
  { name: 'Razorpay / UPI', icon: 'razorpay' },
]

function ToolBadge({
  tool,
  variant = 'light',
}: {
  tool: ToolItem
  variant?: 'light' | 'dark'
}) {
  const isDark = variant === 'dark'

  return (
    <span
      className={`group/tool inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-sm font-medium transition-all duration-150 hover:-translate-y-0.5 motion-reduce:transform-none ${
        isDark
          ? 'border-canvas/15 bg-canvas/[0.08] text-canvas hover:bg-canvas/[0.14] hover:border-accent/60 hover:shadow-[0_4px_14px_rgba(220,188,125,0.12)]'
          : 'border-forest/15 bg-surface/95 text-ink shadow-[0_1px_2px_rgba(15,55,40,0.05)] hover:border-forest/45 hover:shadow-md'
      }`}
    >
      <span
        className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 p-1 ${
          isDark
            ? 'bg-surface shadow-sm'
            : 'bg-paper group-hover/tool:bg-emerald-50 transition-colors'
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/icons/${tool.icon}.svg`}
          alt={`${tool.name} logo`}
          width={16}
          height={16}
          loading="lazy"
          decoding="async"
          className="w-4 h-4 object-contain"
        />
      </span>
      <span>{tool.name}</span>
    </span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="bg-surface text-ink pt-14 pb-16 md:pt-20 md:pb-24 border-b border-rule">
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <RevealItem index={0} as="p" className="text-xs font-semibold uppercase tracking-wider text-forest mb-2">
            Core Capabilities
          </RevealItem>
          <RevealItem index={1} as="h2" className="font-display font-normal text-3xl sm:text-4xl md:text-5xl text-ink leading-tight">
            Built for reliable delivery, not clutter.
          </RevealItem>
          <RevealItem index={2} as="p" className="mt-4 text-base text-mist leading-relaxed">
            Every stack decision focuses on fast load times, clean API and PHP architecture, and an editor experience anyone on your team can manage.
          </RevealItem>
        </div>

        {/* Static 4-Column Capability Grid (Elastic Path style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <RevealItem
              key={pillar.title}
              index={3 + idx}
              className="h-full"
            >
              <div className="rounded-xl border border-rule bg-paper/50 p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 pb-4 border-b border-rule">
                  <span className="w-10 h-10 rounded-lg bg-ink text-canvas flex items-center justify-center shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/icons/${pillar.icon}.svg`}
                      alt=""
                      width={22}
                      height={22}
                      loading="lazy"
                      decoding="async"
                      className="w-5 h-5 object-contain brightness-0 invert"
                    />
                  </span>
                  <h3 className="font-display text-xl text-ink leading-snug">
                    {pillar.title}
                  </h3>
                </div>

                <p className="mt-4 text-sm text-mist leading-relaxed">
                  {pillar.summary}
                </p>

                <ul className="mt-4 space-y-2.5 text-sm text-ink/90 flex-1">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 leading-snug">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-forest shrink-0" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </div>

        {/* Vibrant Side-by-Side 2-Column Tech Showcase */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Left Column: Daily Stack & Platforms */}
          <RevealItem index={7} className="h-full">
            <div className="relative rounded-2xl border border-forest/20 bg-gradient-to-br from-[#F1F9F4] via-surface to-[#FDF8EB] p-6 sm:p-7 overflow-hidden shadow-sm flex flex-col h-full">
              <div
                className="pointer-events-none absolute -top-14 -right-14 w-44 h-44 rounded-full bg-emerald-400/15 blur-2xl"
                aria-hidden="true"
              />

              <div className="relative z-10 flex items-start justify-between gap-3 pb-4 mb-5 border-b border-forest/15">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-forest to-ink text-accent flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl text-ink leading-tight">
                      Daily Stack &amp; Platforms
                    </h3>
                    <p className="text-xs sm:text-sm text-mist mt-0.5">
                      CMS engines, languages &amp; modern frontend UI
                    </p>
                  </div>
                </div>
                <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100/90 text-forest border border-emerald-200 tabular-nums">
                  {dailyStack.length} tools
                </span>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2">
                {dailyStack.map((tool) => (
                  <ToolBadge key={tool.name} tool={tool} variant="light" />
                ))}
              </div>

              <div
                className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-forest via-emerald-500 to-accent"
                aria-hidden="true"
              />
            </div>
          </RevealItem>

          {/* Right Column: Hosting, DevOps & Integrations */}
          <RevealItem index={8} className="h-full">
            <div className="relative rounded-2xl border border-forest/60 bg-gradient-to-br from-ink via-ink-deep to-[#082117] text-canvas p-6 sm:p-7 overflow-hidden shadow-md flex flex-col h-full">
              <div
                className="pointer-events-none absolute -top-14 -right-14 w-44 h-44 rounded-full bg-accent/15 blur-2xl"
                aria-hidden="true"
              />

              <div className="relative z-10 flex items-start justify-between gap-3 pb-4 mb-5 border-b border-canvas/15">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/35 text-accent flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                      <line x1="6" y1="6" x2="6.01" y2="6" />
                      <line x1="6" y1="18" x2="6.01" y2="18" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl text-canvas leading-tight">
                      Hosting, DevOps &amp; Integrations
                    </h3>
                    <p className="text-xs sm:text-sm text-canvas/70 mt-0.5">
                      Cloud platforms, CI/CD automation &amp; backend services
                    </p>
                  </div>
                </div>
                <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-accent/20 text-accent border border-accent/35 tabular-nums">
                  {hostingAndDevOps.length} tools
                </span>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2">
                {hostingAndDevOps.map((tool) => (
                  <ToolBadge key={tool.name} tool={tool} variant="dark" />
                ))}
              </div>

              <div
                className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-accent via-[#E9C985] to-emerald-400"
                aria-hidden="true"
              />
            </div>
          </RevealItem>
        </div>
      </div>
      </SectionReveal>
    </section>
  )
}
