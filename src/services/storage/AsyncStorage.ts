import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../../utils';
import type { User } from '../../types';

class StorageService {
  /**
   * Generic methods for storing any data
   */
  async setItem(key: string, value: string): Promise<void> {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error('Error setting item in storage:', error);
      throw error;
    }
  }

  async getItem(key: string): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.error('Error getting item from storage:', error);
      return null;
    }
  }

  async removeItem(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing item from storage:', error);
      throw error;
    }
  }

  async clear(): Promise<void> {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Error clearing storage:', error);
      throw error;
    }
  }

  /**
   * Auth token methods
   */
  async setAuthToken(token: string): Promise<void> {
    if (!token) {
      console.warn('Attempting to set null/undefined auth token, skipping...');
      return;
    }
    await this.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
  }

  async getAuthToken(): Promise<string | null> {
    return await this.getItem(STORAGE_KEYS.AUTH_TOKEN);
  }

  async removeAuthToken(): Promise<void> {
    await this.removeItem(STORAGE_KEYS.AUTH_TOKEN);
  }

  /**
   * Refresh token methods
   */
  async setRefreshToken(token: string): Promise<void> {
    if (!token) {
      console.warn(
        'Attempting to set null/undefined refresh token, skipping...',
      );
      return;
    }
    await this.setItem(STORAGE_KEYS.REFRESH_TOKEN, token);
  }

  async getRefreshToken(): Promise<string | null> {
    return await this.getItem(STORAGE_KEYS.REFRESH_TOKEN);
  }

  async removeRefreshToken(): Promise<void> {
    await this.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
  }

  /**
   * User data methods
   */
  async setUserData(user: User): Promise<void> {
    try {
      // Check if user is null or undefined
      if (!user) {
        console.warn('Attempting to set null/undefined user data, skipping...');
        return;
      }

      const userString = JSON.stringify(user);
      await this.setItem(STORAGE_KEYS.USER_DATA, userString);
    } catch (error) {
      console.error('Error setting user data:', error);
      throw error;
    }
  }

  async getUserData(): Promise<User | null> {
    try {
      const userString = await this.getItem(STORAGE_KEYS.USER_DATA);
      if (!userString) return null;

      return JSON.parse(userString) as User;
    } catch (error) {
      console.error('Error getting user data:', error);
      return null;
    }
  }

  async removeUserData(): Promise<void> {
    await this.removeItem(STORAGE_KEYS.USER_DATA);
  }

  /**
   * Clear all auth related data
   */
  async clearAuthData(): Promise<void> {
    try {
      await AsyncStorage.multiRemove([
        STORAGE_KEYS.AUTH_TOKEN,
        STORAGE_KEYS.REFRESH_TOKEN,
        STORAGE_KEYS.USER_DATA,
      ]);
    } catch (error) {
      console.error('Error clearing auth data:', error);
      throw error;
    }
  }

  /**
   * Theme preference methods
   */
  async setThemePreference(theme: 'light' | 'dark' | 'system'): Promise<void> {
    await this.setItem(STORAGE_KEYS.THEME_PREFERENCE, theme);
  }

  async getThemePreference(): Promise<'light' | 'dark' | 'system' | null> {
    const preference = await this.getItem(STORAGE_KEYS.THEME_PREFERENCE);
    return preference as 'light' | 'dark' | 'system' | null;
  }

  /**
   * Check if user is logged in (has valid token)
   */
  async isLoggedIn(): Promise<boolean> {
    const token = await this.getAuthToken();
    return token !== null;
  }

  /**
   * Get all stored keys
   */
  async getAllKeys(): Promise<string[]> {
    try {
      const keys = await AsyncStorage.getAllKeys();
      return [...keys]; // Convert readonly array to mutable array
    } catch (error) {
      console.error('Error getting all keys:', error);
      return [];
    }
  }
}

// Create and export singleton instance
export const storageService = new StorageService();
