import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading eyebrow="About" title="Building where AI meets the interface" />
      <div className="grid gap-6 sm:grid-cols-3">
        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
          <p className="font-serif text-2xl text-[var(--color-accent)]">3+</p>
          <p className="mt-1 text-sm text-[var(--color-ink-muted)]">
            production roles shipping full-stack &amp; ML features
          </p>
        </div>
        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
          <p className="font-serif text-2xl text-[var(--color-accent)]">RAG</p>
          <p className="mt-1 text-sm text-[var(--color-ink-muted)]">
            LangChain, LlamaIndex &amp; vector search in production
          </p>
        </div>
        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
          <p className="font-serif text-2xl text-[var(--color-accent)]">B.Tech</p>
          <p className="mt-1 text-sm text-[var(--color-ink-muted)]">
            Robotics &amp; Artificial Intelligence
          </p>
        </div>
      </div>
    </section>
  )
}
