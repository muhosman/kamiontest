// Constants
export {
  API_CONFIG,
  DEFAULT_CREDENTIALS,
  SEARCH_DEBOUNCE_DELAY,
  STORAGE_KEYS,
  PAGINATION,
  APP_INFO,
  VALIDATION,
  ERROR_MESSAGES,
} from './constants';

// Helper functions
export {
  formatDate,
  formatDateTime,
  getRelativeTime,
  getStatusColor,
  getStatusText,
  getInitials,
  formatCurrency,
  formatWeight,
  truncateText,
  capitalizeWords,
  sleep,
  isValidEmail,
  generateId,
  deepClone,
  isEmpty,
} from './helpers';

// Validators
export {
  validateEmail,
  validatePassword,
  validateSearchQuery,
  validateRequired,
  validateMinLength,
  validateMaxLength,
  validatePhone,
  validateLoginForm,
  validateShipmentId,
} from './validators';

export type { ValidationResult } from './validators';
