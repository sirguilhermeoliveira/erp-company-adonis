import { ListAllPostsRepository } from '../Repositories';

export class ListAllPostsService {
  public async execute(options) {
    return new ListAllPostsRepository().handle(options);
  }
}
