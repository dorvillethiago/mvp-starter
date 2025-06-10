import { User } from '@/domain/entities/user'
import { UserRepository } from '@/infrastructure/database/repositories/user'

export const createUserUseCase = async (user: User) => {
	const userRepository = new UserRepository()
	await userRepository.create(user)
}
