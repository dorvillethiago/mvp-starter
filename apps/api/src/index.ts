import fs from 'node:fs'
import cors from '@elysiajs/cors'
import swagger from '@elysiajs/swagger'
import { env } from '@yolk-oss/elysia-env'
import { Elysia } from 'elysia'
import { router } from './http/router'
import { envValidator } from './infra/config/env'
import { errorHandler } from './infra/config/error'

const app = new Elysia()
	.onStart(async () => {
		if (!process.env.FRONTEND_URL) {
			console.warn(
				'WARNING: `FRONTEND_URL` environment variable is not set. CORS may fail.',
			)
		}

		if (process.env.ENV === 'dev') {
			const docs = await fetch(`${process.env.URL}/docs/json`)
			const json = await docs.json()
			fs.writeFile('../web/openapi.json', JSON.stringify(json), (err) => {
				if (err) console.error(err)
			})
		}
	})
	.use(cors())
	.onError(errorHandler)
	.use(env(envValidator))
	.use(
		swagger({
			path: '/docs',
			documentation: {
				info: {
					title: 'API',
					version: '1.0.0',
					description: 'API Documentation',
				},
			},
			scalarConfig: {
				theme: 'deepSpace',
			},
		}),
	)
	.use(router)
	.listen(process.env.PORT || 3000)

console.log(
	`🦊 Elysia is running at ${process.env.URL ?? `${app.server?.hostname}:${app.server?.port}`}`,
)
