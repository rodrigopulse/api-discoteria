import { Router } from 'express'

import UsuarioController from './controllers/UsuarioController'
import AlbumController from './controllers/AlbumController'

const routes = Router()

routes.post('/usuario', UsuarioController.create)
routes.post('/usuario/login', UsuarioController.login)

routes.get('/album/:id', AlbumController.id)

export default routes
