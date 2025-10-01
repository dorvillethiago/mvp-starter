import { t } from 'elysia'

export const envValidator = {
	FRONTEND_URL: t.String(),
	HOST: t.String(),
	PORT: t.String(),
	URL: t.String({ format: 'uri' }),
	ENV: t.Union([t.Literal('dev'), t.Literal('prod')]),

	DATABASE_URL: t.String({ format: 'uri' }),

	CLERK_SECRET_KEY: t.String(),
	CLERK_PUBLISHABLE_KEY: t.String(),
}
