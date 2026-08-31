import React from 'react';
import { View, Text, Pressable, StyleSheet, useWindowDimensions } from 'react-native';
import { spacing, radius, typography, breakpoints } from '../theme';
import { useTheme } from '../ThemeContext';
import { Section, SectionHeading } from './Section';
import { Tag } from './Tag';
import { CodeIcon, LayersIcon, ServerIcon, SparkIcon, CloudIcon, DatabaseIcon, TerminalIcon } from './icons';
import { skillGroups } from '../data';

const SKILL_ICONS = {
  code: CodeIcon,
  layers: LayersIcon,
  server: ServerIcon,
  spark: SparkIcon,
  cloud: CloudIcon,
  database: DatabaseIcon,
  terminal: TerminalIcon,
};

export function Skills() {
  const { width } = useWindowDimensions();
  const { colors } = useTheme();
  const isMobile = width < breakpoints.mobile;
  const columns = isMobile ? 1 : 2;
  const cardWidth = columns === 1 ? '100%' : `calc(50% - ${spacing.lg / 2}px)`;

  return (
    <Section id="skills">
      <SectionHeading eyebrow="Toolbox" title="Skills" />
      <View style={styles.grid}>
        {skillGroups.map((group) => {
          const Icon = SKILL_ICONS[group.icon];
          return (
            <Pressable
              key={group.title}
              style={({ hovered }) => [
                styles.card,
                { width: cardWidth, backgroundColor: colors.surface, borderColor: colors.border },
                hovered && {
                  borderColor: colors.accent,
                  transform: [{ translateY: -4 }],
                  boxShadow: '0 12px 24px -12px rgba(0,0,0,0.18)',
                },
              ]}
            >
              <View style={styles.titleRow}>
                {Icon ? (
                  <View style={[styles.iconBadge, { backgroundColor: colors.accentSoft }]}>
                    <Icon size={18} color={colors.accentDeep} />
                  </View>
                ) : null}
                <Text style={[styles.groupTitle, { color: colors.textPrimary }]}>{group.title}</Text>
              </View>
              <View style={styles.tagRow}>
                {group.items.map((item) => (
                  <Tag key={item} label={item} />
                ))}
              </View>
            </Pressable>
          );
        })}
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
    borderRadius: radius.lg,
    borderWidth: 1,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    cursor: 'default',
    transform: [{ translateY: 0 }],
    transitionProperty: 'transform, box-shadow, border-color, background-color',
    transitionDuration: '250ms',
    transitionTimingFunction: 'ease-out',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  iconBadge: {
    width: 32,
    height: 32,
    borderRadius: radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
    transitionProperty: 'background-color',
    transitionDuration: '300ms',
  },
  groupTitle: {
    fontFamily: typography.fontFamily,
    fontSize: 15,
    fontWeight: '700',
    transitionProperty: 'color',
    transitionDuration: '300ms',
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
