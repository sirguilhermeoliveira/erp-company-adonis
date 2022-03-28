import { DeletePostRepository } from '../Repositories';
import { TDeletePostOptions } from '../types';

export class DeletePostService {
  public async execute(options: TDeletePostOptions) {
    await new DeletePostRepository().handle(options);
  }
}
