import { validator } from '@ioc:Adonis/Core/Validator';
import { CustomMessages, UserUpdateValidator } from 'App/Validators';
import { UpdateUserRepository } from '../Repositories';
import { TUpdateUserServiceOptions } from '../types';

export class UpdateUserService {
  public async execute(options: TUpdateUserServiceOptions) {
    const userUpdateValidator = new UserUpdateValidator(options.request);
    await validator.validate({
      schema: userUpdateValidator.schema,
      data: options.user,
      messages: new CustomMessages().messages,
    });

    return new UpdateUserRepository().handle({
      user: options.user,
      secureId: options.secureId,
    });
  }
}
