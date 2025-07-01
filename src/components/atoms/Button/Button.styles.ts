import { StyleSheet } from 'react-native';
import { colors, dimensions, spacing, typography } from '../../../theme';
import type { ButtonVariant, ButtonSize } from './Button.types';

export const createButtonStyles = (
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'medium',
  fullWidth: boolean = false,
  disabled: boolean = false,
) => {
  const baseStyle = {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    borderRadius: 12,
    borderWidth: 0,
  };

  // Size styles
  const sizeStyles = {
    small: {
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      minHeight: dimensions.button.small,
    },
    medium: {
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
      minHeight: dimensions.button.medium,
    },
    large: {
      paddingHorizontal: spacing.xl,
      paddingVertical: spacing.lg,
      minHeight: dimensions.button.large,
    },
  };

  // Variant styles
  const variantStyles = {
    primary: {
      backgroundColor: disabled ? colors.neutral[300] : colors.primary[500],
      borderColor: disabled ? colors.neutral[300] : colors.primary[500],
    },
    secondary: {
      backgroundColor: disabled ? colors.neutral[200] : colors.neutral[100],
      borderColor: disabled ? colors.neutral[300] : colors.neutral[300],
    },
    outline: {
      backgroundColor: colors.transparent,
      borderColor: disabled ? colors.neutral[300] : colors.primary[500],
    },
    ghost: {
      backgroundColor: colors.transparent,
      borderColor: colors.transparent,
    },
  };

  return StyleSheet.create({
    button: {
      ...baseStyle,
      ...sizeStyles[size],
      ...variantStyles[variant],
      width: fullWidth ? '100%' : 'auto',
      opacity: disabled ? 0.6 : 1,
    },
  });
};

export const createTextStyles = (
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'medium',
  disabled: boolean = false,
) => {
  // Text size based on button size
  const textSizes = {
    small: typography.body2,
    medium: typography.button,
    large: typography.h6,
  };

  // Text color based on variant
  const getTextColor = () => {
    if (disabled) return colors.neutral[500];

    switch (variant) {
      case 'primary':
        return colors.white;
      case 'secondary':
        return colors.text.primary;
      case 'outline':
        return colors.primary[500];
      case 'ghost':
        return colors.primary[500];
      default:
        return colors.white;
    }
  };

  return StyleSheet.create({
    text: {
      ...textSizes[size],
      color: getTextColor(),
      textAlign: 'center' as const,
    },
  });
};

export const styles = StyleSheet.create({
  iconContainer: {
    marginHorizontal: spacing.xs,
  },
  leftIcon: {
    marginRight: spacing.xs,
    marginLeft: 0,
  },
  rightIcon: {
    marginLeft: spacing.xs,
    marginRight: 0,
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
