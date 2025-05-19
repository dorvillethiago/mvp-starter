export function truncateString({
	string,
	length,
}: {
	string: string
	length: number
}) {
	if (string.length > length) {
		return `${string.substring(0, length)}...`
	}
	return string
}
