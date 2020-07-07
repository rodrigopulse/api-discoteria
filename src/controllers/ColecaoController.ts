import { Request, Response } from 'express'

import Colecao from '../schemas/Colecao'

class ColecaoController {
  public async id (req: Request, res:Response): Promise<Response> {
    try {
      const colecao = await Colecao.findOne({ idUsuario: req.params.id }).populate({ path: 'albuns', populate: { path: 'artistas' } })

      return res.status(200).json(colecao)
    } catch (err) {
      return res.status(400).json({ mensagem: 'Coleção não encontrada', erro: err })
    }
  }
}

export default new ColecaoController()
