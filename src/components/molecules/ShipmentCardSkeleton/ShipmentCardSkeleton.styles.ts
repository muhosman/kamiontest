import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: spacing.lg,
    marginBottom: spacing.sm,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.lg,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  routeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.sm,
  },
  routeInfo: {
    flex: 2 / 3,
  },
  routeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  dottedLine: {
    width: 2,
    height: 20,
    marginLeft: 5,
    marginRight: spacing.sm,
  },
  stopCountContainer: {
    flex: 1 / 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: spacing.lg,
  },
});
