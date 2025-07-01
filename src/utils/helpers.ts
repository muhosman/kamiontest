import { ShipmentStatus } from '../types';

/**
 * Format a date string to display format
 */
export const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  } catch (error) {
    return dateString;
  }
};

/**
 * Format a date string to display format with time
 */
export const formatDateTime = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch (error) {
    return dateString;
  }
};

/**
 * Get relative time string (e.g., "2 saat önce")
 */
export const getRelativeTime = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInHours < 1) {
      return 'Az önce';
    } else if (diffInHours < 24) {
      return `${diffInHours} saat önce`;
    } else if (diffInDays < 7) {
      return `${diffInDays} gün önce`;
    } else {
      return formatDate(dateString);
    }
  } catch (error) {
    return dateString;
  }
};

/**
 * Get status color based on shipment status
 */
export const getStatusColor = (status: ShipmentStatus): string => {
  switch (status) {
    case ShipmentStatus.PENDING:
      return '#FF9800'; // Orange
    case ShipmentStatus.CONFIRMED:
      return '#2196F3'; // Blue
    case ShipmentStatus.IN_PROGRESS:
    case ShipmentStatus.PICKED_UP:
    case ShipmentStatus.IN_TRANSIT:
      return '#4CAF50'; // Green
    case ShipmentStatus.DELIVERED:
      return '#4CAF50'; // Green
    case ShipmentStatus.CANCELLED:
      return '#F44336'; // Red
    case ShipmentStatus.DELAYED:
      return '#FF5722'; // Deep Orange
    default:
      return '#9E9E9E'; // Gray
  }
};

/**
 * Get status text in Turkish
 */
export const getStatusText = (status: ShipmentStatus): string => {
  switch (status) {
    case ShipmentStatus.PENDING:
      return 'Beklemede';
    case ShipmentStatus.CONFIRMED:
      return 'Onaylandı';
    case ShipmentStatus.IN_PROGRESS:
      return 'Devam Ediyor';
    case ShipmentStatus.PICKED_UP:
      return 'Toplandı';
    case ShipmentStatus.IN_TRANSIT:
      return 'Taşınıyor';
    case ShipmentStatus.DELIVERED:
      return 'Teslim Edildi';
    case ShipmentStatus.CANCELLED:
      return 'İptal Edildi';
    case ShipmentStatus.DELAYED:
      return 'Gecikti';
    default:
      return 'Bilinmiyor';
  }
};

/**
 * Generate initials from a name
 */
export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('')
    .substring(0, 2);
};

/**
 * Format currency value
 */
export const formatCurrency = (
  amount: number,
  currency: string = 'TL',
): string => {
  return `${amount.toLocaleString('tr-TR')} ${currency}`;
};

/**
 * Format weight value
 */
export const formatWeight = (weight: number): string => {
  if (weight >= 1000) {
    return `${(weight / 1000).toFixed(1)} ton`;
  }
  return `${weight} kg`;
};

/**
 * Truncate text to specified length
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.substring(0, maxLength)}...`;
};

/**
 * Capitalize first letter of each word
 */
export const capitalizeWords = (text: string): string => {
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Sleep function for delays
 */
export const sleep = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Check if string is valid email
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Generate unique ID
 */
export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

/**
 * Deep clone an object
 */
export const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

/**
 * Check if object is empty
 */
export const isEmpty = (obj: any): boolean => {
  if (obj === null || obj === undefined) return true;
  if (Array.isArray(obj)) return obj.length === 0;
  if (typeof obj === 'object') return Object.keys(obj).length === 0;
  if (typeof obj === 'string') return obj.trim().length === 0;
  return false;
};
