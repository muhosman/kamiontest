import axios, { AxiosInstance, AxiosResponse } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_CONFIG, STORAGE_KEYS, ERROR_MESSAGES } from '../../utils';
import type { ApiResponse } from '../../types';

class BaseApiService {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: API_CONFIG.BASE_URL,
      timeout: API_CONFIG.TIMEOUT,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor - Add auth token
    this.instance.interceptors.request.use(
      async config => {
        console.log('🔐 Request Interceptor: Başlatıldı');
        const token = await AsyncStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
        if (token) {
          console.log('🔐 Token bulundu, Authorization header ekleniyor');
          config.headers.Authorization = `Bearer ${token}`;
        } else {
          console.log('🔐 Token bulunamadı');
        }
        console.log('🔐 Final request config:', {
          url: config.url,
          method: config.method,
          headers: config.headers,
          params: config.params,
        });
        return config;
      },
      error => {
        console.error('🔐 Request Interceptor Error:', error);
        return Promise.reject(error);
      },
    );

    // Response interceptor - Handle common errors
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        console.log(
          '📥 Response Interceptor: Success response alındı',
          response.data,
        );
        return response;
      },
      async error => {
        console.log(
          '📥 Response Interceptor: Error response alındı',
          error.response,
        );
        const status = error.response?.status;
        switch (status) {
          case 401:
            // Unauthorized - Clear token and redirect to login
            await AsyncStorage.multiRemove([
              STORAGE_KEYS.AUTH_TOKEN,
              STORAGE_KEYS.REFRESH_TOKEN,
              STORAGE_KEYS.USER_DATA,
            ]);
            // You can dispatch a logout action here if needed
            break;
          case 403:
            error.message = ERROR_MESSAGES.FORBIDDEN;
            break;
          case 404:
            error.message = ERROR_MESSAGES.NOT_FOUND;
            break;
          case 500:
            error.message = ERROR_MESSAGES.SERVER_ERROR;
            break;
          default:
            if (!error.response) {
              error.message = ERROR_MESSAGES.NETWORK;
            }
        }

        return Promise.reject(error);
      },
    );
  }

  async get<T>(
    url: string,
    params?: Record<string, any>,
  ): Promise<ApiResponse<T>> {
    try {
      console.log('🌐 API GET Request:', { url, params });
      const response = await this.instance.get<ApiResponse<T>>(url, { params });
      console.log('🌐 API GET Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('🌐 API GET Error:', error);
      throw this.handleError(error);
    }
  }

  async post<T>(url: string, data?: any): Promise<ApiResponse<T>> {
    try {
      console.log('API POST Request:', { url, data });
      const response = await this.instance.post<ApiResponse<T>>(url, data);
      console.log('API POST Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('API POST Error:', error);
      throw this.handleError(error);
    }
  }

  async put<T>(url: string, data?: any): Promise<ApiResponse<T>> {
    try {
      const response = await this.instance.put<ApiResponse<T>>(url, data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async patch<T>(url: string, data?: any): Promise<ApiResponse<T>> {
    try {
      const response = await this.instance.patch<ApiResponse<T>>(url, data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async delete<T>(url: string): Promise<ApiResponse<T>> {
    try {
      const response = await this.instance.delete<ApiResponse<T>>(url);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleError(error: any): Error {
    if (error.response) {
      // Server responded with error status
      const errorMessage = error.response.data?.message || error.message;
      return new Error(errorMessage);
    } else if (error.request) {
      // Network error
      return new Error(ERROR_MESSAGES.NETWORK);
    } else {
      // Something else happened
      return new Error(error.message || 'Bilinmeyen hata');
    }
  }

  // Update auth token
  async setAuthToken(token: string) {
    await AsyncStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
    this.instance.defaults.headers.Authorization = `Bearer ${token}`;
  }

  // Clear auth token
  async clearAuthToken() {
    await AsyncStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    delete this.instance.defaults.headers.Authorization;
  }
}

// Create and export singleton instance
export const baseApi = new BaseApiService();
