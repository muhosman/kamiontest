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
    this.instance.interceptors.request.use(
      async config => {
        const token = await AsyncStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );

    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      async error => {
        const status = error.response?.status;
        switch (status) {
          case 401:
            await AsyncStorage.multiRemove([
              STORAGE_KEYS.AUTH_TOKEN,
              STORAGE_KEYS.REFRESH_TOKEN,
              STORAGE_KEYS.USER_DATA,
            ]);
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
      const response = await this.instance.get<ApiResponse<T>>(url, { params });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async post<T>(url: string, data?: any): Promise<ApiResponse<T>> {
    try {
      const response = await this.instance.post<ApiResponse<T>>(url, data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleError(error: any): Error {
    if (error.response) {
      const errorMessage = error.response.data?.message || error.message;
      return new Error(errorMessage);
    } else if (error.request) {
      return new Error(ERROR_MESSAGES.NETWORK);
    } else {
      return new Error(error.message || 'Bilinmeyen hata');
    }
  }

  async setAuthToken(token: string) {
    await AsyncStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
    this.instance.defaults.headers.Authorization = `Bearer ${token}`;
  }

  async clearAuthToken() {
    await AsyncStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    delete this.instance.defaults.headers.Authorization;
  }
}

export const baseApi = new BaseApiService();
