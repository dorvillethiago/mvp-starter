import { pgTable, timestamp, varchar } from 'drizzle-orm/pg-core'

export const usersTable = pgTable('users', {
	id: varchar('id', { length: 255 }).primaryKey(),
	clerkUserId: varchar('clerk_user_id', { length: 255 }).notNull().unique(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export const table = {
	users: usersTable,
}

export type Table = typeof table
