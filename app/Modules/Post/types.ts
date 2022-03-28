import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { IPostDTO } from 'App/Dtos';

export type TListAllPostsOptions = {
  content: string;
  image: string;
  };

export type TStorePostsServiceOptions = {
    request: HttpContextContract;
  } & TStorePostsOptions;  

export type TStorePostsOptions = {
    post: IPostDTO;
  };

  export type TListOnePostOptions = {
    secureId: string;
  };
  
  export type TUpdatePostServiceOptions = {
    request: HttpContextContract;
    post: IPostDTO;
    secureId: string;
  };
  
  export type TUpdatePostOptions = {
    post: IPostDTO;
    secureId: string;
  };
  
  export type TDeletePostOptions = {
    secureId: string;
  };
  