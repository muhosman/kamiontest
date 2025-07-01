export const spacing = {
  // Base spacing unit (4px)
  base: 4,

  // Spacing scale
  none: 0,
  xs: 4, // 4px
  sm: 8, // 8px
  md: 12, // 12px
  lg: 16, // 16px
  xl: 20, // 20px
  '2xl': 24, // 24px
  '3xl': 32, // 32px
  '4xl': 40, // 40px
  '5xl': 48, // 48px
  '6xl': 64, // 64px

  // Common padding/margin values
  container: 16,
  section: 24,
  card: 16,
  button: 12,
  input: 12,
  icon: 8,
} as const;

// Helper functions for consistent spacing
export const createSpacing = (multiplier: number) => spacing.base * multiplier;

export const getSpacing = (key: keyof typeof spacing) => spacing[key];

export type SpacingKeys = keyof typeof spacing;
