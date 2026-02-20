export default {
   schema: './src/schemas',
   out: './drizzle',
   dialect: 'postgresql',
   dbCredentials: {
       host: '127.0.0.1',
       port: 5433,
       user: 'nodejs_course_admin',
       password: 'my_password',
       database: 'nodejs_course_database',
       ssl: false,
   },
};