import { useEffect, useState } from 'react'

// Cycles through a list of strings on an interval. Freezes on the first
// item when the user prefers reduced motion.
export function useRotatingText(items, intervalMs = 2400) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (items.length <= 1) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length)
    }, intervalMs)

    return () => clearInterval(id)
  }, [items, intervalMs])

  return items[index]
}
