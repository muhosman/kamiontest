import { baseApi } from './baseApi';
import { API_ENDPOINTS } from '../../types';
import type { GetShipmentsResponse, ApiResponse } from '../../types';

class ShipmentApiService {
  async getShipments(): Promise<ApiResponse<GetShipmentsResponse>> {
    try {
      const response = await baseApi.get<GetShipmentsResponse>(
        API_ENDPOINTS.SHIPMENTS.LIST,
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

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
      throw error;
    }
  }
}

export const shipmentApi = new ShipmentApiService();
