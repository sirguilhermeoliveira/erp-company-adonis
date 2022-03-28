import { validator } from '@ioc:Adonis/Core/Validator';
import { CustomMessages, UserStoreValidator } from 'App/Validators';
import { CreateUserRepository } from '../Repositories';
import { TStoreUsersServiceOptions } from '../types';

export class CreateUserService {
  public async execute(options: TStoreUsersServiceOptions) {
    const userStoreValidator = new UserStoreValidator(options.request);

    await validator.validate({
      schema: userStoreValidator.schema,
      data: options.user,
      messages: new CustomMessages().messages,
    });
    return new CreateUserRepository().handle({ user: options.user });
  }
}
