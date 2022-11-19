// transactionApi;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const transactionApi = createApi({
  reducerPath: 'transactionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6379360f7419b414df8c001d.mockapi.io',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authSlice.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Transaction'],
  endpoints: builder => ({
    getTransactions: builder.query({
      query: () => `/transaction`,
      providesTags: ['Transaction'],
    }),
    addTransaction: builder.mutation({
      query: value => ({
        url: '/transaction',
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['Transaction'],
    }),
  }),
});

export const { useGetTransactionsQuery, useAddTransactionMutation } =
  transactionApi;
