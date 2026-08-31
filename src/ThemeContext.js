import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

// Neutral tones — shared by every accent palette, swapped per light/dark mode.
export const LIGHT_BASE = {
  background: '#FBFAF7',
  surface: '#FFFFFF',
  surfaceAlt: '#F3F1EC',
  border: '#E9E6DE',
  textPrimary: '#33322F',
  textSecondary: '#726F67',
  textMuted: '#939086',
  tagBackground: '#F1EEE6',
  tagText: '#6B6858',
};

export const DARK_BASE = {
  background: '#1E1D1B',
  surface: '#26251F',
  surfaceAlt: '#2C2B24',
  border: '#3B3A32',
  textPrimary: '#F1EEE7',
  textSecondary: '#B7B3A8',
  textMuted: '#8C8880',
  tagBackground: '#312F27',
  tagText: '#C9C5B8',
};

// Restrained accent options — each still reads as "one quiet color", not a
// bright brand hue. accentSoft is the pale wash used behind the avatar/tags.
export const PALETTES = {
  sage: { label: 'Sage', accent: '#5B7A73', accentDeep: '#42615B', accentSoft: '#E9EFEC' },
  slate: { label: 'Slate', accent: '#5B6E8C', accentDeep: '#42536E', accentSoft: '#E7EAF1' },
  clay: { label: 'Clay', accent: '#A9765C', accentDeep: '#7D5643', accentSoft: '#F3E7DF' },
  plum: { label: 'Plum', accent: '#7B637F', accentDeep: '#5A4860', accentSoft: '#EFE7F0' },
};

const PALETTE_ORDER = ['sage', 'slate', 'clay', 'plum'];
const STORAGE_KEY = 'portfolio-theme';

function readStoredPreference() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function prefersDark() {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const stored = readStoredPreference();
  const [paletteId, setPaletteId] = useState(stored?.paletteId || 'sage');
  const [mode, setMode] = useState(stored?.mode || (prefersDark() ? 'dark' : 'light'));

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ paletteId, mode }));
    } catch {
      // Private-browsing / storage-disabled — theme choice just won't persist.
    }
  }, [paletteId, mode]);

  const colors = useMemo(
    () => ({
      ...(mode === 'dark' ? DARK_BASE : LIGHT_BASE),
      ...PALETTES[paletteId],
    }),
    [paletteId, mode]
  );

  const value = useMemo(
    () => ({
      colors,
      mode,
      paletteId,
      setMode,
      setPaletteId,
      toggleMode: () => setMode((m) => (m === 'dark' ? 'light' : 'dark')),
      palettes: PALETTE_ORDER.map((id) => ({ id, ...PALETTES[id] })),
    }),
    [colors, mode, paletteId]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme() must be used inside <ThemeProvider>');
  return ctx;
}
