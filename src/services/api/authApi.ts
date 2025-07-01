import { baseApi } from './baseApi';
import { API_ENDPOINTS } from '../../types';
import type {
  LoginRequest,
  LoginResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  ApiResponse,
} from '../../types';

class AuthApiService {
  /**
   * Login user with email and password
   */
  async login(credentials: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    return await baseApi.post<LoginResponse>(
      API_ENDPOINTS.AUTH.LOGIN,
      credentials,
    );
  }

  /**
   * Refresh authentication token
   */
  async refreshToken(
    request: RefreshTokenRequest,
  ): Promise<ApiResponse<RefreshTokenResponse>> {
    return await baseApi.post<RefreshTokenResponse>(
      API_ENDPOINTS.AUTH.REFRESH,
      request,
    );
  }

  /**
   * Logout user
   */
  async logout(): Promise<ApiResponse<void>> {
    return await baseApi.post<void>(API_ENDPOINTS.AUTH.LOGOUT);
  }
}

// Create and export singleton instance
export const authApi = new AuthApiService();
