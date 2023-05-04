import WebPush from 'web-push'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'

const publicKey = 'BK5cQjW917siQ2Mnc5SyuBz_-xkJ10DeoOfj2hgCBT8ywqcYd29vn-hCIbqXmfR-Wk2rl61336hlom4YQLNlcSQ'

const privateKey = 'JN4KeP6beYx5OubV-zc2Q46cFT_-F7hS02EUG8oA8e4' 

WebPush.setVapidDetails(
  'http://localhost:3333',
  publicKey,
  privateKey  
)

export async function notificationRoutes(app: FastifyInstance) {
  app.get('/push/public_key', () => {
    return {
      publicKey,  
    }
  })  

  app.post('/push/register', (request, reply) => {
    console.log(request.body)

    return reply.status(201).send()
  })

  app.post('/push/send', async (request, reply) => {
    const sendPushBody = z.object({
      subscription: z.object({
        endpoint: z.string(),
        keys: z.object({
          p256dh: z.string(),
          auth: z.string()
        })  
      })
    })

    const { subscription } = sendPushBody.parse(request.body)

    setTimeout(() => {
      WebPush.sendNotification(subscription, 'Hello do Back')
    }, 5000)
    return reply.status(201).send()
  })


}