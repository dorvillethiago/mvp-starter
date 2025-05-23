import { UserRound } from 'lucide-react'

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { generateDocumentTitle } from '@/utils/generate-doc-title'
import { createFileRoute } from '@tanstack/react-router'
import { LoginForm } from './-form'

export const Route = createFileRoute('/auth/sign-in/')({
	component: Login,
	head: () => ({
		meta: [{ title: generateDocumentTitle('Entrar') }],
	}),
})

function Login() {
	return (
		<section className="relative grid h-full place-items-center py-32">
			<div className="container mx-auto">
				<div className="flex flex-col gap-4">
					<Card className="mx-auto w-full max-w-md">
						<CardHeader className="flex flex-col items-center">
							<UserRound className="size-10 rounded-full bg-accent p-2.5 text-muted-foreground" />
							<CardTitle className="text-xl">
								Faça login com seu email
							</CardTitle>
							<CardDescription>
								Digite suas informações para acessar
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="mb-4 flex items-center gap-4">
								<span className="h-px w-full bg-input" />
								<span className="text-muted-foreground text-xs">ou</span>
								<span className="h-px w-full bg-input" />
							</div>
							<LoginForm />
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	)
}
