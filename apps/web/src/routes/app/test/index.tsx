import { FadeIn } from '@/lib/motion/fade-in'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/test/')({
	component: RouteComponent,
})

function RouteComponent() {
	return <FadeIn>Hello "/app/test/"!</FadeIn>
}
