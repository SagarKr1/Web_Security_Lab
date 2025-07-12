const mysql = require('mysql2');
require('dotenv').config()

// Create connection pool
const pool = mysql.createPool({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password, // Add your MySQL password here
});

async function initializeDatabase() {
    try {
        console.log('Starting database initialization...');

        // Create database if not exists
        await pool.promise().query(`CREATE DATABASE IF NOT EXISTS ${process.env.database}`);
        console.log(`Database ${process.env.database} created or already exists`);

        // Use the database
        await pool.promise().query(`USE ${process.env.database}`);

        // Create users table if not exists
        await pool.promise().query(`
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) ,
                role ENUM('user', 'admin') DEFAULT 'admin'
            )
        `);
        console.log('Users table created or already exists');

        process.exit(0);
    } catch (error) {
        console.error('Error initializing database:', error);
        process.exit(1);
    }
}

// Run the initialization
initializeDatabase(); 