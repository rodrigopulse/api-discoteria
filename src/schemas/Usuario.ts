import { Schema, Document, model } from 'mongoose'

interface UsuarioInterface extends Document {
  nome?: string,
  sobrenome?: string,
  email?: string,
  senha?: string,
}

const UsuarioSchema = new Schema({
  nome: String
}, {
  timestamps: true
})

export default model<UsuarioInterface>('Usuario', UsuarioSchema)
