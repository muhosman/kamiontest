import { StyleSheet } from 'react-native';
import { colors, dimensions, fonts, spacing, typography } from '../../../theme';

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
  routeLabel: {
    fontWeight: fonts.weight.medium,
    marginRight: spacing.sm,
    marginLeft: spacing.sm,
  },
  routeItem: {
    flexDirection: 'row',
  },
  routeAddress: {
    fontWeight: fonts.weight.medium,
    flex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  dottedLine: {
    paddingVertical: spacing.sm,
    width: 1,
    marginLeft: 6,
    marginRight: spacing.sm,
    borderLeftWidth: 1,
    borderLeftColor: colors.primary[900],
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
    ...typography.caption,
    color: colors.black,
    fontWeight: fonts.weight.medium,
  },
});
