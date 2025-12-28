CREATE DATABASE companizer_db_prod CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE companizer_db_prod;

CREATE TABLE organizations (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(191) NOT NULL UNIQUE,
  domain VARCHAR(191) NOT NULL,
  email VARCHAR(191) NOT NULL,
  num_users INT NOT NULL,
  num_stores INT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  tenant_id CHAR(36) NOT NULL,
  created_at DATETIME NOT NULL,
  INDEX idx_org_name (name)
) ENGINE=InnoDB;

CREATE TABLE users (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  uuid CHAR(36) NOT NULL,
  first_name VARCHAR(191) NOT NULL,
  last_name VARCHAR(191) NOT NULL,
  email VARCHAR(191) NOT NULL UNIQUE,
  password_hash VARCHAR(191) NOT NULL,
  role VARCHAR(50) NOT NULL,
  organization_id BIGINT UNSIGNED NOT NULL,
  entity_id BIGINT UNSIGNED NULL,
  created_at DATETIME NOT NULL,
  INDEX idx_users_org (organization_id),
  CONSTRAINT fk_users_org FOREIGN KEY (organization_id)
    REFERENCES organizations(id) ON DELETE CASCADE
) ENGINE=InnoDB;