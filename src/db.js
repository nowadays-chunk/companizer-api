const mysql = require("mysql2/promise");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

console.log("DB Config: Host:", process.env.DB_HOST, "User:", process.env.DB_USER); // Debug log


const DB_HOST = "sql7.freesqldatabase.com";
const DB_PORT = process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306;
const DB_USER =
    process.env.DB_USER && process.env.DB_USER.trim()
        ? process.env.DB_USER.trim()
        : "sql7815947";
const DB_PASSWORD =
    process.env.DB_PASSWORD && process.env.DB_PASSWORD.length
        ? process.env.DB_PASSWORD
        : "mbtpwhmXvB"; // empty password (local dev)

const DB_NAME = process.env.DB_NAME || "sql7815947";

const pool = mysql.createPool({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    waitForConnections: true,
    connectionLimit: 60,
    queueLimit: 0,
});

// Helper query function
async function query(sql, params) {
    const [rows] = await pool.query(sql, params);
    return rows;
}

module.exports = {
    pool,
    query,
};
