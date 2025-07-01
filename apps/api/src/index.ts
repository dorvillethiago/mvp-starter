import fs from 'node:fs'
import cors from '@elysiajs/cors'
import swagger from '@elysiajs/swagger'
import { env } from '@yolk-oss/elysia-env'
import { Elysia } from 'elysia'
import { envValidator } from './infrastructure/config/env'
import { errorHandler } from './infrastructure/config/error'
import { router } from './presentation/http/router'

const app = new Elysia()
	.onStart(async () => {
		const docs = await fetch(`${process.env.URL}/docs/json`)
		const json = await docs.json()
		fs.writeFile('../web/openapi.json', JSON.stringify(json), (err) => {
			if (err) console.error(err)
		})
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
				theme: 'purple',
			},
		}),
	)
	.use(router)
	.listen(process.env.PORT || 3000)

console.log(
	`🦊 Elysia is running at ${process.env.URL ?? `${app.server?.hostname}:${app.server?.port}`}`,
)
