import { Router } from 'express'
import Auth from './services/auth'

import UsuarioController from './controllers/UsuarioController'
import AlbumController from './controllers/AlbumController'
import ColecaoController from './controllers/ColecaoController'

const auth = new Auth()
const routes = Router()

routes.post('/usuario/criar', UsuarioController.criar)
routes.post('/usuario/login', UsuarioController.login)

routes.get('/album/id/:id', AlbumController.id)

routes.get('/colecao/id/:id', auth.verificaToken, ColecaoController.id)

export default routes
