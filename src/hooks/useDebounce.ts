import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * useDebounce Hook
 * Debounces a value by delaying its update for a specified delay
 * Useful for search inputs to prevent excessive API calls
 *
 * @param value - The value to debounce
 * @param delay - The delay in milliseconds (default: 500ms as specified in requirements)
 * @returns The debounced value
 */
export const useDebounce = <T>(value: T, delay: number = 500): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear previous timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Set up a timer to update the debounced value after the delay
    timerRef.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [value, delay]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return debouncedValue;
};

/**
 * useDebounceCallback Hook
 * Debounces a callback function
 *
 * @param callback - The callback function to debounce
 * @param delay - The delay in milliseconds
 * @returns The debounced callback function
 */
export const useDebounceCallback = (
  callback: (...args: any[]) => void,
  delay: number = 500,
) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedCallback = useCallback(
    (...args: any[]) => {
      // Clear the previous timer
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      // Set a new timer
      timerRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return debouncedCallback;
};
