import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
	component: Index,
})

function Index() {
	return (
		<p className="p-2 italic">
			Time to build something amazing.
			<br />
			And if it isn't — at least keep it maintainable.
		</p>
	)
}
