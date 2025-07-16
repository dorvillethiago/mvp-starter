import { CalendarIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

interface DateInputProps {
	value?: Date
	onChange?: (date: Date | undefined) => void
	placeholder?: string
}

export function DateInput({ value, onChange, placeholder }: DateInputProps) {
	const formatDate = (date: Date | undefined) => {
		if (!date) return placeholder || '...'
		return date.toLocaleDateString('pt-BR', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
		})
	}

	const handleDateChange = (newDate: Date | undefined) => {
		onChange?.(newDate)
	}

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					className="w-full justify-start text-left font-normal"
				>
					<CalendarIcon className="h-4 w-4" />
					<span
						className={cn({
							'text-muted-foreground': !value,
						})}
					>
						{formatDate(value)}
					</span>
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0" align="start">
				<Calendar
					mode="single"
					selected={value}
					onSelect={handleDateChange}
					className="bg-transparent p-0"
				/>
			</PopoverContent>
		</Popover>
	)
}
