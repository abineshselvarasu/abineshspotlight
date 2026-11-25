'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ForwardArrowIcon } from './icons'

const navLinks = [
  { label: 'Skills',   url: '#skills' },
  { label: 'Projects', url: '#projects' },
  { label: 'About',    url: '#about' },
  { label: 'Articles', url: '#blog' },
  { label: 'Contact',  url: '#contact' },
]

const sectionIds = ['hero', 'skills', 'projects', 'about', 'blog', 'contact'] as const

function NavItemLink({
  label,
  url,
  isActive,
  variant = 'desktop',
  onSelect,
}: {
  label: string
  url: string
  isActive: boolean
  variant?: 'desktop' | 'mobile'
  onSelect?: () => void
}) {
  const variantClasses =
    variant === 'mobile'
      ? `py-1 font-display text-3xl ${isActive ? 'text-accent' : 'text-canvas hover:text-accent'}`
      : `py-1.5 text-sm font-medium ${isActive ? 'text-accent' : 'text-canvas/85 hover:text-accent'}`

  return (
    <a
      href={url}
      onClick={onSelect}
      aria-current={isActive ? 'location' : undefined}
      className={`group relative transition-colors duration-200 ${variantClasses}`}
    >
      {label}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-accent origin-left transition-transform duration-300 ease-out motion-reduce:transition-none ${
          isActive
            ? 'scale-x-100'
            : 'scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100'
        }`}
      />
    </a>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const headerRef = useRef<HTMLElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0

    const resolveActiveSection = (scrollY: number) => {
      const docHeight = document.documentElement.scrollHeight
      const viewHeight = window.innerHeight

      // Footer (#contact) can be shorter than the viewport, so mark it active near bottom.
      if (docHeight > viewHeight && viewHeight + scrollY >= docHeight - 24) {
        return '#contact'
      }

      const headerHeight = headerRef.current?.offsetHeight ?? 80
      const probeY = Math.max(headerHeight + 48, Math.min(viewHeight * 0.28, 220))

      let current = ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= probeY) {
          current = id === 'hero' ? '' : `#${id}`
        }
      }
      return current
    }

    const update = () => {
      frame = 0
      const y = window.scrollY
      setScrolled(y > 24)

      if (progressRef.current) {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const ratio = docHeight > 0 ? Math.min(1, Math.max(0, y / docHeight)) : 0
        progressRef.current.style.transform = `scaleX(${ratio})`
      }

      const nextSection = resolveActiveSection(y)
      setActiveSection((prev) => (prev === nextSection ? prev : nextSection))
    }

    const onScheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScheduleUpdate, { passive: true })
    window.addEventListener('resize', onScheduleUpdate, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', onScheduleUpdate)
      window.removeEventListener('resize', onScheduleUpdate)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <header
        ref={headerRef}
        id="main-header"
        className={`fixed w-full top-0 z-50${scrolled ? ' is-scrolled' : ''}`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 lg:h-20 flex items-center justify-between gap-6">
          <a
            href="#hero"
            onClick={() => setActiveSection('')}
            aria-label="Abinesh Selvarasu — Home"
            className="flex items-center shrink-0 z-50"
          >
            <Image
              src="/logo.png"
              alt="Abinesh Selvarasu"
              width={150}
              height={44}
              priority
              className="h-9 lg:h-11 w-auto object-contain select-none"
            />
          </a>

          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavItemLink
                key={link.label}
                label={link.label}
                url={link.url}
                isActive={activeSection === link.url}
                onSelect={() => setActiveSection(link.url)}
              />
            ))}
          </nav>

          <div className="flex items-center gap-3 z-50">
            <Link
              href="/resume"
              prefetch={true}
              className="group hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-ink bg-accent hover:bg-canvas transition-colors rounded-full"
            >
              Resume
              <ForwardArrowIcon className="w-3.5 h-3.5" strokeWidth={2.5} />
            </Link>

            <button
              id="mobile-nav-toggle"
              type="button"
              className={`lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 relative${menuOpen ? ' is-open' : ''}`}
              aria-label="Toggle mobile menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span id="ham-line-1" className="block w-6 h-0.5 bg-canvas transition-transform duration-200 origin-center" />
              <span id="ham-line-2" className="block w-6 h-0.5 bg-canvas transition-opacity duration-200" />
              <span id="ham-line-3" className="block w-4 h-0.5 bg-canvas transition-transform duration-200 origin-center ml-auto" />
            </button>
          </div>
        </div>

        {/* Minimal Elastic Path-style scroll progress hairline */}
        <div className="h-[2px] w-full bg-white/5 overflow-hidden">
          <div
            ref={progressRef}
            className="h-full w-full bg-accent origin-left will-change-transform"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        id="mobile-nav"
        className={`fixed inset-0 z-40 flex flex-col justify-center px-6 pt-20 pb-10 bg-ink${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <nav className="flex flex-col items-center gap-6 mb-10">
          {navLinks.map((link) => (
            <NavItemLink
              key={link.label}
              label={link.label}
              url={link.url}
              variant="mobile"
              isActive={activeSection === link.url}
              onSelect={() => {
                setActiveSection(link.url)
                close()
              }}
            />
          ))}
        </nav>
        <div className="flex justify-center">
          <Link
            href="/resume"
            prefetch={true}
            onClick={close}
            className="group inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-ink bg-accent hover:bg-canvas transition-colors rounded-full"
          >
            View Resume
            <ForwardArrowIcon className="w-4 h-4" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </>
  )
}
