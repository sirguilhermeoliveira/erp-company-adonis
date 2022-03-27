import { IUserDTO } from 'App/Dtos'
import User from 'App/Models/User'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

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
  public async index({ response }) {
    const users = await User.all()

    return response.ok(users)
}

  public async store({ request, response }) {
    const userSchema = schema.create({
        title: schema.string({ trim: true }, [
            rules.maxLength(255)
        ]),
        content: schema.string({ escape: true }, [
            rules.maxLength(1000)
        ]),
    })

    const payload: any = await request.validate({ schema: userSchema })
    const user: User = await User.create(payload)

    return response.ok(user)
}

public async show({ params, response }) {
  const { id }: { id: number } = params

  const user: any = await User.find(id)
  if (!user) {
      return response.notFound({ message: 'User not found' })
  }

  return response.ok(user)
}

public async update({ request, params, response }) {
  const userSchema = schema.create({
      title: schema.string({ trim: true }, [
          rules.maxLength(255)
      ]),
      content: schema.string({ escape: true }, [
          rules.maxLength(1000)
      ]),
  })

  const payload: any = await request.validate({ schema: userSchema })

  const { id }: { id: number } = params

  const user: any = await User.find(id)
  if (!user) {
      return response.notFound({ message: 'User not found' })
  }

  user.title = payload.title
  user.content = payload.content

  await user.save()

  return response.ok(user)
}
}
