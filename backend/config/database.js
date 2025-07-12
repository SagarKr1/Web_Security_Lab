const mysql = require('mysql2');
require('dotenv').config()
// Create the connection pool
const pool = mysql.createPool({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password, // Add your MySQL password here
    database: process.env.database
});

// Convert pool to use promises
const promisePool = pool.promise();

module.exports = promisePool; 