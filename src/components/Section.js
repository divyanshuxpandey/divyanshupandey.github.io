import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { spacing, typography, breakpoints } from '../theme';
import { useTheme } from '../ThemeContext';
import { useInView } from '../hooks/useInView';

export function Section({ id, children, style, alt }) {
  const { width } = useWindowDimensions();
  const { colors } = useTheme();
  const isMobile = width < breakpoints.mobile;
  const [ref, inView] = useInView();

  return (
    <View
      nativeID={id}
      style={[
        styles.section,
        alt && { backgroundColor: colors.surfaceAlt },
        { paddingHorizontal: isMobile ? spacing.lg : spacing.xxl },
        style,
      ]}
    >
      <View
        ref={ref}
        style={[
          styles.inner,
          {
            opacity: inView ? 1 : 0,
            transform: [{ translateY: inView ? 0 : 20 }],
            transitionProperty: 'opacity, transform, background-color',
            transitionDuration: '700ms, 700ms, 300ms',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          },
        ]}
      >
        {children}
      </View>
    </View>
  );
}

export function SectionHeading({ eyebrow, title }) {
  const { colors } = useTheme();

  return (
    <View style={styles.headingBlock}>
      {eyebrow ? <Text style={[styles.eyebrow, { color: colors.accent }]}>{eyebrow}</Text> : null}
      <Text style={[styles.title, { color: colors.textPrimary }]}>{title}</Text>
      <View style={[styles.rule, { backgroundColor: colors.accent }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    width: '100%',
    paddingVertical: spacing.xxl,
    alignItems: 'center',
    transitionProperty: 'background-color',
    transitionDuration: '300ms',
  },
  inner: {
    width: '100%',
    maxWidth: 980,
  },
  headingBlock: {
    marginBottom: spacing.xl,
  },
  eyebrow: {
    fontFamily: typography.fontFamily,
    fontSize: 13,
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontWeight: '600',
    marginBottom: spacing.sm,
    transitionProperty: 'color',
    transitionDuration: '300ms',
  },
  title: {
    fontFamily: typography.serifFamily,
    fontSize: 30,
    fontWeight: '600',
    transitionProperty: 'color',
    transitionDuration: '300ms',
  },
  rule: {
    width: 44,
    height: 3,
    borderRadius: 2,
    marginTop: spacing.md,
    transitionProperty: 'background-color',
    transitionDuration: '300ms',
  },
});
