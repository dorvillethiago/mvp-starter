import Elysia from 'elysia'

export const helloController = new Elysia().get(
	'/',
	() => 'We are up and running!',
)
