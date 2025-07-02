import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.secondary,
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftSection: {
    flex: 1,
  },
  label: {
    ...typography.body2,
    color: colors.text.secondary,
    marginBottom: spacing.xs,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amount: {
    ...typography.h3,
    color: colors.success[500],
    fontWeight: 'bold',
  },
  currency: {
    ...typography.body1,
    color: colors.success[500],
    marginLeft: spacing.xs,
  },
  icon: {
    backgroundColor: colors.success[50],
    padding: spacing.sm,
    borderRadius: 8,
  },
});
