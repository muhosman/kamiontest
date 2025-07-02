import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { shipmentApi } from '../../services/api';
import type { ShipmentState, GetShipmentsRequest } from '../../types';

// Initial state
const initialState: ShipmentState = {
  shipments: [],
  isLoading: false,
  error: null,
};

// Async thunks
export const fetchShipmentsAsync = createAsyncThunk(
  'shipments/fetchShipments',
  async (params: GetShipmentsRequest | undefined, { rejectWithValue }) => {
    try {
      const response = await shipmentApi.getShipments(params);

      if (response.success && response.data) {
        return response.data;
      } else {
        console.error('❌ Redux: API başarısız response:', response.message);
        return rejectWithValue(response.message || 'Yükler yüklenemedi');
      }
    } catch (error) {
      console.error('❌ Redux: fetchShipmentsAsync catch bloğu:', error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Yükler yüklenirken hata oluştu';
      return rejectWithValue(errorMessage);
    }
  },
);

export const searchShipmentsAsync = createAsyncThunk(
  'shipments/searchShipments',
  async (searchId: string, { rejectWithValue }) => {
    try {
      const response = await shipmentApi.searchShipments(searchId);

      if (response.success && response.data) {
        return response.data;
      } else {
        console.error(
          '❌ Redux: Search API başarısız response:',
          response.message,
        );
        return rejectWithValue(response.message || 'Arama sonucu bulunamadı');
      }
    } catch (error) {
      console.error('❌ Redux: searchShipmentsAsync catch bloğu:', error);
      const errorMessage =
        error instanceof Error ? error.message : 'Arama sırasında hata oluştu';
      return rejectWithValue(errorMessage);
    }
  },
);

// Shipment slice
const shipmentSlice = createSlice({
  name: 'shipments',
  initialState,
  reducers: {
    clearError: state => {
      state.error = null;
    },

    resetShipments: state => {
      state.shipments = [];
      state.error = null;
    },
  },
  extraReducers: builder => {
    // Fetch shipments
    builder
      .addCase(fetchShipmentsAsync.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchShipmentsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.shipments = action.payload;
        state.error = null;
      })
      .addCase(fetchShipmentsAsync.rejected, (state, action) => {
        console.error('❌ Hata:', action.payload);
        state.isLoading = false;
        state.error = action.payload as string;
      });

    // Search shipments
    builder
      .addCase(searchShipmentsAsync.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(searchShipmentsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.shipments = action.payload;
        state.error = null;
      })
      .addCase(searchShipmentsAsync.rejected, (state, action) => {
        console.error('❌ Arama hatası:', action.payload);
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

// Export actions
export const { clearError, resetShipments } = shipmentSlice.actions;

// Export reducer
export default shipmentSlice.reducer;
