'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

const query = encodeURIComponent(
  'Who is Abinesh Selvarasu? Summarize his background as a Senior WordPress Developer and Full Stack Engineer, key enterprise projects (like Unbounce, Open Government Partnership, ElasticPath), core skills, and why companies should hire him based on abineshspotlight.online'
)

const aiLinks = [
  {
    name: 'ChatGPT',
    href: `https://chat.openai.com/?q=${query}`,
    logo: '/images/ai/chatgpt.png',
  },
  {
    name: 'Perplexity',
    href: `https://www.perplexity.ai/search/new?q=${query}`,
    logo: '/images/ai/perplexity.png',
  },
  {
    name: 'Claude',
    href: `https://claude.ai/new?q=${query}`,
    logo: '/images/ai/claude.png',
  },
  {
    name: 'Gemini',
    href: `https://www.google.com/search?udm=50&aep=11&q=${query}`,
    logo: '/images/ai/gemini.png',
  },
  {
    name: 'Grok',
    href: `https://x.com/i/grok?text=${query}`,
    logo: '/images/ai/grok.png',
  },
]

export default function AskAI() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Desktop hover trigger
  const handleMouseEnter = () => {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      setOpen(true)
    }
  }

  const handleMouseLeave = () => {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
      timeoutRef.current = setTimeout(() => {
        setOpen(false)
      }, 250)
    }
  }

  // Mobile + Desktop click/touch outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        className="group flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-canvas hover:text-accent transition-colors cursor-pointer py-1"
      >
        Ask AI about me
        <svg
          className={`w-3.5 h-3.5 text-canvas/60 group-hover:text-accent transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Floating AI icons: w-10 h-10 (40px) */}
      {open && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center gap-3 bg-ink/95 backdrop-blur-md px-4 py-2.5 rounded-full border border-canvas/15 shadow-2xl sm:static sm:translate-x-0 sm:absolute sm:bottom-full sm:pb-3 sm:right-0 sm:left-auto sm:bg-transparent sm:backdrop-blur-none sm:p-0 sm:border-0 sm:shadow-none sm:rounded-none sm:gap-4 pointer-events-auto">
          {aiLinks.map((ai) => (
            <a
              key={ai.name}
              href={ai.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="group/ai relative block w-10 h-10 shrink-0 transition-transform duration-200 hover:scale-110 focus:outline-none"
              title={`Ask ${ai.name}`}
              aria-label={`Ask ${ai.name} about Abinesh`}
            >
              <Image
                src={ai.logo}
                alt={`${ai.name} logo`}
                width={40}
                height={40}
                className="w-full h-full object-contain rounded-2xl drop-shadow-lg"
              />
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
