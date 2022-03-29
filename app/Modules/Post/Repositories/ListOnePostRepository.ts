import NotFoundException from 'App/Exceptions/NotFoundException';
import { Post } from 'App/Models';
import { TListOnePostOptions } from '../types';

export class ListOnePostRepository {
  public async handle(options: TListOnePostOptions) {
 const post = await Post.findBy('secure_id', options.secureId)
    if (!post) {
      throw new NotFoundException(
        'There is no post for this id.',
        404,
        'E_NOT_FOUND'
      );
    }

    return post;
  }
}
