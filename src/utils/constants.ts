// API Configuration
export const API_CONFIG = {
  BASE_URL: 'https://api.dev.kamion.co',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
} as const;

// Default Login Credentials (as specified in requirements)
export const DEFAULT_CREDENTIALS = {
  EMAIL: 'frontend@kamion.co',
  PASSWORD: 'Frontend.2024',
} as const;

// Debounce delay for search (as specified in requirements)
export const SEARCH_DEBOUNCE_DELAY = 500;

// Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: '@kamion/auth_token',
  REFRESH_TOKEN: '@kamion/refresh_token',
  USER_DATA: '@kamion/user_data',
  THEME_PREFERENCE: '@kamion/theme_preference',
} as const;

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
} as const;

// App Information
export const APP_INFO = {
  NAME: 'Kamion',
  VERSION: '1.0.0',
  BUILD_NUMBER: 1,
} as const;

// Validation Rules
export const VALIDATION = {
  EMAIL: {
    MIN_LENGTH: 5,
    MAX_LENGTH: 254,
    PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  PASSWORD: {
    MIN_LENGTH: 6,
    MAX_LENGTH: 50,
  },
  SEARCH: {
    MIN_LENGTH: 1,
    MAX_LENGTH: 100,
  },
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK: 'Ağ bağlantısı hatası. Lütfen internet bağlantınızı kontrol edin.',
  UNAUTHORIZED: 'Oturum süreniz dolmuş. Lütfen tekrar giriş yapın.',
  FORBIDDEN: 'Bu işlem için yetkiniz bulunmuyor.',
  NOT_FOUND: 'Aranan kayıt bulunamadı.',
  SERVER_ERROR: 'Sunucu hatası. Lütfen daha sonra tekrar deneyin.',
  VALIDATION: {
    EMAIL_REQUIRED: 'E-posta adresi gereklidir.',
    EMAIL_INVALID: 'Geçerli bir e-posta adresi giriniz.',
    PASSWORD_REQUIRED: 'Şifre gereklidir.',
    PASSWORD_MIN_LENGTH: 'Şifre en az 6 karakter olmalıdır.',
    LOGIN_FAILED: 'Giriş başarısız. E-posta ve şifrenizi kontrol edin.',
  },
} as const;
