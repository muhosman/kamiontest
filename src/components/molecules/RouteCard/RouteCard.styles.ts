import { StyleSheet } from 'react-native';
import { colors, fonts, spacing } from '../../../theme';

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
    fontWeight: fonts.weight.extrabold,
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
  stepDeparture: {
    fontWeight: fonts.weight.extrabold,
    letterSpacing: 1.125,
  },
  stepArrival: {
    fontWeight: fonts.weight.extrabold,
    letterSpacing: 1.125,
  },
  arrivalContainer: {
    paddingLeft: spacing.lg,
  },
});
