import { ListAllUsersRepository } from '../Repositories';

export class ListAllUsersService {
  public async execute(options) {
    return new ListAllUsersRepository().handle(options);
  }
}
