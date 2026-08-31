import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet, Linking, useWindowDimensions } from 'react-native';
import { spacing, typography, breakpoints } from '../theme';
import { useTheme } from '../ThemeContext';
import { profile } from '../data';
import { BlobShape } from './icons';

function Avatar({ size }) {
  const { colors } = useTheme();

  return (
    <View style={styles.avatarWrap}>
      <View style={styles.blobBehind} pointerEvents="none">
        <BlobShape size={size * 1.9} color={colors.accent} opacity={0.14} />
      </View>
      <View
        style={[
          styles.avatar,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: colors.accentSoft,
            borderColor: colors.border,
          },
        ]}
      >
        {profile.photoUrl ? (
          <Image
            source={{ uri: profile.photoUrl }}
            style={{ width: size, height: size, borderRadius: size / 2 }}
            accessibilityLabel={profile.name}
          />
        ) : (
          <Text style={[styles.avatarInitials, { fontSize: size * 0.36, color: colors.accentDeep }]}>
            {profile.initials}
          </Text>
        )}
      </View>
    </View>
  );
}

function Button({ label, onPress, primary }) {
  const { colors } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="link"
      style={({ hovered }) => [
        styles.button,
        primary
          ? {
              backgroundColor: hovered ? colors.accentDeep : colors.accent,
              borderColor: hovered ? colors.accentDeep : colors.accent,
            }
          : {
              backgroundColor: hovered ? colors.surfaceAlt : 'transparent',
              borderColor: hovered ? colors.accent : colors.border,
            },
      ]}
    >
      {/* Fixed white, not colors.surface: it sits on the accent color, which
          stays a dark/mid tone in both light and dark mode. */}
      <Text style={[styles.buttonLabel, { color: primary ? '#FFFFFF' : colors.textPrimary }]}>{label}</Text>
    </Pressable>
  );
}

export function Hero() {
  const { width } = useWindowDimensions();
  const { colors } = useTheme();
  const isMobile = width < breakpoints.mobile;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <View nativeID="top" style={[styles.wrapper, { paddingHorizontal: isMobile ? spacing.lg : spacing.xxl }]}>
      <View
        style={[
          styles.inner,
          {
            opacity: mounted ? 1 : 0,
            transform: [{ translateY: mounted ? 0 : 14 }],
            transitionProperty: 'opacity, transform',
            transitionDuration: '600ms',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          },
        ]}
      >
        <Avatar size={isMobile ? 84 : 112} />
        <Text style={[styles.kicker, { color: colors.accent }]}>Full-Stack &amp; AI/ML Engineer</Text>
        <Text style={[styles.name, isMobile && styles.nameMobile, { color: colors.textPrimary }]}>
          {profile.name}
        </Text>
        <Text style={[styles.title, { color: colors.textPrimary }]}>{profile.title}</Text>
        <Text style={[styles.location, { color: colors.textMuted }]}>{profile.location}</Text>
        <Text style={[styles.summary, { color: colors.textSecondary }]}>{profile.summary}</Text>

        <View style={[styles.actions, isMobile && styles.actionsMobile]}>
          <Button
            label="Email me"
            primary
            onPress={() => Linking.openURL(`mailto:${profile.email}`, '_self')}
          />
          <Button label="GitHub" onPress={() => Linking.openURL(profile.github)} />
          <Button label="LinkedIn" onPress={() => Linking.openURL(profile.linkedin)} />
          <Button label="Download résumé" onPress={() => Linking.openURL(profile.resumeUrl)} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatarWrap: {
    position: 'relative',
    marginBottom: spacing.lg,
  },
  blobBehind: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
  },
  avatar: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    transitionProperty: 'background-color, border-color',
    transitionDuration: '300ms',
  },
  avatarInitials: {
    fontFamily: typography.serifFamily,
    fontWeight: '600',
    transitionProperty: 'color',
    transitionDuration: '300ms',
  },
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
    fontWeight: '600',
    marginBottom: spacing.md,
    transitionProperty: 'color',
    transitionDuration: '300ms',
  },
  name: {
    fontFamily: typography.serifFamily,
    fontSize: 52,
    fontWeight: '600',
    marginBottom: spacing.sm,
    transitionProperty: 'color',
    transitionDuration: '300ms',
  },
  nameMobile: {
    fontSize: 36,
  },
  title: {
    fontFamily: typography.fontFamily,
    fontSize: 19,
    fontWeight: '500',
    marginBottom: spacing.xs,
    transitionProperty: 'color',
    transitionDuration: '300ms',
  },
  location: {
    fontFamily: typography.fontFamily,
    fontSize: 15,
    marginBottom: spacing.lg,
    transitionProperty: 'color',
    transitionDuration: '300ms',
  },
  summary: {
    fontFamily: typography.fontFamily,
    fontSize: 16,
    lineHeight: 26,
    marginBottom: spacing.xl,
    transitionProperty: 'color',
    transitionDuration: '300ms',
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
    transitionProperty: 'background-color, border-color',
    transitionDuration: '150ms',
  },
  buttonLabel: {
    fontFamily: typography.fontFamily,
    fontSize: 14,
    fontWeight: '600',
  },
});
