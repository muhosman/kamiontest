import React from 'react';
import type { TextInputProps, ViewStyle, TextStyle } from 'react-native';

export type InputVariant = 'default' | 'filled' | 'outline';
export type InputSize = 'small' | 'medium' | 'large';

export interface InputProps extends Omit<TextInputProps, 'style'> {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  variant?: InputVariant;
  size?: InputSize;
  error?: string;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isPassword?: boolean;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
  errorStyle?: TextStyle;
  showError?: boolean;
  required?: boolean;
}
