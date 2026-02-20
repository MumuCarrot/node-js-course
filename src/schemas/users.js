import { sql } from 'drizzle-orm';
import { pgTable, serial, varchar, timestamp } from 'drizzle-orm/pg-core';


export const users = pgTable('users', {
   id: serial('id').primaryKey(),
   name: varchar('name', { length: 256 }),
   email: varchar('email', { length: 256 }),
   createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`)
});