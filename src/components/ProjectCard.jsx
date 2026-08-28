import { ExternalLink, FileText, Github, Layers } from 'lucide-react'

export default function ProjectCard({ project, onOpenCaseStudy, featured = false }) {
  const { title, tagline, description, image, imageFit, technologies, liveUrl, githubUrl, caseStudy } = project

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-xl hover:shadow-black/10 ${
        featured ? 'lg:flex-row' : ''
      }`}
    >
      <div
        className={`relative overflow-hidden ${featured ? 'aspect-[16/10] lg:aspect-auto lg:w-2/5' : 'aspect-[16/10]'} ${
          imageFit === 'contain' ? 'bg-white' : ''
        }`}
      >
        {image ? (
          <img
            src={image}
            alt={`${title} preview`}
            loading="lazy"
            className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${
              imageFit === 'contain' ? 'object-contain p-4' : 'object-cover'
            }`}
          />
        ) : (
          <div className="flex h-full min-h-48 w-full items-center justify-center bg-gradient-to-br from-primary/15 to-accent/15">
            <Layers size={36} className="text-primary" aria-hidden="true" />
          </div>
        )}
        {featured && (
          <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-bg">
            Featured Project
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-text">{title}</h3>
        {tagline && <p className="mt-1 text-sm font-medium text-primary">{tagline}</p>}
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-medium text-text"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-4 pt-6 text-sm font-semibold">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-text transition-colors hover:text-primary"
            >
              Live Demo <ExternalLink size={14} aria-hidden="true" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-text transition-colors hover:text-primary"
            >
              GitHub <Github size={14} aria-hidden="true" />
            </a>
          )}
          {caseStudy && (
            <button
              type="button"
              onClick={() => onOpenCaseStudy(project)}
              className="inline-flex items-center gap-1.5 text-primary hover:underline"
            >
              View Case Study <FileText size={14} aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    </article>
  )
}
