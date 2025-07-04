import { AppSidebar } from '@/components/sidebar'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from '@/components/ui/sidebar'
import { Outlet, createFileRoute } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'

export const Route = createFileRoute('/app/home')({
	component: LayoutComponent,
})

function LayoutComponent() {
	return (
		<SidebarProvider>
			<AnimatePresence mode="wait">
				<motion.div
					key="sidebar"
					initial={{ x: -80, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: -80, opacity: 0 }}
					transition={{ type: 'spring', stiffness: 80, damping: 18, mass: 0.6 }}
					style={{
						position: 'absolute',
						left: 0,
						top: 0,
						bottom: 0,
						zIndex: 20,
					}}
				>
					<AppSidebar />
				</motion.div>
			</AnimatePresence>
			<AnimatePresence mode="wait">
				<motion.div
					key="content"
					initial={{ x: 80, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: 80, opacity: 0 }}
					transition={{ type: 'spring', stiffness: 80, damping: 18, mass: 0.6 }}
					style={{ marginLeft: 'var(--sidebar-width, 16rem)' }}
				>
					<SidebarInset className="p-3 lg:p-6">
						<div className="flex items-center gap-2 pb-4">
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
						</div>
						<Outlet />
					</SidebarInset>
				</motion.div>
			</AnimatePresence>
		</SidebarProvider>
	)
}
