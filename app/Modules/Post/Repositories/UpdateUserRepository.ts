import NotFoundException from 'App/Exceptions/NotFoundException';
import { Post } from 'App/Models';
import { TUpdatePostOptions } from '../types';
import { Exception } from '@adonisjs/core/build/standalone';

export class UpdatePostRepository {
  public async handle(options: TUpdatePostOptions) {
      
      try {
        const postFind = await Post.findBy('secure_id', options.secureId);
    
        if (!postFind) {
          throw new NotFoundException(
            'There is no post for this id.',
            404,
            'E_NOT_FOUND'
          );
        }
      postFind.merge(options.post);
      await postFind.save();

      return postFind; 
    } catch (error) {
      throw new Exception(
        error.message || 'Internal Server Error',
        error.status || 500,
        error.code || 'E_INTERNAL_SERVER_ERROR'
      );
    }
  }
}
