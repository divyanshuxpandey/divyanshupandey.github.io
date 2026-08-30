import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { colors, spacing, typography, breakpoints } from '../theme';
import { useInView } from '../hooks/useInView';

export function Section({ id, children, style, alt }) {
  const { width } = useWindowDimensions();
  const isMobile = width < breakpoints.mobile;
  const [ref, inView] = useInView();

  return (
    <View
      nativeID={id}
      style={[
        styles.section,
        alt && styles.sectionAlt,
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
            transitionProperty: 'opacity, transform',
            transitionDuration: '700ms',
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
  return (
    <View style={styles.headingBlock}>
      {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rule} />
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    width: '100%',
    paddingVertical: spacing.xxl,
    alignItems: 'center',
  },
  sectionAlt: {
    backgroundColor: colors.surfaceAlt,
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
    color: colors.accent,
    fontWeight: '600',
    marginBottom: spacing.sm,
  },
  title: {
    fontFamily: typography.serifFamily,
    fontSize: 30,
    color: colors.textPrimary,
    fontWeight: '600',
  },
  rule: {
    width: 44,
    height: 3,
    backgroundColor: colors.accent,
    borderRadius: 2,
    marginTop: spacing.md,
  },
});
