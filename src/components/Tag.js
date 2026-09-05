import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { spacing, radius, typography } from '../theme';
import { useTheme } from '../ThemeContext';

// Plain, non-interactive tag (skill/stack chips inside cards).
export function Tag({ label }) {
  const { colors } = useTheme();

  return (
    <View style={[styles.tag, { backgroundColor: colors.tagBackground }]}>
      <Text style={[styles.label, { color: colors.tagText }]}>{label}</Text>
    </View>
  );
}

// Clickable variant used for filter chips — highlights when active.
export function FilterTag({ label, active, onPress }) {
  const { colors } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected: active }}
      style={({ hovered }) => [
        styles.tag,
        styles.filterTag,
        { backgroundColor: active ? colors.accent : colors.tagBackground, borderColor: active ? colors.accent : colors.border },
        hovered && !active && { borderColor: colors.accent },
      ]}
    >
      <Text style={[styles.label, { color: active ? '#FFFFFF' : colors.tagText }]}>{label}</Text>
    </Pressable>
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
  filterTag: {
    borderWidth: 1,
    cursor: 'pointer',
    transitionProperty: 'background-color, border-color',
    transitionDuration: '200ms',
  },
  label: {
    fontFamily: typography.fontFamily,
    fontSize: 13,
    fontWeight: '500',
    transitionProperty: 'color',
    transitionDuration: '300ms',
  },
});
