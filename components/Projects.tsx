'use client'

import { useState } from 'react'

type Project = {
  name: string
  role: string
  category: 'WordPress' | 'WP Plugin' | 'Next.js'
  badge: string
  featured?: boolean
  challenge: string
  stack: string[]
  url?: string
  urlLabel?: string
}

const projects: Project[] = [
  {
    name: 'NILAM Ventures',
    role: 'WordPress Developer',
    category: 'WordPress',
    badge: 'Freelance Client',
    featured: true,
    challenge:
      'Website for a PhD-led aquaculture and farmtech advisory firm in Tamil Nadu — showcasing turnkey pond design, Biofloc & RAS tank setups, and fish seed supply, with a product catalogue, farm consultation forms, and one-tap WhatsApp enquiries.',
    stack: ['WordPress', 'Kadence', 'ACF', 'Fluent Forms', 'Pantheon'],
  },
  {
    name: 'Card About Me',
    role: 'Web Developer',
    category: 'Next.js',
    badge: 'Product Build',
    challenge:
      'Link-in-bio platform for creators and businesses — featuring custom profile links, calendar bookings, direct WhatsApp client chat, and 0% commission direct UPI payments.',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'UPI Integration', 'Vercel'],
    url: 'https://www.cardabout.me/',
    urlLabel: 'Visit Live Site',
  },
  {
    name: 'MySupportInfo',
    role: 'Web Developer',
    category: 'Next.js',
    badge: 'Utility Tool',
    challenge:
      'Instant device diagnostics and system info tool for remote teams and IT helpdesks — inspecting browser version, OS, IP, WebRTC leaks, and network latency with zero tracking.',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Web APIs', 'Vercel'],
    url: 'https://mysupportinfo.com/',
    urlLabel: 'Visit Live Site',
  },
  {
    name: 'ClickReach – Social Share Buttons & Counter',
    role: 'WordPress Plugin Author',
    category: 'WP Plugin',
    badge: 'WP.org Plugin',
    challenge:
      'Published on WordPress.org — lightweight, privacy-friendly social sharing buttons with live click counters, pure inline SVGs, and Core Web Vitals friendly performance.',
    stack: ['WordPress', 'PHP', 'JavaScript', 'REST API'],
    url: 'https://wordpress.org/plugins/clickreach-social-share-buttons/',
    urlLabel: 'View on WordPress.org',
  },
  {
    name: 'WP SVG Engine',
    role: 'WordPress Plugin Author',
    category: 'WP Plugin',
    badge: 'WP.org Plugin',
    challenge:
      'Published on WordPress.org — enables safe SVG & SVGZ uploads with automated DOM sanitization, Media Library preview fixes, dimension detection, and fast client-side inlining.',
    stack: ['PHP', 'WordPress', 'SVG', 'DOM Sanitization'],
    url: 'https://wordpress.org/plugins/svigent-tools/',
    urlLabel: 'View on WordPress.org',
  },
  {
    name: 'NaviCakes',
    role: 'Web Developer',
    category: 'Next.js',
    badge: 'Freelance Client',
    challenge:
      'Local bakery website with custom ordering, gallery, and brand identity — pixel-accurate from Figma to production.',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
  },
  {
    name: 'Sri Dhanamoorthy Traders',
    role: 'WordPress Developer',
    category: 'WordPress',
    badge: 'Freelance Client',
    challenge:
      'B2B wholesale cement and steel trader website with structured product catalogue and trade enquiry workflows.',
    stack: ['WordPress', 'ACF', 'Pantheon'],
  },
]

const filters = ['All', 'WordPress', 'WP Plugin', 'Next.js'] as const

export default function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>('All')

  const filtered =
    active === 'All'
      ? projects
      : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="bg-ink text-canvas py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
              Selected Work
            </p>
            <h2 className="font-display font-normal text-3xl sm:text-4xl md:text-5xl text-canvas leading-tight">
              Independent builds &amp; published plugins.
            </h2>
          </div>
          <p className="text-sm text-canvas/75 max-w-sm leading-relaxed">
            Client websites, utility products, and official WordPress.org plugins shipped under{' '}
            <a
              href="https://gradiolex.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              Gradiolex
            </a>
            .
          </p>
        </div>

        {/* NDA-safe enterprise context note */}
        <div className="mb-8 rounded-xl border border-canvas/15 bg-ink-deep/80 px-5 py-4 text-sm text-canvas/80 leading-relaxed">
          <span className="font-semibold text-accent">Enterprise Track Note:</span>{' '}
          Previously delivered 20+ production WordPress, Drupal, and Craft CMS builds for enterprise SaaS and nonprofit organizations during my full-time tenure (2022–2026). Specific agency client brands are omitted here to respect client confidentiality.
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2.5 mb-10" role="group" aria-label="Filter projects by technology">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                active === f
                  ? 'bg-accent text-ink font-semibold'
                  : 'bg-canvas/5 text-canvas/80 border border-canvas/15 hover:border-accent/50 hover:text-canvas'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((project) => (
            <article
              key={project.name}
              className={`flex flex-col justify-between rounded-xl border border-canvas/15 bg-ink-deep p-6 hover:border-accent/60 transition-colors ${
                project.featured && active === 'All' ? 'col-span-1 lg:col-span-2' : 'col-span-1'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-canvas/10">
                  <span className="text-xs font-medium text-accent">
                    {project.role}
                  </span>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-canvas/5 border border-canvas/15 text-canvas/80">
                    {project.badge}
                  </span>
                </div>

                <h3 className="mt-4 font-display font-normal text-2xl text-canvas leading-snug">
                  {project.name}
                </h3>

                <p className="mt-3 text-sm text-canvas/75 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-canvas/10 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-md bg-canvas/5 border border-canvas/10 text-canvas/75"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.url && (
                  <div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-canvas transition-colors"
                    >
                      {project.urlLabel ?? 'Visit Live Site'}
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
