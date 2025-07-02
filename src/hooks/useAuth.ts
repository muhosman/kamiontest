import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { loginAsync, logoutAsync, clearAuthError } from '../store/slices';
import type { RootState, AppDispatch } from '../store';
import type { LoginFormData } from '../types';

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { user, token, isAuthenticated, isLoading, error } = useSelector(
    (state: RootState) => state.auth,
  );

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

  const logout = useCallback(async () => {
    try {
      await dispatch(logoutAsync());
    } catch (error) {
      console.error('Logout error:', error);
    }
  }, [dispatch]);

  const clearError = useCallback(() => {
    dispatch(clearAuthError());
  }, [dispatch]);

  const hasRole = useCallback(
    (role: string): boolean => {
      return user?.role === role;
    },
    [user],
  );

  const isAdmin = useCallback((): boolean => {
    return hasRole('admin');
  }, [hasRole]);

  return {
    user,
    token,
    isAuthenticated,
    isLoading,
    error,

    login,
    logout,
    clearError,

    hasRole,
    isAdmin,
  };
};
