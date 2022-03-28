import { User } from 'App/Models';
import { Exception } from '@adonisjs/core/build/standalone';

export class ListAllUsersRepository {
  public async handle(request) {
    try {
        const users = await User.all()

        return request.ok(users) 
    } catch (error) {
      throw new Exception(
        error.message || 'Internal Server Error',
        error.status || 500,
        error.code || 'E_INTERNAL_SERVER_ERROR'
      );
    }
  }
}
