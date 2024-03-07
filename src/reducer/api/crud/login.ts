import {api as index} from '../index';
import { LoginAndRegistr } from './typesLogin';

const login = index.injectEndpoints({
  endpoints: (builder) => ({
    getRegistr: builder.query<LoginAndRegistr.GetLoginAndRegistrResponse, LoginAndRegistr.GetLoginAndRegistrRequest>({
      query: () => ({
        url: "",
        method: "GET",
      }),
      providesTags: ['project'],
    }),
    postRegistr: builder.mutation<LoginAndRegistr.PostLoginAndRegistrResponse, LoginAndRegistr.PostLoginAndRegistrRequest>({
      query: (newData) => ({
        url: "",
        method: "POST",
        body: newData,
      }),
      invalidatesTags: ['project'],
    })
  })
})

export const {useGetRegistrQuery, usePostRegistrMutation} = login;