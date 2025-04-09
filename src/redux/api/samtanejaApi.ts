import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const samTanejaApi = createApi({

  reducerPath: 'samTanejaApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://10.0.10.245:9829/api/v1' }),
  endpoints: (build) => ({

    getPokemonByName: build.query({
      query: (name) => `/pokemon/${name}`,
    }),


  }),
})



export const { useGetPokemonByNameQuery } = samTanejaApi;