import { Bot, Cloud, CreditCard, Database, LayoutTemplate, Server, Wrench } from 'lucide-react'
import { skillCategories } from '../data/skills'
import Container from './Container'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const categoryIconMap = {
  LayoutTemplate,
  Server,
  Database,
  Wrench,
  CreditCard,
  Cloud,
  Bot,
}

function TintedMark({ icon, color, size }) {
  // The source SVG is a black silhouette with no brand color baked in —
  // CSS-mask it with the real brand hex so it reads as a colorful logo
  // (matching the other, naturally colorful badges) instead of flat black.
  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 ${size}`}
      style={{
        backgroundColor: color,
        WebkitMaskImage: `url(${icon})`,
        maskImage: `url(${icon})`,
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
      }}
    />
  )
}

function SkillIcon({ skill }) {
  if (!skill.icon) {
    return <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
  }

  const mark = skill.color ? (
    <TintedMark icon={skill.icon} color={skill.color} size="h-4 w-4" />
  ) : (
    <img src={skill.icon} alt="" aria-hidden="true" className="h-4 w-4 object-contain" loading="lazy" />
  )

  if (skill.iconBg) {
    // Some brand marks are solid black, solid white, or (Razorpay's navy)
    // close enough to the card's own dark tone to wash out — a small
    // backdrop chip keeps them visible against the card in both themes.
    return (
      <span
        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
          skill.iconBg === 'light' ? 'bg-white' : 'bg-black'
        }`}
      >
        {skill.color ? (
          <TintedMark icon={skill.icon} color={skill.color} size="h-3 w-3" />
        ) : (
          <img src={skill.icon} alt="" aria-hidden="true" className="h-3 w-3 object-contain" loading="lazy" />
        )}
      </span>
    )
  }

  return mark
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="Organized by where they sit in the stack — not a wall of logos."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => {
            const CategoryIcon = categoryIconMap[category.lucideIcon]
            return (
              <Reveal
                key={category.key}
                delay={i * 80}
                className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-110">
                    <CategoryIcon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-text">{category.title}</h3>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium text-text"
                    >
                      <SkillIcon skill={skill} />
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
