import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { shipmentApi } from '../../services/api';
import { SEARCH_DEBOUNCE_DELAY } from '../../utils';
import type {
  ShipmentState,
  GetShipmentsRequest,
  ShipmentFilters,
  PaginationInfo,
} from '../../types';

// Initial state
const initialState: ShipmentState = {
  shipments: [],
  currentShipment: null,
  isLoading: false,
  error: null,
  searchQuery: '',
  filters: {},
  pagination: {
    currentPage: 1,
    totalPages: 0,
    totalItems: 0,
    itemsPerPage: 20,
    hasNextPage: false,
    hasPreviousPage: false,
  },
};

// Async thunks
export const fetchShipmentsAsync = createAsyncThunk(
  'shipments/fetchShipments',
  async (params: GetShipmentsRequest | undefined, { rejectWithValue }) => {
    console.log('🏪 Redux: fetchShipmentsAsync başlatıldı');
    console.log('📊 Redux parametreler:', params);

    try {
      const response = await shipmentApi.getShipments(params);

      console.log('🏪 Redux: API response alındı:', response);

      if (response.success && response.data) {
        console.log('✅ Redux: fetchShipmentsAsync başarılı');
        console.log('📦 Redux: Dönen data:', response.data);
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

export const fetchShipmentByIdAsync = createAsyncThunk(
  'shipments/fetchShipmentById',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await shipmentApi.getShipmentById(id);

      if (response.success && response.data) {
        return response.data;
      } else {
        return rejectWithValue(response.message || 'Yük bulunamadı');
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Yük yüklenirken hata oluştu';
      return rejectWithValue(errorMessage);
    }
  },
);

export const searchShipmentsAsync = createAsyncThunk(
  'shipments/searchShipments',
  async (searchId: string, { rejectWithValue }) => {
    console.log('🔍 Redux: searchShipmentsAsync başlatıldı');
    console.log('🔍 Redux aranan ID:', searchId);

    try {
      // Add debounce delay
      console.log(
        '⏳ Redux: Debounce delay başlatılıyor...',
        SEARCH_DEBOUNCE_DELAY,
        'ms',
      );
      await new Promise(resolve => setTimeout(resolve, SEARCH_DEBOUNCE_DELAY));
      console.log('✅ Redux: Debounce delay tamamlandı');

      const response = await shipmentApi.searchShipments(searchId);

      console.log('🔍 Redux: Search API response alındı:', response);

      if (response.success && response.data) {
        console.log('✅ Redux: searchShipmentsAsync başarılı');
        console.log('🔍 Redux: Bulunan data:', response.data);
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
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    clearSearchQuery: state => {
      state.searchQuery = '';
    },
    setFilters: (state, action: PayloadAction<ShipmentFilters>) => {
      state.filters = action.payload;
    },
    clearFilters: state => {
      state.filters = {};
    },
    clearCurrentShipment: state => {
      state.currentShipment = null;
    },
    setPagination: (state, action: PayloadAction<Partial<PaginationInfo>>) => {
      state.pagination = { ...state.pagination, ...action.payload };
    },
    resetShipments: state => {
      state.shipments = [];
      state.currentShipment = null;
      state.error = null;
      state.searchQuery = '';
      state.filters = {};
      state.pagination = initialState.pagination;
    },
  },
  extraReducers: builder => {
    // Fetch shipments
    builder
      .addCase(fetchShipmentsAsync.pending, state => {
        console.log('🏪 Redux Reducer: fetchShipmentsAsync.pending');
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchShipmentsAsync.fulfilled, (state, action) => {
        console.log('🏪 Redux Reducer: fetchShipmentsAsync.fulfilled');
        console.log('📦 Yeni sevkiyat verileri:', action.payload);
        console.log('📄 Pagination bilgisi:', action.payload.pagination);
        state.isLoading = false;
        state.shipments = action.payload;
        state.pagination = action.payload.pagination;
        state.error = null;
      })
      .addCase(fetchShipmentsAsync.rejected, (state, action) => {
        console.log('🏪 Redux Reducer: fetchShipmentsAsync.rejected');
        console.error('❌ Hata:', action.payload);
        state.isLoading = false;
        state.error = action.payload as string;
      });

    // Fetch shipment by ID
    builder
      .addCase(fetchShipmentByIdAsync.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchShipmentByIdAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentShipment = action.payload;
        state.error = null;
      })
      .addCase(fetchShipmentByIdAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    // Search shipments
    builder
      .addCase(searchShipmentsAsync.pending, state => {
        console.log('🔍 Redux Reducer: searchShipmentsAsync.pending');
        state.isLoading = true;
        state.error = null;
      })
      .addCase(searchShipmentsAsync.fulfilled, (state, action) => {
        console.log('🔍 Redux Reducer: searchShipmentsAsync.fulfilled');
        console.log('🔍 Bulunan sevkiyat verileri:', action.payload.data);
        console.log('📄 Search pagination bilgisi:', action.payload.pagination);
        state.isLoading = false;
        state.shipments = action.payload.data;
        state.pagination = action.payload.pagination;
        state.error = null;
      })
      .addCase(searchShipmentsAsync.rejected, (state, action) => {
        console.log('🔍 Redux Reducer: searchShipmentsAsync.rejected');
        console.error('❌ Arama hatası:', action.payload);
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

// Export actions
export const {
  clearError,
  setSearchQuery,
  clearSearchQuery,
  setFilters,
  clearFilters,
  clearCurrentShipment,
  setPagination,
  resetShipments,
} = shipmentSlice.actions;

// Export reducer
export default shipmentSlice.reducer;
