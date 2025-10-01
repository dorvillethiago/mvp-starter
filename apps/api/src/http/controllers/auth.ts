import { database } from '@/infra/database'
import { UserPlain } from '@/infra/generated/prismabox/User'
import Elysia from 'elysia'
import { useClerkAuth } from '../middlewares/clerk'

export const authController = new Elysia().use(useClerkAuth).get(
	'/me',
	async ({ user }) => {
		const dbUser = await database.user.findUnique({
			where: {
				clerkUserId: user.id,
			},
		})
		if (!dbUser) {
			throw new Error('User not found')
		}
		return dbUser
	},
	{
		response: UserPlain,
	},
)
