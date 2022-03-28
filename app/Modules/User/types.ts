import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { IUserDTO } from 'App/Dtos';

export type TListAllUsersOptions = {
    name: string;
    email: string;
    password: string;
  };

export type TStoreUsersServiceOptions = {
    request: HttpContextContract;
  } & TStoreUsersOptions;  

export type TStoreUsersOptions = {
    user: IUserDTO;
  };

  export type TListOneUserOptions = {
    secureId: string;
  };
  
  export type TUpdateUserServiceOptions = {
    request: HttpContextContract;
    user: IUserDTO;
    secureId: string;
  };
  
  export type TUpdateUserOptions = {
    user: IUserDTO;
    secureId: string;
  };
  
  export type TDeleteUserOptions = {
    secureId: string;
  };
  