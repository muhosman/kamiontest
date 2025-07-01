import type { ViewStyle, TextStyle } from 'react-native';

export interface BadgeProps {
  text: string;
  variant?: 'default' | 'primary' | 'secondary' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  style?: ViewStyle;
  textStyle?: TextStyle;
}
