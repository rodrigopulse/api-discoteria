import { Schema, Document, model } from 'mongoose'

interface ArtistaInterface extends Document {
  nome?: string
}

const ArtistaSchema = new Schema({
  nome: {
    type: String,
    require: true
  }
}, {
  collection: 'artistas',
  versionKey: false,
  timestamps: true
})

export default model<ArtistaInterface>('Artista', ArtistaSchema)
