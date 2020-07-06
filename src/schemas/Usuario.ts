import { Schema, Document, model } from 'mongoose'
import bcrypt from 'bcrypt'

interface UsuarioInterface extends Document {
  nome?: string,
  sobrenome?: string,
  email?: string,
  senha?: string,
}

const UsuarioSchema = new Schema({
  nome: String,
  sobrenome: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  senha: {
    type: String,
    required: true
  }
}, {
  collection: 'usuarios',
  versionKey: false,
  timestamps: true
})

UsuarioSchema.pre<UsuarioInterface>('save', async function (next) {
  if (!this.isModified('senha')) return next()
  try {
    // Criptografa a senha
    this.senha = await bcrypt.hash(this.senha, 12)
    return next()
  } catch (err) {
    return next(err)
  }
})

export default model<UsuarioInterface>('Usuario', UsuarioSchema)
