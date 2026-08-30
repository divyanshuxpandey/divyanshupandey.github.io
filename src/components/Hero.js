import React from 'react';
import { View, Text, Pressable, StyleSheet, Linking, useWindowDimensions } from 'react-native';
import { colors, spacing, typography, breakpoints } from '../theme';
import { profile } from '../data';

function Button({ label, onPress, primary }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ hovered }) => [
        styles.button,
        primary ? styles.buttonPrimary : styles.buttonGhost,
        hovered && (primary ? styles.buttonPrimaryHover : styles.buttonGhostHover),
      ]}
    >
      <Text style={[styles.buttonLabel, primary ? styles.buttonLabelPrimary : styles.buttonLabelGhost]}>
        {label}
      </Text>
    </Pressable>
  );
}

export function Hero() {
  const { width } = useWindowDimensions();
  const isMobile = width < breakpoints.mobile;

  return (
    <View nativeID="top" style={[styles.wrapper, { paddingHorizontal: isMobile ? spacing.lg : spacing.xxl }]}>
      <View style={styles.inner}>
        <Text style={styles.kicker}>Full-Stack &amp; AI/ML Engineer</Text>
        <Text style={[styles.name, isMobile && styles.nameMobile]}>{profile.name}</Text>
        <Text style={styles.title}>{profile.title}</Text>
        <Text style={styles.location}>{profile.location}</Text>
        <Text style={styles.summary}>{profile.summary}</Text>

        <View style={[styles.actions, isMobile && styles.actionsMobile]}>
          <Button label="Email me" primary onPress={() => Linking.openURL(`mailto:${profile.email}`)} />
          <Button label="GitHub" onPress={() => Linking.openURL(profile.github)} />
          <Button label="LinkedIn" onPress={() => Linking.openURL(profile.linkedin)} />
          <Button label="Download résumé" onPress={() => Linking.openURL(profile.resumeUrl)} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    alignItems: 'center',
    paddingTop: spacing.xxxl,
    paddingBottom: spacing.xxl,
  },
  inner: {
    width: '100%',
    maxWidth: 780,
  },
  kicker: {
    fontFamily: typography.fontFamily,
    fontSize: 13,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: colors.accent,
    fontWeight: '600',
    marginBottom: spacing.md,
  },
  name: {
    fontFamily: typography.serifFamily,
    fontSize: 52,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  nameMobile: {
    fontSize: 36,
  },
  title: {
    fontFamily: typography.fontFamily,
    fontSize: 19,
    color: colors.textPrimary,
    fontWeight: '500',
    marginBottom: spacing.xs,
  },
  location: {
    fontFamily: typography.fontFamily,
    fontSize: 15,
    color: colors.textMuted,
    marginBottom: spacing.lg,
  },
  summary: {
    fontFamily: typography.fontFamily,
    fontSize: 16,
    lineHeight: 26,
    color: colors.textSecondary,
    marginBottom: spacing.xl,
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  actionsMobile: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginRight: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    alignItems: 'center',
    cursor: 'pointer',
    transitionDuration: '150ms',
  },
  buttonPrimary: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },
  buttonPrimaryHover: {
    backgroundColor: colors.accentDeep,
    borderColor: colors.accentDeep,
  },
  buttonGhost: {
    backgroundColor: 'transparent',
    borderColor: colors.border,
  },
  buttonGhostHover: {
    backgroundColor: colors.surfaceAlt,
    borderColor: colors.accent,
  },
  buttonLabel: {
    fontFamily: typography.fontFamily,
    fontSize: 14,
    fontWeight: '600',
  },
  buttonLabelPrimary: {
    color: colors.surface,
  },
  buttonLabelGhost: {
    color: colors.textPrimary,
  },
});
