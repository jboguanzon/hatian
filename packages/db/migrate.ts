import { migrate } from 'drizzle-orm/postgres-js/migrator';
import db from './db';

const migrateDB = async () => {
  console.log('Migrating DB');
  await migrate(db, { migrationsFolder: "./migrations/" })
  console.log('DB Migrated');
}

migrateDB();


