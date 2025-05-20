import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/home/')({
  component: RouteComponent,
  head: () => ({
		meta:  [
			{ title: `${import.meta.env.VITE_DOCUMENT_TITLE_NAME} - Início` },
		]
	})
})

function RouteComponent() {
  return <p className="p-2 italic">
			Hora de construir algo incrível.
			<br />
			Mas se não for — pelo menos faz bem feito.
		</p>
}
