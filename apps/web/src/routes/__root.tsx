import { Toaster } from '@/components/ui/sonner'
import { ReactQueryClientProvider } from '@/providers/query-client'
import { ThemeProvider } from '@/providers/theme'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
	component: () => (
		<ReactQueryClientProvider>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<Outlet />
				<TanStackRouterDevtools />
				<ReactQueryDevtools initialIsOpen={false} />
				<Toaster />
			</ThemeProvider>
		</ReactQueryClientProvider>
	),
})
