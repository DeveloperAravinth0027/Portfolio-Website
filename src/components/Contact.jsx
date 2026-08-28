import { useState } from 'react'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import Container from './Container'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Submission logic lives here, separate from the form markup below, so it's
// easy to swap for a different backend later. Override via VITE_FORM_ENDPOINT
// in a .env file — see .env.example. Falls back to the Formspree endpoint
// already wired up on the live site.
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || 'https://formspree.io/f/mqaddbge'

async function submitContactForm(formData) {
  const response = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    body: formData,
    headers: { Accept: 'application/json' },
  })
  if (!response.ok) throw new Error('Submission failed')
}

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      await submitContactForm(new FormData(form))
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Contact" title="Let's Build Something Great" />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal className="space-y-6">
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              I'm open to full stack, React and backend opportunities, as well as freelance projects. The
              fastest way to reach me is email — I'll get back to you promptly.
            </p>

            <div className="space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm font-medium text-text transition-colors hover:text-primary"
              >
                <Mail size={18} className="text-primary" aria-hidden="true" />
                {siteConfig.email}
              </a>
              <div className="flex items-center gap-3 text-sm font-medium text-muted">
                <MapPin size={18} className="text-primary" aria-hidden="true" />
                {siteConfig.location}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-text transition-colors hover:border-primary hover:text-primary"
              >
                <Github size={19} aria-hidden="true" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-text transition-colors hover:border-primary hover:text-primary"
              >
                <Linkedin size={19} aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-text outline-none focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-text outline-none focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-text outline-none focus:border-primary"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-bg transition-opacity disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>

              <p role="status" aria-live="polite" className="min-h-5 text-sm">
                {status === 'success' && <span className="text-emerald-500">Thanks — your message has been sent.</span>}
                {status === 'error' && <span className="text-red-400">Something went wrong. Please email me directly instead.</span>}
              </p>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
