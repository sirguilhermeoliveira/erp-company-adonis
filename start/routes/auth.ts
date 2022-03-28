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
