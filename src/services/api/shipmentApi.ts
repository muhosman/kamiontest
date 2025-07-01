import { baseApi } from './baseApi';
import { API_ENDPOINTS } from '../../types';
import type {
  Shipment,
  GetShipmentsRequest,
  GetShipmentsResponse,
  ApiResponse,
} from '../../types';

class ShipmentApiService {
  /**
   * Get list of shipments
   */
  async getShipments(
    params?: GetShipmentsRequest,
  ): Promise<ApiResponse<GetShipmentsResponse>> {
    console.log('🚛 ShipmentApi: getShipments çağrıldı');
    console.log('📊 Gelen parametreler:', params);

    const queryParams: Record<string, any> = {};

    if (params?.page) {
      queryParams.page = params.page;
    }

    if (params?.limit) {
      queryParams.limit = params.limit;
    }

    if (params?.filter) {
      // Convert filter object to query parameters
      Object.keys(params.filter).forEach(key => {
        if (params.filter![key] !== undefined) {
          queryParams[`filter[${key}]`] = params.filter![key];
        }
      });
    }

    if (params?.sort) {
      queryParams.sort = params.sort;
    }

    console.log('🔗 API URL:', API_ENDPOINTS.SHIPMENTS.LIST);
    console.log('📝 Query Parametreleri:', queryParams);

    try {
      const response = await baseApi.get<GetShipmentsResponse>(
        API_ENDPOINTS.SHIPMENTS.LIST,
        queryParams,
      );

      console.log('✅ getShipments başarılı response:', response);
      console.log(
        '📦 Dönen sevkiyat sayısı:',
        response.data?.data?.length || 0,
      );

      return response;
    } catch (error) {
      console.error('❌ getShipments hatası:', error);
      throw error;
    }
  }

  /**
   * Get single shipment by ID
   */
  async getShipmentById(id: string): Promise<ApiResponse<Shipment>> {
    return await baseApi.get<Shipment>(API_ENDPOINTS.SHIPMENTS.DETAIL(id));
  }

  /**
   * Search shipments by ID
   */
  async searchShipments(
    searchId: string,
  ): Promise<ApiResponse<GetShipmentsResponse>> {
    console.log('🔍 ShipmentApi: searchShipments çağrıldı');
    console.log('🔍 Aranan ID:', searchId);

    const params = {
      'filter[id]': searchId,
    };

    console.log('🔗 Search API URL:', API_ENDPOINTS.SHIPMENTS.LIST);
    console.log('📝 Search Query Parametreleri:', params);

    try {
      const response = await baseApi.get<GetShipmentsResponse>(
        API_ENDPOINTS.SHIPMENTS.LIST,
        params,
      );

      console.log('✅ searchShipments başarılı response:', response);
      console.log(
        '🔍 Bulunan sevkiyat sayısı:',
        response.data?.data?.length || 0,
      );

      return response;
    } catch (error) {
      console.error('❌ searchShipments hatası:', error);
      throw error;
    }
  }

  /**
   * Create new shipment
   */
  async createShipment(
    shipment: Partial<Shipment>,
  ): Promise<ApiResponse<Shipment>> {
    return await baseApi.post<Shipment>(
      API_ENDPOINTS.SHIPMENTS.CREATE,
      shipment,
    );
  }

  /**
   * Update existing shipment
   */
  async updateShipment(
    id: string,
    shipment: Partial<Shipment>,
  ): Promise<ApiResponse<Shipment>> {
    return await baseApi.put<Shipment>(
      API_ENDPOINTS.SHIPMENTS.UPDATE(id),
      shipment,
    );
  }

  /**
   * Delete shipment
   */
  async deleteShipment(id: string): Promise<ApiResponse<void>> {
    return await baseApi.delete<void>(API_ENDPOINTS.SHIPMENTS.DELETE(id));
  }
}

// Create and export singleton instance
export const shipmentApi = new ShipmentApiService();
