import { ScreenLoader } from '@/components/shared/screen-loader'
import { AppSidebar } from '@/components/sidebar'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from '@/components/ui/sidebar'
import { useAuth } from '@clerk/clerk-react'
import { Navigate, Outlet, createFileRoute } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'

export const Route = createFileRoute('/app')({
	component: LayoutComponent,
})

function LayoutComponent() {
	const { userId, isLoaded } = useAuth()

	return (
		<>
			<AnimatePresence mode="wait">
				{isLoaded && userId && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1 }}
						className="size-full"
					>
						<SidebarProvider>
							<AppSidebar />
							<SidebarInset>
								<ScrollArea className="h-screen p-3 lg:p-6">
									<motion.div
										initial={{
											opacity: 0,
											x: -10,
										}}
										transition={{
											type: 'spring',
											stiffness: 300,
											damping: 24,
											duration: 3,
										}}
										animate={{
											opacity: 1,
											x: 0,
										}}
										className="flex items-center gap-2 pb-4"
									>
										<SidebarTrigger />
										<Breadcrumb>
											<BreadcrumbList>
												<BreadcrumbItem>
													<BreadcrumbLink href="/">Home</BreadcrumbLink>
												</BreadcrumbItem>
												<BreadcrumbSeparator />
												<BreadcrumbItem>
													<BreadcrumbLink href="/components">
														Components
													</BreadcrumbLink>
												</BreadcrumbItem>
												<BreadcrumbSeparator />
												<BreadcrumbItem>
													<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
												</BreadcrumbItem>
											</BreadcrumbList>
										</Breadcrumb>
									</motion.div>
									<motion.div
										initial={{
											opacity: 0,
											x: 10,
										}}
										transition={{
											type: 'spring',
											stiffness: 300,
											damping: 24,
											duration: 1,
										}}
										animate={{
											opacity: 1,
											x: 0,
										}}
										exit={{
											opacity: 0,
											x: 10,
										}}
									>
										<Outlet />
									</motion.div>
								</ScrollArea>
							</SidebarInset>
						</SidebarProvider>
						<Outlet />
					</motion.div>
				)}
			</AnimatePresence>

			{!isLoaded && <ScreenLoader />}
			{isLoaded && !userId && <Navigate to="/auth/sign-in" />}
		</>
	)
}
