import React from 'react';
import { View, Text, Pressable, StyleSheet, useWindowDimensions } from 'react-native';
import { colors, spacing, radius, typography, breakpoints } from '../theme';
import { Section, SectionHeading } from './Section';
import { Tag } from './Tag';
import { projects } from '../data';

function ProjectCard({ project, cardWidth }) {
  return (
    <Pressable
      style={({ hovered }) => [styles.card, { width: cardWidth }, hovered && styles.cardHovered]}
    >
      <Text style={styles.name}>{project.name}</Text>
      <Text style={styles.subtitle}>{project.subtitle}</Text>
      <Text style={styles.description}>{project.description}</Text>
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
  name: {
    fontFamily: typography.serifFamily,
    fontSize: 20,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  subtitle: {
    fontFamily: typography.fontFamily,
    fontSize: 13,
    color: colors.accent,
    fontWeight: '600',
    marginTop: 2,
    marginBottom: spacing.md,
  },
  description: {
    fontFamily: typography.fontFamily,
    fontSize: 14,
    lineHeight: 22,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
