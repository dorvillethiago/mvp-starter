import { motion } from 'framer-motion'
import { type LucideIcon } from 'lucide-react'

import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import { Link } from '@tanstack/react-router'

export function NavGroup({
	name,
	data,
}: {
	name?: string
	data: {
		name: string
		url: string
		icon: LucideIcon
	}[]
}) {
	return (
		<SidebarGroup className="group-data-[collapsible=icon]:hidden">
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
				{name && <SidebarGroupLabel>{name}</SidebarGroupLabel>}
			</motion.div>
			<motion.ul
				initial="hidden"
				animate="visible"
				variants={{
					hidden: {},
					visible: {
						transition: {
							staggerChildren: 0.3,
						},
					},
				}}
			>
				{data.map((item) => {
					return (
						<motion.li
							key={item.name}
							variants={{
								hidden: { opacity: 0, x: -20 },
								visible: { opacity: 1, x: 0 },
							}}
							transition={{
								type: 'spring',
								stiffness: 300,
								damping: 24,
								duration: 2,
							}}
							style={{ listStyle: 'none' }}
						>
							<SidebarMenuItem>
								<SidebarMenuButton
									asChild
									className={cn(
										'transition-colors disabled:opacity-100 aria-disabled:opacity-100',
									)}
								>
									<Link to={item.url}>
										<item.icon />
										<span>{item.name}</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</motion.li>
					)
				})}
			</motion.ul>
		</SidebarGroup>
	)
}
