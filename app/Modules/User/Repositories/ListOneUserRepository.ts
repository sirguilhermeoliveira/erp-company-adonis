import NotFoundException from 'App/Exceptions/NotFoundException';
import { User } from 'App/Models';
import { TListOneUserOptions } from '../types';

export class ListOneUserRepository {
  public async handle(options: TListOneUserOptions) {
 const user = await User.findBy('secure_id', options.secureId)
    console.log(user)
    if (!user) {
      throw new NotFoundException(
        'There is no user for this id.',
        404,
        'E_NOT_FOUND'
      );
    }

    return user;
  }
}
