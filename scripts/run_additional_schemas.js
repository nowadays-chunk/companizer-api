const { pool } = require('../src/db');
const fs = require('fs');
const path = require('path');

async function runSchemas() {
    try {
        const schemaPath = path.resolve(__dirname, '../../financial_additional_schemas.sql');
        const sql = fs.readFileSync(schemaPath, 'utf8');

        const statements = sql
            .split(';')
            .map(stmt => stmt.trim())
            .filter(stmt => stmt.length > 0);

        console.log(`Found ${statements.length} SQL statements to execute.`);

        const connection = await pool.getConnection();
        try {
            for (const statement of statements) {
                await connection.query(statement);
            }
            console.log("Additional financial schemas executed successfully.");
        } finally {
            connection.release();
        }

    } catch (error) {
        console.error("Error executing schemas:", error);
    } finally {
        pool.end();
    }
}

runSchemas();
