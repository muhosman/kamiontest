import { StyleSheet } from 'react-native';
import { colors, dimensions, spacing, typography } from '../../../theme';
import type { InputVariant, InputSize } from './Input.types';

export const createInputStyles = (
  variant: InputVariant = 'default',
  size: InputSize = 'medium',
  hasError: boolean = false,
  disabled: boolean = false,
  isFocused: boolean = false,
) => {
  void variant;
  const sizeStyles = {
    small: {
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      minHeight: dimensions.button.small,
      fontSize: typography.body2.fontSize,
    },
    medium: {
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
      minHeight: dimensions.input,
      fontSize: typography.body1.fontSize,
    },
    large: {
      paddingHorizontal: spacing.xl,
      paddingVertical: spacing.lg,
      minHeight: dimensions.button.large,
      fontSize: typography.h6.fontSize,
    },
  };

  const getBorderColor = () => {
    if (hasError) return colors.error[500];
    if (disabled) return colors.neutral[300];
    if (isFocused) return colors.primary[500];
    return colors.neutral[200];
  };

  const getBackgroundColor = () => {
    if (disabled) return colors.neutral[100];
    return colors.neutral[50];
  };

  const baseStyle = {
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
  };

  return StyleSheet.create({
    container: {
      marginBottom: spacing.sm,
    },
    inputContainer: {
      ...baseStyle,
      ...sizeStyles[size],
      backgroundColor: getBackgroundColor(),
      borderColor: getBorderColor(),
      opacity: disabled ? 0.6 : 1,
    },
    input: {
      flex: 1,
      color: disabled ? colors.neutral[500] : colors.text.primary,
      fontSize: sizeStyles[size].fontSize,
      includeFontPadding: false,
      textAlignVertical: 'center',
      padding: 0,
    },
  });
};

export const styles = StyleSheet.create({
  label: {
    ...typography.body1,
    color: colors.text.primary,
    marginBottom: spacing.xs,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  requiredIndicator: {
    color: colors.error[500],
    marginLeft: spacing.xs / 2,
  },
  iconContainer: {
    paddingHorizontal: spacing.xs,
  },
  leftIcon: {
    marginRight: spacing.xs,
  },
  rightIcon: {
    marginLeft: spacing.xs,
  },
  errorText: {
    ...typography.caption,
    color: colors.error[500],
    marginTop: spacing.xs,
    marginLeft: spacing.xs,
  },
  eyeIcon: {
    padding: spacing.xs,
  },
  passwordToggleIcon: {
    width: 24,
    height: 24,
    tintColor: colors.primary[800],
  },
});
