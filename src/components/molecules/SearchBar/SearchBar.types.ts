import type { ViewStyle } from 'react-native';

export interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  disabled?: boolean;
  isLoading?: boolean;
  debounceDelay?: number;
  style?: ViewStyle;
  autoFocus?: boolean;
  onClear?: () => void;
}
