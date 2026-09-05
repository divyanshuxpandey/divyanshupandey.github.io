import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Linking, useWindowDimensions } from 'react-native';
import { spacing, typography, breakpoints } from '../theme';
import { useTheme } from '../ThemeContext';
import { profile } from '../data';

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const handlePress = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — the email text link next to this still works.
    }
  };

  return (
    <Pressable onPress={handlePress} accessibilityRole="button" accessibilityLabel="Copy email address">
      <Text style={styles.link}>{copied ? 'Copied ✓' : 'Copy email'}</Text>
    </Pressable>
  );
}

export function Footer() {
  const { width } = useWindowDimensions();
  const { colors } = useTheme();
  const isMobile = width < breakpoints.mobile;
  const year = new Date().getFullYear();

  return (
    <View
      nativeID="contact"
      style={[
        styles.wrapper,
        { paddingHorizontal: isMobile ? spacing.lg : spacing.xxl, backgroundColor: colors.accentDeep },
      ]}
    >
      <View style={styles.inner}>
        <Text style={styles.heading}>Let&apos;s build something together</Text>
        <Text style={styles.subheading}>
          Open to cloud infrastructure and data engineering conversations — reach out any time.
        </Text>

        <View style={[styles.linkRow, isMobile && styles.linkRowMobile]}>
          <Pressable onPress={() => Linking.openURL(`mailto:${profile.email}`, '_self')} accessibilityRole="link">
            <Text style={styles.link}>{profile.email}</Text>
          </Pressable>
          <CopyEmailButton />
          {profile.phone ? (
            <Pressable onPress={() => Linking.openURL(`tel:${profile.phone}`, '_self')} accessibilityRole="link">
              <Text style={styles.link}>{profile.phone}</Text>
            </Pressable>
          ) : null}
          <Pressable onPress={() => Linking.openURL(profile.github)} accessibilityRole="link">
            <Text style={styles.link}>GitHub ↗</Text>
          </Pressable>
          <Pressable onPress={() => Linking.openURL(profile.linkedin)} accessibilityRole="link">
            <Text style={styles.link}>LinkedIn ↗</Text>
          </Pressable>
        </View>

        <View style={styles.divider} />
        <Text style={styles.copyright}>© {year} {profile.name}. Built with React Native Web.</Text>
      </View>
    </View>
  );
}

// The footer band always sits on the dark accentDeep tone regardless of
// light/dark mode, so its text stays a fixed near-white rather than
// following colors.surface (which flips dark in dark mode).
const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: spacing.xxl,
    transitionProperty: 'background-color',
    transitionDuration: '300ms',
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
    color: '#FFFFFF',
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
    color: '#FFFFFF',
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
