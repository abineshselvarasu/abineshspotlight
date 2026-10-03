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
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    )

    const observeElements = () => {
      document.querySelectorAll('.reveal-text:not(.is-visible)').forEach((el) => {
        observer.observe(el)
      })
    }

    observeElements()

    // Watch for dynamic DOM updates only within the interactive projects container
    let debounceTimer: ReturnType<typeof setTimeout>
    const debouncedObserve = () => {
      clearTimeout(debounceTimer)
      debounceTimer = setTimeout(observeElements, 100)
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
    }
  }, [])

  return null
}
