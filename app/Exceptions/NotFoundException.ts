import { Exception } from '@adonisjs/core/build/standalone'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class NotFoundException extends Exception {
  public async handle(error, ctx: HttpContextContract) {
    ctx.response.status(error.status).send({ error: { message: error.message } })
  }
}
