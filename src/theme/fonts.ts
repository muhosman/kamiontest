export const fonts = {
  size: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 28,
    '4xl': 32,
    '5xl': 36,
    '6xl': 48,
  },

  lineHeight: {
    xs: 16,
    sm: 20,
    base: 24,
    lg: 28,
    xl: 32,
    '2xl': 36,
    '3xl': 40,
    '4xl': 44,
    '5xl': 48,
    '6xl': 56,
  },

  weight: {
    light: '300' as const,
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
    extrabold: '800' as const,
    black: '900' as const,
  },
} as const;

export const typography = {
  h1: {
    fontSize: fonts.size['4xl'],
    lineHeight: fonts.lineHeight['4xl'],
  },
  h2: {
    fontSize: fonts.size['3xl'],
    lineHeight: fonts.lineHeight['3xl'],
  },
  h3: {
    fontSize: fonts.size['2xl'],
    lineHeight: fonts.lineHeight['2xl'],
  },
  h4: {
    fontSize: fonts.size.xl,
    lineHeight: fonts.lineHeight.xl,
  },
  h5: {
    fontSize: fonts.size.lg,
    lineHeight: fonts.lineHeight.lg,
  },
  h6: {
    fontSize: fonts.size.base,
    lineHeight: fonts.lineHeight.base,
  },
  body1: {
    fontSize: fonts.size.base,
    lineHeight: fonts.lineHeight.base,
  },
  body2: {
    fontSize: fonts.size.sm,
    lineHeight: fonts.lineHeight.sm,
  },
  caption: {
    fontSize: fonts.size.xs,
    lineHeight: fonts.lineHeight.xs,
  },
  button: {
    fontSize: fonts.size.base,
    lineHeight: fonts.lineHeight.base,
  },
} as const;

export type FontSizes = keyof typeof fonts.size;
export type FontWeights = keyof typeof fonts.weight;
export type TypographyVariants = keyof typeof typography;
