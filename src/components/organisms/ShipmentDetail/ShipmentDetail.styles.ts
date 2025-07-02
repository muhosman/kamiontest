import { StyleSheet } from 'react-native';
import {
  colors,
  dimensions,
  fonts,
  globalStyles,
  spacing,
  typography,
} from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    backgroundColor: 'white',
    borderRadius: dimensions.borderRadius.lg,
    ...globalStyles.shadowSm,
  },
  headerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  timeIcon: {
    width: 20,
    height: 20,
    marginRight: spacing.sm,
    tintColor: colors.third[400],
  },
  routeTitle: {
    ...typography.h5,
    color: colors.text.primary,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.third[50],
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 20,
  },
  dateText: {
    ...typography.body2,
    color: colors.third[400],
    fontWeight: fonts.weight.bold,
    marginRight: spacing.sm,
  },
  timeText: {
    ...typography.body2,
    color: colors.third[300],
    fontWeight: fonts.weight.light,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.text.primary,
    marginBottom: spacing.md,
    marginTop: spacing.lg,
  },
  requirementsCard: {
    backgroundColor: colors.background.secondary,
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  requirementRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
    paddingBottom: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral[200],
  },
  requirementLabel: {
    ...typography.body2,
    color: colors.text.secondary,
    fontWeight: '600',
    flex: 1,
  },
  requirementValue: {
    ...typography.body1,
    color: colors.text.primary,
    textAlign: 'right',
    flex: 1,
  },
  statusContainer: {
    backgroundColor: colors.success[50],
    borderRadius: 12,
    padding: spacing.md,
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  statusText: {
    ...typography.body1,
    color: colors.success[700],
    fontWeight: '600',
  },
});
