import { StyleSheet } from 'react-native';
import { colors, fonts, spacing } from '../../../theme';

export const styles = StyleSheet.create({
  container: {},
  title: {
    marginBottom: spacing.md,
    fontWeight: fonts.weight.semibold,
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
    marginBottom: spacing.xs,
    fontWeight: fonts.weight.medium,
    letterSpacing: 0.5,
  },
  value: {
    fontWeight: fonts.weight.extrabold,
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
    fontWeight: fonts.weight.semibold,
    textAlign: 'center',
  },
});
