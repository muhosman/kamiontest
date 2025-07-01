import React from 'react';
import type { TextProps as RNTextProps, TextStyle } from 'react-native';
import type { TypographyVariants } from '../../../theme';

export interface TextProps extends RNTextProps {
  variant?: TypographyVariants;
  color?: string;
  align?: 'left' | 'center' | 'right' | 'justify';
  children: React.ReactNode;
  style?: TextStyle;
}
