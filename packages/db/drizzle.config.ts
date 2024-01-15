import type { Config } from 'drizzle-kit';

export default {
  schema: './schema.ts',
  out: './migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.SUPABASE_DB_CONNECTION_STRING || 'postgres://postgres:password@localhost:5432/postgres',
  },
} satisfies Config;
