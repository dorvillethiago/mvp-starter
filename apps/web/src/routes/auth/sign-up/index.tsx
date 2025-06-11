import { UserPlus } from 'lucide-react'

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
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
						</CardContent>
						<CardFooter>
							<p className="mx-auto text-muted-foreground text-sm">
								Já tem uma conta?{' '}
								<Link
									to="/auth/sign-in"
									className="font-medium text-foreground hover:underline"
								>
									Entrar
								</Link>
							</p>
						</CardFooter>
					</Card>
				</div>
			</div>
		</section>
	)
}
