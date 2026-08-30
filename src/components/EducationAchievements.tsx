import { achievements, education } from '../data/resume'
import { SectionHeading } from './SectionHeading'

export function EducationAchievements() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <div className="grid gap-12 sm:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Education" title="Academic background" />
          <h3 className="font-serif text-lg text-[var(--color-ink)]">{education.degree}</h3>
          <p className="mt-1 text-sm text-[var(--color-accent)]">{education.school}</p>
          <p className="mt-1 text-sm text-[var(--color-ink-muted)]">{education.period}</p>
        </div>
        <div>
          <SectionHeading eyebrow="Achievements" title="Recognition" />
          <ul className="space-y-3">
            {achievements.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
