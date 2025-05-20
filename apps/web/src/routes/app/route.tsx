import { useAuth } from '@clerk/clerk-react'
import { createFileRoute, Navigate, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/app')({
  component: LayoutComponent,
})

function LayoutComponent() {
  const { userId, isLoaded } = useAuth()

  if (!isLoaded) return <>Loading...</>
  if (!userId) return <Navigate to="/auth/sign-in" />

  return  <Outlet />
}
