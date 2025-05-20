import { Elysia } from 'elysia'
import { clerkClient } from '@/infrastructure/auth/clerk'
import { HttpException } from '@/infrastructure/config/error'

export const ClerkAuth = (app: Elysia) => app.derive(async function handler({ request }) {
    const authHeader = request.headers.get('authorization')
    const token = authHeader?.replace('Bearer ', '')

    if (!token) throw new HttpException({
            code: 401,
            message: 'Unauthorized: No token provided',
    })

    try {
        const { isSignedIn, toAuth } = await clerkClient.authenticateRequest(request)
        if (!isSignedIn) {
            throw new HttpException({
                code: 401,
                message: 'Unauthorized: Not signed in',
            })
        }
        const auth = toAuth()
        const user = await clerkClient.users.getUser(auth.userId)

        return {
            user: user
        }
    } catch (err) {
        console.error('[ClerkAuth] Failed:', err)
        throw new HttpException({
            code: 401,
            message: 'Unauthorized: Invalid token',
        })
    }
})
