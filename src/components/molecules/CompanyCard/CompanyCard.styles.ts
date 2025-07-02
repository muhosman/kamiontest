import { StyleSheet } from 'react-native';
import { colors, dimensions, spacing, typography } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: colors.third[50],
    borderRadius: dimensions.borderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  iconText: {
    fontSize: 20,
  },
  companyName: {
    ...typography.body1,
    color: colors.neutral[800],
    flex: 1,
    fontWeight: '400',
  },
});
