import { ScreenLoader } from '@/components/shared/screen-loader'
import { useAuth } from '@clerk/clerk-react'
import { Navigate, Outlet, createFileRoute } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'

export const Route = createFileRoute('/auth')({
	component: LayoutComponent,
})

function LayoutComponent() {
	const { userId, isLoaded } = useAuth()

	return (
		<>
			{isLoaded && userId && <Navigate to="/app/home" />}

			<AnimatePresence mode="wait">
				{isLoaded && !userId && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.5 }}
						className="size-full"
					>
						<Outlet />
					</motion.div>
				)}
			</AnimatePresence>

			{!isLoaded && <ScreenLoader />}
		</>
	)
}
