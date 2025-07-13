import { Input } from '@/components/ui/inputs'
import { type ChangeEvent, type ComponentProps, useState } from 'react'

interface CPFInputProps extends Omit<ComponentProps<'input'>, 'onChange'> {
	onChange?: (value: string) => void
}

export function CPFInput({ value, onChange, placeholder }: CPFInputProps) {
	const [cpf, setCpf] = useState(value || '')

	function formatCPF(value: string) {
		const numbers = value.replace(/\D/g, '')

		const formatted = numbers
			.replace(/(\d{3})(\d)/, '$1.$2')
			.replace(/(\d{3})(\d)/, '$1.$2')
			.replace(/(\d{3})(\d{1,2})$/, '$1-$2')

		return formatted
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value
		const formattedValue = formatCPF(inputValue)
		setCpf(formattedValue)
		onChange?.(formattedValue)
	}

	return (
		<Input
			type="text"
			value={cpf}
			onChange={handleChange}
			placeholder={placeholder}
			maxLength={14}
		/>
	)
}

export default CPFInput
