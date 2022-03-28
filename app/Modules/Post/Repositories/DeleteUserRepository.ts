import NotFoundException from 'App/Exceptions/NotFoundException';
import { Post } from 'App/Models';
import { TDeletePostOptions } from '../types';
import { Exception } from '@adonisjs/core/build/standalone';

export class DeletePostRepository {
  public async handle(options: TDeletePostOptions) {
    const post = await Post.findBy('secure_id', options.secureId);

    if (!post) {
      throw new NotFoundException(
        'There is no post for this id.',
        404,
        'E_NOT_FOUND'
      );
    }

    try {
      await post.delete();
    } catch (error) {
      throw new Exception(
        error.message || 'Internal Server Error',
        error.status || 500,
        error.code || 'E_INTERNAL_SERVER_ERROR'
      );
    }
  }
}
