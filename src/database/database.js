import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';
import * as schema from '../schemas/index.js';

const client = new Client({
   host: '127.0.0.1',
   port: 5433,
   user: 'nodejs_course_admin',
   password: 'my_password',
   database: 'nodejs_course_database',
});

await client.connect();
export const session = drizzle(client, { schema });