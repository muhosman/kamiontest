export const colors = {
  // Primary colors (Kamion mavi tonları)
  primary: {
    50: '#F0F8FF', // Daha açık mavi
    100: '#BBDEFB',
    200: '#90CAF9',
    300: '#64B5F6',
    400: '#42A5F5',
    500: '#2196F3', // Ana mavi
    600: '#1E88E5',
    700: '#1976D2',
    800: '#1565C0',
    900: '#0D47A1',
  },

  secondary: {
    50: '#F3E5F5',
    100: '#E1BEE7',
    200: '#CE93D8',
    300: '#BA68C8',
    400: '#AB47BC',
    500: '#9C27B0', // Ana mor
    600: '#8E24AA',
    700: '#7B1FA2',
    800: '#6A1B9A',
    900: '#4A148C',
  },

  third: {
    50: '#E8EAF6',
    100: '#C5CAE9',
    200: '#9FA8DA',
    300: '#7986CB',
    400: '#5C6BC0',
    500: '#3F51B5', // Ana navy
    600: '#3949AB',
    700: '#303F9F',
    800: '#283593',
    900: '#1A237E',
  },
  // Neutral colors
  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },

  // Status colors
  success: {
    50: '#E8F5E8',
    500: '#4CAF50',
    700: '#388E3C',
  },

  warning: {
    50: '#FFF8E1',
    500: '#FF9800',
    700: '#F57C00',
  },

  error: {
    50: '#FFEBEE',
    500: '#F44336',
    700: '#D32F2F',
  },

  info: {
    50: '#E3F2FD',
    500: '#2196F3',
    700: '#1976D2',
  },

  // Common colors
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',

  // Background colors
  background: {
    primary: '#FFFFFF',
    secondary: '#F8F9FA',
    tertiary: '#F5F5F5',
  },

  // Text colors
  text: {
    primary: '#212121',
    secondary: '#616161',
    tertiary: '#9E9E9E',
    inverse: '#FFFFFF',
  },

  // Border colors
  border: {
    light: '#E0E0E0',
    medium: '#BDBDBD',
    dark: '#757575',
  },

  // Surface colors
  surface: '#FFFFFF',

  // Shadow color
  shadow: '#000000',
} as const;

export type ColorKeys = keyof typeof colors;
