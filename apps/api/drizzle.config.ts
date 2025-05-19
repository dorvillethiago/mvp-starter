import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './src/infrastructure/database/drizzle',
  schema: './src/infrastructure/database/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: (() => {
      if (!process.env.DATABASE_URL) {
        throw new Error('DATABASE_URL environment variable is not set');
      }
      return process.env.DATABASE_URL;
    })(),
  },
});
