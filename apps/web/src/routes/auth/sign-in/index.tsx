import { UserRound } from 'lucide-react'

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { FadeIn } from '@/lib/motion/fade-in'
import { generateDocumentTitle } from '@/utils/generate-doc-title'
import { Link, createFileRoute } from '@tanstack/react-router'
import { LoginForm } from './-form'

export const Route = createFileRoute('/auth/sign-in/')({
	component: Login,
	head: () => ({
		meta: [{ title: generateDocumentTitle('Entrar') }],
	}),
})

function Login() {
	return (
		<FadeIn className="relative grid h-full place-items-center py-32">
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
							<LoginForm />
						</CardContent>
						<CardFooter>
							<p className="mx-auto text-muted-foreground text-sm">
								Não tem uma conta?{' '}
								<Link
									to="/auth/sign-up"
									className="font-medium text-foreground hover:underline"
								>
									Crie uma agora
								</Link>
							</p>
						</CardFooter>
					</Card>
				</div>
			</div>
		</FadeIn>
	)
}
