import { Request, Response, NextFunction } from 'express'
import jwt from 'jwt-simple'
import dotenv from 'dotenv'

dotenv.config()

class Auth {
  verificaToken = async (req: Request, res:Response, next:NextFunction):Promise<Response | void> => {
    try {
      const token = req.headers['x-access-token']
      const idUser = req.headers['id-user']?.toString()
      if (token === undefined) {
        return res.status(400).json({ mensagem: 'Não existe token no header' })
      } else {
        const decoded = await jwt.decode(token.toString(), process.env.SECRET_JWT || '')
        console.log('decoded: ', decoded, 'idUser: ', idUser)
        if (decoded.id === idUser) {
          return next()
        } else {
          return res.status(401).json({ mensagem: 'Token invalido' })
        }
      }
    } catch (err) {
      return res.status(401).json({ mensagem: 'Token invalido' })
    }
  }
}
export default Auth
