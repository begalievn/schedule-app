import { combineReducers, configureStore } from '@reduxjs/toolkit';

import {
  FLUSH,
  PAUSE,
  PURGE,
  PERSIST,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authApi } from './api/auth-api';

import { commonApi } from './api/common-api';
import authSlice from './slice/auth-slice';

import { groupSlice } from './slice/group-slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'workspaceSlice'],
};

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [groupSlice.reducerPath]: groupSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(commonApi.middleware),
});

export const persistor = persistStore(store);
