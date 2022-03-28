import { ListOneUserRepository } from '../Repositories';
import { TListOneUserOptions } from '../types';

export class ListOneUserService {
  public async execute(options: TListOneUserOptions) {
    return new ListOneUserRepository().handle(options);
  }
}
