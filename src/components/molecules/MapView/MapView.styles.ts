import { StyleSheet } from 'react-native';
import { dimensions, spacing } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    height: 120,
    marginBottom: spacing.md,
    overflow: 'hidden',
    position: 'relative',
    borderRadius: dimensions.borderRadius.lg,
  },
  mapPlaceholder: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  routeOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
  },
});
