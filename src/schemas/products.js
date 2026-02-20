import { sql } from 'drizzle-orm';
import { integer, pgTable, serial, varchar, timestamp } from 'drizzle-orm/pg-core';
import { users } from './users.js';

export const products = pgTable('products', {
   id: serial('id').primaryKey(),
   name: varchar('name', { length: 256 }),
   brand: varchar('brand', { length: 256 }),
   userId: integer('user_id').references(() => users.id),
   createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`)
});