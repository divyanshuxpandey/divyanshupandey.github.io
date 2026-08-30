export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-accent)]">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-[var(--color-ink)]">{title}</h2>
      <div className="mt-4 h-px w-12 bg-[var(--color-accent)]" />
    </div>
  )
}
