const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_jwt_key_change_me';

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
        req.user = {
            id: payload.accountable_id,
            accountable_id: payload.accountable_id,
            organization_id: payload.organization_id,
            role: payload.role
        };

        next();
    } catch (err) {
        return res.status(401).json({ message: "Token invalid or expired" });
    }
}

function generateToken(payload) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
}

module.exports = { authMiddleware, generateToken };
