import type { ViewStyle } from 'react-native';

export interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  rightElement?: React.ReactNode;
  style?: ViewStyle;
}
