import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/login', 'Sessions/SessionsController.signIn')
})

Route.group(() => {
  Route.post('/refresh', 'Sessions/SessionsController.refresh')
})

Route.group(() => {
  Route.post('/logout', 'Sessions/SessionsController.signOut')
})

/* import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Route from '@ioc:Adonis/Core/Route'
import { User } from 'App/Models'

Route.get('/login', async ({ auth }: HttpContextContract) => {
  const user = await User.findOrFail(1)
  const jwt = await auth.use('jwt').login(user)
  return { user, jwt }
})

Route.post('/refresh', async ({ auth, request }: HttpContextContract) => {
  const refreshToken = await request.input('refresh_token')
  const jwt = await auth.use('jwt').loginViaRefreshToken(refreshToken)
  return { user: auth.user, jwt }
})

Route.post('/logout', async ({ auth }: HttpContextContract) => {
  await auth.use('jwt').revoke()
  return {
    revoked: true,
  }
})
 */
