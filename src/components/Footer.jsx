import { Github, Linkedin, Mail } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import Container from './Container'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center gap-6 text-center">
        <div>
          <p className="font-display text-lg font-bold text-text">{siteConfig.name}</p>
          <p className="text-sm text-muted">{siteConfig.role}</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text transition-colors hover:border-primary hover:text-primary"
          >
            <Github size={17} aria-hidden="true" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text transition-colors hover:border-primary hover:text-primary"
          >
            <Linkedin size={17} aria-hidden="true" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Send an email"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text transition-colors hover:border-primary hover:text-primary"
          >
            <Mail size={17} aria-hidden="true" />
          </a>
        </div>

        <p className="text-xs text-muted">© {year} {siteConfig.name}. All rights reserved.</p>
      </Container>
    </footer>
  )
}
