import { FastifyInstance } from "fastify"
import { geraMensagem } from "./controller/geraMensagem"


export async function appRoutes(app: FastifyInstance) {
  app.post('/msgs', geraMensagem)
}