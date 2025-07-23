import { type ComponentProps, useState } from 'react'
import { Input } from './input'

interface CepInputProps extends Omit<ComponentProps<'input'>, 'onChange'> {
	onChange?: (value: string) => void
}

export function CepInput({ value, onChange, placeholder }: CepInputProps) {
	const [cep, setCep] = useState(value || '')

	function formatCep(value: string) {
		const cleanedValue = value.replace(/\D/g, '')
		if (cleanedValue.length > 8) {
			const resettedValue = cleanedValue.slice(0, 8)
			return resettedValue.replace(/(\d{5})(\d)/, '$1-$2')
		}
		return cleanedValue.replace(/(\d{5})(\d)/, '$1-$2')
	}

	async function handleCepChange(e: React.ChangeEvent<HTMLInputElement>) {
		e.target.value = formatCep(e.target.value)
		setCep(e.target.value)
		onChange?.(e.target.value)
	}

	return (
		<Input
			type="text"
			value={cep}
			onChange={handleCepChange}
			placeholder={placeholder}
			maxLength={9}
		/>
	)
}
