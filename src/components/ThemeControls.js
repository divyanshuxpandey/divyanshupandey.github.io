import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { spacing, radius } from '../theme';
import { useTheme } from '../ThemeContext';
import { SunIcon, MoonIcon } from './icons';

export function ThemeControls({ compact }) {
  const { colors, mode, toggleMode, paletteId, setPaletteId, palettes } = useTheme();

  return (
    <View style={[styles.row, compact && styles.rowCompact]}>
      <View style={styles.swatchRow}>
        {palettes.map((p) => {
          const active = p.id === paletteId;
          return (
            <Pressable
              key={p.id}
              onPress={() => setPaletteId(p.id)}
              accessibilityRole="button"
              accessibilityLabel={`Use ${p.label} accent color`}
              accessibilityState={{ selected: active }}
              style={[
                styles.swatch,
                { backgroundColor: p.accent, borderColor: active ? colors.textPrimary : 'transparent' },
              ]}
            />
          );
        })}
      </View>

      <Pressable
        onPress={toggleMode}
        accessibilityRole="button"
        accessibilityLabel={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        style={[styles.modeButton, { borderColor: colors.border, backgroundColor: colors.surfaceAlt }]}
      >
        {mode === 'dark' ? <SunIcon size={15} color={colors.textPrimary} /> : <MoonIcon size={15} color={colors.textPrimary} />}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: spacing.lg,
  },
  rowCompact: {
    marginLeft: 0,
    marginTop: spacing.md,
  },
  swatchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: spacing.sm,
  },
  swatch: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    marginRight: 6,
    cursor: 'pointer',
    transitionProperty: 'border-color, transform',
    transitionDuration: '150ms',
  },
  modeButton: {
    width: 28,
    height: 28,
    borderRadius: radius.sm,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transitionProperty: 'background-color, border-color',
    transitionDuration: '300ms',
  },
});
