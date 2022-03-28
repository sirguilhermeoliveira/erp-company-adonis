import { IUserDTO } from 'App/Dtos'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import {
  CreateUserService,
  ListAllUsersService,
  ListOneUserService,
  UpdateUserService,
  DeleteUserService,
} from 'App/Modules/User/Services';

export interface IUserRequest {
  user: IUserDTO
}

export type TypeListAllUserOptions = {
  page: number
  perPage: number
  name: string
  email: string
  noPaginate: boolean
}

export default class UsersController {
  public async index({ response }: HttpContextContract) {
     return new ListAllUsersService().execute(response) 
}

  public async store({ request }) {
    const user = request.body() as IUserDTO;
    return new CreateUserService().execute({ request, user });
}

public async show({ params }) {
  return new ListOneUserService().execute({ secureId: params.id });
}

public async update({ request, params }) {
  const user = request.body() as IUserDTO;
  const secureId = params.id

  return new UpdateUserService().execute({ request, user, secureId });
}

public async destroy({ response, params }: HttpContextContract) {
  await new DeleteUserService().execute({ secureId: params.id });

  return response
    .status(200)
    .send({ message: 'User deleted successfully ' });
}
}

