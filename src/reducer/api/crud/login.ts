import {apiResult as index} from '../login'
import { LoginAndRegistr } from "./typesLogin";

const login = index.injectEndpoints({
	endpoints: (builder) => ({
		getRegistr: builder.query<
			LoginAndRegistr.GetLoginAndRegistrResponse,
			LoginAndRegistr.GetLoginAndRegistrRequest
		>({
			query: () => ({
				url: "",
				method: "GET",
			}),
			providesTags: ["loginResults"],
		}),
		postRegistr: builder.mutation<
			LoginAndRegistr.PostLoginAndRegistrResponse,
			LoginAndRegistr.PostLoginAndRegistrRequest
		>({
			query: (newData) => ({
				url: "",
				method: "POST",
				body: newData,
			}),
			invalidatesTags: ["loginResults"],
		}),
    deleteRegistr: builder.mutation<LoginAndRegistr.DeleteLoginAndRegistrResponse, LoginAndRegistr.DeleteLoginAndRegistrRequest>({
      query: (id) => ({
        url: id,
				method: "DELETE",
      })
    })
	}),
});

export const { useGetRegistrQuery, usePostRegistrMutation, useDeleteRegistrMutation } = login;
