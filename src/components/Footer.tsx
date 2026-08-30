export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-8">
      <p className="mx-auto max-w-4xl text-center text-xs text-[var(--color-ink-muted)]">
        © {new Date().getFullYear()} Divyanshu Pandey. Built with React, TypeScript &amp; Tailwind CSS.
      </p>
    </footer>
  )
}
