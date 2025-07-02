import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  content: {
    flex: 1,
    padding: spacing.md,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.lg,
  },
  errorText: {
    ...typography.body1,
    color: colors.error[500],
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  detailCard: {
    backgroundColor: colors.background.secondary,
    borderRadius: 12,
    padding: spacing.lg,
    marginBottom: spacing.md,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  shipmentHeader: {
    marginBottom: spacing.lg,
  },
  shipmentId: {
    ...typography.h2,
    color: colors.primary[600],
    marginBottom: spacing.xs,
  },
  shipmentCode: {
    ...typography.body2,
    color: colors.neutral[600],
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.text.primary,
    marginBottom: spacing.md,
    marginTop: spacing.lg,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.sm,
  },
  infoLabel: {
    ...typography.body2,
    color: colors.text.secondary,
    flex: 1,
  },
  infoValue: {
    ...typography.body1,
    color: colors.text.primary,
    flex: 2,
    textAlign: 'right',
  },
  addressContainer: {
    backgroundColor: colors.neutral[50],
    borderRadius: 8,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  addressTitle: {
    ...typography.h4,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  addressText: {
    ...typography.body2,
    color: colors.text.secondary,
    lineHeight: 20,
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 16,
    marginBottom: spacing.md,
  },
  statusText: {
    ...typography.caption,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  priceContainer: {
    backgroundColor: colors.success[50],
    borderRadius: 8,
    padding: spacing.md,
    alignItems: 'center',
  },
  priceLabel: {
    ...typography.body2,
    color: colors.success[700],
    marginBottom: spacing.xs,
  },
  priceValue: {
    ...typography.h2,
    color: colors.success[700],
    fontWeight: 'bold',
  },
});
