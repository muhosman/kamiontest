export const fonts = {
  // Font families
  family: {
    thin: 'Nunito-Thin',
    light: 'Nunito-Light',
    book: 'Nunito-Book',
    regular: 'Nunito-Regular',
    medium: 'Nunito-Medium',
    semibold: 'Nunito-SemiBold',
    bold: 'Nunito-Bold',
    extrabold: 'Nunito-ExtraBold',
    heavy: 'Nunito-Heavy',
    black: 'Nunito-Black',
  },

  // Font sizes
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

  // Line heights
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

  // Font weights
  weight: {
    light: '300' as const,
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
} as const;

// Typography variants
export const typography = {
  h1: {
    fontSize: fonts.size['4xl'],
    lineHeight: fonts.lineHeight['4xl'],
    fontFamily: fonts.family.bold,
  },
  h2: {
    fontSize: fonts.size['3xl'],
    lineHeight: fonts.lineHeight['3xl'],
    fontFamily: fonts.family.bold,
  },
  h3: {
    fontSize: fonts.size['2xl'],
    lineHeight: fonts.lineHeight['2xl'],
    fontFamily: fonts.family.semibold,
  },
  h4: {
    fontSize: fonts.size.xl,
    lineHeight: fonts.lineHeight.xl,
    fontFamily: fonts.family.semibold,
  },
  h5: {
    fontSize: fonts.size.lg,
    lineHeight: fonts.lineHeight.lg,
    fontFamily: fonts.family.medium,
  },
  h6: {
    fontSize: fonts.size.base,
    lineHeight: fonts.lineHeight.base,
    fontFamily: fonts.family.medium,
  },
  body1: {
    fontSize: fonts.size.base,
    lineHeight: fonts.lineHeight.base,
    fontFamily: fonts.family.regular,
  },
  body2: {
    fontSize: fonts.size.sm,
    lineHeight: fonts.lineHeight.sm,
    fontFamily: fonts.family.regular,
  },
  caption: {
    fontSize: fonts.size.xs,
    lineHeight: fonts.lineHeight.xs,
    fontFamily: fonts.family.light,
  },
  button: {
    fontSize: fonts.size.base,
    lineHeight: fonts.lineHeight.base,
    fontFamily: fonts.family.medium,
  },
} as const;

export type FontSizes = keyof typeof fonts.size;
export type FontWeights = keyof typeof fonts.weight;
export type TypographyVariants = keyof typeof typography;
