import { useState, useCallback } from 'react';
import type { Shipment, GetShipmentsRequest } from '../types';

/**
 * useShipments Hook
 * Manages shipment data and operations
 */
export const useShipments = () => {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [currentShipment, setCurrentShipment] = useState<Shipment | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch shipments
  const fetchShipments = useCallback(async (params?: GetShipmentsRequest) => {
    setIsLoading(true);
    setError(null);

    try {
      // This will be implemented when we create the API service
      // const response = await shipmentApi.getShipments(params);
      // setShipments(response.data);
      console.log('Fetching shipments with params:', params);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Bilinmeyen hata');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Fetch single shipment by ID
  const fetchShipmentById = useCallback(async (id: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // This will be implemented when we create the API service
      // const response = await shipmentApi.getShipmentById(id);
      // setCurrentShipment(response.data);
      console.log('Fetching shipment by ID:', id);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Bilinmeyen hata');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Search shipments
  const searchShipments = useCallback(
    async (query: string) => {
      if (!query.trim()) {
        await fetchShipments();
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        // This will be implemented when we create the API service
        // const response = await shipmentApi.searchShipments(query);
        // setShipments(response.data);
        console.log('Searching shipments with query:', query);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Arama hatası');
      } finally {
        setIsLoading(false);
      }
    },
    [fetchShipments],
  );

  // Update search query
  const updateSearchQuery = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  // Clear error
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Clear current shipment
  const clearCurrentShipment = useCallback(() => {
    setCurrentShipment(null);
  }, []);

  // Reset all data
  const reset = useCallback(() => {
    setShipments([]);
    setCurrentShipment(null);
    setIsLoading(false);
    setError(null);
    setSearchQuery('');
  }, []);

  return {
    // State
    shipments,
    currentShipment,
    isLoading,
    error,
    searchQuery,

    // Actions
    fetchShipments,
    fetchShipmentById,
    searchShipments,
    updateSearchQuery,
    clearError,
    clearCurrentShipment,
    reset,
  };
};
