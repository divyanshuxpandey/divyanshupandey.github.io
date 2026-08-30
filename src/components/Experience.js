import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../theme';
import { Section, SectionHeading } from './Section';
import { experience } from '../data';

function ExperienceItem({ item, isLast }) {
  return (
    <View style={styles.item}>
      <View style={styles.railColumn}>
        <View style={styles.dot} />
        {!isLast ? <View style={styles.line} /> : null}
      </View>
      <View style={styles.content}>
        <View style={styles.headRow}>
          <Text style={styles.role}>{item.role}</Text>
          <Text style={styles.period}>{item.period}</Text>
        </View>
        <Text style={styles.company}>
          {item.company} · {item.location}
        </Text>
        {item.bullets.map((bullet, i) => (
          <View key={i} style={styles.bulletRow}>
            <Text style={styles.bulletMark}>—</Text>
            <Text style={styles.bulletText}>{bullet}</Text>
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
    backgroundColor: colors.accent,
    marginTop: 6,
  },
  line: {
    flex: 1,
    width: 1,
    backgroundColor: colors.border,
    marginTop: 4,
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
    color: colors.textPrimary,
  },
  period: {
    fontFamily: typography.fontFamily,
    fontSize: 13,
    color: colors.textMuted,
    fontWeight: '500',
  },
  company: {
    fontFamily: typography.fontFamily,
    fontSize: 14,
    color: colors.accent,
    fontWeight: '600',
    marginTop: 2,
    marginBottom: spacing.md,
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: spacing.sm,
  },
  bulletMark: {
    color: colors.textMuted,
    marginRight: spacing.sm,
    fontFamily: typography.fontFamily,
  },
  bulletText: {
    flex: 1,
    fontFamily: typography.fontFamily,
    fontSize: 15,
    lineHeight: 23,
    color: colors.textSecondary,
  },
});
