import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { colors, spacing, radius, typography, breakpoints } from '../theme';
import { Section, SectionHeading } from './Section';
import { education, achievements } from '../data';

export function EducationAchievements() {
  const { width } = useWindowDimensions();
  const isMobile = width < breakpoints.mobile;

  return (
    <Section id="education" alt>
      <SectionHeading eyebrow="Foundation" title="Education &amp; Achievements" />
      <View style={[styles.row, isMobile && styles.rowMobile]}>
        <View style={[styles.card, isMobile ? styles.cardMobile : styles.cardHalf]}>
          <Text style={styles.cardLabel}>Education</Text>
          <Text style={styles.degree}>{education.degree}</Text>
          <Text style={styles.school}>{education.school}</Text>
          <Text style={styles.meta}>
            {education.location} · {education.period}
          </Text>
        </View>

        <View style={[styles.card, isMobile ? styles.cardMobile : styles.cardHalf]}>
          <Text style={styles.cardLabel}>Achievements</Text>
          {achievements.map((line, i) => (
            <View key={i} style={styles.achievementRow}>
              <Text style={styles.achievementMark}>▸</Text>
              <Text style={styles.achievementText}>{line}</Text>
            </View>
          ))}
        </View>
      </View>
    </Section>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowMobile: {
    flexDirection: 'column',
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
  },
  cardHalf: {
    width: `calc(50% - ${spacing.lg / 2}px)`,
  },
  cardMobile: {
    width: '100%',
    marginBottom: spacing.lg,
  },
  cardLabel: {
    fontFamily: typography.fontFamily,
    fontSize: 12,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    color: colors.accent,
    fontWeight: '700',
    marginBottom: spacing.md,
  },
  degree: {
    fontFamily: typography.fontFamily,
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
    lineHeight: 22,
  },
  school: {
    fontFamily: typography.fontFamily,
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  meta: {
    fontFamily: typography.fontFamily,
    fontSize: 13,
    color: colors.textMuted,
    marginTop: spacing.xs,
  },
  achievementRow: {
    flexDirection: 'row',
    marginBottom: spacing.sm,
  },
  achievementMark: {
    color: colors.accent,
    marginRight: spacing.sm,
    fontFamily: typography.fontFamily,
  },
  achievementText: {
    flex: 1,
    fontFamily: typography.fontFamily,
    fontSize: 14,
    lineHeight: 21,
    color: colors.textSecondary,
  },
});
