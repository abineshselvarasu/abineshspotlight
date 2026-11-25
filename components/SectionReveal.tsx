'use client'

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

interface SectionRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function SectionReveal({
  children,
  className = '',
  delay = 0,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // If user prefers reduced motion, reveal immediately without animation
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.05,
      }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal-group ${isVisible ? 'is-revealed' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

interface RevealItemProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode
  className?: string
  index?: number
  as?: ElementType
}

export function RevealItem({
  children,
  className = '',
  index = 0,
  as: Component = 'div',
  style,
  ...rest
}: RevealItemProps) {
  return (
    <Component
      style={{
        '--reveal-index': index,
        ...style,
      } as React.CSSProperties}
      className={`reveal-item ${className}`}
      {...rest}
    >
      {children}
    </Component>
  )
}
