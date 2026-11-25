import Link from 'next/link'

const proofMetrics = [
  {
    value: '3.5+ Years',
    label: 'WordPress, Drupal & Craft CMS engineering',
  },
  {
    value: '−30% LCP',
    label: 'Caching & asset tuning across enterprise SaaS sites',
  },
  {
    value: '+15% CTR',
    label: 'JSON-LD schema & 1,700+ sitemap URL fixes',
  },
  {
    value: '2 Live Plugins',
    label: 'Published & actively maintained on WordPress.org',
  },
]

export default function Hero() {
  return (
    <section id="hero" className="bg-ink text-canvas pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Centered Editorial Hero (Elastic Path Rhythm) */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-canvas/15 bg-forest/50 text-xs font-medium text-accent mb-6">
            Coimbatore, India · Open to WordPress &amp; CMS Roles
          </p>

          <h1 className="font-display font-normal text-4xl sm:text-5xl md:text-6xl lg:text-[64px] text-canvas tracking-tight leading-[1.08]">
            WordPress Developer{' '}
            <span className="block text-accent">built for speed &amp; clarity.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-canvas/80 leading-relaxed max-w-2xl mx-auto">
            I&apos;m <strong className="text-canvas font-semibold">Abinesh Selvarasu</strong> — 3.5+ years architecting
            custom WordPress themes, plugins, Drupal, Craft CMS, and Next.js sites for enterprise SaaS,
            nonprofit organizations, and growing businesses.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-ink bg-accent hover:bg-canvas transition-colors rounded-full"
            >
              View Selected Work
            </a>
            <Link
              href="/resume"
              prefetch={true}
              className="inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-canvas hover:text-accent underline underline-offset-4 decoration-accent/60 transition-colors"
            >
              View Resume
            </Link>
          </div>
        </div>

        {/* Clean 4-Cell Impact Card (modeled on Elastic Path's "Performance, uninterrupted." block) */}
        <div className="mt-14 md:mt-20 max-w-5xl mx-auto rounded-2xl bg-ink-deep border border-canvas/15 p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 text-center lg:text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                Measured Outcomes
              </p>
              <h2 className="font-display font-normal text-2xl sm:text-3xl text-canvas leading-snug">
                Performance, without guesswork.
              </h2>
              <p className="mt-2 text-sm text-canvas/70 leading-relaxed">
                Real delivery metrics across 20+ enterprise SaaS and nonprofit websites.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 border border-canvas/10 rounded-xl overflow-hidden">
              {proofMetrics.map((metric, idx) => (
                <div
                  key={metric.value}
                  className={`p-5 sm:p-6 bg-ink/50 ${
                    idx % 2 === 0 ? 'sm:border-r sm:border-canvas/10' : ''
                  } ${idx < 2 ? 'border-b border-canvas/10' : ''} ${
                    idx === 2 ? 'border-b sm:border-b-0 border-canvas/10' : ''
                  }`}
                >
                  <p className="font-display text-2xl sm:text-3xl text-accent">
                    {metric.value}
                  </p>
                  <p className="mt-1.5 text-sm text-canvas/75 leading-snug">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
