import { colors } from './colors';
import { fonts, typography } from './fonts';
import { spacing } from './spacing';
import { dimensions } from './dimensions';
import { globalStyles } from './globalStyles';

export { colors } from './colors';
export { fonts, typography } from './fonts';
export { spacing, createSpacing, getSpacing } from './spacing';
export { dimensions } from './dimensions';
export { globalStyles } from './globalStyles';

export type { ColorKeys } from './colors';
export type { FontSizes, FontWeights, TypographyVariants } from './fonts';
export type { SpacingKeys } from './spacing';
export type {
  DimensionKeys,
  BorderRadiusKeys,
  IconSizeKeys,
} from './dimensions';

export const theme = {
  colors,
  fonts,
  typography,
  spacing,
  dimensions,
  globalStyles,
} as const;

export type Theme = typeof theme;
