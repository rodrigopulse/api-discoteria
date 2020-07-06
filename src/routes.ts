import { Router } from 'express'

import UsuarioController from './controllers/UsuarioController'

const routes = Router()

routes.post('/usuario', UsuarioController.create)
routes.post('/usuario/login', UsuarioController.login)

export default routes
