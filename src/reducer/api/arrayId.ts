// import {BaseQueryFn, createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

// const baseQuery = fetchBaseQuery({
//   baseUrl: import.meta.env.VITE_BEKENTS_URL,
// });

// const baseQueryExtented: BaseQueryFn = async (args, api, extraOptions) => {
//   const result = await baseQuery(args, api, extraOptions);
//   return result;
// };

// export const apiId = createApi({
//   reducerPath: 'apiId',
//   baseQuery: baseQueryExtented,
//   refetchOnReconnect: true,
//   refetchOnFocus: false,
//   tagTypes: ['projectId'],
//   endpoints: () => ({}),
// });