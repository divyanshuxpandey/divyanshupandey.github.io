import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, useWindowDimensions } from 'react-native';
import { colors, spacing, typography, breakpoints } from '../theme';

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

export function NavBar() {
  const { width } = useWindowDimensions();
  const isMobile = width < breakpoints.tablet;
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.wrapper}>
      <View style={[styles.bar, { paddingHorizontal: isMobile ? spacing.lg : spacing.xxl }]}>
        <Pressable onPress={() => scrollToId('top')} style={styles.brand}>
          <Text style={styles.brandText}>DP</Text>
        </Pressable>

        {isMobile ? (
          <Pressable onPress={() => setOpen((o) => !o)} style={styles.menuButton} accessibilityRole="button">
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
          </Pressable>
        ) : (
          <View style={styles.links}>
            {LINKS.map((link) => (
              <Pressable key={link.id} onPress={() => scrollToId(link.id)} style={styles.linkItem}>
                <Text style={styles.linkText}>{link.label}</Text>
              </Pressable>
            ))}
          </View>
        )}
      </View>

      {isMobile && open ? (
        <View style={styles.mobileMenu}>
          {LINKS.map((link) => (
            <Pressable
              key={link.id}
              onPress={() => {
                setOpen(false);
                scrollToId(link.id);
              }}
              style={styles.mobileLinkItem}
            >
              <Text style={styles.linkText}>{link.label}</Text>
            </Pressable>
          ))}
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
    backgroundColor: 'rgba(250,249,246,0.9)',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backdropFilter: 'blur(8px)',
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
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandText: {
    color: colors.surface,
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
  },
  linkText: {
    fontFamily: typography.fontFamily,
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  menuButton: {
    width: 28,
    justifyContent: 'space-between',
    height: 16,
  },
  menuLine: {
    height: 2,
    backgroundColor: colors.textPrimary,
    borderRadius: 1,
  },
  mobileMenu: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
  },
  mobileLinkItem: {
    paddingVertical: spacing.sm,
  },
});
