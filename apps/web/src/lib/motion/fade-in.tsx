import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

type FadeInProps = {
	children: ReactNode
	duration?: number
	delay?: number
	className?: string
	direction?: Direction
	distance?: number
}

export function FadeIn({
	children,
	duration = 0.5,
	delay = 0,
	className = '',
	direction = 'none',
	distance = 20,
}: FadeInProps) {
	// Compute initial offset based on direction and distance
	let initialOffset: { x?: number; y?: number } = {}
	switch (direction) {
		case 'up':
			initialOffset = { y: distance }
			break
		case 'down':
			initialOffset = { y: -distance }
			break
		case 'left':
			initialOffset = { x: distance }
			break
		case 'right':
			initialOffset = { x: -distance }
			break
		default:
			initialOffset = {}
			break
	}

	return (
		<motion.div
			initial={{ opacity: 0, ...initialOffset }}
			animate={{ opacity: 1, x: 0, y: 0 }}
			exit={{ opacity: 0, ...initialOffset }}
			transition={{ duration, delay }}
			className={className}
		>
			{children}
		</motion.div>
	)
}
