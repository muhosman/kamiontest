export const spacing = {
  base: 4,
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 40,
  '5xl': 48,
  '6xl': 64,
  container: 16,
  section: 24,
  card: 16,
  button: 12,
  input: 12,
  icon: 8,
} as const;

export const createSpacing = (multiplier: number) => spacing.base * multiplier;

export const getSpacing = (key: keyof typeof spacing) => spacing[key];

export type SpacingKeys = keyof typeof spacing;
