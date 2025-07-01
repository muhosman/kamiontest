import type { ViewStyle } from 'react-native';
import type { Shipment } from '../../../types/shipment.types';

export interface ShipmentListProps {
  shipments: Shipment[];
  isLoading?: boolean;
  refreshing?: boolean;
  searchQuery?: string;
  onRefresh?: () => void;
  onShipmentPress?: (shipment: Shipment) => void;
  style?: ViewStyle;
}
