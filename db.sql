CREATE DATABASE tailored_bridge CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE tailored_bridge;
-- Fine-grained permission grants for users with time and workflow bounds
DROP TABLE IF EXISTS `entity_rows_stack`;
CREATE TABLE IF NOT EXISTS entity_rows_stack (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    stack_id BIGINT UNSIGNED NOT NULL COMMENT 'Common ID grouping multiple rows',
    stack_name VARCHAR(191) NULL COMMENT 'Descriptive name for the stack',
    entity_type VARCHAR(191) NOT NULL COMMENT 'Collection name (e.g., vendor_invoices)',
    entity_row_id BIGINT UNSIGNED NOT NULL COMMENT 'ID of the entity row',
    `created_at` TIMESTAMP NULL, 

    INDEX idx_stack (stack_id),
    INDEX idx_entity_row (entity_type, entity_row_id),
    INDEX idx_stack_entity (stack_id, entity_type),
    
    UNIQUE KEY unique_stack_row (stack_id, entity_type, entity_row_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `entity_comments_history`;
CREATE TABLE IF NOT EXISTS `entity_comments_history` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `organization_id` VARCHAR(255) NOT NULL,
  `comment_id` CHAR(36),
  `entity_type` VARCHAR(255),
  `entity_id` CHAR(36),
  `user_id` CHAR(36),
  `author_name` VARCHAR(255),
  `comment_text` TEXT,
  `processing_step` VARCHAR(100),
  `unit_price` DECIMAL(15,2),
  `accountable_id` CHAR(36),
  `created_at` TIMESTAMP NULL, 
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `manager_action_logs`;
CREATE TABLE IF NOT EXISTS `manager_action_logs` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `organization_id` VARCHAR(255) NOT NULL,
  `log_id` CHAR(36),
  `accountable_id` CHAR(36),
  `action_type` VARCHAR(255),
  `entity_type` VARCHAR(255),
  `entity_id` CHAR(36),
  `processing_step` VARCHAR(100),
  `unit_price` DECIMAL(15,2),
  `details` TEXT,
  `ip_address` VARCHAR(255),
  `status` VARCHAR(100),
  `user_agent` VARCHAR(255),
  `created_at` TIMESTAMP NULL, 
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `entity_workflow_rules`;
CREATE TABLE IF NOT EXISTS `entity_workflow_rules` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `organization_id` VARCHAR(255) NOT NULL,
  `entity_type` VARCHAR(255),
  `current_step` VARCHAR(255),
  `action_name` VARCHAR(255),
  `rule_type` VARCHAR(100),
  `rule_value` VARCHAR(255),
  `accountable_id` CHAR(36),
  `error_message` VARCHAR(255),
  `is_active` TINYINT(1) DEFAULT 0,
  `created_at` TIMESTAMP NULL, 
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ============================================================================
-- 1. Organizations Table
-- ============================================================================

DROP TABLE IF EXISTS `organizations`;
CREATE TABLE IF NOT EXISTS organizations (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(191) NOT NULL UNIQUE,
    domain VARCHAR(191) NOT NULL,
    email VARCHAR(191) NOT NULL,
    num_users INT NOT NULL DEFAULT 0,
    num_stores INT NOT NULL DEFAULT 0,
    price DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    tenant_id CHAR(36) NOT NULL,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
    INDEX idx_org_name (name),
    INDEX idx_tenant (tenant_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- 2. Users Table
-- ============================================================================
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS users (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
    uuid CHAR(36) NOT NULL UNIQUE,
    first_name VARCHAR(191) NOT NULL,
    last_name VARCHAR(191) NOT NULL,
    email VARCHAR(191) NOT NULL UNIQUE,
    password_hash VARCHAR(191) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'user',
    organization_id BIGINT UNSIGNED NOT NULL,
    entity_id BIGINT UNSIGNED NULL,
    is_active BOOLEAN DEFAULT TRUE,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_users_org (organization_id),
    INDEX idx_users_email (email),
    INDEX idx_users_role (role),
    
    CONSTRAINT fk_users_org FOREIGN KEY (organization_id)
        REFERENCES organizations(id)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
DROP TABLE IF EXISTS authorizations;
-- ============================================================================
-- 3. Authorizations Table
-- ============================================================================

DROP TABLE IF EXISTS `authorizations`;
CREATE TABLE IF NOT EXISTS authorizations (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    
    -- Who grants and who receives
    accountable_id BIGINT UNSIGNED NOT NULL,
    authorized_user_id BIGINT UNSIGNED NOT NULL,
    
    -- What is authorized
    authorized_role VARCHAR(50) NULL,
    authorized_entity VARCHAR(191) NULL,
    authorized_page VARCHAR(191) NULL,
    authorized_actions VARCHAR(255) NULL,
    
    -- Specific entity row(s) authorization
    entity_type VARCHAR(191) NULL,
    entity_row_id BIGINT UNSIGNED NULL,
    entity_rows_stack_id BIGINT UNSIGNED NULL,
    entity_row_processing_step VARCHAR(50) NULL,
    
    -- Time and operation bounds
    authorization_start_date DATETIME,
    authorization_end_date DATETIME NULL,
    authorization_end_operation VARCHAR(50) NULL,
    
    -- Status
    is_active BOOLEAN DEFAULT TRUE,
    notes TEXT NULL,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_auth_user (authorized_user_id),
    INDEX idx_auth_entity (entity_type, entity_row_id),
    INDEX idx_auth_stack (entity_rows_stack_id),
    INDEX idx_auth_active (is_active, authorization_end_date)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Auto-generated
