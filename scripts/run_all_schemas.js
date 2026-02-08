const { query, pool } = require('../src/db');
const fs = require('fs');
const path = require('path');

async function runSchemas() {
    try {
        const schemaPath = path.resolve(__dirname, '../../all_schemas.sql');
        const sql = fs.readFileSync(schemaPath, 'utf8');

        // Split by semicolon, but handle cases where semicolon is inside strings if needed.
        // For simplicity, assuming standard splitting is enough for this file.
        // filtering out empty statements.
        const statements = sql.split(';').filter(stmt => stmt.trim() !== '');

        console.log(`Found ${statements.length} SQL statements to execute.`);

        for (const statement of statements) {
            if (statement.trim()) {
                await query(statement);
            }
        }

        console.log("All schemas executed successfully.");

    } catch (error) {
        console.error("Error executing schemas:", error);
    } finally {
        pool.end();
    }
}

runSchemas();
