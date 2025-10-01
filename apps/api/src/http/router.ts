import Elysia from 'elysia'
import { authController } from './controllers/auth'
import { helloController } from './controllers/hello'
import { webhooksRouter } from './webhooks'

export const router = new Elysia()
	.use(webhooksRouter)
	.use(helloController)
	.use(authController)
