import { samTanejaApi } from "../samtanejaApi";


  
  
  export const authApi = samTanejaApi.injectEndpoints({
    endpoints: (builder) => ({
     
     createAdminAccount: builder.mutation({
      query: (userData) =>({
      url: "/users/create-admin",
      method: "POST",
      body: userData
    })
   }),

   createCustomerAccount: builder.mutation({
    query: (userData) => ({
      url: "/users/create-customer",
      method: "POST",
      body: userData
    })
  }),

  userLogin: builder.mutation({
    query : (userData) =>({
      url: "/auth/login",
      method : "POST",
      body: userData
    })
  }),




  
   logout: builder.mutation({
        query: () => ({
          url: "/auth/logout",
          method: "POST"
        }),
      }),

    
    }),
  });
  
  export const {
    useCreateAdminAccountMutation,
    useCreateCustomerAccountMutation,
    useUserLoginMutation,


    useLogoutMutation,
  } = authApi;