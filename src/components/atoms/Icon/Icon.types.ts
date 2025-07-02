import type { ImageStyle, TextStyle } from 'react-native';

export interface IconProps {
  name:
    | 'back'
    | 'search'
    | 'mail'
    | 'lock'
    | 'unlock'
    | 'user'
    | 'wallet'
    | 'distance'
    | 'box'
    | 'close'
    | 'warning'
    | 'departure'
    | 'arrival';
  size?: number;
  color?: string;
  style?: ImageStyle | TextStyle;
  onPress?: () => void;
}
