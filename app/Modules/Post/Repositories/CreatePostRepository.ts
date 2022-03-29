import { User, Post } from 'App/Models';
import { TStorePostsOptions } from '../types';
import { Exception } from '@adonisjs/core/build/standalone';

export class CreatePostRepository {
  public async handle(options: TStorePostsOptions) {
    try {
      const userId = await this.getPost(
        options.post.user_secure_id
      );
      const verifyPostExists = await Post.query()
        .where('user_id', userId.id)
        .andWhere('content', options.post.content)
        .first();

      if (verifyPostExists) {
        throw new Exception(
          'Post already exists',
          422,
          'E_ALREADY_EXISTS'
        );
      }

      console.log('verifyPostExists')
      const post = {
        content: options.post?.content,
        image: options.post?.image,
        user_id: userId.id,
      };
      return await Post.create(post);
    } catch (error) {
      throw new Exception(
        error.message || 'Internal Server Error',
        error.status || 500,
        error.code || 'E_INTERNAL_SERVER_ERROR'
      );
    }
  }
  public async getPost(user_secure_id: string) {
    return User.findByOrFail('secure_id', user_secure_id);
  }
}
