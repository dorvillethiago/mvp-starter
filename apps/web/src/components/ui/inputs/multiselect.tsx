import * as React from "react"
import { XIcon, ChevronsUpDownIcon, CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

export type MultiselectOption = {
  value: string
  label: string
  disabled?: boolean
}

type MultiselectProps = {
  options: MultiselectOption[]
  value: string[]
  onValueChange: (value: string[]) => void
  search?: string
  onSearchChange?: (search: string) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyMessage?: string
  disabled?: boolean
  maxDisplayed?: number
  className?: string
}

function Multiselect({
  options,
  value,
  onValueChange,
  search,
  onSearchChange,
  placeholder = "Select...",
  searchPlaceholder = "Search...",
  emptyMessage = "No results found.",
  disabled = false,
  maxDisplayed = 3,
  className,
}: MultiselectProps) {
  const [open, setOpen] = React.useState(false)

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen)
    if (!nextOpen) onSearchChange?.("")
  }

  const selectedSet = React.useMemo(() => new Set(value), [value])

  const optionLabelMap = React.useRef(new Map<string, string>())
  for (const o of options) {
    optionLabelMap.current.set(o.value, o.label)
  }

  const selectedOptions = value
    .filter((v) => optionLabelMap.current.has(v))
    .map((v) => ({ value: v, label: optionLabelMap.current.get(v)! }))

  function toggle(optionValue: string) {
    if (selectedSet.has(optionValue)) {
      onValueChange(value.filter((v) => v !== optionValue))
    } else {
      onValueChange([...value, optionValue])
    }
  }

  function remove(optionValue: string, e?: React.MouseEvent) {
    e?.preventDefault()
    e?.stopPropagation()
    onValueChange(value.filter((v) => v !== optionValue))
  }

  function clearAll(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    onValueChange([])
  }

  const displayed = selectedOptions.slice(0, maxDisplayed)
  const overflowCount = selectedOptions.length - displayed.length

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          size="lg"
          aria-expanded={open}
          disabled={disabled}
          className={cn(
            "w-full justify-between gap-1 font-normal",
            value.length > 0 ? "px-1.5" : "px-2",
            className
          )}
        >
          <span className="flex min-w-0 flex-1 flex-wrap items-center gap-1">
            {displayed.length === 0 && (
              <span className="text-muted-foreground px-0.5">
                {placeholder}
              </span>
            )}
            {displayed.map((option) => (
              <Badge
                key={option.value}
                variant="secondary"
                className="max-w-32 shrink-0 gap-0.5 pr-0.5"
              >
                <span className="truncate">{option.label}</span>
                <span
                  role="button"
                  tabIndex={-1}
                  className="hover:bg-muted-foreground/20 rounded-full p-0.5"
                  onPointerDown={(e) => e.preventDefault()}
                  onClick={(e) => remove(option.value, e)}
                >
                  <XIcon className="size-2.5!" />
                </span>
              </Badge>
            ))}
            {overflowCount > 0 && (
              <Badge variant="outline" className="shrink-0">
                +{overflowCount}
              </Badge>
            )}
          </span>

          <span className="flex shrink-0 items-center gap-0.5">
            {value.length > 0 && (
              <span
                role="button"
                tabIndex={-1}
                className="text-muted-foreground hover:text-foreground rounded-sm p-0.5"
                onPointerDown={(e) => e.preventDefault()}
                onClick={clearAll}
              >
                <XIcon className="size-3!" />
              </span>
            )}
            <ChevronsUpDownIcon className="text-muted-foreground size-3!" />
          </span>
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="w-(--radix-popover-trigger-width) p-0"
        align="start"
      >
        <Command shouldFilter={!onSearchChange}>
          <CommandInput
            placeholder={searchPlaceholder}
            value={search}
            onValueChange={onSearchChange}
          />
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            <CommandGroup className="mt-1">
              {options.map((option) => {
                const checked = selectedSet.has(option.value)
                return (
                  <CommandItem
                  className="mb-1"
                    key={option.value}
                    value={option.value}
                    keywords={[option.label]}
                    disabled={option.disabled}
                    data-checked={checked}
                    onSelect={() => toggle(option.value)}
                  >
                    <span
                      className={cn(
                        "border-input bg-input/20 dark:bg-input/30 flex size-3.5 shrink-0 items-center justify-center rounded-sm border",
                        checked && "bg-primary border-primary text-primary-foreground"
                      )}
                    >
                      {checked && <CheckIcon className="size-2.5!" />}
                    </span>
                    <span className="truncate">{option.label}</span>
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export { Multiselect }
