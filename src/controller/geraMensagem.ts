import { FastifyReply, FastifyRequest } from "fastify"
import { PrismaUsuarioRepositorio } from "../repositories/prismaUsuarioRepositorio"
import { CriaUsuario } from "../services/criaUsuario"
import { z } from "zod"


export async function geraMensagem(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    
    nome: z.string(),
    cpfCnpj: z.string(),
    ispb: z.string(),
    agencia: z.string(),
    contaTransacional: z.string(),
    tipoConta: z.string()
  })

  const {nome,
    cpfCnpj,
    ispb,
    agencia,
    contaTransacional,
    tipoConta } = registerBodySchema.parse(request.body)

    const repositorioUsuario = new PrismaUsuarioRepositorio()
    const criaUsuarioPagador = new CriaUsuario(repositorioUsuario)
    const criaUsuarioRecebedor = new CriaUsuario(repositorioUsuario)


    await criaUsuarioPagador.execute({
      nome,
      cpfCnpj,
      ispb,
      agencia,
      contaTransacional,
      tipoConta,
    })

    await criaUsuarioRecebedor.execute({
      nome,
      cpfCnpj,
      ispb,
      agencia,
      contaTransacional,
      tipoConta,
    })

  return reply.status(201).send()
}