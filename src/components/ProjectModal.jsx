import { useEffect, useRef } from 'react'
import { ExternalLink, Github, X } from 'lucide-react'

const CASE_STUDY_SECTIONS = [
  ['overview', 'Overview'],
  ['problem', 'Problem'],
  ['solution', 'Solution'],
  ['myRole', 'My Role'],
  ['architecture', 'Architecture'],
  ['challenges', 'Challenges'],
  ['outcome', 'Outcome'],
]

export default function ProjectModal({ project, onClose }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    closeButtonRef.current?.focus()
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null
  const { title, caseStudy, liveUrl, githubUrl } = project

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-surface p-6 sm:p-8"
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <h2 id="case-study-title" className="font-display text-2xl font-bold text-text">
            {title} — Case Study
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-text hover:border-primary hover:text-primary"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="space-y-6">
          {CASE_STUDY_SECTIONS.filter(([key]) => caseStudy[key]).map(([key, label]) => (
            <div key={key}>
              <h3 className="mb-1.5 text-sm font-semibold uppercase tracking-wide text-primary">{label}</h3>
              <p className="text-sm leading-relaxed text-muted">{caseStudy[key]}</p>
            </div>
          ))}

          {caseStudy.keyFeatures?.length > 0 && (
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">Key Features</h3>
              <ul className="list-disc space-y-1.5 ps-5 text-sm leading-relaxed text-muted">
                {caseStudy.keyFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {caseStudy.technology?.length > 0 && (
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">Technology</h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technology.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-text"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {(liveUrl || githubUrl) && (
          <div className="mt-8 flex flex-wrap gap-4 border-t border-border pt-6 text-sm font-semibold">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary hover:underline"
              >
                Live Demo <ExternalLink size={14} aria-hidden="true" />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary hover:underline"
              >
                GitHub <Github size={14} aria-hidden="true" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
