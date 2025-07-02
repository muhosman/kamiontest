import { VALIDATION, ERROR_MESSAGES } from './constants';

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export const validateEmail = (email: string): ValidationResult => {
  if (!email || email.trim().length === 0) {
    return {
      isValid: false,
      error: ERROR_MESSAGES.VALIDATION.EMAIL_REQUIRED,
    };
  }

  if (email.length < VALIDATION.EMAIL.MIN_LENGTH) {
    return {
      isValid: false,
      error: `E-posta adresi en az ${VALIDATION.EMAIL.MIN_LENGTH} karakter olmalıdır.`,
    };
  }

  if (email.length > VALIDATION.EMAIL.MAX_LENGTH) {
    return {
      isValid: false,
      error: `E-posta adresi en fazla ${VALIDATION.EMAIL.MAX_LENGTH} karakter olabilir.`,
    };
  }

  if (!VALIDATION.EMAIL.PATTERN.test(email)) {
    return {
      isValid: false,
      error: ERROR_MESSAGES.VALIDATION.EMAIL_INVALID,
    };
  }

  return { isValid: true };
};

export const validatePassword = (password: string): ValidationResult => {
  if (!password || password.trim().length === 0) {
    return {
      isValid: false,
      error: ERROR_MESSAGES.VALIDATION.PASSWORD_REQUIRED,
    };
  }

  if (password.length < VALIDATION.PASSWORD.MIN_LENGTH) {
    return {
      isValid: false,
      error: ERROR_MESSAGES.VALIDATION.PASSWORD_MIN_LENGTH,
    };
  }

  if (password.length > VALIDATION.PASSWORD.MAX_LENGTH) {
    return {
      isValid: false,
      error: `Şifre en fazla ${VALIDATION.PASSWORD.MAX_LENGTH} karakter olabilir.`,
    };
  }

  return { isValid: true };
};

export const validateSearchQuery = (query: string): ValidationResult => {
  if (!query || query.trim().length === 0) {
    return { isValid: true }; // Empty search is valid
  }

  if (query.length < VALIDATION.SEARCH.MIN_LENGTH) {
    return {
      isValid: false,
      error: `Arama terimi en az ${VALIDATION.SEARCH.MIN_LENGTH} karakter olmalıdır.`,
    };
  }

  if (query.length > VALIDATION.SEARCH.MAX_LENGTH) {
    return {
      isValid: false,
      error: `Arama terimi en fazla ${VALIDATION.SEARCH.MAX_LENGTH} karakter olabilir.`,
    };
  }

  return { isValid: true };
};

export const validateRequired = (
  value: string,
  fieldName: string,
): ValidationResult => {
  if (!value || value.trim().length === 0) {
    return {
      isValid: false,
      error: `${fieldName} gereklidir.`,
    };
  }

  return { isValid: true };
};

export const validateMinLength = (
  value: string,
  minLength: number,
  fieldName: string,
): ValidationResult => {
  if (value.length < minLength) {
    return {
      isValid: false,
      error: `${fieldName} en az ${minLength} karakter olmalıdır.`,
    };
  }

  return { isValid: true };
};

export const validateMaxLength = (
  value: string,
  maxLength: number,
  fieldName: string,
): ValidationResult => {
  if (value.length > maxLength) {
    return {
      isValid: false,
      error: `${fieldName} en fazla ${maxLength} karakter olabilir.`,
    };
  }

  return { isValid: true };
};

export const validatePhone = (phone: string): ValidationResult => {
  if (!phone || phone.trim().length === 0) {
    return { isValid: true };
  }

  const cleanPhone = phone.replace(/\D/g, '');

  const patterns = [
    /^90\d{10}$/, // +90XXXXXXXXXX
    /^0\d{10}$/, // 0XXXXXXXXXX
    /^\d{10}$/, // XXXXXXXXXX
  ];

  const isValid = patterns.some(pattern => pattern.test(cleanPhone));

  if (!isValid) {
    return {
      isValid: false,
      error: 'Geçerli bir telefon numarası giriniz.',
    };
  }

  return { isValid: true };
};

export const validateLoginForm = (email: string, password: string) => {
  const emailResult = validateEmail(email);
  const passwordResult = validatePassword(password);

  return {
    email: emailResult.error,
    password: passwordResult.error,
    isValid: emailResult.isValid && passwordResult.isValid,
  };
};

export const validateShipmentId = (id: string): ValidationResult => {
  if (!id || id.trim().length === 0) {
    return {
      isValid: false,
      error: "Yük ID'si gereklidir.",
    };
  }

  const isNumeric = /^\d+$/.test(id.trim());
  const isValidString = /^[a-zA-Z0-9-_]+$/.test(id.trim());

  if (!isNumeric && !isValidString) {
    return {
      isValid: false,
      error: "Geçerli bir yük ID'si giriniz.",
    };
  }

  return { isValid: true };
};
