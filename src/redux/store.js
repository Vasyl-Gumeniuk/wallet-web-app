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
import { transactionApi } from './transactions/transactionApi';

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
    [transactionApi.reducerPath]: transactionApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    authApi.middleware,
    transactionApi.middleware,
  ],
});
export const persistor = persistStore(store);
