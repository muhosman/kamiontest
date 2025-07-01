import { configureStore } from '@reduxjs/toolkit';
import { authReducer, shipmentReducer } from './slices';

// Configure store
export const store = configureStore({
  reducer: {
    auth: authReducer,
    shipments: shipmentReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
  devTools: __DEV__,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export store
export default store;
