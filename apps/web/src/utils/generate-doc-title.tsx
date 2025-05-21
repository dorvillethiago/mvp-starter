export function generateDocumentTitle(
	title: string,
	prefix = import.meta.env.VITE_DOCUMENT_TITLE_NAME,
) {
	return `${title} - ${prefix}`
}
