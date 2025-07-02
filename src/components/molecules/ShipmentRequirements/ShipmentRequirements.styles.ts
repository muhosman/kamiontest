import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../../theme';

export const styles = StyleSheet.create({
  container: {},
  title: {
    ...typography.body1,
    color: colors.text.primary,
    marginBottom: spacing.md,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    marginBottom: spacing.lg,
  },
  column: {
    flex: 1,
  },
  rightColumn: {
    flex: 1,
    paddingLeft: spacing.lg,
  },
  label: {
    ...typography.caption,
    color: colors.text.secondary,
    marginBottom: spacing.xs,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  value: {
    ...typography.body2,
    color: colors.text.primary,
    fontWeight: '800',
  },
  fullWidthRow: {
    marginBottom: spacing.md,
  },
  statusContainer: {
    width: '100%',
    marginBottom: spacing.md,
    backgroundColor: colors.success[50],
    borderRadius: 25,
    paddingVertical: spacing.sm,
    alignSelf: 'center',
  },
  statusText: {
    ...typography.body2,
    color: colors.success[700],
    fontWeight: '600',
    textAlign: 'center',
  },
});
