import { experience } from '../data/resume'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />
      <div className="space-y-10">
        {experience.map((job) => (
          <div
            key={job.company}
            className="grid gap-2 border-l-2 border-[var(--color-border)] pl-6 sm:grid-cols-[1fr_2fr] sm:gap-6"
          >
            <div>
              <p className="text-sm text-[var(--color-ink-muted)]">{job.period}</p>
              <p className="mt-1 text-sm text-[var(--color-ink-muted)]">{job.location}</p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-[var(--color-ink)]">{job.role}</h3>
              <p className="text-sm font-medium text-[var(--color-accent)]">{job.company}</p>
              <ul className="mt-3 space-y-2">
                {job.points.map((point, i) => (
                  <li key={i} className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
