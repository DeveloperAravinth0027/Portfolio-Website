export default function ProjectFilter({ categories, active, onChange }) {
  return (
    <div className="mb-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter projects by category">
      {categories.map((category) => {
        const isActive = category === active
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            aria-pressed={isActive}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? 'border-primary bg-primary text-bg'
                : 'border-border bg-card text-muted hover:text-text'
            }`}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}
