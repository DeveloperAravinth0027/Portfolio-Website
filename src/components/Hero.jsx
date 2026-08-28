import { ArrowRight, Download, Github, Linkedin } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import { useRotatingText } from '../hooks/useRotatingText'
import Container from './Container'
import CodePanel from './CodePanel'
import Reveal from './Reveal'

export default function Hero() {
  const role = useRotatingText(siteConfig.taglineRoles)

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16">
      {/* Subtle background gradient — no particles, no heavy animation */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 50% at 80% 10%, var(--color-primary-soft), transparent 70%), radial-gradient(50% 40% at 10% 90%, var(--color-primary-soft), transparent 70%)',
        }}
      />

      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <Reveal>
          <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted">
            Available for full stack & React opportunities
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-text sm:text-5xl md:text-6xl text-balance">
            Hi, I&apos;m {siteConfig.name}
          </h1>

          <p className="mt-3 h-9 font-display text-xl font-semibold text-primary sm:text-2xl" aria-live="polite">
            {role}
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {siteConfig.heroDescription}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
            >
              View My Work
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href={siteConfig.resumeUrl}
              download={siteConfig.resumeDownloadName}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-primary hover:text-primary"
            >
              Download Resume
              <Download size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              <Linkedin size={18} aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="flex justify-center lg:justify-end">
          <CodePanel />
        </Reveal>
      </Container>
    </section>
  )
}
