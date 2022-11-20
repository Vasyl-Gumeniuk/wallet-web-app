import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://back-voit-wallet.herokuapp.com/api',

    prepareHeaders: (headers, { getState }) => {
      const test = getState();
      console.log('test', test);
      const token = getState().authSlice.token;
      console.log('token', token);

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
    logOut: builder.mutation({
      query: () => ({
        url: `/user/auth/logout`,
        method: 'POST',
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
  useLogOutMutation,
  useFetchCurrentUserQuery,
} = authApi;
