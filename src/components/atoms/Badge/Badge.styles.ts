import { StyleSheet } from 'react-native';
import { colors, fonts, spacing } from '../../../theme';

export const styles = StyleSheet.create({
  badge: {
    borderRadius: 12,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: fonts.weight.medium,
    textAlign: 'center',
  },
  // Variants
  default: {
    backgroundColor: colors.neutral[100],
  },
  defaultText: {
    color: colors.neutral[600],
  },
  primary: {
    backgroundColor: colors.primary[100],
  },
  primaryText: {
    color: colors.primary[700],
  },
  secondary: {
    backgroundColor: colors.neutral[200],
  },
  secondaryText: {
    color: colors.neutral[700],
  },
  warning: {
    backgroundColor: colors.warning[50],
  },
  warningText: {
    color: colors.warning[700],
  },
  error: {
    backgroundColor: colors.error[50],
  },
  errorText: {
    color: colors.error[700],
  },
  // Sizes
  small: {
    paddingHorizontal: spacing.xs,
    paddingVertical: spacing.xs / 2,
  },
  smallText: {
    fontSize: 10,
  },
  medium: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  mediumText: {
    fontSize: 12,
  },
  large: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  largeText: {
    fontSize: 14,
  },
});
