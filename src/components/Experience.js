import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { spacing, typography } from '../theme';
import { useTheme } from '../ThemeContext';
import { Section, SectionHeading } from './Section';
import { experience } from '../data';

function ExperienceItem({ item, isLast }) {
  const { colors } = useTheme();

  return (
    <View style={styles.item}>
      <View style={styles.railColumn}>
        <View style={[styles.dot, { backgroundColor: colors.accent }]} />
        {!isLast ? <View style={[styles.line, { backgroundColor: colors.border }]} /> : null}
      </View>
      <View style={styles.content}>
        <View style={styles.headRow}>
          <Text style={[styles.role, { color: colors.textPrimary }]}>{item.role}</Text>
          <Text style={[styles.period, { color: colors.textMuted }]}>{item.period}</Text>
        </View>
        <Text style={[styles.company, { color: colors.accent }]}>
          {item.company} · {item.location}
        </Text>
        {item.bullets.map((bullet, i) => (
          <View key={i} style={styles.bulletRow}>
            <Text style={[styles.bulletMark, { color: colors.textMuted }]}>—</Text>
            <Text style={[styles.bulletText, { color: colors.textSecondary }]}>{bullet}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading eyebrow="Career" title="Experience" />
      <View>
        {experience.map((item, i) => (
          <ExperienceItem key={item.company} item={item} isLast={i === experience.length - 1} />
        ))}
      </View>
    </Section>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
  },
  railColumn: {
    width: 20,
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginTop: 6,
    transitionProperty: 'background-color',
    transitionDuration: '300ms',
  },
  line: {
    flex: 1,
    width: 1,
    marginTop: 4,
    transitionProperty: 'background-color',
    transitionDuration: '300ms',
  },
  content: {
    flex: 1,
    marginLeft: spacing.md,
    paddingBottom: spacing.xl,
  },
  headRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  role: {
    fontFamily: typography.fontFamily,
    fontSize: 18,
    fontWeight: '700',
    transitionProperty: 'color',
    transitionDuration: '300ms',
  },
  period: {
    fontFamily: typography.fontFamily,
    fontSize: 13,
    fontWeight: '500',
    transitionProperty: 'color',
    transitionDuration: '300ms',
  },
  company: {
    fontFamily: typography.fontFamily,
    fontSize: 14,
    fontWeight: '600',
    marginTop: 2,
    marginBottom: spacing.md,
    transitionProperty: 'color',
    transitionDuration: '300ms',
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: spacing.sm,
  },
  bulletMark: {
    marginRight: spacing.sm,
    fontFamily: typography.fontFamily,
    transitionProperty: 'color',
    transitionDuration: '300ms',
  },
  bulletText: {
    flex: 1,
    fontFamily: typography.fontFamily,
    fontSize: 15,
    lineHeight: 23,
    transitionProperty: 'color',
    transitionDuration: '300ms',
  },
});
