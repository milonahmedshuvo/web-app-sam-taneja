import { samTanejaApi } from "../samtanejaApi";

export const productApi = samTanejaApi.injectEndpoints({
    endpoints: (builder) => ({

        productDelete: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ['product']
        }),

        productGetLimited: builder.query({
            query: (page) => `/products?page=${page}&populate=category,store&limit=10`,
            providesTags: ['product']
        })


    })
})





export const { useProductDeleteMutation, useProductGetLimitedQuery } = productApi