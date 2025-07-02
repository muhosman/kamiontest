import { baseApi } from './baseApi';
import { API_ENDPOINTS } from '../../types';
import type { LoginRequest, LoginResponse, ApiResponse } from '../../types';

class AuthApiService {
  async login(credentials: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    return await baseApi.post<LoginResponse>(
      API_ENDPOINTS.AUTH.LOGIN,
      credentials,
    );
  }

  async logout(): Promise<ApiResponse<void>> {
    return { success: true, data: undefined };
  }
}

export const authApi = new AuthApiService();
