import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

import './routes/auth'
import './routes/users'
import './routes/posts'
