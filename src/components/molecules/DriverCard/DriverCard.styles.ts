import { StyleSheet } from 'react-native';
import { colors, dimensions, fonts, spacing } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 50,
    height: 50,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.third[300],
    padding: spacing.md,
    marginRight: spacing.md,
    borderRadius: dimensions.borderRadius.full,
  },
  circle: {
    position: 'absolute',
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
    borderRadius: dimensions.borderRadius.full,
    backgroundColor: colors.third[200],
  },
  avatar: {
    width: 40,
    height: 40,
  },
  avatarPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary[100],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  avatarText: {
    fontWeight: fonts.weight.semibold,
  },
  driverInfo: {
    flex: 1,
  },
  driverName: {
    fontWeight: fonts.weight.extrabold,
    marginBottom: spacing.xs,
  },

  walletInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  walletIconContainer: {
    backgroundColor: colors.primary[50],
    padding: spacing.sm,
    borderRadius: dimensions.borderRadius.full,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  driverAmountContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: spacing.xs,
    alignItems: 'center',
  },
  driverAmountLabel: {
    fontWeight: fonts.weight.semibold,
  },
  driverAmount: {
    fontWeight: fonts.weight.extrabold,
  },
});
