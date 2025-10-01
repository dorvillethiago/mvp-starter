import Elysia, { t } from 'elysia'

export const helloController = new Elysia().get(
	'/',
	() => 'We are up and running!' as const,
	{ response: t.Literal('We are up and running!') },
)
