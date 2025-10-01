import { clerkClient } from '@/infra/auth/clerk'
import { HttpException } from '@/infra/config/error'
import { Elysia } from 'elysia'

const notSignedInError = new HttpException({
	code: 401,
	message: 'Unauthorized: Not signed in',
})

const invalidTokenError = new HttpException({
	code: 401,
	message: 'Unauthorized: Invalid token',
})

export const useClerkAuth = (app: Elysia) =>
	app.derive(async function handler({ request }) {
		try {
			const { isSignedIn, toAuth } =
				await clerkClient.authenticateRequest(request)
			if (!isSignedIn) throw notSignedInError
			const auth = toAuth()
			if (!auth.userId) throw notSignedInError
			const user = await clerkClient.users.getUser(auth.userId)
			return { user: user }
		} catch (err) {
			throw invalidTokenError
		}
	})
