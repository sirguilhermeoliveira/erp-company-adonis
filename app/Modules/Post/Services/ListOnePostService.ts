import { ListOnePostRepository } from '../Repositories';
import { TListOnePostOptions } from '../types';

export class ListOnePostService {
  public async execute(options: TListOnePostOptions) {
    return new ListOnePostRepository().handle(options);
  }
}
