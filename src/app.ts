import fastify from "fastify"

export const app = fastify()

app.get('/api/first', async (request, reply) => {
  console.log("teste")
  return reply.status(200).send()
})