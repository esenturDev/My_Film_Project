/* eslint-disable @typescript-eslint/no-unused-vars */
export namespace FilmProject {
  type GetFilmProjectRequest = void;
  type GetFilmProjectResponse = {
    _id?: number;
    img: string;
    iframe: string;
    title: string;
    nameg: string;
    freeOfCharge: string;
  }[];

  type GetIdFilmProjectRequest = void;
  type GetIdFilmProjectResponse = {
    _id?: number;
    img: string;
    iframe: string;
    title: string;
    nameg: string;
    freeOfCharge: string;
  }[];

  type PostFilmProjectRequest = {
    _id?: number;
    img: string;
    iframe: string;
    title: string;
    nameg: string;
    freeOfCharge: string;
  };
  type PostFilmProjectResponse = {
    _id?: number;
    img: string;
    iframe: string;
    title: string;
    nameg: string;
    freeOfCharge: string;
  }[];

  type DeleteFilmProjectRequest = {
    _id?: number;
    img: string;
    iframe: string;
    title: string;
    nameg: string;
    freeOfCharge: string;
  };
  type DeleteFilmProjectResponse = {
    _id?: number;
    img: string;
    iframe: string;
    title: string;
    nameg: string;
    freeOfCharge: string;
  }[];
}