import { createApi,  } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from '../utils/baseQueryWithResult';



// Define a service using a base URL and expected endpoints
export const samTanejaApi = createApi({

  reducerPath: 'samTanejaApi',
  // baseQuery: fetchBaseQuery({ baseUrl: 'https://samtaneja-api.code-commando.com/api/v1' }),
  baseQuery: baseQueryWithReauth,
  tagTypes: ["product", "blog", "store"],

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
       query: () => '/stores',
       providesTags: ['store']
   }),
   deletedStoris : build.mutation({
    query: (id) => ({
      url: `/stores/${id}`,
      method: "DELETE"
    }),
    invalidatesTags: ['store']
   }),
   updateStoris : build.mutation({
    query : ({data, id}) => ({
      url : `/stores/${id}`,
      method: "PATCH",
      body: data
    }),
    invalidatesTags: ['store']
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



export const { useGetAllStorisQuery, useDeletedStorisMutation, useGetAllCategoriesQuery, useGetAllBlogsQuery, useSingleStoreQuery, useAddStoreMutation, useAllBlogsWithPaginationQuery, useBlogsDeletedMutation, useGetParentCategorisQuery, useCreateCategorisNameMutation, useUpdateStorisMutation} = samTanejaApi;