import { useAuth } from '@clerk/clerk-react'
import { createFileRoute, Navigate, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/auth')({
  component: LayoutComponent,
})

function LayoutComponent() {
  const { userId, isLoaded } = useAuth()

  if (!isLoaded) return <>Loading...</>
  if (userId) return <Navigate to='/app/home' />

  return <Outlet />
}
