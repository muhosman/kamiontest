// Base API Response
export interface ApiResponse<T = any> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
  code?: number;
}

// API Error Response
export interface ApiError {
  message: string;
  code?: number;
  details?: any;
  stack?: string;
}

// Pagination
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

// HTTP Methods
export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

// Request Configuration
export interface RequestConfig {
  method: HttpMethod;
  url: string;
  data?: any;
  params?: Record<string, any>;
  headers?: Record<string, string>;
  timeout?: number;
  withCredentials?: boolean;
}

// Base API Service Interface
export interface ApiService {
  get<T>(url: string, params?: Record<string, any>): Promise<ApiResponse<T>>;
  post<T>(url: string, data?: any): Promise<ApiResponse<T>>;
  put<T>(url: string, data?: any): Promise<ApiResponse<T>>;
  patch<T>(url: string, data?: any): Promise<ApiResponse<T>>;
  delete<T>(url: string): Promise<ApiResponse<T>>;
}

// Loading States
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

// Generic async state
export interface AsyncState<T> extends LoadingState {
  data: T | null;
}

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/admin/login',
    REFRESH: '/api/auth/refresh',
    LOGOUT: '/api/auth/logout',
  },
  SHIPMENTS: {
    LIST: '/api/admin/shipment',
    DETAIL: (id: string) => `/api/admin/shipment/${id}`,
    CREATE: '/api/admin/shipment',
    UPDATE: (id: string) => `/api/admin/shipment/${id}`,
    DELETE: (id: string) => `/api/admin/shipment/${id}`,
  },
} as const;

// HTTP Status Codes
export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export type ApiEndpoints = typeof API_ENDPOINTS;
