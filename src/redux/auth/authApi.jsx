import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://back-voit-wallet.onrender.com/api',

    prepareHeaders: async (headers, { getState }) => {
      const token = await getState().authSlice.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    register: builder.mutation({
      query: values => ({
        url: `/user/auth/signup`,
        method: 'POST',
        body: values,
        providesTags: ['User'],
      }),
    }),
    logIn: builder.mutation({
      query: values => {
        console.log('values', values);
        return {
          url: `/user/auth/login`,
          method: 'POST',
          body: values,
          providesTags: ['User'],
        };
      },
    }),
    logOut: builder.query({
      query: () => ({
        url: `/user/auth/logout`,
        providesTags: ['User'],
      }),
    }),
    fetchCurrentUser: builder.query({
      query: () => ({
        url: `/user/auth/current`,
        providesTags: ['User'],
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLogInMutation,
  useLogOutQuery,
  useFetchCurrentUserQuery,
} = authApi;
