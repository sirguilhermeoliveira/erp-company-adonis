import { validator } from '@ioc:Adonis/Core/Validator';
import { CustomMessages, PostStoreValidator } from 'App/Validators';
import { CreatePostRepository } from '../Repositories';
import { TStorePostsServiceOptions } from '../types';

export class CreatePostService {
  public async execute(options: TStorePostsServiceOptions) {
    const postStoreValidator = new PostStoreValidator(options.request);

    await validator.validate({
      schema: postStoreValidator.schema,
      data: options.post,
      messages: new CustomMessages().messages,
    });
    return new CreatePostRepository().handle({ post: options.post });
  }
}
