import { configureStore } from '@reduxjs/toolkit';
import { authReducer, shipmentReducer } from './slices';

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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
