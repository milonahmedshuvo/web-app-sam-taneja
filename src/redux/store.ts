/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { samTanejaApi } from './api/samtanejaApi';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import userReducer, { TAuthState, TUserState } from './slice/user/userSlice';


const createNoopStorage = () => {
  return {
    getItem(_key: string): Promise<null> {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: any): Promise<any> {
      return Promise.resolve(value);
    },
    removeItem(_key: string): Promise<void> {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

const userPersistConfig = {
  key: 'user',
  storage,
};

const persistedUserReducer = persistReducer<TAuthState>(userPersistConfig, userReducer);

export const makeStore = () =>
  configureStore({
    reducer: {
      [samTanejaApi.reducerPath]: samTanejaApi.reducer,
      user: persistedUserReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(samTanejaApi.middleware),
  });

export const store = makeStore();
export const persistor = persistStore(store);

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
