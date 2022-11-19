import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authApi } from './auth/authApi';
import { authSlice } from './auth/authSlice';

const persistConfig = {
  key: 'authSlice',
  storage,
  whitelist: ['token'],
};
const authReducer = persistReducer(persistConfig, authSlice.reducer);

export const store = configureStore({
  reducer: {
    authSlice: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    authApi.middleware,
  ],
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
});

export const persistor = persistStore(store);
