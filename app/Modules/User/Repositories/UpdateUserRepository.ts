import NotFoundException from 'App/Exceptions/NotFoundException';
import { User } from 'App/Models';
import { TUpdateUserOptions } from '../types';
import { Exception } from '@adonisjs/core/build/standalone';

export class UpdateUserRepository {
  public async handle(options: TUpdateUserOptions) {
      
      try {
        const userFind = await User.findBy('secure_id', options.secureId);
    
        if (!userFind) {
          throw new NotFoundException(
            'There is no user for this id.',
            404,
            'E_NOT_FOUND'
          );
        }
      userFind.merge(options.user);
      await userFind.save();

      return userFind; 
    } catch (error) {
      throw new Exception(
        error.message || 'Internal Server Error',
        error.status || 500,
        error.code || 'E_INTERNAL_SERVER_ERROR'
      );
    }
  }
}
