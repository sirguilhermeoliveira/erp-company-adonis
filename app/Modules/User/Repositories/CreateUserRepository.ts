import { User } from 'App/Models';
import { TStoreUsersOptions } from '../types';
import { Exception } from '@adonisjs/core/build/standalone';

export class CreateUserRepository {
  public async handle(options: TStoreUsersOptions) {
    try {
      return await User.create(options.user);
    } catch (error) {
      throw new Exception(
        error.message || 'Internal Server Error',
        error.status || 500,
        error.code || 'E_INTERNAL_SERVER_ERROR'
      );
    }
  }
}
