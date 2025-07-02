import { Shipment } from '../../../types/shipment.types';

export interface ShipmentDetailProps {
  shipment: Shipment;
  onGetDirections?: () => void;
  onCallDriver?: () => void;
}
