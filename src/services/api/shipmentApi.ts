import { baseApi } from './baseApi';
import { API_ENDPOINTS } from '../../types';
import type { GetShipmentsResponse, ApiResponse } from '../../types';

class ShipmentApiService {
  /**
   * Get list of shipments
   */
  async getShipments(): Promise<ApiResponse<GetShipmentsResponse>> {
    try {
      const response = await baseApi.get<GetShipmentsResponse>(
        API_ENDPOINTS.SHIPMENTS.LIST,
      );

      return response;
    } catch (error) {
      console.error('❌ getShipments hatası:', error);
      throw error;
    }
  }

  /**
   * Search shipments by ID
   */
  async searchShipments(
    searchId: string,
  ): Promise<ApiResponse<GetShipmentsResponse>> {
    const params = {
      'filter[id]': searchId,
    };

    try {
      const response = await baseApi.get<GetShipmentsResponse>(
        API_ENDPOINTS.SHIPMENTS.LIST,
        params,
      );

      return response;
    } catch (error) {
      console.error('❌ searchShipments hatası:', error);
      throw error;
    }
  }
}

// Create and export singleton instance
export const shipmentApi = new ShipmentApiService();
