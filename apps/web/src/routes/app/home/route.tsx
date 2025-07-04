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
import { motion } from 'framer-motion'

export const Route = createFileRoute('/app/home')({
	component: LayoutComponent,
})

function LayoutComponent() {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset className="p-3 lg:p-6">
				<motion.div
					initial={{
						opacity: 0,
						y: -20,
					}}
					transition={{
						type: 'spring',
						stiffness: 300,
						damping: 24,
						duration: 3,
					}}
					animate={{
						opacity: 1,
						y: 0,
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
								<BreadcrumbLink href="/components">Components</BreadcrumbLink>
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
						y: 20,
					}}
					transition={{
						type: 'spring',
						stiffness: 300,
						damping: 24,
						duration: 3,
					}}
					animate={{
						opacity: 1,
						y: 0,
					}}
				>
					<Outlet />
				</motion.div>
			</SidebarInset>
		</SidebarProvider>
	)
}
