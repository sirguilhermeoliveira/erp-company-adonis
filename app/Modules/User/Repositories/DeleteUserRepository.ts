import NotFoundException from 'App/Exceptions/NotFoundException';
import { User } from 'App/Models';
import { TDeleteUserOptions } from '../types';
import { Exception } from '@adonisjs/core/build/standalone';

export class DeleteUserRepository {
  public async handle(options: TDeleteUserOptions) {
    const user = await User.findBy('secure_id', options.secureId);

    if (!user) {
      throw new NotFoundException(
        'There is no user for this id.',
        404,
        'E_NOT_FOUND'
      );
    }

    try {
      await user.delete();
    } catch (error) {
      throw new Exception(
        error.message || 'Internal Server Error',
        error.status || 500,
        error.code || 'E_INTERNAL_SERVER_ERROR'
      );
    }
  }
}
