import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CreateSessionService } from 'App/Modules/Session/Services'
import { AuthenticationException } from '@adonisjs/auth/build/standalone'
import { User } from 'App/Models'

export default class SessionsController {
  public async signIn({ auth }: HttpContextContract) {
    const user = await User.findOrFail(1)
    const jwt = await auth.use('jwt').login(user)
    return { user, jwt }
  }
  public async signOut({ auth }: HttpContextContract) {
    try {
      await auth.use('jwt').revoke()
      return {
        revoked: true,
      }
    } catch (err) {
      throw new AuthenticationException(err.message, err.status, err.code)
    }
  }
  public async refresh(ctx: HttpContextContract) {
    const refreshToken = ctx.request.input('refresh_token')
    const jwt = await ctx.auth.use('jwt').loginViaRefreshToken(refreshToken)
    return { jwt }
  }
}
