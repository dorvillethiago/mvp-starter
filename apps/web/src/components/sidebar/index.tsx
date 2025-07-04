import { BarChart2, Bell, FileBarChart, LifeBuoy, Send } from 'lucide-react'
import * as React from 'react'

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
} from '@/components/ui/sidebar'
import { EnvironmentSwitcher } from './environment-switcher'
import { NavGroup } from './nav-group'
import { NavSecondary } from './nav-secondary'
import { NavUser } from './nav-user'

const home = [
	{
		name: 'Home',
		url: '...',
		icon: BarChart2,
	},
]

const example = [
	{
		name: 'Charts',
		url: '...',
		icon: FileBarChart,
	},
	{
		name: 'Notifications',
		url: '...',
		icon: Bell,
	},
]

const extra = [
	{
		title: 'Support',
		url: '#',
		icon: LifeBuoy,
	},
	{
		title: 'Feedback',
		url: '#',
		icon: Send,
	},
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar className="" {...props}>
			<SidebarHeader>
				<EnvironmentSwitcher
					currentEnvironmentName="Acme Inc"
					environmentNames={['DriveX Inc']}
				/>
			</SidebarHeader>
			<SidebarContent>
				<NavGroup data={home} />
				<NavGroup name="Example" data={example} />
			</SidebarContent>
			<SidebarFooter>
				<NavSecondary items={extra} />
				<NavUser
					user={{
						avatar: '',
						email: 'john_doe@gmail.com',
						name: 'John Doe',
					}}
				/>
			</SidebarFooter>
		</Sidebar>
	)
}
