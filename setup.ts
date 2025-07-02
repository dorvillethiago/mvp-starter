import { cpSync, existsSync, readdirSync, statSync } from 'node:fs'
import { basename, join } from 'node:path'

const IGNORED_DIRS = new Set(['node_modules', '.git', 'dist', 'build', 'out'])

function findEnvExamples(baseDir: string): string[] {
	const results: string[] = []

	for (const item of readdirSync(baseDir)) {
		const fullPath = join(baseDir, item)

		if (IGNORED_DIRS.has(basename(fullPath))) {
			continue
		}

		const stat = statSync(fullPath)

		if (stat.isDirectory()) {
			results.push(...findEnvExamples(fullPath))
		} else if (basename(fullPath) === '.env.example') {
			results.push(fullPath)
		}
	}

	return results
}

const envExamples = findEnvExamples(process.cwd())

// Copy all .env.example files to .env, as before
for (const examplePath of envExamples) {
	const targetPath = examplePath.replace('.env.example', '.env')

	if (!existsSync(targetPath)) {
		cpSync(examplePath, targetPath)
		console.log(`✅ Created .env at: ${targetPath}`)
	} else {
		console.log(`⚠️ Skipped (already exists): ${targetPath}`)
	}
}

// Additionally, for the web app copy .env.production from .env.example
const webAppDir = join(process.cwd(), 'apps', 'web')
const envProductionPath = join(webAppDir, '.env.production')
const envTargetPath = join(webAppDir, '.env.example')

if (!existsSync(envProductionPath)) {
	cpSync(envTargetPath, envProductionPath)
	console.log(
		`✅ Created .env in web app from .env.production: ${envTargetPath}`,
	)
} else {
	console.log(
		`⚠️ Skipped (web .env.production already exists): ${envTargetPath}`,
	)
}
