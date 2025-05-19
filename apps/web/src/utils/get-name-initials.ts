export function getNameInitials(name: string): string {
	const nameParts = name.trim().split(/\s+/)
	if (nameParts.length === 0) return ''
	const firstInitial = nameParts[0].charAt(0)
	const lastInitial =
		nameParts.length > 1 ? nameParts[nameParts.length - 1].charAt(0) : ''
	return `${firstInitial}${lastInitial}`
}
