export interface ClerkAPIError {
	errors?: { code: string; message: string }[]
}

export function translateClerkError(code: string | undefined): string {
	switch (code) {
		case 'form_identifier_not_found':
			return 'Usuário não encontrado.'
		case 'form_password_incorrect':
			return 'Senha incorreta.'
		case 'form_identifier_not_allowed':
			return 'Este identificador não é permitido.'
		case 'form_password_pwned':
			return 'Esta senha foi comprometida em uma violação de dados. Por favor, escolha outra.'
		case 'form_password_too_short':
			return 'A senha é muito curta.'
		case 'form_identifier_exists':
			return 'Este e-mail já está registrado.'
		case 'form_username_invalid_length':
			return 'O nome de usuário não tem um comprimento válido.'
		case 'form_username_invalid_character':
			return 'O nome de usuário contém caracteres inválidos.'
		case 'form_username_taken':
			return 'Nome de usuário já em uso.'
		case 'form_param_format_invalid':
			return 'Formato de parâmetro inválido.'
		case 'form_param_nil':
			return 'Parâmetro ausente ou nulo.'
		case 'form_code_incorrect':
			return 'O código informado está incorreto.'
		case 'form_code_expired':
			return 'O código expirou. Solicite um novo.'
		case 'form_code_too_many_attempts':
			return 'Muitas tentativas. Por favor, aguarde um momento e tente novamente.'
		case 'identifier_exists':
			return 'Identificador já existe.'
		case 'email_address_exists':
			return 'Este e-mail já está em uso.'
		case 'phone_number_exists':
			return 'Este número de telefone já está em uso.'
		case 'email_address_not_found':
			return 'Endereço de e-mail não encontrado.'
		case 'phone_number_not_found':
			return 'Número de telefone não encontrado.'
		case 'user_not_found':
			return 'Usuário não encontrado.'
		case 'session_not_found':
			return 'Sessão não encontrada ou expirada.'
		case 'token_expired':
			return 'O token expirou.'
		case 'token_invalid':
			return 'Token inválido.'
		case 'token_not_found':
			return 'Token não encontrado.'
		default:
			return 'Ocorreu um erro inesperado. Por favor, tente novamente.'
	}
}
