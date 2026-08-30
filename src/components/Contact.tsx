import { profile } from '../data/resume'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-16">
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-8 py-14 text-center">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-accent)]">
          Contact
        </p>
        <h2 className="mt-3 font-serif text-2xl text-[var(--color-ink)] sm:text-3xl">
          Let's build something together
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[var(--color-ink-muted)]">
          Open to full-stack and AI engineering roles and collaborations. Reach out by email or
          connect on LinkedIn.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-90"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
