import { skillGroups } from '../data/resume'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading eyebrow="Skills" title="Technical toolkit" />
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-semibold text-[var(--color-ink)]">{group.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs text-[var(--color-ink-muted)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
