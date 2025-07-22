import { Check, ChevronsUpDown } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

interface Option {
	value: string
	label: string
}

interface ComboboxProps {
	options: Option[]
	placeholder?: string
	searchPlaceholder?: string
	emptyMessage?: string
	value?: string
	onValueChange?: (value: string) => void
	onSearch?: (value: string) => void
	search?: string
	disabled?: boolean
	className?: string
	isLoading?: boolean
}

export function Combobox({
	options,
	placeholder = 'Selecione uma opção...',
	searchPlaceholder = 'Buscar...',
	emptyMessage = 'Nenhuma opção encontrada.',
	value,
	onValueChange,
	onSearch,
	search,
	disabled = false,
	className,
	isLoading = false,
}: ComboboxProps) {
	const [open, setOpen] = React.useState(false)
	const [selectedValue, setSelectedValue] = React.useState(value || '')

	React.useEffect(() => {
		if (value !== undefined) {
			setSelectedValue(value)
		}
	}, [value])

	const handleSelect = (currentValue: string) => {
		const newValue = currentValue === selectedValue ? '' : currentValue
		setSelectedValue(newValue)
		setOpen(false)
		onValueChange?.(newValue)
	}

	const selectedOption = options.find(
		(option) => option.value === selectedValue,
	)

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					aria-expanded={open}
					className={cn(
						'w-full justify-between font-normal',
						{
							'text-muted-foreground': !selectedOption,
						},
						className,
					)}
					disabled={disabled || isLoading}
				>
					{isLoading
						? 'Carregando...'
						: selectedOption
							? selectedOption.label
							: placeholder}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent align="start" className="w-full p-0">
				<Command shouldFilter={!onSearch}>
					<CommandInput
						placeholder={searchPlaceholder}
						className="h-9"
						onValueChange={onSearch}
						value={search}
					/>
					<CommandList>
						<CommandEmpty>
							{isLoading ? 'Carregando cidades...' : emptyMessage}
						</CommandEmpty>
						<CommandGroup>
							{options.map((option) => (
								<CommandItem
									key={option.value}
									value={option.value}
									onSelect={handleSelect}
								>
									{option.label}
									<Check
										className={cn(
											'ml-auto h-4 w-4',
											selectedValue === option.value
												? 'opacity-100'
												: 'opacity-0',
										)}
									/>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	)
}
