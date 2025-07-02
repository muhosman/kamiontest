import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { spacing } from './spacing';
import { dimensions } from './dimensions';
import { typography } from './fonts';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },

  safeArea: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },

  contentContainer: {
    flexGrow: 1,
    padding: spacing.container,
  },

  flex1: {
    flex: 1,
  },

  flexRow: {
    flexDirection: 'row',
  },

  flexColumn: {
    flexDirection: 'column',
  },

  alignCenter: {
    alignItems: 'center',
  },

  justifyCenter: {
    justifyContent: 'center',
  },

  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  spaceBetween: {
    justifyContent: 'space-between',
  },

  textCenter: {
    textAlign: 'center',
  },

  textLeft: {
    textAlign: 'left',
  },

  textRight: {
    textAlign: 'right',
  },

  card: {
    backgroundColor: colors.white,
    borderRadius: dimensions.borderRadius.lg,
    padding: spacing.card,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: dimensions.shadow.sm,
    },
    shadowOpacity: 0.1,
    shadowRadius: dimensions.shadow.md,
    elevation: 3,
  },

  buttonBase: {
    borderRadius: dimensions.borderRadius.md,
    padding: spacing.button,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: dimensions.button.medium,
  },

  inputBase: {
    borderWidth: dimensions.borderWidth.base,
    borderColor: colors.border.light,
    borderRadius: dimensions.borderRadius.md,
    padding: spacing.input,
    fontSize: typography.body1.fontSize,
    color: colors.text.primary,
    backgroundColor: colors.white,
    minHeight: dimensions.input,
  },

  divider: {
    height: dimensions.borderWidth.base,
    backgroundColor: colors.border.light,
    marginVertical: spacing.md,
  },

  shadowSm: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },

  shadowMd: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },

  shadowLg: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
});
