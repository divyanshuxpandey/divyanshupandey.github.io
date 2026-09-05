import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { spacing, radius, typography, breakpoints } from '../theme';
import { useTheme } from '../ThemeContext';
import { useInView } from '../hooks/useInView';
import { stats } from '../data';

const DURATION_MS = 1200;

function useCountUp(target, decimals, active) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return undefined;

    let frame;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min(1, (now - start) / DURATION_MS);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return value.toFixed(decimals);
}

function StatTile({ stat, active, cardWidth }) {
  const { colors } = useTheme();
  const display = useCountUp(stat.value, stat.decimals || 0, active);

  return (
    <View style={[styles.tile, { width: cardWidth, backgroundColor: colors.surface, borderColor: colors.border }]}>
      <Text style={[styles.value, { color: colors.accent }]}>
        {display}
        {stat.suffix}
      </Text>
      <Text style={[styles.label, { color: colors.textSecondary }]}>{stat.label}</Text>
    </View>
  );
}

export function Stats() {
  const { width } = useWindowDimensions();
  const isMobile = width < breakpoints.mobile;
  const isTablet = width >= breakpoints.mobile && width < breakpoints.tablet;
  const columns = isMobile ? 1 : isTablet ? 2 : 4;
  const gap = spacing.lg;
  const cardWidth = columns === 1 ? '100%' : `calc(${100 / columns}% - ${(gap * (columns - 1)) / columns}px)`;
  const [ref, inView] = useInView();

  return (
    <View style={[styles.wrapper, { paddingHorizontal: isMobile ? spacing.lg : spacing.xxl }]}>
      <View ref={ref} style={styles.grid}>
        {stats.map((stat) => (
          <StatTile key={stat.label} stat={stat} active={inView} cardWidth={cardWidth} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: spacing.xxl,
  },
  grid: {
    width: '100%',
    maxWidth: 980,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tile: {
    borderRadius: radius.lg,
    borderWidth: 1,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.lg,
    alignItems: 'center',
  },
  value: {
    fontFamily: typography.serifFamily,
    fontSize: 34,
    fontWeight: '700',
    marginBottom: spacing.xs,
  },
  label: {
    fontFamily: typography.fontFamily,
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'center',
  },
});
