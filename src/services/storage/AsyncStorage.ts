import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../../utils';
import type { User } from '../../types';

class StorageService {
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

  async setUserData(user: User): Promise<void> {
    try {
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
}

export const storageService = new StorageService();
