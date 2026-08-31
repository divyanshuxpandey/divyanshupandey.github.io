import React from 'react';
import { View, Text, Pressable, StyleSheet, useWindowDimensions } from 'react-native';
import { spacing, radius, typography, breakpoints } from '../theme';
import { useTheme } from '../ThemeContext';
import { Section, SectionHeading } from './Section';
import { education, achievements } from '../data';

export function EducationAchievements() {
  const { width } = useWindowDimensions();
  const { colors } = useTheme();
  const isMobile = width < breakpoints.mobile;

  return (
    <Section id="education" alt>
      <SectionHeading eyebrow="Foundation" title="Education &amp; Achievements" />
      <View style={[styles.row, isMobile && styles.rowMobile]}>
        <Pressable
          style={({ hovered }) => [
            styles.card,
            isMobile ? styles.cardMobile : styles.cardHalf,
            { backgroundColor: colors.surface, borderColor: colors.border },
            hovered && {
              borderColor: colors.accent,
              transform: [{ translateY: -4 }],
              boxShadow: '0 12px 24px -12px rgba(0,0,0,0.18)',
            },
          ]}
        >
          <Text style={[styles.cardLabel, { color: colors.accent }]}>Education</Text>
          <Text style={[styles.degree, { color: colors.textPrimary }]}>{education.degree}</Text>
          <Text style={[styles.school, { color: colors.textSecondary }]}>{education.school}</Text>
          <Text style={[styles.meta, { color: colors.textMuted }]}>
            {education.location} · {education.period}
          </Text>
        </Pressable>

        <Pressable
          style={({ hovered }) => [
            styles.card,
            isMobile ? styles.cardMobile : styles.cardHalf,
            { backgroundColor: colors.surface, borderColor: colors.border },
            hovered && {
              borderColor: colors.accent,
              transform: [{ translateY: -4 }],
              boxShadow: '0 12px 24px -12px rgba(0,0,0,0.18)',
            },
          ]}
        >
          <Text style={[styles.cardLabel, { color: colors.accent }]}>Achievements</Text>
          {achievements.map((line, i) => (
            <View key={i} style={styles.achievementRow}>
              <Text style={[styles.achievementMark, { color: colors.accent }]}>▸</Text>
              <Text style={[styles.achievementText, { color: colors.textSecondary }]}>{line}</Text>
            </View>
          ))}
        </Pressable>
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
    borderRadius: radius.lg,
    borderWidth: 1,
    padding: spacing.lg,
    cursor: 'default',
    transform: [{ translateY: 0 }],
    transitionProperty: 'transform, box-shadow, border-color, background-color',
    transitionDuration: '250ms',
    transitionTimingFunction: 'ease-out',
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
    fontWeight: '700',
    marginBottom: spacing.md,
    transitionProperty: 'color',
    transitionDuration: '300ms',
  },
  degree: {
    fontFamily: typography.fontFamily,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 22,
    transitionProperty: 'color',
    transitionDuration: '300ms',
  },
  school: {
    fontFamily: typography.fontFamily,
    fontSize: 14,
    marginTop: spacing.xs,
    transitionProperty: 'color',
    transitionDuration: '300ms',
  },
  meta: {
    fontFamily: typography.fontFamily,
    fontSize: 13,
    marginTop: spacing.xs,
    transitionProperty: 'color',
    transitionDuration: '300ms',
  },
  achievementRow: {
    flexDirection: 'row',
    marginBottom: spacing.sm,
  },
  achievementMark: {
    marginRight: spacing.sm,
    fontFamily: typography.fontFamily,
    transitionProperty: 'color',
    transitionDuration: '300ms',
  },
  achievementText: {
    flex: 1,
    fontFamily: typography.fontFamily,
    fontSize: 14,
    lineHeight: 21,
    transitionProperty: 'color',
    transitionDuration: '300ms',
  },
});
