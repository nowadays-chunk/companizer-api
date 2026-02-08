const { pool, query } = require('../src/db');

async function debugSchema() {
    try {
        console.log("Describing purchase_orders...");
        const rows = await query('DESCRIBE purchase_orders');
        console.table(rows);
    } catch (error) {
        console.error("Error describing table:", error);
    } finally {
        pool.end();
    }
}

debugSchema();
