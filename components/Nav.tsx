'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Skills',   url: '#skills' },
  { label: 'Projects', url: '#projects' },
  { label: 'About',    url: '#about' },
  { label: 'Articles', url: '#blog' },
  { label: 'Contact',  url: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const y = window.scrollY
      setScrolled(y > 24)
      if (progressRef.current) {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const ratio = docHeight > 0 ? Math.min(1, Math.max(0, y / docHeight)) : 0
        progressRef.current.style.transform = `scaleX(${ratio})`
      }
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
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
        id="main-header"
        className={`fixed w-full top-0 z-50${scrolled ? ' is-scrolled' : ''}`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 lg:h-20 flex items-center justify-between gap-6">
          <a href="#hero" aria-label="Abinesh Selvarasu — Home" className="flex items-center shrink-0 z-50">
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
              <a
                key={link.label}
                href={link.url}
                className="text-sm font-medium text-canvas/85 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 z-50">
            <Link
              href="/resume"
              prefetch={true}
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-ink bg-accent hover:bg-canvas transition-colors rounded-full"
            >
              Resume
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
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
            <a
              key={link.label}
              href={link.url}
              onClick={close}
              className="font-display text-3xl text-canvas hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex justify-center">
          <Link
            href="/resume"
            prefetch={true}
            onClick={close}
            className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-ink bg-accent hover:bg-canvas transition-colors rounded-full"
          >
            View Resume
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  )
}
