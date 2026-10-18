'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

// Pointer-driven effects write CSS variables directly (rAF-throttled) instead of React state,
// so mouse movement never re-renders the tree.
//   --mx/--my: cursor position (flashlight)   --px/--py: parallax offset   --bx/--by: magnetic button pull
export default function NotFoundView() {
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const button = buttonRef.current
    if (!container || !button) return

    let frame = 0
    const handleMouseMove = (e: MouseEvent) => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const rect = container.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        container.style.setProperty('--mx', `${x}px`)
        container.style.setProperty('--my', `${y}px`)
        container.style.setProperty('--px', `${(x - window.innerWidth / 2) * -0.03}px`)
        container.style.setProperty('--py', `${(y - window.innerHeight / 2) * -0.03}px`)

        // Magnetic button: pull toward the cursor within 120px
        const btn = button.getBoundingClientRect()
        const dx = e.clientX - (btn.left + btn.width / 2)
        const dy = e.clientY - (btn.top + btn.height / 2)
        const near = Math.hypot(dx, dy) < 120
        button.style.setProperty('--bx', `${near ? dx * 0.2 : 0}px`)
        button.style.setProperty('--by', `${near ? dy * 0.2 : 0}px`)
        button.style.transition = near ? 'none' : 'transform 0.3s ease-out'
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  const parallax = (factor: number) => `translate(calc(var(--px) * ${factor}), calc(var(--py) * ${factor}))`

  return (
    <div
      ref={containerRef}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-ink text-canvas font-sans selection:bg-accent selection:text-ink"
      style={{ '--mx': '50%', '--my': '50%', '--px': '0px', '--py': '0px' } as React.CSSProperties}
    >
      {/* Dynamic Flashlight Gradient */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: 'radial-gradient(circle 400px at var(--mx) var(--my), rgba(220, 188, 125, 0.08) 0%, rgba(15, 55, 40, 1) 80%)', // ink color #0F3728
        }}
      />

      {/* Floating Elements Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" aria-hidden="true">
        <div
          className="absolute text-[20vw] font-display font-normal text-forest opacity-30 select-none"
          style={{ top: '5%', left: '-5%', transform: parallax(1.5) }}
        >
          404
        </div>
        <div
          className="absolute text-[15vw] font-display font-normal text-forest opacity-20 select-none"
          style={{ bottom: '10%', right: '-5%', transform: parallax(-1) }}
        >
          LOST
        </div>
      </div>

      <div
        className="z-20 relative flex flex-col items-center text-center space-y-6 max-w-2xl px-6"
        style={{ transform: parallax(1), transition: 'transform 0.1s ease-out' }}
      >
        <div className="relative group cursor-default">
          <h1 className="font-display text-[120px] md:text-[180px] leading-none font-normal tracking-tighter text-accent mix-blend-screen relative z-10 select-none">
            404
          </h1>
          {/* Glitch text shadow effect */}
          <span aria-hidden="true" className="font-display text-[120px] md:text-[180px] leading-none font-normal tracking-tighter text-blush absolute top-0 left-0 -ml-[4px] opacity-70 mix-blend-screen z-0 animate-pulse select-none">
            404
          </span>
          <span aria-hidden="true" className="font-display text-[120px] md:text-[180px] leading-none font-normal tracking-tighter text-mist absolute top-0 left-0 ml-[4px] mt-[2px] opacity-70 mix-blend-screen z-0 animate-pulse select-none" style={{ animationDelay: '0.2s' }}>
            404
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-normal text-paper font-display mb-2">
          Page not found
        </h2>

        <p className="text-mist max-w-md mx-auto text-lg md:text-xl font-medium">
          You&apos;ve ventured into the unknown. The page you&apos;re looking for has drifted away.
        </p>

        <div className="pt-10 pb-4 relative z-30 flex justify-center">
          <Link
            ref={buttonRef}
            href="/"
            style={{ transform: 'translate(var(--bx, 0px), var(--by, 0px))' }}
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border-2 border-accent bg-ink px-8 py-4 text-accent font-bold transition-colors hover:border-transparent hover:text-ink hover:shadow-[0_0_30px_rgba(220,188,125,0.4)]"
          >
            <span className="relative z-10 tracking-wide transition-colors group-hover:text-ink">Return Home</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
            <div className="absolute inset-0 z-0 bg-accent translate-y-full transition-transform duration-300 group-hover:translate-y-0 ease-out" />
          </Link>
        </div>
      </div>

      {/* Interactive Background Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(220, 188, 125, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 188, 125, 1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center',
          transform: parallax(0.5),
          transition: 'transform 0.1s ease-out'
        }}
      />
    </div>
  )
}
