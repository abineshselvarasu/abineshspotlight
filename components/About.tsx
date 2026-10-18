'use client'

import { useState, useEffect, useRef } from 'react'
import ShootingStarsGrid from './ShootingStarsGrid'
import { GitHubIcon, LinkedInIcon, WordPressIcon } from './icons'

const tags = [
  'WordPress Customization', 'Custom Themes', 'Custom Hooks',
  'Technical SEO', 'MySQL', 'ACF Pro', 'PHP', 'Core Web Vitals',
  'Headless WP', 'Gutenberg Blocks', 'WPGraphQL', 'Craft CMS', 'Drupal',
  'JavaScript', 'Tailwind CSS', 'Figma to Code',
]

interface RailMilestone {
  step: string
  durationLabel: string
  period: string
  role: string
  company: string
  summary: string
  deliverables: string[]
  tags: string[]
  isDefault?: boolean // stage selected on first render
}

// Stages 01–04 are kept in sync with the resume (app/resume/page.tsx): titles, dates, and metrics should match.
// Freelance work lives on gradiolex.vercel.app, so it's intentionally not a roadmap stage.
const railMilestones: RailMilestone[] = [
  {
    step: '01',
    durationLabel: '4 Years',
    period: '2016 — 2020',
    role: 'B.E. Computer Science & Engineering',
    company: 'Vidyaa Vikas College of Engineering · Anna University',
    summary: 'Bachelor of Engineering in Computer Science — foundations in software engineering, algorithms, databases, and web architecture.',
    deliverables: [
      'Graduated with CGPA 7.04 / 10',
      'Data Structures & Algorithm Complexity',
      'Relational Database Management (SQL)',
    ],
    tags: ['Algorithms', 'Data Structures', 'C++', 'Java', 'SQL'],
  },
  {
    step: '02',
    durationLabel: '6 Months',
    period: 'JUL — DEC 2022',
    role: 'Web Developer',
    company: 'FueInt Technologies',
    summary: 'Joined FueInt Technologies, Coimbatore — customised WordPress themes, built responsive interfaces, and resolved production bugs.',
    deliverables: [
      'Mastered WordPress theme hierarchy & hooks',
      'Mobile-first responsive UI implementations',
      'Git version control in production sprints',
    ],
    tags: ['WordPress', 'HTML5', 'CSS3', 'PHP', 'Git'],
  },
  {
    step: '03',
    durationLabel: '2 Years',
    period: 'JAN 2023 — DEC 2024',
    role: 'Frontend & WordPress Developer',
    company: 'FueInt Technologies · via Dialed In Design (Canada)',
    summary: 'Built custom WordPress themes and plugins from Figma across 20+ international client sites in Agile/Scrum teams.',
    deliverables: [
      'Custom themes & plugins for 20+ client sites',
      'Reusable Gutenberg & ACF Pro components (~25% faster delivery)',
      'JSON-LD schemas lifting organic CTR by ~15%',
    ],
    tags: ['WordPress', 'PHP', 'Gutenberg', 'ACF Pro', 'JSON-LD', 'Figma'],
  },
  {
    step: '04',
    durationLabel: '1.5 Years',
    period: 'JAN 2025 — MAY 2026',
    role: 'Senior WordPress Developer',
    company: 'FueInt Technologies · via Dialed In Design (Canada)',
    summary: 'Led enterprise CMS delivery across WordPress, Drupal, and Craft CMS for Unbounce, Open Government Partnership, ElasticPath, and PBC.',
    deliverables: [
      'Bespoke Gutenberg block suite for Unbounce (React)',
      '~30% LCP reduction & 1,700+ URL sitemap fix',
      'PHP 7.4 → 8.x upgrades for OGP, PBC & ElasticPath',
    ],
    tags: ['WordPress', 'Drupal', 'Craft CMS', 'React', 'Core Web Vitals', 'Pantheon'],
    isDefault: true,
  },
  {
    step: '05',
    durationLabel: 'Future / Next',
    period: 'PRESENT — FUTURE',
    role: 'Open to Full-Time Senior Engineering Roles',
    company: 'Global Remote / Enterprise',
    summary: 'Ready to lead CMS architecture, headless WordPress solutions, and performance-critical frontend systems.',
    deliverables: [
      'Available for full-time senior developer positions',
      'Specialized in CMS architecture & Core Web Vitals',
      'Global remote collaboration experience',
    ],
    tags: ['WordPress', 'Next.js', 'React', 'TypeScript', 'SEO'],
  },
]

const DEFAULT_STAGE_IDX = Math.max(0, railMilestones.findIndex((m) => m.isDefault))

export default function About() {
  const [activeStageIdx, setActiveStageIdx] = useState(DEFAULT_STAGE_IDX)
  const currentStage = railMilestones[activeStageIdx]
  const railScrollRef = useRef<HTMLDivElement>(null)
  const nodeRefs = useRef<(HTMLButtonElement | null)[]>([])

  // Auto-center the active node inside the horizontal rail (tablet/desktop).
  // Scrolls only the container, never the page, so this is safe on mount.
  useEffect(() => {
    const center = (container: HTMLElement | null, el: HTMLElement | null | undefined) => {
      if (!container || !el) return
      container.scrollTo({
        left: Math.max(0, el.offsetLeft - container.offsetWidth / 2 + el.offsetWidth / 2),
        behavior: 'smooth',
      })
    }
    center(railScrollRef.current, nodeRefs.current[activeStageIdx])
  }, [activeStageIdx])

  const prevStep = () => setActiveStageIdx((i) => Math.max(0, i - 1))
  const nextStep = () => setActiveStageIdx((i) => Math.min(railMilestones.length - 1, i + 1))

  // Tablet tabs: Up/Down move selection and focus together (roving tabindex)
  const handleVerticalKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return
    e.preventDefault()
    const next = e.key === 'ArrowUp'
      ? Math.max(0, activeStageIdx - 1)
      : Math.min(railMilestones.length - 1, activeStageIdx + 1)
    setActiveStageIdx(next)
    document.getElementById(`roadmap-tab-${railMilestones[next].step}`)?.focus()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      prevStep()
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      nextStep()
    }
  }
  return (
    <section id="about" className="relative bg-ink text-canvas border-t border-canvas/10 overflow-hidden">
      <ShootingStarsGrid />
      
      {/* ── Part 1: About Me (Balanced 2-Column Layout) ───────────────── */}
      <div className="relative z-10 container mx-auto px-6 py-16 lg:py-20 border-b border-canvas/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Bio & Narrative (7 cols) */}
          <div className="lg:col-span-7">
            <p className="reveal-text text-sm font-mono text-accent uppercase tracking-widest mb-4 font-semibold">About me</p>
            <h2 className="reveal-text font-display font-normal text-4xl md:text-5xl text-canvas leading-tight mb-8 delay-100">
              Building the web,<br />one commit at a time.
            </h2>
            
            <div className="space-y-5 text-canvas/80 text-lg leading-relaxed">
              <p className="reveal-text delay-200">
                I&apos;m Abinesh Selvarasu — a Senior WordPress Developer and Full Stack Engineer based in Tamil Nadu,
                India. With 3+ years delivering production-grade web platforms for global enterprise clients,
                I specialise in custom CMS architecture, headless WordPress solutions, and performance engineering.
              </p>
              <p className="reveal-text delay-300">
                Day-to-day: architecting scalable CMS components with ACF Pro and Gutenberg, integrating REST & GraphQL APIs,
                and solving the complex Core Web Vitals and technical SEO challenges that keep platforms fast, secure, and accessible.
              </p>
            </div>
          </div>

          {/* Right Column: Core Technical Stack, Quote & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="reveal-text delay-400">
              <p className="text-sm font-mono text-canvas/50 uppercase tracking-widest mb-4 font-semibold">Core Technical Stack</p>
              <div className="flex flex-wrap gap-2.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-2 text-sm font-mono text-canvas/90 bg-canvas/5 border border-canvas/10 hover:bg-accent hover:border-accent hover:text-ink transition-all cursor-default shadow-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <blockquote className="reveal-text border-l-4 border-accent pl-5 text-canvas text-lg md:text-xl italic font-serif py-1 delay-500 leading-relaxed">
              &ldquo;Fast websites shouldn&apos;t be a premium feature — they should be the baseline.&rdquo;
            </blockquote>

            {/* Social Action Links */}
            <div className="reveal-text flex flex-wrap gap-3 pt-2 delay-600">
              <a
                href="https://linkedin.com/in/abineshselvarasu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="group flex items-center gap-2.5 px-4 py-2.5 border border-canvas/10 bg-canvas/5 text-xs font-mono text-canvas hover:border-accent hover:text-accent hover:bg-canvas/10 transition-all shadow-sm rounded-full"
              >
                <LinkedInIcon className="w-4 h-4 text-accent" />
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/abineshselvarasu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="group flex items-center gap-2.5 px-4 py-2.5 border border-canvas/10 bg-canvas/5 text-sm font-mono text-canvas hover:border-accent hover:text-accent hover:bg-canvas/10 transition-all shadow-sm rounded-full"
              >
                <GitHubIcon className="w-4 h-4 text-accent" />
                GitHub Profile
              </a>
              <a
                href="https://profiles.wordpress.org/abineshselvarasu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WordPress.org Profile"
                className="group flex items-center gap-2.5 px-4 py-2.5 border border-canvas/10 bg-canvas/5 text-sm font-mono text-canvas hover:border-accent hover:text-accent hover:bg-canvas/10 transition-all shadow-sm rounded-full"
              >
                <WordPressIcon className="w-4 h-4 text-accent" />
                WordPress.org
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Part 2: Career Roadmap (Design Inc. Horizontal Laser Track — Exact Replica of design2.gif) ──────────── */}
      <div id="timeline" className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        
        {/* Section Header with Line-by-Line Cascading Blooms */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-10 sm:mb-12 gap-4">
          <div>
            <p className="reveal-text text-sm font-mono text-accent uppercase tracking-widest mb-3 font-semibold">Career Roadmap</p>
            <h2 className="reveal-text font-display font-normal text-3xl sm:text-4xl md:text-5xl text-canvas leading-tight delay-100">
              My journey.
            </h2>
          </div>
          <p className="reveal-text text-canvas/60 max-w-xs text-sm sm:text-base font-mono leading-relaxed delay-200">
            Continuous engineering growth — from Web Developer to Senior WordPress Developer and Full Stack Engineer.
          </p>
        </div>

        {/* Main Interactive Stage Container */}
        <div className="reveal-text delay-300 relative bg-gradient-to-b from-forest/30 via-forest/15 to-ink/90 border border-canvas/15 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 shadow-2xl overflow-hidden backdrop-blur-md">
          
          {/* Ambient Micro-Particles Background */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-25">
            <span className="absolute top-12 left-16 text-accent/40 font-mono text-sm">+</span>
            <span className="absolute top-48 left-1/4 text-canvas/30 font-mono text-xs">○</span>
            <span className="absolute top-28 right-24 text-accent/40 font-mono text-sm">×</span>
            <span className="absolute bottom-32 left-12 text-canvas/30 font-mono text-xs">○</span>
            <span className="absolute bottom-16 right-1/3 text-accent/40 font-mono text-sm">+</span>
            <span className="absolute top-72 right-16 text-canvas/30 font-mono text-sm">×</span>
          </div>

          {/* Giant Watermarked Background Title */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <span className="text-[64px] sm:text-[120px] md:text-[180px] lg:text-[220px] font-display font-black tracking-widest text-canvas/[0.025] uppercase">
              ROADMAP
            </span>
          </div>

          {/* Center Stage Era Header */}
          <div className="relative z-10 hidden lg:block text-center mb-12 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold block">
              STAGE {currentStage.step} OF {String(railMilestones.length).padStart(2, '0')}
            </span>
            <h3 className="text-xl sm:text-3xl md:text-5xl font-display uppercase tracking-wider text-canvas font-semibold leading-snug sm:leading-tight">
              {currentStage.role}
            </h3>
            <p className="text-xs sm:text-sm font-mono text-accent font-medium">
              {currentStage.company} · {currentStage.period}
            </p>
          </div>

          {/* ── Mobile: vertical timeline accordion (below md) ── */}
          <ol className="relative z-10 md:hidden" aria-label="Career stages">
            {railMilestones.map((m, idx) => {
              const isSelected = idx === activeStageIdx
              const isLast = idx === railMilestones.length - 1
              const panelId = `roadmap-stage-${m.step}`
              return (
                <li key={m.step} className="relative pl-10">
                  {/* Rail segment down to the next node */}
                  {!isLast && (
                    <span aria-hidden="true" className="absolute left-[13px] top-7 -bottom-1 w-[2px] bg-gradient-to-b from-accent/60 to-accent/15" />
                  )}

                  {/* Node */}
                  <span aria-hidden="true" className={`absolute left-0 top-1 w-7 h-7 rounded-full border-2 bg-ink flex items-center justify-center transition-all duration-300 ${
                    isSelected ? 'border-accent shadow-[0_0_14px_#DCBC7D]' : 'border-canvas/25'
                  }`}>
                    <span className={`w-2.5 h-2.5 rounded-full transition-colors ${isSelected ? 'bg-accent animate-pulse' : 'bg-canvas/30'}`} />
                  </span>

                  <button
                    type="button"
                    onClick={() => setActiveStageIdx(idx)}
                    aria-expanded={isSelected}
                    aria-controls={panelId}
                    className="w-full text-left pb-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
                  >
                    <span className="flex items-center gap-2 flex-wrap">
                      <span className={`text-xs font-mono font-bold ${isSelected ? 'text-accent' : 'text-canvas/50'}`}>{m.step}</span>
                      <span className={`text-[11px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                        isSelected ? 'text-accent border-accent/40 bg-accent/10' : 'text-canvas/60 border-canvas/15'
                      }`}>
                        {m.durationLabel}
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-canvas/50">{m.period}</span>
                    </span>
                    <span className={`block mt-2 font-display text-lg leading-snug transition-colors ${isSelected ? 'text-canvas' : 'text-canvas/80'}`}>
                      {m.role}
                    </span>
                    <span className="block mt-0.5 text-xs font-mono text-accent/80">{m.company}</span>
                  </button>

                  {/* Expanding details (grid-rows trick animates height without measuring) */}
                  <div
                    id={panelId}
                    role="region"
                    aria-label={`${m.role} details`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${isSelected ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                  >
                    <div className="overflow-hidden" inert={!isSelected}>
                      <div className="mb-6 p-4 rounded-xl bg-canvas/[0.04] border border-canvas/15 space-y-3">
                        <p className="text-sm text-canvas/80 leading-relaxed">{m.summary}</p>
                        <ul className="space-y-1.5">
                          {m.deliverables.map((d) => (
                            <li key={d} className="flex items-start gap-2 text-xs font-mono text-canvas/90 leading-relaxed">
                              <span className="text-accent font-bold shrink-0">✓</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {m.tags.map((t) => (
                            <span key={t} className="text-[11px] font-mono text-canvas/60 bg-canvas/5 border border-canvas/10 px-2.5 py-0.5 rounded">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>

          {/* ── Tablet: stage list + detail panel (md → lg only) ── */}
          <div className="relative z-10 hidden md:grid lg:hidden grid-cols-12 gap-6 items-start">
            {/* Stage list */}
            <div className="col-span-5 relative" role="tablist" aria-orientation="vertical" aria-label="Career stages">
              {railMilestones.map((m, idx) => {
                const isSelected = idx === activeStageIdx
                const isLast = idx === railMilestones.length - 1
                return (
                  <div key={m.step} className="relative pl-9 pb-3 last:pb-0">
                    {!isLast && (
                      <span aria-hidden="true" className="absolute left-[11px] top-7 bottom-0 w-[2px] bg-gradient-to-b from-accent/60 to-accent/15" />
                    )}
                    <span aria-hidden="true" className={`absolute left-0 top-3 w-6 h-6 rounded-full border-2 bg-ink flex items-center justify-center transition-all duration-300 ${
                      isSelected ? 'border-accent shadow-[0_0_12px_#DCBC7D]' : 'border-canvas/25'
                    }`}>
                      <span className={`w-2 h-2 rounded-full transition-colors ${isSelected ? 'bg-accent' : 'bg-canvas/30'}`} />
                    </span>
                    <button
                      type="button"
                      role="tab"
                      id={`roadmap-tab-${m.step}`}
                      aria-selected={isSelected}
                      aria-controls="roadmap-tabpanel"
                      tabIndex={isSelected ? 0 : -1}
                      onClick={() => setActiveStageIdx(idx)}
                      onKeyDown={handleVerticalKeyDown}
                      className={`w-full text-left px-4 py-3 rounded-xl border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                        isSelected
                          ? 'border-accent/50 bg-canvas/[0.07] shadow-lg'
                          : 'border-transparent hover:border-canvas/15 hover:bg-canvas/[0.03]'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className={`text-xs font-mono font-bold ${isSelected ? 'text-accent' : 'text-canvas/50'}`}>{m.step}</span>
                        <span className={`text-[11px] font-mono font-bold uppercase tracking-wider ${isSelected ? 'text-accent' : 'text-canvas/50'}`}>
                          {m.durationLabel}
                        </span>
                      </span>
                      <span className={`block mt-1 font-display text-lg leading-snug ${isSelected ? 'text-canvas' : 'text-canvas/75'}`}>
                        {m.role}
                      </span>
                      <span className="block mt-0.5 text-[11px] font-mono uppercase tracking-wider text-canvas/50">{m.period}</span>
                    </button>
                  </div>
                )
              })}
            </div>

            {/* Detail panel */}
            <div
              id="roadmap-tabpanel"
              role="tabpanel"
              aria-labelledby={`roadmap-tab-${currentStage.step}`}
              className="col-span-7 p-6 rounded-2xl bg-canvas/[0.04] border border-canvas/15 backdrop-blur-md"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
                Stage {currentStage.step} of {String(railMilestones.length).padStart(2, '0')} · {currentStage.period}
              </span>
              <h3 className="mt-3 text-2xl font-display text-canvas font-medium leading-snug">
                {currentStage.role}
              </h3>
              <p className="mt-1 text-sm font-mono text-accent/90">{currentStage.company}</p>
              <p className="mt-4 text-sm text-canvas/80 leading-relaxed">{currentStage.summary}</p>

              <span className="mt-6 text-xs font-mono uppercase tracking-wider text-canvas/50 font-bold block">
                Key Deliverables Shipped
              </span>
              <ul className="mt-2 space-y-1.5">
                {currentStage.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-xs font-mono text-canvas/90 leading-relaxed">
                    <span className="text-accent font-bold shrink-0">✓</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {currentStage.tags.map((t) => (
                  <span key={t} className="text-[11px] font-mono text-canvas/60 bg-canvas/5 border border-canvas/10 px-2.5 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-canvas/10 flex items-center justify-between">
                <span className="text-xs font-mono text-canvas/50">
                  Phase {activeStageIdx + 1} of {railMilestones.length}
                </span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={activeStageIdx === 0}
                    aria-label="Previous stage"
                    className="w-10 h-10 rounded-full border border-canvas/20 hover:border-accent bg-canvas/5 hover:bg-accent hover:text-ink flex items-center justify-center text-canvas disabled:opacity-30 disabled:cursor-not-allowed transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={activeStageIdx === railMilestones.length - 1}
                    aria-label="Next stage"
                    className="w-10 h-10 rounded-full border border-canvas/20 hover:border-accent bg-canvas/5 hover:bg-accent hover:text-ink flex items-center justify-center text-canvas disabled:opacity-30 disabled:cursor-not-allowed transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Track & Rail Grid */}
          <div className="relative z-10 hidden lg:grid md:grid-cols-12 gap-6 items-center">
            
            {/* ── Left Stage Stepper (Desktop 01 to 05) ── */}
            <div className="hidden md:flex md:col-span-1 flex-col items-center">
              <div className="relative flex flex-col items-center py-2">
                {/* Vertical thin rail */}
                <div className="absolute top-2 bottom-2 w-[1px] bg-canvas/15" />

                {railMilestones.map((m, idx) => {
                  const isSelected = idx === activeStageIdx
                  return (
                    <button
                      key={m.step}
                      type="button"
                      onClick={() => setActiveStageIdx(idx)}
                      onKeyDown={handleKeyDown}
                      className="relative z-10 my-1 min-w-6 min-h-6 p-1 flex items-center justify-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                      aria-label={`Jump to stage ${m.step}: ${m.role}`}
                      aria-pressed={isSelected}
                    >
                      <span className={`text-xs font-mono font-bold transition-all px-1.5 py-0.5 rounded ${
                        isSelected
                          ? 'text-accent scale-125 bg-accent/20 border border-accent/40 shadow-[0_0_8px_#DCBC7D]'
                          : 'text-canvas/40 hover:text-canvas'
                      }`}>
                        {m.step}
                      </span>
                      {isSelected && (
                        <span className="absolute -left-2 w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* ── Center Horizontal Laser Rail with Concentric Nodes (11 cols) ── */}
            <div ref={railScrollRef} className="w-full min-w-0 md:col-span-11 relative overflow-x-auto no-scrollbar py-6 sm:py-8 touch-pan-x select-none">
              
              {/* Continuous Horizontal Laser Track Line */}
              <div className="relative min-w-[700px] px-4">
                {/* Glowing horizontal laser line across all milestones (mathematically centered through node center at 46px) */}
                <div className="absolute top-[45px] left-4 right-4 h-[2px] bg-gradient-to-r from-accent/20 via-accent to-accent/20 pointer-events-none" />
                <div className="absolute top-[44px] left-4 right-4 h-[4px] bg-accent/20 blur-[2px] pointer-events-none" />

                {/* Milestones along the horizontal line */}
                <div className="grid grid-cols-5 gap-4 relative z-10">
                  {railMilestones.map((item, idx) => {
                    const isSelected = idx === activeStageIdx

                    return (
                      <button
                        type="button"
                        ref={(el) => { nodeRefs.current[idx] = el }}
                        key={item.step}
                        onClick={() => setActiveStageIdx(idx)}
                        onKeyDown={handleKeyDown}
                        className="flex flex-col items-center text-center cursor-pointer group px-2 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xl transition-all"
                        aria-label={`Select stage ${item.step}: ${item.role}`}
                        aria-pressed={isSelected}
                      >
                        {/* Top Duration Label (fixed 20px h-5 + 8px mb-2 for exact alignment with laser rail) */}
                        <span className={`text-xs font-mono font-bold tracking-wider h-5 flex items-center justify-center mb-2 transition-colors ${
                          isSelected ? 'text-accent drop-shadow-[0_0_8px_#DCBC7D]' : 'text-canvas/60 group-hover:text-canvas'
                        }`}>
                          {item.durationLabel}
                        </span>

                        {/* Concentric Glowing Node Directly on the Horizontal Line */}
                        <div className="relative my-1 flex items-center justify-center">
                          <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                            isSelected
                              ? 'border-accent bg-ink shadow-[0_0_16px_#DCBC7D] scale-125'
                              : 'border-canvas/25 bg-ink group-hover:border-accent/60'
                          }`}>
                            <span className={`w-2.5 h-2.5 rounded-full transition-all ${
                              isSelected ? 'bg-accent animate-pulse' : 'bg-canvas/30 group-hover:bg-accent'
                            }`} />
                          </div>
                        </div>

                        {/* Period Subtitle Below Node */}
                        <span className={`text-[11px] font-mono font-bold uppercase tracking-wider mt-3 block ${
                          isSelected ? 'text-canvas' : 'text-canvas/50'
                        }`}>
                          {item.period}
                        </span>

                        {/* Narrative Description Snippet */}
                        <span className="text-[11px] sm:text-xs text-canvas/70 font-sans leading-relaxed mt-2 line-clamp-3 block">
                          {item.summary}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

            </div>

          </div>

          {/* Active Stage Detailed Inspection Box */}
          <div
            className="relative z-10 hidden lg:block mt-10 p-8 rounded-2xl bg-canvas/[0.04] border border-canvas/15 backdrop-blur-md"
            role="region"
            aria-label="Selected phase details"
            aria-live="polite"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-7 space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
                  Selected Phase Breakdown · {currentStage.period}
                </span>
                <h4 className="text-xl sm:text-2xl font-display text-canvas font-medium">
                  {currentStage.role}
                </h4>
                <p className="text-xs sm:text-sm font-mono text-accent/90">
                  {currentStage.company}
                </p>
                <p className="text-sm text-canvas/80 font-sans leading-relaxed pt-1">
                  {currentStage.summary}
                </p>
              </div>

              <div className="lg:col-span-5 space-y-3 lg:border-l lg:border-canvas/10 lg:pl-6">
                <span className="text-xs font-mono uppercase tracking-wider text-canvas/50 font-bold block">
                  Key Deliverables Shipped
                </span>
                <div className="space-y-1.5">
                  {currentStage.deliverables.map((d, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-mono text-canvas/90">
                      <span className="text-accent font-bold shrink-0">✓</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3">
                  {currentStage.tags.map((t) => (
                    <span key={t} className="text-[11px] font-mono text-canvas/60 bg-canvas/5 border border-canvas/10 px-2.5 py-0.5 rounded hover:border-accent/40 hover:text-accent transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Horizontal Arrow Controls */}
          <div className="relative z-10 hidden lg:flex mt-8 items-center justify-between flex-wrap gap-3">
            <span className="text-xs font-mono text-canvas/50">
              Showing phase {activeStageIdx + 1} of {railMilestones.length} (Tap arrows or click nodes to explore)
            </span>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prevStep}
                disabled={activeStageIdx === 0}
                aria-label="Previous Milestone"
                className="w-10 h-10 rounded-full border border-canvas/20 hover:border-accent bg-canvas/5 hover:bg-accent hover:text-ink flex items-center justify-center text-canvas disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-md group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button
                type="button"
                onClick={nextStep}
                disabled={activeStageIdx === railMilestones.length - 1}
                aria-label="Next Milestone"
                className="w-10 h-10 rounded-full border border-canvas/20 hover:border-accent bg-canvas/5 hover:bg-accent hover:text-ink flex items-center justify-center text-canvas disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-md group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
