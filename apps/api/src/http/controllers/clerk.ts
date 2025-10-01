import { database } from '@/infra/database'
import Elysia, { t } from 'elysia'

export const clerkWebhookController = new Elysia().post(
	'/clerk',
	async ({ body }: { body: any }) => {
		const { type, data } = body

		if (type === 'user.created') {
			database.user.create({ data: { clerkUserId: data.id } })
			return 'User created' as const
		}

		throw new Error('Event not supported')
	},
	{
		response: t.String(),
	},
)
