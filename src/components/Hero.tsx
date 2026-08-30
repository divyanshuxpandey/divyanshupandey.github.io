import { profile } from '../data/resume'

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <p className="text-sm font-medium tracking-[0.2em] uppercase text-[var(--color-accent)]">
        {profile.title}
      </p>
      <h1 className="mt-4 font-serif text-4xl leading-tight text-[var(--color-ink)] sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-ink-muted)] sm:text-lg">
        {profile.summary}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="#contact"
          className="rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-90"
        >
          Get in touch
        </a>
        <a
          href="./resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          Download résumé
        </a>
      </div>

      <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--color-ink-muted)]">
        <span>{profile.location}</span>
        <a href={`mailto:${profile.email}`} className="hover:text-[var(--color-accent)]">
          {profile.email}
        </a>
        <span>{profile.phone}</span>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)]">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)]">
          LinkedIn
        </a>
      </div>
    </section>
  )
}
