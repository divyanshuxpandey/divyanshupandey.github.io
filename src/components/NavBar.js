import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet, useWindowDimensions } from 'react-native';
import { spacing, typography, breakpoints } from '../theme';
import { useTheme } from '../ThemeContext';
import { ThemeControls } from './ThemeControls';

const LINKS = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

function scrollToId(id) {
  if (typeof document !== 'undefined') {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}

function useActiveSection() {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (typeof document === 'undefined' || typeof IntersectionObserver === 'undefined') return undefined;

    const elements = LINKS.map((link) => document.getElementById(link.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return activeId;
}

export function NavBar() {
  const { width } = useWindowDimensions();
  const { colors } = useTheme();
  const isMobile = width < breakpoints.tablet;
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection();

  return (
    <View style={[styles.wrapper, { backgroundColor: colors.background, borderBottomColor: colors.border }]}>
      <View style={[styles.bar, { paddingHorizontal: isMobile ? spacing.lg : spacing.xxl }]}>
        <Pressable
          onPress={() => scrollToId('top')}
          style={[styles.brand, { backgroundColor: colors.accent }]}
          accessibilityRole="link"
          accessibilityLabel="Back to top"
        >
          {/* Fixed white, not colors.surface: it sits on the accent color,
              which stays a dark/mid tone in both light and dark mode. */}
          <Text style={[styles.brandText, { color: '#FFFFFF' }]}>DP</Text>
        </Pressable>

        {isMobile ? (
          <Pressable
            onPress={() => setOpen((o) => !o)}
            style={styles.menuButton}
            accessibilityRole="button"
            accessibilityLabel="Toggle navigation menu"
            accessibilityState={{ expanded: open }}
          >
            <View style={[styles.menuLine, { backgroundColor: colors.textPrimary }]} />
            <View style={[styles.menuLine, { backgroundColor: colors.textPrimary }]} />
            <View style={[styles.menuLine, { backgroundColor: colors.textPrimary }]} />
          </Pressable>
        ) : (
          <View style={styles.links}>
            {LINKS.map((link) => {
              const active = link.id === activeId;
              return (
                <Pressable
                  key={link.id}
                  onPress={() => scrollToId(link.id)}
                  style={[styles.linkItem, { borderBottomColor: active ? colors.accent : 'transparent' }]}
                  accessibilityRole="link"
                >
                  <Text style={[styles.linkText, { color: active ? colors.accent : colors.textSecondary, fontWeight: active ? '700' : '500' }]}>
                    {link.label}
                  </Text>
                </Pressable>
              );
            })}
            <ThemeControls />
          </View>
        )}
      </View>

      {isMobile && open ? (
        <View style={styles.mobileMenu}>
          {LINKS.map((link) => {
            const active = link.id === activeId;
            return (
              <Pressable
                key={link.id}
                onPress={() => {
                  setOpen(false);
                  scrollToId(link.id);
                }}
                style={styles.mobileLinkItem}
                accessibilityRole="link"
              >
                <Text style={[styles.linkText, { color: active ? colors.accent : colors.textSecondary, fontWeight: active ? '700' : '500' }]}>
                  {link.label}
                </Text>
              </Pressable>
            );
          })}
          <ThemeControls compact />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'sticky',
    top: 0,
    zIndex: 20,
    width: '100%',
    borderBottomWidth: 1,
    transitionProperty: 'background-color, border-color',
    transitionDuration: '300ms',
  },
  bar: {
    width: '100%',
    maxWidth: 1120,
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
  },
  brand: {
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    transitionProperty: 'background-color',
    transitionDuration: '300ms',
  },
  brandText: {
    fontFamily: typography.fontFamily,
    fontWeight: '700',
    fontSize: 14,
    letterSpacing: 0.5,
  },
  links: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkItem: {
    marginLeft: spacing.lg,
    paddingBottom: 4,
    borderBottomWidth: 2,
    transitionProperty: 'border-color',
    transitionDuration: '250ms',
  },
  linkText: {
    fontFamily: typography.fontFamily,
    fontSize: 14,
    transitionProperty: 'color',
    transitionDuration: '250ms',
  },
  menuButton: {
    width: 28,
    justifyContent: 'space-between',
    height: 16,
  },
  menuLine: {
    height: 2,
    borderRadius: 1,
    transitionProperty: 'background-color',
    transitionDuration: '300ms',
  },
  mobileMenu: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
  },
  mobileLinkItem: {
    paddingVertical: spacing.sm,
  },
});
