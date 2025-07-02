import { StyleSheet } from 'react-native';
import { colors, dimensions, fonts, spacing } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: dimensions.borderRadius['2xl'],
    padding: spacing.lg,
    marginBottom: spacing.sm,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  shipmentNumber: {
    fontWeight: fonts.weight.bold,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  headerRightDate: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.third[50],
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: dimensions.borderRadius['2xl'],
  },

  headerRightPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary[50],
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: dimensions.borderRadius['2xl'],
  },
  dateText: {
    fontWeight: fonts.weight.bold,
    marginRight: spacing.xs,
  },
  priceText: {
    fontWeight: fonts.weight.bold,
  },
  priceTextWithCurrency: {
    fontWeight: fonts.weight.medium,
  },
});
