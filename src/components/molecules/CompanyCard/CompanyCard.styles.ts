import { StyleSheet } from 'react-native';
import { colors, dimensions, fonts, spacing } from '../../../theme';

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
    flex: 1,
    fontWeight: fonts.weight.normal,
  },
});
