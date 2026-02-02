const { query } = require('./src/db');

async function createTable() {
    try {
        const sql = `
      CREATE TABLE IF NOT EXISTS documents (
        id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        file_name VARCHAR(255) NOT NULL,
        original_name VARCHAR(255) NOT NULL,
        mime_type VARCHAR(100) NOT NULL,
        size BIGINT UNSIGNED NOT NULL,
        path VARCHAR(255) NOT NULL,
        entity_type VARCHAR(50),
        entity_id VARCHAR(50),
        category VARCHAR(100),
        tags JSON,
        description TEXT,
        uploaded_by BIGINT UNSIGNED NOT NULL,
        organization_id BIGINT UNSIGNED NOT NULL,
        created_at DATETIME NOT NULL,
        INDEX idx_docs_org (organization_id),
        INDEX idx_docs_entity (entity_type, entity_id),
        CONSTRAINT fk_docs_user FOREIGN KEY (uploaded_by)
          REFERENCES users(id) ON DELETE CASCADE,
        CONSTRAINT fk_docs_org FOREIGN KEY (organization_id)
          REFERENCES organizations(id) ON DELETE CASCADE
      ) ENGINE=InnoDB;
    `;
        await query(sql);
        console.log('Table documents created successfully');
        process.exit(0);
    } catch (err) {
        console.error('Error creating table:', err);
        process.exit(1);
    }
}

createTable();
