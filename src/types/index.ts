// Auth types
export type {
  LoginRequest,
  LoginResponse,
  User,
  AuthState,
  RefreshTokenRequest,
  RefreshTokenResponse,
  LoginFormData,
  LoginFormErrors,
} from './auth.types';

// Shipment types
export type {
  Shipment,
  Location,
  CargoDetails,
  VehicleDetails,
  DriverDetails,
  CustomerInfo,
  ShipmentState,
  ShipmentFilters,
  PaginationInfo,
  GetShipmentsRequest,
  GetShipmentsResponse,
} from './shipment.types';

export { ShipmentStatus, VehicleType } from './shipment.types';

// API types
export type {
  ApiResponse,
  ApiError,
  PaginatedResponse,
  RequestConfig,
  ApiService,
  LoadingState,
  AsyncState,
  ApiEndpoints,
} from './api.types';

export { HttpMethod, HttpStatusCode, API_ENDPOINTS } from './api.types';

// Navigation types (will be uncommented after installing packages)
// export type {
//   RootStackParamList,
//   AuthStackParamList,
//   MainStackParamList,
//   SplashScreenProps,
//   LoginScreenProps,
//   ShipmentListScreenProps,
//   ShipmentDetailScreenProps,
//   NavigationState,
//   ScreenOptions,
// } from './navigation.types';
