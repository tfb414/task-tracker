module.exports = {
    client: 'pg', // Indicates that you are using PostgreSQL
    connection: {
        host: process.env.DB_HOST,
        port:  5432, // Use standard PostgreSQL port if not specified
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
    migrations: {
        directory: './src/migrations'
    }
};