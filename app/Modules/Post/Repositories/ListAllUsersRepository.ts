import { Post } from 'App/Models';
import { Exception } from '@adonisjs/core/build/standalone';

export class ListAllPostsRepository {
  public async handle(request) {
    try {
        const posts = await Post.all()

        return request.ok(posts) 
    } catch (error) {
      throw new Exception(
        error.message || 'Internal Server Error',
        error.status || 500,
        error.code || 'E_INTERNAL_SERVER_ERROR'
      );
    }
  }
}
