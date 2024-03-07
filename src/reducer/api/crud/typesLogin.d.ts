/* eslint-disable @typescript-eslint/no-unused-vars */
export namespace LoginAndRegistr {
  type GetLoginAndRegistrRequest = void;
  type GetLoginAndRegistrResponse = {
    _id?: number;
    login: string;
    password: string;
    img?: string;
  }[];

  type PostLoginAndRegistrRequest = {
    _id?: number;
    login: string;
    password: string;
    img?: string;
  };
  type PostLoginAndRegistrResponse = {
    _id?: number;
    login: string;
    password: string;
    img?: string;
  }[];
}