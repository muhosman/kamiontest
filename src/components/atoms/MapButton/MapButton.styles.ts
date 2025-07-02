import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary[800],
    borderRadius: 25,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  disabled: {
    backgroundColor: colors.neutral[300],
  },
  icon: {
    marginRight: spacing.md,
    tintColor: colors.white,
    width: 24,
    height: 24,
  },
  text: {
    ...typography.button,
    marginLeft: spacing.md,
    color: colors.background.primary,
    fontWeight: '800',
    letterSpacing: 1.25,
  },
  textDisabled: {
    color: colors.neutral[500],
  },
});
