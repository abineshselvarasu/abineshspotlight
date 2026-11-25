'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'

interface CarouselProps {
  children: React.ReactNode
  label?: string
}

export default function Carousel({ children, label = 'Carousel' }: CarouselProps) {
  const slides = React.Children.toArray(children)
  const totalSlides = slides.length
  const trackRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [maxIndex, setMaxIndex] = useState(Math.max(0, totalSlides - 1))

  const measureVisible = useCallback(() => {
    const track = trackRef.current
    if (!track || !track.children.length) return
    const first = track.children[0] as HTMLElement
    const cardWidth = first.offsetWidth
    if (!cardWidth) return
    const visible = Math.max(1, Math.round(track.clientWidth / cardWidth))
    const max = Math.max(0, totalSlides - visible)
    setMaxIndex(max)
    setCurrentIndex((prev) => Math.min(prev, max))
  }, [totalSlides])

  useEffect(() => {
    measureVisible()
    window.addEventListener('resize', measureVisible)
    return () => window.removeEventListener('resize', measureVisible)
  }, [measureVisible])

  const scrollToIndex = useCallback((nextIdx: number) => {
    const track = trackRef.current
    if (!track) return
    const target = track.children[nextIdx] as HTMLElement | undefined
    if (!target) return
    track.scrollTo({
      left: target.offsetLeft,
      behavior: 'smooth',
    })
    setCurrentIndex(nextIdx)
  }, [])

  const goPrevious = () => {
    const nextIdx = currentIndex <= 0 ? maxIndex : currentIndex - 1
    scrollToIndex(nextIdx)
  }

  const goNext = () => {
    const nextIdx = currentIndex >= maxIndex ? 0 : currentIndex + 1
    scrollToIndex(nextIdx)
  }

  // Sync active counter when user drags/swipes or uses trackpad scroll
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const first = track.children[0] as HTMLElement | undefined
        const second = track.children[1] as HTMLElement | undefined
        if (!first) return
        const step = second ? second.offsetLeft - first.offsetLeft : first.offsetWidth
        if (step <= 0) return
        const idx = Math.min(maxIndex, Math.max(0, Math.round(track.scrollLeft / step)))
        setCurrentIndex(idx)
      })
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      track.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [maxIndex])

  const totalSteps = maxIndex + 1

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label}>
      {/* Native Scroll-Snap Track (strictly manual, zero autoplay) */}
      <div
        ref={trackRef}
        tabIndex={0}
        aria-label="Slides"
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xl"
        style={{ overscrollBehaviorX: 'contain' }}
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            role="group"
            aria-roledescription="slide"
            aria-label={`${idx + 1} of ${totalSlides}`}
            className="snap-start shrink-0 w-full md:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Elastic Path-style Centered Manual Pill Controls: <  1 / N  > */}
      {totalSteps > 1 && (
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-ink text-canvas px-2.5 py-1.5 border border-ink/15 shadow-sm">
            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous slide"
              className="w-8 h-8 rounded-full flex items-center justify-center text-accent hover:bg-canvas/10 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <span
              role="status"
              aria-live="polite"
              className="text-sm font-medium tabular-nums min-w-[3.25rem] text-center text-canvas"
            >
              {currentIndex + 1} / {totalSteps}
            </span>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next slide"
              className="w-8 h-8 rounded-full flex items-center justify-center text-accent hover:bg-canvas/10 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
