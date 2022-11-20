// transactionApi;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const transactionApi = createApi({
  reducerPath: 'transactionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://back-voit-wallet.herokuapp.com/api',
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
      query: () => `/transactions`,
      providesTags: ['Transaction'],
    }),
    addTransaction: builder.mutation({
      query: value => ({
        url: '/transactions/add',
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['Transaction'],
    }),
  }),
});

export const { useGetTransactionsQuery, useAddTransactionMutation } =
  transactionApi;
