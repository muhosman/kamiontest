import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { loginAsync, logoutAsync, clearAuthError } from '../store/slices';
import type { RootState, AppDispatch } from '../store';
import type { LoginFormData } from '../types';

/**
 * useAuth Hook
 * Provides authentication state and actions
 */
export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Get auth state from Redux store
  const { user, token, isAuthenticated, isLoading, error } = useSelector(
    (state: RootState) => state.auth,
  );

  // Login function
  const login = useCallback(
    async (credentials: LoginFormData) => {
      try {
        await dispatch(loginAsync(credentials));
      } catch (error) {
        console.error('Login error:', error);
      }
    },
    [dispatch],
  );

  // Logout function
  const logout = useCallback(async () => {
    try {
      await dispatch(logoutAsync());
    } catch (error) {
      console.error('Logout error:', error);
    }
  }, [dispatch]);

  // Clear error function
  const clearError = useCallback(() => {
    dispatch(clearAuthError());
  }, [dispatch]);

  // Check if user has specific role
  const hasRole = useCallback(
    (role: string): boolean => {
      return user?.role === role;
    },
    [user],
  );

  // Check if user is admin
  const isAdmin = useCallback((): boolean => {
    return hasRole('admin');
  }, [hasRole]);

  return {
    // State
    user,
    token,
    isAuthenticated,
    isLoading,
    error,

    // Actions
    login,
    logout,
    clearError,

    // Utilities
    hasRole,
    isAdmin,
  };
};
