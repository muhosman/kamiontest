import { StyleSheet } from 'react-native';
import { colors, spacing, fonts } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'colors.neutral[50]',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: spacing.md,
    paddingTop: spacing.lg,
    paddingBottom: spacing.sm,
    backgroundColor: colors.background.primary,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    color: colors.text.primary,
    fontWeight: fonts.weight.bold as any,
    marginBottom: spacing.xs,
  },
  welcomeText: {
    color: colors.text.secondary,
  },
  searchContainer: {
    padding: spacing.lg,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing['6xl'],
  },
  shipmentItem: {
    backgroundColor: colors.surface,
    borderRadius: spacing.sm,
    padding: spacing.md,
    marginVertical: spacing.xs,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  shipmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  shipmentId: {
    color: colors.primary[800],
    fontWeight: fonts.weight.semibold as any,
  },
  statusBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: spacing.xs,
  },
  statusText: {
    color: colors.white,
    fontWeight: fonts.weight.medium as any,
    fontSize: 12,
  },
  shipmentInfo: {
    marginBottom: spacing.md,
  },
  infoLabel: {
    color: colors.text.secondary,
    marginBottom: spacing.xs,
  },
  infoValue: {
    color: colors.text.primary,
    fontWeight: fonts.weight.medium as any,
  },
  detailButton: {
    alignSelf: 'flex-start',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing['6xl'],
    paddingVertical: spacing['6xl'],
  },
  emptyTitle: {
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  emptySubtitle: {
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: 20,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  loadingText: {
    marginTop: spacing.sm,
    color: colors.text.secondary,
  },
  errorContainer: {
    position: 'absolute',
    bottom: 32,
    left: spacing.lg,
    right: spacing.lg,
    backgroundColor: colors.error[500],
    padding: spacing.lg,
    borderRadius: 12,
    alignItems: 'center',
  },
  errorText: {
    color: colors.white,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
});
