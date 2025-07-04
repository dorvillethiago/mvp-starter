import { motion } from 'framer-motion'
import { Check, ChevronsUpDown, GalleryVerticalEnd } from 'lucide-react'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { SidebarMenuButton } from '@/components/ui/sidebar'

export function EnvironmentSwitcher({
	environmentNames,
	currentEnvironmentName,
}: {
	environmentNames: string[]
	currentEnvironmentName: string
}) {
	return (
		<motion.ul
			initial="hidden"
			animate="visible"
			variants={{
				hidden: {},
				visible: { transition: { staggerChildren: 0.3 } },
			}}
		>
			<motion.li
				variants={{
					hidden: { opacity: 0, x: -20 },
					visible: { opacity: 1, x: 0 },
				}}
				transition={{
					type: 'spring',
					stiffness: 300,
					damping: 24,
					duration: 1.2,
				}}
				style={{ listStyle: 'none' }}
			>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{
								type: 'spring',
								stiffness: 300,
								damping: 24,
								duration: 2,
							}}
						>
							<SidebarMenuButton
								size="lg"
								className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
							>
								<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
									<GalleryVerticalEnd className="size-4" />
								</div>
								<div className="flex flex-col gap-0.5 leading-none">
									<span className="font-medium">{currentEnvironmentName}</span>
								</div>
								<ChevronsUpDown className="ml-auto" />
							</SidebarMenuButton>
						</motion.div>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-(--radix-dropdown-menu-trigger-width)"
						align="start"
					>
						{environmentNames.map((environmentName) => (
							<DropdownMenuItem key={environmentName} onSelect={() => {}}>
								{environmentName}{' '}
								{currentEnvironmentName === environmentName && (
									<Check className="ml-auto" />
								)}
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			</motion.li>
		</motion.ul>
	)
}
