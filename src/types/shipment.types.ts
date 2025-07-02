export interface Address {
  id: number;
  name: string;
  type: number;
  type_value: string;
  city: {
    id: number;
    name: string;
    lat: string;
    long: string;
    country_id: number;
  };
  district: {
    id: number;
    city_id: number;
    name: string;
    lat: string;
    long: string;
  } | null;
  neighborhood: any;
  address: string;
  building_number: string | null;
  for_directions: string | null;
  lat: string;
  lng: string;
  responsible: string;
  responsible_phone: string;
  responsible_title: string;
  delivery_address: boolean;
  created_at: number;
}

export interface Shipper {
  id: number;
  name: string;
  tax_number: string;
  tax_office: string;
  sector: {
    id: number;
    name: string;
  };
  settings?: any;
  phone: string;
  created_at: number;
}

export interface Currency {
  id: number;
  name: string;
  code: string;
  value: string;
  updated_at?: string;
}

export interface ShipmentPrice {
  shipper: {
    id: number;
    freight_price: string;
    freight_price_tax_free: string;
    status: number;
    status_value: string;
    price_details: {
      base_price: string;
      base_currency: Currency;
      converting_currency: Currency;
      converting_exchange: string;
    };
    giving_price_user?: {
      id: number;
      name: string;
      surname: string;
    };
    price_confirming_user?: {
      id: number;
      name: string;
      surname: string;
      email: string;
      phone: string;
    };
    created_at: number;
  };
  carrier?: {
    id: number;
    carrier_price: string;
    carrier_price_tax_free: string;
    carrier_cash_price_tax_free: string;
    cash_payment: boolean;
    price_details: {
      base_price: string;
      base_currency: Currency;
      converting_currency: Currency;
      converting_exchange: string;
    };
    giving_price_user?: {
      id: number;
      name: string;
      surname: string;
    };
    created_at: number;
  };
  offers?: {
    carrier_price_offer: string;
    carrier_price_offer_currency: string;
    carrier_target_price_tax_free: string;
    carrier_target_price_currency: string;
  };
  kamion?: {
    kamion_share_percent: string;
    kamion_share: string;
    kamion_share_currency: string;
  };
}

export interface LatestStatus {
  id: number;
  type: number;
  type_value: string;
  created_at: number;
}

export interface ShipmentDetail {
  id: number;
  shipment_id: number;
  vehicle_type: number;
  vehicle_type_value: string;
  group_type: number;
  group_type_value: string | null;
  trailer_type: number[];
  trailer_type_value: string[];
  base_type: number;
  base_type_value: string;
  tonnage: {
    min: number;
    max: number;
  };
  type_of_goods: string;
  way_of_loading: number;
  way_of_loading_value: string;
  commodity_avg_value: string;
  package_type: number;
  package_type_value: string;
  distance: number;
  toll: string;
  fuel_liter: string;
  departure_km: number | null;
  delivery_km: number | null;
  empty_km: number | null;
  is_insured: boolean;
}

export interface TimeInterval {
  start: string;
  end: string;
}

export interface Creator {
  id: number;
  tckn: string | null;
  name: string;
  surname: string;
  email: string;
  phone: string;
  type: number;
  type_value: string;
  status: number;
  status_value: string;
  phone_verified_at: number;
  email_verified_at: number;
  avatar: string | null;
  creator: any;
  created_at: number;
  updated_at: number;
}

export interface Shipment {
  id: number;
  customer_order_number: string | null;
  shipper: Shipper;
  carrier: any;
  driver: any;
  vehicle: any;
  code: string;
  trailer: any;
  departure_address: Address;
  delivery_address: Address;
  pick_up_date: number;
  assigned_time: any;
  has_additional_invoice: boolean;
  time_interval: TimeInterval;
  delivery_date: any;
  delivery_time: any;
  invoice_ready: boolean;
  type: number;
  type_value: string;
  status: number;
  is_invoice_created: boolean;
  latest_status: LatestStatus;
  planned_transport: any;
  payment_type: any;
  payment_status: any;
  carrier_invoice_upload: boolean;
  carrier_payment: boolean;
  carrier_payment_status: number;
  carrier_payment_status_value: string;
  carrier_payment_date: string;
  shipment_detail: ShipmentDetail;
  creator: Creator;
  driver_last_location: any;
  price: ShipmentPrice;
  view_count: number;
  viewer_count: number;
  carrier_payment_receipt_upload: boolean;
  created_at: number;
  load_reception: any;
  load_reception_value: any;
  boosted: boolean;
}

export enum ShipmentStatus {
  PENDING = 1,
  CONFIRMED = 2,
  IN_PROGRESS = 3,
  PICKED_UP = 4,
  IN_TRANSIT = 5,
  DELIVERED = 6,
  CANCELLED = 7,
  DELAYED = 8,
}

export enum VehicleType {
  TIR = 1,
  KAMYON = 2,
  KAMYONET = 3,
  MINIBUS = 4,
}

export interface ShipmentState {
  shipments: Shipment[];
  isLoading: boolean;
  error: string | null;
}

export interface GetShipmentsRequest {}

export interface GetShipmentsResponse {
  data: Shipment[];
  success: boolean;
  message?: string;
}
