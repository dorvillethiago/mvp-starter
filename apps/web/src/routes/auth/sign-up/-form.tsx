import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { type ClerkAPIError, translateClerkError } from '@/lib/clerk'
import { useSignUp } from '@clerk/clerk-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Eye, EyeClosed } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

export function SignUpForm() {
	const { signUp, setActive, isLoaded } = useSignUp()
	const [verificationStep, setVerificationStep] = useState(false)

	const signUpSchema = z
		.object({
			email: z.string().email('Endereço de e-mail inválido'),
			password: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres'),
			confirmPassword: z
				.string()
				.min(8, 'A confirmação de senha deve ter pelo menos 8 caracteres'),
		})
		.refine((data) => data.password === data.confirmPassword, {
			message: 'As senhas não coincidem',
			path: ['confirmPassword'],
		})

	const verificationSchema = z.object({
		code: z.string().min(6, 'O código de verificação deve ter 6 dígitos'),
	})

	type SignUpFormValues = z.infer<typeof signUpSchema>
	type VerificationFormValues = z.infer<typeof verificationSchema>

	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)

	const signUpForm = useForm<SignUpFormValues>({
		resolver: zodResolver(signUpSchema),
	})

	const verificationForm = useForm<VerificationFormValues>({
		resolver: zodResolver(verificationSchema),
	})

	const signUpMutation = useMutation({
		mutationKey: ['signUp'],
		mutationFn: async (data: SignUpFormValues) => {
			if (!signUp) throw new Error('Ocorreu um erro inesperado')

			await signUp.create({
				emailAddress: data.email,
				password: data.password,
			})

			await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })
		},
		onError: (error) => {
			const clerkError = error as ClerkAPIError
			const code = clerkError?.errors?.[0]?.code
			const message = translateClerkError(code)
			toast.error(message)
		},
		onSuccess: () => {
			toast.success('Conta criada! Verifique seu e-mail para confirmação.')
			setVerificationStep(true)
			signUpForm.reset()
		},
	})

	const verificationMutation = useMutation({
		mutationKey: ['verifyEmail'],
		mutationFn: async (data: VerificationFormValues) => {
			if (!signUp || !setActive) throw new Error('Ocorreu um erro inesperado')

			const completeSignUp = await signUp.attemptEmailAddressVerification({
				code: data.code,
			})

			if (completeSignUp.status === 'complete') {
				await setActive({ session: completeSignUp.createdSessionId })
			}
		},
		onError: (error) => {
			const clerkError = error as ClerkAPIError
			const code = clerkError?.errors?.[0]?.code
			const message = translateClerkError(code)
			toast.error(message)
		},
		onSuccess: () => {
			toast.success('Conta verificada com sucesso!')
		},
	})

	if (verificationStep) {
		return (
			<form
				onSubmit={verificationForm.handleSubmit(
					(data: VerificationFormValues) => {
						verificationMutation.mutate(data)
					},
				)}
				className="grid gap-4"
			>
				<div className="mb-4 text-center">
					<h3 className="font-semibold">Verifique seu E-mail</h3>
					<p className="text-muted-foreground text-sm">
						Enviamos um código de verificação para seu e-mail.
					</p>
				</div>

				<fieldset className="grid gap-2">
					<Label htmlFor="code">Código de Verificação</Label>
					<Input
						{...verificationForm.register('code')}
						id="code"
						type="text"
						placeholder="123456"
						maxLength={6}
						required
					/>
					{verificationForm.formState.errors.code && (
						<p className="text-red-600 text-sm">
							{verificationForm.formState.errors.code.message}
						</p>
					)}
				</fieldset>

				<Button
					disabled={
						!verificationForm.formState.isValid ||
						!isLoaded ||
						verificationMutation.isPending
					}
					type="submit"
					className="w-full"
				>
					{verificationMutation.isPending
						? 'Verificando...'
						: 'Verificar E-mail'}
				</Button>

				<Button
					type="button"
					variant="outline"
					onClick={() => setVerificationStep(false)}
					className="w-full"
				>
					Voltar ao Cadastro
				</Button>
			</form>
		)
	}

	return (
		<form
			onSubmit={signUpForm.handleSubmit((data: SignUpFormValues) => {
				signUpMutation.mutate(data)
			})}
			className="grid gap-4"
		>
			<fieldset className="grid gap-2">
				<Label htmlFor="email">E-mail</Label>
				<Input
					{...signUpForm.register('email')}
					id="email"
					type="email"
					placeholder="joao@exemplo.com"
					required
				/>
				{signUpForm.formState.errors.email && (
					<p className="text-red-600 text-sm">
						{signUpForm.formState.errors.email.message}
					</p>
				)}
			</fieldset>

			<fieldset className="grid gap-2">
				<Label htmlFor="password">Senha</Label>
				<div className="flex gap-1">
					<Input
						{...signUpForm.register('password')}
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
				{signUpForm.formState.errors.password && (
					<p className="text-red-600 text-sm">
						{signUpForm.formState.errors.password.message}
					</p>
				)}
			</fieldset>

			<fieldset className="grid gap-2">
				<Label htmlFor="confirmPassword">Confirmar Senha</Label>
				<div className="flex gap-1">
					<Input
						{...signUpForm.register('confirmPassword')}
						id="confirmPassword"
						type={showConfirmPassword ? 'text' : 'password'}
						placeholder="********"
						required
					/>
					<Button
						type="button"
						variant="outline"
						className="px-3"
						onClick={() => setShowConfirmPassword((prev) => !prev)}
					>
						{showConfirmPassword ? (
							<Eye className="size-5" />
						) : (
							<EyeClosed className="size-5" />
						)}
					</Button>
				</div>
				{signUpForm.formState.errors.confirmPassword && (
					<p className="text-red-600 text-sm">
						{signUpForm.formState.errors.confirmPassword.message}
					</p>
				)}
			</fieldset>

			<Button
				disabled={
					!signUpForm.formState.isValid || !isLoaded || signUpMutation.isPending
				}
				type="submit"
				className="w-full"
			>
				{signUpMutation.isPending ? 'Criando Conta...' : 'Criar Conta'}
			</Button>
		</form>
	)
}
