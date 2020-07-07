import { Schema, Document, model } from 'mongoose'
import Album from './Album'

interface ColecaoInterface extends Document {
  idUsuario?: string,
  albuns?: string[]
}

const ColecaoSchema = new Schema({
  idUsuario: String,
  albuns: [{ type: Schema.Types.ObjectId, ref: Album }]
}, {
  collection: 'colecao',
  versionKey: false,
  timestamps: true
})

export default model<ColecaoInterface>('Colecao', ColecaoSchema)
