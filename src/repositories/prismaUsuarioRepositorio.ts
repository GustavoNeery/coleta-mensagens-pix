import { prisma } from '../lib/prisma'
import { Prisma } from '@prisma/client'

export class PrismaUsuarioRepositorio {
  async create(data: Prisma.UsuarioCreateInput) {
    const usuario = await prisma.usuario.create({
      data,
    })

    return usuario
  }
}