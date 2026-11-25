'use client'

import { useId, useState } from 'react'
import { ForwardArrowIcon } from './icons'

type ProjectCategory = 'WordPress' | 'WP Plugin' | 'Next.js'

type Project = {
  name: string
  role: string
  category: ProjectCategory
  badge: string
  featured?: boolean
  challenge: string
  highlights?: string[]
  architecture?: {
    decision: string
    outcome: string
  }
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
      'Website for a PhD-led aquaculture and farmtech advisory firm in Tamil Nadu — showcasing turnkey pond design, Biofloc & RAS tank setups, and fish seed supply with a product catalogue and consultation workflows.',
    highlights: [
      'Structured product catalogue for pond packages, Biofloc & RAS setups',
      'Farm consultation forms routed to Fluent Forms and one-tap WhatsApp enquiries',
    ],
    architecture: {
      decision:
        'Built with Kadence and structured ACF Pro field groups instead of a heavy multipurpose page builder, routing product enquiries directly to Fluent Forms and WhatsApp.',
      outcome:
        'Non-technical advisors manage pond packages and stock cleanly while keeping pages lightweight on mobile networks.',
    },
    stack: ['WordPress', 'PHP 8', 'Kadence', 'ACF Pro', 'Fluent Forms', 'Pantheon'],
  },
  {
    name: 'Card About Me',
    role: 'Web Developer',
    category: 'Next.js',
    badge: 'Product Build',
    challenge:
      'Link-in-bio platform for creators and businesses — featuring custom profile links, calendar bookings, direct WhatsApp client chat, and 0% commission direct UPI payments.',
    architecture: {
      decision:
        'Engineered with Next.js App Router, React, and TypeScript using dynamic creator routes and direct UPI deep-link generation without payment middleware.',
      outcome:
        'Instant page loads with zero transaction commissions for creators and small service businesses.',
    },
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'UPI API', 'Vercel'],
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
    architecture: {
      decision:
        'Designed a 100% client-side inspection pipeline using WebRTC ICE candidate probing, WebGL renderer detection, and active load-latency checks with zero database logging.',
      outcome:
        'IT support teams diagnose user issues in one link without storing sensitive visitor telemetry.',
    },
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Web APIs', 'Vercel'],
    url: 'https://mysupportinfo.com/',
    urlLabel: 'Visit Live Site',
  },
  {
    name: 'ClickReach – Social Share Buttons & Counter',
    role: 'WordPress Plugin Author',
    category: 'WP Plugin',
    badge: 'WP.org Plugin',
    challenge:
      'Published on WordPress.org — lightweight, privacy-friendly social sharing buttons powered by a custom WordPress REST API click-tracking endpoint and pure inline SVGs.',
    architecture: {
      decision:
        'Replaced external third-party share scripts with inline SVGs and a sanitized WordPress REST API endpoint storing aggregate counts in post meta.',
      outcome:
        'Zero third-party tracking bloat or render-blocking requests, preserving Core Web Vitals.',
    },
    stack: ['WordPress', 'PHP 8', 'REST API', 'JavaScript'],
    url: 'https://wordpress.org/plugins/clickreach-social-share-buttons/',
    urlLabel: 'View on WordPress.org',
  },
  {
    name: 'WP SVG Engine',
    role: 'WordPress Plugin Author',
    category: 'WP Plugin',
    badge: 'WP.org Plugin',
    challenge:
      'Published on WordPress.org — enables safe SVG & SVGZ uploads with server-side DOM sanitization, Media Library preview fixes, dimension detection, and client-side inlining.',
    architecture: {
      decision:
        'Implemented strict XML/DOM tree sanitization in PHP (stripping script tags, foreign objects, and event attributes) instead of brittle regex filtering.',
      outcome:
        'Safely enables SVG uploads for multi-author WordPress teams without XSS exposure.',
    },
    stack: ['PHP 8', 'WordPress', 'DOM Sanitization', 'SVG'],
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
    stack: ['WordPress', 'PHP', 'ACF Pro', 'Pantheon'],
  },
]

const filters = ['All', 'WordPress', 'WP Plugin', 'Next.js'] as const

const categoryIconPath: Record<ProjectCategory, string> = {
  WordPress: '/icons/wp.svg',
  'WP Plugin': '/icons/wp.svg',
  'Next.js': '/icons/nextjs.svg',
}

function ArchitectureToggle({
  decision,
  outcome,
  className = 'mt-4',
}: {
  decision: string
  outcome: string
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <div className={`${className} rounded-xl border border-canvas/10 bg-ink/70 text-xs overflow-hidden`}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((prev) => !prev)}
        className="w-full cursor-pointer select-none flex items-center justify-between gap-2 px-3.5 py-2.5 font-medium text-canvas/90 hover:text-accent transition-colors text-left"
      >
        <span className="flex items-center gap-2">
          <svg
            className="w-3.5 h-3.5 text-accent shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          Architecture &amp; Decisions
        </span>
        <svg
          className={`w-3.5 h-3.5 text-accent shrink-0 transition-transform duration-300 ease-out motion-reduce:transition-none ${
            open ? 'rotate-180' : 'rotate-0'
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* CSS Grid 0fr -> 1fr + opacity transition gives 60fps butter-smooth open & close across all browsers */}
      <div
        id={panelId}
        aria-hidden={!open}
        inert={!open}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="px-3.5 pb-3 pt-2.5 border-t border-canvas/10 space-y-1.5 text-canvas/75 leading-relaxed">
            <p>
              <strong className="text-canvas font-medium">Decision:</strong> {decision}
            </p>
            <p>
              <strong className="text-canvas font-medium">Result:</strong> {outcome}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>('All')

  const featuredProject = active === 'All' ? projects.find((p) => p.featured) : undefined
  const gridProjects =
    active === 'All'
      ? projects.filter((p) => !p.featured)
      : projects.filter((p) => p.category === active)

  const gridColsClass =
    gridProjects.length === 2
      ? 'grid-cols-1 md:grid-cols-2'
      : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'

  const getCount = (f: (typeof filters)[number]) =>
    f === 'All' ? projects.length : projects.filter((p) => p.category === f).length

  return (
    <section id="projects" className="bg-ink text-canvas py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
              Selected Work
            </p>
            <h2 className="font-display font-normal text-3xl sm:text-4xl md:text-5xl text-canvas leading-tight">
              Independent builds &amp; published plugins.
            </h2>
            <div className="mt-4 h-[3px] w-14 rounded-full bg-accent" aria-hidden="true" />
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
        <div className="mb-8 rounded-xl border border-accent/25 bg-ink-deep/90 px-5 py-4 text-sm text-canvas/80 leading-relaxed flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p>
            <span className="font-semibold text-accent">Enterprise Track Note:</span>{' '}
            Previously delivered 20+ production WordPress, Drupal, and Craft CMS builds for
            enterprise SaaS and nonprofit organizations (2022–2026). Agency client brands are
            omitted here to respect client confidentiality.
          </p>
        </div>

        {/* Interactive Filter Tabs */}
        <div
          className="flex flex-wrap items-center gap-2.5 mb-10"
          role="group"
          aria-label="Filter projects by technology"
        >
          {filters.map((f) => {
            const isActive = active === f
            return (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border transition-colors ${
                  isActive
                    ? 'bg-accent text-ink border-accent font-semibold'
                    : 'bg-ink-deep/60 text-canvas/80 border-canvas/15 hover:border-accent/50 hover:text-canvas'
                }`}
              >
                <span>{f}</span>
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full tabular-nums ${
                    isActive ? 'bg-ink/15 text-ink' : 'bg-canvas/10 text-canvas/70'
                  }`}
                >
                  {getCount(f)}
                </span>
              </button>
            )
          })}
        </div>

        {/* Featured Paired Showcase Panel (Elastic Path paired showcase pattern) */}
        {featuredProject && (
          <article className="mb-8 rounded-2xl border border-accent/35 bg-ink-deep overflow-hidden shadow-lg">
            <div className="h-[3px] w-full bg-gradient-to-r from-accent via-accent/60 to-transparent" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 items-center">
              {/* Left Narrative Column */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-accent/15 text-accent border border-accent/30">
                    Featured Build
                  </span>
                  <span className="text-xs font-medium text-canvas/75">
                    {featuredProject.role}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-canvas/5 border border-canvas/15 text-canvas/80">
                    {featuredProject.badge}
                  </span>
                </div>

                <h3 className="font-display font-normal text-3xl sm:text-4xl text-canvas leading-tight">
                  {featuredProject.name}
                </h3>
                <div className="mt-3 h-[2px] w-10 rounded-full bg-accent" aria-hidden="true" />

                <p className="mt-4 text-sm sm:text-base text-canvas/80 leading-relaxed">
                  {featuredProject.challenge}
                </p>

                {featuredProject.highlights && (
                  <ul className="mt-4 space-y-2 text-sm text-canvas/85">
                    {featuredProject.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 leading-snug">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {featuredProject.architecture && (
                  <ArchitectureToggle
                    decision={featuredProject.architecture.decision}
                    outcome={featuredProject.architecture.outcome}
                  />
                )}

                <div className="mt-6 pt-5 border-t border-canvas/10 flex flex-wrap gap-1.5">
                  {featuredProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-md bg-canvas/5 border border-canvas/10 text-canvas/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Architecture Spec Preview Card + Overlapping Callout Pill */}
              <div className="lg:col-span-5">
                <div className="relative">
                  <div className="rounded-xl bg-surface text-ink border border-rule/50 p-5 sm:p-6 sm:pb-8 shadow-xl">
                    <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-rule">
                      <div className="flex items-center gap-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/icons/wp.svg"
                          alt=""
                          width={18}
                          height={18}
                          className="w-4 h-4 object-contain"
                        />
                        <span className="text-xs font-semibold uppercase tracking-wider text-forest">
                          Production Blueprint
                        </span>
                      </div>
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-paper border border-rule text-mist">
                        Pantheon
                      </span>
                    </div>

                    <dl className="space-y-2.5 text-xs sm:text-sm">
                      <div className="flex items-start justify-between gap-4 pb-2 border-b border-rule/60">
                        <dt className="text-mist shrink-0">Industry</dt>
                        <dd className="font-medium text-ink text-right">
                          Aquaculture &amp; Farmtech
                        </dd>
                      </div>
                      <div className="flex items-start justify-between gap-4 pb-2 border-b border-rule/60">
                        <dt className="text-mist shrink-0">Architecture</dt>
                        <dd className="font-medium text-ink text-right">
                          Kadence + ACF Pro Groups
                        </dd>
                      </div>
                      <div className="flex items-start justify-between gap-4 pb-2 border-b border-rule/60">
                        <dt className="text-mist shrink-0">Enquiries</dt>
                        <dd className="font-medium text-ink text-right">
                          Fluent Forms → WhatsApp
                        </dd>
                      </div>
                      <div className="flex items-start justify-between gap-4">
                        <dt className="text-mist shrink-0">Runtime</dt>
                        <dd className="font-medium text-ink text-right">
                          WordPress · PHP 8
                        </dd>
                      </div>
                    </dl>
                  </div>

                  {/* Overlapping Floating Outcome Callout (Elastic Path visual cue) */}
                  <div className="mt-3 sm:-mt-4 sm:ml-6 relative z-10 rounded-xl bg-ink border border-canvas/20 border-t-[3px] border-t-accent px-4 py-3 shadow-2xl">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                      Editorial Outcome
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-canvas/90 leading-snug">
                      Non-technical advisors manage pond packages &amp; seed catalogues without page-builder bloat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Modular Bento Case-Study Grid (Elastic Path feature-card styling) */}
        <div className={`grid ${gridColsClass} gap-6 items-stretch`}>
          {gridProjects.map((project) => (
            <article
              key={project.name}
              className="group relative flex flex-col justify-between rounded-2xl border border-canvas/15 bg-ink-deep overflow-hidden hover:border-accent/60 transition-colors"
            >
              <div className="flex-1 flex flex-col">
                {/* Header Band with Category Icon & Role */}
                <div className="px-6 pt-5 pb-4 border-b border-canvas/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-8 h-8 rounded-lg bg-forest/70 border border-accent/25 flex items-center justify-center shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={categoryIconPath[project.category]}
                        alt=""
                        width={16}
                        height={16}
                        loading="lazy"
                        decoding="async"
                        className="w-4 h-4 object-contain brightness-0 invert"
                      />
                    </span>
                    <span className="text-xs font-medium text-accent truncate">
                      {project.role}
                    </span>
                  </div>

                  <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-canvas/5 border border-canvas/15 text-canvas/80 shrink-0">
                    {project.badge}
                  </span>
                </div>

                {/* Body */}
                <div className="px-6 pt-5 pb-5 flex-1 flex flex-col">
                  <h3 className="font-display font-normal text-2xl text-canvas leading-snug group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <div className="mt-2.5 h-[2px] w-8 rounded-full bg-accent/70" aria-hidden="true" />

                  <p className="mt-3.5 text-sm text-canvas/75 leading-relaxed">
                    {project.challenge}
                  </p>

                  {project.architecture && (
                    <div className="mt-auto pt-4">
                      <ArchitectureToggle
                        decision={project.architecture.decision}
                        outcome={project.architecture.outcome}
                        className="mt-0"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div>
                <div className="px-6 py-4 bg-ink/40 border-t border-canvas/10 space-y-3.5">
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

                  <div className="pt-1 flex items-center justify-between">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-canvas transition-colors"
                      >
                        {project.urlLabel ?? 'Visit Live Site'}
                        <ForwardArrowIcon className="w-4 h-4" groupHover="group-hover/link:translate-x-1" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-canvas/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/70" aria-hidden="true" />
                        Client Production Build
                      </span>
                    )}
                  </div>
                </div>

                {/* Signature Elastic Path Bottom Accent Line */}
                <div
                  className={`h-[3px] w-full transition-colors ${
                    project.url
                      ? 'bg-accent/75 group-hover:bg-accent'
                      : 'bg-forest/80 group-hover:bg-accent/75'
                  }`}
                  aria-hidden="true"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
