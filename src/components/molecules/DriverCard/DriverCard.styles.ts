import { StyleSheet } from 'react-native';
import { colors, dimensions, spacing, typography } from '../../../theme';

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
    ...typography.h4,
    color: colors.primary[600],
    fontWeight: '600',
  },
  driverInfo: {
    flex: 1,
  },
  driverName: {
    ...typography.caption,
    color: colors.neutral[900],
    fontWeight: '800',
    marginBottom: spacing.xs,
  },
  driverPhone: {
    ...typography.caption,
    color: colors.neutral[800],
  },
  callButton: {
    backgroundColor: colors.success[500],
    borderRadius: 20,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
  },
  callIcon: {
    marginRight: spacing.xs,
  },
  callText: {
    ...typography.button,
    color: colors.background.primary,
    fontWeight: '600',
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
  walletIcon: {
    width: 24,
    height: 24,
    tintColor: colors.primary[800],
  },
  driverAmountContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: spacing.xs,
    alignItems: 'center',
  },
  driverAmountLabel: {
    ...typography.caption,
    color: colors.neutral[500],
    fontWeight: '600',
  },
  driverAmount: {
    ...typography.caption,
    color: colors.neutral[800],
    fontWeight: '800',
  },
});
