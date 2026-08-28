import { Boxes, Cloud, Database, Gauge, Layers, Wifi } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import Container from './Container'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const highlights = [
  { icon: Layers, label: 'Full Stack Development' },
  { icon: Boxes, label: 'Responsive UI' },
  { icon: Wifi, label: 'REST API Integration' },
  { icon: Database, label: 'Database Development' },
  { icon: Gauge, label: 'Performance Optimization' },
  { icon: Cloud, label: 'Deployment & DevOps' },
]

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="About" title="Building the full picture, not just the interface" />

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="flex justify-center lg:justify-start">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-xl"
              />
              <img
                src="/images/profile.jpg"
                alt={`Portrait of ${siteConfig.name}`}
                width={320}
                height={320}
                loading="lazy"
                className="h-72 w-72 rounded-3xl border border-border object-cover sm:h-80 sm:w-80"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-base leading-relaxed text-muted sm:text-lg">{siteConfig.aboutDescription}</p>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map(({ icon: Icon, label }, i) => (
                <Reveal
                  key={label}
                  delay={i * 60}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5"
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-text">{label}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
