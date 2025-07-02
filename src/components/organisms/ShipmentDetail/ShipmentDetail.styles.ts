import { StyleSheet } from 'react-native';
import {
  colors,
  dimensions,
  fonts,
  globalStyles,
  spacing,
} from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    borderRadius: dimensions.borderRadius.lg,
    backgroundColor: colors.white,
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
  dateTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.third[50],
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 20,
  },
  dateText: {
    fontWeight: fonts.weight.bold,
    marginRight: spacing.sm,
  },
  timeText: {
    fontWeight: fonts.weight.light,
  },
});
