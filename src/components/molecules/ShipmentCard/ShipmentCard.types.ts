import type { ViewStyle } from 'react-native';
import type { Shipment } from '../../../types/shipment.types';

export interface ShipmentCardProps {
  shipment: Shipment;
  onPress?: (shipment: Shipment) => void;
  style?: ViewStyle;
}
