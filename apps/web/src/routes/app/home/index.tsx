import { FadeIn } from '@/lib/motion/fade-in'
import { generateDocumentTitle } from '@/utils/generate-doc-title'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/home/')({
	component: RouteComponent,
	head: () => ({
		meta: [{ title: generateDocumentTitle('Início') }],
	}),
})

function RouteComponent() {
	return (
		<FadeIn className="p-2 italic">
			Hora de construir algo incrível.
			<br />
			Mas se não for — pelo menos faz bem feito.
		</FadeIn>
	)
}
