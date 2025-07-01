import type { ImageStyle, TextStyle } from 'react-native';

export interface IconProps {
  name:
    | 'back'
    | 'search'
    | 'mail'
    | 'lock'
    | 'unlock'
    | 'departure'
    | 'arrival';
  size?: number;
  color?: string;
  style?: ImageStyle | TextStyle;
  onPress?: () => void;
}
