'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const UPPER_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ'
const LOWER_CHARS = 'abcdefghijkmnopqrstuvwxyz0123456789'

interface ScrambleTextProps {
  text: string
  speed?: number
  triggerOnView?: boolean
}

export default function ScrambleText({
  text,
  speed = 0.65,
  triggerOnView = true,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text)
  const hostRef = useRef<HTMLSpanElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const hasPlayedRef = useRef(false)

  const clearTimer = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  const runScramble = useCallback(() => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setDisplayText(text)
      return
    }

    clearTimer()
    let iteration = 0

    intervalRef.current = setInterval(() => {
      const next = text
        .split('')
        .map((char, index) => {
          if (index < Math.floor(iteration) || char === ' ' || char === '.' || char === '&') {
            return char
          }
          const pool = /[A-Z]/.test(char) ? UPPER_CHARS : LOWER_CHARS
          return pool[Math.floor(Math.random() * pool.length)]
        })
        .join('')

      setDisplayText(next)

      if (iteration >= text.length) {
        clearTimer()
        setDisplayText(text)
      }
      iteration += speed
    }, 28)
  }, [clearTimer, speed, text])

  useEffect(() => {
    setDisplayText(text)
    if (!triggerOnView || hasPlayedRef.current) return

    const el = hostRef.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasPlayedRef.current) {
          hasPlayedRef.current = true
          runScramble()
          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      clearTimer()
    }
  }, [clearTimer, runScramble, text, triggerOnView])

  useEffect(() => clearTimer, [clearTimer])

  return (
    <span
      ref={hostRef}
      onMouseEnter={runScramble}
      onClick={runScramble}
      aria-label={text}
      className="inline cursor-default"
    >
      {displayText}
    </span>
  )
}
