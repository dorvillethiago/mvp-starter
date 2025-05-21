import { ScreenLoader } from '@/components/shared/screen-loader'
import { useAuth } from '@clerk/clerk-react'
import { Navigate, Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth')({
	component: LayoutComponent,
})

function LayoutComponent() {
	const { userId, isLoaded } = useAuth()

	return (
		<>
			{isLoaded && userId && <Navigate to="/app/home" />}
			{isLoaded && !userId && <Outlet />}
			{!isLoaded && <ScreenLoader />}
		</>
	)
}
