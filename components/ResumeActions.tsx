'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ResumeActions() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="print:hidden sticky top-3 sm:top-4 z-40 mb-6 sm:mb-10">
      <div className="max-w-5xl mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between gap-2 p-2.5 sm:p-3.5 rounded-2xl bg-ink/95 backdrop-blur-md border border-canvas/15 shadow-xl">
          
          {/* Left: Back to Home */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-mono text-canvas/80 hover:text-canvas hover:bg-canvas/10 transition-colors shrink-0"
            aria-label="Back to Portfolio"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span className="hidden xs:inline sm:inline">Back to Portfolio</span>
            <span className="inline xs:hidden sm:hidden">Portfolio</span>
          </Link>

          {/* Right: Actions */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Share / Copy Link */}
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs sm:text-sm font-mono text-canvas/80 hover:text-canvas bg-canvas/5 hover:bg-canvas/10 border border-canvas/10 transition-all active:scale-95"
              title="Copy Resume Link"
              type="button"
            >
              {copied ? (
                <>
                  <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-accent font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  <span>Share</span>
                </>
              )}
            </button>

            {/* Download Official PDF */}
            <a
              href="/resume/Resume.pdf"
              download="Abinesh-Selvarasu-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-mono font-bold text-ink bg-accent hover:bg-canvas transition-colors shadow-md active:scale-95 shrink-0"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              <span>Download PDF</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}
