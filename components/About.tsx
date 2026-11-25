import { GitHubIcon, LinkedInIcon, WordPressIcon } from './icons'

interface ExperienceItem {
  period: string
  role: string
  company: string
  summary: string
  highlights: string[]
}

const experienceList: ExperienceItem[] = [
  {
    period: 'July 2022 – May 2026',
    role: 'Engineer – Web Apps',
    company: 'FueInt Technologies · Coimbatore (Full-time)',
    summary:
      'Delivered production WordPress, Drupal, and Craft CMS platforms across 20+ international enterprise SaaS and nonprofit websites in Agile/Scrum teams.',
    highlights: [
      'Built custom WordPress themes, plugins, React Gutenberg block suites, and 50+ ACF Pro modular layouts — cutting repeat build time by ~25%',
      'Led PHP 7.4 → 8.x maintenance upgrades, security patching, custom Drupal/Craft Twig modules, and WCAG accessibility audits',
      'Wired REST API & WPGraphQL integrations, cut LCP by ~30%, boosted organic CTR by ~15% via JSON-LD schema, and fixed 1,700+ sitemap URLs',
      'Shipped across Agile/Scrum sprints with Git code reviews and multidev deployments on Pantheon, WP Engine, Kinsta, and Servd',
    ],
  },
  {
    period: 'May 2025 – Present',
    role: 'Freelance Web Developer',
    company: 'Gradiolex · Independent',
    summary:
      'Designs, architects, and launches custom WordPress websites, official WordPress.org plugins, and React/Next.js web applications.',
    highlights: [
      'Shipped NILAM Ventures, Sri Dhanamoorthy Traders, and NaviCakes from Figma to production',
      'Architected and launched live Next.js + TypeScript web apps including Card About Me and MySupportInfo',
      'Published and maintain ClickReach and WP SVG Engine on the official WordPress.org plugin directory',
    ],
  },
  {
    period: '2016 – 2020',
    role: 'B.E. Computer Science & Engineering',
    company: 'Vidyaa Vikas College of Engineering · Anna University',
    summary: 'CGPA: 7.04 / 10 — foundations in software engineering, algorithms, and SQL databases.',
    highlights: [],
  },
]

export default function About() {
  return (
    <section id="about" className="bg-surface text-ink py-16 md:py-24 border-b border-rule">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative & Profiles */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-forest mb-2">
              About &amp; Background
            </p>
            <h2 className="font-display font-normal text-3xl sm:text-4xl md:text-5xl text-ink leading-tight">
              Simple for editors. Fast for visitors.
            </h2>
            {/* Elastic Path signature short underline bar */}
            <div className="mt-4 mb-6 h-1 w-14 rounded-full bg-forest" aria-hidden="true" />

            <div className="space-y-4 text-base text-mist leading-relaxed">
              <p>
                I&apos;m Abinesh Selvarasu — a <strong className="text-ink font-semibold">Senior WordPress Developer</strong> with
                3 years 10 months of production experience across WordPress, Drupal, Craft CMS, and modern React/Next.js frontends.
              </p>
              <p>
                During my tenure at FueInt Technologies, I worked in Agile/Scrum teams across 20+ enterprise SaaS and nonprofit
                platforms — delivering PHP 8 maintenance upgrades, REST API integrations, clean ACF Pro &amp; Gutenberg systems,
                and fast, search-friendly websites.
              </p>
            </div>

            <blockquote className="mt-6 border-l-2 border-accent pl-4 text-ink font-display text-xl italic leading-relaxed">
              &ldquo;Fast, maintainable websites shouldn&apos;t feel complicated — they should just work.&rdquo;
            </blockquote>

            {/* Profile Pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://profiles.wordpress.org/abineshselvarasu/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-rule bg-paper/60 text-sm font-medium text-ink hover:border-forest hover:text-forest transition-colors"
              >
                <WordPressIcon className="w-4 h-4 text-forest" />
                WordPress.org
              </a>
              <a
                href="https://linkedin.com/in/abineshselvarasu/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-rule bg-paper/60 text-sm font-medium text-ink hover:border-forest hover:text-forest transition-colors"
              >
                <LinkedInIcon className="w-4 h-4 text-forest" />
                LinkedIn
              </a>
              <a
                href="https://github.com/abineshselvarasu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-rule bg-paper/60 text-sm font-medium text-ink hover:border-forest hover:text-forest transition-colors"
              >
                <GitHubIcon className="w-4 h-4 text-forest" />
                GitHub
              </a>
            </div>
          </div>

          {/* Right Column: Straightforward Experience Timeline */}
          <div className="lg:col-span-7 space-y-6">
            {experienceList.map((item) => (
              <div
                key={item.role + item.period}
                className="rounded-xl border border-rule bg-paper/40 p-6 sm:p-7"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 border-b border-rule">
                  <div>
                    <h3 className="font-display text-2xl text-ink font-normal">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-forest mt-0.5">
                      {item.company}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-mist shrink-0">
                    {item.period}
                  </span>
                </div>

                <p className="mt-3 text-sm text-mist leading-relaxed">
                  {item.summary}
                </p>

                {item.highlights.length > 0 && (
                  <ul className="mt-4 space-y-2 text-sm text-ink/90">
                    {item.highlights.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 leading-snug">
                        <span className="text-forest font-bold shrink-0" aria-hidden="true">✓</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
