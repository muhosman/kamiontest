import { StyleSheet } from 'react-native';
import { colors, typography } from '../../../theme';
import type { TypographyVariants } from '../../../theme';

export const createTextStyles = (
  variant: TypographyVariants = 'body1',
  color?: string,
  align?: 'left' | 'center' | 'right' | 'justify',
) => {
  const variantStyle = typography[variant];
  const textColor = color || colors.text.primary;
  const textAlign = align || 'left';

  return StyleSheet.create({
    text: {
      ...variantStyle,
      color: textColor,
      textAlign,
    },
  });
};
