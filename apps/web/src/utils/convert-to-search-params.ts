export function convertToSearchParams(
	params: Record<string, unknown>,
): URLSearchParams {
	const searchParams = new URLSearchParams()
	for (const [key, value] of Object.entries(params)) {
		if (value) {
			if (Array.isArray(value)) {
				for (const val of value) {
					searchParams.append(key, val)
				}
			} else if (value instanceof Date) {
				searchParams.append(key, value.toISOString())
			} else {
				searchParams.append(key, String(value))
			}
		}
	}
	return searchParams
}
