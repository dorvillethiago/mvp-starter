import { cpSync, existsSync, readdirSync, statSync } from 'node:fs'
import { basename, join } from 'node:path'

const IGNORED_DIRS = new Set(['node_modules', '.git', 'dist', 'build'])

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

for (const examplePath of envExamples) {
	const targetPath = examplePath.replace('.env.example', '.env')

	if (!existsSync(targetPath)) {
		cpSync(examplePath, targetPath)
		console.log(`✅ Created .env at: ${targetPath}`)
	} else {
		console.log(`⚠️ Skipped (already exists): ${targetPath}`)
	}
}
