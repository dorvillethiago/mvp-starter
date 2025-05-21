import { Loader2 } from 'lucide-react'

export function ScreenLoader() {
	return (
		<div className="grid size-full place-items-center">
			<Loader2 className="size-24 animate-spin text-primary" />
		</div>
	)
}
