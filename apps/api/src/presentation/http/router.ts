import Elysia from 'elysia'
import { helloController } from '../controllers/hello'
import { webhooksRouter } from './webhooks'

export const router = new Elysia().use(webhooksRouter).use(helloController)
