interface CapabilityPillar {
  title: string
  icon: string
  summary: string
  points: string[]
}

const pillars: CapabilityPillar[] = [
  {
    title: 'WordPress & ACF Architecture',
    icon: 'wp',
    summary: 'Clean, modular WordPress builds tailored for marketing teams.',
    points: [
      'Custom themes, hooks, filters & Custom Post Types',
      'ACF Pro flexible layouts (50+ reusable components)',
      'Custom plugins published on WordPress.org',
      'WooCommerce & WordPress Multisite setups',
    ],
  },
  {
    title: 'Gutenberg, Drupal & Craft CMS',
    icon: 'drupal',
    summary: 'Multi-CMS fluency for enterprise content workflows.',
    points: [
      'Native Gutenberg block suites (React & PHP)',
      'Drupal 7/9/10 custom modules, Twig & Views',
      'Craft CMS Twig templates & WCAG compliance',
      'PHP 7.4 to 8.x upgrades & security patching',
    ],
  },
  {
    title: 'Frontend & Modern Web Apps',
    icon: 'gb',
    summary: 'Fast, responsive interfaces built from design to production.',
    points: [
      'React, Next.js, TypeScript & Tailwind CSS',
      'Headless WordPress via WPGraphQL & REST APIs',
      'Pixel-accurate Figma to semantic HTML5 & CSS3',
      'Screen-reader accessible & mobile-first layouts',
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
      'Git workflows, SSH deploys & CI/CD pipelines',
    ],
  },
]

const toolStrip = [
  { name: 'WordPress', icon: 'wp' },
  { name: 'ACF Pro', icon: 'acf' },
  { name: 'Gutenberg', icon: 'gb' },
  { name: 'Drupal', icon: 'drupal' },
  { name: 'Craft CMS', icon: 'craft' },
  { name: 'PHP', icon: 'php' },
  { name: 'MySQL', icon: 'sql' },
  { name: 'JavaScript', icon: 'js' },
  { name: 'TypeScript', icon: 'ts' },
  { name: 'Tailwind CSS', icon: 'tw' },
  { name: 'WPGraphQL', icon: 'gql' },
  { name: 'REST API', icon: 'api' },
  { name: 'Core Web Vitals', icon: 'cwv' },
  { name: 'Technical SEO', icon: 'seo' },
  { name: 'Pantheon', icon: 'pantheon' },
  { name: 'Git', icon: 'git' },
  { name: 'Figma', icon: 'figma' },
  { name: 'Vercel', icon: 'vercel' },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-surface text-ink py-16 md:py-24 border-b border-rule">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-forest mb-2">
            Core Capabilities
          </p>
          <h2 className="font-display font-normal text-3xl sm:text-4xl md:text-5xl text-ink leading-tight">
            Built for reliable delivery, not clutter.
          </h2>
          <p className="mt-4 text-base text-mist leading-relaxed">
            Every stack decision focuses on fast load times, clean code structure, and an editor experience anyone on your team can manage.
          </p>
        </div>

        {/* Static 4-Column Capability Grid (Elastic Path style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-rule bg-paper/50 p-6 flex flex-col"
            >
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
          ))}
        </div>

        {/* Calm Static Tools Row */}
        <div className="mt-12 pt-8 border-t border-rule">
          <p className="text-xs font-semibold uppercase tracking-wider text-mist mb-4">
            Daily Stack &amp; Platforms
          </p>
          <div className="flex flex-wrap gap-2.5">
            {toolStrip.map((tool) => (
              <span
                key={tool.name}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-rule bg-surface text-sm font-medium text-ink"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/icons/${tool.icon}.svg`}
                  alt={`${tool.name} icon`}
                  width={16}
                  height={16}
                  loading="lazy"
                  decoding="async"
                  className="w-4 h-4 object-contain"
                />
                {tool.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
