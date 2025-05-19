import { defineConfig } from '@kubb/core'
import { pluginClient } from '@kubb/plugin-client'
import { pluginOas } from '@kubb/plugin-oas'
import { pluginReactQuery } from '@kubb/plugin-react-query'
import { pluginTs } from '@kubb/plugin-ts'

export default defineConfig({
	root: '.',
	input: {
		path: '../api/openapi.json',
	},
	output: {
		path: '@gen',
		clean: true,
	},
	plugins: [
		pluginOas({ validate: false }),
		pluginTs({
			output: { path: 'ts' },
			unknownType: 'unknown',
			transformers: {
				name: (name, type) =>
					type === 'file'
						? name.replaceAll(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
						: name,
			},
		}),
		pluginClient({
			output: { path: 'axios' },
			importPath: '@/lib/client',
			pathParamsType: 'object',
			paramsType: 'object',
			dataReturnType: 'data',
			transformers: {
				name: (name, type) =>
					type === 'file'
						? name.replaceAll(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
						: name,
			},
		}),
		pluginReactQuery({
			output: {
				path: 'hooks',
			},
			client: {
				importPath: '@/lib/client',
				dataReturnType: 'data',
			},
			paramsType: 'object',
		}),
	],
})
