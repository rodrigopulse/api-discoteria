import { Request, Response } from 'express'

import Usuario from '../schemas/Usuario'

class UsuarioController {
  public async id (req: Request, res: Response): Promise<Response> {
    const id: string = req.path.split('/').pop()
    const usuario = await Usuario.find({ _id: id })

    return res.json(usuario)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const usuario = await Usuario.create(req.body)

    return res.json(usuario)
  }
}

export default new UsuarioController()
