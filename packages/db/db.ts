import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

if (!process.env.SUPABASE_DB_CONNECTION_STRING) {
  throw new Error("SUPABASE_DB_CONNECTION_STRING is missing");
}

console.log(process.env.SUPABASE_DB_CONNECTION_STRING);

const connectionString = process.env.SUPABASE_DB_CONNECTION_STRING;
const client = postgres(connectionString);
const db = drizzle(client, { schema });

export default db;
