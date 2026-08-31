import React from 'react';
import { View, Text, Pressable, StyleSheet, Linking, useWindowDimensions } from 'react-native';
import { spacing, radius, typography, breakpoints } from '../theme';
import { useTheme } from '../ThemeContext';
import { Section, SectionHeading } from './Section';
import { Tag } from './Tag';
import { NetworkIcon, EyeIcon, CompareIcon, GlobeIcon, GitHubIcon } from './icons';
import { projects } from '../data';

const PROJECT_ICONS = { network: NetworkIcon, eye: EyeIcon, compare: CompareIcon, globe: GlobeIcon };

function ProjectCard({ project, cardWidth }) {
  const { colors } = useTheme();
  const Icon = PROJECT_ICONS[project.icon];

  return (
    <Pressable
      style={({ hovered }) => [
        styles.card,
        { width: cardWidth, backgroundColor: colors.surface, borderColor: colors.border },
        hovered && { borderColor: colors.accent, transform: [{ translateY: -4 }], boxShadow: '0 12px 24px -12px rgba(0,0,0,0.18)' },
      ]}
    >
      <View style={styles.headRow}>
        {Icon ? (
          <View style={[styles.iconBadge, { backgroundColor: colors.accentSoft }]}>
            <Icon size={20} color={colors.accentDeep} />
          </View>
        ) : null}
        {project.github ? (
          <Pressable
            onPress={() => Linking.openURL(project.github)}
            accessibilityRole="link"
            accessibilityLabel={`View ${project.name} on GitHub`}
            style={({ hovered }) => [styles.githubButton, { borderColor: colors.border }, hovered && { borderColor: colors.accent }]}
          >
            <GitHubIcon size={14} color={colors.textSecondary} />
            <Text style={[styles.githubButtonLabel, { color: colors.textSecondary }]}>Code</Text>
          </Pressable>
        ) : null}
      </View>
      <Text style={[styles.name, { color: colors.textPrimary }]}>{project.name}</Text>
      <Text style={[styles.subtitle, { color: colors.accent }]}>{project.subtitle}</Text>
      <Text style={[styles.description, { color: colors.textSecondary }]}>{project.description}</Text>
      <View style={styles.tagRow}>
        {project.stack.map((tech) => (
          <Tag key={tech} label={tech} />
        ))}
      </View>
    </Pressable>
  );
}

export function Projects() {
  const { width } = useWindowDimensions();
  const isMobile = width < breakpoints.mobile;
  const isTablet = width >= breakpoints.mobile && width < breakpoints.tablet;
  const columns = isMobile ? 1 : isTablet ? 2 : 3;
  const gap = spacing.lg;
  const cardWidth = columns === 1 ? '100%' : `calc(${100 / columns}% - ${(gap * (columns - 1)) / columns}px)`;

  return (
    <Section id="projects" alt>
      <SectionHeading eyebrow="Selected work" title="Projects" />
      <View style={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} cardWidth={cardWidth} />
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
  headRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  iconBadge: {
    width: 40,
    height: 40,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    transitionProperty: 'background-color',
    transitionDuration: '300ms',
  },
  githubButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: radius.sm,
    paddingVertical: 5,
    paddingHorizontal: 10,
    cursor: 'pointer',
    transitionProperty: 'border-color',
    transitionDuration: '200ms',
  },
  githubButtonLabel: {
    fontFamily: typography.fontFamily,
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 6,
  },
  name: {
    fontFamily: typography.serifFamily,
    fontSize: 20,
    fontWeight: '600',
    transitionProperty: 'color',
    transitionDuration: '300ms',
  },
  subtitle: {
    fontFamily: typography.fontFamily,
    fontSize: 13,
    fontWeight: '600',
    marginTop: 2,
    marginBottom: spacing.md,
    transitionProperty: 'color',
    transitionDuration: '300ms',
  },
  description: {
    fontFamily: typography.fontFamily,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: spacing.md,
    transitionProperty: 'color',
    transitionDuration: '300ms',
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
