import { Briefcase, ExternalLink } from 'lucide-react'
import { experience } from '../data/experience'
import Container from './Container'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Experience" title="Where I've applied this" />

        {experience.length > 0 ? (
          <ol className="relative mx-auto max-w-3xl border-s border-border ps-8">
            {experience.map((item, i) => (
              <Reveal as="li" key={`${item.company}-${item.role}`} delay={i * 100} className="mb-10 last:mb-0">
                <span className="absolute -start-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-bg bg-primary" />
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-text">
                      {item.role} · {item.company}
                    </h3>
                    {item.duration && <span className="text-sm font-medium text-muted">{item.duration}</span>}
                  </div>
                  {item.summary && <p className="mt-2 text-sm text-muted">{item.summary}</p>}
                  {item.responsibilities?.length > 0 && (
                    <ul className="mt-4 list-disc space-y-1.5 ps-5 text-sm text-muted">
                      {item.responsibilities.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                  {item.technologies?.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  {item.links?.length > 0 && (
                    <div className="mt-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">Live sites</p>
                      <div className="flex flex-wrap gap-2">
                        {item.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-medium text-text transition-colors hover:border-primary hover:text-primary"
                          >
                            {link.name} <ExternalLink size={11} aria-hidden="true" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>
        ) : (
          <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-4 rounded-2xl border border-dashed border-border bg-card px-8 py-12 text-center">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft text-primary">
              <Briefcase size={22} aria-hidden="true" />
            </span>
            <h3 className="font-display text-lg font-semibold text-text">Building my track record, one project at a time</h3>
            <p className="text-sm leading-relaxed text-muted">
              I'm currently focused on shipping real, production-grade projects like Kids Colours rather than
              padding a resume. Full role history will land here as it happens — take a look at the projects
              below in the meantime.
            </p>
            <a
              href="#projects"
              className="mt-1 text-sm font-semibold text-primary hover:underline"
            >
              View my projects →
            </a>
          </Reveal>
        )}
      </Container>
    </section>
  )
}
