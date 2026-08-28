import { useMemo, useState } from 'react'
import { projects } from '../data/projects'
import Container from './Container'
import ProjectCard from './ProjectCard'
import ProjectFilter from './ProjectFilter'
import ProjectModal from './ProjectModal'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const CATEGORY_ORDER = ['Full Stack', 'React', 'Java', 'PHP', 'Backend', 'Frontend']

function buildCategoryList(items) {
  const present = new Set(items.flatMap((p) => p.category))
  const ordered = CATEGORY_ORDER.filter((c) => present.has(c))
  const extras = [...present].filter((c) => !CATEGORY_ORDER.includes(c))
  return ['All', ...ordered, ...extras]
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [activeCaseStudy, setActiveCaseStudy] = useState(null)

  const categories = useMemo(() => buildCategoryList(projects), [])
  const featured = projects.find((p) => p.featured)
  const showFilter = categories.length > 2 // skip filtering if there's basically nothing to filter

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((p) => p.category.includes(activeFilter))
  }, [activeFilter])

  return (
    <section id="projects" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="Real projects, from a production full-stack platform to focused frontend builds."
        />

        {featured && (
          <Reveal className="mb-12">
            <ProjectCard project={featured} featured onOpenCaseStudy={setActiveCaseStudy} />
          </Reveal>
        )}

        {showFilter && (
          <ProjectFilter categories={categories} active={activeFilter} onChange={setActiveFilter} />
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered
            .filter((p) => p.id !== featured?.id)
            .map((project, i) => (
              <Reveal key={project.id} delay={i * 80}>
                <ProjectCard project={project} onOpenCaseStudy={setActiveCaseStudy} />
              </Reveal>
            ))}
        </div>
      </Container>

      {activeCaseStudy && (
        <ProjectModal project={activeCaseStudy} onClose={() => setActiveCaseStudy(null)} />
      )}
    </section>
  )
}
