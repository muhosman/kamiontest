import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { authApi } from '../../services/api';
import { storageService } from '../../services/storage/AsyncStorage';
import type { AuthState, LoginFormData, User } from '../../types';

// Initial state
const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

// Async thunks
export const loginAsync = createAsyncThunk(
  'auth/login',
  async (credentials: LoginFormData, { rejectWithValue }) => {
    try {
      console.log('Login credentials:', credentials);
      const response = await authApi.login(credentials);

      // Debug: API response'unu logla
      console.log('Login API Response:', response);

      if (response.success && response.data) {
        // Store token
        if (response.data.token) {
          await storageService.setAuthToken(response.data.token);
        }

        // Store user data only if it exists
        if (response.data.user) {
          await storageService.setUserData(response.data.user);
        }

        // Store refresh token if exists
        if (response.data.refreshToken) {
          await storageService.setRefreshToken(response.data.refreshToken);
        }

        return response.data;
      } else {
        return rejectWithValue(response.message || 'Giriş başarısız');
      }
    } catch (error) {
      console.error('Login Error:', error);
      const errorMessage =
        error instanceof Error ? error.message : 'Giriş hatası';
      return rejectWithValue(errorMessage);
    }
  },
);

export const logoutAsync = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      // Try to call logout API
      try {
        await authApi.logout();
      } catch (error) {
        // Continue with logout even if API call fails
        console.warn('Logout API call failed:', error);
      }

      // Clear local storage
      await storageService.clearAuthData();

      return;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Çıkış hatası';
      return rejectWithValue(errorMessage);
    }
  },
);

export const checkAuthAsync = createAsyncThunk(
  'auth/checkAuth',
  async (_, { rejectWithValue }) => {
    try {
      const token = await storageService.getAuthToken();
      const userData = await storageService.getUserData();

      if (token && userData) {
        return {
          token,
          user: userData,
        };
      } else {
        // Clear any partial data
        await storageService.clearAuthData();
        return rejectWithValue('Oturum bulunamadı');
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Oturum kontrol hatası';
      return rejectWithValue(errorMessage);
    }
  },
);

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: state => {
      state.error = null;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
    logout: state => {
      // Basit logout - sadece state'i temizle
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      state.isLoading = false;

      // Storage'ı da temizle (async olmadan)
      storageService.clearAuthData().catch(console.error);
    },
  },
  extraReducers: builder => {
    // Login
    builder
      .addCase(loginAsync.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user || null;
        state.token = action.payload.token || null;
        state.error = null;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        state.error = action.payload as string;
      });

    // Logout
    builder
      .addCase(logoutAsync.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutAsync.fulfilled, state => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        state.error = null;
      })
      .addCase(logoutAsync.rejected, (state, action) => {
        state.isLoading = false;
        // Still clear auth state even if logout failed
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        state.error = action.payload as string;
      });

    // Check auth
    builder
      .addCase(checkAuthAsync.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(checkAuthAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(checkAuthAsync.rejected, state => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        state.error = null; // Don't show error for auth check failures
      });
  },
});

// Export actions
export const { clearError, setUser, updateUser, logout } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
