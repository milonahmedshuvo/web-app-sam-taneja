import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const samTanejaApi = createApi({

  reducerPath: 'samTanejaApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://samtaneja-api.code-commando.com/api/v1' }),
  endpoints: (build) => ({

    getPokemonByName: build.query({
      query: (name) => `/pokemon/${name}`,
    }),

   getAllCategories: build.query({
    query : () => '/categories/main-categories'
   }),

   getAllStoris : build.query({
       query: () => '/stores'
   }),

   getAllBlogs : build.query({
    query : () => '/blogs'
   })

  }),
})



export const { useGetPokemonByNameQuery, useGetAllStorisQuery, useGetAllCategoriesQuery, useGetAllBlogsQuery } = samTanejaApi;