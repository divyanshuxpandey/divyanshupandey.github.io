// Color tokens live in ThemeContext.js (useTheme()) since they respond to
// the visitor's palette + light/dark choice. Everything below is static.
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 40,
  xxl: 64,
  xxxl: 96,
};

export const radius = {
  sm: 6,
  md: 10,
  lg: 16,
};

export const typography = {
  fontFamily:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  serifFamily: "'Fraunces', Georgia, 'Times New Roman', serif",
};

export const breakpoints = {
  mobile: 640,
  tablet: 960,
};
