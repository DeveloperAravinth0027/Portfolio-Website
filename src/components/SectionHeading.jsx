import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <Reveal className={`flex flex-col ${alignment} gap-4 mb-12 md:mb-16`}>
      {eyebrow && (
        <span className="text-sm font-semibold tracking-widest uppercase text-primary">{eyebrow}</span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text text-balance">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-muted text-base sm:text-lg leading-relaxed text-balance">
          {description}
        </p>
      )}
      <span className="h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent" />
    </Reveal>
  )
}
