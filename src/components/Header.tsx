import { useEffect, useState } from 'react'
import { useTheme } from '../hooks/useTheme'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? 'border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-serif text-lg text-[var(--color-ink)]">
          Divyanshu Pandey
        </a>

        <nav className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-ink-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </nav>

        <div className="flex items-center gap-3 sm:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-ink-muted)]"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            className="rounded-md border border-[var(--color-border)] px-3 py-1.5 text-sm text-[var(--color-ink)]"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-[var(--color-border)] px-6 py-3 sm:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded px-2 py-2 text-sm text-[var(--color-ink-muted)] hover:bg-[var(--color-surface)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
