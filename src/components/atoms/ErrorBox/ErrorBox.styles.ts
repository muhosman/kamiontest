import { StyleSheet } from 'react-native';
import { colors, dimensions, spacing } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.error[50],
    borderColor: colors.error[500],
    borderWidth: 1,
    borderRadius: 8,
    padding: spacing.md,
    marginHorizontal: spacing.md,
    marginVertical: spacing.sm,
  },
  iconContainer: {
    borderRadius: dimensions.borderRadius.full,
    padding: 12,
    backgroundColor: colors.error[500],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.sm,
  },
  messageText: {
    flex: 1,
    marginRight: spacing.sm,
  },
  closeButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.error[50],
    justifyContent: 'center',
    alignItems: 'center',
  },
});
