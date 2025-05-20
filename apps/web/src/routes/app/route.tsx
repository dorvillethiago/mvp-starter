import { ScreenLoader } from '@/components/shared/screen-loader'
import { useAuth } from '@clerk/clerk-react'
import { createFileRoute, Navigate, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/app')({
  component: LayoutComponent,
})

function LayoutComponent() {
  const { userId, isLoaded } = useAuth()
  
  return (
    <>
      { isLoaded && userId && <Outlet />}
      { !isLoaded && <ScreenLoader/>}
      { isLoaded && !userId && <Navigate to="/auth/sign-in" />}
    </>
  )
}
