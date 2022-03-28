import { DeleteUserRepository } from '../Repositories';
import { TDeleteUserOptions } from '../types';

export class DeleteUserService {
  public async execute(options: TDeleteUserOptions) {
    await new DeleteUserRepository().handle(options);
  }
}
