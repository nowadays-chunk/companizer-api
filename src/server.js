const express = require("express");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const mysql = require("mysql2/promise");

console.log(process.env.DB_HOST); // Debugging line
const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_jwt_key_change_me';

const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306;
const DB_USER =
  process.env.DB_USER && process.env.DB_USER.trim()
    ? process.env.DB_USER.trim()
    : "root";
const DB_PASSWORD =
  process.env.DB_PASSWORD && process.env.DB_PASSWORD.length
    ? process.env.DB_PASSWORD
    : "P@ssw0rd"; // empty password (local dev)

const DB_NAME = process.env.DB_NAME || "companizer_db_prod";

const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});


// Helper query function
async function query(sql, params) {
  const [rows] = await pool.execute(sql, params);
  return rows;
}

// Middleware
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"], // adjust
  })
);
app.use(express.json());

// JWT helper
function generateToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

// JWT middleware
function authMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ message: "No token" });

  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    return res.status(401).json({ message: "Invalid token format" });
  }

  const token = parts[1];

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    // { userId, organizationId, role }
    req.user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token invalid or expired" });
  }
}

// ======================================================
// AUTH ROUTES
// ======================================================

// POST /api/auth/register-organization
app.post("/api/auth/register-organization", async (req, res) => {
  const {
    orgName,
    firstName,
    lastName,
    email,
    password,
    domain,
    numUsers,
    numStores,
    totalPrice,
  } = req.body;

  if (
    !orgName ||
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !domain
  ) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Check if user exists
    const existingUsers = await query(
      "SELECT id FROM users WHERE email = ? LIMIT 1",
      [email]
    );
    if (existingUsers.length) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Check if organization name exists
    const existingOrgs = await query(
      "SELECT id FROM organizations WHERE name = ? LIMIT 1",
      [orgName]
    );
    if (existingOrgs.length) {
      return res
        .status(400)
        .json({ message: "Organization with this name already exists" });
    }

    // Create organization
    const tenantId = uuidv4();
    const orgResult = await query(
      `INSERT INTO organizations
       (name, domain, email, num_users, num_stores, price, tenant_id, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, NOW())`,
      [orgName, domain, email, numUsers, numStores, totalPrice, tenantId]
    );
    const organizationId = orgResult.insertId;

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create user (admin)
    const userUuid = uuidv4();
    const userResult = await query(
      `INSERT INTO users
       (uuid, first_name, last_name, email, password_hash, role, organization_id, entity_id, created_at)
       VALUES (?, ?, ?, ?, ?, 'admin', ?, NULL, NOW())`,
      [userUuid, firstName, lastName, email, passwordHash, organizationId]
    );
    const userId = userResult.insertId;

    // Build response objects
    const user = {
      id: userId,
      uuid: userUuid,
      firstName,
      lastName,
      email,
      role: "admin",
      organizationId,
      entityId: null,
      createdAt: new Date(),
    };

    const organization = {
      id: organizationId,
      name: orgName,
      domain,
      email,
      numUsers,
      numStores,
      price: totalPrice,
      tenantId,
      createdAt: new Date(),
    };

    const token = generateToken({
      userId,
      organizationId,
      role: "admin",
    });

    return res.status(201).json({
      token,
      user,
      organization,
    });
  } catch (err) {
    console.error("Error register-organization:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// POST /api/auth/login
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Email and password required" });

  try {
    const users = await query("SELECT * FROM users WHERE email = ? LIMIT 1", [
      email,
    ]);
    if (!users.length) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const userRow = users[0];
    const passwordOk = await bcrypt.compare(password, userRow.password_hash);
    if (!passwordOk) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const orgRows = await query(
      "SELECT * FROM organizations WHERE id = ? LIMIT 1",
      [userRow.organization_id]
    );
    const org = orgRows[0];

    const user = {
      id: userRow.id,
      uuid: userRow.uuid,
      firstName: userRow.first_name,
      lastName: userRow.last_name,
      email: userRow.email,
      role: userRow.role,
      organizationId: userRow.organization_id,
      entityId: userRow.entity_id,
      createdAt: userRow.created_at,
    };

    const organization = {
      id: org.id,
      name: org.name,
      domain: org.domain,
      email: org.email,
      numUsers: org.num_users,
      numStores: org.num_stores,
      price: org.price,
      tenantId: org.tenant_id,
      createdAt: org.created_at,
    };

    const token = generateToken({
      userId: user.id,
      organizationId: organization.id,
      role: user.role,
    });

    return res.json({ token, user, organization });
  } catch (err) {
    console.error("Error login:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// ======================================================
// ORG SUBCOLLECTION-LIKE ROUTES (using org_items JSON)
// ======================================================

// ======================================================
// ORG "SUBCOLLECTION" ROUTES — REAL TABLES PER COLLECTION
// /api/subcollections/:collectionName -> table = collectionName
// ======================================================

// tiny helper to avoid SQL injection via table/column name
const isSafeIdentifier = (name) => /^[a-zA-Z0-9_]+$/.test(name);

// GET all rows for a collection, for current org
app.get("/api/subcollections/:collectionName", authMiddleware, async (req, res) => {
  const { collectionName } = req.params;
  const { organizationId } = req.user;

  if (!isSafeIdentifier(collectionName)) {
    return res.status(400).json({ message: "Invalid collection name" });
  }

  try {
    const sql = `
      SELECT *
      FROM ${collectionName}
      WHERE organization_id = ?
    `;
    const rows = await query(sql, [organizationId]);

    res.json(rows);
  } catch (err) {
    console.error("Error fetching documents:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// POST create row in a collection
app.post("/api/subcollections/:collectionName", authMiddleware, async (req, res) => {
  const { collectionName } = req.params;
  const { organizationId } = req.user;
  const body = req.body || {};

  if (!isSafeIdentifier(collectionName)) {
    return res.status(400).json({ message: "Invalid collection name" });
  }

  try {
    // Never trust client org id / id
    const data = { ...body };
    delete data.id;
    delete data.organization_id;
    data.organization_id = organizationId;

    const columns = Object.keys(data);
    if (columns.length === 0) {
      return res.status(400).json({ message: "No data provided" });
    }

    const placeholders = columns.map(() => "?").join(", ");
    const values = columns.map((c) => data[c]);

    const sql = `
      INSERT INTO ${collectionName} (${columns.join(", ")})
      VALUES (${placeholders})
    `;

    const result = await query(sql, values);

    res.status(201).json({ id: result.insertId });
  } catch (err) {
    console.error("Error adding document:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// PUT update a row by id
app.put(
  "/api/subcollections/:collectionName/:documentId",
  authMiddleware,
  async (req, res) => {
    const { collectionName, documentId } = req.params;
    const { organizationId } = req.user;
    const body = req.body || {};

    if (!isSafeIdentifier(collectionName)) {
      return res.status(400).json({ message: "Invalid collection name" });
    }

    try {
      const data = { ...body };
      delete data.id;
      delete data.organization_id;

      const columns = Object.keys(data);
      if (columns.length === 0) {
        return res.status(400).json({ message: "No fields to update" });
      }

      const setClause = columns.map((c) => `${c} = ?`).join(", ");
      const values = columns.map((c) => data[c]);

      const sql = `
        UPDATE ${collectionName}
        SET ${setClause}
        WHERE id = ? AND organization_id = ?
      `;

      await query(sql, [...values, documentId, organizationId]);

      res.json({ message: "Updated" });
    } catch (err) {
      console.error("Error updating document:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

// DELETE row by id
app.delete(
  "/api/subcollections/:collectionName/:documentId",
  authMiddleware,
  async (req, res) => {
    const { collectionName, documentId } = req.params;
    const { organizationId } = req.user;

    if (!isSafeIdentifier(collectionName)) {
      return res.status(400).json({ message: "Invalid collection name" });
    }

    try {
      const sql = `
        DELETE FROM ${collectionName}
        WHERE id = ? AND organization_id = ?
      `;
      await query(sql, [documentId, organizationId]);

      res.json({ message: "Deleted" });
    } catch (err) {
      console.error("Error deleting document:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

// GET row by id
app.get(
  "/api/subcollections/:collectionName/:documentId",
  authMiddleware,
  async (req, res) => {
    const { collectionName, documentId } = req.params;
    const { organizationId } = req.user;

    if (!isSafeIdentifier(collectionName)) {
      return res.status(400).json({ message: "Invalid collection name" });
    }

    try {
      const sql = `
        SELECT *
        FROM ${collectionName}
        WHERE id = ? AND organization_id = ?
        LIMIT 1
      `;
      const rows = await query(sql, [documentId, organizationId]);

      if (!rows.length) {
        return res.status(404).json({ message: "Document not found" });
      }

      res.json(rows[0]);
    } catch (err) {
      console.error("Error fetching document:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

// SEARCH: field == value
app.get(
  "/api/subcollections/:collectionName/search",
  authMiddleware,
  async (req, res) => {
    const { collectionName } = req.params;
    const { field, value } = req.query;
    const { organizationId } = req.user;

    if (!isSafeIdentifier(collectionName)) {
      return res.status(400).json({ message: "Invalid collection name" });
    }
    if (!field || typeof value === "undefined") {
      return res
        .status(400)
        .json({ message: "field and value query params are required" });
    }
    if (!isSafeIdentifier(field)) {
      return res.status(400).json({ message: "Invalid field name" });
    }

    try {
      const sql = `
        SELECT *
        FROM ${collectionName}
        WHERE organization_id = ?
          AND ${field} = ?
      `;
      const rows = await query(sql, [organizationId, value]);

      res.json(rows);
    } catch (err) {
      console.error("Error searching documents:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

// SEARCH "array" version — here we just treat it as normal field = value,
// or you can adapt to use JSON columns / separate link tables if needed.
app.get(
  "/api/subcollections/:collectionName/search-array",
  authMiddleware,
  async (req, res) => {
    const { collectionName } = req.params;
    const { field, value } = req.query;
    const { organizationId } = req.user;

    if (!isSafeIdentifier(collectionName)) {
      return res.status(400).json({ message: "Invalid collection name" });
    }
    if (!field || typeof value === "undefined") {
      return res
        .status(400)
        .json({ message: "field and value query params are required" });
    }
    if (!isSafeIdentifier(field)) {
      return res.status(400).json({ message: "Invalid field name" });
    }

    try {
      // For now same as search — you can later change to JSON/relations if needed
      const sql = `
        SELECT *
        FROM ${collectionName}
        WHERE organization_id = ?
          AND ${field} = ?
      `;
      const rows = await query(sql, [organizationId, value]);

      res.json(rows);
    } catch (err) {
      console.error("Error searching (array) documents:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

// ======================================================
// START
// ======================================================
app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
