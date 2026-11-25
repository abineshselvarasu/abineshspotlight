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
  const [isDragging, setIsDragging] = useState(false)

  const dragState = useRef({
    active: false,
    startX: 0,
    startScrollLeft: 0,
    moved: false,
  })
  const suppressClickRef = useRef(false)

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

  const getStepSize = useCallback(() => {
    const track = trackRef.current
    if (!track || !track.children.length) return 0
    const first = track.children[0] as HTMLElement
    const second = track.children[1] as HTMLElement | undefined
    return second ? second.offsetLeft - first.offsetLeft : first.offsetWidth
  }, [])

  const scrollToIndex = useCallback((nextIdx: number) => {
    const track = trackRef.current
    if (!track) return
    const clamped = Math.min(maxIndex, Math.max(0, nextIdx))
    const target = track.children[clamped] as HTMLElement | undefined
    if (!target) return
    track.scrollTo({
      left: target.offsetLeft,
      behavior: 'smooth',
    })
    setCurrentIndex(clamped)
  }, [maxIndex])

  const goPrevious = useCallback(() => {
    const nextIdx = currentIndex <= 0 ? maxIndex : currentIndex - 1
    scrollToIndex(nextIdx)
  }, [currentIndex, maxIndex, scrollToIndex])

  const goNext = useCallback(() => {
    const nextIdx = currentIndex >= maxIndex ? 0 : currentIndex + 1
    scrollToIndex(nextIdx)
  }, [currentIndex, maxIndex, scrollToIndex])

  // Sync active dot index during wheel, touch, or momentum scrolling
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const step = getStepSize()
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
  }, [getStepSize, maxIndex])

  // Mouse cursor drag-to-slide handlers (touch continues using native scroll-snap)
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0) return
    const track = trackRef.current
    if (!track) return
    dragState.current = {
      active: true,
      startX: e.clientX,
      startScrollLeft: track.scrollLeft,
      moved: false,
    }
    suppressClickRef.current = false
    setIsDragging(true)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragState.current.active) return
    const track = trackRef.current
    if (!track) return
    const dx = e.clientX - dragState.current.startX
    if (Math.abs(dx) > 6) {
      dragState.current.moved = true
      suppressClickRef.current = true
    }
    track.scrollLeft = dragState.current.startScrollLeft - dx
  }

  const finishMouseDrag = () => {
    if (!dragState.current.active) return
    const track = trackRef.current
    const wasMoved = dragState.current.moved
    dragState.current.active = false
    setIsDragging(false)

    if (track && wasMoved) {
      const step = getStepSize()
      const scrollDelta = track.scrollLeft - dragState.current.startScrollLeft
      if (step > 0) {
        let targetIdx = Math.round(track.scrollLeft / step)
        if (Math.abs(scrollDelta) <= step * 0.5) {
          if (scrollDelta > 45) targetIdx = currentIndex + 1
          else if (scrollDelta < -45) targetIdx = currentIndex - 1
          else targetIdx = currentIndex
        }
        scrollToIndex(targetIdx)
      }
      // Reset click guard right after any synthetic click caused by mouseup
      requestAnimationFrame(() => {
        suppressClickRef.current = false
      })
    } else {
      suppressClickRef.current = false
    }
  }

  const handleClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (suppressClickRef.current) {
      e.preventDefault()
      e.stopPropagation()
      suppressClickRef.current = false
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      goPrevious()
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      goNext()
    }
  }

  const totalSteps = maxIndex + 1

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className="relative group/carousel"
    >
      {/* Track Container with Hover Edge Arrows */}
      <div className="relative">
        <div
          ref={trackRef}
          tabIndex={0}
          aria-label="Slides"
          onKeyDown={handleKeyDown}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={finishMouseDrag}
          onMouseLeave={finishMouseDrag}
          onClickCapture={handleClickCapture}
          onDragStart={(e) => e.preventDefault()}
          className={`flex gap-5 overflow-x-auto no-scrollbar pb-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xl ${
            isDragging
              ? 'cursor-grabbing select-none snap-none'
              : 'cursor-grab scroll-smooth snap-x snap-mandatory'
          }`}
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

        {/* Side Cursor/Keyboard Arrow Controls (appear subtly on hover/focus) */}
        {totalSteps > 1 && (
          <div className="pointer-events-none absolute inset-y-0 inset-x-2 hidden md:flex items-center justify-between opacity-0 group-hover/carousel:opacity-100 group-focus-within/carousel:opacity-100 transition-opacity duration-200">
            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous slide"
              className="pointer-events-auto w-10 h-10 rounded-full bg-ink/90 text-accent border border-accent/30 shadow-lg flex items-center justify-center hover:bg-ink hover:text-canvas transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next slide"
              className="pointer-events-auto w-10 h-10 rounded-full bg-ink/90 text-accent border border-accent/30 shadow-lg flex items-center justify-center hover:bg-ink hover:text-canvas transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Dot Indicators */}
      {totalSteps > 1 && (
        <div className="mt-6 flex items-center justify-center gap-1">
          {Array.from({ length: totalSteps }).map((_, idx) => {
            const isActive = currentIndex === idx
            return (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToIndex(idx)}
                aria-label={`Go to slide ${idx + 1} of ${totalSteps}`}
                aria-current={isActive ? 'true' : undefined}
                className="group/dot p-2 cursor-pointer"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-8 h-2 bg-forest'
                      : 'w-2 h-2 bg-mist/35 group-hover/dot:bg-forest/70'
                  }`}
                />
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
