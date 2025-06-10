import { clerkWebhookController } from '@/presentation/controllers/clerk'
import Elysia from 'elysia'

export const webhooksRouter = new Elysia({ prefix: '/webhooks' }).use(clerkWebhookController)