import Route from '@ioc:Adonis/Core/Route'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

Route.post('/login', async ({ auth, request }:HttpContextContract) => {
   const data = request.only(['email', 'password'])
    return auth.use("jwt").login(data.email, data.password);
});

Route.post('/refresh', async ({ auth, request }:HttpContextContract) => {
    const refreshToken = request.input("refresh_token");
    return auth.use("jwt").loginViaRefreshToken(refreshToken);
});

Route.post('/logout', async ({ auth }:HttpContextContract) => {
  await auth.use('jwt').revoke()
  return {
    revoked: true
  }
})