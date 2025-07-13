import { CalendarIcon, Clock2Icon } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/inputs'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

interface DateTimeInputProps {
	value?: Date
	onChange?: (date: Date | undefined) => void
	placeholder?: string
}

export function DateTimeInput({
	value,
	onChange,
	placeholder,
}: DateTimeInputProps) {
	const formatDate = (date: Date | undefined) => {
		if (!date) return placeholder || '...'
		return date.toLocaleDateString('pt-BR', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
		})
	}

	const formatTime = (date: Date | undefined) => {
		if (!date) return ''
		return date.toLocaleTimeString('pt-BR', {
			hour: '2-digit',
			minute: '2-digit',
		})
	}

	const handleDateChange = (newDate: Date | undefined) => {
		if (!newDate) {
			onChange?.(undefined)
			return
		}

		// Preserve the time from the current value or use default time
		const currentTime = value
			? {
					hours: value.getHours(),
					minutes: value.getMinutes(),
					seconds: value.getSeconds(),
				}
			: { hours: 10, minutes: 30, seconds: 0 }

		const combinedDate = new Date(newDate)
		combinedDate.setHours(
			currentTime.hours,
			currentTime.minutes,
			currentTime.seconds,
		)

		onChange?.(combinedDate)
	}

	const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!value) return

		const [hours, minutes] = e.target.value.split(':').map(Number)
		const newDate = new Date(value)
		newDate.setHours(hours, minutes, 0)

		onChange?.(newDate)
	}

	const getTimeString = (date: Date | undefined) => {
		if (!date) return '10:30'
		return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
	}

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					className="w-full justify-start text-left font-normal"
				>
					<CalendarIcon className="h-4 w-4" />
					<div className="flex items-center gap-2">
						<span
							className={cn({
								'text-muted-foreground': !value,
							})}
						>
							{formatDate(value)}
						</span>
						<span className="text-muted-foreground text-xs">
							{formatTime(value)}
						</span>
					</div>
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0" align="start">
				<Card className="w-fit py-4">
					<CardContent className="px-4">
						<Calendar
							mode="single"
							selected={value}
							onSelect={handleDateChange}
							className="bg-transparent p-0"
						/>
					</CardContent>
					<CardFooter className="!pt-4 flex flex-col gap-6 border-t px-4">
						<div className="relative flex w-full items-center gap-2">
							<Clock2Icon className="pointer-events-none absolute left-2.5 size-4 select-none text-muted-foreground" />
							<Input
								type="time"
								step="1"
								disabled={!value}
								value={getTimeString(value)}
								onChange={handleTimeChange}
								className="appearance-none pl-8 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
							/>
						</div>
					</CardFooter>
				</Card>
			</PopoverContent>
		</Popover>
	)
}
