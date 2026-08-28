import { useReveal } from '../hooks/useReveal'

// Wraps content in a subtle fade-up-on-scroll animation. Pass `delay` (ms)
// to stagger a list of items (e.g. project cards).
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children }) {
  const ref = useReveal()

  return (
    <Tag
      ref={ref}
      className={`fade-up ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
