import { cn } from '@/lib/utils'
import '@/lib/loaders.css'
import { Loader2 } from 'lucide-react'

export interface LoaderProps {
	variant?:
		| 'circular'
		| 'classic'
		| 'pulse'
		| 'pulse-dot'
		| 'dots'
		| 'typing'
		| 'wave'
		| 'bars'
		| 'terminal'
		| 'text-blink'
		| 'text-shimmer'
		| 'loading-dots'
		| 'full-size'
	size?: 'sm' | 'md' | 'lg'
	text?: string
	className?: string
}

export function CircularLoader({
	className,
	size = 'md',
}: {
	className?: string
	size?: 'sm' | 'md' | 'lg'
}) {
	const sizeClasses = {
		sm: 'size-4',
		md: 'size-5',
		lg: 'size-6',
	}

	return (
		<div
			className={cn(
				'animate-spin rounded-full border-2 border-primary border-t-transparent',
				sizeClasses[size],
				className,
			)}
		>
			<span className="sr-only">Loading</span>
		</div>
	)
}

export function ClassicLoader({
	className,
	size = 'md',
}: {
	className?: string
	size?: 'sm' | 'md' | 'lg'
}) {
	const sizeClasses = {
		sm: 'size-4',
		md: 'size-5',
		lg: 'size-6',
	}

	const barSizes = {
		sm: { height: '6px', width: '1.5px' },
		md: { height: '8px', width: '2px' },
		lg: { height: '10px', width: '2.5px' },
	}

	const spinnerBars = [
		{ key: 'bar-1', rotation: 0, delay: 0 },
		{ key: 'bar-2', rotation: 30, delay: 0.1 },
		{ key: 'bar-3', rotation: 60, delay: 0.2 },
		{ key: 'bar-4', rotation: 90, delay: 0.3 },
		{ key: 'bar-5', rotation: 120, delay: 0.4 },
		{ key: 'bar-6', rotation: 150, delay: 0.5 },
		{ key: 'bar-7', rotation: 180, delay: 0.6 },
		{ key: 'bar-8', rotation: 210, delay: 0.7 },
		{ key: 'bar-9', rotation: 240, delay: 0.8 },
		{ key: 'bar-10', rotation: 270, delay: 0.9 },
		{ key: 'bar-11', rotation: 300, delay: 1.0 },
		{ key: 'bar-12', rotation: 330, delay: 1.1 },
	]

	return (
		<div className={cn('relative', sizeClasses[size], className)}>
			<div className="absolute h-full w-full">
				{spinnerBars.map((bar) => (
					<div
						key={bar.key}
						className="absolute animate-[spinner-fade_1.2s_linear_infinite] rounded-full bg-primary"
						style={{
							top: '0',
							left: '50%',
							marginLeft:
								size === 'sm' ? '-0.75px' : size === 'lg' ? '-1.25px' : '-1px',
							transformOrigin: `${size === 'sm' ? '0.75px' : size === 'lg' ? '1.25px' : '1px'} ${size === 'sm' ? '10px' : size === 'lg' ? '14px' : '12px'}`,
							transform: `rotate(${bar.rotation}deg)`,
							opacity: 0,
							animationDelay: `${bar.delay}s`,
							height: barSizes[size].height,
							width: barSizes[size].width,
						}}
					/>
				))}
			</div>
			<span className="sr-only">Loading</span>
		</div>
	)
}

export function PulseLoader({
	className,
	size = 'md',
}: {
	className?: string
	size?: 'sm' | 'md' | 'lg'
}) {
	const sizeClasses = {
		sm: 'size-4',
		md: 'size-5',
		lg: 'size-6',
	}

	return (
		<div className={cn('relative', sizeClasses[size], className)}>
			<div className="absolute inset-0 animate-[thin-pulse_1.5s_ease-in-out_infinite] rounded-full border-2 border-primary" />
			<span className="sr-only">Loading</span>
		</div>
	)
}

export function PulseDotLoader({
	className,
	size = 'md',
}: {
	className?: string
	size?: 'sm' | 'md' | 'lg'
}) {
	const sizeClasses = {
		sm: 'size-1',
		md: 'size-2',
		lg: 'size-3',
	}

	return (
		<div
			className={cn(
				'animate-[pulse-dot_1.2s_ease-in-out_infinite] rounded-full bg-primary',
				sizeClasses[size],
				className,
			)}
		>
			<span className="sr-only">Loading</span>
		</div>
	)
}

export function DotsLoader({
	className,
	size = 'md',
}: {
	className?: string
	size?: 'sm' | 'md' | 'lg'
}) {
	const dotSizes = {
		sm: 'h-1.5 w-1.5',
		md: 'h-2 w-2',
		lg: 'h-2.5 w-2.5',
	}

	const containerSizes = {
		sm: 'h-4',
		md: 'h-5',
		lg: 'h-6',
	}

	const dots = [
		{ key: 'dot-1', delay: 0 },
		{ key: 'dot-2', delay: 160 },
		{ key: 'dot-3', delay: 320 },
	]

	return (
		<div
			className={cn(
				'flex items-center space-x-1',
				containerSizes[size],
				className,
			)}
		>
			{dots.map((dot) => (
				<div
					key={dot.key}
					className={cn(
						'animate-[bounce-dots_1.4s_ease-in-out_infinite] rounded-full bg-primary',
						dotSizes[size],
					)}
					style={{
						animationDelay: `${dot.delay}ms`,
					}}
				/>
			))}
			<span className="sr-only">Loading</span>
		</div>
	)
}

export function TypingLoader({
	className,
	size = 'md',
}: {
	className?: string
	size?: 'sm' | 'md' | 'lg'
}) {
	const dotSizes = {
		sm: 'h-1 w-1',
		md: 'h-1.5 w-1.5',
		lg: 'h-2 w-2',
	}

	const containerSizes = {
		sm: 'h-4',
		md: 'h-5',
		lg: 'h-6',
	}

	const typingDots = [
		{ key: 'typing-dot-1', delay: 0 },
		{ key: 'typing-dot-2', delay: 250 },
		{ key: 'typing-dot-3', delay: 500 },
	]

	return (
		<div
			className={cn(
				'flex items-center space-x-1',
				containerSizes[size],
				className,
			)}
		>
			{typingDots.map((dot) => (
				<div
					key={dot.key}
					className={cn(
						'animate-[typing_1s_infinite] rounded-full bg-primary',
						dotSizes[size],
					)}
					style={{
						animationDelay: `${dot.delay}ms`,
					}}
				/>
			))}
			<span className="sr-only">Loading</span>
		</div>
	)
}

export function WaveLoader({
	className,
	size = 'md',
}: {
	className?: string
	size?: 'sm' | 'md' | 'lg'
}) {
	const barWidths = {
		sm: 'w-0.5',
		md: 'w-0.5',
		lg: 'w-1',
	}

	const containerSizes = {
		sm: 'h-4',
		md: 'h-5',
		lg: 'h-6',
	}

	const heights = {
		sm: ['6px', '9px', '12px', '9px', '6px'],
		md: ['8px', '12px', '16px', '12px', '8px'],
		lg: ['10px', '15px', '20px', '15px', '10px'],
	}

	const waveBars = [
		{ key: 'wave-bar-1', delay: 0, heightIndex: 0 },
		{ key: 'wave-bar-2', delay: 100, heightIndex: 1 },
		{ key: 'wave-bar-3', delay: 200, heightIndex: 2 },
		{ key: 'wave-bar-4', delay: 300, heightIndex: 3 },
		{ key: 'wave-bar-5', delay: 400, heightIndex: 4 },
	]

	return (
		<div
			className={cn(
				'flex items-center gap-0.5',
				containerSizes[size],
				className,
			)}
		>
			{waveBars.map((bar) => (
				<div
					key={bar.key}
					className={cn(
						'animate-[wave_1s_ease-in-out_infinite] rounded-full bg-primary',
						barWidths[size],
					)}
					style={{
						animationDelay: `${bar.delay}ms`,
						height: heights[size][bar.heightIndex],
					}}
				/>
			))}
			<span className="sr-only">Loading</span>
		</div>
	)
}

export function BarsLoader({
	className,
	size = 'md',
}: {
	className?: string
	size?: 'sm' | 'md' | 'lg'
}) {
	const barWidths = {
		sm: 'w-1',
		md: 'w-1.5',
		lg: 'w-2',
	}

	const containerSizes = {
		sm: 'h-4 gap-1',
		md: 'h-5 gap-1.5',
		lg: 'h-6 gap-2',
	}

	const bars = [
		{ key: 'bar-1', delay: 0 },
		{ key: 'bar-2', delay: 0.2 },
		{ key: 'bar-3', delay: 0.4 },
	]

	return (
		<div className={cn('flex', containerSizes[size], className)}>
			{bars.map((bar) => (
				<div
					key={bar.key}
					className={cn(
						'h-full animate-[wave-bars_1.2s_ease-in-out_infinite] bg-primary',
						barWidths[size],
					)}
					style={{
						animationDelay: `${bar.delay}s`,
					}}
				/>
			))}
			<span className="sr-only">Loading</span>
		</div>
	)
}

export function TerminalLoader({
	className,
	size = 'md',
}: {
	className?: string
	size?: 'sm' | 'md' | 'lg'
}) {
	const cursorSizes = {
		sm: 'h-3 w-1.5',
		md: 'h-4 w-2',
		lg: 'h-5 w-2.5',
	}

	const textSizes = {
		sm: 'text-xs',
		md: 'text-sm',
		lg: 'text-base',
	}

	const containerSizes = {
		sm: 'h-4',
		md: 'h-5',
		lg: 'h-6',
	}

	return (
		<div
			className={cn(
				'flex items-center space-x-1',
				containerSizes[size],
				className,
			)}
		>
			<span className={cn('font-mono text-primary', textSizes[size])}>
				{'>'}
			</span>
			<div
				className={cn(
					'animate-[blink_1s_step-end_infinite] bg-primary',
					cursorSizes[size],
				)}
			/>
			<span className="sr-only">Loading</span>
		</div>
	)
}

export function TextBlinkLoader({
	text = 'Thinking',
	className,
	size = 'md',
}: {
	text?: string
	className?: string
	size?: 'sm' | 'md' | 'lg'
}) {
	const textSizes = {
		sm: 'text-xs',
		md: 'text-sm',
		lg: 'text-base',
	}

	return (
		<div
			className={cn(
				'animate-[text-blink_2s_ease-in-out_infinite] font-medium',
				textSizes[size],
				className,
			)}
		>
			{text}
		</div>
	)
}

export function TextShimmerLoader({
	text = 'Thinking',
	className,
	size = 'md',
}: {
	text?: string
	className?: string
	size?: 'sm' | 'md' | 'lg'
}) {
	const textSizes = {
		sm: 'text-xs',
		md: 'text-sm',
		lg: 'text-base',
	}

	return (
		<div
			className={cn(
				'bg-[linear-gradient(to_right,var(--muted-foreground)_40%,var(--foreground)_60%,var(--muted-foreground)_80%)]',
				'bg-size-[200%_auto] bg-clip-text font-medium text-transparent',
				'animate-[shimmer_4s_infinite_linear]',
				textSizes[size],
				className,
			)}
		>
			{text}
		</div>
	)
}

export function TextDotsLoader({
	className,
	text = 'Thinking',
	size = 'md',
}: {
	className?: string
	text?: string
	size?: 'sm' | 'md' | 'lg'
}) {
	const textSizes = {
		sm: 'text-xs',
		md: 'text-sm',
		lg: 'text-base',
	}

	return (
		<div className={cn('inline-flex items-center', className)}>
			<span className={cn('font-medium text-primary', textSizes[size])}>
				{text}
			</span>
			<span className="inline-flex">
				<span className="animate-[loading-dots_1.4s_infinite_0.2s] text-primary">
					.
				</span>
				<span className="animate-[loading-dots_1.4s_infinite_0.4s] text-primary">
					.
				</span>
				<span className="animate-[loading-dots_1.4s_infinite_0.6s] text-primary">
					.
				</span>
			</span>
		</div>
	)
}

export function FullSizeLoader() {
	return (
		<div className="grid size-full place-items-center">
			<Loader2 className="size-24 animate-spin text-primary" />
		</div>
	)
}

function Loader({
	variant = 'circular',
	size = 'md',
	text,
	className,
}: LoaderProps) {
	switch (variant) {
		case 'circular':
			return <CircularLoader size={size} className={className} />
		case 'classic':
			return <ClassicLoader size={size} className={className} />
		case 'pulse':
			return <PulseLoader size={size} className={className} />
		case 'pulse-dot':
			return <PulseDotLoader size={size} className={className} />
		case 'dots':
			return <DotsLoader size={size} className={className} />
		case 'typing':
			return <TypingLoader size={size} className={className} />
		case 'wave':
			return <WaveLoader size={size} className={className} />
		case 'bars':
			return <BarsLoader size={size} className={className} />
		case 'terminal':
			return <TerminalLoader size={size} className={className} />
		case 'text-blink':
			return <TextBlinkLoader text={text} size={size} className={className} />
		case 'text-shimmer':
			return <TextShimmerLoader text={text} size={size} className={className} />
		case 'loading-dots':
			return <TextDotsLoader text={text} size={size} className={className} />
		case 'full-size':
			return <FullSizeLoader />
		default:
			return <CircularLoader size={size} className={className} />
	}
}

export { Loader }
