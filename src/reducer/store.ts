import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { apiResult } from "./api/login";

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		[apiResult.reducerPath]: apiResult.reducer,
	},
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware, apiResult.middleware),
});
