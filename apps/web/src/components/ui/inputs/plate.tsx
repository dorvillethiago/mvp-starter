import { Input } from '@/components/ui/input'
import {
	type ChangeEvent,
	type ComponentProps,
	useEffect,
	useState,
} from 'react'

interface PlateInputProps extends Omit<ComponentProps<'input'>, 'onChange'> {
	onChange?: (value: string) => void
}

export function PlateInput({
	value = '',
	onChange,
	placeholder,
	...rest
}: PlateInputProps) {
	const [plate, setPlate] = useState(value)

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (value !== plate) setPlate(value)
	}, [value])

	function formatPlate(value: string) {
		const cleaned = value.replace(/[^A-Za-z0-9]/g, '').toUpperCase()

		if (cleaned.length <= 3) {
			// Allow fewer than three characters without forcing formatting
			return cleaned
		}

		if (cleaned.length === 0) return ''

		// Ensure first three characters are letters
		const letters = cleaned.slice(0, 3).replace(/[^A-Z]/g, '')
		const remaining = cleaned.slice(3, 7)

		return `${letters}-${remaining}`.slice(0, 8) // Limit to 7 characters + hyphen
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value
		const formattedValue = formatPlate(inputValue)
		if (formattedValue !== plate) {
			setPlate(formattedValue)
			onChange?.(formattedValue)
		}
	}

	return (
		<Input
			type="text"
			value={plate}
			onChange={handleChange}
			placeholder={placeholder || 'AAA-1234'}
			maxLength={8} // 7 chars + hyphen
			{...rest}
		/>
	)
}

export default PlateInput
