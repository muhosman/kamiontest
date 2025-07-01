import { StyleSheet } from 'react-native';
import { colors, dimensions, spacing } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: dimensions.borderRadius.lg,
    borderWidth: dimensions.borderWidth.base,
    borderColor: colors.border.light,
    paddingHorizontal: spacing.md,
    minHeight: dimensions.searchBar,
  },
  focused: {
    borderColor: colors.primary[500],
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    marginRight: spacing.sm,
  },
  searchIcon: {
    fontSize: 18,
    color: colors.neutral[500],
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.text.primary,
    paddingVertical: spacing.sm,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: spacing.sm,
  },
  rightIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: spacing.sm,
  },
  clearButton: {
    padding: spacing.xs,
    marginLeft: spacing.xs,
  },
  clearIcon: {
    fontSize: 16,
    color: colors.neutral[500],
  },
  loadingContainer: {
    marginLeft: spacing.sm,
  },
});
