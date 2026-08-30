import React from 'react';
import { View, Text, Pressable, StyleSheet, useWindowDimensions } from 'react-native';
import { colors, spacing, radius, typography, breakpoints } from '../theme';
import { Section, SectionHeading } from './Section';
import { Tag } from './Tag';
import { skillGroups } from '../data';

export function Skills() {
  const { width } = useWindowDimensions();
  const isMobile = width < breakpoints.mobile;
  const columns = isMobile ? 1 : 2;
  const cardWidth = columns === 1 ? '100%' : `calc(50% - ${spacing.lg / 2}px)`;

  return (
    <Section id="skills">
      <SectionHeading eyebrow="Toolbox" title="Skills" />
      <View style={styles.grid}>
        {skillGroups.map((group) => (
          <Pressable
            key={group.title}
            style={({ hovered }) => [styles.card, { width: cardWidth }, hovered && styles.cardHovered]}
          >
            <Text style={styles.groupTitle}>{group.title}</Text>
            <View style={styles.tagRow}>
              {group.items.map((item) => (
                <Tag key={item} label={item} />
              ))}
            </View>
          </Pressable>
        ))}
      </View>
    </Section>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    cursor: 'default',
    transform: [{ translateY: 0 }],
    transitionProperty: 'transform, box-shadow, border-color',
    transitionDuration: '250ms',
    transitionTimingFunction: 'ease-out',
  },
  cardHovered: {
    borderColor: colors.accent,
    transform: [{ translateY: -4 }],
    boxShadow: '0 12px 24px -12px rgba(51, 50, 47, 0.18)',
  },
  groupTitle: {
    fontFamily: typography.fontFamily,
    fontSize: 15,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
