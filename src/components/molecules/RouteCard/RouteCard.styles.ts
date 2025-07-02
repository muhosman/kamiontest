import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
  },
  section: {
    marginBottom: spacing.sm,
  },
  lastSection: {
    marginBottom: 0,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginBottom: spacing.sm,
  },
  sectionHeaderLeft: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    flex: 1,
  },
  sectionIcon: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: spacing.sm,
  },
  sectionTitle: {
    ...typography.caption,
    color: colors.text.primary,
    fontWeight: '800',
    letterSpacing: 1.25,
  },
  stepCityContainer: {
    flexDirection: 'row',
    gap: 2,
  },

  departureIcon: {
    backgroundColor: colors.primary[800],
  },
  arrivalIcon: {
    backgroundColor: colors.error[500],
  },

  stepContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.xs,
    paddingLeft: spacing.lg,
  },
  stepNumber: {
    ...typography.caption,
    color: colors.neutral[500],
  },
  stepLocation: {
    ...typography.caption,
    color: colors.neutral[500],
  },
  stepCity: {
    ...typography.caption,
    color: colors.neutral[500],
  },
  stepDeparture: {
    ...typography.caption,
    fontWeight: '800',
    letterSpacing: 1.125,
    color: colors.primary[800],
    textAlign: 'right',
  },
  subStepDeparture: {
    ...typography.caption,
    fontWeight: '800',
    letterSpacing: 1.125,
    color: colors.primary[400],
    textAlign: 'right',
  },
  stepArrival: {
    ...typography.caption,
    fontWeight: '800',
    letterSpacing: 1.125,
    color: colors.black,
    textAlign: 'right',
  },
  arrivalContainer: {
    paddingLeft: spacing.lg,
  },
  arrivalLocation: {
    ...typography.body1,
    color: colors.text.primary,
    fontWeight: '500',
  },
  arrivalCity: {
    ...typography.caption,
    color: colors.text.secondary,
    marginTop: spacing.xs,
  },
});
