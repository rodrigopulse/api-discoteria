import { Request, Response } from 'express'
import Album from '../schemas/Album'

class AlbumController {
  public async id (req: Request, res:Response): Promise<Response> {
    try {
      const album = await Album.findById(req.params.id).populate('artistas')
      return res.status(200).json(album)
    } catch (err) {
      return res.status(400).json({ mensagem: 'Álbum não encontrado', erro: err })
    }
  }
}

export default new AlbumController()
