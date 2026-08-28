import { useEffect, useRef } from 'react'

// Adds the `is-visible` class (see .fade-up in index.css) once an element
// scrolls into view, giving a single subtle fade-up entrance animation.
export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          observer.unobserve(node)
        }
      },
      { threshold: 0.15, ...options },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return ref
}
