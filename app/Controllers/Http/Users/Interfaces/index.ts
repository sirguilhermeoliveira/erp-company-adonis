export interface IUserRepository {
  is_okb?: boolean;
  user: User;
}
export interface IUser {
  name: string;
  email: string;
}

export type User = IUser;
