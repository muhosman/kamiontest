import { Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const dimensions = {
  // Screen dimensions
  screen: {
    width: screenWidth,
    height: screenHeight,
  },

  // Component heights
  header: 56,
  tabBar: 60,
  button: {
    small: 32,
    medium: 40,
    large: 48,
  },
  input: 48,
  searchBar: 44,
  card: {
    small: 80,
    medium: 120,
    large: 160,
  },

  // Border radius
  borderRadius: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    '2xl': 20,
    full: 9999,
  },

  // Icon sizes
  icon: {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
    '2xl': 40,
  },

  // Border widths
  borderWidth: {
    none: 0,
    thin: 0.5,
    base: 1,
    thick: 2,
    thicker: 4,
  },

  // Shadow depths
  shadow: {
    none: 0,
    sm: 2,
    md: 4,
    lg: 8,
    xl: 16,
  },
} as const;

export type DimensionKeys = keyof typeof dimensions;
export type BorderRadiusKeys = keyof typeof dimensions.borderRadius;
export type IconSizeKeys = keyof typeof dimensions.icon;
