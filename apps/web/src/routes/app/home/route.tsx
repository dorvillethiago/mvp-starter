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

export const Route = createFileRoute('/app/home')({
	component: LayoutComponent,
})

function LayoutComponent() {
	return (
		<SidebarProvider>
			<AppSidebar />
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
								<BreadcrumbLink href="/components">Components</BreadcrumbLink>
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
		</SidebarProvider>
	)
}
