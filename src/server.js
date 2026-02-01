const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const { query } = require("./db");


const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_jwt_key_change_me';



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
    // Expecting payload: { accountable_id, organization_id, role }

    req.user = {
      id: payload.accountable_id,              // <-- guaranteed user id
      accountable_id: payload.accountable_id,          // <-- keep both for convenience
      organization_id: payload.organization_id,
      role: payload.role
    };

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
    const organization_id = orgResult.insertId;

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create user (admin)
    const userUuid = uuidv4();
    const userResult = await query(
      `INSERT INTO users
       (uuid, first_name, last_name, email, password_hash, role, organization_id, entity_id, created_at)
       VALUES (?, ?, ?, ?, ?, 'admin', ?, NULL, NOW())`,
      [userUuid, firstName, lastName, email, passwordHash, organization_id]
    );
    const accountable_id = userResult.insertId;

    // Build response objects
    const user = {
      id: accountable_id,
      uuid: userUuid,
      firstName,
      lastName,
      email,
      role: "admin",
      organization_id,
      entityId: null,
      createdAt: new Date(),
    };

    const organization = {
      id: organization_id,
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
      accountable_id,
      organization_id,
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
      organization_id: userRow.organization_id,
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
      accountable_id: user.id,
      organization_id: organization.id,
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
  const { organization_id } = req.user;

  if (!isSafeIdentifier(collectionName)) {
    return res.status(400).json({ message: "Invalid collection name" });
  }

  try {
    // Pagination
    let { limit, offset } = req.query;
    limit = parseInt(limit);
    offset = parseInt(offset);

    let sql = `
      SELECT *
      FROM ${collectionName}
      WHERE organization_id = ?
    `;

    let params = [organization_id];

    if (collectionName === 'organizations') {
      sql = `
      SELECT *
      FROM ${collectionName}
    `;

      params = []
    }


    if (!isNaN(limit) && !isNaN(offset)) {
      sql += " LIMIT ? OFFSET ?";
      params.push(limit, offset);
    }

    const rows = await query(sql, params);

    // Optional: Get total count for frontend pagination UI
    let countSql = `SELECT COUNT(*) as total FROM ${collectionName} WHERE organization_id = ?`;

    if (collectionName === 'organizations') {
      countSql = `SELECT COUNT(*) as total FROM ${collectionName}`;
    }

    const countResult = await query(countSql, [organization_id]);
    const total = countResult[0].total;

    res.set('X-Total-Count', total);
    res.json(rows);
  } catch (err) {
    console.error("Error fetching documents:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// POST create row in a collection
app.post("/api/subcollections/:collectionName", authMiddleware, async (req, res) => {
  const { collectionName } = req.params;
  const { organization_id, accountable_id } = req.user;
  const body = req.body || {};

  if (!isSafeIdentifier(collectionName)) {
    return res.status(400).json({ message: "Invalid collection name" });
  }

  try {
    // Never trust client org id / id
    const data = { ...body };
    delete data.id;
    delete data.organization_id;

    if (collectionName !== 'organizations') {
      data.organization_id = organization_id;

      if (collectionName !== 'users') {
        data.accountable_id = accountable_id;
      }
    }


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

    console.log(sql, values); // Debugging line

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
    const { organization_id } = req.user;
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

      await query(sql, [...values, documentId, organization_id]);

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
    const { organization_id } = req.user;

    if (!isSafeIdentifier(collectionName)) {
      return res.status(400).json({ message: "Invalid collection name" });
    }

    try {
      const sql = `
        DELETE FROM ${collectionName}
        WHERE id = ? AND organization_id = ?
      `;
      await query(sql, [documentId, organization_id]);

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
    const { organization_id } = req.user;

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
      const rows = await query(sql, [documentId, organization_id]);

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
    const { organization_id } = req.user;

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
      const rows = await query(sql, [organization_id, value]);

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
    const { organization_id } = req.user;

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
      const rows = await query(sql, [organization_id, value]);

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
