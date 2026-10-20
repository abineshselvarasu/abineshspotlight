'use client'

import { useState, useEffect } from 'react'
import GameOfLife from './GameOfLife'

interface SkillItem {
  name: string
  icon: string // filename in /public/icons (without .svg)
  useCase: string
  level: string
}

interface SkillRow {
  id: string
  label: string
  labelClass: string
  category: string
  color: string
  direction: 'left' | 'right'
  copies: number // enough repeats to fill wide screens for a seamless loop
  items: SkillItem[]
}

// Row 1: Core Engineering Skills (Languages, CMS, Frameworks)
const row1Skills: SkillItem[] = [
  {
    name: 'WordPress',
    icon: 'wp',
    useCase: '3+ years crafting bespoke themes, custom hooks/filters, multisite setups, and enterprise CMS platforms.',
    level: 'Expert',
  },
  {
    name: 'ACF Pro',
    icon: 'acf',
    useCase: 'Built over 50+ modular flexible content components for marketing teams at Unbounce, ElasticPath, and OGP.',
    level: 'Expert',
  },
  {
    name: 'Gutenberg Blocks',
    icon: 'gb',
    useCase: 'Engineered native Gutenberg block suites using React & PHP to give content editors full layout control.',
    level: 'Advanced',
  },
  {
    name: 'Headless WP',
    icon: 'hwp',
    useCase: 'Architected headless CMS backends connecting WordPress GraphQL APIs to fast Next.js frontends.',
    level: 'Advanced',
  },
  {
    name: 'HTML5',
    icon: 'html',
    useCase: 'Pixel-perfect HTML markup built with semantic tags, proper heading hierarchy, and screen-reader accessibility.',
    level: 'Expert',
  },
  {
    name: 'CSS3 / SCSS',
    icon: 'css',
    useCase: 'Structured style architecture supporting dark modes, fluid typography, and complex flex/grid systems.',
    level: 'Expert',
  },
  {
    name: 'JavaScript',
    icon: 'js',
    useCase: 'Clean vanilla JavaScript for dynamic UI components, state handling, and API integrations.',
    level: 'Advanced',
  },
  {
    name: 'Tailwind CSS',
    icon: 'tw',
    useCase: 'Rapid, production-ready UI development using custom Tailwind configuration and theme tokens.',
    level: 'Advanced',
  },
  {
    name: 'TypeScript',
    icon: 'ts',
    useCase: 'Ensures type safety across component props, state variables, and backend REST response payloads.',
    level: 'Intermediate',
  },
  {
    name: 'PHP',
    icon: 'php',
    useCase: 'Server-side logic, custom database queries, REST API routing, and secure form processing.',
    level: 'Advanced',
  },
  {
    name: 'MySQL',
    icon: 'sql',
    useCase: 'Database indexing, custom table queries, and data migration scripts for high-traffic sites.',
    level: 'Advanced',
  },
  {
    name: 'Craft CMS',
    icon: 'craft',
    useCase: 'Delivered structured content models and custom Twig templates for multi-region marketing websites.',
    level: 'Intermediate',
  },
  {
    name: 'Drupal',
    icon: 'drupal',
    useCase: 'Maintained and customized Drupal platforms for global non-profit and public sector organizations.',
    level: 'Intermediate',
  },
]

// Row 2: Developer Tools, DevOps & Performance
const row2Tools: SkillItem[] = [
  {
    name: 'Git & GitHub',
    icon: 'git',
    useCase: 'Version control discipline across team repositories, feature branching, and release tagging.',
    level: 'Advanced',
  },
  {
    name: 'Figma',
    icon: 'figma',
    useCase: 'Converting complex Figma component libraries into responsive code with pixel-perfect precision.',
    level: 'Advanced',
  },
  {
    name: 'Vercel',
    icon: 'vercel',
    useCase: 'Continuous deployments, serverless edge functions, and domain routing for Next.js applications.',
    level: 'Advanced',
  },
  {
    name: 'Pantheon',
    icon: 'pantheon',
    useCase: 'Managed WordPress/Drupal hosting, automated Dev/Test/Live multidev pipelines.',
    level: 'Advanced',
  },
  {
    name: 'Core Web Vitals',
    icon: 'cwv',
    useCase: 'Deep performance engineering including font deferral, critical CSS, image optimization, and LCP reduction (~30%).',
    level: 'Specialty',
  },
  {
    name: 'Technical SEO',
    icon: 'seo',
    useCase: 'Implemented full structured data schema (Person, WebSite, Article) and verified canonical URL structures.',
    level: 'Specialty',
  },
  {
    name: 'Webpack',
    icon: 'webpack',
    useCase: 'Asset bundling, SCSS compilation, JS minification, and build pipeline setup.',
    level: 'Intermediate',
  },
  {
    name: 'WPGraphQL',
    icon: 'gql',
    useCase: 'Configured custom GraphQL schema types, field mutations, and optimized cache layers.',
    level: 'Advanced',
  },
  {
    name: 'REST APIs',
    icon: 'api',
    useCase: 'Wired third-party APIs, CRM webhooks, and custom endpoints into CMS and frontend platforms.',
    level: 'Advanced',
  },
]

const rows: SkillRow[] = [
  {
    id: 'r1',
    label: 'Core Skills',
    labelClass: 'text-forest',
    category: 'Engineering Skills',
    color: 'border-forest/20 text-forest bg-forest/5',
    direction: 'left',
    copies: 2,
    items: row1Skills,
  },
  {
    id: 'r2',
    label: 'Tools & Performance',
    labelClass: 'text-mist',
    category: 'Tools & Workflows',
    color: 'border-accent/40 text-forest bg-accent/10',
    direction: 'right',
    copies: 3,
    items: row2Tools,
  },
]

type Selected = { item: SkillItem; row: SkillRow }

function SkillIcon({ item }: { item: SkillItem }) {
  // eslint-disable-next-line @next/next/no-img-element -- small static SVGs; next/image adds no value here
  return <img src={`/icons/${item.icon}.svg`} alt={`${item.name} logo`} width={32} height={32} loading="lazy" decoding="async" className="w-8 h-8 object-contain" />
}

export default function Skills() {
  const [selected, setSelected] = useState<Selected | null>(null)

  useEffect(() => {
    if (!selected) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null)
    }
    document.addEventListener('keydown', handleKeyDown)
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
    }
  }, [selected])

  return (
    <section id="skills" className="relative py-14 md:py-20 lg:py-24 bg-transparent overflow-hidden border-t border-rule">
      <GameOfLife />
      <div className="relative z-10 container mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-8 md:mb-12 gap-6">
          <div>
            <p className="reveal-text text-sm font-mono text-forest uppercase tracking-widest mb-3 font-semibold">Technical Stack</p>
            <h2 className="reveal-text font-display font-normal text-4xl md:text-5xl text-ink leading-tight delay-100">
              Skills &amp; tools.
            </h2>
          </div>
          <p className="reveal-text text-mist max-w-xs text-base font-mono leading-relaxed delay-200">
            Technologies I use to architect, build, and ship production-grade web products.
          </p>
        </div>

        {/* Carousel Tracks Container */}
        <div className="reveal-text delay-300 relative overflow-hidden py-4 -mx-6 px-6 space-y-8">

          {/* Soft Left & Right Fade Gradient Masks */}
          <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-canvas to-transparent z-20" />
          <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-canvas to-transparent z-20" />

          {rows.map((row) => (
            <div key={row.id}>
              <div className="flex items-center gap-2 mb-3 px-3">
                <span className={`text-sm font-mono uppercase tracking-widest font-bold ${row.labelClass}`}>
                  {row.label}
                </span>
              </div>

              <div className={row.direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}>
                {Array.from({ length: row.copies }, () => row.items).flat().map((item, idx) => (
                  <button
                    type="button"
                    key={`${row.id}-${item.name}-${idx}`}
                    onClick={() => setSelected({ item, row })}
                    // Repeated copies exist only for the seamless loop; keep one copy in the tab order
                    tabIndex={idx < row.items.length ? 0 : -1}
                    aria-hidden={idx < row.items.length ? undefined : true}
                    className="w-auto shrink-0 mx-2.5 p-4 sm:p-5 hover:scale-105 transition-all duration-300 cursor-pointer group flex flex-col items-center justify-center text-center"
                  >
                    <span className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border flex items-center justify-center mb-3 transition-transform group-hover:scale-110 ${row.color}`}>
                      <SkillIcon item={item} />
                    </span>
                    <span className="font-mono font-medium text-sm sm:text-base text-ink group-hover:text-forest transition-colors">
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}

        </div>

        {/* Selected Item Detail Modal */}
        {selected && (
          <div
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-ink/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="skill-dialog-title"
              className="bg-paper border-2 border-forest p-6 md:p-8 max-w-lg w-full rounded-2xl shadow-2xl relative"
            >

              {/* Close button */}
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close details"
                autoFocus
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-canvas border border-rule text-mist hover:text-ink hover:border-forest flex items-center justify-center transition-all group"
              >
                <svg className="w-4 h-4 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${selected.row.color}`}>
                  <SkillIcon item={selected.item} />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-forest font-bold px-2.5 py-0.5 rounded bg-forest/10 border border-forest/20">
                    {selected.row.category}
                  </span>
                  <h3 id="skill-dialog-title" className="text-2xl sm:text-3xl font-display text-ink font-normal mt-1">
                    {selected.item.name}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-sm font-mono">
                <div className="bg-canvas p-4 rounded-xl border border-rule">
                  <p className="text-mist uppercase tracking-widest text-xs font-semibold mb-1">Proficiency Level</p>
                  <p className="text-forest font-bold text-base">{selected.item.level}</p>
                </div>

                <div className="bg-canvas p-4 rounded-xl border border-rule">
                  <p className="text-mist uppercase tracking-widest text-xs font-semibold mb-1">Enterprise Application</p>
                  <p className="text-ink/90 text-sm sm:text-base leading-relaxed">{selected.item.useCase}</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
