export function parseParam({
	value,
	type,
}: {
	value: unknown
	type: string
}): any {
	if (!value) return undefined

	const parseValue = (v: unknown) => {
		switch (type) {
			case 'Date':
				return new Date(v as string | number)
			case 'Number':
				return Number(v)
			case 'String':
				return String(v)
			default:
				throw new Error(`Unsupported type: ${type}`)
		}
	}

	if (Array.isArray(value)) {
		return value.map(parseValue)
	}

	return parseValue(value)
}
