const express = require("express");
const router = express.Router();

// Basic server-side check for admin credentials (mirrors client-side defaults)
router.post("/login", (req, res) => {
  const { email, password } = req.body || {};
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@example.com";
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "password123";

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const token = Buffer.from(
      JSON.stringify({ email, iat: Date.now() })
    ).toString("base64");
    return res.json({ ok: true, token });
  }

  return res.status(401).json({ ok: false, message: "Invalid credentials" });
});

module.exports = router;
