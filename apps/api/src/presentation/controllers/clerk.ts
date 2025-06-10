import { createUserUseCase } from '@/application/use-cases/create-user'
import { User } from '@/domain/entities/user'
import Elysia from 'elysia'
import { v4 as uuidv4 } from 'uuid'

export const clerkWebhookController = new Elysia().post(
	'/clerk',
	async ({ body }: { body: any }) => {
		const { type, data } = body

		if (type === 'user.created') {
			const user = new User(uuidv4(), data.id, new Date(), new Date())
			await createUserUseCase(user)
			return { message: 'User created' }
		}
	},
)
