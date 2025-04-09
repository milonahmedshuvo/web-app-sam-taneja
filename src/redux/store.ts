import { configureStore } from '@reduxjs/toolkit'
import { samTanejaApi } from './api/samtanejaApi'


export const store = configureStore({

  reducer: {

    // add  RTQ query in store for api 
    [samTanejaApi.reducerPath] : samTanejaApi.reducer
  },

  
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(samTanejaApi.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch