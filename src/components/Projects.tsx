import { projects } from '../data/resume'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading eyebrow="Projects" title="Selected work" />
      <div className="grid gap-6 sm:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex flex-col rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors hover:border-[var(--color-accent)]"
          >
            <h3 className="font-serif text-base text-[var(--color-ink)]">{project.name}</h3>
            <p className="mt-2 text-xs font-medium text-[var(--color-clay)]">{project.stack}</p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
