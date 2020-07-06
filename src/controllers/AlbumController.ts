import { Request, Response } from 'express'
import Album from '../schemas/Album'

class AlbumController {
  public async id (req: Request, res:Response): Promise<Response> {
    try {
      const album = await Album.findById(req.params.id).populate('artistas')
      const data = {
        nome: album.nome,
        artista: album.artistas[0],
        ano: album.ano,
        genero: album.genero,
        capa: album.capa,
        ladoA: album.ladoa,
        ladoB: album.ladob
      }
      console.log(album)
      return res.status(200).json(data)
    } catch (err) {
      return res.status(400).json({ mensagem: 'Álbum não encontrado', erro: err })
    }
  }
}

export default new AlbumController()
