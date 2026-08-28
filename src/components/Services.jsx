import { Code2, Gauge, Layers, Rocket, Smartphone, Wrench } from 'lucide-react'
import { services } from '../data/services'
import Container from './Container'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const iconMap = { Layers, Code2, Smartphone, Rocket, Gauge, Wrench }

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Services" title="How I can help" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.lucideIcon]
            return (
              <Reveal
                key={service.title}
                delay={i * 60}
                className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-text">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
