import { motion } from 'framer-motion'
import { type LucideIcon } from 'lucide-react'
import * as React from 'react'

import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar'

export function NavSecondary({
	items,
	...props
}: {
	items: {
		title: string
		url: string
		icon: LucideIcon
	}[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
	return (
		<SidebarGroup {...props}>
			<SidebarGroupContent>
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
					{items.map((item) => (
						<motion.li
							key={item.title}
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0 },
							}}
							transition={{
								type: 'spring',
								stiffness: 300,
								damping: 24,
								duration: 1.2,
							}}
							style={{ listStyle: 'none' }}
						>
							<SidebarMenuItem>
								<SidebarMenuButton asChild size="sm">
									<a href={item.url}>
										<item.icon />
										<span>{item.title}</span>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</motion.li>
					))}
				</motion.ul>
			</SidebarGroupContent>
		</SidebarGroup>
	)
}
