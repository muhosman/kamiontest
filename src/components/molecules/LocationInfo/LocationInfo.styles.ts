import { StyleSheet } from 'react-native';
import { colors, dimensions, fonts, spacing } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  routeInfo: {
    flex: 1,
  },
  routeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  routeLabel: {
    fontSize: fonts.size.xs,
    color: colors.text.secondary,
    fontWeight: fonts.weight.medium,
    width: 40,
    marginLeft: spacing.sm,
  },
  routeAddress: {
    fontSize: fonts.size.sm,
    color: colors.text.primary,
    fontWeight: fonts.weight.medium,
    flex: 1,
  },
  dottedLine: {
    width: 2,
    height: 20,
    marginLeft: 5,
    marginRight: spacing.sm,
    borderLeftWidth: 1,
    borderLeftColor: colors.neutral[700],
    borderStyle: 'dotted',
  },
  stopCountContainer: {},
  stopCountBadge: {
    borderRadius: dimensions.borderRadius.full,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    backgroundColor: colors.neutral[100],
  },
  stopCountText: {
    fontSize: fonts.size.xs,
    color: colors.black,
    fontWeight: fonts.weight.medium,
  },
});
