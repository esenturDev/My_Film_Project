import { BaseQueryFn, fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_LOGIN_URL
});

const baseQueryExtented: BaseQueryFn = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  return result;
}

export const apiResult = createApi({
  reducerPath: 'apiResult',
  baseQuery: baseQueryExtented,
  refetchOnReconnect: true,
  refetchOnFocus: false,
  tagTypes: ['loginResults'],
  endpoints: () => ({}),
})