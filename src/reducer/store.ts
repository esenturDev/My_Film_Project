import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { apiResult } from "./api/login";
// import { apiId } from "./api/arrayId";

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		[apiResult.reducerPath]: apiResult.reducer,
		// [apiId.reducerPath]: apiId.reducer,
	},
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware, apiResult.middleware),
});
