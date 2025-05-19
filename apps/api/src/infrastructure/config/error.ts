export class HttpException extends Error {
	constructor(
		public data: {
			code: number
			message: string
		},
	) {
		super(data.message)
		this.data = data
	}
}

export const errorHandler = ({ error, set }: any) => {
	if (error instanceof HttpException) {
		set.status = error.data.code
		return error.data.message
	}
}
