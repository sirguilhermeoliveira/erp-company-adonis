import { Post } from 'App/Models';
import { TStorePostsOptions } from '../types';
import { Exception } from '@adonisjs/core/build/standalone';

export class CreatePostRepository {
  public async handle(options: TStorePostsOptions) {
    try {
      return await Post.create(options.post);
    } catch (error) {
      throw new Exception(
        error.message || 'Internal Server Error',
        error.status || 500,
        error.code || 'E_INTERNAL_SERVER_ERROR'
      );
    }
  }
}
