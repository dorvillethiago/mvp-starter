import path from 'node:path'
import { Schema, ValidateEnv } from '@julr/vite-plugin-validate-env'
import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		TanStackRouterVite({
			target: 'react',
			autoCodeSplitting: true,
			generatedRouteTree: './src/route-tree.gen.ts',
		}),
		react(),
		tailwindcss(),
		ValidateEnv({
			validator: 'builtin',
			schema: {
				VITE_API_URL: Schema.string(),
				VITE_DOCUMENT_TITLE_NAME: Schema.string(),
				VITE_CLERK_PUBLISHABLE_KEY: Schema.string()
			}
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
