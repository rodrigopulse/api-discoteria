import { Router } from 'express'

import UsuarioController from './controllers/UsuarioController'

const routes = Router()

routes.get('/usuario/:id', UsuarioController.id)
routes.post('/usuario', UsuarioController.create)

export default routes
