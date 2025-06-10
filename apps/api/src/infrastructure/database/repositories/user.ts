import { User } from '@/domain/entities/user'
import { eq } from 'drizzle-orm'
import { db } from '..'
import { usersTable } from '../schema'

export class UserRepository {
	async create(user: User): Promise<void> {
		await db.insert(usersTable).values({
			id: user.id,
			clerkUserId: user.clerkId,
		})
	}

	async save(user: User): Promise<void> {
		await db
			.update(usersTable)
			.set({
				updatedAt: new Date(),
			})
			.where(eq(usersTable.id, user.id))
	}
}
