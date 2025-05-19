import Elysia from 'elysia'
import { helloController } from '../controllers/hello'

export const router = new Elysia()
	.use(helloController)