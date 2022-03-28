import { validator } from '@ioc:Adonis/Core/Validator';
import { CustomMessages, PostUpdateValidator } from 'App/Validators';
import { UpdatePostRepository } from '../Repositories';
import { TUpdatePostServiceOptions } from '../types';

export class UpdatePostService {
  public async execute(options: TUpdatePostServiceOptions) {
    const postUpdateValidator = new PostUpdateValidator(options.request);
    await validator.validate({
      schema: postUpdateValidator.schema,
      data: options.post,
      messages: new CustomMessages().messages,
    });

    return new UpdatePostRepository().handle({
      post: options.post,
      secureId: options.secureId,
    });
  }
}
