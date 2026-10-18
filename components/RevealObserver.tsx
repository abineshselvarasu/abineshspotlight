'use client'

import { useEffect } from 'react'

export default function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.01, rootMargin: '0px 0px 0px 0px' }
    )

    const observeElements = () => {
      document.querySelectorAll('.reveal-text:not(.is-visible)').forEach((el) => {
        observer.observe(el)
      })
    }

    observeElements()

    // Safety fallback: If user reaches near the bottom of the page, reveal any elements in the viewport
    const checkEndOfPage = () => {
      const scrollPosition = window.innerHeight + window.scrollY
      const pageBottom = document.documentElement.scrollHeight
      if (scrollPosition >= pageBottom - 70) {
        document.querySelectorAll('.reveal-text:not(.is-visible)').forEach((el) => {
          const rect = el.getBoundingClientRect()
          if (rect.top <= window.innerHeight) {
            el.classList.add('is-visible')
            observer.unobserve(el)
          }
        })
      }
    }

    window.addEventListener('scroll', checkEndOfPage, { passive: true })
    window.addEventListener('resize', checkEndOfPage, { passive: true })

    // Check immediately in case page is loaded near or at bottom
    checkEndOfPage()

    // Watch for dynamic DOM updates only within the interactive projects container
    let debounceTimer: ReturnType<typeof setTimeout>
    const debouncedObserve = () => {
      clearTimeout(debounceTimer)
      debounceTimer = setTimeout(() => {
        observeElements()
        checkEndOfPage()
      }, 100)
    }

    const projectsContainer = document.getElementById('projects')
    const mutationObserver = new MutationObserver(debouncedObserve)

    if (projectsContainer) {
      mutationObserver.observe(projectsContainer, {
        childList: true,
        subtree: true,
      })
    }

    return () => {
      clearTimeout(debounceTimer)
      observer.disconnect()
      mutationObserver.disconnect()
      window.removeEventListener('scroll', checkEndOfPage)
      window.removeEventListener('resize', checkEndOfPage)
    }
  }, [])

  return null
}
