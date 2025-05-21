import { createClerkClient } from '@clerk/backend'

const publishableKey = process.env.CLERK_PUBLISHABLE_KEY;
if (!publishableKey) {
  throw new Error('CLERK_PUBLISHABLE_KEY environment variable is not set');
}

const secretKey = process.env.CLERK_SECRET_KEY;
if (!secretKey) {
  throw new Error('CLERK_SECRET_KEY environment variable is not set');
}

export const clerkClient = createClerkClient({
  secretKey,
  publishableKey,
})
