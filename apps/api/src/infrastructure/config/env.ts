import { t } from 'elysia'

export const envValidator = {
	HOST: t.String(),
	PORT: t.String(),
	URL: t.String({ format: 'uri' }),

	DATABASE_URL: t.String({ format: 'uri' }),
}
