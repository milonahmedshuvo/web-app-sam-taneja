import { createApi,  } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from '../utils/baseQueryWithResult';



// Define a service using a base URL and expected endpoints
export const samTanejaApi = createApi({

  reducerPath: 'samTanejaApi',
  // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5777/api/v1' }),
  baseQuery: baseQueryWithReauth,
  tagTypes: ["product", "blog"],

  endpoints: (build) => ({
   getAllCategories: build.query({
    query : () => '/categories/main-categories'
   }),
   getParentCategoris: build.query({
    query: () => '/categories/parent-categories'
   }),
   createCategorisName: build.mutation({
    query: (data) => ({
      url: '/categories',
      method: 'POST',
      body: data,
    })
   }),


   getAllStoris : build.query({
       query: () => '/stores'
   }),
   getAllBlogs : build.query({
    query : () => '/blogs',
   }),
   allBlogsWithPagination : build.query({
    query: (page) => `/blogs?limit=10&page=${page}`,
    providesTags: ['blog']
   }),
   blogsDeleted: build.mutation({
    query: (id) => ({
      url: `/blogs/${id}`,
      method: "DELETE",
    }),
    invalidatesTags: ['blog']
   }),
 


  // management store category data 
  singleStore: build.query({
    query: (id) => ({
      url: `/stores/${id}`
    })
  }),
  addStore : build.mutation({
    query: (body) => ({
      url: "/stores",
      method: "POST",
      body: body
    })
  })


  }),
})



export const { useGetAllStorisQuery, useGetAllCategoriesQuery, useGetAllBlogsQuery, useSingleStoreQuery, useAddStoreMutation, useAllBlogsWithPaginationQuery, useBlogsDeletedMutation, useGetParentCategorisQuery, useCreateCategorisNameMutation} = samTanejaApi;