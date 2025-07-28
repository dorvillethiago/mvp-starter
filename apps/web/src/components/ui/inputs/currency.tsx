import { NumericFormat } from 'react-number-format'
import { Input } from '../input'

type Template = 'dollar' | 'real'

function getTemplateConsult(template: Template) {
	switch (template) {
		case 'dollar':
			return {
				thousandSeparator: ',',
				decimalSeparator: '.',
				prefix: '$ ',
				decimalScale: 2,
				placeholder: '0.00',
			}
		case 'real':
			return {
				thousandSeparator: '.',
				decimalSeparator: ',',
				prefix: 'R$ ',
				decimalScale: 2,
				placeholder: '0,00',
			}
	}
}

export function CurrencyInput({
	template = 'dollar',
	...props
}: { template?: Template } & React.ComponentProps<typeof NumericFormat>) {
	const templateConsult = getTemplateConsult(template)

	return <NumericFormat {...templateConsult} {...props} customInput={Input} />
}
