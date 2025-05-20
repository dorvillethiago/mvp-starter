import { Toaster } from '@/components/ui/sonner'
import { ReactQueryClientProvider } from '@/providers/query-client'
import { ThemeProvider } from '@/providers/theme'
import { ClerkProvider } from '@clerk/clerk-react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
	component: () => (
		<ClerkProvider 
			signInFallbackRedirectUrl="/sign-in"
			publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
			<ReactQueryClientProvider>
				<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
					<Outlet />
					<TanStackRouterDevtools />
					<ReactQueryDevtools initialIsOpen={false} />
					<Toaster />
				</ThemeProvider>
			</ReactQueryClientProvider>
		</ClerkProvider>
	),
})
