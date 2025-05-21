import { clerkClient } from '@/infrastructure/auth/clerk'
import { HttpException } from '@/infrastructure/config/error'
import { Elysia } from 'elysia'

export const ClerkAuth = (app: Elysia) =>
	app.derive(async function handler({ request }) {
		try {
			const { isSignedIn, toAuth } =
				await clerkClient.authenticateRequest(request)
			if (!isSignedIn) {
				throw new HttpException({
					code: 401,
					message: 'Unauthorized: Not signed in',
				})
			}
			const auth = toAuth()
			const user = await clerkClient.users.getUser(auth.userId)

			return {
				user: user,
			}
		} catch (err) {
			throw new HttpException({
				code: 401,
				message: 'Unauthorized: Invalid token',
			})
		}
	})
