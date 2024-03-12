import { api as index } from "../index";
import { FilmProject } from "./types";

const api = index.injectEndpoints({
	endpoints: (builder) => ({
		getProject: builder.query<
			FilmProject.GetFilmProjectResponse,
			FilmProject.GetFilmProjectRequest
		>({
			query: () => ({
				url: "",
				method: "GET",
			}),
			providesTags: ["project"],
		}),
		getItemId: builder.query<
			FilmProject.GetIdFilmProjectResponse,
			FilmProject.GetIdFilmProjectRequest
		>({
			query: (id) => ({
				url: `/${id}`,
				method: "GET",
			}),
		}),
	}),
});

export const { useGetProjectQuery, useGetItemIdQuery } = api;
