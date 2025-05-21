import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useSignIn } from '@clerk/clerk-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Eye, EyeClosed } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

export function LoginForm() {
	const { signIn, setActive, isLoaded } = useSignIn()

	const schema = z.object({
		email: z.string().email(),
		password: z.string().min(8),
	})

	type FormValues = z.infer<typeof schema>
	const [showPassword, setShowPassword] = useState(false)

	const { register, handleSubmit, formState } = useForm<FormValues>({
		resolver: zodResolver(schema),
	})

	const { mutate, isPending } = useMutation({
		mutationKey: ['signIn'],
		mutationFn: async (data: FormValues) => {
			if (!signIn || !setActive) throw new Error('Ocorreu um erro inesperado')
			const { email, password } = data
			const signInAttempt = await signIn.create({
				identifier: email,
				password,
			})
			return setActive({ session: signInAttempt.createdSessionId })
		},
		onError: (error) => {
			toast.error(error.message)
		},
		onSuccess: () => {
			toast.success('Autenticação realizada com sucesso!')
		},
	})

	return (
		<form
			onSubmit={handleSubmit((data: FormValues) => {
				mutate(data)
			})}
			className="grid gap-4"
		>
			<fieldset className="grid gap-2">
				<Label htmlFor="email">Email</Label>
				<Input
					{...register('email')}
					id="email"
					type="email"
					placeholder="m@exemplo.com"
					required
				/>
			</fieldset>
			<fieldset className="grid gap-2">
				<div className="flex justify-between">
					<Label htmlFor="password">Senha</Label>
					<a href="/#" className="text-sm underline">
						Esqueci a senha
					</a>
				</div>
				<div className="flex gap-1">
					<Input
						{...register('password')}
						id="password"
						type={showPassword ? 'text' : 'password'}
						placeholder="********"
						required
					/>
					<Button
						type="button"
						variant="outline"
						className="px-3"
						onClick={() => setShowPassword((prev) => !prev)}
					>
						{showPassword ? (
							<Eye className="size-5" />
						) : (
							<EyeClosed className="size-5" />
						)}
					</Button>
				</div>
			</fieldset>
			<Button
				disabled={!formState.isValid || !isLoaded || isPending}
				type="submit"
				className="w-full"
			>
				{isPending ? 'Entrando...' : 'Entrar'}
			</Button>
		</form>
	)
}
