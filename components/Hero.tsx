import Link from 'next/link'
import ScrambleText from './ScrambleText'

const proofMetrics = [
  {
    value: '3 Years 10 Mos',
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
    <section id="hero" className="bg-ink text-canvas pt-28 pb-0 md:pt-36">
      {/* Centered Editorial Hero */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-canvas/15 bg-forest/50 text-xs font-medium text-accent mb-6">
            Coimbatore, India · Open to WordPress &amp; CMS Roles
          </p>

          <h1 className="font-display font-normal text-4xl sm:text-5xl md:text-6xl lg:text-[64px] text-canvas tracking-tight leading-[1.08]">
            <ScrambleText text="WordPress Developer" />{' '}
            <span className="block text-accent">
              <ScrambleText text="built for speed & clarity." speed={0.75} />
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-canvas/80 leading-relaxed max-w-2xl mx-auto">
            I&apos;m <strong className="text-canvas font-semibold"><ScrambleText text="Abinesh Selvarasu" /></strong> — 3 years 10 months of experience architecting
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
      </div>

      {/* Split-Background Overlay Card: top 50% deep forest (#0F3728), bottom 50% pure white (#FFFFFF) */}
      <div className="mt-14 md:mt-20 relative">
        <div
          className="pointer-events-none absolute inset-x-0 top-1/2 bottom-0 bg-surface"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="rounded-xl bg-surface text-ink border border-rule/80 shadow-[0_24px_60px_-15px_rgba(10,38,27,0.22)] p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              <div className="lg:col-span-5 text-center lg:text-left">
                <span className="inline-block px-3 py-1 rounded-md bg-accent/85 text-ink text-[11px] font-bold uppercase tracking-wider mb-4">
                  Measured Outcomes
                </span>
                <h2 className="font-display font-normal text-2xl sm:text-3xl lg:text-[34px] text-ink leading-tight">
                  Performance, without guesswork.
                </h2>
                <p className="mt-3 text-sm sm:text-base text-mist leading-relaxed">
                  Real delivery metrics across 20+ enterprise SaaS and nonprofit websites.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 border border-rule rounded-xl overflow-hidden bg-paper/50">
                {proofMetrics.map((metric, idx) => (
                  <div
                    key={metric.value}
                    className={`p-5 sm:p-6 ${
                      idx % 2 === 0 ? 'sm:border-r sm:border-rule' : ''
                    } ${idx < 2 ? 'border-b border-rule' : ''} ${
                      idx === 2 ? 'border-b sm:border-b-0 border-rule' : ''
                    }`}
                  >
                    <p className="font-display text-2xl sm:text-3xl text-forest">
                      {metric.value}
                    </p>
                    <p className="mt-1.5 text-sm text-mist leading-snug">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
