import {api as index} from '../index';
import {FilmProject} from './types';

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getProject: builder.query<FilmProject.GetFilmProjectResponse, FilmProject.GetFilmProjectRequest>({
      query: () => ({
        url: "",
        method: "GET",
      }),
      providesTags: ['project'],
    }),
  })
})

export const {useGetProjectQuery} = api;