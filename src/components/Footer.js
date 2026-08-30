import React from 'react';
import { View, Text, Pressable, StyleSheet, Linking, useWindowDimensions } from 'react-native';
import { colors, spacing, typography, breakpoints } from '../theme';
import { profile } from '../data';

export function Footer() {
  const { width } = useWindowDimensions();
  const isMobile = width < breakpoints.mobile;
  const year = new Date().getFullYear();

  return (
    <View nativeID="contact" style={[styles.wrapper, { paddingHorizontal: isMobile ? spacing.lg : spacing.xxl }]}>
      <View style={styles.inner}>
        <Text style={styles.heading}>Let&apos;s build something together</Text>
        <Text style={styles.subheading}>
          Open to full-stack and AI/ML engineering conversations — reach out any time.
        </Text>

        <View style={[styles.linkRow, isMobile && styles.linkRowMobile]}>
          <Pressable onPress={() => Linking.openURL(`mailto:${profile.email}`)}>
            <Text style={styles.link}>{profile.email}</Text>
          </Pressable>
          <Pressable onPress={() => Linking.openURL(profile.github)}>
            <Text style={styles.link}>GitHub ↗</Text>
          </Pressable>
          <Pressable onPress={() => Linking.openURL(profile.linkedin)}>
            <Text style={styles.link}>LinkedIn ↗</Text>
          </Pressable>
        </View>

        <View style={styles.divider} />
        <Text style={styles.copyright}>© {year} {profile.name}. Built with React Native Web.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.accentDeep,
    paddingVertical: spacing.xxl,
  },
  inner: {
    width: '100%',
    maxWidth: 780,
    alignItems: 'flex-start',
  },
  heading: {
    fontFamily: typography.serifFamily,
    fontSize: 26,
    fontWeight: '600',
    color: colors.surface,
    marginBottom: spacing.sm,
  },
  subheading: {
    fontFamily: typography.fontFamily,
    fontSize: 15,
    color: 'rgba(255,255,255,0.75)',
    marginBottom: spacing.xl,
  },
  linkRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  linkRowMobile: {
    flexDirection: 'column',
  },
  link: {
    fontFamily: typography.fontFamily,
    fontSize: 15,
    fontWeight: '600',
    color: colors.surface,
    marginRight: spacing.xl,
    marginBottom: spacing.sm,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.15)',
    marginTop: spacing.lg,
    marginBottom: spacing.lg,
  },
  copyright: {
    fontFamily: typography.fontFamily,
    fontSize: 12,
    color: 'rgba(255,255,255,0.55)',
  },
});
