import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jwt-simple'

import Usuario from '../schemas/Usuario'

class UsuarioController {
  // Cria Usuário
  public async create (req: Request, res: Response): Promise<Response> {
    try {
      const usuario = await Usuario.create(req.body)
      return res.status(200).json({ _id: usuario._id, email: usuario.email, nome: usuario.nome })
    } catch (err) {
      return res.status(400).json({ mensagem: 'Usuário não criado', erro: err })
    }
  }

  // Login
  public async login (req: Request, res: Response): Promise<Response | void> {
    try {
      const usuario = await Usuario.find({ email: req.body.email })
      if (usuario.length === 0) {
        return res.status(401).json({ mensagem: 'Usuário e/ou senha incorretos' })
      }
      bcrypt.compare(req.body.senha, usuario[0].senha || '', function (err, result) {
        if (result) {
          const payload = { id: usuario[0]._id }
          const token = jwt.encode(payload, process.env.SECRET_JWT || '')
          return res.status(200).json({ _id: usuario[0]._id, email: usuario[0].email, token: token })
        } else if (err) {
          return res.status(401).json({ mensagem: 'Ocorreu um erro' })
        } else {
          return res.status(401).json({ mensagem: 'Usuário e/ou senha incorretos' })
        }
      })
    } catch (err) {
      return res.status(401).json({ mensagem: 'Ocorreu um problema', erro: err })
    }
  }
}

export default new UsuarioController()
