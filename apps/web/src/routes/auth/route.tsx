import { ScreenLoader } from '@/components/shared/screen-loader'
import { FadeIn } from '@/lib/motion/fade-in'
import { useAuth } from '@clerk/clerk-react'
import { Navigate, Outlet, createFileRoute } from '@tanstack/react-router'
import { AnimatePresence } from 'framer-motion'

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
					<FadeIn className="size-full">
						<Outlet />
					</FadeIn>
				)}
			</AnimatePresence>

			{!isLoaded && <ScreenLoader />}
		</>
	)
}
