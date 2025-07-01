import { StyleSheet } from 'react-native';
import { spacing, colors } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    gap: spacing.xl,
  },
  inputContainer: {
    gap: spacing.lg,
  },
  buttonContainer: {
    marginTop: spacing.lg,
  },
  emailIcon: {
    width: 24,
    height: 24,
    tintColor: colors.primary[800],
  },
  loginButton: {
    backgroundColor: colors.primary[900],
    paddingVertical: 14,
  },
  loginButtonText: {
    color: colors.white,
  },
});
