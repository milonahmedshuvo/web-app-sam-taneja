import { createApi,  } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from '../utils/baseQueryWithResult';



// Define a service using a base URL and expected endpoints
export const samTanejaApi = createApi({

  reducerPath: 'samTanejaApi',
  // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5777/api/v1' }),
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({

   getAllCategories: build.query({
    query : () => '/categories/main-categories'
   }),

   getAllStoris : build.query({
       query: () => '/stores'
   }),

   getAllBlogs : build.query({
    query : () => '/blogs'
   }),



  //  createAdminAccount: build.mutation({
  //   query: (userData) =>({
  //     url: "/users/create-admin",
  //     method: "POST",
  //     body: userData
  //   })
  //  }),

  // createCustomerAccount: build.mutation({
  //   query: (userData) => ({
  //     url: "/users/create-customer",
  //     method: "POST",
  //     body: userData
  //   })
  // }),
   
  // userLogin: build.mutation({
  //   query : (userData) =>({
  //     url: "/auth/login",
  //     method : "POST",
  //     body: userData
  //   })
  // }),


  // management store category data 
  singleStore: build.query({
    query: (id) => ({
      url: `/stores/${id}`
    })
  })


  }),
})



export const { useGetAllStorisQuery, useGetAllCategoriesQuery, useGetAllBlogsQuery, useSingleStoreQuery } = samTanejaApi;