import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { spacing, radius, typography } from '../theme';
import { useTheme } from '../ThemeContext';

export function Tag({ label }) {
  const { colors } = useTheme();

  return (
    <View style={[styles.tag, { backgroundColor: colors.tagBackground }]}>
      <Text style={[styles.label, { color: colors.tagText }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: {
    borderRadius: radius.sm,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: spacing.sm,
    marginBottom: spacing.sm,
    transitionProperty: 'background-color',
    transitionDuration: '300ms',
  },
  label: {
    fontFamily: typography.fontFamily,
    fontSize: 13,
    fontWeight: '500',
    transitionProperty: 'color',
    transitionDuration: '300ms',
  },
});
