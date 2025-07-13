import { Clock2Icon } from 'lucide-react'
import * as React from 'react'

import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface TimeInputProps {
	value?: Date
	onChange?: (date: Date | undefined) => void
	placeholder?: string
	disabled?: boolean
}

export function TimeInput({
	value,
	onChange,
	placeholder,
	disabled = false,
}: TimeInputProps) {
	const getTimeString = (date: Date | undefined) => {
		if (!date) return ''
		return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
	}

	const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const [hours, minutes] = e.target.value.split(':').map(Number)

		if (Number.isNaN(hours) || Number.isNaN(minutes)) {
			onChange?.(undefined)
			return
		}

		// If no current value, create a new date with today's date
		const newDate = value ? new Date(value) : new Date()
		newDate.setHours(hours, minutes, 0)

		onChange?.(newDate)
	}

	return (
		<div className="relative flex w-full items-center">
			<Clock2Icon className="pointer-events-none absolute left-2.5 size-4 select-none text-muted-foreground" />
			<Input
				type="time"
				step="60"
				value={getTimeString(value)}
				onChange={handleTimeChange}
				disabled={disabled}
				placeholder={placeholder || 'Selecione o horário'}
				className={cn(
					'appearance-none pl-8',
					'[&::-webkit-calendar-picker-indicator]:hidden',
					'[&::-webkit-calendar-picker-indicator]:appearance-none',
				)}
			/>
		</div>
	)
}
