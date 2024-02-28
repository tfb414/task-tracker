module.exports = {
  client: 'pg', // Indicates that you are using PostgreSQL
  connection: {
    host: process.env.DB_HOST || '127.0.0.1',
    port:  5432, // Use standard PostgreSQL port if not specified
    user: process.env.DB_USER || 'timmy',
    password: process.env.DB_PASSWORD || '@tHD198904141',
    database: process.env.DB_NAME || 'tasks'
  },
  migrations: {
    directory: './src/migrations'
  }
};
