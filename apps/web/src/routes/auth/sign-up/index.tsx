import { UserPlus } from 'lucide-react'

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { generateDocumentTitle } from '@/utils/generate-doc-title'
import { Link, createFileRoute } from '@tanstack/react-router'
import { SignUpForm } from './-form'

export const Route = createFileRoute('/auth/sign-up/')({
	component: SignUp,
	head: () => ({
		meta: [{ title: generateDocumentTitle('Cadastrar-se') }],
	}),
})

function SignUp() {
	return (
		<section className="relative grid h-full place-items-center py-32">
			<div className="container mx-auto">
				<div className="flex flex-col gap-4">
					<Card className="mx-auto w-full max-w-md">
						<CardHeader className="flex flex-col items-center">
							<UserPlus className="size-10 rounded-full bg-accent p-2.5 text-muted-foreground" />
							<CardTitle className="text-xl">Crie sua Conta</CardTitle>
							<CardDescription>
								Realize o cadastro para entrar no sistema
							</CardDescription>
						</CardHeader>
						<CardContent>
							<SignUpForm />
							<div className="mt-4 text-center text-sm">
								<span className="text-muted-foreground">Já tem uma conta?</span>
								<Link
									to="/auth/sign-in"
									className="font-medium text-primary hover:underline"
								>
									Entrar
								</Link>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	)
}
