import { Schema, Document, model } from 'mongoose'
import Artista from './Artista'

interface AlbumInterface extends Document {
  nome?: string
  ano?: number,
  genero?: string,
  capa?: string,
  artistas?: string[],
  ladoa: string[],
  ladob: string[]
}

const AlbumSchema = new Schema({
  nome: {
    type: String,
    require: true
  },
  ano: Number,
  genero: String,
  capa: String,
  ladoa: Array,
  ladob: Array,
  artistas: [{ type: Schema.Types.ObjectId, ref: Artista }]
}, {
  collection: 'albuns',
  versionKey: false,
  timestamps: true
})

export default model<AlbumInterface>('Album', AlbumSchema)
