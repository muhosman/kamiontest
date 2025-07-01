import type { ViewStyle } from 'react-native';

export interface LocationInfoProps {
  departureCity: string;
  departureDistrict: string;
  arrivalCity: string;
  arrivalDistrict: string;
  stopCount?: number;
  style?: ViewStyle;
}
