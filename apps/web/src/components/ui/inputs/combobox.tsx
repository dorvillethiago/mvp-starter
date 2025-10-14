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
import { Check, ChevronsUpDown } from 'lucide-react'
import * as React from 'react'

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
	filter?: (value: string, search: string) => number
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
	filter,
	disabled = false,
	className,
	isLoading = false,
}: ComboboxProps) {
	const [open, setOpen] = React.useState(false)
	const [selectedValue, setSelectedValue] = React.useState(value || '')

	const [cachedSelectedOption, setCachedSelectedOption] =
		React.useState<Option | null>(null)

	React.useEffect(() => {
		if (value !== undefined) {
			setSelectedValue(value)
		}
	}, [value])

	React.useEffect(() => {
		if (selectedValue && options.length > 0) {
			const option = options.find((opt) => opt.value === selectedValue)
			if (option) {
				setCachedSelectedOption(option)
			}
		} else if (!selectedValue) {
			setCachedSelectedOption(null)
		}
	}, [selectedValue, options])

	const handleSelect = (currentValue: string) => {
		const newValue = currentValue === selectedValue ? '' : currentValue
		setSelectedValue(newValue)
		setOpen(false)
		onValueChange?.(newValue)
	}

	const selectedOption =
		options.find((option) => option.value === selectedValue) ||
		cachedSelectedOption

	const displayOptions = React.useMemo(() => {
		if (
			cachedSelectedOption &&
			selectedValue === cachedSelectedOption.value &&
			!options.some((opt) => opt.value === cachedSelectedOption.value)
		) {
			return [cachedSelectedOption, ...options]
		}
		return options
	}, [options, cachedSelectedOption, selectedValue])

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					aria-expanded={open}
					className={cn(
						'w-full justify-between bg-white font-normal',
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
				<Command filter={filter} shouldFilter={!onSearch}>
					{onSearch && (
						<CommandInput
							placeholder={searchPlaceholder}
							className="h-9"
							onValueChange={onSearch}
							value={search}
						/>
					)}
					<CommandList>
						<CommandEmpty>
							{isLoading ? 'Carregando...' : emptyMessage}
						</CommandEmpty>
						<CommandGroup>
							{displayOptions.map((option) => (
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
