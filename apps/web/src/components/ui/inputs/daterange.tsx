import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { Button } from '../button'
import { Calendar } from '../calendar'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'

export interface DateRange {
	from?: Date
	to?: Date
}

interface DateRangePickerProps {
	value?: DateRange
	onChange?: (value: DateRange) => void
	className?: string
	placeholder?: string
	disabled?: boolean
	numberOfMonths?: number
}

export function DateRangePicker({
	value,
	onChange,
	className,
	placeholder,
	disabled = false,
	numberOfMonths = 2,
}: DateRangePickerProps) {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					className={cn(
						'w-full justify-start text-left font-normal',
						!value && 'text-muted-foreground',
						className,
					)}
					disabled={disabled}
				>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{value?.from ? (
						value.to ? (
							<>
								{format(value.from, 'dd/MM/yyyy')} -{' '}
								{format(value.to, 'dd/MM/yyyy')}
							</>
						) : (
							format(value.from, 'dd/MM/yyyy')
						)
					) : (
						<span className="text-muted-foreground">{placeholder}</span>
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0" align="start">
				<Calendar
					mode="range"
					selected={value ? { from: value.from, to: value.to } : undefined}
					onSelect={(range) => {
						if (range) onChange?.(range)
					}}
					numberOfMonths={numberOfMonths}
				/>
			</PopoverContent>
		</Popover>
	)
}
