import { IPostDTO } from 'App/Dtos'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {
  CreatePostService,
  ListAllPostsService,
  ListOnePostService,
  UpdatePostService,
  DeletePostService,
} from 'App/Modules/Post/Services'

export interface IPostRequest {
  post: IPostDTO
}

export type TypeListAllPostOptions = {
  page: number
  perPage: number
  content: string
  image: string
  noPaginate: boolean
}

export default class PostsController {
  public async index({ response }: HttpContextContract) {
    return new ListAllPostsService().execute(response)
  }

  public async store({ request }) {
    const post = request.body() as IPostDTO
    return new CreatePostService().execute({ request, post })
  }

  public async show({ params }) {
    return new ListOnePostService().execute({ secureId: params.id })
  }

  public async update({ request, params }) {
    const post = request.body() as IPostDTO
    const secureId = params.id

    return new UpdatePostService().execute({ request, post, secureId })
  }

  public async destroy({ response, params }: HttpContextContract) {
    await new DeletePostService().execute({ secureId: params.id })

    return response.status(200).send({ message: 'Post deleted successfully ' })
  }
}
